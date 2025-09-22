'use client'
import React, { useEffect, useState, useRef } from 'react'
import { Globe, Plane, Instagram, Linkedin, Youtube, X } from 'lucide-react'
import WhitePaperNav from './WhitePaperNav'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger);


const whitePaperData = [
    {
        id: 1,
        typeIntro: 'introduction',
        heading: 'What is Minenu?',
        title: 'What is Minenu?',
        content: 'A next-generation Web3 ecosystem designed to make digital assets easy to use, send, earn, and build with.',
        Minenucontent2: "Minenu is a next-generation Web3 ecosystem designed to make digidual assets easy to use, send, earn, and build with. Powered by Minenu Token (Minenu), the platform is more than just a cryptocurrency—it's an open network for users, gamers, and developers to interact with blockhain in a seamless way.",
        Minenucontent3: "At its core, Minenu enables:",
        Minenucontent3Item: ['✅Effortless Transactions - Send, receive, withdraw and stake Minenu for real-world value', '✅ Mini Apps & Developer Innovation – Developers can build applications within the Minenu ecosystem, fully powered by Minenu', "✅ Gaming & Play-to-Earn – Games can integrate Minenu for in-game purchases, rewards, and P2E mechanics", "✅ A Decentralized Future – Users and developers can build without limits, tapping into the power of blockchain"],
        Minenucontent4: 'With Minenu, Web3 becomes simple, accessible, and rewarding for everyone. Whether you want to transact, build, or play, Minenu is the key to unlocking the full potential of digital assets.'
    },
    {
        id: 2,
        typeIntro: 'introduction',
        heading: 'Vision & Mission',
        title: 'Vision & Mission',
        visiontitle: 'Vision & Mission',
        content: 'Minenu’s vision to create a Web3-powered digital economy and mission to empower users, developers, and creators.',
        visionsubtitle1: "Vision",
        visioncontent2: "Minenu’s vision is to create a Web3-powered digital economy where anyone can send, receive, stake, build, and play with real value—without technical barriers or restrictions.",
        visioncontent3: 'We believe that:',
        visioncontent3Item: ['Digital assets should be easy to use—anyone should be able to transact in seconds', 'Developers should have opportunities to build—and be rewarded for their ideas', "Gaming should be more than entertainment—it should create economic opportunities", "Decentralization should be the future—giving control back to users and creators", "Minenu is not just a token or a platform—it’s an entire ecosystem that connects people, technology, and real-world value"],
        visionsubtitle2: 'Mission',
        visioncontent4: 'Minenu aims to:',
        visioncontent4Items: ['🔹 Enable Simple & Secure Transactions – Make staking, payments, gifting, and withdrawals seamless', '🔹 Empower Developers – Fund and support Mini Apps that bring new ideas to life', "🔹 Revolutionize Gaming – Provide a Play-to-Earn and in-game purchase system using Minenu", "Bridge Millions of Users to Web3 – Help everyone, from users to developers, benefit from blockchain"],
        visioncontent6: "Through innovation, funding, and decentralization, Minenu will reshape how digital assets work—making them faster, easier, and more rewarding."
    },
    {
        id: 3,
        typeIntro: 'introduction',
        heading: 'Core Focus Areas',
        title: 'Core Focus Areas',
        content: 'Exploring how Minenu Token (Minenu) powers transactions, Mini Apps, gaming, and developer innovation in the Web3 ecosystem.',
        corecontent2: `Minenu Token (<span className="text-white">Minenu</span>) is at the center of the Minenu Web3 ecosystem, making it easy for users to stake, send, receive, withdraw, and even gift digital assets that hold real-world value.`,
        corecontent3: 'With Minenu, users and developers can do more than just trade crypto—they can build, earn, and interact with the ecosystem in exciting ways.',
        corecontent5: 'Here’s how Minenu Token (Minenu) will power the next generation of Web3 experiences:',
        corenumberedTitle1: '1. Everyday Transactions & Real-World Value',
        corenumberedContent1: 'Minenu Token isn’t just another cryptocurrency—it’s designed for real use cases.',
        corenumberedContent1Array1: ['✅ Send & Receive Assets: Users can easily transfer Minenu to anyone, anywhere, instantly.', '✅ Withdraw & Hold Real-World Value: Minenu can be converted to other assets or withdrawn as needed.', '✅ Gift Friends & Family: Want to share value? Minenu allows users to send gifts in seconds.', '✅ Gift Friends & Family: Want to share value? Minenu allows users to send gifts in seconds.', '✅ Staking & Rewards: Users can stake Minenu and earn passive income, helping secure the network while benefiting from their holdings.'],
        corenumberedTitle2: '2. Minenu Mini Apps: Developer-Powered Innovation',
        corenumberedContent2: 'Minenu is not just for users—it’s also for builders. The Minenu Mini App Program is a game-changer for developers who want to launch apps inside the ecosystem.',
        coreminiDefinitionQuestion: 'What is a Mini App?',
        coreminiDefinitionAnswer: 'A Mini App is a small, lightweight application built by developers that runs inside the Minenu ecosystem—powered by Minenu for payments, transactions, and rewards.',
        corenumberedContent1Array2: ['✅ Developers Get Funded: The Minenu Group will invest in standout ideas from users who are developers.', '✅ Free Access to Millions of Users: Any developer launching a Mini App gets access to Minenu’s large user base for free.', '✅ Monetization & Revenue: Developers can earn from their apps using Minenu-based transactions, subscriptions, or in-app purchases.', '✅ Built for Web3: Mini Apps will be fully decentralized and powered by Minenu for payments, gaming, and other innovative features.'],
        corebottomContent: '🚀 Minenu is giving developers the tools and funding to create the next big Web3 applications!',
        corenumberedTitle3: '3. Gaming: Play-to-Earn & In-App Purchases with Minenu',
        corenumberedContent3: 'Game developers can use Minenu Token (Minenu) inside their games, making it a key part of Play-to-Earn mechanics and in-game purchases.',
        corenumberedContent1Array3: ['✅ Play-to-Earn (P2E): Players can earn Minenu as rewards by playing games.', '✅ In-Game Purchases: Minenu can be used to buy items, skins, characters, and upgrades.', '✅ Monetization for Game Developers: Developers who integrate Minenu into their games can earn revenue directly from users.', '✅ Seamless Integration: Games built with Minenu’s Mini App Program can easily tap into Minenu’s millions of users.'],
        corebottomContent1: 'Minenu removes the complexity of Web3 game development by giving developers an easy way to integrate blockchain payments and rewards.',
        corebottomContent2: 'Minenu empowers users and developers to connect, create, and earn in a borderless, decentralized future. 🚀',
    },
    {
        id: 4,
        typeIntro: 'introduction',
        heading: 'Why Blockchain?',
        title: 'Why Blockchain?',
        content: 'Exploring the transformative power of blockchain technology in creating a decentralized, secure, and transparent ecosystem.',
        chaincontent1: "The Minenu ecosystem leverages blockchain technology to provide a secure, transparent, and decentralized framework for transactions, gaming, and developer applications. Traditional financial systems and centralized platforms often impose limitations on users and developers, including high fees, restricted access, and third-party control. Blockchain removes these obstacles, ensuring seamless, trustless, and efficient interactions within the Minenu ecosystem.",
        chaintitle2: 'Decentralization: Removing Barriers for Users & Developers',
        chaincontent2: 'Centralized platforms control transactions, enforce arbitrary policies, and limit access based on location, regulatory restrictions, or platform rules. Minenu utilizes blockchain to eliminate these restrictions, allowing:',
        chaincontent2Items: ['Users to send, receive, withdraw, and stake Minenu without intermediaries.', 'Developers to launch Mini Apps that integrate Minenu and immediately tap into Minenu’s user base.', 'Game developers to build Play-to-Earn (P2E) models with direct in-game transactions using Minenu.', 'A community-driven governance model where decisions are made by Minenu holders instead of a centralized authority.'],
        chaincontent3: 'This structure ensures that all participants—users, developers, and businesses—operate in an open and permissionless environment.',
        chaintitle3: 'Security: Safeguarding Transactions and Digital Assets',
        chaincontent4: 'Blockchain transactions are immutable and cryptographically secure, reducing the risks of fraud, hacking, and unauthorized access. The Minenu ecosystem incorporates:',
        chaincontent4items: ['Smart contracts to automate and secure transactions for payments, staking, and Mini App interactions.', 'Decentralized storage of user assets, eliminating the risk of centralized exchange hacks.', 'A trustless gaming system where rewards and in-game purchases are verifiable on the blockchain.', 'User-controlled wallets with private keys, ensuring complete ownership of digital assets.'],
        chaincontent5: 'By eliminating reliance on third-party systems, blockchain significantly enhances the security and integrity of financial and gaming transactions.',
        chaintitle4: 'Transparency: Ensuring Verifiable Transactions & Fair Rewards',
        chaincontent6: 'All transactions within the Minenu ecosystem are recorded on the blockchain, allowing users, developers, and businesses to verify:',
        chaincontent6items: ['The accuracy of Play-to-Earn (P2E) rewards in gaming applications.', 'Developer earnings from Mini Apps without dependence on centralized payment processors.', 'Minenu transactions for staking, gifting, and withdrawals, ensuring fair and open financial interactions.', 'Transaction fees and smart contract execution to prevent hidden charges or unauthorized deductions.'],
        chaincontent7: 'This transparency fosters trust between all participants, making Minenu a fair and open Web3 ecosystem.'

    },
    {
        id: 5,
        typeIntro: 'Minenu Overview',
        heading: 'Limitations of Traditional Finance',
        title: 'Limitations of Traditional Finance',
        content: 'Exploring the barriers in centralized financial platforms and how Minenu’s Web3 ecosystem provides a solution.',
        limitationcontent1: 'Traditional financial systems and centralized applications have long been the primary way people transact, save, and interact with digital platforms. However, these systems come with significant limitations that restrict user autonomy, increase costs, and limit innovation. Minenu addresses these issues by providing a decentralized, open, and efficient Web3 ecosystem powered by Minenu Token (Minenu).',
        limitationsubtitle: 'Restricted Access & Financial Exclusion',
        limitationcontent2: 'Traditional banking and payment systems are not accessible to everyone due to:',
        limitationcontent2Items: ['Geographical limitations that prevent people in certain regions from opening accounts or accessing global financial services.', 'High entry barriers that require documentation, credit scores, and approvals to access even basic services.', 'Dependency on centralized authorities that can freeze accounts, block transactions, or restrict users based on policies.'],
        limitationcontent3: 'Blockchain-based systems like Minenu remove these barriers by enabling anyone with an internet connection to send, receive, withdraw, and stake Minenu without restrictions.',
        limitationsubtitle1: 'High Transaction Fees & Delays',
        limitationcontent4: 'Centralized financial services impose various fees that increase costs for users and businesses:',
        limitationcontent4items: ['Bank transfers & remittances come with high fees, especially for international transactions.', 'Payment processing platforms charge businesses for every transaction.', 'Gaming & app store fees take up to 30% of revenue from developers.', 'Withdrawal limits & processing delays make access to funds slow and inconvenient.'],
        limitationcontent5: 'Minenu’s blockchain infrastructure allows users and developers to transact directly without intermediaries, reducing fees and ensuring near-instant payments.',
        limitationsubtitle2: 'Lack of Transparency & User Control',
        limitationcontent6: 'Traditional platforms operate in closed environments, where users and developers have little visibility into:',
        limitationcontent6items: ['How their funds are handled by financial institutions.', 'Revenue-sharing models of centralized gaming platforms and app stores.', 'Hidden fees and algorithmic control over digital transactions.'],
        limitationcontent7: 'Minenu’s decentralized approach ensures that all transactions, rewards, and earnings are recorded on-chain, making them fully transparent and verifiable.',
        limitationsubtitle3: 'Limited Innovation & Developer Restrictions',
        limitationcontent8: 'Developers who create applications, games, or financial tools on centralized platforms face:',
        limitationcontent8Items: ['Approval processes & restrictions that limit creativity and access to user bases.', 'High revenue cuts from third-party platforms controlling monetization.', 'Inability to integrate blockchain payments and digital ownership in a seamless way.'],
        limitationcontent9: 'Minenu provides a Mini App program where developers can launch blockchain-powered applications, integrate Minenu transactions, and instantly access millions of users—without platform fees or restrictions.',
        limitationcontent10: "By overcoming these traditional financial limitations, Minenu is creating an open, borderless, and user-empowered digital economy where anyone can transact, build, and earn without barriers."
    },
    {
        id: 6,
        typeIntro: 'Minenu Overview',
        heading: 'Current Ecosystem Challenges',
        title: 'Current Ecosystem Challenges',
        content: 'Exploring the critical problems in digital payments, gaming, and developer monetization that Minenu aims to solve.',
        currentsubtitle: 'Problems in Digital Transactions, Gaming, and Developer Monetization',
        currentcontent1: 'As the world becomes increasingly digital, users, gamers, and developers still face significant challenges when it comes to transactions, financial inclusion, gaming economies, and app monetization. The Minenu ecosystem is designed to solve these problems by removing centralized restrictions, reducing costs, and providing an open, blockchain-powered economy.',
        currentsubtitle1: 'Problems in Digital Transactions',
        currentcontent2: 'Traditional digital transactions—whether for payments, gaming, or online purchases—are slow, expensive, and often restricted by intermediaries.',
        currentcontent2items: ['High Fees – Payment processors, banks, and third-party platforms charge transaction fees, withdrawal fees, and hidden service fees that cut into users’ funds.', 'Slow Processing Times – Bank transfers, payment settlements, and cross-border transactions can take days due to regulatory delays and intermediary approvals.', 'Limited Accessibility – Many users, especially in emerging markets, lack access to seamless digital payment systems due to strict banking requirements.', 'Fraud & Chargebacks – Centralized payment systems allow reversible transactions, leading to fraud, loss of funds, and increased operational costs for businesses.'],
        currentsubtitle2: 'How Minenu Solves It:',
        currentsubtitle2items: ['Minenu transactions are instant, borderless, and low-cost, allowing users to send, receive, and withdraw assets efficiently.', 'No intermediaries or banking restrictions, enabling financial inclusion for all users.', 'Transactions are recorded on-chain, preventing fraud and chargebacks.'],
        currentsubtitle3: 'Problems in Gaming & Play-to-Earn (P2E) Models',
        currentsubtitle3items: ['The gaming industry has shifted towards Play-to-Earn (P2E) models and digital ownership, but traditional gaming ecosystems create significant barriers for players and developers.', 'Lack of True Digital Ownership – Gamers purchase in-game assets (skins, weapons, items) but don’t truly own them—they are tied to centralized servers.', 'P2E Gaming Rewards Are Often Unstable – Many P2E games rely on unsustainable reward systems, making it hard for players to earn real value.', 'High Transaction & Withdrawal Fees – Cashing out gaming rewards often comes with expensive fees and slow processing times.', 'Developers Face High Revenue Cuts – Game developers who list their apps on major platforms like Google Play or Apple App Store lose up to 30% of their revenue in platform fees.'],
        currentsubtitle4: 'How Minenu Solves It:',
        currentsubtitle4items: ['Minenu allows in-game asset ownership, meaning players truly own and trade their digital items.', 'Stable P2E ecosystem backed by Minenu transactions, ensuring sustainable rewards for gamers.', 'Low transaction fees for purchases and rewards, making gaming earnings more valuable.', 'Game developers integrate Minenu into their games and monetize without third-party restrictions.'],
        currentsubtitle5: 'Problems in Developer Monetization & App Ecosystems',
        currentcontent3: 'Developers who create apps, games, and digital services struggle with unfair revenue-sharing models, platform restrictions, and discoverability issues.',
        currentcontent3item: ['High Platform Fees – Major app stores and payment processors take significant cuts from developer revenue, limiting profitability.', 'Strict Approval Processes – Developers must comply with centralized platform rules, often leading to rejections or restrictions on innovative apps.', 'Lack of Funding for New Ideas – Many developers lack access to funding and user bases, making it hard to scale their projects.', 'Difficulty Reaching Users – Even after launching, developers struggle with discoverability and user adoption.'],
        currentsubtitle6: 'How Minenu Solves It:',
        currentsubtitle6items: ['Mini App developers keep 100% of their revenue—no platform fees or restrictions.', 'Minenu funds and supports promising developers, providing capital and user exposure.', 'Built-in user base—apps launched on Minenu instantly tap into millions of users.', 'Minenu-based transactions allow direct earnings, ensuring a sustainable Web3 developer economy.'],
        currenttabletitle: 'Summary of Key Problems & Solutions',
        currenttable: [
            {
                header: ['Problem', 'Traditional System Issues', "Minenu's Solution"]
            }, {
                dataname: 'Digital Transactions',
                datacontent: ['High fees, delays, limited access', 'Instant, low-cost Minenu transactions']
            }, {
                dataname: 'Gaming & P2E',
                datacontent: ['No true asset ownership, high fees', 'Minenu-powered rewards & in-game purchases']
            }, {
                dataname: 'Developer Monetization',
                datacontent: ['High platform fees, funding issues', 'Mini Apps, direct revenue, funding']
            }
        ],
        currentbottomcontent: 'By solving these critical problems, Minenu is redefining Web3 finance, gaming, and app development, making it easier for users, gamers, and developers to transact, earn, and build without restrictions.'
    },
    {
        id: 7,
        typeIntro: 'Minenu Overview',
        heading: 'Need for a Decentralized Solution',
        title: 'Need for a Decentralized Solution',
        content: 'Exploring the critical challenges in digital transactions, gaming, and app development that demand a new, blockchain-powered approach.',
        decentralizedsubtitle: 'The Need for an Accessible, Decentralized Web3 Solution',
        decentralizedcontent1: 'As the world increasingly moves toward digital transactions, gaming economies, and decentralized applications, the need for an accessible, low-cost, and user-friendly Web3 solution is more urgent than ever. Traditional platforms are expensive, centralized, and restrictive, making it difficult for users, gamers, and developers to fully participate in the digital economy.',
        decentralizedcontent2: 'Minenu provides a borderless, decentralized ecosystem where users can send, receive, stake, game, and build freely—without the restrictions of traditional financial systems or app store limitations.',
        decentralizedsubtitle1: '1. Accessibility for Users: Making Digital Transactions Seamless',
        decentralizedcontent3: 'Many users are excluded from digital payments and blockchain-based services due to high fees, banking restrictions, and complicated processes.',
        decentralizedcontent3Items: ['Banking restrictions prevent many users from accessing global transactions.', 'High transaction fees make digital payments costly for everyday use.', 'Slow processing times in traditional finance create unnecessary delays.', 'Complex crypto wallets and blockchain interfaces discourage new users.'],
        decentralizedcontent4: 'Minenu provides a simple, intuitive solution where anyone can send, receive, withdraw, and stake Minenu with minimal fees and instant transfers.',
        decentralizedcontent4Items: ['Users don’t need banking approvals—Minenu is open to anyone with an internet connection.', 'Gifting and peer-to-peer transactions make digital assets more practical for everyday use.'],
        decentralizedcontent5: 'By removing barriers, Minenu makes blockchain-based payments as easy as using cash or a mobile wallet.',
        decentralizedsubtitle2: '2. A Sustainable Play-to-Earn & Gaming Economy',
        decentralizedcontent6: 'The gaming industry is undergoing massive changes, with players demanding real value for their time and in-game assets. However, most gaming platforms and Play-to-Earn (P2E) models fail to provide sustainable rewards or true ownership.',
        decentralizedcontent6Items: ['Players don’t own in-game assets—companies control them.', 'Gaming rewards are often unsustainable, leading to token crashes.', 'Developers lose up to 30% of revenue in traditional app stores.', 'Cross-game economies are limited—items and assets are locked in individual games.'],
        decentralizedcontent7: 'Minenu enables true ownership of in-game assets, allowing players to buy, sell, and trade items using Minenu.',
        decentralizedcontent7Items: ['Developers can integrate Minenu as a Play-to-Earn currency, ensuring long-term economic stability.', 'Minenu’s gaming ecosystem supports seamless, low-fee transactions, making Play-to-Earn more profitable for both players and game studios.', 'Players can move assets across different games, breaking traditional platform restrictions.'],
        decentralizedcontent8: 'By decentralizing in-game assets and gaming economies, Minenu creates a new, fair model where players and developers both benefit.',
        decentralizedsubtitle3: '3. A Fair Ecosystem for Developers & Mini App Builders',
        decentralizedcontent9: 'Developers face major obstacles when trying to monetize apps, games, and blockchain-based projects due to high fees, restrictive platform rules, and lack of funding.',
        decentralizedcontent9Items: ['Traditional platforms take up to 30% of revenue from developers.', 'Developers must follow restrictive app store policies, limiting innovation.', 'Most projects struggle to get funding, exposure, and users.', 'Web3 integration is complex and expensive for independent developers.'],
        decentralizedcontent10: 'Minenu’s Mini App program allows developers to launch without fees, keeping 100% of their earnings.',
        decentralizedcontent10Items: ['Developers can receive funding directly from the Minenu Group for standout projects.', 'Apps and games built on Minenu instantly gain exposure to millions of users.', 'Seamless Minenu integration makes monetization simple for developers.'],
        decentralizedcontent11: 'By supporting developers with funding, tools, and a ready-made user base, Minenu removes barriers to innovation and helps bring the next generation of Web3 applications to life.',
        decentralizedsubtitle4: 'Why Minenu is the Solution',
        decentralizedcontent12: 'The problems in traditional finance, gaming, and app development demand a new, decentralized approach that:',
        decentralizedcontent12Items: ['Gives users complete control over digital transactions and payments', 'Enables Play-to-Earn gaming with sustainable rewards', 'Allows developers to build apps, get funded, and reach users easily', 'Removes unnecessary middlemen and platform fees'],
        decentralizedcontent13: 'Minenu provides an accessible, decentralized Web3 ecosystem where everyone—users, gamers, and developers—can benefit from blockchain technology without limitations.'
    },
    {
        id: 8,
        typeIntro: 'Minenu Overview',
        heading: 'Products',
        title: 'Products',
        content: 'Minenu is a next-generation Web3 ecosystem designed to make digital assets easy to use, send, earn, and build with. Powered by Minenu Token (Minenu), the platform is more than just a cryptocurrency—it’s an open network for users, gamers, and developers to interact with blockchain in a seamless way.',
        productContent1: 'At its core, Minenu will build some product cut accross:',
        productItems: [
            {
                productTitle: 'Minenu Circle',
                productDescription: 'A community-driven news sharing platform powered by the Minenu Token, designed to enable users to contribute, share, and engage with the latest news and updates within the ecosystem. This platform fosters an open, decentralized environment where individuals can actively participate in content creation and curation, all while leveraging the power of the Minenu Token for enhanced engagement, rewards, and governance. By utilizing blockchain technology, it ensures transparency, security, and trust in the sharing and dissemination of information.'
            },
            {
                productTitle: 'Minenu Academy',
                productDescription: 'A “Learn to Earn” platform designed to provide users with the opportunity to acquire valuable cryptocurrency knowledge directly from professional traders. This platform combines education with incentives, allowing users to engage in structured learning experiences while earning rewards for their progress. By offering expert insights, practical strategies, and real-world trading tips, it empowers users to enhance their skills and understanding of the crypto market, all within a dynamic, rewarding, and interactive environment.'
            },
            {
                productTitle: 'Minenu Blockchain',
                productDescription: 'Minenu Blockchain is a high-performance, scalable, and decentralized Layer-1 blockchain platform designed to revolutionize digital ecosystems. It focuses on enhancing security, transparency, and efficiency, empowering users and developers alike.'
            },
            {
                productTitle: 'Crypto Swap',
                productDescription: 'A sophisticated feature integrated within the Minenu Wallet infrastructure, meticulously designed to facilitate the seamless and efficient exchange of cryptocurrencies. This functionality empowers users with the ability to swiftly and securely swap digital assets, enhancing their overall experience while maintaining the highest standards of security and ease of use.'
            },
            {
                productTitle: 'Crypto Onramp',
                productDescription: 'A key component of the Minenu Pay infrastructure, specifically developed to provide a seamless and efficient cryptocurrency onramp service. This feature is designed to enable users to easily convert traditional fiat currencies into digital assets, ensuring a smooth and secure entry into the world of cryptocurrency. By leveraging advanced technology, it simplifies the onboarding process, offering users a convenient, user-friendly, and reliable gateway to the crypto ecosystem.'
            },
            {
                productTitle: 'Crypto Offramp',
                productDescription: 'A vital component of the Minenu Pay infrastructure, expertly developed to offer a seamless and efficient cryptocurrency offramp service. This feature enables users to effortlessly convert their digital assets into traditional fiat currencies, ensuring a smooth and secure transition out of the cryptocurrency ecosystem. With a focus on security, convenience, and reliability, it provides users with an intuitive and trustworthy solution for managing their crypto-to-fiat transactions.'
            },
            {
                productTitle: 'Mini Apps & Developer Innovation',
                productDescription: 'Developers can build applications within the Minenu ecosystem, fully powered by Minenu.'
            }
        ],
        closingContent: 'With Minenu, Web3 becomes simple, accessible, and rewarding for everyone. Whether you want to transact, build, or play, Minenu is the key to unlocking the full potential of digital assets.'
    },
    {
        id: 9,
        typeIntro: 'Minenu Overview',
        heading: 'Tokenomics',
        title: 'Tokenomics',
        content: 'Minenu total token supply is fixed at 800,000,000 Minenu',
        tokenDistribution: [
            {
                participant: 'Community (Mining, Airdrop, Staking etc)',
                percentage: '87.5%',
                amount: '700,000,000'
            },
            {
                participant: 'Contributors',
                percentage: '2%',
                amount: '16,000,000'
            },
            {
                participant: 'CEX Listing and Marketing',
                percentage: '10.5%',
                amount: '84,000,000'
            }
        ],
        distributionScheduleTitle: '350,000,000 Minenu token will be distributed in the next 5 years in this schedule:',
        distributionSchedule: [
            { month: 'April 2025', allocation: '11,475,409', cumulativeTotal: '11,475,409' },
            { month: 'May 2025', allocation: '11,284,153', cumulativeTotal: '22,759,562' },
            { month: 'June 2025', allocation: '11,092,896', cumulativeTotal: '33,852,458' },
            { month: 'July 2025', allocation: '10,901,639', cumulativeTotal: '44,754,097' },
            { month: 'August 2025', allocation: '10,710,382', cumulativeTotal: '55,464,479' },
            { month: 'September 2025', allocation: '10,519,126', cumulativeTotal: '65,983,605' },
            { month: 'October 2025', allocation: '10,327,869', cumulativeTotal: '76,311,474' },
            { month: 'November 2025', allocation: '10,136,613', cumulativeTotal: '86,448,087' },
            { month: 'December 2025', allocation: '9,945,357', cumulativeTotal: '96,393,444' },
            { month: 'January 2026', allocation: '9,754,101', cumulativeTotal: '106,147,545' },
            { month: 'February 2026', allocation: '9,562,844', cumulativeTotal: '115,710,389' },
            { month: 'March 2026', allocation: '9,371,588', cumulativeTotal: '125,081,977' },
            { month: 'April 2026', allocation: '9,180,332', cumulativeTotal: '134,262,309' },
            { month: 'May 2026', allocation: '8,989,076', cumulativeTotal: '143,251,385' },
            { month: 'June 2026', allocation: '8,797,820', cumulativeTotal: '152,049,205' },
            { month: 'July 2026', allocation: '8,606,563', cumulativeTotal: '160,655,768' },
            { month: 'August 2026', allocation: '8,415,307', cumulativeTotal: '169,071,075' },
            { month: 'September 2026', allocation: '8,224,051', cumulativeTotal: '177,295,126' },
            { month: 'October 2026', allocation: '8,032,795', cumulativeTotal: '185,327,921' },
            { month: 'November 2026', allocation: '7,841,539', cumulativeTotal: '193,169,460' },
            { month: 'December 2026', allocation: '7,650,282', cumulativeTotal: '200,819,742' },
            { month: 'January 2027', allocation: '7,459,026', cumulativeTotal: '208,278,768' },
            { month: 'February 2027', allocation: '7,267,770', cumulativeTotal: '215,556,538' },
            { month: 'March 2027', allocation: '7,076,514', cumulativeTotal: '222,643,052' },
            { month: 'April 2027', allocation: '6,885,258', cumulativeTotal: '229,538,310' },
            { month: 'May 2027', allocation: '6,694,002', cumulativeTotal: '236,242,312' },
            { month: 'June 2027', allocation: '6,502,746', cumulativeTotal: '242,755,058' },
            { month: 'July 2027', allocation: '6,311,490', cumulativeTotal: '249,076,548' },
            { month: 'August 2027', allocation: '6,120,234', cumulativeTotal: '255,206,782' },
            { month: 'September 2027', allocation: '5,928,978', cumulativeTotal: '261,145,760' },
            { month: 'October 2027', allocation: '5,737,722', cumulativeTotal: '266,893,482' },
            { month: 'November 2027', allocation: '5,546,466', cumulativeTotal: '272,450,948' },
            { month: 'December 2027', allocation: '5,355,210', cumulativeTotal: '277,818,158' },
            { month: 'January 2028', allocation: '5,163,954', cumulativeTotal: '283,095,112' },
            { month: 'February 2028', allocation: '4,972,698', cumulativeTotal: '288,182,810' },
            { month: 'March 2028', allocation: '4,781,442', cumulativeTotal: '293,080,252' },
            { month: 'April 2028', allocation: '4,590,186', cumulativeTotal: '297,788,438' },
            { month: 'May 2028', allocation: '4,398,930', cumulativeTotal: '302,306,368' },
            { month: 'June 2028', allocation: '4,207,674', cumulativeTotal: '306,634,042' },
            { month: 'July 2028', allocation: '4,016,418', cumulativeTotal: '310,771,460' },
            { month: 'August 2028', allocation: '3,825,162', cumulativeTotal: '314,718,622' },
            { month: 'September 2028', allocation: '3,633,906', cumulativeTotal: '318,475,528' },
            { month: 'October 2028', allocation: '3,442,650', cumulativeTotal: '322,042,178' },
            { month: 'November 2028', allocation: '3,251,394', cumulativeTotal: '325,418,572' },
            { month: 'December 2028', allocation: '3,060,138', cumulativeTotal: '328,604,710' },
            { month: 'January 2029', allocation: '2,868,882', cumulativeTotal: '331,600,592' },
            { month: 'February 2029', allocation: '2,677,626', cumulativeTotal: '334,406,218' },
            { month: 'March 2029', allocation: '2,486,370', cumulativeTotal: '337,021,588' },
            { month: 'April 2029', allocation: '2,295,114', cumulativeTotal: '339,446,702' },
            { month: 'May 2029', allocation: '2,103,858', cumulativeTotal: '341,681,560' },
            { month: 'June 2029', allocation: '1,912,602', cumulativeTotal: '343,726,162' },
            { month: 'July 2029', allocation: '1,721,346', cumulativeTotal: '345,580,508' },
            { month: 'August 2029', allocation: '1,530,090', cumulativeTotal: '347,244,598' },
            { month: 'September 2029', allocation: '1,338,834', cumulativeTotal: '348,718,432' },
            { month: 'October 2029', allocation: '1,147,578', cumulativeTotal: '350,002,010' }
        ]
    },
    {
        id: 10,
        typeIntro: 'Minenu Overview',
        heading: 'Legal Disclaimer',
        title: 'Legal Disclaimer',
        legalDisclaimer1: 'This whitepaper is intended solely to provide information to the community. It does not constitute an offer to sell or a solicitation to purchase any tokens. Nothing in this whitepaper should be interpreted as a guarantee or assurance regarding the development of the Minenu business or the tokens, nor should it be considered as a promise concerning the tokens’ utility or value.',
        legalDisclaimer2: 'The content of this whitepaper outlines current plans, which are subject to change. The success of these plans will depend on numerous factors beyond Minenu’s control, including market dynamics and conditions within the gaming and cryptocurrency industries, among others.'
    }
]

const WhitePaperHero = () => {
    const [active, setActive] = useState(0)
    const [onTop, setOnTop] = useState(false)
    const heroContainerRef = useRef(null);
    const [activeSideNav, setActiveSideNav] = useState(false)

    const [collectedData, setCollectedData] = useState(whitePaperData)
    const [collectIndex, setCollectIndex] = useState(0)

    useEffect(() => {
        if(collectIndex) {
            setActive(collectIndex - 1)
            console.log(`index added at index ${active}`)
        } else {
            setActive(active)
        }
    }, [collectIndex])
    

    const next = whitePaperData[active + 1];
    const prev = whitePaperData[active - 1];

    useEffect(() => {
        const els = heroContainerRef.current.querySelectorAll('.top')
        console.log(els)

        if(els.length === 0) return

        els.forEach((el) => {
            ScrollTrigger.create({
                trigger: el,
                start: 'top top', 
                onEnter: () => setOnTop(true),
                onLeave: () => {setOnTop(false)}
            })
        })
        return () => {
            ScrollTrigger.killAll();
        }
    }, [])
    return (
        <>
            <WhitePaperNav indexConnectedData={whitePaperData[active]} sideNavProp={activeSideNav} setSideNavProp={setActiveSideNav} setCollectedData={setCollectedData} collectedData={collectedData} setCollectIndex={setCollectIndex} collectIndex={collectIndex} />
            <div data-lenis-prevent ref={heroContainerRef} className='flex space-x-5 h-screen w-full md:ps-8 p-2 pt-38'>
                <div className={`md:hidden block fixed z-[102] left-0 top-0 h-screen w-full ${activeSideNav ? 'backdrop-blur-sm flex justify-end p-3' : 'backdrop-blur-none hidden'}`}>
                    <X className='text-white cursor-pointer' strokeWidth={1} onClick={() => setActiveSideNav(false)} />
                </div>
                <div className={`flex flex-col space-y-2 md:w-[15rem] w-[20rem] h-full fixed md:top-36 top-0 z-[103] md:left-6 left-0 transition-translate duration-200 md:bg-transparent bg-[#0e0e10] px-2 ${activeSideNav ? '-translate-x-0' : 'md:-translate-x-0 -translate-x-80'}`}>
                    <p className="font-semibold text-[#dddddd] p-2">Introduction</p>
                    <div className="flex flex-col">
                        <div className="flex flex-col">
                            {whitePaperData.map((whitePaper, index) => (
                                <div key={whitePaper.id}>
                                    {whitePaper.typeIntro === 'introduction' && (
                                        <div key={whitePaper.id} onClick={() => {setActive(index); setActiveSideNav(false)}} className={`rounded-xl text-sm text-[#929292] p-2 hover:bg-[#272728] hover:text-[#d9d9d9] cursor-pointer ${active === index ? 'bg-[#272728] text-white' : ''}`}>
                                            <p>{whitePaper.heading}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                            <p className="font-semibold text-[#dddddd] p-2 mt-5">Minenu Overview</p>
                            {whitePaperData.map((whitePaper, index) => (
                                <React.Fragment key={whitePaper.id}>
                                    {whitePaper.typeIntro === 'Minenu Overview' && (
                                        <div key={whitePaper.id} onClick={() => {setActive(index); setActiveSideNav(false)}} className={`rounded-xl text-sm text-[#929292] p-2 hover:bg-[#272728] hover:text-[#d9d9d9] cursor-pointer ${active === index ? 'bg-[#272728] text-white' : ''}`}>
                                            <p>{whitePaper.heading}</p>
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="hidden flex-col space-y-2 md:w-[15rem] h-full fixed right-0 md:flex">
                    {whitePaperData.map((whitePaper, index) => (
                        <div key={whitePaper.id}>
                            {whitePaper.title === 'Vision & Mission' && active === index && (
                                <div className={`flex-col flex gap-2`}>
                                    <p className='text-[#8a8a8a] flex  items-center gap-2'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg" className="h-3 w-3"><path d="M2.44434 12.6665H13.5554" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2.44434 3.3335H13.5554" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2.44434 8H7.33323" strokeLinecap="round" strokeLinejoin="round"></path></svg> On this page</p>
                                    <p className={`${onTop ? 'white' : 'text-[#8a8a8a]'}`}>{whitePaper.visionsubtitle1}</p>
                                    <p className='text-[#8a8a8a]'>{whitePaper.visionsubtitle2}</p>
                                </div>
                            )}
                            {whitePaper.title === 'Core Focus Areas' && active === index && (
                                <div className={`flex-col gap-2 flex`}>
                                    <p className='text-[#8a8a8a] flex  items-center gap-2'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg" className="h-3 w-3"><path d="M2.44434 12.6665H13.5554" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2.44434 3.3335H13.5554" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2.44434 8H7.33323" strokeLinecap="round" strokeLinejoin="round"></path></svg> On this page</p>
                                    <p className='text-[#8a8a8a]'>{whitePaper.corenumberedTitle1}</p>
                                    <p className='text-[#8a8a8a]'>{whitePaper.corenumberedTitle2}</p>
                                    <p className='text-[#8a8a8a]'>{whitePaper.corenumberedTitle3}</p>
                                </div>
                            )}
                            {whitePaper.title === 'Why Blockchain?' && active === index && (
                                <div className={`flex-col flex gap-2`}>
                                    <p className='text-[#8a8a8a] flex  items-center gap-2'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg" className="h-3 w-3"><path d="M2.44434 12.6665H13.5554" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2.44434 3.3335H13.5554" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2.44434 8H7.33323" strokeLinecap="round" strokeLinejoin="round"></path></svg> On this page</p>
                                    <p className='text-[#8a8a8a]'>{whitePaper.chaintitle2}</p>
                                    <p className='text-[#8a8a8a]'>{whitePaper.chaintitle3}</p>
                                    <p className='text-[#8a8a8a]'>{whitePaper.chaintitle4}</p>
                                </div>
                            )}
                            {whitePaper.title === 'Limitations of Traditional Finance' && active === index && (
                                <div className={`flex-col flex gap-2`}>
                                    <p className='text-[#8a8a8a] flex  items-center gap-2'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg" className="h-3 w-3"><path d="M2.44434 12.6665H13.5554" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2.44434 3.3335H13.5554" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2.44434 8H7.33323" strokeLinecap="round" strokeLinejoin="round"></path></svg> On this page</p>
                                    <p className='text-[#8a8a8a]'>{whitePaper.limitationsubtitle}</p>
                                    <p className='text-[#8a8a8a]'>{whitePaper.limitationsubtitle1}</p>
                                    <p className='text-[#8a8a8a]'>{whitePaper.limitationsubtitle2}</p>
                                    <p className='text-[#8a8a8a]'>{whitePaper.limitationsubtitle3}</p>
                                </div>
                            )}
                            {whitePaper.title === 'Current Ecosystem Challenges' && active === index && (
                                <div className={`flex-col flex gap-2`}>
                                    <p className='text-[#8a8a8a] flex  items-center gap-2'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg" className="h-3 w-3"><path d="M2.44434 12.6665H13.5554" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2.44434 3.3335H13.5554" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2.44434 8H7.33323" strokeLinecap="round" strokeLinejoin="round"></path></svg> On this page</p>
                                    <p className='text-[#8a8a8a]'>{whitePaper.currentsubtitle}</p>
                                    <p className='text-[#8a8a8a]'>{whitePaper.currentsubtitle1}</p>
                                    <p className='text-[#8a8a8a]'>{whitePaper.currentsubtitle3}</p>
                                    <p className='text-[#8a8a8a]'>{whitePaper.currentsubtitle5}</p>
                                    <p className='text-[#8a8a8a]'>{whitePaper.currenttabletitle}</p>
                                </div>
                            )}
                            {whitePaper.title === 'Need for a Decentralized Solution' && active === index && (
                                <div className={`flex-col flex gap-2`}>
                                    <p className='text-[#8a8a8a] flex  items-center gap-2'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg" className="h-3 w-3"><path d="M2.44434 12.6665H13.5554" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2.44434 3.3335H13.5554" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2.44434 8H7.33323" strokeLinecap="round" strokeLinejoin="round"></path></svg> On this page</p>
                                    <p className='text-[#8a8a8a]'>{whitePaper.decentralizedsubtitle}</p>
                                    <p className='text-[#8a8a8a]'>{whitePaper.decentralizedsubtitle1}</p>
                                    <p className='text-[#8a8a8a]'>{whitePaper.decentralizedsubtitle2}</p>
                                    <p className='text-[#8a8a8a]'>{whitePaper.decentralizedsubtitle3}</p>
                                    <p className='text-[#8a8a8a]'>{whitePaper.decentralizedsubtitle4}</p>
                                </div>
                            )}
                            {whitePaper.title === 'Tokenomics' && active === index && (
                                <div className={`flex-col flex gap-2`}>
                                    <p className='text-[#8a8a8a] flex  items-center gap-2'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg" className="h-3 w-3"><path d="M2.44434 12.6665H13.5554" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2.44434 3.3335H13.5554" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2.44434 8H7.33323" strokeLinecap="round" strokeLinejoin="round"></path></svg> On this page</p>
                                    <p className='text-[#8a8a8a]'>{whitePaper.tokenomicsContent}</p>
                                </div>
                            )}
                        </div>
                    )
                    )}
                </div>
                <div className="md:w-[50%] h-[70rem] mx-auto">
                    {whitePaperData.map((whitePaper, index) => (
                        <div key={whitePaper.id}>
                            {whitePaper.title === 'What is Minenu?' && active === index && (
                                <div key={whitePaper.id} className={`flex-col space-y-8`}>
                                    <div className="flex flex-col space-y-2">
                                        <p className="font-semibold text-white">{whitePaper.typeIntro}</p>
                                        <h6 className='text-3xl font-bold text-[#dddddd]'>{whitePaper.title}</h6>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.content}</p>
                                    </div>
                                    <p className='text-[#8a8a8a] text-lg'>{whitePaper.Minenucontent2}</p>
                                    <p className='text-[#8a8a8a] text-lg'>{whitePaper.Minenucontent3}</p>
                                    <ul className='flex flex-col space-y-3'>
                                        {whitePaper.Minenucontent3Item && whitePaper.Minenucontent3Item.map((content, index) => (
                                            <p key={index} className='text-[#8a8a8a] text-lg'>{content}</p>
                                        ))}
                                    </ul>
                                    <p className='text-[#8a8a8a] text-lg'>{whitePaper.Minenucontent4}</p>
                                </div>
                            )}
                            {whitePaper.title === 'Vision & Mission' && active === index && (
                                <div className={`flex-col space-y-8`}>
                                    <div className="flex flex-col space-y-2">
                                        <p className="font-semibold text-white">{whitePaper.typeIntro}</p>
                                        <h6 className='text-3xl font-bold text-[#dddddd]'>{whitePaper.title}</h6>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.content}</p>
                                    </div>
                                    <div className="flex flex-col space-y-2 top">
                                        <p className='text-white font-semibold text-2xl'>{whitePaper.visionsubtitle1}</p>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.visioncontent2}</p>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.visioncontent3}</p>
                                        <ul className='flex flex-col space-y-3'>
                                            {whitePaper.visioncontent3Item && whitePaper.visioncontent3Item.map((content, index) => (
                                                <p key={index} className='text-[#8a8a8a] text-lg'>{content}</p>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="flex flex-col space-y-2 top">
                                        <p className='text-white text-2xl font-semibold'>{whitePaper.visionsubtitle2}</p>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.visioncontent4}</p>
                                        <ul className='flex flex-col space-y-3'>
                                            {whitePaper.visioncontent4Items && whitePaper.visioncontent4Items.map((content, index) => (
                                                <p key={index} className='text-[#8a8a8a] text-lg'>{content}</p>
                                            ))}
                                        </ul>
                                    </div>
                                    <p className='text-[#8a8a8a] text-lg'>{whitePaper.visioncontent6}</p>
                                </div>
                            )}
                            {whitePaper.title === 'Core Focus Areas' && active === index && (
                                <div className={`flex-col space-y-8`}>
                                    <div className="flex flex-col space-y-2">
                                        <p className="font-semibold text-white">{whitePaper.typeIntro}</p>
                                        <h6 className='text-3xl font-bold text-[#dddddd]'>{whitePaper.title}</h6>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.content}</p>
                                    </div>
                                    <p className='text-[#8a8a8a] text-lg'>{whitePaper.corecontent2}</p>
                                    <p className='text-[#8a8a8a] text-lg'>{whitePaper.corecontent3}</p>
                                    <p className='text-[#8a8a8a] text-lg'>{whitePaper.corecontent5}</p>
                                    <div className="flex flex-col space-y-2 top">
                                        <p className='text-white text-2xl font-semibold'>{whitePaper.corenumberedTitle1}</p>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.corenumberedContent1}</p>
                                        <ul className='flex flex-col space-y-3'>
                                            {whitePaper.corenumberedContent1Array1 && whitePaper.corenumberedContent1Array1.map((content, index) => (
                                                <p key={index} className='text-[#8a8a8a] text-lg'>{content}</p>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="flex flex-col space-y-2 top">
                                        <p className='text-white text-2xl font-semibold'>{whitePaper.corenumberedTitle2}</p>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.corenumberedContent2}</p>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.coreminiDefinitionQuestion}</p>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.coreminiDefinitionAnswer}</p>
                                        <ul className='flex flex-col space-y-3'>
                                            {whitePaper.corenumberedContent1Array2 && whitePaper.corenumberedContent1Array2.map((content, index) => (
                                                <p key={index} className='text-[#8a8a8a] text-lg'>{content}</p>
                                            ))}
                                        </ul>
                                    </div>
                                    <p className='text-[#8a8a8a] text-lg'>{whitePaper.corebottomContent}</p>
                                    <div className="flex flex-col space-y-2 top">
                                        <p className='text-white text-2xl font-semibold'>{whitePaper.corenumberedTitle3}</p>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.corenumberedContent3}</p>
                                        <ul className='flex flex-col space-y-3'>
                                            {whitePaper.corenumberedContent1Array3 && whitePaper.corenumberedContent1Array3.map((content, index) => (
                                                <p key={index} className='text-[#8a8a8a] text-lg'>{content}</p>
                                            ))}
                                        </ul>
                                    </div>
                                    <p className='text-[#8a8a8a] text-lg'>{whitePaper.corebottomContent1}</p>
                                    <p className='text-[#8a8a8a] text-lg'>{whitePaper.corebottomContent2}</p>
                                </div>
                            )}
                            {whitePaper.title === 'Why Blockchain?' && active === index && (
                                <div className={`flex-col space-y-8`}>
                                    <div className="flex flex-col space-y-2">
                                        <p className="font-semibold text-white">{whitePaper.typeIntro}</p>
                                        <h6 className='text-3xl font-bold text-[#dddddd]'>{whitePaper.title}</h6>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.content}</p>
                                    </div>
                                    <p className='text-[#8a8a8a] text-lg'>{whitePaper.chaincontent1}</p>
                                    <div className="flex flex-col space-y-2 top">
                                        <p className='text-white text-2xl font-semibold'>{whitePaper.chaintitle2}</p>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.chaincontent2}</p>
                                        <ul className='flex flex-col space-y-3 list-disc'>
                                            {whitePaper.chaincontent2Items && whitePaper.chaincontent2Items.map((content, index) => (
                                                <li key={index} className='text-[#8a8a8a] text-lg'>{content}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="flex flex-col space-y-2 top">
                                        <p className='text-white text-2xl font-semibold'>{whitePaper.chaintitle3}</p>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.chaincontent4}</p>
                                        <ul className='flex flex-col space-y-3 list-disc'>
                                            {whitePaper.chaincontent4items && whitePaper.chaincontent4items.map((content, index) => (
                                                <li key={index} className='text-[#8a8a8a] text-lg'>{content}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <p className='text-[#8a8a8a] text-lg'>{whitePaper.chaincontent5}</p>
                                    <div className="flex flex-col space-y-2 top">
                                        <p className='text-white text-2xl font-semibold'>{whitePaper.chaintitle4}</p>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.chaincontent6}</p>
                                        <ul className='flex flex-col space-y-3 list-disc'>
                                            {whitePaper.chaincontent6items && whitePaper.chaincontent6items.map((content, index) => (
                                                <li key={index} className='text-[#8a8a8a] text-lg'>{content}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <p className='text-[#8a8a8a] text-lg'>{whitePaper.chaincontent7}</p>
                                </div>
                            )}
                            {whitePaper.title === 'Limitations of Traditional Finance' && active === index && (
                                <div className={`flex-col space-y-8`}>
                                    <div className="flex flex-col space-y-2">
                                        <p className="font-semibold text-white">{whitePaper.typeIntro}</p>
                                        <h6 className='text-3xl font-bold text-[#dddddd]'>{whitePaper.title}</h6>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.content}</p>
                                    </div>
                                    <p className='text-[#8a8a8a] text-lg'>{whitePaper.limitationcontent1}</p>
                                    <div className="flex flex-col space-y-2">
                                        <p className='text-white text-2xl font-semibold'>{whitePaper.limitationsubtitle}</p>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.limitationcontent2}</p>
                                        <ul className='flex flex-col space-y-3 list-disc'>
                                            {whitePaper.limitationcontent2Items && whitePaper.limitationcontent2Items.map((content, index) => (
                                                <li key={index} className='text-[#8a8a8a] text-lg'>{content}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <p className='text-[#8a8a8a] text-lg'>{whitePaper.limitationcontent3}</p>
                                    <p className='text-[#8a8a8a] text-lg'>{whitePaper.limitationcontent4}</p>
                                    <div className="flex flex-col space-y-2">
                                        <p className='text-white text-2xl font-semibold'>{whitePaper.limitationsubtitle1}</p>
                                        <ul className='flex flex-col space-y-3 list-disc'>
                                            {whitePaper.limitationcontent4items && whitePaper.limitationcontent4items.map((content, index) => (
                                                <li key={index} className='text-[#8a8a8a] text-lg'>{content}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <p className='text-[#8a8a8a] text-lg'>{whitePaper.limitationcontent5}</p>
                                    <div className="flex flex-col space-y-2">
                                        <p className='text-white text-2xl font-semibold'>{whitePaper.limitationsubtitle2}</p>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.limitationcontent6}</p>
                                        <ul className='flex flex-col space-y-3 list-disc'>
                                            {whitePaper.limitationcontent6items && whitePaper.limitationcontent6items.map((content, index) => (
                                                <li key={index} className='text-[#8a8a8a] text-lg'>{content}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <p className='text-[#8a8a8a] text-lg'>{whitePaper.limitationcontent7}</p>
                                    <div className="flex flex-col space-y-2">
                                        <p className='text-white text-2xl font-semibold'>{whitePaper.limitationsubtitle3}</p>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.limitationcontent8}</p>
                                        <ul className='flex flex-col space-y-3 list-disc'>
                                            {whitePaper.limitationcontent8Items && whitePaper.limitationcontent8Items.map((content, index) => (
                                                <li key={index} className='text-[#8a8a8a] text-lg'>{content}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <p className='text-[#8a8a8a] text-lg'>{whitePaper.limitationcontent9}</p>
                                    <p className='text-[#8a8a8a] text-lg'>{whitePaper.limitationcontent10}</p>
                                </div>
                            )}
                            {whitePaper.title === 'Current Ecosystem Challenges' && active === index && (
                                <div className={`flex-col space-y-8`}>
                                    <div className="flex flex-col space-y-2">
                                        <p className="font-semibold text-white">{whitePaper.typeIntro}</p>
                                        <h6 className='text-3xl font-bold text-[#dddddd]'>{whitePaper.title}</h6>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.content}</p>
                                    </div>
                                    <div className="border-b border-[#f9fafb16] flex flex-col space-y-2 py-5">
                                        <p className='text-white text-2xl font-semibold'>{whitePaper.currentsubtitle}</p>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.currentcontent1}</p>
                                    </div>
                                    <div className="border-b border-[#f9fafb16] flex flex-col space-y-2 py-5">
                                        <p className='text-white text-2xl font-semibold'>{whitePaper.currentsubtitle1}</p>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.currentcontent2}</p>
                                        <ul className='flex flex-col space-y-3'>
                                            {whitePaper.currentcontent2items && whitePaper.currentcontent2items.map((content, index) => (
                                                <li key={index} className='text-[#8a8a8a] text-lg'>{content}</li>
                                            ))}
                                        </ul>
                                        <p className='text-white text-2xl font-semibold'>{whitePaper.currentsubtitle2}</p>
                                        <ul className='flex flex-col space-y-3'>
                                            {whitePaper.currentsubtitle2items && whitePaper.currentsubtitle2items.map((content, index) => (
                                                <li key={index} className='text-[#8a8a8a] text-lg'>{content}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="border-b border-[#f9fafb16] flex flex-col space-y-2 ">
                                        <p className='text-white text-2xl font-semibold'>{whitePaper.currentsubtitle3}</p>
                                        <ul className='flex flex-col space-y-3'>
                                            {whitePaper.currentsubtitle3items && whitePaper.currentsubtitle3items.map((content, index) => (
                                                <li key={index} className='text-[#8a8a8a] text-lg'>{content}</li>
                                            ))}
                                        </ul>
                                        <p className='text-white text-2xl font-semibold'>{whitePaper.currentsubtitle4}</p>
                                        <ul className='flex flex-col space-y-3'>
                                            {whitePaper.currentsubtitle4items && whitePaper.currentsubtitle4items.map((content, index) => (
                                                <li key={index} className='text-[#8a8a8a] text-lg'>{content}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="border-b border-[#f9fafb16] flex flex-col space-y-2">
                                        <p className='text-white font-semibold text-2xl'>{whitePaper.currentsubtitle5}</p>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.currentcontent3}</p>
                                        <ul className='flex flex-col space-y-3'>
                                            {whitePaper.currentcontent3item && whitePaper.currentcontent3item.map((content, index) => (
                                                <li key={index} className='text-[#8a8a8a] text-lg'>{content}</li>
                                            ))}
                                        </ul>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.currentsubtitle6}</p>
                                        <ul className='flex flex-col space-y-3'>
                                            {whitePaper.currentsubtitle6items && whitePaper.currentsubtitle6items.map((content, index) => (
                                                <li key={index} className='text-[#8a8a8a] text-lg'>{content}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className='flex flex-col space-y-2'>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.currentcontent3}</p>
                                        <ul className='flex flex-col space-y-3'>
                                            {whitePaper.currentcontent3item && whitePaper.currentcontent3item.map((content, index) => (
                                                <li key={index} className='text-[#8a8a8a] text-lg'>{content}</li>
                                            ))}
                                        </ul>
                                        <p className='text-white text-2xl font-semibold'>{whitePaper.currentsubtitle6}</p>
                                        <ul className='flex flex-col space-y-3'>
                                            {whitePaper.currentsubtitle6items && whitePaper.currentsubtitle6items.map((content, index) => (
                                                <li key={index} className='text-[#8a8a8a] text-lg'>{content}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <table className='my-3'>
                                            <thead>
                                                {whitePaper.currenttable && whitePaper.currenttable.map((table, index) => (
                                                    <tr key={index} className='border-b border-[#f9fafb16]'>
                                                        <td className='text-white text-md'>{table.dataname}</td>
                                                        {table.datacontent && table.datacontent.map((content, index) => (<td className='text-[#8a8a8a] text-md' key={index}>{content}</td>))}
                                                    </tr>
                                                ))}
                                            </thead>
                                        </table>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.currentbottomcontent}</p>
                                    </div>
                                </div>
                            )}
                            {whitePaper.title === 'Need for a Decentralized Solution' && active === index && (
                                <div className={`flex-col space-y-8`}>
                                    <div className="flex flex-col space-y-2">
                                        <p className="font-semibold text-white">{whitePaper.typeIntro}</p>
                                        <h6 className='text-3xl font-bold text-[#dddddd]'>{whitePaper.title}</h6>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.content}</p>
                                    </div>
                                    <div className="border-b border-[#f9fafb16] flex flex-col space-y-2">
                                        <p className='text-white font-semibold text-2xl'>{whitePaper.decentralizedsubtitle}</p>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.decentralizedcontent1}</p>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.decentralizedcontent2}</p>
                                    </div>
                                    <div className="border-b border-[#f9fafb16] flex flex-col space-y-2">
                                        <p className='text-white font-semibold text-2xl'>{whitePaper.decentralizedsubtitle1}</p>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.decentralizedcontent3}</p>
                                        <ul className='flex flex-col space-y-3'>
                                            {whitePaper.decentralizedcontent3Items && whitePaper.decentralizedcontent3Items.map((content, index) => (
                                                <li key={index} className='text-[#8a8a8a] text-lg'>{content}</li>
                                            ))}
                                        </ul>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.decentralizedcontent4}</p>
                                        <ul className='flex flex-col space-y-3'>
                                            {whitePaper.decentralizedcontent4Items && whitePaper.decentralizedcontent4Items.map((content, index) => (
                                                <li key={index} className='text-[#8a8a8a] text-lg'>{content}</li>
                                            ))}
                                        </ul>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.decentralizedcontent5}</p>
                                    </div>
                                    <div className="border-b border-[#f9fafb16]">
                                        <p className='text-white text-2xl font-semibold'>{whitePaper.decentralizedsubtitle2}</p>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.decentralizedcontent6}</p>
                                        <ul className='flex flex-col space-y-3'>
                                            {whitePaper.decentralizedcontent6Items && whitePaper.decentralizedcontent6Items.map((content, index) => (
                                                <li key={index} className='text-[#8a8a8a] text-lg'>{content}</li>
                                            ))}
                                        </ul>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.decentralizedcontent7}</p>
                                        <ul className='flex flex-col space-y-3'>
                                            {whitePaper.decentralizedcontent7Items && whitePaper.decentralizedcontent7Items.map((content, index) => (
                                                <li key={index} className='text-[#8a8a8a] text-lg'>{content}</li>
                                            ))}
                                        </ul>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.decentralizedcontent8}</p>
                                    </div>
                                    <div className="border-b border-[#f9fafb16]">
                                        <p className='text-white text-2xl font-semibold'>{whitePaper.decentralizedsubtitle3}</p>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.decentralizedcontent9}</p>
                                        <ul className='flex flex-col space-y-3'>
                                            {whitePaper.decentralizedcontent9Items && whitePaper.decentralizedcontent9Items.map((content, index) => (
                                                <li key={index} className='text-[#8a8a8a] text-lg'>{content}</li>
                                            ))}
                                        </ul>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.decentralizedcontent10}</p>
                                        <ul className='flex flex-col space-y-3'>
                                            {whitePaper.decentralizedcontent10Items && whitePaper.decentralizedcontent10Items.map((content, index) => (
                                                <li key={index} className='text-[#8a8a8a] text-lg'>{content}</li>
                                            ))}
                                        </ul>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.decentralizedcontent11}</p>
                                    </div>
                                    <div className="border-b border-[#f9fafb16]">
                                        <p className='text-white text-2xl font-semibold'>{whitePaper.decentralizedsubtitle4}</p>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.decentralizedcontent12}</p>
                                        <ul className='flex flex-col space-y-3'>
                                            {whitePaper.decentralizedcontent12Items && whitePaper.decentralizedcontent12Items.map((content, index) => (
                                                <li key={index} className='text-[#8a8a8a] text-lg'>{content}</li>
                                            ))}
                                        </ul>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.decentralizedcontent13}</p>
                                    </div>
                                </div>
                            )}
                            {whitePaper.title === 'Products' && active === index && (
                                <div className={`flex-col space-y-8`}>
                                    <div className="flex flex-col space-y-2">
                                        <p className="font-semibold text-white">{whitePaper.typeIntro}</p>
                                        <h6 className='text-2xl font-bold text-[#dddddd]'>{whitePaper.title}</h6>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.content}</p>
                                    </div>
                                    <p className='text-[#8a8a8a] text-lg'>{whitePaper.productContent1}</p>
                                    {whitePaper.productItems && whitePaper.productItems.map((product, index) => (
                                        <p key={index} className='text-[#8a8a8a] text-lg'><span className='text-white'>✅ {product.productTitle}</span> — {product.productDescription}</p>
                                    ))}
                                </div>
                            )}
                            {whitePaper.title === 'Tokenomics' && active === index && (
                                <div className={`flex-col space-y-8`}>
                                    <div className="flex flex-col space-y-2">
                                        <p className="font-semibold text-white">{whitePaper.typeIntro}</p>
                                        <h6 className='text-2xl font-bold text-[#dddddd]'>{whitePaper.title}</h6>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.content}</p>
                                    </div>
                                    <table>
                                        <thead>
                                            <tr>
                                                <td className='text-white text-center border-b border-[#f9fafb16]'>Percent %</td>
                                                <td className='text-white text-center border-b border-[#f9fafb16]'>Amount</td>
                                                <td className='text-white text-center border-b border-[#f9fafb16]'>Participant</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {whitePaper.tokenDistribution && whitePaper.tokenDistribution.map((distribution, index) => (
                                                <tr key={index}>
                                                    <td className='text-white font-semibold border-b border-[#f9fafb16] py-2'>{distribution.percentage}</td>
                                                    <td className='text-[#8a8a8a] px-5 border-b border-[#f9fafb16] py-2'>{distribution.amount}</td>
                                                    <td className='text-[#8a8a8a] border-b border-[#f9fafb16] py-2'>{distribution.participant}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <p className='text-white text-lg'>{whitePaper.distributionScheduleTitle}</p>
                                    <table>
                                        <thead>
                                            <tr>
                                                <td className='text-white text-center border-b border-[#f9fafb16]'>Month</td>
                                                <td className='text-white text-center border-b border-[#f9fafb16]'>Allocation</td>
                                                <td className='text-white text-center border-b border-[#f9fafb16]'>Cumulative Total Allocated</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {whitePaper.distributionSchedule && whitePaper.distributionSchedule.map((distribution, index) => (
                                                <tr key={index}>
                                                    <td className='text-white font-semibold border-b border-[#f9fafb16] py-2'>{distribution.month}</td>
                                                    <td className='text-[#8a8a8a] px-5 border-b border-[#f9fafb16] py-2'>{distribution.allocation}</td>
                                                    <td className='text-[#8a8a8a] border-b border-[#f9fafb16] py-2'>{distribution.cumulativeTotal}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                            {whitePaper.title === 'Legal Disclaimer' && active === index && (
                                <div className={`flex-col space-y-8`}>
                                    <div className="flex flex-col space-y-2">
                                        <p className="font-semibold text-white">{whitePaper.typeIntro}</p>
                                        <h6 className='text-2xl font-bold text-[#dddddd]'>{whitePaper.title}</h6>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.legalDisclaimer1}</p>
                                        <p className='text-[#8a8a8a] text-lg'>{whitePaper.legalDisclaimer2}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                    )}
                    <div className="flex justify-between pt-10 pb-15 border-b border-[#f9fafb16]">
                        {
                            prev && <p onClick={() => setActive(active - 1)} className='text-[#dddddd] hover:text-white cursor-pointer'> &larr; {prev.heading}</p>
                        }
                        {
                            next && <p onClick={() => setActive(active + 1)} className='text-[#dddddd] hover:text-white cursor-pointer'>{next.heading} &rarr;</p>
                        }
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex space-x-3 items-center my-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-x h-full w-full text-[#8a8a8a]"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-linkedin h-full w-full text-[#8a8a8a]"><path d="M8 11v5"></path><path d="M8 8v.01"></path><path d="M12 16v-5"></path><path d="M16 16v-3a2 2 0 1 0 -4 0"></path><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"></path></svg> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-github h-full w-full text-[#8a8a8a]"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-link h-full w-full text-[#8a8a8a]"><path d="M9 15l6 -6"></path><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"></path><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-facebook h-full w-full text-[#8a8a8a]"><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path></svg> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-instagram h-full w-full text-[#8a8a8a]"><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path><path d="M16.5 7.5v.01"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-youtube h-full w-full text-[#8a8a8a]"><path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z"></path><path d="M10 9l5 3l-5 3z"></path></svg>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default WhitePaperHero
