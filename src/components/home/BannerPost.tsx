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
                <div className="cont" key={link.index}>
                  <img src={link.Image} alt="" className="BannerImage" />
                </div>
            )
        })}
    </motion.div>
  )
}

export default BannerPost