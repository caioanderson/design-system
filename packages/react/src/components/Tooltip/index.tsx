import { ComponentProps } from 'react'
import * as Tooltip from '@radix-ui/react-tooltip'
import { StyledContent, StyledArrow } from './styles'

interface TooltipProviderProps extends ComponentProps<typeof Tooltip.Provider> { }
export const TooltipProvider = ({ children, ...props }: TooltipProviderProps) => {
    return (
        <Tooltip.Provider>
            {children}
        </Tooltip.Provider>
    )
}

export interface TooltipProps extends ComponentProps<typeof Tooltip.Root> { }
export const TooltipComponent = ({ children, ...props }: TooltipProps) => {
    return (
        <Tooltip.Root {...props}>
            {children}
        </Tooltip.Root>

    )
}

interface TooltipTriggerProps extends ComponentProps<typeof Tooltip.Trigger> { }
export const TooltipTrigger = ({ children, ...props }: TooltipTriggerProps) => {
    return (
        <Tooltip.Trigger {...props}>
            {children}
        </Tooltip.Trigger>
    )
}

interface TooltipContentPros extends ComponentProps<typeof Tooltip.Content> { }
export const TooltipContent = ({ children, ...props }: TooltipContentPros) => {
    return (
        <Tooltip.Portal>
            <StyledContent {...props}>
                {children}
                <StyledArrow />
            </StyledContent>
        </Tooltip.Portal>
    )
}
TooltipProvider.displayName = 'TooltipProvider'
TooltipTrigger.displayName = 'TooltipTrigger'
TooltipContent.displayName = 'TooltipContent'




