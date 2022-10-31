import { ComponentProps, ElementType } from "react";
import { Box } from './styles'

export interface BoxProps extends ComponentProps<typeof Box> {
    as?: ElementType
}

export const BoxComponent = ({ children, ...props }: BoxProps) => {
    return (
        <Box {...props}>
            {children}
        </Box>
    )
}

BoxComponent.displayName = 'BoxComponent'