import { FC } from "react";
import { Icon } from "@iconify/react";

const TonFeatures = () => {
  const features = [
    {
      icon: "mdi:shield-check",
      title: "Nominator pools",
      desc: "Use Toncoin for contribution to network security.",
      linkText: "Explore options",
    },
    {
      icon: "mdi:swap-horizontal",
      title: "Buy and trade",
      desc: "Swap currencies on decentralized exchanges.",
      linkText: "Swap currencies",
    },
    {
      icon: "mdi:bridge",
      title: "Cross-Chain Bridges",
      desc: "Transfer your assets from other networks.",
      linkText: "Explore bridges",
    },
    {
      icon: "mdi:check-circle-outline",
      title: "Accept payments effortlessly",
      desc: "You are able to accept Toncoin worldwide, directly and at low fees.",
      linkText: "Accept payments",
    },
    {
      icon: "mdi:coin-outline",
      title: "Mint your token",
      desc: "Create your own cryptocurrency in few clicks.",
      linkText: "Learn more",
    },
    {
      icon: "mdi:currency-usd-circle-outline",
      title: "USDT on TON",
      desc: "Explore stablecoin usage.",
      linkText: "Learn more",
    },
  ];

  return (
    <section className="py-12 px-6 md:px-10 lg:px-16">
        <h1 className="text-[50px] md:w-[50vw] py-10 font-extrabold">Unlocking freedom with Decentralized Finance</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, index) => (
          <div
            key={index}
            className="bg-white shadow-sm rounded-2xl p-6 flex flex-col space-y-3 hover:shadow-md transition-shadow"
          >
            <Icon icon={f.icon} className="text-[#ea922c] text-4xl" />
            <h3 className="font-semibold text-lg">{f.title}</h3>
            <p className="text-gray-600 text-[20px]" >{f.desc}</p>
            <a
              href="#"
              className="text-[#ea922c] text-sm font-medium hover:underline mt-auto"
            >
              {f.linkText} →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TonFeatures;
