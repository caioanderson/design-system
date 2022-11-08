var c=Object.defineProperty;var r=(n,e)=>c(n,"name",{value:e,configurable:!0});import{M as s,d,a as p,e as m,f as u,g as M,T as a,h as g}from"./index.ef4ee54a.js";import{c as t}from"./index.20f6a78d.js";import{a as l,j as o}from"./jsx-runtime.830829fc.js";import{ap as C}from"./iframe.2a440569.js";import"./index.146a07b9.js";import"./index.6730f9d3.js";const O={parameters:{storySource:{source:`import type { Meta, Story } from '@storybook/react'
import { useArgs } from '@storybook/client-api'
import {
    Modal as ModalContainer, ModalProps, ModalWrapper,
    ModalTrigger, ModalContent, ButtonComponent, TextComponent, ModalTitle,
    ModalTriggerClose
} from '@caio-ui/react'
import { colors } from '@caio-ui/tokens'

export default {
    title: 'Surfaces/Modal',
    component: ModalContainer,
    args: {
        open: false,
        overlay: true
    },
    argTypes: {
        open: { control: 'boolean' },
        overlay: { control: 'boolean' },
        onOpenChange: { control: false },
        defaultOpen: { control: false }
    },
} as Meta<ModalProps>

const Template: Story<ModalProps> = (args) => {

    const [, updateArgs] = useArgs()

    return (
        <ModalContainer {...args} onOpenChange={(open) => updateArgs({ open })}>
            <ModalTrigger asChild>
                <ButtonComponent variant="secondary">
                    Abrir Modal
                </ButtonComponent>
            </ModalTrigger>

            <ModalWrapper>
                <ModalContent>
                    <ModalTitle>
                        <TextComponent size='xl' css={{ color: colors.black }}>Title</TextComponent>
                    </ModalTitle>
                    <TextComponent as='p' css={{ color: colors.black }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque finibus nisl eu rhoncus scelerisque.
                    </TextComponent>
                    <ModalTriggerClose asChild />
                </ModalContent>
            </ModalWrapper>
        </ModalContainer>
    )
}

export const Modal = Template.bind({})

`,locationsMap:{modal:{startLoc:{col:36,line:25},endLoc:{col:1,line:51},startBody:{col:36,line:25},endBody:{col:1,line:51}}}}},title:"Surfaces/Modal",component:s,args:{open:!1,overlay:!0},argTypes:{open:{control:"boolean"},overlay:{control:"boolean"},onOpenChange:{control:!1},defaultOpen:{control:!1}}},T=r(n=>{const[,e]=C();return l(s,{...n,onOpenChange:i=>e({open:i}),children:[o(d,{asChild:!0,children:o(p,{variant:"secondary",children:"Abrir Modal"})}),o(m,{children:l(u,{children:[o(M,{children:o(a,{size:"xl",css:{color:t.black},children:"Title"})}),o(a,{as:"p",css:{color:t.black},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus nisl eu rhoncus scelerisque."}),o(g,{asChild:!0})]})})]})},"Template"),v=T.bind({}),B=["Modal"];export{v as Modal,B as __namedExportsOrder,O as default};
//# sourceMappingURL=Modal.stories.c57e0098.js.map
