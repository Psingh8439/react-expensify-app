
import React from 'react'
import {Header} from '../../components/Header'
import  { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { startLogin } from '../../actions/auth'



test('should render Header correctly', ()=>{
    const wrapper = shallow(<Header startLogout={()=>{ }}/>)

    expect(toJSON(wrapper)).toMatchSnapshot()



    //expect(wrapper.find('h1').text()).toBe("Expensify")
    // const renderer = new ReactShallowRenderer()

    // renderer.render(<Header />)
    // expect(renderer.getRenderOutput()).toMatchSnapshot()

})

test('should call startLogout on button click',()=>{
    const startLogout = jest.fn()
    const wrapper = shallow(<Header startLogout={startLogout} />)

    wrapper.find('button').simulate('click')

    expect(startLogout).toHaveBeenCalled()
})


