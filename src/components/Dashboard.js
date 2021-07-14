import React from "react";
import ExpenseList from "./ExpenseList";
import Filters from "./Filters";

export default class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <p>This is app!</p>
                <Filters />
                <ExpenseList />
            </div>
        )
    }
}