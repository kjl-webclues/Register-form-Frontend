export  const initialState = null;

//login logout toggle
export const reducer = (state, action) => {
    if (action.type === "user") {
        return action.payload;
    }
    return state;

}

