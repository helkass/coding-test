// theme.ts (tsx file with usage of StyleFunctions, see 4.)
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
   components: {
      Button: {
         variants: {
            badge: {
               bg: "orange.500",
               color: "white",
               fontSize: "sm",
               h: "6",
               paddingInlineStart: "2",
               paddingInlineEnd: "2",
               align: "center",
               rounded: "md",
               fontWeight: "extrabold",
               _hover: {
                  bgColor: "orange.600",
               },
            },
            dark: {
               fontSize: "sm",
               paddingInlineStart: "3",
               paddingInlineEnd: "3",
               bgColor: "blackAlpha.500",
               color: "white",
               align: "center",
               h: "8",
               gap: "2",
               _hover: {
                  bgColor: "blackAlpha.600",
               },
            },
            brown: {
               fontSize: "sm",
               paddingInlineStart: "3",
               paddingInlineEnd: "3",
               align: "center",
               bgColor: "var(--color-main-text)",
               color: "white",
               h: "8",
               gap: "2",
               _hover: {
                  bgColor: "blackAlpha.600",
               },
            },
            icon: {
               paddingInlineStart: "3",
               paddingInlineEnd: "3",
               align: "center",
               bgColor: "var(--color-main-text-medium)",
               color: "white",
               h: "8",
               minW: "8",
               gap: "2",
               _hover: {
                  bgColor: "blackAlpha.600",
               },
            },
            light: {
               bg: "white",
               color: "blue.sm",
               _hover: {
                  bgColor: "blackAlpha.600",
                  color: "whiteAlpha.700",
               },
            },
         },
         defaultProps: {
            h: "8",
            fontSize: "sm",
            textTransform: "capitalize",
         },
      },
      SlideFade: {
         defaultProps: {
            className: "animate-fade-custom",
         },
      },
   },
   colors: {
      blue: {
         sm: "var(--color-main-blue)",
         md: "var(--color-main-blue-medium)",
      },
   },
   fonts: {
      body: `'Jost', sans-serif`,
      heading: `'Jost', sans-serif`,
   },
});

export default theme;
