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
        key: 'SectorComp',
        url: '/dashboard/sectorComp',
        icon: '',
      },
      {
        title: 'Sectors',
        key: 'reitSectorList',
        icon: '',
        children: [
          {
            title: 'Residential',
            key: 'SectorTemp1',
            url: '/dashboard/sectorTemp1',
          },
          {
            title: 'Manufactured Housing',
            key: 'SectorTemp2',
            url: '/dashboard/sectorTemp2',
          },
          {
            title: 'Single Family Rentals',
            key: 'SectorTemp3',
            url: '/dashboard/sectorTemp3',
          },
          {
            title: 'Shopping Centers',
            key: 'SectorTemp4',
            url: '/dashboard/sectorTemp4',
          },
          {
            title: 'Malls',
            key: 'SectorTemp5',
            url: '/dashboard/sectorTemp5',
          },
          {
            title: 'Self Storage',
            key: 'SectorTemp6',
            url: '/dashboard/sectorTemp6',
          },
          {
            title: 'Tripple Net',
            key: 'SectorTemp7',
            url: '/dashboard/sectorTemp7',
          },
          {
            title: 'Gaming',
            key: 'SectorTemp8',
            url: '/dashboard/sectorTemp8',
          },
          {
            title: 'Data Centers',
            key: 'SectorTemp9',
            url: '/dashboard/sectorTemp9',
          },
          {
            title: 'Healthcare',
            key: 'SectorTemp10',
            url: '/dashboard/sectorTemp10',
          },
          {
            title: 'Office',
            key: 'SectorTemp11',
            url: '/dashboard/sectorTemp11',
          },
          {
            title: 'Industrial',
            key: 'SectorTemp12',
            url: '/dashboard/sectorTemp12',
          },
          {
            title: 'Lodging',
            key: 'SectorTemp13',
            url: '/dashboard/sectorTemp13',
          },
          {
            title: 'Prisons',
            key: 'SectorTemp14',
            url: '/dashboard/sectorTemp14',
          },
          {
            title: 'Other',
            key: 'SectorTemp15',
            url: '/dashboard/sectorTemp15',
          },
          {
            title: 'Mortgage',
            key: 'SectorTemp16',
            url: '/dashboard/sectorTemp16',
          },
          {
            title: 'Timber',
            key: 'SectorTemp17',
            url: '/dashboard/sectorTemp17',
          },
          {
            title: 'Infranstructure',
            key: 'SectorTemp18',
            url: '/dashboard/sectorTemp18',
          },
        ],
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
        title: 'Portfolios',
        key: 'reitPorfolioList',
        icon: '',
        children: [
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
        url: '/dashboard/valTool',
      },
      {
        title: 'ETF Tool',
        key: 'etfTool',
        // url: '/dashboard/portfolioTemp',
      },
      {
        title: 'Earnings Calendar',
        key: 'earnCal',
        url: '/dashboard/EarnCal',
      },
      {
        title: 'Buying Guide',
        key: 'buyGuide',
        // url: '/dashboard/portfolioTemp',
      },
      {
        title: 'Technical Analysis',
        disabled: true,
        key: 'techAnal',
        // url: '/dashboard/portfolioTemp',
      },
      {
        title: 'Macro Analysis',
        disabled: true,
        key: 'macroAnal',
        // url: '/dashboard/portfolioTemp',
      },
      {
        title: 'REIT IPOs',
        disabled: true,
        key: 'reitIPO',
        // url: '/dashboard/portfolioTemp',
      },
      {
        title: 'REIT M&A',
        disabled: true,
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
        disabled: true,
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
        title: 'Register',
        key: 'register',
        url: '/pages/register'
      },
      {
        title: 'Support Forum',
        key: 'support',
        url: '/apps/supportForum',
      },
      {
        title: 'Chat',
        key: 'chat',
        url: '/apps/messaging',
      },
    ],
  },
]
