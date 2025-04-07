import { useReducer } from "react"

interface IConversation{
    participants : Set<string>
    messages : IMessage[]
}

interface IMessage{
    sender : string
    date : string
    text : string
}

export default function useChatReducer(){
    function conversationReducer(state : IConversation, action : TAction){
        switch(action.type){
            case ActionType.USER_JOIN : {
                const newState = {...state}
                newState.participants.add(action.payload.user)
                return {...newState}
            }

            case ActionType.USER_LEAVE : {
                const newState = {...state}
                newState.participants.delete(action.payload.user)
                return {...newState}
            }

            case ActionType.NEW_MESSAGE : {
                const newState = {...state}
                newState.messages.push(action.payload.message)
                return {...state}
            }

            default : return {...state}
        }
    }

    const [conversationState, dispatch] = useReducer(conversationReducer, {participants: new Set<string>(), messages:[]})

    return {conversationState, dispatch}
}

export type reducerDispatchType = React.Dispatch<{type: string, payload: {user : string} | number[]}>

export enum ActionType {
    USER_JOIN = "USER_JOIN",
    USER_LEAVE = "USER_LEAVE",
    NEW_MESSAGE = "NEW_MESSAGE",
}

export type TAction = 
    | { type: ActionType.USER_JOIN; payload: {user : string}; }
    | { type: ActionType.USER_LEAVE; payload: {user : string}; }
    | { type: ActionType.NEW_MESSAGE; payload: {message : IMessage}; }
;