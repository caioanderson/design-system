import { ComponentProps, ElementType } from "react";
import { Text } from './styles';

export interface TextProps extends ComponentProps<typeof Text> {
    as?: ElementType
}

export const TextComponent = ({ children, ...props } : TextProps) => {
    return(
        <Text {...props}> { children } </Text>
    )
}

TextComponent.displayName = 'TextComponent'