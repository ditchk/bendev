import { motion } from 'framer-motion';
import { Button } from '../ui/button';

const GradientButton = () => {
  const gradientAnimation = {
    background: 'linear-gradient(90deg, #ff0080 0%, #ff8000 50%, #8000ff 100%)',
    backgroundSize: '400% 400%',
    animation: `gradient 10s ease-in infinite rotate`,
  };

  const { background } = gradientAnimation;

  return (
    <motion.div
      style={{ background }}
      animate={{
        background: ['#ff0080', '#ff8000', '#8000ff', '#00b3ff', '#00ff80'],
        transition: { duration: 10, repeat: Infinity },
      }}
      className="p-[1px] rounded-md shadow-slate-600 shadow-md"
    >
      <Button className="NavButton">Get Started</Button>
    </motion.div>
  );
};

export default GradientButton;