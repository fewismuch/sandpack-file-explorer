import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from '@codesandbox/sandpack-react'
import { sandpackDark } from '@codesandbox/sandpack-themes'
import SandpackFileExplorer from '@rainetian/sandpack-file-explorer'
import React from 'react'

const App = () => {
  return (
    <div>
      <SandpackProvider template='react' theme={sandpackDark}>
        <SandpackLayout>
          <SandpackFileExplorer readOnly style={{ width: 200 }} />
          <SandpackCodeEditor showTabs closableTabs />
          <SandpackPreview />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  )
}
export default App
