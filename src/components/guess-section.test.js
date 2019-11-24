import React from 'react';
import {shallow} from 'enzyme';

import GuessSection from './guess-section';

 it('Renders GuessSection without  crashing', () => {
   shallow(<GuessSection/>);  
 });