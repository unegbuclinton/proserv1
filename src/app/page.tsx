import Image from 'next/image'
import { LogoImg } from './components/svgs/Logo'
import NItro from './components/svgs/Nitro'
import Thrifty from './components/svgs/Thirfty'
import Chevolet from './components/svgs/Chevolet'
import Doroki from './components/svgs/Doroki'
import Darren from './components/svgs/Darren'
import Mapfre from './components/svgs/Mapfre'
import Banco from './components/svgs/Banco'

export default function Home() {
  return (
    <main className=''>
      <section className='pt-4 bg-gradient-primary px-3'>
        <nav className='flex items-center justify-between mb-10 lg:mb-2 px-5 lg:px-0 lg:justify-around max-w-[727px] mx-auto py-3 rounded-[100px] bg-tertiary'>
          <LogoImg />
          <a
            className='py-1.5 px-4 rounded-lg bg-primary text-white'
            href=' https://zcal.co/raquelcampos'
          >
            Talk to us
          </a>
        </nav>
        <div className='flex items-center gap-5 max-w-[1020px] mx-auto'>
          <div>
            <h3 className='text-3xl max-w-[467px] font-medium mb-3'>
              Empowering Your Business with Comprehensive Solutions in South
              America
            </h3>
            <p className='max-w-[350px] mb-3'>
              Your gateway to specialized business services. Discover how our
              tailored solutions can drive your business success and growth.
            </p>
            <span className='block mt-3'>
              <a
                href=' https://zcal.co/raquelcampos'
                className='py-3 px-4 bg-primary rounded-lg text-white'
              >
                Schedule a call
              </a>
            </span>
          </div>
          <Image
            alt='hero image'
            src={'/heroImg.png'}
            width={458}
            height={504}
          />
        </div>
      </section>
      <p className='text-secondary text-center text-2xl mt-5'>
        trusted by our partners
      </p>
      <div className=' flex justify-center gap-12 my-10 py-9 flex-wrap px-4'>
        <NItro />
        <Thrifty />
        <Chevolet />
        <Doroki />
        <Darren />
        <Mapfre />
        <Banco />
      </div>
      <section className='py-12 max-w-[958px] mx-auto px-3'>
        <div className='bg-washedWhite p-10 rounded-3xl text-center lg:text-left flex gap-5 lg:gap-20 flex-wrap-reverse'>
          <Image
            width={378}
            height={400}
            src='/imageTwo.png'
            alt='Focus Group'
            className='rounded-2xl object-cover'
          />
          <div className='max-w-[340px]'>
            <h3 className='text-2xl font-medium'>
              Find the Perfect Focus Group for Your Needs
            </h3>
            <p className='mt-2'>
              Access a diverse pool of local participants to gain valuable
              insights and drive your business forward.
            </p>
          </div>
        </div>
        <div className='flex my-5 gap-5 flex-wrap text-center'>
          <div className='bg-washedWhite px-6 py-10 flex flex-col items-center  rounded-3xl'>
            <h3 className='text-lg font-bold'>
              Comprehensive Legal Services for Your Business
            </h3>
            <p className='mb-6 text-center'>
              Ensure your business is compliant with all South American
              regulations with our expert legal services.
            </p>
            <Image
              width={350}
              height={330}
              src='/imageOne.png'
              alt='Legal Services'
              className='rounded-2xl object-cover'
            />
          </div>
          <div className='bg-washedWhite px-6 py-10 flex flex-col items-center  rounded-3xl'>
            <h3 className='text-lg font-bold'>
              Hire Top-Tier Customer Service Professionals
            </h3>
            <p className='mb-6 text-center'>
              Enhance your customer support with skilled professionals who
              represent your brand with excellence.
            </p>
            <Image
              width={350}
              height={330}
              src='/imageThree.png'
              alt='Legal Services'
              className='rounded-2xl object-cover'
            />
          </div>
        </div>
        <div className='bg-washedWhite p-10 rounded-3xl text-center lg:text-left flex gap-5 lg:gap-20 flex-wrap'>
          <div className='max-w-[340px]'>
            <h3 className='text-2xl font-medium'>
              Enhance Your Global Reach with Localized Translation
            </h3>
            <p className='mt-2'>
              Break language barriers and connect with your South American
              audience through precise and culturally relevant translations.
            </p>
          </div>
          <Image
            width={378}
            height={400}
            src='/imageFour.png'
            alt='Focus Group'
            className='rounded-2xl object-cover'
          />
        </div>
        <div className='bg-[#302113] rounded-3xl py-10 mt-12'>
          <p className='max-w-[520px] mx-auto text-white text-center text-3xl'>
            Schedule a call with today to learn about our product offerings
          </p>
          <p className='flex justify-center mt-10'>
            <a
              href=' https://zcal.co/raquelcampos'
              className='rounded-lg bg-white py-3 px-4'
            >
              Schedule a call
            </a>
          </p>
        </div>
      </section>

      <footer className='px-10 py-4'>
        <LogoImg />
        <p className='mt-2 text-sm'>support@insightbridge.com</p>
        <div className='h-[0.5px] my-4 bg-[#E0E2EE]'></div>
        <p className='text-center '>copy insightbridge technology 2024</p>
      </footer>
    </main>
  )
}
