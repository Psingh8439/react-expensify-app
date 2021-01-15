import React from 'react'

import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import NotFoundPage from '../../components/NotFoundPage'
import { TestScheduler } from 'jest'

test('should render not found page correctly', ()=>{
    const wrapper = shallow(<NotFoundPage />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})