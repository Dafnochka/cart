import data from './data'


export function getData() {
    return {
        type: "FETCH_DATA",
        payload: data
    }
}
export function check(id) {
    return {
        type: "CHECK",
        payload: id
    }
}