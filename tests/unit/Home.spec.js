import Home from '@/views/Home.vue';
import { mount } from '@vue/test-utils';

describe('Render Home', () => {
  it('Should have the Home component', () => {
    const wrapper = mount(Home);
    expect(wrapper.contains('.home')).toBe(true);
  });
});
