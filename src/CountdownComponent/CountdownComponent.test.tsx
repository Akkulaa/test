
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure, mount } from "enzyme";
import {CountdownComponent} from './index';

configure({ adapter: new Adapter() });

describe("<CountdownComponent />", () => {

 it("renders count down correctly", () => {
   shallow(<CountdownComponent nb={5} onDone={()=>{}} />);
 });

 it('allows us to set props', () => {
    const wrapper = mount(<CountdownComponent nb={5} onDone={()=>{}} />);
    expect(wrapper.props().nb).toEqual(5);
    wrapper.setProps({ nb: 8,  onDone:()=>{} });
    expect(wrapper.props().nb).toEqual(8);
  });

 it("includes a paragraph with an initial count of 30", () => {
   const wrapper = shallow(<CountdownComponent nb={5} onDone={()=>{}} />);
   expect(wrapper.find("p").length).toEqual(1);
   expect(wrapper.props().children[0]).toEqual(30);
 });

 it("decrement when mounted", () => {
    const wrapper = mount(<CountdownComponent nb={5} onDone={()=>{}} />);
    const p  = wrapper.find('#count_id')
    expect(p.text()).toBe('30s');
    setTimeout(() => {
        expect(p.text()).toBe('27s');
    }, 3000)

  });

});
