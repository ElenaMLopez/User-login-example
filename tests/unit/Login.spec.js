import Login from '@/views/Login.vue';
import { mount } from '@vue/test-utils';

describe('Render Login', () => {
  it('Should have the Login component', () => {
    const wrapper = mount(Login);
    expect(wrapper.contains('div')).toBe(true);
  });
});
