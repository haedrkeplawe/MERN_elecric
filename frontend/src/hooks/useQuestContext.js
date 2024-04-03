import { QuestsContext } from '../context/QuestContext'
import { useContext } from 'react'

export const useQuestContext = () => {
    const context = useContext(QuestsContext)

    if (!context) {
        throw Error('useQuestContext must be used inside an QuestContextProvider')
    }

    return context
}