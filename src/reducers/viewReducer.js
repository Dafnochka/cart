export default function reducer(state = {
    view: 'day',
    chartType: "ColumnChart",
    brand: 'Guketleva task'
}, action) {
    let chartType = "ColumnChart";

    switch (action.type) {
        case "SET_VIEW": {
            switch (action.payload) {
                case "day": {
                    chartType = "LineChart";
                    break;
                }
                case 'month': {
                    chartType = "ColumnChart";
                    break;
                }
                case 'year': {
                    chartType = "ColumnChart";
                    break;
                }
                default:
                    break;
            }

            return {...state, view: action.payload, chartType: chartType};
        }
        default:
            break;
    }

    return state;
}