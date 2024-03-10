import {
  DirectoryIconClosed,
  DirectoryIconOpen,
  FileIcon,
  useSandpack,
} from '@codesandbox/sandpack-react'
import FileExplorer, {
  AddFileIcon,
  AddFolderIcon,
  CollapseIcon,
  IFileExplorerChangeParams,
  IFileExplorerMethods,
  INode,
  fileExplorerUtils,
} from '@rainetian/file-explorer'
import React, { useEffect, useMemo, useRef } from 'react'

import { ISandpackFileExplorer } from './types'
import { findNodeByPath, findPathByNodeId } from './utils'

import './index.less'

export const SandpackFileExplorer: React.FC<ISandpackFileExplorer> = (props) => {
  const { style, readOnly, fileIcon } = props
  const { sandpack } = useSandpack()
  const { files, activeFile, openFile, deleteFile, addFile } = sandpack
  const fileExplorerRef = useRef<IFileExplorerMethods>(null)
  const [selectedFileId, setSelectedFileId] = React.useState<string | number | null>()
  const filesTreeData = useMemo(() => fileExplorerUtils.files2tree(files), [files])
  const [fileExplorerData, setFileExplorerData] = React.useState<INode[]>(filesTreeData)

  const handleChange = (
    newTree: INode[],
    { action, oldTree, oldNode, newNode }: IFileExplorerChangeParams
  ) => {
    let oldPath = ''
    let newPath = ''
    if (oldNode) {
      oldPath = findPathByNodeId(oldTree, oldNode.id)!
      newPath = findPathByNodeId(newTree, oldNode.id)!
    }
    if (action === 'remove') {
      deleteFile(oldPath)
    } else if (action === 'drop') {
      const existNode = findNodeByPath(oldTree, newPath, !!oldNode?.droppable)
      if (existNode) {
        return
      }
      addFile(newPath, oldNode?.content?.code || '')
      deleteFile(oldPath)
      if (!oldNode?.droppable) openFile(newPath)
    } else if (action === 'create') {
      if (!newNode) return
      const newPath = findPathByNodeId(newTree, newNode.id)!
      const existNode = findNodeByPath(oldTree, newPath, !!newNode.droppable)
      if (existNode && existNode.parent === newNode.parent) {
        fileExplorerRef.current?.remove(newNode.id)
        return
      }
      addFile(newPath, '')
      if (!newNode.droppable) openFile(newPath)
    } else if (action === 'update') {
      const existNode = findNodeByPath(oldTree, newPath, !!oldNode?.droppable)
      if (existNode && existNode.parent === oldNode?.parent) {
        return
      }
      addFile(newPath, oldNode?.content?.code || '')
      deleteFile(oldPath)
      if (!oldNode?.droppable) openFile(newPath)
    }
    setFileExplorerData(newTree)
  }

  useEffect(() => {
    const file = findNodeByPath(fileExplorerData, activeFile, false)
    setSelectedFileId(file?.id)
  }, [activeFile])

  useEffect(() => {
    const newCode = files[activeFile].code
    const selectedFile = fileExplorerData.find((node) => node.id === selectedFileId)
    if (selectedFile)
      selectedFile.content = {
        ...selectedFile.content,
        code: newCode,
      }
    setFileExplorerData([...fileExplorerData])
  }, [files[activeFile].code])

  return (
    <div className='sandpack-file-explorer' style={style}>
      <div className='sandpack-file-explorer__header'>
        <span>Files</span>
        {readOnly ? null : (
          <span className='sandpack-file-explorer__header__actions'>
            <span onClick={() => fileExplorerRef.current?.addFile()}>
              <AddFileIcon />
            </span>
            <span onClick={() => fileExplorerRef.current?.addFolder()}>
              <AddFolderIcon />
            </span>
            <span onClick={() => fileExplorerRef.current?.closeAll()}>
              <CollapseIcon />
            </span>
          </span>
        )}
      </div>

      <FileExplorer
        fileExplorerRef={fileExplorerRef}
        data={fileExplorerData}
        rootId={0}
        initialOpen
        fileIcon={
          !fileIcon
            ? (fileSuffix: string) => {
                if (fileSuffix === 'file') return <FileIcon />
                if (fileSuffix === 'folder') return <DirectoryIconClosed />
                if (fileSuffix === 'folderOpen') return <DirectoryIconOpen />
                return <FileIcon />
              }
            : fileIcon
        }
        selectedId={selectedFileId}
        onSelect={(node: INode) => {
          if (node.droppable) return
          const path = findPathByNodeId(fileExplorerData, node.id)
          if (path) openFile(path)
        }}
        onChange={handleChange}
        showActions={!readOnly}
        canDrag={() => !readOnly}
      />
    </div>
  )
}
