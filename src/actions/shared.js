import API from "goals-todos-api";

export const RECEIVE_DATA = "RECEIVE_DATA"

export function receiveDataAction(todos, goals) {
    return {
        type: RECEIVE_DATA,
        todos,
        goals,
    };
};


export function handleInitialData() {
    return async (dispatch) => {
        const [todos, goals] = await Promise.all([API.fetchTodos(), API.fetchGoals()]).then(
            ([todos, goals]) => {
                dispatch(receiveDataAction(todos, goals));
            }
        );
    };
}