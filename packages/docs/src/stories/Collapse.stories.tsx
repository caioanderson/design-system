import type { Meta, Story } from '@storybook/react'
import { useArgs } from '@storybook/client-api'
import {
    Collapse as CallapseContainer,
    CollapseProps, CollapseTrigger,
    CollapseContent, BoxComponent, TextComponent
} from '@caio-ui/react'
import { ArrowsInLineVertical, X } from 'phosphor-react'

export default {
    title: "Components/Collapse",
    component: CallapseContainer,
    args: {
        open: false,
        disabled: false
    },
    argTypes: {
        open: { control: 'boolean' },
        disabled: { control: 'boolean' },
        onOpenChange: { control: false },
        defaultOpen: { control: false }
    },

} as Meta<CollapseProps>


const Templates: Story<CollapseProps> = (args) => {

    const [, updateArgs] = useArgs()

    return (
        <CallapseContainer {...args} onOpenChange={(open) => updateArgs({ open })} >
            <CollapseTrigger asChild>
                {args.open || args.disabled ? <X weight='bold' /> : <ArrowsInLineVertical weight='bold' />}
            </CollapseTrigger>
            <CollapseContent >
                <BoxComponent>
                    <TextComponent>Item 1</TextComponent>
                </BoxComponent>
                <BoxComponent>
                    <TextComponent>Item 2</TextComponent>
                </BoxComponent>
            </CollapseContent>
        </CallapseContainer>
    )
}

export const Collapse = Templates.bind({})