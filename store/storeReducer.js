const types = {
    onSelectProfile: 'select- profile'
}


const initialStore = {
    profile: '',
}

const storeReducer = (state, action) => {
    switch (action.type) {
        case types.onSelectProfile: 
            return {
                ...state,
                profile: action.payload
            }
        default:
            return state;
    }
}

export {initialStore}
export {types}
export default storeReducer;