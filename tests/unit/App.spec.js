import customRouter from "@/router/index.js";
import { mount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import App from "@/App.vue";
import routes from "@/router/routes";

const localVue = createLocalVue();
localVue.use(customRouter);

describe("App", () => {
  it("renders a child component visitin home route", async () => {
    const router = new VueRouter({ routes });
    const wrapper = mount(App, {
      localVue,
      router,
      mode: "abstract"
    });
    await wrapper.vm.$nextTick();

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.findAll("Home")).toEqual({ selector: "Home" });
  });
  it("renders a child component visitin login route", async () => {
    const router = new VueRouter({ routes });
    const wrapper = mount(App, {
      localVue,
      router,
      mode: "abstract"
    });
    router.replace("/login", "/");
    await wrapper.vm.$nextTick();
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.findAll("Login")).toEqual({ selector: "Login" });
  });
});
//
