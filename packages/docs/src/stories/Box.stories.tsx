import type { Story, Meta } from '@storybook/react'
import { BoxComponent, BoxProps, TextComponent } from '@caio-ui/react'

export default {
    title: 'Surfaces/Box',
    component: BoxComponent,
    args: {
        children: <TextComponent>Testando elemento Box</TextComponent>
    },
    argTypes: {
        children: {
            control: {
                type: null
            }
        }
    }

} as Meta<BoxProps>

const Templates: Story<BoxProps> = (args) => {
    return (
        <BoxComponent {...args} />
    )
}

export const Box = Templates.bind({})
