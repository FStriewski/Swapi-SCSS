import PlanetContainer from '../components/details/PlanetContainer'

import React from 'react'
import { shallow } from 'enzyme'


describe('<PlanetContainer />', () => {
    const app = shallow(<PlanetContainer />)
    // const title = <Title content="Scoreboard" />

    it('wraps everything in a div tag', () => {
        expect(app).toHaveTagName('div')
    })

    // it('contains a Title', () => {
    //     expect(app).toContainReact(title)
    // })
})