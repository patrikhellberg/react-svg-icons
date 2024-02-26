export const appUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://icons.hellberg.io'
    : 'http://localhost:3000'

export const LOCAL_STORAGE_KEY = 'hellberg-icons-state'
