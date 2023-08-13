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
            <div className="p-6 m-px bg-gray-800 border border-gray-700 rounded-lg shadow w-full">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white">Contact</h5>
              <div className="inline-flex flex-wrap">
                <a href="mailto:kbuffardi@csuchico.edu" target='_blank'>
                  <button className="bg-gray-800 hover:bg-gray-700 text-gray-100 font-semibold py-2 px-4 border border-gray-400 rounded shadow inline-flex items-center">
                    <EnvelopeIcon className='h-6 w-6 mr-1'/><span>Email</span>
                  </button>
                </a>
                <a href="https://goo.gl/maps/6fxuCsCdwBk" target='_blank'>
                  <button className="bg-gray-800 hover:bg-gray-700 text-gray-100 font-semibold py-2 px-4 border border-gray-400 rounded shadow inline-flex items-center">
                    <BuildingOffice2Icon className='h-6 w-6 mr-1'/><span>Office: OCNL 220</span>
                  </button>
                </a>
                <a href="https://github.com/kbuffardi/" target='_blank'>
                  <button className="bg-gray-800 hover:bg-gray-700 text-gray-100 font-semibold py-2 px-4 border border-gray-400 rounded shadow inline-flex items-center">
                  <img src="/GitHub_Logo_Light.png" width="16" height="auto" />&nbsp;
                  <span>GitHub</span>
                  </button>
                </a>
                <a href="https://www.linkedin.com/in/kevin-buffardi-5a84351/" target='_blank'>
                  <button className="bg-gray-800 hover:bg-gray-700 text-gray-100 font-semibold py-2 px-4 border border-gray-400 rounded shadow inline-flex items-center">
                    <img src="/LinkedIn_Logo_White.png" width="16" height="auto" />&nbsp;
                    <span>LinkedIn</span>
                  </button>
                </a>
              </div>
            </div>
            <div className="p-6 m-px bg-gray-800 border border-gray-700 rounded-lg shadow w-full">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white">Office Hours (OCNL 220)</h5>
              <div className="flex-wrap text-gray-300">
                <p><span className="font-bold">Tuesday</span><span className="font-thin">&nbsp;12-2pm</span></p>
                <p><span className="font-bold">Thursday</span><span className="font-thin">&nbsp;12-2pm</span></p>
                <p>
                  <a href="https://outlook.office.com/bookwithme/user/323bef193abc40cdb331abf40d27b9b0@csuchico.edu/meetingtype/SVRwCe7HMUGxuT6WGxi68g2?anonymous&ep=mlink" target='_blank'>
                    <button className="bg-gray-800 hover:bg-gray-700 text-gray-100 font-semibold py-2 px-4 border border-gray-400 rounded shadow inline-flex items-center">
                    <CalendarDaysIcon className='h-6 w-6 mr-1'/><span>Request another time</span>
                  </button>
                </a>
                </p>
              </div>
            </div>
          </div>
        </main> 
      </div>
    </>
  );
}