var d=Object.defineProperty;var o=(t,a)=>d(t,"name",{value:a,configurable:!0});import"./index.146a07b9.js";import{c as e,A as u,M as h}from"./Props.ce6adbdb.js";import{a as l,j as n}from"./jsx-runtime.830829fc.js";import"./iframe.2a440569.js";/* empty css                    */import{t as c}from"./index.20f6a78d.js";import"./string.669f0f8b.js";import"./index.129c19f8.js";import"./es.map.constructor.87b95d01.js";import"./es.number.to-fixed.d6f09bb8.js";function f(){return Object.entries(c).forEach(([t,a])=>{console.log(t),console.log(a)}),l("table",{className:"tokens-grid",children:[n("thead",{children:l("tr",{children:[n("th",{children:"Token"}),n("th",{children:"Propriedades"})]})}),n("tbody",{children:Object.entries(c).map(([t,a])=>l("tr",{children:[n("td",{children:t}),n("td",{children:Object.entries(a).map(([s,i])=>l("span",{className:"text-grid-tokens-properties",children:[s," ",`
`]}))})]},t))})]})}o(f,"TokensGridWithProperties");function p(){return p=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i])}return t},p.apply(this,arguments)}o(p,"_extends");const N={},y="wrapper";function m({components:t,...a}){return e(y,p({},N,a,{components:t,mdxType:"MDXLayout"}),e(h,{title:"Tokens/Start",mdxType:"Meta"}),e("h1",null,"Caio UI"),e("h2",null,"Introdu\xE7\xE3o"),e("p",null,"Nessa etapa de instala\xE7\xE3o v\xE3o est\xE1 disponiveis :"),e("ul",{className:"contains-task-list"},e("li",{parentName:"ul",className:"task-list-item"},e("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Cores."),e("li",{parentName:"ul",className:"task-list-item"},e("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Fontes (tamanho, peso, tipo)."),e("li",{parentName:"ul",className:"task-list-item"},e("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Tamanho da linha."),e("li",{parentName:"ul",className:"task-list-item"},e("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Espa\xE7amentos."),e("li",{parentName:"ul",className:"task-list-item"},e("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Valores de borda.")),e("h2",null,"Instala\xE7\xE3o"),e("p",null,"No seu terminal instale:"),e("pre",null,e("code",{parentName:"pre",className:"language-bash"},`# With npm
npm install @caio-ui/tokens
`)),e("h2",null,"Mapa de propriedades"),e(f,{mdxType:"TokensGridWithProperties"}),e("h2",null,"Uso"),e("p",null,"Usando como exemplo um projeto react, no arquivo ",e("inlineCode",{parentName:"p"},"App.jsx")," ou ",e("inlineCode",{parentName:"p"},"App.tsx"),", fa\xE7a:"),e("pre",null,e("code",{parentName:"pre",className:"language-javascript"},`import React from 'react'
import { colors, fontSizes, fontWeights, fonts } from '@caio-iu/tokens'

const styles = {
   color: colors.gray800,
   fontSize: fontSizes.md,
   fontFamily: fonts.default,
   fontWeights: fontWeights.regular
}

export function App(){
    return(
        <span style={styles}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         </span>
    )
}

`)))}o(m,"MDXContent");m.isMDXComponent=!0;const g=o(()=>{throw new Error("Docs-only story")},"__page");g.parameters={docsOnly:!0};const r={title:"Tokens/Start",includeStories:["__page"]},k={};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:()=>e(u,{mdxStoryNameToKey:k,mdxComponentAnnotations:r},e(m,null))};const W=["__page"];export{W as __namedExportsOrder,g as __page,r as default};
//# sourceMappingURL=getting-start.stories.6c53b236.js.map
