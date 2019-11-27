import React from "react";
import { shallow } from "enzyme";

import GuessList from "./guess-list";

describe("<GuessList />", () => {
  it("renders without crashing", () => {
    // guesses prop required below because of map function in component
    // ...but not required in other component tests to initialize component where
    // preprocessing isn't required?
    shallow(<GuessList guesses={[1]} />);
  });
});
