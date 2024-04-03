import { createContext, useReducer } from 'react'

export const QuestsContext = createContext()


export const questsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_WORKOUTS':
            return {
                quests: action.payload
            }
        case 'CREATE_WORKOUT':
            return {
                quests: [action.payload, ...state.quests]
            }
        case 'UPDATE_TASK':
            return {
                tasks: [...state.tasks]
            }
        case 'DELETE_WORKOUT':
            return {
                quests: state.quests.filter((w) => w._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const QuestsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(questsReducer, {
        quests: null
    })

    return (
        <QuestsContext.Provider value={{ ...state, dispatch }}>
            {children}
        </QuestsContext.Provider>
    )
}