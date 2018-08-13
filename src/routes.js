import React from 'react'
import { Route } from 'react-router-dom'
import { ConnectedSwitch } from 'reactRouterConnected'
import Loadable from 'react-loadable'
import Page from 'components/LayoutComponents/Page'
import NotFoundPage from 'pages/DefaultPages/NotFoundPage'
import HomePage from 'pages/DefaultPages/HomePage'

const loadable = loader =>
  Loadable({
    loader,
    delay: false,
    loading: () => null,
  })

const loadableRoutes = {
  // Default Pages

  '/login': {
    component: loadable(() => import('pages/DefaultPages/LoginPage')),
  },
  '/register': {
    component: loadable(() => import('pages/DefaultPages/RegisterPage')),
  },

  // Dashboards
  '/dashboard/alpha': {
    component: loadable(() => import('pages/Dashboard/DashboardAlphaPage')),
  },
  '/dashboard/home': {
    component: loadable(() => import('pages/Dashboard/home')),
  },

  // Sectors
  '/dashboard/sectorComp': {
    component: loadable(() => import('pages/Dashboard/sectorHome')),
  },
  '/dashboard/sectorTemp1': {
    component: loadable(() => import('pages/Dashboard/sectorTemplate1')),
  },
  '/dashboard/sectorTemp2': {
    component: loadable(() => import('pages/Dashboard/sectorTemplate2')),
  },
  '/dashboard/sectorTemp3': {
    component: loadable(() => import('pages/Dashboard/sectorTemplate3')),
  },
  '/dashboard/sectorTemp4': {
    component: loadable(() => import('pages/Dashboard/sectorTemplate4')),
  },
  '/dashboard/sectorTemp5': {
    component: loadable(() => import('pages/Dashboard/sectorTemplate5')),
  },
  '/dashboard/sectorTemp6': {
    component: loadable(() => import('pages/Dashboard/sectorTemplate6')),
  },
  '/dashboard/sectorTemp7': {
    component: loadable(() => import('pages/Dashboard/sectorTemplate7')),
  },
  '/dashboard/sectorTemp8': {
    component: loadable(() => import('pages/Dashboard/sectorTemplate8')),
  },
  '/dashboard/sectorTemp9': {
    component: loadable(() => import('pages/Dashboard/sectorTemplate9')),
  },
  '/dashboard/sectorTemp10': {
    component: loadable(() => import('pages/Dashboard/sectorTemplate10')),
  },
  '/dashboard/sectorTemp11': {
    component: loadable(() => import('pages/Dashboard/sectorTemplate11')),
  },
  '/dashboard/sectorTemp12': {
    component: loadable(() => import('pages/Dashboard/sectorTemplate12')),
  },
  '/dashboard/sectorTemp13': {
    component: loadable(() => import('pages/Dashboard/sectorTemplate13')),
  },
  '/dashboard/sectorTemp14': {
    component: loadable(() => import('pages/Dashboard/sectorTemplate14')),
  },
  '/dashboard/sectorTemp15': {
    component: loadable(() => import('pages/Dashboard/sectorTemplate15')),
  },
  '/dashboard/sectorTemp16': {
    component: loadable(() => import('pages/Dashboard/sectorTemplate16')),
  },
  '/dashboard/sectorTemp17': {
    component: loadable(() => import('pages/Dashboard/sectorTemplate17')),
  },
  '/dashboard/sectorTemp18': {
    component: loadable(() => import('pages/Dashboard/sectorTemplate18')),
  },

  // portfolios
  '/dashboard/portfolioComp': {
    component: loadable(() => import('pages/Dashboard/portfolioHome')),
  },
  '/dashboard/portfolioTemp1': {
    component: loadable(() => import('pages/Dashboard/portfolioTemplate1')),
  },
  '/dashboard/portfolioTemp2': {
    component: loadable(() => import('pages/Dashboard/portfolioTemplate2')),
  },
  '/dashboard/portfolioTemp3': {
    component: loadable(() => import('pages/Dashboard/portfolioTemplate3')),
  },
  '/dashboard/portfolioTemp4': {
    component: loadable(() => import('pages/Dashboard/portfolioTemplate4')),
  },
  '/dashboard/portfolioTemp5': {
    component: loadable(() => import('pages/Dashboard/portfolioTemplate5')),
  },
  '/dashboard/portfolioTemp6': {
    component: loadable(() => import('pages/Dashboard/portfolioTemplate6')),
  },
  '/dashboard/portfolioTemp7': {
    component: loadable(() => import('pages/Dashboard/portfolioTemplate7')),
  },

  // Earnings Calandar

  '/dashboard/EarnCal': {
    component: loadable(() => import('pages/Dashboard/EarningsCalendar')),
  },

  // Apps
  '/apps/messaging': {
    component: loadable(() => import('pages/Apps/Messaging/MessagingChatPage')),
  },
  '/apps/profile': {
    component: loadable(() => import('pages/Apps/Profile/ProfilePage')),
  },
  '/apps/gallery': {
    component: loadable(() => import('pages/Apps/Gallery/GalleryListPage')),
  },
  '/apps/supportForum': {
    component: loadable(() => import('pages/Apps/GitHub/GitHubDiscussPage')),
  },

  // Blog
  '/blog/feed': {
    component: loadable(() => import('pages/Apps/Blog/BlogFeedPage')),
  },
  '/blog/post': {
    component: loadable(() => import('pages/Apps/Blog/BlogPostPage')),
  },
  '/blog/add-blog-post': {
    component: loadable(() => import('pages/Apps/Blog/BlogAddPostPage')),
  },

  //YouTube
  '/youtube/feed': {
    component: loadable(() => import('pages/Apps/YouTube/YouTubeFeedPage')),
  },
  '/youtube/view': {
    component: loadable(() => import('pages/Apps/YouTube/YouTubeViewPage')),
  },

  //ToolBox
  '/Dashboard/valTool': {
    component: loadable(() => import('pages/Dashboard/valuationTool')),
  },
}

class Routes extends React.Component {
  timeoutId = null

  componentDidMount() {
    this.timeoutId = setTimeout(
      () => Object.keys(loadableRoutes).forEach(path => loadableRoutes[path].component.preload()),
      5000, // load after 5 sec
    )
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  render() {
    return (
      <ConnectedSwitch>
        <Route exact path="/" component={HomePage} />
        {Object.keys(loadableRoutes).map(path => {
          const { exact, ...props } = loadableRoutes[path]
          props.exact = exact === void 0 || exact || false // set true as default
          return <Route key={path} path={path} {...props} />
        })}
        <Route
          render={() => (
            <Page>
              <NotFoundPage />
            </Page>
          )}
        />
      </ConnectedSwitch>
    )
  }
}

export { loadableRoutes }
export default Routes
