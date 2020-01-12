import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  const app = shallow(<App />);

  it("renders correctly", () => {
    expect(app.debug()).toMatchSnapshot();
  });

  it("intializes the `state` to an empty list of gift ", () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe("when clicking `add-gift` button", () => {
    const id = 1;
    beforeEach(() => {
      app.find(".btn-add").simulate("click");
    });

    afterEach(() => {
      app.setState({ gifts: [] });
    });
    it("add a new gift to `state`", () => {
      expect(app.state().gifts).toEqual([{ id }]);
    });

    it("add a new gift to rendered list", () => {
      expect(app.find(".gift-list").children().length).toEqual(1);
    });

    it("created a `Gift` component", () => {
      expect(app.find("Gift").exists()).toBe(true);
    });

    describe("and the user wants to remove the added gift", () => {
      beforeEach(() => {
        app.instance().removeGift(id);
      });

      it("remove gift from `state`", () => {
        expect(app.state().gifts).toEqual([]);
      });
    });
  });
});
