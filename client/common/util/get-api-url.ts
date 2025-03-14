import {serverOnly$} from 'vite-env-only/macros'

export const getApiUrl = () => {
  return (
    serverOnly$(`http://${process.env.HOST}:${process.env.PORT}/api`) ?? '/api'
  )
}
