"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Box: () => Box,
  Button: () => Button,
  Heading: () => Heading,
  Modal: () => Modal,
  ModalContent: () => ModalContent,
  ModalTitle: () => ModalTitle,
  ModalTrigger: () => ModalTrigger,
  ModalTriggerClose: () => ModalTriggerClose,
  ModalWrapper: () => ModalWrapper,
  Text: () => Text,
  TextInput: () => TextInput
});
module.exports = __toCommonJS(src_exports);

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
var import_react = require("@stitches/react");
var {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = (0, import_react.createStitches)({
  themeMap: {
    ...import_react.defaultThemeMap,
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
var Button = styled("button", {
  all: "unset",
  borderRadius: "$sm",
  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "$default",
  textAlign: "center",
  minWidth: 120,
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
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
});
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
var import_jsx_runtime = require("react/jsx-runtime");
function TextInput({ prefix, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TextInputContainer, {
    children: [
      !!prefix && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prefix, {
        children: prefix
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
        ...props
      })
    ]
  });
}
TextInput.displayName = "TextInput";

// src/components/Modal/index.tsx
var DialogPrimitive = __toESM(require("@radix-ui/react-dialog"));

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
var import_jsx_runtime2 = require("react/jsx-runtime");
var ModalWrapperStyle = styled(DialogPrimitive.Content, ModalWrapperCSS);
var ModalOverlayStyle = styled(DialogPrimitive.Overlay, ModalOverlayCSS);
var ModalContentStyle = styled("div", ModalContentCSS);
var ModalTriggerCloseStyle = styled(DialogPrimitive.Close, ModalTriggerCloseCSS);
var Modal = ({ overlay = true, children, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(DialogPrimitive.Root, {
    ...props,
    children: [
      overlay && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ModalOverlayStyle, {}),
      children
    ]
  });
};
var ModalWrapper = ({ children, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ModalWrapperStyle, {
    ...props,
    children
  });
};
var ModalTriggerClose = ({ children, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ModalTriggerCloseStyle, {
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ContainerFooterCard, {
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Button, {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Box,
  Button,
  Heading,
  Modal,
  ModalContent,
  ModalTitle,
  ModalTrigger,
  ModalTriggerClose,
  ModalWrapper,
  Text,
  TextInput
});
