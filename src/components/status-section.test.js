import React from 'react';
import {shallow} from 'enzyme';
import StatusSection from './status-section';


describe('<GuessForm />', () => {

 it('Renders StatusSection without crashing', () => {
   shallow(<StatusSection guesses={[0]}/>);  
 });

 // this is only a container for other components
 // => there is no state/props/interactivity to test

});