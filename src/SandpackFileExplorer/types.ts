import { IFileExplorer } from '@rainetian/file-explorer'
import React from 'react'

export interface ISandpackFileExplorer extends Pick<IFileExplorer, 'fileIcon'> {
  style?: React.CSSProperties
  readOnly?: boolean
  title?: string
}
