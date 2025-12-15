# sandpack-file-explorer

[![NPM version](https://img.shields.io/npm/v/@rainetian/sandpack-file-explorer.svg?style=flat)](https://npmjs.org/package/@rainetian/sandpack-file-explorer)

## 介绍
一个替代Sandpack的FileExplorer的组件，提供更多的功能。
* 支持新增删除文件夹和文件
* 支持拖拽
* 支持文件夹和文件的重命名
* 支持自定义文件图标
* 更小的体积和更简洁的UI

[点击查看示例](https://fewismuch.github.io/sandpack-file-explorer)

![image](https://raw.githubusercontent.com/fewismuch/sandpack-file-explorer/main/docs-src/screenshot.png)

![image](https://raw.githubusercontent.com/fewismuch/sandpack-file-explorer/main/docs-src/screenshot2.png)


## 安装

```shell
npm install sandpack-file-explorer
```

## 使用

作为Sandpack的FileExplorer的替代品，您可以以相同的方式使用它

```tsx
import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from '@codesandbox/sandpack-react'
import SandpackFileExplorer from '@rainetian/sandpack-file-explorer'

const App = () => {
  return (
    <SandpackProvider template='react'>
      <SandpackLayout>
        <SandpackFileExplorer/>
        <SandpackCodeEditor showTabs closableTabs/>
        <SandpackPreview/>
      </SandpackLayout>
    </SandpackProvider>
  )
}
export default App

```


## Options

| Name | Type | Default   | Description |
| --- | --- |-----------| --- |
| `readOnly` | `boolean` | `false`   | 是否只读 |
| `title` | `string` | `'Files'` | 标题 |

## LICENSE

MIT
