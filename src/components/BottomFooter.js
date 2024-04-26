import React from 'react'
import { motion } from 'framer-motion'
const BottomFooter = () => {
  return (
    <motion.div
          className="bg-black bottom-0 w-full flex items-center justify-center text-white p-5 md:p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 3 }}
        >
          Enactus MNNIT Allahabad
        </motion.div>
  )
}

export default BottomFooter