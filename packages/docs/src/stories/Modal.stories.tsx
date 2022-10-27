import type { StoryObj, Meta, Story } from '@storybook/react'
import { useArgs } from '@storybook/client-api'
import {
    Modal as ModalContainer, ModalProps, ModalWrapperProps, ModalWrapper,
    ModalTrigger, ModalContent, Button, Text
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

    return(
        <ModalContainer {...args} onOpenChange={(open) => updateArgs({ open })}>
            <ModalTrigger asChild>
                <Button>
                    Abrir Modal
                </Button>
            </ModalTrigger>

            <ModalWrapper>
                <ModalContent>
                    <Text css={{ color: colors.amber900 }}>Hello everyone</Text>
                </ModalContent>
            </ModalWrapper>
        </ModalContainer>
    )
}

export const Modal = Template.bind({})

