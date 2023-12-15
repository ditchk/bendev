import { FaLocationPin, FaPhone } from "react-icons/fa6"
import Socials from "./Socials"

const CarricullumV = () => {
  return (
    <div className="flex flex-col justify-center items-center md:mx-10  outline outline-1 outline-slate-300 my-10">
      <div className="flex flex-col outline outline-1 md:rounded-bl-full outline-slate-300 md:px-24 md:pb-5 mb-10 m-5 p-2 bg-gradient-to-tl from-sky-900 text-xs via-black to-cyan-600 animate-in slide-in-from-right-40 duration-500">
        <h1 className="text_prim">BENSON KIGOCI</h1>
        <h2 className="text_sec mb-5">Full Stack Developer && UI/UX DESIGNER</h2>
        <div className="flex flex-col justify-center items-center">
            <h1 className="flex flex-row justify-center text-center text-white gap-2 font-sans font-thin text-base font-semibold mb-1"><FaLocationPin className="bg-black p-1 text-white outline outline-2 outline-cyan-400 rounded-md text-center text-2xl" />242 Union st, Rocland MA, United States</h1>
            <h1 className="flex flex-row justify-center text-center text-white gap-2 font-sans font-thin text-base font-semibold mb-6"><FaPhone className="bg-black p-1 text-white outline outline-2 outline-cyan-400 rounded-md text-center text-2xl" />{'+254712941987'}</h1>
            <h3 className="text_sec">
                Find me on social platforms
            </h3>
            <Socials />
        </div>
      </div>
      <section className="flex flex-1 w-full h-fit outline outline-1 outline-slate-300 py-10 md:px-24 p-5">
        <div className="flex flex-col justify-start items-start">
            <h1 className="text_title">PROFFESSIONAL ROADMAP</h1>
            <p className="text-base text-slate-700 font-normal font-serif mb-5">
                {'A Very detail oriented individual. I am the best candidate ready to take on challenges and projects using problem solving and task prioritization skills to help team succeed. Willing to take on any task to support the team and help business succeed. Offers great tech skills and hard skills. '} 
                {'Excited about being able to do new things and learn more  an better skills. Always doing hard things and with a growth mindset'}
                {'I like working as a team to ensure that the projects the top expectations from the product managers and also ensure as a team we are meeting what is expected of us. '}
                {'As an individual i can also take on tasks alone and meet all the dedline and ensure the quality of my work is great'}
            </p>
        </div>
      </section>
      <section className="flex flex-1 w-full h-fit py-10 md:px-24 p-5">
        <div className="flex flex-col justify-start items-start">
            <h1 className="text_title mb-5">QUALIFICATIONS && CERTIFICATIONS</h1>
            <p className="text-base text-slate-700 font-normal md:ml-5">
                <h1 className="font-bold">{'LEARNING HISTORY'}</h1>
                <ul className="list-disc list-inside">
                    <li>{'2021 - 2022'}
                        <div className="flex flex-col p-2 md:p-5 bg-white shadow shadow-slate-300 rounded-xl">
                            <h1 className="text-li">
                                {'Certified full Stack Web Developer'}
                            </h1>
                            <p className="md:px-10 text-base font-serif">
                                {'Having completed a full course at alx africa learning platform. '}
                                {'I can confidently solve and manage an assigned responsibilities in an organization. '} 
                                {'This course enabled me to jumpstart my career as web developer and has inspred me to lern even ondemand skills like...'}
                                <ul className="px-10 list-disc list-inside text-violet-800 font-sans font-semibold">
                                    <li>
                                        {'React framework'}
                                    </li>
                                    <li>
                                        {'Nodejs'}
                                    </li>
                                    <li>
                                        {'Nextjs'}
                                    </li>
                                    <li>
                                        {'Ability to deal with databases like postgersql, mysql, mongoDB and others'}
                                    </li>
                                </ul>
                                {'Besides that, I am also farmiliar with majaor design patterns like Object riented and model view control design pattern as part of my programming skills. '}
                                {'This has in turn bosted my understanding in front end and backend design making easir for me to take on challeging projects like Multipage Saas applications'}
                            </p>
                        </div>
                    </li>
                </ul>
            </p>
        </div>
      </section>
      <section className="flex flex-1 w-full h-fit py-10 md:px-24 p-5 outline outline-1 outline-slate-50">
        <div className="flex flex-col justify-start items-start">
            <h1 className="text_title mb-5">
                MY HOBBIES
            </h1>
            <div>
                <p className="md:px-5 text-base font-serif text-slate-700">
                    {'I love to spend my free time working out. This is a great way to think about my goals and come up with ideas on how to do hard things. '}
                    {'for those who hav choosen this path to be a developer and solve even more complex tasks. its a quite rough jurney and in my opinion bening at the gyms helps me deal with the hard part of it'}
                </p>
            </div>
        </div>
      </section>
      <section className="flex flex-1 w-full h-fit py-10 md:px-24 p-5 outline outline-1 outline-slate-50">
        <div className="flex flex-col justify-start items-start">
            <h1 className="text_title mb-5">
                WHY SHOULD YOU WORK WITH ME?
            </h1>
            <p className="md:px-5 text-base font-serif text-slate-700">
                {'My ability to learn easily makes me an qualified candidate to top notch companies across the globe.'}
                {'I can play great role in making sure a company scales even higher without having to overpay in resources since i can work with no supervison remotely and be productive to the nd of our agreed contract'}
            </p>
        </div>
       
      </section>
    </div>
  )
}

export default CarricullumV
