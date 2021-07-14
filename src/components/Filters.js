import React from "react";
import { connect } from "react-redux";
import {setFilter} from "../actions/filters";

const Filters = (props) => (
    <div>
        <input
            type="text"
            defaultValue={props.filters.text}
            onChange={e => {
                props.dispatch(setFilter({
                    text: e.target.value
                }))
            }}
        />

        <select
            value={props.filters.sortBy}
            onChange={e => {
                props.dispatch(setFilter({
                    sortBy: e.target.value
                }))
            }}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};
export default connect(mapStateToProps)(Filters);