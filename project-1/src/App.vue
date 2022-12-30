<template>
  <div class="container flex flex-col items-center">
    <h1 class="text-2xl font-semibold text-lime-900 mt-4">Hola Mike!</h1>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
      @click="state.count++">Calculate</button>
    <p class="text-2xl font-semibold text-lime-900 mt-2">{{ state.count }} times clicked</p>

    <div class="joke-container mt-20 bg-fuchsia-200 rounded p-10 mx-10 text-center shadow-md">
      <h2 class="text-3xl border-b-2">The great Chuck!</h2>
      <h3 class="text-2xl mt-10 text-black">{{ state.joke }}</h3>
      <button class="bg-rose-400 hover:bg-rose-500 text-white font-bold p-2 rounded-md mt-14"
        @click="getRandomJoke">Give a
        thought, great
        Chuck </button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import axios from 'axios'

const state = reactive({ count: 0, joke: null, randomNumber: null })
const jokeAPI = 'https://api.chucknorris.io/jokes/random'

const getRandomJoke = async () => {
  const result = await axios(jokeAPI)
  state.joke = result.data.value
}

</script>
