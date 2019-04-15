import React from 'react';
import {SeachBtn} from './search';
import {shallow, mount} from 'enzyme';

describe('SeachBtn component', () => {

    it('should render search correctly', () => {
        const component = shallow(<search />);
        expect(component).toMatchSnapshot();
    });


});
