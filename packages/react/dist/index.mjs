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

// src/components/Box.tsx
var Box = styled("div", {
  padding: "$4",
  borderRadius: "$md",
  backgroundColor: "$gray800",
  border: "1px solid $gray600"
});
Box.displayName = "Box";

// src/components/Text.tsx
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
Text.displayName = "Text";

// src/components/Heading.tsx
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
Heading.displayName = "Heading";

// src/components/Button.tsx
import { jsx } from "react/jsx-runtime";
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
var ButtonTeste = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx(Button, {
    ...props,
    children
  });
};
Button.displayName = "Button";

// src/components/TextInput/styles.ts
var TextInputContainer = styled("div", {
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
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
function TextInput({ prefix, ...props }) {
  return /* @__PURE__ */ jsxs(TextInputContainer, {
    children: [
      !!prefix && /* @__PURE__ */ jsx2(Prefix, {
        children: prefix
      }),
      /* @__PURE__ */ jsx2(Input, {
        ...props
      })
    ]
  });
}
TextInput.displayName = "TextInput";

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
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var ModalWrapperStyle = styled(DialogPrimitive.Content, ModalWrapperCSS);
var ModalOverlayStyle = styled(DialogPrimitive.Overlay, ModalOverlayCSS);
var ModalContentStyle = styled("div", ModalContentCSS);
var ModalTriggerCloseStyle = styled(DialogPrimitive.Close, ModalTriggerCloseCSS);
var Modal = ({ overlay = true, children, ...props }) => {
  return /* @__PURE__ */ jsxs2(DialogPrimitive.Root, {
    ...props,
    children: [
      overlay && /* @__PURE__ */ jsx3(ModalOverlayStyle, {}),
      children
    ]
  });
};
var ModalWrapper = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx3(ModalWrapperStyle, {
    ...props,
    children
  });
};
var ModalTriggerClose = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx3(ModalTriggerCloseStyle, {
    ...props,
    children: /* @__PURE__ */ jsx3(ContainerFooterCard, {
      children: /* @__PURE__ */ jsx3(Button, {
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

// src/components/Collapse.tsx
import { styled as styled2 } from "@stitches/react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { jsx as jsx4 } from "react/jsx-runtime";
var CollapsibleContentContainer = styled2("div", {
  maxWidth: 300
});
var Collapse = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx4(Collapsible.Root, {
    ...props,
    children
  });
};
var CollapseTrigger = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx4(Collapsible.Trigger, {
    ...props,
    children: /* @__PURE__ */ jsx4(ButtonTeste, {
      variant: "primary",
      children
    })
  });
};
CollapseTrigger.displayName = "CollapseTriguer";
var CollapseContent = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx4(Collapsible.Content, {
    ...props,
    children: /* @__PURE__ */ jsx4(CollapsibleContentContainer, {
      css: { marginTop: 10 },
      children
    })
  });
};
CollapseContent.displayName = "CollapseContent";
export {
  Box,
  Button,
  ButtonTeste,
  Collapse,
  CollapseContent,
  CollapseTrigger,
  Heading,
  Modal,
  ModalContent,
  ModalTitle,
  ModalTrigger,
  ModalTriggerClose,
  ModalWrapper,
  Text,
  TextInput
};
