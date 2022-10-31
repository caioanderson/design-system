import type { Meta, Story } from '@storybook/react'
import { useArgs } from '@storybook/client-api'
import { Collapse as CallapseContainer, CollapseProps, CollapseTrigger, CollapseContent, Box, Text } from '@caio-ui/react'
import { ArrowsInLineVertical, X } from 'phosphor-react'
import { useEffect } from 'react'

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

    function setOpenCollapse(open: boolean) {
        console.log(open)
        if (!args.disabled)
            updateArgs({ open })
        // else
        //     updateArgs({ false })
    }

    // useEffect(() => {
    //     if (args.open)
    //         updateArgs({ open })
    // }, [args])

    return (
        <CallapseContainer {...args} onOpenChange={(open) => updateArgs({open})}>
            <CollapseTrigger asChild>
                {args.open || args.disabled ? <X weight='bold' /> : <ArrowsInLineVertical weight='bold' />}
            </CollapseTrigger>
            <CollapseContent>
                <Box>
                    <Text>Item 1</Text>
                </Box>
                <Box>
                    <Text>Item 2</Text>
                </Box>
            </CollapseContent>
        </CallapseContainer>
    )
}

export const Collapse = Templates.bind({})