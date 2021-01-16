import React from 'react'

import { shallow } from 'enzyme'

import { ExpensesSummary} from '../../components/ExpensesSummary'

import toJSON from 'enzyme-to-json'


test('should correctly render ExpensesSummary with 1 expense', ()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount= {1} expensesTotal= {235}/>)

    expect(toJSON(wrapper)).toMatchSnapshot()

})


test('should correctly render ExpensesSummary with multiple expense', ()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount= {23} expensesTotal= {2351234987829}/>)

    expect(toJSON(wrapper)).toMatchSnapshot()
})