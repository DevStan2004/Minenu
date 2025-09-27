import React from "react";

const page = () => {
  return (
    <div className="flex justify-center w-full my-30">
      <div className="w-screen flex flex-col space-y-5">
        <div className="text-center flex flex-col justify-center space-y-3">
          {/* <p className='text-[#4a5565]'>Last Update: January 2024</p> */}
        </div>
        <div className="bg-white shadow rounded-lg w-full p-4 flex flex-col space-y-4">
          <div className="w-[60vw] justify-center mx-auto my-3">
            <h1 className="text-5xl text-[#101828] font-bold text-center mx-auto py-5">
              NUCLEUS CORE CHAIN TOKENOMICS
            </h1>
            <p className="text-[#000] py-4 text-[21px]">
              Nucleus Core Blockchain; powering the future of Mobile
              Decentralization
            </p>
            <p className="text-[#000] py-4 text-[21px]">
              While it is essential to foster the growth of the project and make
              the Nucleus ecosystem widely accessible...
            </p>
            <p className="text-[#000] py-4 text-[21px]">
              However, we have implemented a technology that helps the system
              takes records of your activity throughout this initial phase...
            </p>
            <h1 className="text-3xl text-[#101828] font-bold text-left mx-auto py-5">
              NUCLEUS PRE-MARKET
            </h1>
            <p className="text-[#000] py-4 text-[21px]">
              This phase technically is named the Nucleus Core Pre-Market Phase;
              this where the Nucleus Core future begins...
            </p>
            <p className="text-[#000] py-4 text-[21px]">
              This pre-market stage refers to the initial distribution of
              Nucleus Core’s native coin...
            </p>
            <p className="text-[#000] py-4 text-[21px]">
              Coins mined and earned during this phase are not yet
              transferable...
            </p>
            <h1 className="text-2xl text-[#101828] font-bold text-left mx-auto py-5">
              WHY THIS PHASE MATTERS?
            </h1>
            <p className="text-[#000] py-4 text-[21px]">
              This is more than mining, it’s about community building...{" "}
            </p>
            <h1 className="text-3xl text-[#101828] font-bold text-left mx-auto py-5">
              MAINNET SUPPLY
            </h1>
            <p className="text-[#000] py-4 text-[21px]">
              Supply fuels the growth of our ecosystem...
            </p>
            <h1 className="text-2xl text-[#101828] font-bold text-left mx-auto py-5">
              TOKEN DISTRIBUTION BREAKDOWN
            </h1>
            <ul className="list-disc mx-10">
              <li className="text-[#4a5565]">
                <b>MAX TOTAL SUPPLY:</b> 380,000,000 NU-COINS (380 Million)
              </li>
              <li className="text-[#4a5565]">
                <b>COMMUNITY MINING:</b> (75%) – 285,000,000
              </li>
              <li className="text-[#4a5565]">
                <b>ECOSYSTEM DEVELOPMENT: </b>(25%) – 95,000,000
              </li>
            </ul>
            <h1 className="text-3xl text-[#101828] font-bold text-left mx-auto py-5">
              MINING BREAKDOWN & REWARD REDUCTION (HALVING MODEL)
            </h1>
            <p className="text-[#000] py-4 text-[21px]">
              To encourage early participation and manage long-term token
              scarcity...
            </p>
            <p className="text-[#000] py-4 text-[21px]">
              This mechanism is not based on timing, but rather on total NU
              tokens mined...
            </p>
            <div className="p-4 bg-white rounded-lg shadow-xl">
  <table className="min-w-full divide-y divide-gray-200">
    {/* Table Head */}
    <thead className="bg-gray-800 text-white">
      <tr>
        <th 
          scope="col" 
          className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider"
        >
          Milestone (Total NU Mined)
        </th>
        <th 
          scope="col" 
          className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider"
        >
          Mining Rate Per Session
        </th>
        <th 
          scope="col" 
          className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider"
        >
          Reduction (%)
        </th>
      </tr>
    </thead>
    
    {/* Table Body */}
    <tbody className="bg-white divide-y divide-gray-200">
      {/* Row 1: Base Rate */}
      <tr className="hover:bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          20,000,000 NU
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
          1.000 NU
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
          Base Rate
        </td>
      </tr>
      
      {/* Row 2 */}
      <tr className="hover:bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          60,000,000 NU
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
          0.700 NU
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
          -30%
        </td>
      </tr>
      
      {/* Row 3 */}
      <tr className="hover:bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          100,000,000 NU
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
          0.490 NU
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
          -30%
        </td>
      </tr>
      
      {/* Row 4 */}
      <tr className="hover:bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          130,000,000 NU
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
          0.343 NU
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
          -30%
        </td>
      </tr>
      
      {/* Row 5 */}
      <tr className="hover:bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          150,000,000 NU
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
          0.238 NU
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
          -30%
        </td>
      </tr>
      
      {/* Row 6 */}
      <tr className="hover:bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          180,000,000 NU
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
          0.166 NU
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
          -30%
        </td>
      </tr>
      
    </tbody>
  </table>
</div>
            <h1 className="text-2xl text-[#101828] font-bold text-left mx-auto py-5">
              WHY THIS MATTERS?
            </h1>
            <ul className="list-disc mx-10">
              <li className="text-[#4a5565]">
                Incentivizes Early Actions: Users who mine earlier receive
                significantly more tokens per session
              </li>
              <li className="text-[#4a5565]">
                Controls Inflation: Prevents over-supply and supports long-term
                token value.
              </li>
              <li className="text-[#4a5565]">
                Supports Sustainability: Gradual distribution ensures the
                community and ecosystem can grow steadily
              </li>
            </ul>
            <h1 className="text-3xl text-[#101828] font-bold text-left mx-auto py-5">
              NUCLEUS CORE BURNING MECHANISM
            </h1>
            <p className="text-[#000] py-4 text-[21px]">
              To ensure a healthy, deflationary economy, the Nucleus Core
              Blockchain integrates a strategic burning mechanism...
            </p>

            <ul className="list-disc mx-10">
              <li className="text-[#4a5565]">
                Burn of Unverified/Unclaimed Coins: Tokens mined by users who
                fail to complete identity verification (KYC)...
              </li>
              <li className="text-[#4a5565]">
                30% Burn Of All Transaction Fees: For every on-chain
                transaction, 30% of transaction fees will be burned...
              </li>
              <li className="text-[#4a5565]">
                Optional Burn For Community Incentives: Special events,
                milestones, or governance decisions may trigger scheduled burns.
              </li>
              <li className="text-[#4a5565]">
                Burn of Dormant Mining Rewards: Mining rewards not claimed in
                time may be burned...
              </li>
            </ul>
            <p className="text-[#000] py-4 text-[21px]">
              The burning mechanisms of Nucleus Core are not just technical
              features—they are part of a philosophy...
            </p>

            {/* <ul className="list-disc mx-10">
              <li className="text-[#4a5565]">
                What information we collect about you.
              </li>
              <li className="text-[#4a5565]">
                How we use and share your information.
              </li>
              <li className="text-[#4a5565]">
                Your rights regarding your personal data.
              </li>
              <li className="text-[#4a5565]">
                The security measures we implement to protect your information.
              </li>
            </ul> */}
            {/* <p className="text-[#4a5565]">
              We encourage you to read this Privacy Policy carefully. If you
              have any questions or concerns, please contact us at
              support@Minenu.finance.
            </p> */}
          </div>
        </div>

        {/* <div className="my-5 text-center text-sm text-[#8a8a8a]">
          2025 Minenu. All Rights Reserved
        </div> */}
      </div>
    </div>
  );
};

export default page;
