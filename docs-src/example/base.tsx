import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from '@codesandbox/sandpack-react'
import SandpackFileExplorer from '@rainetian/sandpack-file-explorer'
import React, { useState } from 'react'

const App = () => {
  const [template, setTemplate] = useState<any>('')

  const handleSelectProject = () => {
    if (template === 'react-ts') {
      setTemplate('vue')
    } else if (template === 'vue') {
      setTemplate('static')
    } else if (template === 'static') {
      setTemplate('react-ts')
    } else {
      setTemplate('react-ts')
    }
  }

  return (
    <div>
      <button onClick={handleSelectProject}>change</button>
      <SandpackProvider template={template}>
        <SandpackLayout>
          <SandpackFileExplorer style={{ width: 250 }} />
          <SandpackCodeEditor showTabs closableTabs />
          <SandpackPreview />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  )
}
export default App
