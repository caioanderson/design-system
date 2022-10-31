import type { Meta, Story, StoryObj } from '@storybook/react'
import { useArgs } from '@storybook/client-api'
import { Collapse, CollapseProps, CollapseTrigger, CollapseContent, Box, Text } from '@caio-ui/react'
import { ArrowDown, ArrowUp, ArrowsInLineVertical, X } from 'phosphor-react'

export default {
    title: "Table/Collapse",
    component: Collapse,
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
        <Collapse {...args} onOpenChange={(open) => updateArgs({ open })}>
            <CollapseTrigger asChild>
                {args.open ? <X weight='bold'/> : <ArrowsInLineVertical weight='bold'/>}
            </CollapseTrigger>
            <CollapseContent>
                <Box>
                    <Text>Teste</Text>
                </Box>
                <Box>
                    <Text>Teste</Text>
                </Box>
            </CollapseContent>
        </Collapse>
    )
}

export const Primary = Templates.bind({})