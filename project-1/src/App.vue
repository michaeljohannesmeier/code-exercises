<template>
  <div class="container flex flex-col items-center">
    <h1 class="text-2xl font-semibold text-lime-900 mt-4">Hola Mike!</h1>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6" @click="count++">Calculate</button>
    <p class="text-2xl font-semibold text-lime-900 mt-2">{{ count }} times clicked</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },

  data() {
    return {
      count: 0
    }
  }
}
</script>

