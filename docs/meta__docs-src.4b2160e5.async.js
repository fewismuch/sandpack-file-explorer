"use strict";(self.webpackChunk_rainetian_sandpack_file_explorer=self.webpackChunk_rainetian_sandpack_file_explorer||[]).push([[479],{99288:function(I,o,e){var s;e.r(o),e.d(o,{demos:function(){return K}});var F=e(90228),S=e.n(F),L=e(87999),A=e.n(L),c=e(75271),m=e(70058),v=e(51856),x=e(18145),K={"docs-src-example-demo-base":{component:c.memo(c.lazy(function(){return e.e(433).then(e.bind(e,4537))})),asset:{type:"BLOCK",id:"docs-src-example-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(15213).Z},"@codesandbox/sandpack-react":{type:"NPM",value:"2.20.0"},"@rainetian/sandpack-file-explorer":{type:"NPM",value:"0.1.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@codesandbox/sandpack-react":m,"@rainetian/sandpack-file-explorer":v,react:s||(s=e.t(c,2))},renderOpts:{compile:function(){var g=A()(S()().mark(function u(){var a,C=arguments;return S()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(135).then(e.bind(e,5135));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,C));case 3:case"end":return n.stop()}},u)}));function D(){return g.apply(this,arguments)}return D}()}},"docs-src-example-demo-readonly":{component:c.memo(c.lazy(function(){return e.e(433).then(e.bind(e,82487))})),asset:{type:"BLOCK",id:"docs-src-example-demo-readonly",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(4815).Z},"@codesandbox/sandpack-react":{type:"NPM",value:"2.20.0"},"@codesandbox/sandpack-themes":{type:"NPM",value:"2.0.21"},"@rainetian/sandpack-file-explorer":{type:"NPM",value:"0.1.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@codesandbox/sandpack-react":m,"@codesandbox/sandpack-themes":x,"@rainetian/sandpack-file-explorer":v,react:s||(s=e.t(c,2))},renderOpts:{compile:function(){var g=A()(S()().mark(function u(){var a,C=arguments;return S()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(135).then(e.bind(e,5135));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,C));case 3:case"end":return n.stop()}},u)}));function D(){return g.apply(this,arguments)}return D}()}},"docs-src-example-demo-custom-icon":{component:c.memo(c.lazy(function(){return e.e(433).then(e.bind(e,83657))})),asset:{type:"BLOCK",id:"docs-src-example-demo-custom-icon",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(75536).Z},"@codesandbox/sandpack-react":{type:"NPM",value:"2.20.0"},"@codesandbox/sandpack-themes":{type:"NPM",value:"2.0.21"},"@rainetian/sandpack-file-explorer":{type:"NPM",value:"0.1.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@codesandbox/sandpack-react":m,"@codesandbox/sandpack-themes":x,"@rainetian/sandpack-file-explorer":v,react:s||(s=e.t(c,2))},renderOpts:{compile:function(){var g=A()(S()().mark(function u(){var a,C=arguments;return S()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(135).then(e.bind(e,5135));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,C));case 3:case"end":return n.stop()}},u)}));function D(){return g.apply(this,arguments)}return D}()}}}},9377:function(I,o,e){e.r(o),e.d(o,{demos:function(){return F}});var s=e(75271),F={}},51856:function(I,o,e){e.r(o),e.d(o,{default:function(){return T}});var s=e(15558),F=e.n(s),S=e(26068),L=e.n(S),A=e(48305),c=e.n(A),m=e(70058),v=e(18634),x=e(75271),K=e(335),g=e.n(K);function D(n,y,M){var d=n,f=y.split("/").filter(function(p){return p.trim()!==""});return f.forEach(function(p,E){if(f.length===1){d=n.filter(function(r){return r.parent===0&&r.text===p&&r.droppable===M});return}if(E!==f.length-1){var k=d.find(function(r){return r.text===p&&r.droppable});d=n.filter(function(r){return r.parent===(k==null?void 0:k.id)})}else d=d.filter(function(r){return r.text===p&&r.droppable===M})}),d[0]}function u(n,y){var M=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;if(!y)return null;for(var d="",f=y.toString();f!==M.toString();){var p=!1,E=g()(n),k;try{for(E.s();!(k=E.n()).done;){var r=k.value;if(r.id.toString()===f){var P;d="/"+r.text+d,f=((P=r.parent)===null||P===void 0?void 0:P.toString())||"",p=!0;break}}}catch(O){E.e(O)}finally{E.f()}if(!p)return null}return d===""?null:d}var a=e(52676),C=function(y){var M=y.style,d=y.readOnly,f=y.fileIcon,p=y.title,E=p===void 0?"Files":p,k=(0,m.useSandpack)(),r=k.sandpack,P=r.files,O=r.activeFile,b=r.openFile,W=r.deleteFile,$=r.addFile,N=(0,x.useRef)(null),Y=x.useState(),H=c()(Y,2),J=H[0],w=H[1],q=(0,x.useMemo)(function(){return v.Me.files2tree(P)},[P]),_=x.useState(q),Q=c()(_,2),R=Q[0],V=Q[1],ee=function(t,h){var B=h.action,ne=h.oldTree,i=h.oldNode,Z=h.newNode,U="",j="";if(i&&(U=u(ne,i.id),j=u(t,i.id)),B==="remove")W(U);else if(B==="drop"){var z;$(j,(i==null||(z=i.content)===null||z===void 0?void 0:z.code)||""),W(U),i!=null&&i.droppable||b(j)}else if(B==="create"){if(!Z)return;var X=u(t,Z.id);$(X,""),Z.droppable||b(X)}else if(B==="update"){var G;$(j,(i==null||(G=i.content)===null||G===void 0?void 0:G.code)||""),W(U),i!=null&&i.droppable||b(j)}V(t)};return(0,x.useEffect)(function(){var l=D(R,O,!1);w(l==null?void 0:l.id)},[O]),(0,x.useEffect)(function(){var l=P[O].code,t=R.find(function(h){return h.id===J});t&&(t.content=L()(L()({},t.content),{},{code:l})),V(F()(R))},[P[O].code]),(0,a.jsxs)("div",{className:"sandpack-file-explorer",style:M,children:[(0,a.jsxs)("div",{className:"sandpack-file-explorer__header",children:[(0,a.jsx)("span",{children:E}),d?null:(0,a.jsxs)("span",{className:"sandpack-file-explorer__header__actions",children:[(0,a.jsx)("span",{onClick:function(){var t;return(t=N.current)===null||t===void 0?void 0:t.addFile()},title:"Add file",children:(0,a.jsx)(v.Sp,{})}),(0,a.jsx)("span",{onClick:function(){var t;return(t=N.current)===null||t===void 0?void 0:t.addFolder()},title:"Add folder",children:(0,a.jsx)(v.De,{})}),(0,a.jsx)("span",{onClick:function(){var t;return(t=N.current)===null||t===void 0?void 0:t.closeAll()},title:"Collapse all",children:(0,a.jsx)(v.W5,{})})]})]}),(0,a.jsx)(v.ZP,{fileExplorerRef:N,data:R,rootId:0,initialOpen:!0,fileIcon:f||function(l){return l==="file"?(0,a.jsx)(m.FileIcon,{}):l==="folder"?(0,a.jsx)(m.DirectoryIconClosed,{}):l==="folderOpen"?(0,a.jsx)(m.DirectoryIconOpen,{}):(0,a.jsx)(m.FileIcon,{})},selectedId:J,onSelect:function(t){if(!t.droppable){var h=u(R,t.id);h&&b(h)}},onChange:ee,showActions:!d,canDrag:function(){return!d},allowRepeatText:!1})]})},T=C},79312:function(I,o,e){e.r(o),e.d(o,{texts:function(){return s}});const s=[{value:"\u4E00\u4E2A\u66FF\u4EE3Sandpack\u7684FileExplorer\u7684\u7EC4\u4EF6\uFF0C\u63D0\u4F9B\u66F4\u591A\u7684\u529F\u80FD\u3002",paraId:0,tocIndex:0},{value:"\u652F\u6301\u65B0\u589E\u5220\u9664\u6587\u4EF6\u5939\u548C\u6587\u4EF6",paraId:1,tocIndex:0},{value:"\u652F\u6301\u62D6\u62FD",paraId:1,tocIndex:0},{value:"\u652F\u6301\u6587\u4EF6\u5939\u548C\u6587\u4EF6\u7684\u91CD\u547D\u540D",paraId:1,tocIndex:0},{value:"\u66F4\u5C0F\u7684\u4F53\u79EF\u548C\u66F4\u597D\u7684UI",paraId:1,tocIndex:0}]},95967:function(I,o,e){e.r(o),e.d(o,{texts:function(){return s}});const s=[{value:"sandpack-file-explorer",paraId:0}]},15213:function(I,o){o.Z=`import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from '@codesandbox/sandpack-react'
import SandpackFileExplorer from '@rainetian/sandpack-file-explorer'
import React from 'react'

const App = () => {
  return (
    <div>
      <SandpackProvider template='react'>
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
`},75536:function(I,o){o.Z=`import {
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
`},4815:function(I,o){o.Z=`import {
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
`}}]);
