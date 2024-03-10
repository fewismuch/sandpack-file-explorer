"use strict";(self.webpackChunk_rainetian_sandpack_file_explorer=self.webpackChunk_rainetian_sandpack_file_explorer||[]).push([[433],{55937:function(B,f,e){e.r(f);var l=e(23058),j=e(16725),M=e(50959),c=e(11527),a=function(){return(0,c.jsx)("div",{children:(0,c.jsx)(l.oT,{template:"react",children:(0,c.jsxs)(l.sp,{children:[(0,c.jsx)(j.Z,{style:{width:250}}),(0,c.jsx)(l._V,{showTabs:!0,closableTabs:!0}),(0,c.jsx)(l.Gj,{})]})})})};f.default=a},6498:function(B,f,e){e.r(f);var l=e(23058),j=e(18145),M=e(16725),c=e(50959),a=e(11527),O=function(){var m=function(W){var K={js:"https://img.icons8.com/color/48/000000/javascript.png",css:"https://img.icons8.com/color/48/000000/css3.png",html:"https://img.icons8.com/color/48/000000/html-5.png",json:"https://img.icons8.com/color/48/000000/json.png"},g=K[W];return g?(0,a.jsx)("img",{src:g}):null};return(0,a.jsx)("div",{children:(0,a.jsx)(l.oT,{template:"react",theme:j.pJ,children:(0,a.jsxs)(l.sp,{children:[(0,a.jsx)(M.Z,{fileIcon:m,style:{width:200}}),(0,a.jsx)(l._V,{showTabs:!0,closableTabs:!0}),(0,a.jsx)(l.Gj,{})]})})})};f.default=O},25282:function(B,f,e){e.r(f);var l=e(23058),j=e(18145),M=e(16725),c=e(50959),a=e(11527),O=function(){return(0,a.jsx)("div",{children:(0,a.jsx)(l.oT,{template:"react",theme:j.uj,children:(0,a.jsxs)(l.sp,{children:[(0,a.jsx)(M.Z,{readOnly:!0}),(0,a.jsx)(l._V,{showTabs:!0,closableTabs:!0}),(0,a.jsx)(l.Gj,{})]})})})};f.default=O},16725:function(B,f,e){e.d(f,{Z:function(){return X}});var l=e(15558),j=e.n(l),M=e(26068),c=e.n(M),a=e(48305),O=e.n(a),D=e(23058),m=e(42823),P=e(50959),W=e(335),K=e.n(W);function g(A,E,C){var i=A,v=E.split("/").filter(function(p){return p.trim()!==""});return v.forEach(function(p,d){if(v.length===1){i=A.filter(function(r){return r.parent===0&&r.text===p&&r.droppable===C});return}if(d!==v.length-1){var u=i.find(function(r){return r.text===p&&r.droppable});i=A.filter(function(r){return r.parent===(u==null?void 0:u.id)})}else i=i.filter(function(r){return r.text===p&&r.droppable===C})}),i[0]}function _(A,E){var C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;if(!E)return null;for(var i="",v=E.toString();v!==C.toString();){var p=!1,d=K()(A),u;try{for(d.s();!(u=d.n()).done;){var r=u.value;if(r.id.toString()===v){var h;i="/"+r.text+i,v=(h=r.parent)===null||h===void 0?void 0:h.toString(),p=!0;break}}}catch(I){d.e(I)}finally{d.f()}if(!p)return null}return i===""?null:i}var t=e(11527),J=function(E){var C=E.style,i=E.readOnly,v=E.fileIcon,p=(0,D.X3)(),d=p.sandpack,u=d.files,r=d.activeFile,h=d.openFile,I=d.deleteFile,L=d.addFile,F=(0,P.useRef)(null),$=P.useState(),k=O()($,2),G=k[0],z=k[1],Q=(0,P.useMemo)(function(){return m.Me.files2tree(u)},[u]),Y=P.useState(Q),V=O()(Y,2),T=V[0],b=V[1],w=function(n,x){var S=x.action,q=x.oldTree,s=x.oldNode,U=x.newNode,y="",R="";if(s&&(y=_(q,s.id),R=_(n,s.id)),S==="remove")I(y);else if(S==="drop"){var N;L(R,(s==null||(N=s.content)===null||N===void 0?void 0:N.code)||""),I(y),s!=null&&s.droppable||h(R)}else if(S==="create"){if(!U)return;var H=_(n,U.id);L(H,""),U.droppable||h(H)}else if(S==="update"){var Z;L(R,(s==null||(Z=s.content)===null||Z===void 0?void 0:Z.code)||""),I(y),s!=null&&s.droppable||h(R)}b(n)};return(0,P.useEffect)(function(){var o=g(T,r,!1);z(o==null?void 0:o.id)},[r]),(0,P.useEffect)(function(){var o=u[r].code,n=T.find(function(x){return x.id===G});n&&(n.content=c()(c()({},n.content),{},{code:o})),b(j()(T))},[u[r].code]),(0,t.jsxs)("div",{className:"sandpack-file-explorer",style:C,children:[(0,t.jsxs)("div",{className:"sandpack-file-explorer__header",children:[(0,t.jsx)("span",{children:"Files"}),i?null:(0,t.jsxs)("span",{className:"sandpack-file-explorer__header__actions",children:[(0,t.jsx)("span",{onClick:function(){var n;return(n=F.current)===null||n===void 0?void 0:n.addFile()},title:"Add file",children:(0,t.jsx)(m.Sp,{})}),(0,t.jsx)("span",{onClick:function(){var n;return(n=F.current)===null||n===void 0?void 0:n.addFolder()},title:"Add folder",children:(0,t.jsx)(m.De,{})}),(0,t.jsx)("span",{onClick:function(){var n;return(n=F.current)===null||n===void 0?void 0:n.closeAll()},title:"Collapse all",children:(0,t.jsx)(m.W5,{})})]})]}),(0,t.jsx)(m.ZP,{fileExplorerRef:F,data:T,rootId:0,initialOpen:!0,fileIcon:v||function(o){return o==="file"?(0,t.jsx)(D.aA,{}):o==="folder"?(0,t.jsx)(D.f8,{}):o==="folderOpen"?(0,t.jsx)(D.N9,{}):(0,t.jsx)(D.aA,{})},selectedId:G,onSelect:function(n){if(!n.droppable){var x=_(T,n.id);x&&h(x)}},onChange:w,showActions:!i,canDrag:function(){return!i},allowRepeatText:!1})]})},X=J}}]);
