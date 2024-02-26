'use client'

import { hasSufficientContrast } from '@/utils/colors'
import { Dispatch, PropsWithChildren, createContext, useReducer } from 'react'

type AppState = {
  q: string
  color: string
  size: number
  darkMode: boolean
}

type ActionType = 'SEARCH' | 'COLOR' | 'SIZE' | 'DARK'

type AppAction = {
  type: ActionType
  data: any
}

const initialState: AppState = {
  q: '',
  color: '#000000',
  size: 40,
  darkMode: false,
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
    case 'DARK':
      let nextColor = state.color
      const nextBackground = action.data ? '#000000' : '#f3f4f6'
      const shouldUpdateNextColor = !hasSufficientContrast(
        state.color,
        nextBackground
      )
      if (shouldUpdateNextColor) {
        nextColor = action.data ? '#FFFFFF' : '#000000'
      }
      return {
        ...state,
        darkMode: action.data,
        color: nextColor,
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
