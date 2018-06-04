import TableUnit from '../components/table/TableUnit'

import React from 'react'
import { shallow } from 'enzyme'


describe('<TableUnit />', () => {
    const app = shallow(<TableUnit />)

    it('wraps everything in a div tag', () => {
        expect(app).toHaveTagName('div')
    })

})