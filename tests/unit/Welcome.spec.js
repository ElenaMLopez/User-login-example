require("./mock-local-storage");

import { shallowMount, mount } from "@vue/test-utils";
import Welcome from "@/components/Welcome.vue";

describe("Welcome component from Home view", () => {
  it("Should render component", () => {
    const wrapper = shallowMount(Welcome);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("Should have a logout button", () => {
    const wrapper = shallowMount(Welcome);
    const logoutButton = wrapper.find(".secondarybtn");
    expect(logoutButton.exists()).toBe(true);
  });

  describe("Test click on logout button", () => {
    it("Click on Should call to logout function", () => {
      localStorage.setItem("fake_token", "token");

      const $router = { push: jest.fn() };
      const wrapper = mount(Welcome);
      wrapper.vm.$router = $router;
      wrapper.find(".secondarybtn").trigger("click");

      expect(localStorage.getItem("fake_token")).toBeNull();
    });
  });
});
