import { AboutLinks } from "@/constants"
import { MyAboutLinks } from "@/types"

const Aboutme = () => {
  return (
   <div className="flex flex-col justify-center gap-10 rounded-md p-5">
     <section className="flex flex-col justify-center w-full h-fit">
        <div className=" flex justify-center items-center h-fit mb-5">
            {/* <p className="text-center text-2xl font-bold mb-4">About Me</p> */}
            <img src="/assets/images/about.png" alt="" width={300} className="justify-center rounded-xl shadow shadow-slate-400 p-1" />
        </div>
        <div
            className="flex flex-col gap-5"
        >
            <h1 className="text-base md:text-xl text-center text-bold font-bold">MY GOAL IN THE TECH INDUSTRY</h1>
            <p className="text-start md:text-center font-sans font-light mx-5">As an ambitios young man its my obligation to make sure that i dont loose hope on my goals.<br /> 
            This way i keep my self motivated my trying almost new and hard thisng i come across during may career. <br /> I focus on lerning more complex web development skills despite them being quite a challenge <br />
            I have to admit thought its aint that easy to keep up an in fast evolving tech times. 
            </p>
        </div>
    </section>
    <section className="flex flex-col justify-center w-full h-fit">
        <div className="flex flex-col gap-5">
            <h1 className="text-center font-serif md:text-xl text-base font-bold text-black">MY DREAM AS A DEVELOPER</h1>
            <p className="text-start font-sans font-normal px-5 outline-1 outline outline-slate-200 mx-5 md:mx-24 rounded-sm shadow-inner shadow-slate-300 bg-slate-100 p-2">
            Nobody knows what the future holds but i believe im going to be succesful that i can bet on. 
            <br /> 
            Sometimes its quite hard to see that especially when someone is learning. If you would like to read my full story browse links below to download my boook</p>
        </div>
    </section>
    <section className="flex flex-col justify-center w-full h-fit">
        <div className="flex flex-col">
            <h1 className="text-center text-base md:text-xl font-bold font-serif">What are some of your created websites/Projects</h1>
            <p className="text-start text-base font-normal font-sans mx-5">Quite intresting that most of my projects are hosted locally. 
            But i happen to create this workspace from scratch with latest react framework. 
            <br /> It also have a backend Nodejs for connecting with databases to fetch documents that i show in project/shop and Gallery pages <br /> 
            Believe it or not this porfolio website itself is a full stack web app accepting users to create accounts and purchase products in the shop page. <br />
            In addition you can even talk with users in the comminity center and add posts.</p>
        </div>
    </section>
    <section className="flex flex-col justify-center items-center w-full h-fit">
        <div className="w-fit h-full p-2 outline outline-1 outline-cyan-700 px-5 rounded-md shadow-inner bg-slate-200 shadow-slate-400">
            <ul className="flex flex-col md:flex-row gap-3 md:gap-24">
                {AboutLinks.map((link: MyAboutLinks) => (
                    <li key={link.info}>
                        <img src={link.Icon} alt="" />
                        <h1 className="font-bold w-full">{link.skill}</h1>
                        <p className="text-base text-cyan-900 font-serif font-normal">{link.info}</p>
                    </li>
                ) )}
            </ul>
        </div>
    </section>
   </div>
  )
}

export default Aboutme
