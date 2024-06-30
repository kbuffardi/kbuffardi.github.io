import { Header } from '../header'
import { EnvelopeIcon, BuildingOffice2Icon, CalendarDaysIcon } from '@heroicons/react/24/outline';

export default function Research() {
  return (
    <>
      <div className='flex'>
        <header><Header /></header>
        <main className="flex flex-wrap overflow-y-auto pt-20 p-2 w-full justify-center">
          <div className="flex w-5/6 justify-center flex-wrap">
            <div className="p-6 m-0.5 bg-neutral-800 border border-neutral-700 rounded-lg shadow w-full">
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
              <h5 className="mb-2 mt-4 text-2xl font-bold tracking-tight text-gray-900 text-white">Recent Updates</h5>
              <div className="flex-wrap text-gray-300">
                <ul className="list-outside leading-loose">
                <li>ITiCSE 2024:&nbsp;
                    <a href="https://learnbyfailure.com/designing-cure/" target="_blank"
                       className="font-semibold underline hover:font-bold">
                      Designing a CURE for CS1
                    </a>
                  </li>
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
            <div className="p-6 m-0.5 bg-neutral-800 border border-neutral-700 rounded-lg shadow w-full">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Active Projects</h5>
              <p className="mb-2 text-lg font-medium tracking-tight text-gray-300">
                <span className="mr-2 font-normal">Research Area:</span>
                <span className="flex-nowrap whitespace-nowrap">
                  <span className="mr-1 font-light text-green-400">Computer Science Education</span>
                  <span className="inline-block whitespace-nowrap rounded-full bg-green-400 ml-1 mr-2 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-black">
                    ED
                  </span>
                </span>
                <span className="flex-nowrap whitespace-nowrap">
                  <span className="mr-1 font-light text-amber-500">Broadening Participation</span>
                  <span className="inline-block whitespace-nowrap rounded-full bg-amber-500 ml-1 mr-2 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-black">
                    BP
                  </span>
                </span>
                <span className="flex-nowrap whitespace-nowrap">
                  <span className="mr-1 font-light text-sky-400">Adaptive Feedback</span>
                  <span className="inline-block whitespace-nowrap rounded-full bg-sky-400 ml-1 mr-2 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-black">
                    AF
                  </span>
                </span>
                <span className="flex-nowrap whitespace-nowrap">
                  <span className="mr-1 font-light text-red-600">Software Testing</span>
                  <span className="inline-block whitespace-nowrap rounded-full bg-red-600 ml-1 mr-2 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-black">
                    ST
                  </span>
                </span>
                <span className="flex-nowrap whitespace-nowrap">
                  <span className="mr-1 font-light text-indigo-400">Software Engineering</span>
                  <span className="inline-block whitespace-nowrap rounded-full bg-indigo-400 ml-1 mr-2 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-black">
                    SE
                  </span>
                </span>
                <span className="flex-nowrap whitespace-nowrap">
                  <span className="mr-1 font-light text-pink-600">Usability &amp; User eXperience</span>
                  <span className="inline-block whitespace-nowrap rounded-full bg-pink-600 ml-1 mr-2 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-black">
                    UX
                  </span>
                </span>
                <span className="flex-nowrap whitespace-nowrap">
                  <span className="mr-1 font-light text-lime-200">Entrepreneurship</span>
                  <span className="inline-block whitespace-nowrap rounded-full bg-lime-200 ml-1 mr-2 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-black">
                    EN
                  </span>
                </span>
              </p>
              <p className="mt-4 text-lg font-bold tracking-tight">
                Codewit.us
                <span className="inline-block whitespace-nowrap rounded-full bg-green-400 ml-1 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-black">
                  ED
                </span>
                <span className="inline-block whitespace-nowrap rounded-full bg-amber-500 ml-1 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-black">
                  BP
                </span>
                <span className="inline-block whitespace-nowrap rounded-full bg-sky-400 ml-1 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-black">
                  AF
                </span>
              </p>
              <p className="m-0 text-base font-light text-gray-300 tracking-tight">
                <a href="https://codewit.us/" target="_blank" className="font-semibold underline hover:font-bold">
                  Codewit.us
                </a> 
                &nbsp; is an inclusive platform for sharing unique perspectives in learning how to code. 
                Funded by <a href="https://calearninglab.org/project/coding-community-inclusive-space-for-programming-tutorials-and-adaptive-learning/" target="_blank" className="font-semibold underline hover:font-bold">
                  California Governor&apos;s Office of Planning and Research - Learning Lab (CELL)
                </a>, 
                <a href="https://www.csuchico.edu/coronavirus/federal-aid/index.shtml" target="_blank" className="font-semibold underline hover:font-bold">
                  Department of Education (DOE) Higher Education Emergency Relief Fund (HEERF II)
                </a> and&nbsp;
                <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2315883&HistoricalAwards=false" target="_blank" className="font-semibold underline hover:font-bold">
                  National Science Foundation (NSF) Broadening Participation in Computing
                </a>.
              </p>
              <p className="mt-4 text-lg font-bold tracking-tight">
                FRONTIERS
                <span className="inline-block whitespace-nowrap rounded-full bg-indigo-400 ml-1 mr-2 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-black">
                  SE
                </span>
                <span className="inline-block whitespace-nowrap rounded-full bg-green-400 ml-1 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-black">
                  ED
                </span>
              </p>
              <p>
                Innovating valid, reliable, and practical assessments of individuals&apos; contributions to team Software Engineering projects.
                FRONTIERS is funded by <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2337271" target="_blank" className="font-semibold underline hover:font-bold">
                  National Science Foundation (NSF) Improving Undergraduate STEM Education (IUSE)
                </a>, featuring collaborations with <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2337269" target="_blank" className="font-semibold underline hover:font-bold">Oregon State University</a>,
                &nbsp; <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2337270" target="_blank" className="font-semibold underline hover:font-bold">University of California Santa Barbara</a>, and
                &nbsp; <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=233727" target="_blank" className="font-semibold underline hover:font-bold">Washington State University</a>.
              </p>
              <p className="mt-4 text-lg font-bold tracking-tight">
                CURE-E
                <span className="inline-block whitespace-nowrap rounded-full bg-green-400 ml-1 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-black">
                  ED
                </span>
                <span className="inline-block whitespace-nowrap rounded-full bg-amber-500 ml-1 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-black">
                  BP
                </span>
                <span className="inline-block whitespace-nowrap rounded-full bg-lime-200 ml-1 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-black">
                  EN
                </span>
              </p>
              <p className="m-0 text-base font-light text-gray-300 tracking-tight">
                CURE-E uses a unique combination of <span className="italic">Course-based Undergraduate Research Experience</span> pedagogy with <span className="italic">entrepreneurship</span>&nbsp;
                to teach authentic software development and research skills in undergraduate Computer Science courses.
                Funded by <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=1953751" target="_blank" className="font-semibold underline hover:font-bold">
                  National Science Foundation (NSF)
                </a>.
              </p>

              <p className="mt-4 text-lg font-bold tracking-tight">
                Testoscope
                <span className="inline-block whitespace-nowrap rounded-full bg-indigo-400 ml-1 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-black">
                  SE
                </span>
                <span className="inline-block whitespace-nowrap rounded-full bg-green-400 ml-1 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-black">
                  ED
                </span>
                <span className="inline-block whitespace-nowrap rounded-full bg-red-600 ml-1 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-black">
                  ST
                </span>
                <span className="inline-block whitespace-nowrap rounded-full bg-sky-400 ml-1 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-black">
                  AF
                </span>
              </p>
              <p className="m-0 text-base font-light text-gray-300 tracking-tight">
                Innovating software testing education tools, methods, and metrics by investigating how software developers critically evaluate software with unit tests.
              </p>

              <p className="mt-4 text-lg font-bold tracking-tight">
                Tech Startup Model
                <span className="inline-block whitespace-nowrap rounded-full bg-indigo-400 ml-1 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-black">
                  SE
                </span>
                <span className="inline-block whitespace-nowrap rounded-full bg-pink-600 ml-1 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-black">
                  UX
                </span>
                <span className="inline-block whitespace-nowrap rounded-full bg-lime-200 ml-1 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-black">
                  EN
                </span>
                <span className="inline-block whitespace-nowrap rounded-full bg-green-400 ml-1 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-black">
                  ED
                </span>
              </p>
              <p className="m-0 text-base font-light text-gray-300 tracking-tight">
                Empowering entrepreneurship and authentic software development skills in user-centered interdisciplinary Software Engineering collaborations
              </p>

            </div>
          </div>
        </main> 
      </div>
    </>
  );
}