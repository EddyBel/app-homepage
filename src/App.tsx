import { FaArrowsUpDown } from 'react-icons/fa6';
import BaselineChart from './components/chart-green-red';
import { NavBar } from './components/navbar';
import { TextStats } from './components/text-stats';
import { data } from './test-data/data';
import { formatterAmount } from './utils/amount';

function App() {
  return (
    <>
      <main className="w-full min-h-screen bg-neutral-950">
        <section>
          <div className="flex items-center justify-start p-4 gap-3">
            <div className="bg-green-400/80 p-[1px] rounded-full relative">
              <div className="bg-black p-[3px] rounded-full">
                <img
                  src="https://getillustrations.b-cdn.net//photos/pack/3d-avatar-male_lg.png"
                  alt=""
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <div className="absolute top-0 right-0 w-4 h-4 bg-green-600 rounded-full flex items-center justify-center animate-ping">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
            </div>

            <div className="flex flex-col">
              <h1 className="font-bold text-white">Hi! Jhon Smith</h1>
              <p className="text-white opacity-85">Welcome back to your dashboard</p>
            </div>
          </div>
        </section>

        <section className="min-h-screen bg-neutral-100 rounded-tl-[50px] py-6 overflow-hidden">
          <div className="px-5 py-2 flex flex-col items-center justify-center gap-2">
            <div className="w-full min-h-[150px] rounded-2xl bg-slate-950 bg-[url(https://images.pexels.com/photos/629162/pexels-photo-629162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover bg-center bg-no-repeat relative overflow-hidden">
              <div className="w-full h-full flex items-center justify-center gap-5 absolute top-0 left-0 bg-black/50 hover:backdrop-blur-xl transition-backdrop duration-500">
                <TextStats label="Income" value={300} />
                <TextStats label="Expense" value={100} />
                <TextStats label="Balance" value={200} />
              </div>
            </div>

            <div className="w-full px-3 rounded-xl bg-neutral-200 mt-5">
              <BaselineChart data={data} height="240px" />
            </div>

            <div className="w-full h-full flex items-center gap-3">
              <div className="bg-neutral-200 rounded-xl min-h-[150px] w-full flex items-center justify-center flex-col">
                <span className="text-lg font-bold text-slate-700">Objectives</span>
                <span className="text-[2.5rem] font-bold text-green-500">100%</span>
              </div>

              <div className="bg-neutral-200 rounded-xl min-h-[150px] w-full flex items-center justify-center flex-col">
              <span className="text-lg font-bold text-slate-700">Total Balance</span>
                <span className="text-[2.3rem] font-bold text-slate-500">{formatterAmount(1000)}</span>
              </div>
            </div>
          </div>

          <div className="h-12"></div>
        </section>
      </main>

      <NavBar />
    </>
  );
}

export default App;
