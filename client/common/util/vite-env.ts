import {clientOnly$, serverOnly$} from 'vite-env-only/macros'

export const isServer = serverOnly$(true) ?? false
export const isClient = clientOnly$(true) ?? false
