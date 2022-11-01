import type { Meta, Story } from '@storybook/react'
import { useArgs } from '@storybook/client-api'
import { TooltipComponent, TooltipProps, TooltipTrigger, TooltipContent, TooltipProvider } from '@caio-ui/react'
import { Info } from 'phosphor-react'
import { colors } from '@caio-ui/tokens'

const containerIconStyle = {
    padding: 10,
    background: colors.white,
    borderRadius: 99999,
    width: 20,
    height: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

export default {
    title: 'Components/Tooltip',
    component: TooltipComponent,
    args: {
        open: false,
    },
    argTypes: {
        open: { control: 'boolean' },
        onOpenChange: { control: false },
        defaultOpen: { control: false },
        delayDuration: { control: false },
        disableHoverableContent: { control: false }
    }
} as Meta<TooltipProps>

const Templates: Story<TooltipProps> = (args) => {

    const [, updateArgs] = useArgs()

    return (
        <TooltipProvider >
            <TooltipComponent {...args} onOpenChange={(open) => updateArgs({ open })}>
                <TooltipTrigger asChild>
                    <div style={containerIconStyle} >
                        <Info weight='bold' />
                    </div>
                </TooltipTrigger>
                <TooltipContent sideOffset={5}>
                    Exemplo de texto
                </TooltipContent>
            </TooltipComponent>
        </TooltipProvider>
    )
}

export const Tooltip = Templates.bind({})