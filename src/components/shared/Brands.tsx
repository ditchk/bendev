import Companies from './Companies'

const Brands = () => {

  return (
    <section>
        <div
          className="flex flex-col justify-center items-center w-full my-7 overflow-hidden bg-cyan-950 bg-opacity-10 rounded-full border-t border-b border-slate-200 p-2">
            <h1 className="text_title">
                Companies i have worked with
            </h1>
            <Companies />
        </div>
    </section>
  )
}

export default Brands
