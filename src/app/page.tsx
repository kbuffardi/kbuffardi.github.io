import Classes from './classes/page';
import { Header } from './header'
import { EnvelopeIcon, BuildingOffice2Icon, CalendarDaysIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <>
      <div className='flex'>
        <header><Header /></header>
        <main className="flex flex-wrap overflow-y-auto pt-20 p-2 w-full justify-center">
          <div className="flex w-5/6 justify-center flex-wrap">
            <div className="p-6 m-0.5 bg-neutral-800 border border-neutral-700 rounded-lg shadow w-full">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white">Contact</h5>
              <div className="inline-flex flex-wrap">
                <a href="mailto:kbuffardi@csuchico.edu" target='_blank' className='m-0.5'>
                  <button className="bg-neutral-800 hover:bg-neutral-700 text-gray-100 font-semibold py-2 px-4 border border-neutral-400 rounded shadow inline-flex items-center">
                    <EnvelopeIcon className='h-6 w-6 mr-1'/><span>Email</span>
                  </button>
                </a>
                <a href="https://goo.gl/maps/6fxuCsCdwBk" target='_blank' className='m-0.5'>
                  <button className="bg-neutral-800 hover:bg-neutral-700 text-gray-100 font-semibold py-2 px-4 border border-neutral-400 rounded shadow inline-flex items-center">
                    <BuildingOffice2Icon className='h-6 w-6 mr-1'/><span>Office: OCNL 220</span>
                  </button>
                </a>
                <a href="https://github.com/kbuffardi/" target='_blank' className='m-0.5'>
                  <button className="bg-neutral-800 hover:bg-neutral-700 text-gray-100 font-semibold py-2 px-4 border border-neutral-400 rounded shadow inline-flex items-center">
                  <img src="/GitHub_Logo_Light.png" width="16" height="auto" />&nbsp;
                  <span>GitHub</span>
                  </button>
                </a>
                <a href="https://www.linkedin.com/in/kevin-buffardi-5a84351/" target='_blank' className='m-0.5'>
                  <button className="bg-neutral-800 hover:bg-neutral-700 text-gray-100 font-semibold py-2 px-4 border border-neutral-400 rounded shadow inline-flex items-center">
                    <img src="/LinkedIn_Logo_White.png" width="16" height="auto" />&nbsp;
                    <span>LinkedIn</span>
                  </button>
                </a>
              </div>
            </div>
            <div className="p-6 m-0.5 bg-neutral-800 border border-neutral-700 rounded-lg shadow w-full">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white">Office Hours (OCNL 220)</h5>
              <div className="flex-wrap text-neutral-300">
                <p><span className="font-bold">Spring 2025</span></p>
                <p><span className="font-bold">Mon/Wed</span><span className="font-thin">&nbsp;3-4pm</span></p>
                <p><span className="font-bold">Tue/Thu</span><span className="font-thin">&nbsp;11am-12</span></p>
              </div>
            </div>
            <div className="p-6 m-0.5 bg-neutral-800 border border-neutral-700 rounded-lg shadow w-full">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white">The <i>Learn by Failure</i> Philosophy</h5>
              <div className="flex-wrap text-neutral-300">
                <p>
                  You have probably been told to learn <i>from</i> failure. However, 
                  trying to learn only from sporadic mistakes will limit growth. Instead,
                  we must actively seek out where we still need grow and learn <i>by</i> failure.
                </p><br/>
                <p>
                  An athlete does not get stronger by only exercising with weights they 
                  can already lift. Instead, they have to continually push themselves to
                  lift heavier weights than they ever have before. Similarly, a software
                  tester must think critically to write tests that they believe are
                  likely to reveal software faults.
                </p><br/>
                <p>
                  Accordingly, learning also requires that we seek out challenges that
                  expand beyond what we are comfortable with. By continually challenging
                  ourselves intellectually, we persistently grow and become life-long learners.
                </p>
              </div>
            </div>
          </div>
        </main> 
      </div>
    </>
  );
}