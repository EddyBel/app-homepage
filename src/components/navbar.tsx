import { FaListUl, FaPlus } from 'react-icons/fa';
import { GoHomeFill } from 'react-icons/go';
import { IoAppsSharp, IoSettingsSharp, IoStatsChart } from 'react-icons/io5';

export function NavBar() {
  return (
    <div className="w-full fixed bottom-0 left-0 z-10">
      <nav className="w-full bg-white rounded-xl flex items-center justify-center py-1 gap-[30px]">
        <a href="#" className="text-2xl">
          <GoHomeFill />
        </a>
        <a href="#" className="text-2xl">
          <IoAppsSharp />
        </a>

        <div></div>

        <div className="bg-black text-white text-2xl rounded-full p-3 absolute -translate-y-5">
          <FaPlus />
        </div>

        <div></div>

        <a href="#" className="text-2xl">
          <IoStatsChart />
        </a>

        <a href="#" className="text-2xl">
          <IoSettingsSharp />
        </a>
      </nav>
    </div>
  );
}
