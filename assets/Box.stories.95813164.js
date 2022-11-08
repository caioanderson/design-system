var s=Object.defineProperty;var n=(o,r)=>s(o,"name",{value:r,configurable:!0});import{B as e,T as p}from"./index.ef4ee54a.js";import{j as t}from"./jsx-runtime.830829fc.js";import"./index.146a07b9.js";import"./iframe.2a440569.js";import"./index.6730f9d3.js";const d={parameters:{storySource:{source:`import type { Story, Meta } from '@storybook/react'
import { BoxComponent, BoxProps, TextComponent } from '@caio-ui/react'

export default {
    title: 'Surfaces/Box',
    component: BoxComponent,
    args: {
        children: <TextComponent>Testando elemento Box</TextComponent>
    },
    argTypes: {
        children: {
            control: {
                type: null
            }
        }
    }

} as Meta<BoxProps>

const Templates: Story<BoxProps> = (args) => {
    return (
        <BoxComponent {...args} />
    )
}

export const Box = Templates.bind({})
`,locationsMap:{box:{startLoc:{col:35,line:20},endLoc:{col:1,line:24},startBody:{col:35,line:20},endBody:{col:1,line:24}}}}},title:"Surfaces/Box",component:e,args:{children:t(p,{children:"Testando elemento Box"})},argTypes:{children:{control:{type:null}}}},a=n(o=>t(e,{...o}),"Templates"),T=a.bind({}),u=["Box"];export{T as Box,u as __namedExportsOrder,d as default};
//# sourceMappingURL=Box.stories.95813164.js.map
