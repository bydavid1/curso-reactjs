import { actions } from "../actions/index"

const reducer = (state, action) => {
    let newState = {}
    switch(action.type) {
        case actions.setFavorite:

            const exist = state.lists.mylist.find(item => item.id === action.payload.id)
            if (exist) return {...state}

            newState = {
                ...state,
                lists : {...state.lists, mylist : [...state.lists.mylist, action.payload]}
            }

            console.log(newState)
            return newState
        
        case actions.deleteFavorite:
            newState = {
                ...state,
                lists : {...state.lists, mylist : state.lists.mylist.filter(items => items.id !== action.payload)}
            }

            console.log(newState)
            return newState

        case actions.loginRequest:
            newState = {
                ...state,
                user: action.payload
            }

            console.log(newState)
            return newState

        case actions.logoutRequest:
            return {
                ...state,
                user: action.payload,
            }
        default:
             return state
    }
}

export default reducer