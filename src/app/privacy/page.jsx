import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center w-full my-30'>
        <div className="w-[55rem] flex flex-col space-y-5">
            <div className="text-center flex flex-col justify-center space-y-3">
                <h1 className='text-4xl text-[#101828] font-bold'>Privacy Policy</h1>
                <p className='text-[#4a5565]'>Last Update: January 2024</p>
            </div>
            <div className="bg-white shadow rounded-lg w-full p-4 flex flex-col space-y-4">
                <div className="my-3 border-b py-2">
                    <h3 className='text-2xl text-[#101828] font-semibold'>I Introduction</h3>
                </div>
                <p className="text-[#4a5565]">Welcome to Celia. Your privacy is important to us. This Privacy Policy outlines how we collect, use, store, and protect your personal data when you interact with our services, including Celia Wallet and Celia Pay. By using our services, you agree to the terms of this Privacy Policy.</p>
                <p className="text-[#4a5565]">At Celia, we are committed to maintaining the highest standards of data protection. We recognize the importance of your personal information and are dedicated to handling it responsibly and transparently. This Privacy Policy is designed to help you understand:</p>
                <ul className='list-disc mx-10'>
                    <li className="text-[#4a5565]">What information we collect about you.</li>
                    <li className="text-[#4a5565]">How we use and share your information.</li>
                    <li className="text-[#4a5565]">Your rights regarding your personal data.</li>
                    <li className="text-[#4a5565]">The security measures we implement to protect your information.</li>
                </ul>
                <p className="text-[#4a5565]">We encourage you to read this Privacy Policy carefully. If you have any questions or concerns, please contact us at support@celia.finance.</p>
            </div>
            <div className="bg-white shadow rounded-lg w-full p-4 flex flex-col space-y-4">
                <div className="my-3 border-b py-2">
                    <h3 className='text-2xl text-[#101828] font-semibold'>II Data Collection and Usage</h3>
                </div>
                <p className="text-[#4a5565]">We collect device and usage data to enhance user experience and improve our platform. This includes:</p>
                <ul className='list-disc mx-10'>
                    <li className="text-[#4a5565]">Device Information: Details such as device type, model, operating system, and unique device identifiers.</li>
                    <li className="text-[#4a5565]">Usage Data: Interaction patterns, feature usage, access logs, and browsing behavior within our services.</li>
                    <li className="text-[#4a5565]">Log Data: IP addresses, timestamps, and error reports to diagnose technical issues and enhance security.</li>
                </ul>
                <p className="text-[#4a5565]">This information helps us analyze trends, optimize performance, detect fraud, and ensure platform security. We do not use this data for targeted advertising.</p>
            </div>
            <div className="bg-white shadow rounded-lg w-full p-4 flex flex-col space-y-4">
                <div className="my-3 border-b py-2">
                    <h3 className='text-2xl text-[#101828] font-semibold'>III Data Sharing and Disclosure</h3>
                </div>
                <p className="text-[#4a5565]">We do not sell or rent your personal data. However, we may share it with:</p>
                <ul className='list-disc mx-10'>
                    <li className="text-[#4a5565]">Service Providers: To help with payment processing and platform functionality.</li>
                    <li className="text-[#4a5565]">Regulatory Authorities: When required by law.</li>
                </ul>
                <p className="text-[#4a5565]">We implement strict security measures to protect your data from unauthorized access, loss, or misuse.</p>
            </div>
            <div className="bg-white shadow rounded-lg w-full p-4 flex flex-col space-y-4">
                <div className="my-3 border-b py-2">
                    <h3 className='text-2xl text-[#101828] font-semibold'>IV Security Measures</h3>
                </div>
                <p className="text-[#4a5565]">We take the security of your personal data seriously and implement industry-standard measures to protect it:</p>
                <ul className='list-disc mx-10'>
                    <li className="text-[#4a5565]">Encryption: We use strong encryption protocols to secure sensitive data during transmission and storage.</li>
                    <li className="text-[#4a5565]">Access Controls: Strict authentication and authorization mechanisms limit access to personal data.</li>
                    <li className="text-[#4a5565]">Regular Security Audits: We conduct frequent assessments to identify and mitigate potential vulnerabilities.</li>
                    <li className="text-[#4a5565]">Data Anonymization: Where possible, we anonymize data to protect user privacy.</li>
                </ul>
                <p className="text-[#4a5565]">Incident Response: In the event of a security breach, we have protocols in place to investigate, mitigate, and notify affected users.</p>
            </div>
            <div className="bg-white shadow rounded-lg w-full p-4 flex flex-col space-y-4">
                <div className="my-3 border-b py-2">
                    <h3 className='text-2xl text-[#101828] font-semibold'>V. Changes to This Policy</h3>
                </div>
                <p className="text-[#4a5565]">We may update this policy from time to time. Any changes will be posted on our website with the updated effective date.</p>
            </div>
            <div className="bg-white shadow rounded-lg w-full p-4 flex flex-col space-y-4">
                <div className="my-3 border-b py-2">
                    <h3 className='text-2xl text-[#101828] font-semibold'>VI. Changes to This Policy</h3>
                </div>
                <p className="text-[#4a5565]">If you have any questions about this Privacy Policy, please contact us at support@celia.finance</p>
            </div>
            <div className="my-5 text-center text-sm text-[#8a8a8a]">2024 Celia. All Rights Reserved</div>
        </div>
    </div>
  )
}

export default page
