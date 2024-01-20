import { motion, useInView } from "framer-motion"

import { FaLocationPin, FaPhone } from "react-icons/fa6"
import Socials from "./Socials"
import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import Welcome from "./Welcome"
import Brands from "./Brands"

const CarricullumV = () => {
    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
        
      }, [isInView])



  return (
    <div className="flex flex-col justify-center items-center md:mx-10 bg-white bg-opacity-5 outline outline-1 shadow-2xl outline-slate-200 my-5">
      <div className="flex flex-col justify-center items-center outline outline-2 rounded-md rounded-tl-3xl rounded-br-3xl outline-slate-50 m-1 md:p-5 md:px-24 md:pb-5 mb-10 bg-cyan-950 bg-opacity-10 animate-in slide-in-from-right-40 duration-500">
        <div className="flex flex-row justify-center items-center">
            <img 
            src="/assets/images/homepage.png" 
            alt="homepage-image" 
            width={50}
            loading="lazy"
            className="Homepage-Image"
            /> 
        </div>
        <h1 className="text_prim text-shadow">BENSON KIGOCI</h1>
        <h2 className="text_sec mb-5 text-shadow">Full Stack Developer && UI/UX Designer</h2>
            <h3 className="text_sec text-shadow">
                Find me on social platforms
            </h3>
            <Socials />
        <div className="flex flex-col justify-center gap-1">
            <h1 className="flex flex-row justify-center text-center text-cyan-950 gap-2 font-sans font-normal text-xs mb-1 text-shadow">242 Union st, Rocland MA, United States</h1>
            <h1 className="flex flex-row justify-center text-center text-cyan-950 font-normal gap-2 font-sans text-xs mb-6 text-shadow">{'+254712941987'}</h1>
            
        </div>
      </div> 
      <section>
        <Welcome />
      </section>
      <section id="roadmap" className="flex flex-1 w-full h-full outline outline-1 outline-slate-100 py-10 md:px-24 p-2">
        <div className="flex flex-col justify-start items-start">
            <h1 className="text_title text-shadow">PROFFESSIONAL ROADMAP</h1>
            <p className="text-xs sm:text-xs md:text-base text-black p-1 md:p-5 rounded-sm font-normal font-sans mb-5">
                {'A Very detail oriented individual. I am the best candidate ready to take on challenges and projects using problem solving and task prioritization skills to help team succeed. Willing to take on any task to support the team and help business succeed. Offers great tech skills and hard skills. '} 
                {'Excited about being able to do new things and learn more  an better skills. Always doing hard things and with a growth mindset'}
                {'I like working as a team to ensure that the projects the top expectations from the product managers and also ensure as a team we are meeting what is expected of us. '}
                {'As an individual i can also take on tasks alone and meet all the dedline and ensure the quality of my work is great'}
            </p>
        </div>
      </section>
      <section id="qualify" className="flex flex-1 w-full h-full py-10 md:px-24 p-3">
        <div className="flex flex-col justify-start items-start">
            <h1 className="text_title mb-5 text-shadow">QUALIFICATIONS && CERTIFICATIONS</h1>
            <p className="text-xs md:ml-5 sm:text-xs md:text-base text-black p-1 md:p-10 rounded-sm font-normal font-sans mb-5">
                <h1 className="font-bold">{'LEARNING HISTORY'}</h1>
                <ul className="list-disc list-inside">
                    <li>{'2021 - 2022'}
                        <div className="flex flex-col p-2 md:p-5 bg-white bg-opacity-30 backdrop-blur-md rounded-xl mt-5">
                            <h1 className="text-li">
                                {'Certified full Stack Web Developer'}
                            </h1>
                            <p className="md:px-10 text-xs md:text-base font-sans">
                                {'Having completed a full computer science course through google certifcation platform (Coursera)'}
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
            <h1 className="text_title mb-5 text-shadow">
                MY HOBBIES
            </h1>
            <div>
                <p className="text-xs sm:text-xs md:text-base text-black p-1 md:p-5 rounded-sm font-normal font-sans mb-5">
                    {'I love to spend my free time working out. This is a great way to think about my goals and come up with ideas on how to do hard things. '}
                    {'for those who hav choosen this path to be a developer and solve even more complex tasks. its a quite rough jurney and in my opinion bening at the gyms helps me deal with the hard part of it'}
                    {'When i will feel confident about my skills and finances my fisrt thing to exploit would be cruisisng, ever since i was young my dream was to have he freedom to pay for Sh*t'}
                    {'If you would love intresting outdoor recommendation i suggest you visit my blogs page'}
                    <Link to={'/blogs'} className="Linkme3">Blogs</Link>
                </p>
            </div>
        </div>
      </section>
      <section className="flex flex-col w-full h-fit py-10 md:px-24 p-5 outline outline-1 outline-slate-50">
        <div className="flex flex-col justify-start items-start">
            <h1 className="text_title mb-5 text-shadow">
                WHY SHOULD YOU WORK WITH ME?
            </h1>
            <p className="text-xs md:ml-5 sm:text-xs md:text-base text-black p-1 md:p-5 rounded-sm font-normal font-sans mb-5">
                {'My ability to learn easily makes me an qualified candidate to top notch companies across the globe.'}
                {'I can play great role in making sure a company scales even higher without having to overpay in resources since i can work with no supervison remotely and be productive to the end of our agreed contract'}
                {'My goal is to satisfy our agreed terms and making it my bsuness to deliver the required milestones in return i ask for a healthy work term to motivate this efforts'}
            </p>
        </div>
        <Brands />
      </section>
    </div>
  )
}

export default CarricullumV
