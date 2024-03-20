import QuestionAnswer from './QuestionAnswer'

const ReadHowTo = () => {
  return (
    <section className='HowTosec'>
      <div className=' bg-slate-100 rounded-xl hover:shadow-lg shadow-black duration-700 p-5 w-50'>
        <h3 className="HowToHeadTexts">Learn how each one of this platform works and leverage this information into money in no time</h3>
        <ul className="HowtoListfy">
            <li>Learn everything about this platforms</li>
            <li>Kickstart your earning journey</li>
            <li>Invite your friend to make money with you</li>
            <li>Have a clear understanding of pros and cons of this website</li>
            <li>Finally , be ready for the challenges that come along the way.</li>
        </ul>
        <h3 className="HowToHeadText2">In the sections below we will layout all the information you need to kickstart your journey</h3>
        <p className="text-sm font-light text-gray-700">Going deeper on each platform outlining reasons why you should consider and what could limit someof us from starting immediately</p>
        <h3 className="HowToHeadText2">Frequently asked Questions(FAQs)</h3>
        <ul className="HowtoListfy">
           {/* QUESTION AND ANSWER */}
          <QuestionAnswer />
        </ul>
      </div>
      <div>
        {/* <img src="/assets/images/trade.png" alt="" width={400} className=' filter sepia'/> */}
      </div>
    </section>
  )
}

export default ReadHowTo
