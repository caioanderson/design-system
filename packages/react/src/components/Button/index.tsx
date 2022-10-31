import { ComponentProps, ElementType } from "react";
import { Button } from './styles'

export interface ButtonProps extends ComponentProps<typeof Button> {
    as?: ElementType
}

export const ButtonComponent = ({ children, ...props }: ButtonProps) => {
    return(
        <Button {...props}>
            {children}
        </Button>
    )
}

ButtonComponent.displayName = 'ButtonComponent'