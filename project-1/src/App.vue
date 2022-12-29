<template>
  <div class="container flex flex-col items-center">
    <h1 class="text-2xl font-semibold text-lime-900 mt-4">Hola Mike!</h1>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
      @click="count++">Calculate</button>
    <p class="text-2xl font-semibold text-lime-900 mt-2">{{ count }} times clicked</p>

    <div class="joke-container mt-20 bg-fuchsia-200 rounded p-10 text-center shadow-md">
      <h2 class="text-2xl">The great Chuck</h2>
      <h3 class="text-1xl mt-10">{{ result.value }}</h3>
      <button class="bg-rose-400 hover:bg-rose-500 text-white font-bold p-2 rounded-md mt-16" @input="getJokes">Give a thought, great
        Chuck </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

// const jokeAPIURL = 'https://api.chucknorris.io/jokes/random'

const getJokes = async () => {
  const result = await axios('https://api.chucknorris.io/jokes/random')
  result.value
}

export default {
  name: 'App',
  components: {
  },

  data() {
    return {
      count: 0,
      contents: null
    }
  },
}
</script>

