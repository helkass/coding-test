import { Text } from "@chakra-ui/react";
import React from "react";

const SubtitleSection = ({ children, ...props }) => {
   return (
      <Text
         {...props}
         fontSize="xs"
         mx="auto"
         textAlign="center"
         my="4"
         maxW="450px"
         fontWeight="600">
         {children}
      </Text>
   );
};

export default SubtitleSection;
