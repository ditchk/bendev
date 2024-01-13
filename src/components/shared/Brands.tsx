import Companies from './Companies'

const Brands = () => {

  return (
    <section className='w-full'>
        <div
          className="flex flex-col justify-center items-center w-full my-4 overflow-hidden bg-cyan-950 bg-opacity-10 rounded-full border-t-2 border-b border-slate-200 p-2 shadow-sm shadow-cyan-600">
            <h1 className="text_title text-shadow">
                Companies i have worked with
            </h1>
            <Companies />
        </div>
    </section>
  )
}

export default Brands
