import { Navigate } from 'dumi'
import React from 'react'

export const patchClientRoutes = ({ routes }: any) => {
  routes.unshift({
    path: '/',
    element: <Navigate to='/example' replace />,
  })
}

// 同步主题色到示例代码
window.onload = function () {
  const setCompTheme = (theme: string) => {
    const divElements = document.querySelectorAll('div[data-id="dumi-theme"]')
    if (divElements) {
      divElements.forEach((item) => item.setAttribute('data-theme', theme))
    }
  }
  setTimeout(() => {
    const currentTheme = document
      .querySelector('html[data-prefers-color]')
      ?.getAttribute('data-prefers-color')

    setCompTheme(currentTheme || '')

    // 监听主题更新
    const themeSelect = document.querySelector('.dumi-default-color-switch select')
    themeSelect?.addEventListener('change', (v: any) => {
      const theme = v.target?.value
      setCompTheme(theme)
    })
  }, 100)
}
