import { Dispatch, PropsWithChildren, createContext, useReducer } from 'react'

type AppState = {
  q: string
}

type ActionType = 'SEARCH'

type AppAction = {
  type: ActionType
  data: any
}

const initialState = {
  q: '',
}

export const AppContext = createContext<{
  state: AppState
  dispatch: Dispatch<AppAction>
}>({
  state: initialState,
  dispatch: () => {},
})

const reducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    case 'SEARCH':
      return {
        ...state,
        q: action.data,
      }
    default:
      return state
  }
}

const Context = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export default Context
