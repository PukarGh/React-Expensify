import React from "react";
import moment from "moment";

import 'react-dates/initialize'
import { SingleDatePicker } from "react-dates";
import 'react-dates/lib/css/_datepicker.css';

class ExpenseForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: this.props.expense ? this.props.expense.title : '',
            description: this.props.expense ? this.props.expense.description : '',
            amount: this.props.expense ? this.props.expense.amount / 100 : '',
            createdAt: this.props.expense ? moment(this.props.expense.createdAt) : moment(),
            calenderFocused: false,
            error: null,
        };
    }

    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({title}))
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}))
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d+(\.\d{0,2})?$/)){
            this.setState(() => ({amount}))
        }
    }

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({createdAt}))
        }
    }

    onFocusChange = ({focused}) => {
        this.setState(() => ({calenderFocused: focused}))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.title || !this.state.amount){
            this.setState(() => ({
                error: 'Please provide all the values'
            }))
        } else {
            this.setState(() => ({
                error: null
            }))

            this.props.onSubmit({
                title: this.state.title,
                amount: parseFloat(this.state.amount) * 100,
                description: this.state.description,
                createdAt: this.state.createdAt.valueOf(),
            })
        }
    }


    render() {
        return (
            <div>
                {this.state.error &&
                    <span style={{color: 'red'}}>{this.state.error}</span>
                }
                <form onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.title}
                        onChange={this.onTitleChange}
                        type="text"
                        placeholder="Enter title"
                        autoFocus/> <br/>

                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />

                    <textarea
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                        placeholder="Expense Description"
                    >
                    </textarea> <br/>


                    <input
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                        type="text"
                        placeholder="Expense Amount"/>

                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}

export default ExpenseForm;