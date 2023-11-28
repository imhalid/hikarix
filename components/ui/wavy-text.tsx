'use client'
import { FC } from "react";
import { motion, Variants, HTMLMotionProps } from "framer-motion";

interface Props extends HTMLMotionProps<"div"> {
 text: string;
 delay?: number;
 replay: boolean;
 duration?: number;
}

const WavyText: FC<Props> = ({
 text,
 delay = 0,
 duration = 0.02,
 replay,
 ...props
}: Props) => {

 const container: Variants = {
  hidden: {
   opacity: 0
  },
  visible: (i: number = 1) => ({
   opacity: 1,
   transition: { staggerChildren: duration, delayChildren: i * delay }
  }),
  exit: {
   opacity: 0,
   transition: { staggerChildren: duration }
  }
 };

 const child: Variants = {
  visible: {
   opacity: 1,
   y: 0,
   transition: {
    type: "spring",
    damping: 12,
    stiffness: 200
   }
  },
  hidden: {
   opacity: 0,
   y: 5,
   transition: {
    type: "spring",
    damping: 12,
    stiffness: 200
   }
  },

 };

 const words = text.split(' ');

 return (
  <motion.h1
   key={text}
   style={{ display: "", overflow: "hidden", flexWrap: "wrap" }}
   className="flex flex-wrap"
   variants={container}
   initial="hidden"
   animate={replay ? "visible" : "hidden"}
   exit="exit"
   {...props}
  >
   {words.map((word, index) => (
    // Her kelime için bir motion.div
    <motion.div key={index} className="mr-2 inline-flex" variants={container}>
     {word.split('').map((letter, letterIndex) => (
      // Her harf için bir motion.span
      <motion.span key={letterIndex} variants={child} className=" ">
       {letter}
      </motion.span>
     ))}
    </motion.div>
   ))}
  </motion.h1>
 )
}

export default WavyText;
