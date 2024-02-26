'use client'

import { hasSufficientContrast } from '@/utils/colors'
import { LOCAL_STORAGE_KEY } from '@/utils/config'
import {
  Dispatch,
  PropsWithChildren,
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react'

type AppState = {
  q: string
  color: string
  size: number
  darkMode: boolean
}

type ActionType = 'SEARCH' | 'COLOR' | 'SIZE' | 'DARK' | 'POPULATE_FROM_STORAGE'

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
    case 'POPULATE_FROM_STORAGE':
      return { ...state, ...action.data }
    default:
      return state
  }
}

const Context = ({ children }: PropsWithChildren) => {
  const [isInitialLoad, setIsInitialLoad] = useState(true)
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const storage = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (isInitialLoad) {
      if (storage) {
        dispatch({ type: 'POPULATE_FROM_STORAGE', data: JSON.parse(storage) })
      }
      setIsInitialLoad(false)
    }
    if (!isInitialLoad) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state))
    }
  }, [state, isInitialLoad])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export default Context
