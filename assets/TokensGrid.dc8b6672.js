var a=Object.defineProperty;var o=(r,n)=>a(r,"name",{value:n,configurable:!0});/* empty css                    */import{a as t,j as e}from"./jsx-runtime.830829fc.js";function d({tokens:r,hasRemValue:n=!1}){return t("table",{className:"tokens-grid",children:[e("thead",{children:t("tr",{children:[e("th",{children:"Name"}),e("th",{children:"Value"}),n&&e("th",{children:"Pixels"})]})}),e("tbody",{children:Object.entries(r).map(([i,s])=>t("tr",{children:[e("td",{children:i}),e("td",{children:s}),n&&t("td",{children:[Number(s.replace("rem",""))*16,"px"]})]},i))})]})}o(d,"TokensGrid");try{d.displayName="TokensGrid",d.__docgenInfo={description:"",displayName:"TokensGrid",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"Record<string, string>"}},hasRemValue:{defaultValue:{value:"false"},description:"",name:"hasRemValue",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/TokensGrid.tsx#TokensGrid"]={docgenInfo:d.__docgenInfo,name:"TokensGrid",path:"src/components/TokensGrid.tsx#TokensGrid"})}catch{}export{d as T};
//# sourceMappingURL=TokensGrid.dc8b6672.js.map
