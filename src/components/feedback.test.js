import React from 'react';
import {shallow} from 'enzyme';

import Feedback from './feedback';

 it('Renders Feedback without  crashing', () => {
   shallow(<Feedback feedback="leg" guessCount="0"/>);  
 });