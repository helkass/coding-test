import React from "react";
import { motion } from "framer-motion";

export const FadeInView = ({ children, ...props }) => {
   return (
      <motion.div
         {...props}
         style={{
            width: "100%",
            display: "flex",
            justifyContent: props.justifyContent || "center",
            ...props.style,
         }}
         initial={{ y: 50, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         transition={{ delay: 0.3, duration: 0.3 }}>
         {children}
      </motion.div>
   );
};
