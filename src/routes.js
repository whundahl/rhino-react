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
  '/documentation': {
    component: loadable(() => import('pages/DefaultPages/DocumentationPage')),
  },
  '/login': {
    component: loadable(() => import('pages/DefaultPages/LoginPage')),
  },
  '/pages/login-alpha': {
    component: loadable(() => import('pages/DefaultPages/LoginAlphaPage')),
  },
  '/pages/login-beta': {
    component: loadable(() => import('pages/DefaultPages/LoginBetaPage')),
  },
  '/pages/register': {
    component: loadable(() => import('pages/DefaultPages/RegisterPage')),
  },
  '/pages/lockscreen': {
    component: loadable(() => import('pages/DefaultPages/LockscreenPage')),
  },
  '/pages/pricing-table': {
    component: loadable(() => import('pages/DefaultPages/PricingTablePage')),
  },
  '/pages/invoice': {
    component: loadable(() => import('pages/DefaultPages/InvoicePage')),
  },

  // Dashboards
  '/dashboard/alpha': {
    component: loadable(() => import('pages/Dashboard/DashboardAlphaPage')),
  },
  '/dashboard/home': {
    component: loadable(() => import('pages/Dashboard/home')),
  },
  '/dashboard/beta': {
    component: loadable(() => import('pages/Dashboard/DashboardBetaPage')),
  },
  '/dashboard/crypto': {
    component: loadable(() => import('pages/Dashboard/DashboardCryptoPage')),
  },

  // Sectors
  '/dashboard/sectorComp': {
    component: loadable(() => import('pages/Dashboard/sectorHome')),
  },
  '/dashboard/sectorTemp1': {
    component: loadable(() => import('pages/Dashboard/sectorTemplate1')),
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

  // Apps
  '/apps/messaging': {
    component: loadable(() => import('pages/Apps/Messaging/MessagingChatPage')),
  },
  '/apps/mail': {
    component: loadable(() => import('pages/Apps/Mail/MailListPage')),
  },
  '/apps/profile': {
    component: loadable(() => import('pages/Apps/Profile/ProfilePage')),
  },
  '/apps/gallery': {
    component: loadable(() => import('pages/Apps/Gallery/GalleryListPage')),
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
