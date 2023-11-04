import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import { Wave } from "../atoms/Svg";

/**
 *
 * @param {VStack} props
 * @param {top} props.waveT wave top position default -40%
 * @returns
 */
const WaveContent = (props) => {
   return (
      <VStack {...props} bottom={0} gap={0} spacing={0}>
         <Box w="100%" m={0} transform="translateY(2px)">
            <Wave />
         </Box>
         <VStack bg="blue.sm" pb="10" w="full">
            {props.children}
         </VStack>
      </VStack>
   );
};

export default WaveContent;
