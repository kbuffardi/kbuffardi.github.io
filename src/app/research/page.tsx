import { Header } from '../header'
import { EnvelopeIcon, BuildingOffice2Icon, CalendarDaysIcon } from '@heroicons/react/24/outline';

export default function Research() {
  return (
    <>
      <div className='flex'>
        <header><Header /></header>
        <main className="flex flex-wrap overflow-y-auto pt-20 p-2 w-full justify-center">
          <div className="flex w-5/6 justify-center flex-wrap">
            <div className="p-6 m-px bg-neutral-800 border border-neutral-700 rounded-lg shadow w-full">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white">Publications</h5>
              <div className="flex-wrap text-gray-300">
                <p>
                  For a full list of publications, see&nbsp;
                  <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=3&cad=rja&uact=8&ved=0ahUKEwj8q7vI9_DVAhWJllQKHftqDa0QFggzMAI&url=http%3A%2F%2Fscholar.google.com%2Fcitations%3Fuser%3DKmIt5HIAAAAJ%26hl%3Den&usg=AFQjCNHsRa86mEiPAV9w_dnpTWxvfhJQng"
                     className="font-semibold underline hover:font-bold"
                     target="_blank">
                    Dr. Kevin Buffardi&apos;s Google Scholar profile
                  </a>.
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-5/6 justify-center flex-wrap">
            <div className="p-6 m-px bg-neutral-800 border border-neutral-700 rounded-lg shadow w-full">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white">Recent Updates</h5>
              <div className="flex-wrap text-gray-300">
                <ul className="list-outside leading-loose">
                  <li>ICSE 2023:&nbsp;
                    <a href="https://learnbyfailure.com/CognitiveReflection/" target="_blank"
                       className="font-semibold underline hover:font-bold">
                      Cognitive Reflection in Software Verification and Testing
                    </a>
                  </li>
                  <li>CCSC-SW 2023:&nbsp;
                    <a href="https://learnbyfailure.com/CodeVid/" target="_blank"
                       className="font-semibold underline hover:font-bold">
                      CodeVid Studio: Coding Videos with Multimodal Instruction
                    </a>
                  </li>
                  <li>Chico State Computer Science Seminar:&nbsp;
                    <a href="https://learnbyfailure.com/the-other-crt/" target="_blank"
                       className="font-semibold underline hover:font-bold">
                      Software Engineering and “The other CRT”
                    </a>
                  </li>
                  <li>ITiCSE 2022:&nbsp;
                    <a href="https://learnbyfailure.com/integrating-video/" target="_blank"
                       className="font-semibold underline hover:font-bold">
                      Integrating Videos with Programming Practice
                    </a>
                  </li>
                  <li>SIGCSE 2022:&nbsp;
                    <a href="https://learnbyfailure.com/sigcse2022-platform/" target="_blank"
                       className="font-semibold underline hover:font-bold">
                      Codewit.us: A Platform for Diverse Perspectives in Coding
                    </a>
                  </li>
                  <li>CCSC-NW 2021:&nbsp;
                    <a href="https://learnbyfailure.com/interests/" target="_blank"
                       className="font-semibold underline hover:font-bold">
                      Is Programming Relevant to CS1 Students&apos; Interests?
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex w-5/6 justify-center flex-wrap">
            <div className="p-6 m-px bg-neutral-800 border border-neutral-700 rounded-lg shadow w-full">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Active Projects</h5>
              <p className="mb-2 text-lg font-medium tracking-tight text-gray-300">Research Areas</p>
              <div className="flex-wrap"></div>
            </div>
          </div>
        </main> 
      </div>
    </>
  );
}