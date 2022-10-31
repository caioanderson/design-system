import type { StoryObj, Meta } from '@storybook/react'
import { BoxComponent, TextComponent, TextInputComponent, TextInputProps } from '@caio-ui/react'

export default {
    title: 'Form/TextInput',
    component: TextInputComponent,
    args: {},
    
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
    args: {
        placeholder: 'Ex: Caio'
    },
    decorators: [
        (Story) => {
            return(
                <BoxComponent as='label' css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
                    <TextComponent>Digite seu usuario</TextComponent>
                    {Story()}
                </BoxComponent>
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
                <BoxComponent as='label' css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
                    <TextComponent>Digite seu usuario</TextComponent>
                    {Story()}
                </BoxComponent>
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


