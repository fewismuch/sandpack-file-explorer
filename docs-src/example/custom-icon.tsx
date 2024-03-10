import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from '@codesandbox/sandpack-react'
import { atomDark } from '@codesandbox/sandpack-themes'
import SandpackFileExplorer from '@rainetian/sandpack-file-explorer'
import React from 'react'

const App = () => {
  const fileIcon = (fileSuffix: string) => {
    const iconMap: Record<string, string> = {
      js: 'https://img.icons8.com/color/48/000000/javascript.png',
      css: 'https://img.icons8.com/color/48/000000/css3.png',
      html: 'https://img.icons8.com/color/48/000000/html-5.png',
      json: 'https://img.icons8.com/color/48/000000/json.png',
    }
    const iconSrc = iconMap[fileSuffix]
    return iconSrc ? <img src={iconSrc} /> : null
  }

  return (
    <div>
      <SandpackProvider template='react' theme={atomDark}>
        <SandpackLayout>
          <SandpackFileExplorer fileIcon={fileIcon} style={{ width: 200 }} />
          <SandpackCodeEditor showTabs closableTabs />
          <SandpackPreview />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  )
}
export default App
