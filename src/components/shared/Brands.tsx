import Companies from './Companies'

const Brands = () => {

  return (
    <section className='w-full'>
        <div
          className="flex flex-col justify-center items-center w-full my-4 bg-white p-2">
            <h1 className="text_title text-shadow">
                Companies i have worked with
            </h1>
            <Companies />
        </div>
    </section>
  )
}

export default Brands
