import React from 'react'
import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from 'react-chat-engine-advanced'

export default function Chat() {
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID, 
    'admin', 
    '123123'
  );
  return (
    <>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow  {...chatProps} style={{ height: '100vh' }} />
    </>
  )
}
