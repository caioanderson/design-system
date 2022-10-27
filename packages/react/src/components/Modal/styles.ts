import { css, keyframes, styled } from "../../styles";

const overlayShow = keyframes({
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
});

const overlayHide = keyframes({
    '0%': { opacity: 1 },
    '100%': { opacity: 0 },
});
  
export const ModalOverlayCSS = css({
    background: 'rgba(0,0,0,0.5)',
    position: 'fixed',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '&[data-state=open]':{ 
        animation: `${overlayShow} 0.2s ease-in` 
    },

    '&[data-state=close]':{ 
        animation: `${overlayHide} 0.2s ease-in` 
    },

})

export const ModalWrapperCSS = css({
    background: '$white',

})

export const ModalContentCSS = css({
    backgroundColor: '$white',
    borderRadius: 6,
    boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90vw',
    maxWidth: '450px',
    maxHeight: '85vh',
    padding: 25,

    '&:focus': { outline: 'none' },
})

export const ModalTriggerCloseCSS = css({
    marginTop: '$4',
    display: 'flex',
    flexDirection: 'flex-end',
    alignItems: 'flex-end',
})

export const ContainerFooterCard = styled('div', {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
})