<template>
  <div>
    <input type="text" v-model="message">
    <p>
      {{message}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data() {
    return {
      message: 'MyComponent!!'
    }
  },
}
</script>
