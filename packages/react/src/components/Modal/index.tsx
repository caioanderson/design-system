import { ComponentProps } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { styled } from "../../styles"
import {
    ModalOverlayCSS, ModalContentCSS,
    ModalWrapperCSS, ModalTriggerCloseCSS, ContainerFooterCard
} from './styles'
import { ButtonComponent } from "../Button";

const ModalWrapperStyle = styled(DialogPrimitive.Content, ModalWrapperCSS)
const ModalOverlayStyle = styled(DialogPrimitive.Overlay, ModalOverlayCSS)
const ModalContentStyle = styled('div', ModalContentCSS)
const ModalTriggerCloseStyle = styled(DialogPrimitive.Close, ModalTriggerCloseCSS)

export interface ModalProps extends ComponentProps<typeof DialogPrimitive.Root> {
    overlay?: boolean;
}

export const Modal = ({ overlay = true, children, ...props }: ModalProps) => {
    return (
        <DialogPrimitive.Root {...props}>
            {overlay && <ModalOverlayStyle />}
            {children}
        </DialogPrimitive.Root>
    )
}

export type ModalWrapperProps = DialogPrimitive.DialogContentProps & ComponentProps<typeof ModalWrapperStyle> & {
    width?: number;
}

export const ModalWrapper = ({ children, ...props }: ModalWrapperProps) => {
    return (
        <ModalWrapperStyle {...props}>
            {children}
        </ModalWrapperStyle>
    )
}

export type ModalTriggerCloseProps = DialogPrimitive.DialogCloseProps & ComponentProps<typeof ModalTriggerCloseStyle>
export const ModalTriggerClose = ({ children, ...props }: ModalTriggerCloseProps) => {
    return (
        <ModalTriggerCloseStyle {...props}>
            <ContainerFooterCard>
                <ButtonComponent size='sm' variant='primary'>Cancelar</ButtonComponent>
            </ContainerFooterCard>
        </ModalTriggerCloseStyle>
    )
}

export const ModalTrigger = DialogPrimitive.Trigger
ModalTrigger.displayName = 'ModalTrigger'

export const ModalTitle = DialogPrimitive.Title
ModalTitle.displayName = 'ModalTitle'

export const ModalContent = ModalContentStyle
ModalContent.displayName = 'ModalContent'