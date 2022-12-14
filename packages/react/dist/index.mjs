// ../tokens/dist/index.mjs
var colors = {
  white: "#FFF",
  black: "#000",
  gray100: "#E1E1E6",
  gray200: "#A9A9B2",
  gray400: "#7C7C8A",
  gray500: "#505059",
  gray600: "#323238",
  gray700: "#29292E",
  gray800: "#202024",
  gray900: "#121214",
  amber300: "#FCD34D",
  amber500: "#F59E0B",
  amber700: "#B45309",
  amber900: "#78350F"
};
var fonts = {
  default: "Roboto, sans-serif",
  code: "monospace"
};
var fontSizes = {
  xxs: "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "4xl": "2rem",
  "5xl": "2.25rem",
  "6xl": "3rem",
  "7xl": "4rem",
  "8xl": "4.5rem",
  "9xl": "6rem"
};
var fontWeights = {
  regular: "400",
  medium: "500",
  bold: "700"
};
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};
var space = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  40: "10rem",
  64: "16rem",
  80: "20rem"
};
var radii = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "99999px"
};

// src/styles/index.ts
import { createStitches, defaultThemeMap } from "@stitches/react";
var {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: "space",
    width: "space"
  },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    lineHeights,
    radii,
    space,
    fonts
  }
});

// src/components/Box/styles.ts
var Box = styled("div", {
  padding: "$4",
  borderRadius: "$md",
  backgroundColor: "$gray800",
  border: "1px solid $gray600"
});

// src/components/Box/index.tsx
import { jsx } from "react/jsx-runtime";
var BoxComponent = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx(Box, {
    ...props,
    children
  });
};
BoxComponent.displayName = "BoxComponent";

// src/components/Text/styles.ts
var Text = styled("p", {
  fontFamily: "$default",
  lineHeight: "$base",
  margin: 0,
  color: "$gray100",
  variants: {
    size: {
      xxs: { fontSize: "$xxs" },
      xs: { fontSize: "$xs" },
      sm: { fontSize: "$sm" },
      md: { fontSize: "$md" },
      lg: { fontSize: "$lg" },
      xl: { fontSize: "$xl" },
      "2xl": { fontSize: "$2xl" },
      "4xl": { fontSize: "$4xl" },
      "5xl": { fontSize: "$5xl" },
      "6xl": { fontSize: "$6xl" },
      "7xl": { fontSize: "$7xl" },
      "8xl": { fontSize: "$8xl" },
      "9xl": { fontSize: "$9xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});

// src/components/Text/index.tsx
import { jsxs } from "react/jsx-runtime";
var TextComponent = ({ children, ...props }) => {
  return /* @__PURE__ */ jsxs(Text, {
    ...props,
    children: [
      " ",
      children,
      " "
    ]
  });
};
TextComponent.displayName = "TextComponent";

// src/components/Heading/styles.ts
var Heading = styled("h2", {
  fontFamily: "$default",
  lineHeight: "$shorter",
  margin: 0,
  color: "$gray100",
  variants: {
    size: {
      sm: { fontSize: "$xl" },
      md: { fontSize: "$2xl" },
      lg: { fontSize: "$4xl" },
      "2xl": { fontSize: "$5xl" },
      "3xl": { fontSize: "$6xl" },
      "4xl": { fontSize: "$7xl" },
      "5xl": { fontSize: "$8xl" },
      "6xl": { fontSize: "$9xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});

// src/components/Heading/index.tsx
import { jsxs as jsxs2 } from "react/jsx-runtime";
var HeadingComponent = ({ children, ...props }) => {
  return /* @__PURE__ */ jsxs2(Heading, {
    ...props,
    children: [
      " ",
      children,
      " "
    ]
  });
};
HeadingComponent.displayName = "HeadingComponent";

// src/components/Button/styles.ts
var Button = styled("button", {
  all: "unset",
  borderRadius: "$sm",
  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "$default",
  textAlign: "center",
  width: 120,
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",
  cursor: "pointer",
  svg: {
    width: "$4",
    height: "$4"
  },
  "&:disabled": {
    cursor: "not-allowed"
  },
  variants: {
    variant: {
      primary: {
        color: "$black",
        background: "$amber500",
        "&:not(:disabled):hover": {
          background: "$amber300"
        },
        "&:disabled": {
          background: "$gray200"
        }
      },
      secondary: {
        color: "$amber300",
        background: "transparent",
        border: "2px solid $amber500",
        "&:not(:disabled):hover": {
          background: "$amber500",
          color: "$white"
        },
        "&:disabled": {
          color: "$gray200",
          borderColor: "$gray200"
        }
      },
      tertiary: {
        color: "$gray100",
        "&:not(:disabled):hover": {
          color: "$white"
        },
        "&:disabled": {
          color: "$gray600"
        }
      },
      onlyIcon: {
        background: "$amber300",
        "&:not(:disabled):hover": {
          background: "$amber500"
        }
      }
    },
    size: {
      sm: {
        padding: "0 $4",
        height: 38
      },
      md: {
        padding: "0 $4",
        height: 46
      }
    },
    rounded: {
      true: {
        width: "$12",
        height: "$12",
        borderRadius: "$full"
      }
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
});

// src/components/Button/index.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var ButtonComponent = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx2(Button, {
    ...props,
    children
  });
};
ButtonComponent.displayName = "ButtonComponent";

// src/components/TextInput/styles.ts
var TextInput = styled("div", {
  backgroundColor: "$gray900",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $gray900",
  display: "flex",
  alignItems: "baseline",
  "&:has(input:focus)": {
    borderColor: "$amber300"
  },
  "&:has(input:disabled)": {
    opacity: 0.5,
    cursor: "not-allowed"
  }
});
var Prefix = styled("span", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$gray400",
  fontWeight: "$regular"
});
var Input = styled("input", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$white",
  fontWeight: "$regular",
  background: "transparent",
  border: 0,
  width: "100%",
  "&:focus": {
    outline: 0
  },
  "&:disabled": {
    cursor: "not-allowed"
  },
  "&:placeholder": {
    color: "$gray400"
  }
});

// src/components/TextInput/index.tsx
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
function TextInputComponent({ prefix, ...props }) {
  return /* @__PURE__ */ jsxs3(TextInput, {
    children: [
      !!prefix && /* @__PURE__ */ jsx3(Prefix, {
        children: prefix
      }),
      /* @__PURE__ */ jsx3(Input, {
        ...props
      })
    ]
  });
}
TextInputComponent.displayName = "TextInputComponent";

// src/components/Modal/index.tsx
import * as DialogPrimitive from "@radix-ui/react-dialog";

// src/components/Modal/styles.ts
var overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 }
});
var overlayHide = keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 }
});
var ModalOverlayCSS = css({
  background: "rgba(0,0,0,0.5)",
  position: "fixed",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&[data-state=open]": {
    animation: `${overlayShow} 0.2s ease-in`
  },
  "&[data-state=close]": {
    animation: `${overlayHide} 0.2s ease-in`
  }
});
var ModalWrapperCSS = css({
  background: "$white"
});
var ModalContentCSS = css({
  backgroundColor: "$white",
  borderRadius: 6,
  boxShadow: "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "450px",
  maxHeight: "85vh",
  padding: 25,
  "&:focus": { outline: "none" }
});
var ModalTriggerCloseCSS = css({
  marginTop: "$4",
  display: "flex",
  flexDirection: "flex-end",
  alignItems: "flex-end"
});
var ContainerFooterCard = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "flex-end"
});

// src/components/Modal/index.tsx
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
var ModalWrapperStyle = styled(DialogPrimitive.Content, ModalWrapperCSS);
var ModalOverlayStyle = styled(DialogPrimitive.Overlay, ModalOverlayCSS);
var ModalContentStyle = styled("div", ModalContentCSS);
var ModalTriggerCloseStyle = styled(DialogPrimitive.Close, ModalTriggerCloseCSS);
var Modal = ({ overlay = true, children, ...props }) => {
  return /* @__PURE__ */ jsxs4(DialogPrimitive.Root, {
    ...props,
    children: [
      overlay && /* @__PURE__ */ jsx4(ModalOverlayStyle, {}),
      children
    ]
  });
};
var ModalWrapper = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx4(ModalWrapperStyle, {
    ...props,
    children
  });
};
var ModalTriggerClose = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx4(ModalTriggerCloseStyle, {
    ...props,
    children: /* @__PURE__ */ jsx4(ContainerFooterCard, {
      children: /* @__PURE__ */ jsx4(ButtonComponent, {
        size: "sm",
        variant: "primary",
        children: "Cancelar"
      })
    })
  });
};
var ModalTrigger = DialogPrimitive.Trigger;
ModalTrigger.displayName = "ModalTrigger";
var ModalTitle = DialogPrimitive.Title;
ModalTitle.displayName = "ModalTitle";
var ModalContent = ModalContentStyle;
ModalContent.displayName = "ModalContent";

// src/components/Collapse/index.tsx
import * as Collapsible from "@radix-ui/react-collapsible";

// src/components/Collapse/styles.ts
import { styled as styled2 } from "@stitches/react";
var CollapsibleContentContainer = styled2("div", {
  maxWidth: 300
});

// src/components/Collapse/index.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
var Collapse = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx5(Collapsible.Root, {
    ...props,
    children
  });
};
var CollapseTrigger = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx5(Collapsible.Trigger, {
    ...props,
    children: /* @__PURE__ */ jsx5(ButtonComponent, {
      variant: "primary",
      children
    })
  });
};
var CollapseContent = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx5(Collapsible.Content, {
    ...props,
    children: /* @__PURE__ */ jsx5(CollapsibleContentContainer, {
      css: { marginTop: 10 },
      children
    })
  });
};
CollapseTrigger.displayName = "CollapseTriguer";
CollapseContent.displayName = "CollapseContent";

// src/components/Tooltip/index.tsx
import * as Tooltip2 from "@radix-ui/react-tooltip";

// src/components/Tooltip/styles.ts
import * as Tooltip from "@radix-ui/react-tooltip";
var slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" }
});
var slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" }
});
var slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" }
});
var slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" }
});
var StyledContent = styled(Tooltip.Content, {
  borderRadius: 4,
  padding: "10px 15px",
  fontSize: 15,
  lineHeight: 1,
  color: "$amber700",
  backgroundColor: "white",
  boxShadow: "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  userSelect: "none",
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "400ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    willChange: "transform, opacity",
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade }
    }
  }
});
var StyledArrow = styled(Tooltip.Arrow, {
  fill: "white"
});

// src/components/Tooltip/index.tsx
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
var TooltipProvider = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx6(Tooltip2.Provider, {
    children
  });
};
var TooltipComponent = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx6(Tooltip2.Root, {
    ...props,
    children
  });
};
var TooltipTrigger = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx6(Tooltip2.Trigger, {
    ...props,
    children
  });
};
var TooltipContent = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx6(Tooltip2.Portal, {
    children: /* @__PURE__ */ jsxs5(StyledContent, {
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx6(StyledArrow, {})
      ]
    })
  });
};
TooltipProvider.displayName = "TooltipProvider";
TooltipTrigger.displayName = "TooltipTrigger";
TooltipContent.displayName = "TooltipContent";
export {
  BoxComponent,
  ButtonComponent,
  Collapse,
  CollapseContent,
  CollapseTrigger,
  HeadingComponent,
  Modal,
  ModalContent,
  ModalTitle,
  ModalTrigger,
  ModalTriggerClose,
  ModalWrapper,
  TextComponent,
  TextInputComponent,
  TooltipComponent,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
};
