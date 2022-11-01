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
  BoxComponent: () => BoxComponent,
  ButtonComponent: () => ButtonComponent,
  Collapse: () => Collapse,
  CollapseContent: () => CollapseContent,
  CollapseTrigger: () => CollapseTrigger,
  HeadingComponent: () => HeadingComponent,
  Modal: () => Modal,
  ModalContent: () => ModalContent,
  ModalTitle: () => ModalTitle,
  ModalTrigger: () => ModalTrigger,
  ModalTriggerClose: () => ModalTriggerClose,
  ModalWrapper: () => ModalWrapper,
  TextComponent: () => TextComponent,
  TextInputComponent: () => TextInputComponent,
  TooltipComponent: () => TooltipComponent,
  TooltipContent: () => TooltipContent,
  TooltipProvider: () => TooltipProvider,
  TooltipTrigger: () => TooltipTrigger
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

// src/components/Box/styles.ts
var Box = styled("div", {
  padding: "$4",
  borderRadius: "$md",
  backgroundColor: "$gray800",
  border: "1px solid $gray600"
});

// src/components/Box/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var BoxComponent = ({ children, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
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
var import_jsx_runtime2 = require("react/jsx-runtime");
var TextComponent = ({ children, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Text, {
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
var import_jsx_runtime3 = require("react/jsx-runtime");
var HeadingComponent = ({ children, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(Heading, {
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
var import_jsx_runtime4 = require("react/jsx-runtime");
var ButtonComponent = ({ children, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button, {
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
var import_jsx_runtime5 = require("react/jsx-runtime");
function TextInputComponent({ prefix, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(TextInput, {
    children: [
      !!prefix && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Prefix, {
        children: prefix
      }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Input, {
        ...props
      })
    ]
  });
}
TextInputComponent.displayName = "TextInputComponent";

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
var import_jsx_runtime6 = require("react/jsx-runtime");
var ModalWrapperStyle = styled(DialogPrimitive.Content, ModalWrapperCSS);
var ModalOverlayStyle = styled(DialogPrimitive.Overlay, ModalOverlayCSS);
var ModalContentStyle = styled("div", ModalContentCSS);
var ModalTriggerCloseStyle = styled(DialogPrimitive.Close, ModalTriggerCloseCSS);
var Modal = ({ overlay = true, children, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(DialogPrimitive.Root, {
    ...props,
    children: [
      overlay && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ModalOverlayStyle, {}),
      children
    ]
  });
};
var ModalWrapper = ({ children, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ModalWrapperStyle, {
    ...props,
    children
  });
};
var ModalTriggerClose = ({ children, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ModalTriggerCloseStyle, {
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ContainerFooterCard, {
      children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ButtonComponent, {
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
var Collapsible = __toESM(require("@radix-ui/react-collapsible"));

// src/components/Collapse/styles.ts
var import_react2 = require("@stitches/react");
var CollapsibleContentContainer = (0, import_react2.styled)("div", {
  maxWidth: 300
});

// src/components/Collapse/index.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var Collapse = ({ children, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Collapsible.Root, {
    ...props,
    children
  });
};
var CollapseTrigger = ({ children, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Collapsible.Trigger, {
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ButtonComponent, {
      variant: "primary",
      children
    })
  });
};
var CollapseContent = ({ children, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Collapsible.Content, {
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(CollapsibleContentContainer, {
      css: { marginTop: 10 },
      children
    })
  });
};
CollapseTrigger.displayName = "CollapseTriguer";
CollapseContent.displayName = "CollapseContent";

// src/components/Tooltip/index.tsx
var Tooltip2 = __toESM(require("@radix-ui/react-tooltip"));

// src/components/Tooltip/styles.ts
var Tooltip = __toESM(require("@radix-ui/react-tooltip"));
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
var import_jsx_runtime8 = require("react/jsx-runtime");
var TooltipProvider = ({ children, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Tooltip2.Provider, {
    children
  });
};
var TooltipComponent = ({ children, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Tooltip2.Root, {
    ...props,
    children
  });
};
var TooltipTrigger = ({ children, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Tooltip2.Trigger, {
    ...props,
    children
  });
};
var TooltipContent = ({ children, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Tooltip2.Portal, {
    children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(StyledContent, {
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(StyledArrow, {})
      ]
    })
  });
};
TooltipProvider.displayName = "TooltipProvider";
TooltipTrigger.displayName = "TooltipTrigger";
TooltipContent.displayName = "TooltipContent";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
});
