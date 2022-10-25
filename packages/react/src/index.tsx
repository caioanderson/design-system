import { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
    fontFamily: '$default',
    backgroundColor: '$amber500',
    borderRadius: '$sm',
    border: 0,
    fontWeight: 'bold',

    variants:{
        size: {
            small : {
                fontSize: 14,
                padding: '$4',
            },
            big : {
                fontSize: 16,
                padding: '$6',
            }
        }
    },

    defaultVariants: {
        size: 'small'
    }

})

export type ButtonProps = ComponentProps<typeof Button>