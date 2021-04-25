import { mount } from '@vue/test-utils'
import About from '@/views/About.vue'

describe('About', () => {
  it('初始值', () => {
    // const msg = 'new message'
    const wrapper = mount(About)
    expect(wrapper.vm.test).toBe('')
  })
})
