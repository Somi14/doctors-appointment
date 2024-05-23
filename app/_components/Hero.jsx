import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <Image
          alt=""
          src="/healthcare.jpeg" width={800} height={800}
          className="absolute rounded-3xl
           inset-0 h-full w-full object-cover  shadow-lg"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl"><span className='text-primary'>Expert</span> Care at Your Fingertips</h2>
        <h3 className="mt-4 text-gray-600"> Easily Schedule Your Next Medical Appointment Online.</h3>
        <p className=" text-gray-600">
        Our platform provides a hassle-free way to book your doctor visits. Choose from a range of specialists and get the care you need when you need it.
         Simplify your healthcare experience. Book appointments quickly and easily, all from the comfort of your home.
        </p>

        <a
          href="#"
          className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Started Now
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero
