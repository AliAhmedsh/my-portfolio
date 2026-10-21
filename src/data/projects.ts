export interface ProjectMedia {
  type: 'image' | 'video'
  url: string
  caption?: string
}

export interface Project {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  category: string
  tech: string[]
  media: ProjectMedia[]
  liveUrl?: string
  githubUrl?: string
  duration?: string
  role: string
  highlights: string[]
  publishedDate?: string
  displayMode?: 'mobile' | 'web'
  websiteUrl?: string
  coverImage?: string
  appStoreUrl?: string
}

export const portfolioProjects: Project[] = [
  {
    id: 'cutz2go',
    title: 'Cutz2Go Barbers App',
    shortDescription:
      'A full-service barber marketplace for customers, barbers, shops, and platform admins — discover talent, book shop or mobile cuts, join walk-in queues, and pay in-app.',
    fullDescription:
      'Cutz2Go is a full-service barber marketplace built for customers, barbers, shops, and platform admins. The mobile app lets customers search and explore barbers or shops, compare services, view portfolios, save favorites, book shop or mobile appointments, join walk-in queues, make Stripe-powered payments, receive notifications, message barbers, review completed services, and manage booking history.\n\nFor barbers, Cutz2Go provides tools to manage profiles, service menus, pricing, schedules, availability, walk-in queues, bookings, customer messages, reviews, portfolios, earnings, payouts, and shop affiliations. The platform also includes an admin dashboard for operations teams to approve barber applications, manage users and shops, review bookings, handle refunds and disputes, configure fees and commissions, monitor analytics, moderate services, and support launch operations.\n\nThe project is implemented with a React Native mobile app, a React/Vite admin console, Firebase Authentication, Firestore, Cloud Functions, Firebase Messaging, Firebase Storage, and Stripe payments/connect payouts. Its core workflows cover marketplace discovery, appointment booking, walk-in queue management, payment verification, cancellation/refund rules, notifications, messaging, reviews, loyalty/referrals, and admin oversight.',
    category: 'Mobile App',
    tech: [
      'React Native',
      'React',
      'Vite',
      'Firebase Auth',
      'Firestore',
      'Cloud Functions',
      'FCM',
      'Firebase Storage',
      'Stripe',
      'iOS',
    ],
    displayMode: 'mobile',
    coverImage: 'cutz2go/c2g-cover.png',
    media: [
      { type: 'video', url: 'cutz2go/c2g-demo.mp4', caption: 'App Demo' },
      { type: 'image', url: 'cutz2go/c2g-cover.png', caption: 'Cutz2Go App' },
    ],
    appStoreUrl: 'https://apps.apple.com/pk/app/cutz2go-app/id6773828255',
    role: 'Full-Stack Developer',
    highlights: [
      'Marketplace discovery for barbers and shops — search, compare services, portfolios, and favorites',
      'Shop and mobile appointment booking plus live walk-in queues',
      'Stripe payments and Connect payouts for customers, barbers, and shops',
      'In-app messaging, notifications, reviews, booking history, loyalty, and referrals',
      'Barber tools for profiles, menus, pricing, schedules, queues, earnings, and shop affiliations',
      'Admin console for applications, users, shops, refunds, fees, commissions, analytics, and moderation',
      'Firebase Auth, Firestore, Cloud Functions, Messaging, and Storage powering the live platform',
    ],
  },
  {
    id: 'care2home',
    title: 'Care2Home Mobile App',
    shortDescription:
      'A healthcare companion that puts licensed doctors and pharmacy services on your phone — live chat or video, without the clinic wait.',
    fullDescription:
      'Care2Home Doctors is your ultimate healthcare companion, bringing expert medical advice and pharmacy services right to your fingertips. With just a few taps, you can connect instantly with licensed doctors via live chat or video call, eliminating long waits and unnecessary trips to the clinic.',
    category: 'Mobile App',
    tech: ['React Native', 'iOS', 'Android'],
    displayMode: 'mobile',
    coverImage: 'care2home/c2h-cover.png',
    media: [
      { type: 'video', url: 'care2home/c2h-demo.mp4', caption: 'App Demo' },
      { type: 'image', url: 'care2home/c2h-cover.png', caption: 'Care2Home App' },
    ],
    role: 'Mobile App Developer',
    highlights: [
      'Instant live chat with licensed doctors',
      'Video consultations without a clinic visit',
      'Pharmacy services alongside medical advice',
    ],
  },
  {
    id: 'akasha',
    title: 'Akasha — AI Spiritual Wellness & Reflection App',
    shortDescription:
      'A cross-platform spiritual wellness app that combines AI-guided reflection, daily oracle rituals, journaling, personalized astrology and numerology, and a multi-channel ambient sound mixer.',
    fullDescription:
      'Akasha is a cross-platform spiritual wellness app designed to help users reflect, heal, and build mindful daily habits. It combines AI-powered guidance, daily oracle rituals, personalized astrology and numerology insights, journaling, and immersive ambient sound experiences into one calming digital space.\n\nBuilt with React Native and Expo, Akasha provides AI chat conversations, personalized spiritual preferences, guided reflections, saved journal entries, daily insights, and a multi-channel sound mixer. Firebase powers authentication and data sync, while OpenAI enhances personalized guidance.\n\nWith a modern dark gradient UI, glass-style cards, smooth animations, haptic feedback, and subscription-based premium features, Akasha delivers a peaceful and personalized wellness experience across iOS, Android, and web.',
    category: 'Mobile App',
    tech: ['React Native', 'Expo', 'Firebase', 'OpenAI', 'iOS', 'Android', 'Web'],
    displayMode: 'mobile',
    coverImage: 'akasha/ak-cover.png',
    media: [
      { type: 'video', url: 'akasha/ak-demo.mp4', caption: 'App Demo' },
      { type: 'image', url: 'akasha/ak-cover.png', caption: 'Akasha App' },
    ],
    role: 'React Native Developer',
    highlights: [
      'AI chat and guided reflections with OpenAI-powered personalized guidance',
      'Daily oracle rituals plus personalized astrology and numerology insights',
      'Journaling with saved entries and personalized spiritual preferences',
      'Multi-channel ambient sound mixer for immersive wellness sessions',
      'Firebase authentication and data sync across devices',
      'Dark gradient UI with glass-style cards, motion, haptics, and premium subscriptions',
      'Cross-platform on iOS, Android, and web with React Native and Expo',
    ],
  },
  {
    id: 'esports',
    title: 'E-Sports Web App — Tournament Management Platform',
    shortDescription:
      'A tournament management platform for creating, running, and joining competitions — accounts, teams, and admin-organized events in one place.',
    fullDescription:
      'This project is a full-featured tournament management platform designed to simplify the process of creating, managing, and participating in tournaments. It allows users to create accounts, log in, and build teams that can participate in tournaments organized by admins.',
    category: 'Web Application',
    tech: ['React'],
    displayMode: 'web',
    coverImage: 'esports/es-cover.png',
    media: [
      { type: 'video', url: 'esports/es-demo.mp4', caption: 'Platform Demo' },
      { type: 'image', url: 'esports/es-cover.png', caption: 'E-Sports Web App' },
    ],
    role: 'Frontend Developer',
    highlights: [
      'User accounts and authentication for players and organizers',
      'Team creation for tournament participation',
      'Admin-organized tournaments with create, manage, and join workflows',
    ],
  },
  {
    id: 'recovery-copilot',
    title: 'Recovery Co-Pilot',
    shortDescription:
      'A private, all-in-one recovery companion for people in 12-step recovery — track clean time, plan meetings, journal daily, and stay connected with your sponsorship network.',
    fullDescription:
      "Recovery Co-Pilot is a private recovery companion built by someone in recovery, for people in recovery. Whether you're on day one or celebrating years clean, it keeps recovery front and center. Track clean time with a beautiful dashboard showing years, months, and days. Stay accountable daily with check-ins, gratitude lists, journaling, and a built-in 10th Step inventory. Find and save meetings across AA, NA, CA, Al-Anon, OA, GA, Crystal Meth Anonymous, and Celebrate Recovery — with full 90-in-90 progress tracking. Manage sponsorship relationships through a visual sponsorship tree. Access daily readings, literature, and a one-tap panic/support button. Built with React and Rust for a fast, private, cross-platform experience on iOS, Android, and the web. No ads. No data selling.",
    category: 'Mobile App',
    tech: ['React Native', 'React', 'Rust', 'iOS', 'Android'],
    displayMode: 'mobile',
    coverImage: 'recovery-copilot/rc-cover.png',
    media: [
      { type: 'video', url: 'recovery-copilot/rc-demo.mp4', caption: 'App Demo' },
      { type: 'image', url: 'recovery-copilot/rc-dashboard.png', caption: 'Main Dashboard' },
      { type: 'image', url: 'recovery-copilot/rc-friends-feed.png', caption: 'Friends Feed' },
      { type: 'image', url: 'recovery-copilot/rc-sponsorship-tree.png', caption: 'Sponsorship Tree' },
      { type: 'image', url: 'recovery-copilot/rc-ninety-in-ninety.png', caption: '90 in 90' },
      { type: 'image', url: 'recovery-copilot/rc-tenth-step.png', caption: '10th Step Inventory' },
      { type: 'image', url: 'recovery-copilot/rc-share-clean.png', caption: 'Share Clean Time' },
      { type: 'image', url: 'recovery-copilot/rc-meetings-plans.png', caption: 'Meeting Plans' },
      { type: 'image', url: 'recovery-copilot/rc-premium.png', caption: 'Go Premium' },
    ],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.recovery.co.pilot',
    websiteUrl: 'https://recovery-copilot.com',
    duration: '1 month',
    role: 'React Native Developer',
    highlights: [
      'Clean time tracker with years/months/days display and shareable milestone images',
      'Daily accountability tools — check-ins, gratitude list, journaling, and 10th Step inventory',
      'Meeting finder across 8+ fellowships (AA, NA, CA, Al-Anon, OA, GA, CMA, CR) with 90-in-90 tracking',
      'Visual sponsorship tree to manage lineage, sponsees, steps, and contact details',
      'Friends feed — share meeting plans, milestones, and stay connected with your recovery community',
      'One-tap panic/support button and quick-access daily readings & literature',
      'Private by default — journal and notes stored on device only, no ads, no data selling',
      'Cross-platform — iOS, Android, and web built with React and Rust',
    ],
    publishedDate: 'Mar 18, 2026',
  },
  {
    id: 'lingowire',
    title: 'Lingowire: Language Practice App',
    shortDescription:
      'A live language practice app that connects learners with real people through 1:1 chats, speaking exercises, group sessions, and tutor-led classes for any spoken language.',
    fullDescription:
      "Lingowire is a language learning app that helps you actually speak, not just study. Build real fluency through speaking practice, conversation partners, and supportive community groups that help you practice confidently and consistently.\n\nWhether you're practicing alone, speaking with a partner, or joining a group session, Lingowire helps you speak your language more clearly and confidently through real conversations. The app is free to use with no subscriptions or in-app purchases.\n\nConnects learners with real people through 1:1 chats, group classes, and quick challenges tailored to their level. Features progress tracking across sessions, streaks, and milestones, easy scheduling for short or longer sessions, and a safe community with built-in reporting, blocking, and zero tolerance for abuse.",
    category: 'Mobile App',
    tech: ['React Native', 'iOS', 'Android', 'API Integration', 'Firebase'],
    displayMode: 'mobile',
    coverImage: 'lingowire/lw-cover.png',
    media: [
      { type: 'video', url: 'lingowire/lw-demo.mp4', caption: 'App Demo' },
      { type: 'image', url: 'lingowire/lw-partners.png', caption: 'Connect with a Partner' },
      { type: 'image', url: 'lingowire/lw-practice.png', caption: 'Guided Speaking Practice' },
      { type: 'image', url: 'lingowire/lw-learn.png', caption: 'Discover Classes & Materials' },
      { type: 'image', url: 'lingowire/lw-chat.png', caption: 'Chat with Partners' },
      { type: 'image', url: 'lingowire/lw-groups.png', caption: 'Join Speaking Groups' },
    ],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.lingowire',
    appStoreUrl: 'https://apps.apple.com/us/app/lingowire-language-practice/id6753318520',
    websiteUrl: 'https://lingowire.com',
    duration: '3 months',
    role: 'React Native Developer',
    publishedDate: 'Feb 9, 2026',
    highlights: [
      'Practice speaking alone through guided exercises in realistic scenarios like travel, shopping, or work',
      'Connect with language partners for real 1:1 conversations, feedback, and confidence building',
      'Join community speaking groups led by hosts and fluent speakers to stay motivated and consistent',
      'Tutor-led classes and structured lessons for personalized, guided learning',
      'Progress tracking across minutes spoken, topics covered, and confidence — not just points',
      'Works for both popular and rare languages — request any spoken language and it gets added',
      'Free to use — no subscriptions, no in-app purchases, no paywalls',
      'Published on both Google Play and Apple App Store',
    ],
  },
  {
    id: 'starstone-defi',
    title: 'Starstone — Blockchain Creature Game',
    shortDescription:
      'A fast, immersive creature-collecting adventure on Solana — open booster packs, discover rare allies, and evolve them into powerful forms.',
    fullDescription:
      'Starstone is a blockchain-powered creature-collecting game built on Solana. Open booster packs to discover unique creatures, burn shards to evolve them through multiple tiers, and build your ultimate collection. Connect your wallet, jump in, and start building your squad.\n\nThe game blends dynamic collection mechanics with blockchain technology: purchase booster packs to acquire randomized shard tokens, evolve creatures by burning specific shards, and engage with a vibrant community of players crafting their Starstone collections. Features a live creature evolution system, channeling mechanic for passive shard generation, and a secure on-chain marketplace for trading creatures and shards.',
    category: 'Web Application',
    tech: ['React', 'Rust', 'Solana', 'Blockchain', 'Web3.js'],
    coverImage: 'starstone/ss-cover.png',
    media: [
      { type: 'video', url: 'starstone/ss-demo.mp4', caption: 'Gameplay Demo' },
      { type: 'image', url: 'starstone/ss-cover.png', caption: 'Hero — Collect, Evolve & Trade' },
      { type: 'image', url: 'starstone/ss-creatures.png', caption: 'Creature Evolution Tiers' },
      { type: 'image', url: 'starstone/ss-booster-packs.png', caption: 'Booster Pack Shop' },
      { type: 'image', url: 'starstone/ss-rewards.png', caption: 'Pack Opening Rewards' },
      { type: 'image', url: 'starstone/ss-shards.png', caption: 'Shards & Evolutions Dashboard' },
      { type: 'image', url: 'starstone/ss-channeling.png', caption: 'Channeling — Passive Shard Generation' },
    ],
    liveUrl: 'https://www.starstone.game/',
    websiteUrl: 'https://www.starstone.game/',
    duration: '2.5 months',
    role: 'React Developer & QA Lead',
    publishedDate: 'Dec 22, 2025',
    highlights: [
      'Solana wallet connection with live on-chain creature and shard data',
      'Booster pack system delivering randomized NFT creatures with rarity tiers',
      'Shard-burning evolution mechanic — transform creatures into stronger forms up to tier 3',
      'Channeling system for passive shard generation from staked creatures',
      'Monthly airdrop system delivering evolution shards to Starstone holders',
      'On-chain marketplace for trading creatures and shards securely',
      'AI-generated creature artwork with lore, rarity traits, and unique evolution chains',
      'Full QA across multiple release cycles to ensure stable live gameplay',
    ],
  },
  {
    id: 'veor-app',
    title: 'VEOR — Peer-to-Peer Support App',
    shortDescription:
      'A peer support app connecting users with compassionate trained listeners for one-on-one chat, voice calls, peer support groups, and anonymous emotional check-ins.',
    fullDescription:
      'VEOR is a peer support app that connects you with compassionate listeners who provide personalized, one-on-one support to help you navigate stress, loneliness, or simply when you need someone to talk to.\n\nOn VEOR, you can chat with trained listeners 24/7 about anything on your mind, build meaningful connections in peer support groups with others who share similar experiences, and use the emotion check-in tool to track your feelings and gain clarity on your thoughts.\n\nVEOR also offers real-time voice calling with listeners. During an active call, the app uses a foreground service with a visible notification to ensure the call remains stable and uninterrupted, even if the app is minimized or the device is locked. Passionate about helping others? You can also become a volunteer on VEOR after completing a training program.',
    category: 'Mobile App',
    tech: ['React Native', 'Firebase', 'JavaScript', 'Node.js', 'iOS', 'Android'],
    displayMode: 'mobile',
    coverImage: 'veor/veor-cover.png',
    media: [
      { type: 'image', url: 'veor/veor-cover.png', caption: 'App Overview' },
      { type: 'image', url: 'veor/veor-connect.png', caption: 'Connect with a Listener' },
      { type: 'image', url: 'veor/veor-chat.png', caption: 'Chat with Listener' },
      { type: 'image', url: 'veor/veor-support.png', caption: 'My Support Network' },
      { type: 'image', url: 'veor/veor-listener.png', caption: 'Listener Profile' },
    ],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.veor',
    appStoreUrl: 'https://apps.apple.com/us/app/veor/id6670143170',
    websiteUrl: 'https://www.veor.org/',
    duration: '4 months',
    role: 'Senior React Native Developer',
    highlights: [
      '24/7 anonymous chat with trained, compassionate peer listeners',
      'Real-time voice calling with foreground service to keep calls stable when app is minimized',
      'Emotion check-in tool for tracking feelings and gaining clarity on thoughts',
      'Peer support groups connecting users with others who share similar experiences',
      'Volunteer listener onboarding with training program and certification flow',
      'Anonymous matching system prioritizing user privacy and data security',
    ],
  },
]

export const projectAsset = (path: string) => `${import.meta.env.BASE_URL}projects/${path}`
