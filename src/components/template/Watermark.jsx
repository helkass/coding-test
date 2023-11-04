import { Box } from "@chakra-ui/react";
import React from "react";
import { image } from "../../constant/app";

const Watermark = ({ children, ...props }) => {
   return (
      <Box
         backgroundImage={image.watermark}
         backgroundSize="cover"
         w="100%"
         color="white"
         zIndex="1"
         {...props}>
         {children}
      </Box>
   );
};

export default Watermark;
