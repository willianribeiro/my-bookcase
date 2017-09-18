import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const TabNavigator = ({
  tabs,
  onTabClick,
  currentTabIndex
}) => (
  <nav className='c-tab-navigator'>
    {
      tabs.map((tab, index) => {
        const classNames = classnames(
          'c-tab-navigator__item',
          { 'c-tab-navigator__item--is-active': currentTabIndex === index }
        )
        return (
          <div
            key={index}
            onClick={() => onTabClick(index)}
            className={classNames}
          >
            {tab}
          </div>
        )
      })
    }
  </nav>
)

TabNavigator.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTabClick: PropTypes.func.isRequired
}

export default TabNavigator
