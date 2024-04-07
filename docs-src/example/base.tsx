import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
  useSandpack,
} from '@codesandbox/sandpack-react'
import SandpackFileExplorer from '@rainetian/sandpack-file-explorer'
import React from 'react'

const Demo = () => {
  const { sandpack } = useSandpack()
  return (
    <button
      onClick={() => {
        console.log(sandpack.files)
        const keys = Object.keys(sandpack.files)
        keys.forEach((key) => {
          if (!['/styles.css', '/src/a.js'].includes(key)) {
            sandpack.deleteFile(key)
          }
        })
      }}
    >
      click
    </button>
  )
}
const App = () => {
  return (
    <div>
      <SandpackProvider
        template={'react-ts'}
        files={{
          'styles.css': {
            code: 'h1{color:red}',
          },
          'src/a.js': {
            code: 'h1{color:blue}',
          },
        }}
      >
        <SandpackLayout>
          <Demo></Demo>
          <SandpackFileExplorer style={{ width: 250 }} />
          <SandpackCodeEditor showTabs closableTabs />
          <SandpackPreview />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  )
}
export default App
