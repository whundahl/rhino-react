import React from 'react'

import ProfileMenu from './ProfileMenu'

import BitcoinPrice from './BitcoinPrice'
import Stock1 from './stock1'
import Stock2 from './stock2'
import HomeMenu from './HomeMenu'
import LiveSearch from './LiveSearch'
import './style.scss'

class TopBar extends React.Component {
  render() {
    return (
      <div className="topbar">
        <div className="topbar__left">
          {/* <IssuesHistory />
          <ProjectManagement /> */}
          <LiveSearch />
        </div>
        <div className="topbar__right">
        <Stock2 />
          <Stock1 />
          <BitcoinPrice />
          <HomeMenu />
          <ProfileMenu />
        </div>
      </div>
    )
  }
}

export default TopBar
