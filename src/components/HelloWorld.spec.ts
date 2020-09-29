import { shallowMount } from '@vue/test-utils'
import HelloWorld from 'src/components/HelloWorld.vue'

test('display message', async () => {
  let wrapper = shallowMount(HelloWorld, {
    props: {
      msg: 'hello world',
    },
  })
  await wrapper.setProps({msg: '123'})

  expect(wrapper.text()).toContain('hello world')
})
