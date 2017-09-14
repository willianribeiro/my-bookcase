import React from 'react'
import PropTypes from 'prop-types'

const TabNavigator = ({
  tabs,
  onTabClick
}) => (
  <nav className='c-tab-navigator'>
    {
      tabs.map((tab, index) => (
        <strong
          key={index}
          onClick={() => onTabClick(index)}
        >
          {tab}
        </strong>
      ))
    }
  </nav>
)

TabNavigator.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTabClick: PropTypes.func.isRequired
}

export default TabNavigator
