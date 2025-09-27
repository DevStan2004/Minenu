import { FC } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import minenuLogo from '@/images/minenuLogo.png'
const TonInfo = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center gap-10 px-6 md:px-10 lg:px-20 py-16">
      {/* LEFT SECTION */}
      <div className="flex flex-col space-y-6 max-w-lg text-center lg:text-left">
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-white">
          NU is the heart  <br /> of Nucleus Core.
        </h1>
        <p className="text-gray-100 text-base md:text-lg leading-relaxed">
          NU is Nucleus core's native cryptocurrency, transactions, games, NFTs and utilities built on Nucleus Core.
        </p>
        <div>
          <button className="bg-[#ea922c] text-white font-semibold rounded-full px-6 py-3 hover:bg-gray-800 transition">
            Mine NU
          </button>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="bg-gray-50 rounded-3xl p-6 md:p-8 shadow-sm w-full max-w-lg">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-[#ea922c] text-white rounded-full p-4 flex items-center justify-center">
            <Image src={minenuLogo} alt="Ton Icon" width={24} height={24} />
            {/* <Icon icon="mdi:shield-outline" className="text-3xl" /> */}
          </div>
          <div>
            <p className="text-gray-900 font-medium">Nucleus Core (NU)</p>
            <h2 className="text-2xl font-bold text-gray-900">$___</h2>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4 pb-2 grid grid-cols-3 gap-4 text-center md:text-left">
          <div>
            <p className="text-gray-500 text-sm">Rank</p>
            <h3 className="text-xl font-bold text-gray-900">#__</h3>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Market Cap</p>
            <h3 className="text-xl font-bold text-gray-900">$___</h3>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Volume</p>
            <h3 className="text-xl font-bold text-gray-900">$___M</h3>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-4 pt-4 text-sm text-gray-500 text-center md:text-left">
          Powered by{" "}
          <a
            href="#"
            className="text-[#ea922c] hover:underline"
          >
            CoinMarketCap
          </a>
          . Last updated 0 minutes ago
        </div>
      </div>
    </section>
  );
};

export default TonInfo;
