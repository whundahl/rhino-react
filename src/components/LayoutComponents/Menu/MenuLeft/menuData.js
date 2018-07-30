export default [
  {
    divider: true,
  },
  {
    title: 'Home',
    key: 'homedashboard',
    url: '/dashboard/home',
    icon: 'icmn icmn-home',
  },
  {
    title: 'Latest Research',
    key: 'blog',
    icon: 'icmn icmn-newspaper',
    children: [
      {
        title: 'Feed',
        key: 'blogFeed',
        url: '/blog/feed',
      },
      {
        title: 'Post',
        key: 'blogPost',
        url: '/blog/post',
      },
      {
        title: 'Add Post',
        key: 'blogAddPost',
        url: '/blog/add-blog-post',
      },
    ],
  },
  {
    title: 'Top Picks',
    key: 'topPicks',
    url: '/apps/gallery',
    icon: 'icmn icmn-star-full',
  },
  {
    title: 'REIT Sectors',
    key: 'reitSectorHome',
    icon: 'icmn icmn-office',
    children: [
      {
        title: 'Sector Comparison',
        key: 'sectorComp',
        url: '/dashboard/sectorComp',
      },
      {
        title: 'Commercial Mortgage',
        key: 'SectorTemp1',
        url: '/dashboard/sectorTemp1',
      },
    ],
  },
  {
    title: 'Rhino Portfolios',
    key: 'reitPortfolioHome',
    icon: 'icmn icmn-stats-bars2',
    children: [
      {
        title: 'Portfolio Comparison',
        key: 'portfolioComp',
        url: '/dashboard/portfolioComp',
      },
      {
        title: 'DAVOS',
        key: 'portfolioTemp1',
        url: '/dashboard/portfolioTemp1',
      },
      {
        title: 'Durable Income',
        key: 'portfolioTemp2',
        url: '/dashboard/portfolioTemp2',
      },
      {
        title: 'Small Cap',
        key: 'portfolioTemp3',
        url: '/dashboard/portfolioTemp3',
      },
      {
        title: 'Monthly Dividend',
        key: 'portfolioTemp4',
        url: '/dashboard/portfolioTemp4',
      },
      {
        title: 'KISS',
        key: 'portfolioTemp5',
        url: '/dashboard/portfolioTemp5',
      },
      {
        title: 'New Money',
        key: 'portfolioTemp6',
        url: '/dashboard/portfolioTemp6',
      },
      {
        title: 'Average Joe',
        key: 'portfolioTemp7',
        url: '/dashboard/portfolioTemp7',
      },
    ],
  },
  {
    title: 'REIT Tool Box',
    key: 'reitToolsHome',
    icon: 'icmn icmn-briefcase',
    children: [
      {
        title: 'Valuation Tool',
        key: 'valTool',
        // url: '/dashboard/portfolioComp',
      },
      {
        title: 'ETF Tool',
        key: 'etfTool',
        // url: '/dashboard/portfolioTemp',
      },
      {
        title: 'Technical Analysis',
        key: 'techAnal',
        // url: '/dashboard/portfolioTemp',
      },
      {
        title: 'Buying Guide',
        key: 'buyGuide',
        // url: '/dashboard/portfolioTemp',
      },
      {
        title: 'Macro Analysis',
        key: 'macroAnal',
        // url: '/dashboard/portfolioTemp',
      },
      {
        title: 'REIT IPOs',
        key: 'reitIPO',
        // url: '/dashboard/portfolioTemp',
      },
      {
        title: 'REIT M&A',
        key: 'reitMda',
        // url: '/dashboard/portfolioTemp',
      },
    ],
  },
  {
    divider: true,
  },
  {
    title: 'Media Library',
    key: 'mediaHome',
    icon: 'icmn icmn-youtube',
    children: [
      {
        title: 'Podcast Library',
        key: 'podcastLib',
        icon: 'icm icmn-headphones',
        // url: 'dashboard/',
      },
      {
        title: 'Article Library',
        key: 'articleLib',
        icon: 'icmn icmn-newspaper',
        // url: 'dashboard/',
      },
      {
        title: 'Video Library',
        key: 'youtube',
        icon: 'icmn icmn-tv',
        children: [
          {
            title: 'Feed',
            key: 'youtubeFeed',
            url: '/youtube/feed',
          },
          {
            title: 'View',
            key: 'youtubeView',
            url: '/youtube/view',
          },
        ],
      },
    ],
  },
  {
    title: 'My Account',
    key: 'account',
    icon: 'icmn icmn-user-tie',
    children: [
      {
        title: 'Profile',
        key: 'profile',
        url: '/apps/profile',
      },
      {
        title: 'Support Forum',
        key: 'support',
        // url: '/dashboard/portfolioTemp',
      },
      {
        title: 'Chat',
        key: 'chat',
        // url: '/dashboard/portfolioTemp',
      },
    ],
  },
  {
    divider: true,
  },
  {
    title: 'Disabled Item',
    key: 'disabledItem',
    disabled: true,
    icon: 'icmn icmn-cancel-circle',
  },
]
