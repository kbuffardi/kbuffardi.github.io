import { Header } from '../header'

export default function Classes() {
  return (
    <>
      <Header />
      <main className="flex flex-wrap overflow-y-auto pt-20 p-2 w-full justify-center">
        <div className="flex w-5/6 justify-center flex-wrap">
          <div className="p-6 m-0.5 bg-neutral-800 border border-neutral-700 rounded-lg shadow w-full">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Classes - Spring 2024</h5>
            <div className="flex-wrap text-gray-300">
              <ul className="list-outside leading-loose">                
                <li>
                  <span className="font-black">CSCI 430</span>
                  <span className="font-thin"> - Software Engineering</span>
                </li>
                <li>
                  <span className="font-black">CSCI 431w</span>
                  <span className="font-thin"> - Usability Engineering</span>
                </li>
                <li>
                  <span className="font-black">CSCI 490</span>
                  <span className="font-thin"> - Capstone</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-5/6 justify-center flex-wrap">
          <div className="p-6 m-0.5 bg-neutral-800 border border-neutral-700 rounded-lg shadow w-full">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Recent Courses Taught</h5>
              <div className="flex-wrap text-gray-300">
                <ul className="list-outside leading-loose">
                  <li>
                    <span className="font-black">CINS 110</span>
                    <span className="font-thin"> - Introduction to Web Programming</span>
                  </li>
                  <li>
                    <span className="font-black">CSCI 111</span>
                    <span className="font-thin"> - Programming &amp; Algorithms I</span>
                  </li>
                  <li>
                    <span className="font-black">CSCI 385</span>
                    <span className="font-thin"> - Introduction to Data Science</span>
                  </li>
                  <li>
                    <span className="font-black">CSCI 430</span>
                    <span className="font-thin"> - Software Engineering</span>
                  </li>
                  <li>
                    <span className="font-black">CSCI 431w</span>
                    <span className="font-thin"> - Usability Engineering</span>
                  </li>
                  <li>
                    <span className="font-black">CSCI/CINS 490</span>
                    <span className="font-thin"> - Capstone</span>
                  </li>
                  <li>
                    <span className="font-black">CSCI 499/485</span>
                    <span className="font-thin"> - Special Problems (Advanced Data Science)</span>
                  </li>
                  <li>
                    <span className="font-black">CSCI 499</span>
                    <span className="font-thin"> - Special Problems (Software Engineering)</span>
                  </li>
                  <li>
                    <span className="font-black">CSED 510</span>
                    <span className="font-thin"> - Technology for Computer Science Education</span>
                  </li>
                  <li>
                    <span className="font-black">CSED 511</span>
                    <span className="font-thin"> - Computing in Society</span>
                  </li>
                  <li>
                    <span className="font-black">CSCI 630</span>
                    <span className="font-thin"> - Software Engineering (graduate)</span>
                  </li>
                  <li>
                    <span className="font-black">CSCI 630</span>
                    <span className="font-thin"> - Software Design &amp; Maintenance</span>
                  </li>
                  <li>
                    <span className="font-black">CSCI 699</span>
                    <span className="font-thin"> - Master&apos;s Project Supervision</span>
                  </li>
                </ul>
              </div>
          </div>
        </div>
      </main>
    </>
  );
}