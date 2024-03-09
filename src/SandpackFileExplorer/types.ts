import { IFileExplorer } from '@rainetian/file-explorer'

export interface ISandpackFileExplorer extends Pick<IFileExplorer, 'fileIcon'> {
  style?: React.CSSProperties
  readOnly?: boolean
}
