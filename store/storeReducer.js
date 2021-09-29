const types = {
    onChangeTheme: 'change - theme'
}


const initialStore = {
    theme: 'light',
}

const storeReducer = (state, action) => {
    switch (action.type) {
        case types.onChangeTheme: 
            return {
                ...state,
                theme: action.payload
            }
        default:
            return state;
    }
}

export {initialStore}
export {types}
export default storeReducer;