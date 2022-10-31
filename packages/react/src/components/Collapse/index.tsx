import { ComponentProps } from "react";
import * as Collapsible from '@radix-ui/react-collapsible'
import { CollapsibleContentContainer } from './styles'
import { ButtonComponent } from "../Button";

export interface CollapseProps extends ComponentProps<typeof Collapsible.Root> { }

export const Collapse = ({ children, ...props }: CollapseProps) => {
    return (
        <Collapsible.Root {...props}>
            {children}
        </Collapsible.Root>
    )
}

interface CollapseTriggerProps extends ComponentProps<typeof Collapsible.Trigger> { }

export const CollapseTrigger = ({ children, ...props }: CollapseTriggerProps) => {

    return (
        <Collapsible.Trigger {...props}>
            <ButtonComponent variant='primary' >
                {children}
            </ButtonComponent>
        </Collapsible.Trigger>
    )
}


interface CollapseContentProps extends ComponentProps<typeof Collapsible.Content> { }

export const CollapseContent = ({ children, ...props }: CollapseContentProps) => {
    return (
        <Collapsible.Content {...props}>
            <CollapsibleContentContainer css={{ marginTop: 10 }}>
                {children}
            </CollapsibleContentContainer>
        </Collapsible.Content>
    )
}

CollapseTrigger.displayName = 'CollapseTriguer'
CollapseContent.displayName = 'CollapseContent'