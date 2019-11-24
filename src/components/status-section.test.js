import React from 'react';
import {shallow} from 'enzyme';
import StatusSection from './status-section';

 it('Renders StatusSection without crashing', () => {
   shallow(<StatusSection guesses={[0]}/>);  
 });