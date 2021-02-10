import React from 'react'
import ControlledCarousel from './ControlledCarousel'
import Navigation from './Navigation'

function HeaderComponent() {
    return (
        <div>
            <Navigation />
            <ControlledCarousel />
        </div>
    )
}

export default HeaderComponent
