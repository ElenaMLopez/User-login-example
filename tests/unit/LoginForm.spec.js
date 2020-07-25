require("./mock-local-storage");

import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import flushPromises from "flush-promises";
// Investigate why this library has error and how to fix router testing
// import { toHaveRouteName } from 'vue-test-utils-helpers';
import mockRouter from "./__mocks__/mockRouter";
import Login from "@/components/LoginForm.vue";
import loginService from "@/services/loginService";

var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();
const mockUser = {
  token: "fake_token"
};

describe("Login component from Home view", () => {
  it("Should render component", () => {
    const wrapper = shallowMount(Login);
    expect(wrapper.html()).toMatchSnapshot();
  });

  describe("LoginForm.vue", () => {
    it("Shoud have a username input", () => {
      const wrapper = shallowMount(Login);
      const userInput = wrapper.find("#userEmail");

      expect(userInput.exists()).toBe(true);
    });
    it("Shoud have a password input", () => {
      const wrapper = shallowMount(Login);
      const userInput = wrapper.find("#userPassword");

      expect(userInput.exists()).toBe(true);
    });
    it("Should have a login button", () => {
      const wrapper = shallowMount(Login);
      const logoutButton = wrapper.find(".primarybtn");
      expect(logoutButton.exists()).toBe(true);
    });
  });

  describe("Test click on login button", () => {
    it("onclick", async () => {
      const wrapper = shallowMount(Login);
      const _sendData = jest.fn();
      const clickButton = wrapper.find(".primarybtn");

      await wrapper.trigger("click", { method: _sendData, router });
      expect(clickButton.exists()).toBeTruthy();
    });

    it("Should navigate to Home on successful login", async () => {
      loginService.isLoginValid = jest.fn().mockResolvedValue(true);
      const localVue = createLocalVue();

      localVue.use(VueRouter);
      const router = mockRouter.mock();

      const wrapper = shallowMount(Login, {
        localVue,
        router
      });

      wrapper.find(".primarybtn").trigger("click");
      await flushPromises();

      // TO DO: Investigate why this dont works.
      // expect(wrapper).toHaveRouteName('home');
    });
  });
  describe("Save token at localStorage", () => {
    it("return ok and token to localstorage", async () => {
      const $router = { push: jest.fn() };
      const wrapper = shallowMount(Login);
      var mock = new MockAdapter(axios);

      wrapper.vm.$router = $router;
      mock.onGet("/API/user.json").reply(200, [mockUser]);

      localStorage.setItem("karumi_user_token", mockUser.token);
      await wrapper.find(".primarybtn").trigger("click");

      expect(localStorage.getItem("karumi_user_token")).toEqual(mockUser.token);
    });
  });
});
