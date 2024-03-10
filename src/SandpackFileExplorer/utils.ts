import { INode } from '@rainetian/file-explorer'

export function findNodeByPath(tree: INode[], path: string, droppable: boolean): INode | null {
  let result: INode[] = tree
  const parts: string[] = path.split('/').filter((part: string) => part.trim() !== '')
  parts.forEach((part: string, index: number) => {
    if (parts.length === 1) {
      result = tree.filter(
        (node: INode) => node.parent === 0 && node.text === part && node.droppable === droppable
      )
      return
    }
    if (index !== parts.length - 1) {
      const parent = result.find((node: INode) => node.text === part && node.droppable)
      result = tree.filter((node: INode) => node.parent === parent?.id)
    } else {
      result = result.filter((node: INode) => node.text === part && node.droppable === droppable)
    }
  })
  return result[0]
}

export function findPathByNodeId(tree: INode[], id: string | number, rootId = 0) {
  if (!id) return null
  let path = ''
  let currentId = id.toString()

  // 遍历数据，查找目标ID的路径
  while (currentId !== rootId.toString()) {
    let found = false
    for (const item of tree) {
      if (item.id.toString() === currentId) {
        // 确保item.id也是字符串类型
        path = '/' + item.text + path
        // 更新currentId为父ID，并确保它是字符串类型
        currentId = item.parent?.toString()
        found = true
        break
      }
    }
    if (!found) {
      return null
    }
  }

  // 如果路径为空，说明未找到节点
  if (path === '') {
    return null
  }

  return path
}
