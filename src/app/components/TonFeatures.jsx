import { FC } from "react";
import { Icon } from "@iconify/react";

const TonFeatures = () => {
  const features = [
    {
      icon: "mdi:link-variant",
      title: "Decentralized",
      desc: "A decentralized chain to onboard millions of users.",
      linkText: "Explore options",
    },
    {
      icon: "mdi:cellphone",
      title: "Mobile First",
      desc: "Lightweight, mobile-friendly native OS node experience.",
      linkText: "Swap currencies",
    },
    {
      icon: "mdi:account-group",
      title: "User Friendly",
      desc: "Secure, scalable, energy-efficient and easy to use.",
      linkText: "Explore bridges",
    },
    {
      icon: "mdi:shield-lock-outline",
      title: "Security",
      desc: "USE $NU FOR CONTRIBUTION TO NETWORK SECURITY",
      linkText: "Accept payments",
    },
    {
      icon: "mdi:credit-card-outline",
      title: " Payment gateway",
      desc: "Accept Payments Globally with Nucleus Core (NU).",
      linkText: "Learn more",
    },
    {
      icon: "mdi:database-sync-outline",
      title: "Migration",
      desc: "Migrate Your Assets to Next-Gen Nucleus Core Solutions",
      linkText: "Learn more",
    },
  ];

  return (
    <section className="py-12 px-6 md:px-10 lg:px-16">
        <h1 className="text-[50px] md:w-[50vw] py-10 font-extrabold">Empowering developers to build decentralized experiences.</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, index) => (
          <div
            key={index}
            className="bg-white shadow-sm rounded-2xl p-6 flex flex-col space-y-3 hover:shadow-md transition-shadow"
          >
            <Icon icon={f.icon} className="text-[#ea922c] text-4xl" />
            <h3 className="font-semibold text-lg text-black">{f.title}</h3>
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
