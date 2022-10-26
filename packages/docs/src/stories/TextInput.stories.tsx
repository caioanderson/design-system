import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@caio-ui/react'

export default {
    title: 'Form/TextInput',
    component: TextInput,
    args: {},
    
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
    args: {
        placeholder: 'Ex: Caio'
    },
    decorators: [
        (Story) => {
            return(
                <Box as='label' css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
                    <Text>Digite seu usuario</Text>
                    {Story()}
                </Box>
            )
        }
    ]
}

export const Disabled: StoryObj<TextInputProps> = {
    args: {
        disabled: true
    },
    decorators: [
        (Story) => {
            return(
                <Box as='label' css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
                    <Text>Digite seu usuario</Text>
                    {Story()}
                </Box>
            )
        }
    ]
}

export const WithPrefix: StoryObj<TextInputProps> = {
    args: { 
        prefix: 'github.com/',
        placeholder: 'Ex: caioanderson'
    }
}


