import React, { useState } from "react"

export const SOSChatContext = React.createContext({
  channel: null,
  setChannel: (_channel: any) => {
    // do nothing
  },
  thread: null,
  setThread: (_thread: any) => {
    // do nothing
  },
})

export const SOSChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [channel, setChannel] = useState()
  const [thread, setThread] = useState()

  return (
    <SOSChatContext.Provider value={{ channel, setChannel, thread, setThread }}>
      {children}
    </SOSChatContext.Provider>
  )
}

export const useSOSChatContext = () => React.useContext(SOSChatContext)
