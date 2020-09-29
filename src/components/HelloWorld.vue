<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">
    count is: {{ count }}
  </button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

interface HelloWorldProps {
  msg: string
}

export default defineComponent<HelloWorldProps>((props) => {
  const count = ref(0)

  return { count, msg: props.msg }
})
</script>
