import Head from 'next/head'
import Image from 'next/image'
import { ChevronRightIcon, ArrowRightIcon } from '@heroicons/react/solid'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Razor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
      <section id="banner" className="flex ">
        <article className="flex flex-col">
            <h1>
              <strong>What</strong> do you want to 3D print Today?
            </h1>
            <p className="uppercase">bring your digital creations into reality</p>
            <button className="rounded-xl py-2 px-10 bg-[orange]">Learn More</button>
            <ul className="flex justify-between"> 
              <div className="flex items-center flex-col"> 
                <h1>2000+</h1>
                <p>Certified Razors</p>
              </div>
              <div className="flex items-center flex-col"> 
                <h1>48h</h1>
                <p>Avg. Turnaround Time</p>
              </div>
              <div className="flex items-center flex-col"> 
                <h1>4.3</h1>
                <p>Your Reviews</p>
              </div>
            </ul>
        </article>
        <figure className="flex flex-col filter drop-shadow-md"> 
          <div className="flex"> 
            <div className="border-b-4 p-10 font-medium bg-white border-[orange]">I Have a Model</div>
            <div className="border-b-4 p-10 font-medium bg-white border-[orange]">I Need 3D Modeling</div>
          </div>
          <div className="flex flex-col space-y-3 bg-gray-200">
            <p className="uppercase font-thin text-gray-400">import your file .stl</p>
            <div id="file-dropdown w-full h-36 ">
            </div>
            <select className="rounded-xl" name="filament" id="filament">
              <option value="plastic">Plastic</option>
              <option value="resin">Resin</option>
              <option value="metal">Metal</option>
            </select>
            <select className="rounded-xl" name="rigidty" id="rigidty">
              <option value="flexible">Flexible</option>
            </select>
            <select className="rounded-xl" name="color" id="rigidty">
              <option value="red">Red</option>
              <option value="blue">Blue</option>
            </select>
          </div>
          <div className="flex bg-white p-5">  
            <button className="bg-[orange] w-full text-white">Submit File</button>
          </div>
        </figure>
      </section>
      <section className="flex">  
        <div className=""> 
          <Image src="https://via.placeholder.com/400" height={400} width={400} />
        </div>
        <article className="flex flex-col space-y-3"> 
          <h1>How it works</h1>
          <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <div className="flex flex-col space-y-2"> 
            <div> 
              <div className="flex">  
              <span className="bg-green-400 text-white rounded-full p-5">1</span>
              <h2>Start a New Print</h2>
              </div>
              <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
              <div className="flex">
                <p clasName="text-red-500 uppercase">start printing</p>
                <ChevronRightIcon className="text-red-500 h-3" />
              </div>
            </div>
            <div> 
              <div className="flex">  
              <span className="bg-green-400 text-white rounded-full p-5">1</span>
              <h2>Select Your Printer</h2>
              </div>
              <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
              <div className="flex">
                <p clasName="text-red-500 uppercase">grab some $RZR from the marketplace</p>
                <ChevronRightIcon className="text-red-500 h-3" />
              </div>
            </div>
            <div> 
              <div className="flex">  
              <span className="bg-green-400 text-white rounded-full p-5">1</span>
              <h2>Recieve Your Order</h2>
              </div>
              <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            </div>
          </div>
        </article>
      </section>
      <section className="flex flex-col items-center justify-center">
        <h1 className="uppercase">our guarantee</h1>
        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        <div className="grid grid-cols-2 gap-2"> 
          <div className="flex"> 
            <Icon className="rounded-full p-10" />
            <div className="flex flex-col">
              <h2>Secure Payments</h2>
              <p>lorem ipsum sit amet, consectet</p>
            </div>
          </div>
          <div className="flex"> 
            <Icon className="rounded-full p-10" />
            <div className="flex flex-col">
              <h2>Printed or Refunded</h2>
              <p>lorem ipsum sit amet, consectet</p>
            </div>
          </div>
          <div className="flex"> 
            <Icon className="rounded-full p-10" />
            <div className="flex flex-col">
              <h2>Trusted 3rd Party</h2>
              <p>lorem ipsum sit amet, consectet</p>
            </div>
          </div>
          <div className="flex"> 
            <Icon className="rounded-full p-10" />
            <div className="flex flex-col">
              <h2>Quality</h2>
              <p>lorem ipsum sit amet, consectet</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-900">  
        <h1>The Shop</h1>
        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        <button className="bg-[orange] p-5 text-white rounded-xl">Take me to the Shop</button>
      </section>
      <section className="flex"> 
        <article className="flex flex-col">
          <h1>Modeling Service</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <button className="bg-[orange] text-white">Learn More</button>
        </article>
        <div className=""> 
          <Image src="https://via.placeholder.com/300" width={400} height={400} />
        </div>
      </section>
      <section className="bg-gray-900 flex">
        <div> 
          <Image src="https://via.placeholder.com/300" width={300} height={300} />
        </div>
        <article className="space-y-3"> 
          <h1>Do you have a 3D printer? You can make it even more profitable</h1>
          <div className="flex space-x-3"> 
            <p>Select the Projects that Intrest you</p>
            <ArrowRightIcon className="text-white w-8" />
            <p>Print the project</p>
            <ArrowRightIcon className="text-white w-8" />
            <p>Make Money</p>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <button className="bg-white text-[orange] p-5 rounded-xl">Request an Invite</button>
        </article>
      </section>
      <section className="flex space-x-4"> 
        
      </section>
      {/* industrial quanities */}
      {/* reviews */}

      </main>
      <footer className="">
        
      </footer>
    </div>
  )
}
