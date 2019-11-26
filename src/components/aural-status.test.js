import React from "react";
import { shallow } from "enzyme";

import AuralStatus from "./aural-status";

describe("<AuralStatus />", () => {
  it("renders without crashing", () => {
    shallow(<AuralStatus auralStatus="auralNauts" />);
  });

  it("correctly has aural status", () => {
    let status = "auralNauts";
    let wrapper = shallow(<AuralStatus auralStatus={status} />);
    expect(wrapper.contains(status)).toBeTruthy();
  });
});
