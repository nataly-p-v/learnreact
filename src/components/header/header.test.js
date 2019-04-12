import {shallow} from "enzyme/build";
import {Header} from './header';
import React from "react";

describe('header component', () => {

    it('should render header correctly', () => {
        const component = shallow(<header/>);
        expect(component).toMatchSnapshot();
    })
});
