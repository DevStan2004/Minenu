'use client'
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

const page = () => {
    const [activeContent, setActiveContent] = useState('what we collect');


  return (
    <div data-lenis-prevent className='flex justify-center w-full my-30 flex-col'>
        <div className="w-[90%] flex flex-col space-y-5 mx-auto">
            <div className="text-start flex flex-col justify-start space-y-3">
                <h1 className='text-4xl text-white font-bold'>Privacy Policy</h1>
                <p className='text-[#4a5565]'>Last Update: January 2024</p>
            </div>
            <p className="text-white">Nucleus Core, its parent, and affiliates, recognize that people who use Nucleus Core applications value their privacy. This Privacy Policy (the "Policy") describes how Nucleus Core, ("we", "our", or "us") collects, uses, shares, and stores personal information of its users from the Nucleus Core mobile application, the Nucleus Core browser mobile application, the Nucleus Core Node desktop software, Nucleus Core applications on Nucleus Core Apps Platform including Nucleus Core Wallet, Nucleus Core KYC, Nucleus Core Developer portal and the website, (the "Site") with regard to the Nucleus Core Token. This Policy applies to the Site, applications, products and services (collectively, "Services") on or in which it is posted, linked, or referenced.</p>
            <p className="text-white">By using the Services, you accept the terms of this Policy and our Terms of Use, and consent to our collection, use, disclosure, and retention of your information as described in this Policy. If you have not done so already, please also review our Terms of Use. The Terms of Use contain provisions that limit our liability to you and require you to resolve any dispute with us on an individual basis and not as part of any class or representative action. <span className='font-bold'>IF YOU DO NOT AGREE WITH ANY PART OF THIS PRIVACY POLICY OR OUR TERMS OF USE, THEN PLEASE DO NOT USE ANY OF THE SERVICES</span>.</p>
        </div>
        <div className="w-[90%] flex md:flex-row flex-col space-x-3 items-start mx-auto my-5">
            <div className={`sticky top-4 flex flex-col rounded-lg`}>
                <h6 className='font-semibold my-3'>Contents</h6>
                <Link href='#what-we-collect' onClick={() => setActiveContent('what we collect')} className={`p-2 cursor-pointer rounded-lg ${activeContent === 'what we collect' ? 'bg-white text-black' : 'text-white'} uppercase`}>what we collect</Link>
                <Link href='#how-we-use-information' onClick={() => setActiveContent('how we use information')} className={`p-2 cursor-pointer rounded-lg ${activeContent === 'how we use information' ? 'bg-white text-black' : 'text-white'} uppercase`}>how we use information</Link>
                <Link href='#sharing-of-personal-information' onClick={() => setActiveContent('sharing of personal information')} className={`p-2 cursor-pointer rounded-lg ${activeContent === 'sharing of personal information' ? 'bg-white text-black' : 'text-white'} uppercase`}>sharing of personal information</Link>
                <Link href='#users-outside-of-the-united-states' onClick={() => setActiveContent('users outside of the united states')} className={`p-2 cursor-pointer rounded-lg ${activeContent === 'users outside of the united states' ? 'bg-white text-black' : 'text-white'} uppercase`}>users outside of the united states</Link>
                <Link href='#how-information-is-secured' onClick={() => setActiveContent('how information is secured')} className={`p-2 cursor-pointer rounded-lg ${activeContent === 'how information is secured' ? 'bg-white text-black' : 'text-white'} uppercase`}>how information is secured</Link>
                <Link href='#information-choices-and-changes' onClick={() => setActiveContent('information choices and changes')} className={`p-2 cursor-pointer rounded-lg ${activeContent === 'information choices and changes' ? 'bg-white text-black' : 'text-white'} uppercase`}>information choices and changes</Link>
                <Link href='#changes-to-this-privacy-policy' onClick={() => setActiveContent('changes to this privacy policy')} className={`p-2 cursor-pointer rounded-lg ${activeContent === 'changes to this privacy policy' ? 'bg-white text-black' : 'text-white'} uppercase`}>changes to this privacy policy</Link>
                <Link href='#children' onClick={() => setActiveContent('children')} className={`p-2 cursor-pointer rounded-lg ${activeContent === 'children' ? 'bg-white text-black' : 'text-white'} uppercase`}>children</Link>
                <Link href='#notice-to-california-residents' onClick={() => setActiveContent('notice to california residents')} className={`p-2 cursor-pointer rounded-lg ${activeContent === 'notice to california residents' ? 'bg-white text-black' : 'text-white'} uppercase`}>notice to california residents</Link>
                <Link href='#notice-to-eu-data-subjects' onClick={() => setActiveContent('notice to eu data subjects')} className={`p-2 cursor-pointer rounded-lg ${activeContent === 'notice to eu data subjects' ? 'bg-white text-black' : 'text-white'} uppercase`}>notice to eu data subjects</Link>
                <Link href='#cookies-policy' onClick={() => setActiveContent('cookies policy')} className={`p-2 cursor-pointer rounded-lg ${activeContent === 'cookies policy' ? 'bg-white text-black' : 'text-white'} uppercase`}>cookies policy</Link>
            </div>

            <div className="max-w-4xl mx-auto p-6 sm:p-10 shadow-2xl rounded-xl text-gray-700 h-[100vh] overflow-y-scroll scroll-smooth">
                <p id='what-we-collect' className="text-xl font-bold underline mb-3">WHAT WE COLLECT</p>
                <p className="text-base leading-relaxed mb-4">
                We collect personal information about you in the following ways: 1) from you when you voluntarily submit information directly to us; 2) using automated technology, including when you visit our Site, social media, or communications; and 3) using third party sources, including our service providers, analytics providers, and social media companies. Automated technology collects information from your mobile device and includes cookies, web beacons, local shared objects, or other similar technology. More information is given below in the "Cookies and Other Technology" section below.
                We may make full use of all information that is de-identified, aggregated, or otherwise not in personally identifiable form. We may combine data collected from third party sources.
                </p>
                <p className="text-xl font-bold underline mt-8 mb-3">Information you give us</p>
                <p className="text-base leading-relaxed mb-4">
                Information we collect from you includes:
                Contact and identity information, such as your name, phone number, email address, Facebook name, username;
                User-created content, such as your chat messages, comments, likes, thumb-ups/downs, arts and graphics in social applications including chats and forums;
                Network information regarding transactions, such as transactions you send or receive.
                Feedback and correspondence, such as information you provide in your responses to surveys, when you participate in community research activities, report a problem with Service, receive customer support or otherwise correspond with us;
                Marketing information, such your preferences for receiving marketing communications and ads and details about how you engage with them.
                </p>
                <p className="text-xl font-bold underline mt-8 mb-3">Know Your Customer Verification Information</p>
                <p className="text-base leading-relaxed mb-4">
                Separate from the personal data collected in our app and from other sources as set forth herein, and to comply with industry regulatory standards and government orders in different areas such as Anti-Money Laundering (AML), Know-Your-Client (KYC), and Counter-Terrorist Financing (CTF), Nectar Core collects personal information such as identity documents (including passport, driver's license, national identity card, state ID card, tax ID number, passport number, driver's license details, national identity card details, visa information, selfie images, selfie videos etc.), proof of address, source of fund declaration, purposes of fund documents, and source of wealth ("KYC Data"). This KYC data is collected and used solely to verify the identity of Nucleus Core members ("Pioneers"), and to be compliant with regulatory requirements and the Nucleus Core policy that only real human beings can receive Nucleus Core Token. Nucleus Core KYC process is multifaceted and incorporates the use of real human beings and AI technology. We utilize AI technology in our KYC process for enhanced efficiency and security. Personal information collected for identity verification may be processed using AI algorithms. We use ChatGPT to automate identity verification and enhance security measures. By using our KYC services, users consent to the use of ChatGPT, and other AI providers that may be later implemented, as part of our KYC process.
                Furthermore, ChatGPT maintains its own policies, including its own privacy policies. By using our KYC services, you are agreeing and consenting to these policies, including their privacy policy which may be accessed at the following link: <a href="https://openai.com/policies/privacy-policy" target="_blank" className="text-blue-600 hover:text-blue-800 underline">https://openai.com/policies/privacy-policy</a>
                </p>
                <p className="text-xl font-bold underline mt-8 mb-3">Information we get from others</p>
                <p className="text-base leading-relaxed mb-4">
                We may get information about you from other third party sources and we may add this to information we get from your use of the Services. Such information may include:
                We may collect information that other users provide about you when they use our services. For example, if another user allows us to collect information from their device phonebook or email contacts—and you're one of that user's contacts—we may combine the information we collect from that user's phonebook or email contacts with other information we have collected about you. We may also obtain information from other companies. For example, we offer the option for you to login to our services through your Facebook account and Apple sign-in. With your authorization through Facebook, Google or iOS, these companies will give us the information that you consent to send us.
                Social Media Widgets: Our Site may include social media features, such as the Facebook logins, "like" button and widgets, such as the "share this" button. These features may collect your personal information and track your use of the Site. These social media features are either hosted by a third party or hosted directly on our Site. Your interactions with these features are governed by the privacy policy of the company providing such functionality.
                </p>
                <p className="text-xl font-bold underline mt-8 mb-3">Information automatically collected when you use our services</p>
                <p className="text-base leading-relaxed mb-4">
                When you use our services, we collect information about your usage of our apps, activities you have through our servers, such as how many times you mine, how many security circle members you add, the number of friends you invite to our apps, browsing history in the Nucleus Core Browser application, your usage information of Nucleus Core apps.
                Account information. We collect information about account status, language, Nucleus Core data, account behavior data.
                Device Information. We collect device-specific information, such as the hardware model, operating system version, advertising identifier, unique application identifiers, unique device identifiers, browser type, language, wireless network, and mobile network information (including the mobile phone number).
                Device Phonebook. If you're using our mobile app, we may—with your consent—collect information from your device's phonebook.
                Location Information. By using our services, you acknowledge that we may collect information about your location. With your consent, we may also collect information about your precise location using methods that include GPS, wireless networks, cell towers, Wi-Fi access points, and other sensors, such as gyroscopes, accelerometers, and compasses. If you are a Nucleus Core Node –meaning you run the desktop or mobile software of Nucleus Core Node, your IP address is public.
                Log Information. We also collect log information when you use our website. That information includes, among other things:
                details about how you've used our services
                device information, such as your web browser type, operating system and language
                access times
                pages viewed
                IP address
                identifiers associated with cookies or other technologies that may uniquely identify your device or browser
                pages you visited before or after navigating to our website.
                the pages or features of our Site to which a user browsed and the time spent on those pages or features, the frequency with which the Site is used by a user, search terms, the links on our Site that a user clicked on or used, and other statistics.
                We may use cookies or similar technologies to analyze trends, administer the website, track users' movements around the website, and to gather demographic information about our user base as a whole. Users can control the use of cookies at the individual browser level. For more information, please see the section entitled "Cookies Policy" below.
                We also use Google Analytics to help us offer you an optimized user experience. You can find more information about Google Analytics' use of your personal data here: <a href="https://policies.google.com/privacy?hl=en" target="_blank" className="text-blue-600 hover:text-blue-800 underline">https://policies.google.com/privacy?hl=en</a>
                Information we will never collect. We will never ask you to share your private keys or wallet passphrases. The wallet passphrases will be entered into the Nucleus Node Wallet interface locally on your phone to unlock your wallet, and will never leave your phone or come to our servers. Never trust anyone or any site that asks you to give your private keys or wallet passphrases.
                </p>
                <p id='how-we-use-information' className="text-xl font-bold underline mt-8 mb-3">HOW WE USE INFORMATION</p>
                <p className="text-base leading-relaxed mb-4">
                To provide our service
                We will use your information in the following ways:
                develop, operate, improve, deliver, maintain, and protect our services,
                communicate with you, to send information, including confirmations, technical notices, updates, security alerts, and support and administrative messages, etc..
                monitor and analyze usage,
                personalize the services by, among other things, suggesting friends or message templates, or customizing the content we show you, including ads,
                enhance the safety and security of our products and services
                verify your identity, and protect, investigate, and deter against fraudulent, unauthorized, or illegal activity,
                use information we've collected from cookies and other technology to enhance the services and your experience with them.
                To comply with law
                We use your personal information as we believe necessary or appropriate to comply with applicable laws, lawful requests and legal process, such as to respond to subpoenas or requests from government authorities.
                To optimize our platform
                In order to optimize your user experience, we may use your information to operate, maintain, and improve our Services. We may also use your information to respond to your comments and questions regarding the Services, and to provide you and other users with general customer service.
                To fulfill your requests
                With your consent, We may use or share your personal information with your consent, such as when you instruct us to take a specific action with respect to your personal information, or you opt into third party marketing communications.
                </p>
                <p id='sharing-of-personal-information' className="text-xl font-bold underline mt-8 mb-3">SHARING OF PERSONAL INFORMATION</p>
                <p className="text-base leading-relaxed mb-4">
                We do not share or sell the personal information that you provide us with other organizations without your express consent, except as described in this Privacy Policy. We disclose personal information to third parties under the following circumstances:
                Affiliates. We may disclose your personal information to our subsidiaries and corporate affiliates for purposes consistent with this Privacy Policy.
                Business Transfers. We may share personal information when we contemplate or enter into a business deal, or negotiate a business deal, involving the sale or transfer of all or a part of our business or assets. These deals can include any merger, financing, acquisition, or bankruptcy transaction or proceeding.
                Compliance with Laws and Law Enforcement; Protection and Safety. We may share personal information for legal, protection, and safety purposes. We may share information to comply with laws.We may share information to respond to lawful requests and legal processes.
                We may share information to protect the rights and property of ours, our agents, customers, and others. This includes enforcing our agreements, policies, and Terms of Use.
                We may share information in an emergency. This includes protecting the safety of our employees and agents, our customers, or any person.
                Professional Advisors and Service Providers. We may share information with those who need it to do work for us to provide the Services. These recipients may include third party companies and individuals to administer and provide the Service on our behalf (such as customer support, hosting, email delivery, database management services and identity KYC validators (identity verifiers), as well as lawyers, bankers, auditors, and insurers.
                KYC validators in Nucleus Core KYC app (KYC App) accessible through Nucleus Core Browser. KYC validators may be individual Pioneers from your country or region, have passed the Nucleus Core KYC and agreed to the Nucleus Core Validator Services Agreement that contains a Data Processing Agreement. The information shared with a specific KYC validator will be only a subset of your KYC data to help with identity verification. Please refer to the KYC App design for more details on how KYC validators access your information.
                With third parties as part of a merger or acquisition. If Nucleus Core gets involved in a merger, asset sale, financing, liquidation or bankruptcy, or acquisition of all or some portion of our business to another company, we may share your information with that company before and after the transaction closes.
                In the aggregate or after de-identification. We may also share with third parties aggregated or de-identified information that cannot reasonably be used to identify you.
                We do not share any data with ad networks directly. However the ad networks used inside our apps may request directly from your phone's operating system, such as iOS or Android, an anonymized advertising identifier in order to for them to serve you with more relevant ads.
                Other. You may permit us to share your personal information with other companies or entities of your choosing. Those uses will be subject to the privacy policies of the recipient entity or entities.
                </p>
                <p id='users-outside-of-the-united-states' className="text-xl font-bold underline mt-8 mb-3">USERS OUTSIDE OF THE UNITED STATES</p>
                <p className="text-base leading-relaxed mb-4">
                We welcome users from all over the world, but wherever you live or use our services, we operate our services from the United States. This means that we may collect your personal information from, transfer it to, and store and process it in the United States and other countries whose local data-protection and privacy laws may offer fewer protections than those in your country of residence or from any country where you use or access the services.
                EU users should read the important information provided below under "Notice To EU Data Subjects" about transfer of personal information outside of the European Economic Area (EEA).
                </p>
                <p id='how-information-is-secured' className="text-xl font-bold underline mt-8 mb-3">HOW INFORMATION IS SECURED</p>
                <p className="text-base leading-relaxed mb-4">
                We retain information we collect as long as it is necessary and relevant to fulfill the purposes outlined in this Privacy Policy. In addition, we retain personal information to comply with applicable law where required, prevent fraud, resolve disputes, troubleshoot problems, assist with any investigation, enforce our Terms of Use, and other actions permitted by law. To determine the appropriate retention period for personal information, we consider the amount, nature, and sensitivity of the personal information, the potential risk of harm from unauthorized use or disclosure of your personal information, the purposes for which we process your personal information and whether we can achieve those purposes through other means, and the applicable legal requirements.
                In some circumstances we may anonymize your personal information (so that it can no longer be associated with you) in which case we may use this information indefinitely without further notice to you.
                We employ industry standard security measures designed to protect the security of all information submitted through the Services. However, the security of information transmitted through the internet can never be guaranteed. We are not responsible for any interception or interruption of any communications through the internet or for changes to or losses of data. Users of the Services are responsible for maintaining the security of any password, biometrics, user ID or other form of authentication involved in obtaining access to password protected or secure areas of any of our digital services. In order to protect you and your data, we may suspend your use of any of the Services, without notice, pending an investigation, if any breach of security is suspected.
                </p>
                <p id='information-choices-and-changes' className="text-xl font-bold underline mt-8 mb-3">INFORMATION CHOICES AND CHANGES</p>
                <p className="text-base leading-relaxed mb-4">
                Accessing, Updating, Correcting, and Deleting your Information
                You may access information that you have voluntarily provided through your account on the Services, and may review, or request that it be corrected, or deleted by logging into your account in the Nucleus Core mobile application and visiting the user profile screen. For further requests in regard to personal data access, you may submit a request ticket, You can request to correct contact choices, opt-out of our sharing with others, and correct your personal information and preferences, subject to applicable law and Nucleus Core terms of service. If you choose to withdraw your consent from the collection, processing, and transfer of your information then we will be unable to provide you with a service and your account will be deleted. Data subjects have the right to withdraw their consent at any time and we will honor your request. However, because your consent to the sharing of information is necessary for our ability to verifying the identity of Pioneers so as to be compliant with regulatory requirements and the Nucleus Core policy that only real human beings can receive Nucleus Core Token, without your consent we cannot provide you with our service.
                Tracking Technologies Generally
                Regular cookies may generally be disabled or removed by tools available as part of most commercial browsers, and in some instances blocked in the future by selecting certain settings. For more information, please see the section entitled "Cookies Policy" below.
                Google Analytics
                You may exercise choices regarding the use of cookies from Google Analytics by going to <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" className="text-blue-600 hover:text-blue-800 underline">https://tools.google.com/dlpage/gaoptout</a> and downloading the Google Analytics Opt-out Browser Add-on.
                </p>
                <p id='changes-to-this-privacy-policy' className="text-xl font-bold underline mt-8 mb-3">CHANGES TO THIS PRIVACY POLICY</p>
                <p className="text-base leading-relaxed mb-4">
                We may change this Privacy Policy at any time. We encourage you to periodically review this page for the latest information on our privacy practices. If we make any changes, we will change the Last Updated date above.
                Any modifications to this Privacy Policy will be effective upon our posting of the new terms and/or upon implementation of the changes to the Site (or as otherwise indicated at the time of posting). In all cases, your continued use of the Site or Services after the posting of any modified Privacy Policy indicates your acceptance of the terms of the modified Privacy Policy.
                CHILDREN
                Our services are not intended for—and we don't direct them to—anyone under 13. And that's why we do not knowingly collect personal information from anyone under 13. Consistent with the requirements of the Children's Online Privacy Protection Act (COPPA), if we learn that we have received any information directly from a child under age 16 without first receiving his or her parent's verified consent, we will use that information only to respond directly to that child (or his or her parent or legal guardian) to inform the child that he or she cannot use the Site and subsequently we will delete that information.
                </p>
                <p id='notice-to-california-residents' className="text-xl font-bold underline mt-8 mb-3">NOTICE TO CALIFORNIA RESIDENTS</p>
                <p className="text-base leading-relaxed mb-4">
                Under California Civil Code Section 1789.3, California users are entitled to the following consumer rights notice: California residents may reach the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs by mail at 1625 North Market Blvd., Sacramento, CA 95834, or by telephone at (916) 445-1254 or (800) 952-5210.
                California state law confers certain rights relating to personal information to its residents.
                </p>
                <p id='notice-to-eu-data-subjects' className="text-xl font-bold underline mt-8 mb-3">NOTICE TO EU DATA SUBJECTS</p>
                <p className="text-base leading-relaxed mb-4">
                Personal Information
                With respect to EU data subjects, "personal information," as used in this Privacy Policy, is equivalent to "personal data" as defined in the European Union General Data Protection Regulation (GDPR).
                Sensitive Data
                Some of the information you provide us may constitute sensitive data as defined in the GDPR (also referred to as special categories of personal data), including identification of your race or ethnicity on government-issued identification documents.
                Legal Bases for Processing
                We only use your personal information as permitted by law. We are required to inform you of the legal bases of our processing of your personal information, which are described in the table below.
                </p>
                <table className="border border-gray-300 w-full text-left text-sm mt-4 mb-4">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 p-3 bg-gray-100 font-semibold w-1/2">Processing Purpose</th>
                            <th className="border border-gray-300 p-3 bg-gray-100 font-semibold w-1/2">Legal Basis</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 p-3">To provide our services<br/>To enable features to you<br/>To communicate with you<br/>To optimize our platform<br/>For compliance, fraud prevention, and safety<br/>To enforce our terms of service</td>
                            <td className="border border-gray-300 p-3">These processing activities constitute our legitimate interests. We make sure we consider and balance any potential impacts on you (both positive and negative) and your rights before we process your personal information for our legitimate interests. We do not use your personal information for activities where our interests are overridden by any adverse impact on you (unless we have your consent or are otherwise required or permitted to by law).</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-3">With your consent</td>
                            <td className="border border-gray-300 p-3">Where our use of your personal information is based upon your consent, you have the right to withdraw it anytime in the manner indicated in the Service or by contacting us.</td>
                        </tr>
                    </tbody>
                </table>
                
                <p className="text-base leading-relaxed mb-4">
                Use for New Purposes
                We may use your personal information for reasons not described in this Privacy Policy, where we are permitted by law to do so and where the reason is compatible with the purpose for which we collected it. If we need to use your personal information for an unrelated purpose, we will notify you and explain the applicable legal basis for that use. If we have relied upon your consent for a particular use of your personal information, we will seek your consent for any unrelated purpose.
                Your Rights
                Under the GDPR, you have certain rights regarding your personal information. You may ask us to take the following actions in relation to your personal information that we hold:
                Opt-out. Stop sending you direct marketing communications which you have previously consented to receive. We may continue to send you Service-related and other non-marketing communications.
                Access. Provide you with information about our processing of your personal information and give you access to your personal information.
                Correct. Update or correct inaccuracies in your personal information.
                Delete. Delete your personal information.
                Transfer. Transfer a machine-readable copy of your personal information to you or a third party of your choice.
                Restrict. Restrict the processing of your personal information.
                Object. Object to our reliance on our legitimate interests as the basis of our processing of your personal information that impacts your rights.
                We value your privacy and your rights. We may request specific information from you to help us confirm your identity and process your request. Applicable law may require or permit us to decline your request. If we decline your request, we will tell you why, subject to legal restrictions. If you would like to submit a complaint about our use of your personal information or respond to your requests regarding your personal information, you may contact us.
                Cross-Border Data Transfer
                Please be aware that your personal data will be transferred to, processed, and stored in the United States. Data protection laws in the U.S. may be different from those in your country of residence. We transfer your personal information out of the EEA only upon your consent. You consent to the transfer of your information, including personal information, to the U.S. as set forth in this Privacy Policy by visiting our Site or using our Services.
                Whenever we transfer your personal information out of the EEA to the U.S. or countries not deemed by the European Commission to provide an adequate level of personal information protection, the transfer will be based on a data transfer mechanism recognized by the European Commission as providing adequate protection for personal information.
                Transfers to Third Parties
                Courts, tribunals, government authorities and related parties or counterparties with whom we share personal data, third-party vendors and business partners are in some cases located outside the EU. Unless the recipients are located in countries that have been deemed adequate by the European Commission, we put in place data transfer agreements based on the applicable European Commission-approved Standard Contractual Clauses to protect the personal data so transferred. In certain cases, we may rely on statutory derogations for international data transfers.
                Please contact us if you want further information on the specific mechanism used by us when transferring your personal information out of the EEA.
                The collection, processing, and transfer of your information is necessary for our ability to provide you with our service. Without your consent we will be unable to authenticate your account, verify your identity, facilitate mining, establish security circles along with various other actions necessary for providing you with our service. As a result, if you decline to consent to the collection, processing, and transfer of your data we will be unable to provide you with our service.
                </p>

                {/* ======================================= */}
                {/* COOKIES POLICY */}
                {/* ======================================= */}
                <p id='cookies-policy' className="text-xl font-bold underline mt-8 mb-3">COOKIES POLICY</p>
                <p className="text-base leading-relaxed mb-4">
                We understand that your privacy is important to you and are committed to being transparent about the technologies we use. In the spirit of transparency, this policy provides detailed information about how and when we use cookies on our Site.
                Do we use Cookies?
                Yes. We and our marketing partners, affiliates, and analytics or service providers use cookies, web beacons, or pixels and other technologies to ensure everyone who uses the Site has the best possible experience.
                What is a Cookie?
                A cookie ("Cookie") is a small text file that is placed on your hard drive by a web page server. Cookies contain information that can later be read by a web server in the domain that issued the cookie to you. Some of the cookies will only be used if you use certain features or select certain preferences, and some Cookies will always be used. You can find out more about each Cookie by viewing our current Cookie list below. We update this list periodically, so there may be additional Cookies that are not yet listed. Web beacons, tags and scripts may be used in the Site or in emails to help us to deliver Cookies, count visits, understand usage and campaign effectiveness and determine whether an email has been opened and acted upon. We may receive reports based on the use of these technologies by our service/analytics providers on an individual and aggregated basis.
                Why do we use Cookies?
                We generally use Cookies for the following purposes:
                To recognize new or past customers.
                To store your password if you are registered on our Site.
                To improve our Site and to better understand your visits on our platforms and Site.
                To integrate with third party social media websites.
                To observe your behaviors and browsing activities over time across multiple websites or other platforms.
                Some Cookies are necessary for certain uses of the Site, and without such Cookies, we would not be able to provide many services that you need to properly use the Site. These Cookies, for example, allow us to operate our Site so you may access it as you have requested and let us recognize that you have created an account and have logged into that account to access Site content. They also include Cookies that enable us to remember your previous actions within the same browsing session and secure our Sites.
                We also use functional Cookies and Cookies from third parties for analysis, marketing and security purposes. Functional Cookies enable certain parts of the site to work properly and your user preferences to remain known. Analysis Cookies, among other things, collect information on how visitors use our Site, the content and products that users view most frequently, and the effectiveness of our third party advertising. Advertising Cookies assist in delivering ads to relevant audiences and having our ads appear at the top of search results. Security cookies, such as CAPTCHA, ensure that users are human. Cookies are either "session" Cookies which are deleted when you end your browser session, or "persistent," which remain until their deletion by you (discussed below) or the party who served the Cookie. Full details on all of the Cookies used on the Site are available at our Cookie Disclosure table below.
                How to disable Cookies.
                You can generally activate or later deactivate the use of Cookies through a functionality built into your web browser. To learn more about how to control Cookie settings through your browser:
                Click <a href="#" className="text-blue-600 hover:text-blue-800 underline">here</a> to learn more about how to clear, enable and manage Cookies in Chrome;
                If you want to learn more about Cookies, or how to control, disable or delete them, please visit <a href="http://www.aboutcookies.org" target="_blank" className="text-blue-600 hover:text-blue-800 underline">http://www.aboutcookies.org</a> for detailed guidance. In addition, certain third party advertising your internet browsing. To learn more about this feature from Google, click <a href="#" className="text-blue-600 hover:text-blue-800 underline">here</a>.
                To control flash Cookies, which we may use on our Site from time to time, you can go to this <a href="#" className="text-blue-600 hover:text-blue-800 underline">link</a> because Flash Cookies cannot be controlled through your browser settings. Please note that if you decline the use of Cookies, some functions of the website may be unavailable and we will not be able to present personally tailored content and advertisements to you.
                We may link the information collected by Cookies with other information we collect from you pursuant to this Privacy Policy and use the combined information as set forth herein. Similarly, the third parties who serve Cookies on our Site may link your name or email address to other information they collect, which may include past purchases made offline or online, or your online usage information. If you are located in the European Economic Area, you have certain rights that are described above under the header "Notice to EU Data Subjects", including the right to inspect and correct or delete the data that we have about you.
                </p>

            </div>
        </div>
    </div>
  )
}

export default page
