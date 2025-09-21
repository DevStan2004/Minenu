import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center w-full my-30'>
        <div className="w-[55rem] flex flex-col space-y-5">
            <div className="text-center flex flex-col justify-center space-y-3">
                <h1 className='text-4xl text-[#101828] font-bold'>Terms of Services</h1>
                <p className='text-[#4a5565]'>Last Update: January 2024</p>
            </div>
            <div className="bg-white shadow rounded-lg w-full p-4 flex flex-col space-y-4">
                <div className="my-3 border-b py-2">
                    <h3 className='text-2xl text-[#101828] font-semibold'>I. Acceptance of Terms</h3>
                </div>
                <p className="text-[#4a5565]">By accessing or using Celia's services, including Celia Wallet and Celia Pay, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.</p>
            </div>
            <div className="bg-white shadow rounded-lg w-full p-4 flex flex-col space-y-4">
                <div className="my-3 border-b py-2">
                    <h3 className='text-2xl text-[#101828] font-semibold'>II. User Responsibilities</h3>
                </div>
                <ul className='list-disc mx-10'>
                    <li className="text-[#4a5565]">Provide accurate and truthful information during account registration.</li>
                    <li className="text-[#4a5565]">Maintain the confidentiality of their login credentials.</li>
                    <li className="text-[#4a5565]">Use Celia services lawfully and not or fraudulent or unauthorized activities.</li>
                    <li className="text-[#4a5565]">Report any suspicious activities or security breaches immediately.</li>
                </ul>
            </div>
            <div className="bg-white shadow rounded-lg w-full p-4 flex flex-col space-y-4">
                <div className="my-3 border-b py-2">
                    <h3 className='text-2xl text-[#101828] font-semibold'>III Intellectual Property Rights</h3>
                </div>
                <p className="text-[#4a5565]">All content, trademarks, logos, and intellectual property related to Celia's services are owned by Celia or its licensors. Users may not copy, modify, distribute, or use Celia's intellectual property without prior written consent.</p>
            </div>
            <div className="bg-white shadow rounded-lg w-full p-4 flex flex-col space-y-4">
                <div className="my-3 border-b py-2">
                    <h3 className='text-2xl text-[#101828] font-semibold'>IV LImittion of Liability</h3>
                </div>
                <p className="text-[#4a5565]">Celia is not liable for:</p>
                <ul className='list-disc mx-10'>
                    <li className="text-[#4a5565]">Any indirect, incidental, or consequential damages resulting from the use of our services.</li>
                    <li className="text-[#4a5565]">Unauthorized access to user accounts due to negligence in protecting login credentials.</li>
                    <li className="text-[#4a5565]">Service interruptions caused by external factors such as technical failures or regulatory actions.</li>
                </ul>
                <p className="text-[#4a5565]">Incident Response: In the event of a security breach, we have protocols in place to investigate, mitigate, and notify affected users.</p>
            </div>
            <div className="bg-white shadow rounded-lg w-full p-4 flex flex-col space-y-4">
                <div className="my-3 border-b py-2">
                    <h3 className='text-2xl text-[#101828] font-semibold'>V. Governing Law and Dispute Resolution</h3>
                </div>
                <p className="text-[#4a5565]">These Terms of Use and any disputes arising out of or related to them shall be governed by the laws of the jurisdiction in which Celia operates, without regard to its conflict of law principles. Any legal action or proceeding arising under these terms shall be resolved through binding arbitration in accordance with the rules of the relevant arbitration body. By agreeing to these terms, you waive your right to a trial by jury or to participate in a class action lawsuit.</p>
            </div>
            <div className="my-5 text-center text-sm text-[#8a8a8a]">2024 Celia. All Rights Reserved</div>
        </div>
    </div>
  )
}

export default page
