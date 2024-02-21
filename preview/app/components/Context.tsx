import { Dispatch, PropsWithChildren, createContext, useReducer } from 'react'

type AppState = {
  q: string
  color: string
  size: number
}

type ActionType = 'SEARCH' | 'COLOR' | 'SIZE'

type AppAction = {
  type: ActionType
  data: any
}

const initialState: AppState = {
  q: '',
  color: '#000000',
  size: 40,
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
    case 'COLOR':
      return {
        ...state,
        color: action.data,
      }
    case 'SIZE':
      return {
        ...state,
        size: action.data,
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