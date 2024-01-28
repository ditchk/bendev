import { motion } from 'framer-motion'

import { BannerAssets } from "@/constants"
import { myBannerAssets } from "@/types"

const BannerPost = () => {
  return (
    <motion.div className="BannerCont"
        initial={{ scale: 1 }}
        animate={{ rotate: 0,  scale: 1 }}
        transition={{
        type: "tween",
        stiffness: 300,
        damping: 10
        }}
    >
        {BannerAssets.map((link: myBannerAssets) => {
            return (
                <div className="cont" style={{transform: "rotateY(-6.54393deg); rotateX(-0.26516deg)", boxShadow: "rgba(4, 1, 84, 0.25); 6.54393px -0.26516px 16px 0px"}}>
                  <img src={link.Image} alt="" className="BannerImage" />
                </div>
            )
        })}
    </motion.div>
  )
}

export default BannerPost