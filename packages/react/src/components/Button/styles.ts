import { styled } from "../../styles";

export const Button = styled('button', {
    all: 'unset',
    borderRadius: '$sm',
    fontSize: '$sm',
    fontWeight: '$medium',
    fontFamily: '$default',
    textAlign: 'center',
    width: 120,
    boxSizing: 'border-box',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$2',

    cursor: 'pointer',

    svg: {
        width: '$4',
        height: '$4',
    },


    '&:disabled': {
        cursor: 'not-allowed'
    },

    variants: {
        variant: {
            primary: {
                color: '$black',
                background: '$amber500',

                '&:not(:disabled):hover': {
                    background: '$amber300'
                },

                '&:disabled': {
                    background: '$gray200',
                }
            },

            secondary: {
                color: '$amber300',
                background: 'transparent',
                border: '2px solid $amber500',

                '&:not(:disabled):hover': {
                    background: '$amber500',
                    color: '$white'
                },

                '&:disabled': {
                    color: '$gray200',
                    borderColor: '$gray200',
                }
            },

            tertiary: {
                color: '$gray100',

                '&:not(:disabled):hover': {
                    color: '$white'
                },

                '&:disabled': {
                    color: '$gray600',
                }
            },
            onlyIcon : {
                background: '$amber300',
                '&:not(:disabled):hover': {
                    background: '$amber500'
                },
            }
        },

        size: {
            sm: {
                padding: '0 $4',
                height: 38
            },
            md: {
                padding: '0 $4',
                height: 46
            }
        },

        rounded: {
            true : {
                width: '$12',
                height: '$12',
                borderRadius: '$full'
            }
        }
    },

    defaultVariants: {
        variant: 'primary',
        size: 'md'
    }
})