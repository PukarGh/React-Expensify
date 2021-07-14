const defaultFilter = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

export default (state = defaultFilter, action) => {
    switch (action.type){
        case 'UPDATE_FILTER':
            return {
                ...state,
                ...action.updates
            }
        default:
            return state;
    }
};
