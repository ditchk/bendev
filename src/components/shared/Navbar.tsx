import { Button } from '../ui/button';
import Socials from './Socials';

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between w-full h-max bg-transparent backdrop-blur top-0 sticky shadow-md shadow-slate-400 py-2 px-4 bg-white bg-opacity-5">
      <img src="/assets/images/benswsp.png" alt="" width={200}/>
      <div className="hidden md:flex flex-row">
        <h1 className="text-center text-black text-xl p-3 font-serif">lets talk!</h1>
        <Socials />
        <Button className="outline_btn">
          LEARN MORE
        </Button>
      </div>
    </nav>
  )
}

export default Navbar
