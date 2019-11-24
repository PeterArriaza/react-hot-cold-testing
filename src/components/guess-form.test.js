import React from 'react';
import {
    shallow,
    mount
} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {

    it('Renders GuessForm without  crashing', () => {
        shallow( < GuessForm / > );
    });

    it('should call onMakeGuess on form submit', () => {
        // some test to verify input
        const callback = jest.fn();
        const value = 8;
        const wrapper = mount( <GuessForm onMakeGuess={callback}/>);
         wrapper.find('input[type="number"]').instance().value = value; 
        wrapper.simulate('submit'); expect(callback).toHaveBeenCalledWith(value.toString());
                });
        
 it('Should reset the input when the form is submitted', () => {
    const callback = jest.fn();
    const value = 8;
    const wrapper = mount( <GuessForm onMakeGuess={callback}/>);
     wrapper.find('input[type="number"]').instance().value = value; 
    wrapper.simulate('submit');
     expect(wrapper.find('input[type="number"]').instance().value).toBe("");
 });

});
