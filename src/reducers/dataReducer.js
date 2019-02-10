export default function reducer(state={data:[]},
                                action) {

    switch (action.type) {
        case "FETCH_DATA": {
            return {data: action.payload}
        }

        case "CHECK": {
            let checked =state.data[action.payload].checked;
            let newData={...state};
            newData.data[action.payload].checked=!checked;
            return {
                ...newData
            }
        }
        default:
            break;
    }

    return state
}