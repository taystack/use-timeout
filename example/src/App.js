import React from 'react'
import { useMyHook } from '@taystack/use-timeout'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App