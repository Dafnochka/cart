export default function reducer(state=[],
                                action) {

    switch (action.type) {
        case "FETCH_DATA": {
            return [...action.payload]
        }

        case "CHECK": {
            const updatedState = state.map(element => {
                if (element.id === action.payload) {
                    element.checked = !element.checked;
                }
                return element;
            });
            
            return updatedState;
        }
        default:
            return state;
    }
}