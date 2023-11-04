import { Box } from "@chakra-ui/react";
import React from "react";

const YoutubeEmbed = ({ embdedId, title, ...props }) => {
   return (
      <Box
         {...props}
         zIndex="10"
         maxW="560px"
         aspectRatio={4 / 3}
         w="100%"
         h="240px"
         pos="relative"
         rounded="lg"
         bg="var(--color-main-blue)"
         sx={{
            border: "6px solid var(--color-main-blue)",
         }}>
         <iframe
            style={{
               borderRadius: "0.5rem",
            }}
            width={"100%"}
            height={"100%"}
            title={title}
            src={`https://www.youtube.com/embed/${embdedId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
         />
      </Box>
   );
};

export default YoutubeEmbed;
