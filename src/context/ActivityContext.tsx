import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { ActivityActions, activityReducer, ActivityState, initialState } from "../reducers/activity-reducer";

type ActivityroviderProps = {
    children: ReactNode
}

type ActivityContextProps = {
    state: ActivityState,
    dispatch: Dispatch<ActivityActions>
}

export const ActivityContext = createContext<ActivityContextProps>(null!)

export const Activityrovider = ({children}: ActivityroviderProps) => {

    const [ state, dispatch ] = useReducer(activityReducer, initialState)

    return (
        <ActivityContext.Provider value= {{
            state,
            dispatch
        }}>
            {children}
        </ActivityContext.Provider>
    )
}