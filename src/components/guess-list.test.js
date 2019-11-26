import React from "react";
import { shallow } from "enzyme";

import GuessList from "./guess-list";

describe("<GuessList />", () => {
  it("renders without crashing", () => {
    shallow(<GuessList guesses={[1]} />);
  });
});