import type { Meta, Story } from '@storybook/react'
import { useArgs } from '@storybook/client-api'
import {
    Modal as ModalContainer, ModalProps, ModalWrapper,
    ModalTrigger, ModalContent, Button, Text, ModalTitle,
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
                <Button variant="secondary">
                    Abrir Modal
                </Button>
            </ModalTrigger>

            <ModalWrapper>
                <ModalContent>
                    <ModalTitle>
                        <Text size='xl' css={{ color: colors.black }}>Title</Text>
                    </ModalTitle>
                    <Text as='p' css={{ color: colors.black }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque finibus nisl eu rhoncus scelerisque.
                    </Text>
                    <ModalTriggerClose asChild />
                </ModalContent>
            </ModalWrapper>
        </ModalContainer>
    )
}

export const Modal = Template.bind({})

