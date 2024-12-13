import React from 'react'
import Carlogo2 from './assest/car.logo2.jpg'
const Adv = () => {
  return (
    <div>
      <section className=' border-black'>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
      <div className="md:col-span-3">
        <img
          src={Carlogo2}
          className="rounded"
          alt=""
        />
      </div>

      <div className="md:col-span-1">
        <div className="max-w-lg md:max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
          V8 power doesn’t ask for permission; it demands respect.
          </h2>

          <p className="mt-4 text-gray-700 font-semibold">
          Muscle cars: turning fuel into adrenaline since day one.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Adv
