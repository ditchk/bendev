import { motion } from 'framer-motion'

import { BannerAssets } from "@/constants"
import { myBannerAssets } from "@/types"

const BannerPost = () => {
  return (
    <motion.div className="BannerCont"
        initial={{ scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{
        type: "spring",
        stiffness: 30,
        damping: 10
        }}
    >
        {BannerAssets.map((link: myBannerAssets) => {
            return (
                <img src={link.Image} alt="" className="BannerImage" />
            )
        })}
    </motion.div>
  )
}

export default BannerPost