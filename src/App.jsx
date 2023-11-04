import { useState } from "react";
import * as Component from "./components";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { MdMusicNote, MdMusicOff } from "react-icons/md";
import music from "../static/music.mp3";
import ReactHowler from "react-howler";
import { Button, HStack, Icon, useDisclosure } from "@chakra-ui/react";

function App() {
   const [frontIsOpen, setFrontOpen] = useState(false);
   const [conMusic, setConMusic] = useState(false);
   const { isOpen, onOpen, onClose } = useDisclosure();

   const handleOpen = () => {
      setFrontOpen(!frontIsOpen);
      setConMusic(true);
   };
   return (
      <div className="App">
         <Component.Layout
            setPlayMusic={() => handleOpen()}
            isPlayMusic={frontIsOpen}>
            <Component.Front
               setOpen={() => handleOpen(!frontIsOpen)}
               isOpen={frontIsOpen}
            />
            <ReactHowler src={music} playing={frontIsOpen && conMusic} />
            {frontIsOpen && (
               <HStack pos="fixed" zIndex="10" bottom="1.5" left="1.5" gap="1">
                  <Button
                     onClick={onOpen}
                     fontSize="xs"
                     p={0}
                     variant="icon"
                     rounded="full">
                     <Icon as={FaBars} />
                  </Button>
                  <Button
                     onClick={() => setConMusic(!conMusic)}
                     fontSize="xs"
                     variant="icon"
                     p={0}
                     rounded="full">
                     {conMusic ? (
                        <Icon as={MdMusicNote} />
                     ) : (
                        <Icon as={MdMusicOff} />
                     )}
                  </Button>
               </HStack>
            )}
            <Component.Sidebar isOpen={isOpen} onClose={onClose} />
            {frontIsOpen && (
               <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 2.7 }}>
                  <Component.Hero />
                  <Component.Surah />
                  <Component.Profile />
                  <Component.Story />
                  <Component.Celebration />
                  <Component.Confirmation />
                  <Component.Stream />
                  <Component.Gallery />
                  <Component.Filter />
                  <Component.Wishes />
               </motion.div>
            )}
         </Component.Layout>
      </div>
   );
}

export default App;
