var p=Object.defineProperty;var l=(n,e)=>p(n,"name",{value:e,configurable:!0});import{j as c,k as d,l as u,m as f}from"./index.ef4ee54a.js";import{c as h}from"./index.20f6a78d.js";import{a as r,F as i,j as o}from"./jsx-runtime.830829fc.js";import{r as k}from"./index.146a07b9.js";import{I as m,r as g}from"./IconBase.esm.7a196e11.js";import{ap as y}from"./iframe.2a440569.js";import"./index.6730f9d3.js";var t=new Map;t.set("bold",function(n){return r(i,{children:[o("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),o("polyline",{points:"120 124 128 124 128 176 136 176",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),o("circle",{cx:"126",cy:"84",r:"16"})]})});t.set("duotone",function(n){return r(i,{children:[o("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),o("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),o("polyline",{points:"120 120 128 120 128 176 136 176",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),o("circle",{cx:"126",cy:"84",r:"12"})]})});t.set("fill",function(){return o(i,{children:o("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm-2,48a12,12,0,1,1-12,12A12,12,0,0,1,126,72Zm10,112h-8a8,8,0,0,1-8-8V128a8,8,0,0,1,0-16h8a8,8,0,0,1,8,8v48a8,8,0,0,1,0,16Z"})})});t.set("light",function(n){return r(i,{children:[o("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),o("polyline",{points:"120 120 128 120 128 176 136 176",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),o("circle",{cx:"126",cy:"84",r:"10"})]})});t.set("thin",function(n){return r(i,{children:[o("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),o("polyline",{points:"120 120 128 120 128 176 136 176",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),o("circle",{cx:"126",cy:"84",r:"8"})]})});t.set("regular",function(n){return r(i,{children:[o("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),o("polyline",{points:"120 120 128 120 128 176 136 176",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),o("circle",{cx:"126",cy:"84",r:"12"})]})});var T=l(function(e,s){return g(e,s,t)},"renderPath"),a=k.exports.forwardRef(function(n,e){return o(m,{...Object.assign({ref:e},n,{renderPath:T})})});a.displayName="Info";const x=a,L={padding:10,background:h.white,borderRadius:99999,width:20,height:20,display:"flex",alignItems:"center",justifyContent:"center"},A={parameters:{storySource:{source:`import type { Meta, Story } from '@storybook/react'
import { useArgs } from '@storybook/client-api'
import { TooltipComponent, TooltipProps, TooltipTrigger, TooltipContent, TooltipProvider } from '@caio-ui/react'
import { Info } from 'phosphor-react'
import { colors } from '@caio-ui/tokens'

const containerIconStyle = {
    padding: 10,
    background: colors.white,
    borderRadius: 99999,
    width: 20,
    height: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

export default {
    title: 'Components/Tooltip',
    component: TooltipComponent,
    args: {
        open: false,
    },
    argTypes: {
        open: { control: 'boolean' },
        onOpenChange: { control: false },
        defaultOpen: { control: false },
        delayDuration: { control: false },
        disableHoverableContent: { control: false }
    }
} as Meta<TooltipProps>

const Templates: Story<TooltipProps> = (args) => {

    const [, updateArgs] = useArgs()

    return (
        <TooltipProvider >
            <TooltipComponent {...args} onOpenChange={(open) => updateArgs({ open })}>
                <TooltipTrigger asChild>
                    <div style={containerIconStyle} >
                        <Info weight='bold' />
                    </div>
                </TooltipTrigger>
                <TooltipContent sideOffset={5}>
                    Exemplo de texto
                </TooltipContent>
            </TooltipComponent>
        </TooltipProvider>
    )
}

export const Tooltip = Templates.bind({})`,locationsMap:{tooltip:{startLoc:{col:39,line:33},endLoc:{col:1,line:51},startBody:{col:39,line:33},endBody:{col:1,line:51}}}}},title:"Components/Tooltip",component:c,args:{open:!1},argTypes:{open:{control:"boolean"},onOpenChange:{control:!1},defaultOpen:{control:!1},delayDuration:{control:!1},disableHoverableContent:{control:!1}}},C=l(n=>{const[,e]=y();return o(d,{children:r(c,{...n,onOpenChange:s=>e({open:s}),children:[o(u,{asChild:!0,children:o("div",{style:L,children:o(x,{weight:"bold"})})}),o(f,{sideOffset:5,children:"Exemplo de texto"})]})})},"Templates"),S=C.bind({}),M=["Tooltip"];export{S as Tooltip,M as __namedExportsOrder,A as default};
//# sourceMappingURL=Tooltip.stories.adeae754.js.map
