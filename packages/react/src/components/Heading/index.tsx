import { ComponentProps, ElementType } from "react";
import { Heading } from './styles';

export interface HeadingProps extends ComponentProps<typeof Heading> {
    as?: ElementType
}

export const HeadingComponent = ({ children, ...props }: HeadingProps) => {
    return <Heading {...props}> {children} </Heading>
}

HeadingComponent.displayName = 'HeadingComponent'