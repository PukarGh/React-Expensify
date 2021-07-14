import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import {addExpense} from "../actions/expenses";

class Create extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>Add Expense</h3>
                <ExpenseForm
                    onSubmit={(expense) => {
                        this.props.dispatch(addExpense(expense));
                        this.props.history.push('/');
                    }}
                />
            </div>
        );
    }
}

export default connect()(Create)