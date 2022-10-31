import type { Meta, Story } from '@storybook/react'
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

