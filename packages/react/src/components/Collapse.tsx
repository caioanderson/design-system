import { ComponentProps, useState } from "react";
import { styled } from "@stitches/react";
import * as Collapsible from '@radix-ui/react-collapsible'
import { ArrowDown, ArrowUp } from 'phosphor-react'
import { ButtonTeste } from "./Button";

const CollapsibleContentContainer = styled('div', {
    maxWidth: 300
})

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
            <ButtonTeste variant='primary' >
                {children}
            </ButtonTeste>
        </Collapsible.Trigger>
    )
}

CollapseTrigger.displayName = 'CollapseTriguer'

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

// export const CollapseContent = Collapsible.Content
CollapseContent.displayName = 'CollapseContent'