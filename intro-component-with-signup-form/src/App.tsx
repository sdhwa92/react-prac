import SignupForm from "./components/SignupForm";

function App() {
  return (
    <>
      <div className="bg-red-400 h-full">
        <div className="md:bg-[url(/bg-intro-desktop.png)] bg-[url(/bg-intro-mobile.png)] bg-repeat">
          <div className="flex justify-center items-center px-10 py-40 md:px-40 md:py-0">
            <div className="md:w-2/3">
              <div className="flex justify-center items-center gap-20 flex-col md:flex-row h-screen">
                {/* Intro */}
                <div className="basis-1/2">
                  <div className="flex flex-col gap-10">
                    <div className="text-white text-center md:text-left">
                      <h1 className="text-3xl md:text-4xl font-bold">
                        Learn to code by watching others
                      </h1>
                    </div>

                    <div className="text-white text-center md:text-left">
                      <p>
                        See how experienced developers solve problems in
                        real-time.
                      </p>
                      <p>
                        Watching scripted tutorials is great, but understanding
                        how developers think is invaluable.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <div className="basis-1/2">
                  <div className="flex flex-col gap-10">
                    <div className="w-full">
                      <button
                        type="button"
                        className="bg-indigo-700 active:bg-indigo-800 w-full py-4 px-8 rounded-lg shadow-xl"
                      >
                        <p className="text-white">
                          <span className="font-bold">Try it free 7 days </span>
                          then $20/mo. thereafter
                        </p>
                      </button>
                    </div>

                    <div className="w-full">
                      <div className="bg-white p-10 rounded-lg shadow-lg">
                        <SignupForm />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
