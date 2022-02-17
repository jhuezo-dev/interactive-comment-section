import React from "react";
import { shallow } from "enzyme";
import CommentCard from "./comment-card";

describe("CommentCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CommentCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
