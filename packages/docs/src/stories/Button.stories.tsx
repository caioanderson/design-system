import type { StoryObj, Meta } from '@storybook/react'
import { ButtonComponent, ButtonProps } from '@caio-ui/react'
import { ArrowUUpRight, Check } from 'phosphor-react'

export default {
    title: 'Form/Button',
    component: ButtonComponent,
    args: {
        children: 'Send',
        variant: 'primary',
        size: 'md',
        disabled: false,
    },
    argTypes: {
        variant: {
            options: ['primary', 'secondary', 'tertiary'],
            control: {
                type: 'inline-radio'
            }
        },
        size: {
            options: ['sm', 'md'],
            control: {
                type: 'inline-radio'
            }
        },
        disabled: {
            control: {
                type: 'boolean'
            }
        },

        onClick: {
            action: 'click'
        }
    }

} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
    args: {
        children: 'Create new',
        variant: 'secondary',
    }
}

export const Tertiary: StoryObj<ButtonProps> = {
    args: {
        children: 'Cancel',
        variant: 'tertiary',
    }
}

export const Small: StoryObj<ButtonProps> = {
    args: {
        size: 'sm',
    }
}

export const WithIcon: StoryObj<ButtonProps> = {
    args: {
        children: (
            <>
                Proximo passo
                <ArrowUUpRight weight='bold' />
            </>
        )
    },
    argTypes: {
        children: {
            control: {
                type: null
            }
        }
    }
}


export const Disabled: StoryObj<ButtonProps> = {
    args: {
        disabled: true,
    }
}

export const OnlyIcon: StoryObj<ButtonProps> = {
    args: {
        children: <Check weight='bold'/>,
        variant: 'onlyIcon',
        size: 'sm',
        rounded: true,
    }
}