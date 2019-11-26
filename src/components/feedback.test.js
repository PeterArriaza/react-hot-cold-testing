import React from "react";
import { shallow } from "enzyme";

import Feedback from "./feedback";

describe("<GuessForm />", () => {
  it("Renders Feedback without  crashing", () => {
    shallow(<Feedback feedback="leg" guessCount="0" />);
  });

  it("Renders Feedback properly", () => {
    const feedback = "leg";
  });
});
