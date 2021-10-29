import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import {startAddExpense} from "../actions/expenses";

class Create extends React.Component{
    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <h3>Add New Expense</h3>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(Create)