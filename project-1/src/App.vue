<template>
  <div class="container flex flex-col items-center">
    <div class="flex flex-col items-center">
      <h1 class="text-2xl font-semibold text-lime-900 mt-4">Hola Amigo!</h1>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6" @click="state.count++">
        Calculate
      </button>
      <p class="text-2xl font-semibold text-lime-900 mt-2">
        {{ state.count }} times clicked
      </p>
    </div>

    <div class="flex flex-col items-center">
      <input type="text" placeholder="Search for a joke" v-model="state.searchQuery" @keyup="searchForJokes"
        class="px-2 py-1 w-3/4 text-black mt-20 bg-slate-300 border-b focus:border-slate-600 focus:outline-none focus:shadow-md" />
      <!-- <p v-if="!serverError && jokeData.lenth === 0">No result match, try again</p> -->
      <div class="joke-container mt-5 bg-fuchsia-200 rounded p-10 mx-10 text-center shadow-md">
        <h2 class="text-3xl border-b-2">The great Chuck!</h2>
        <h3 class="text-2xl mt-10 text-black">{{ state.joke }}
          <li v-for="joke, index in state.jokeData" :key="index" class="mb-5">
            {{ joke.value }}
          </li>
        </h3>
        <button class="bg-rose-400 hover:bg-rose-500 text-white font-bold p-2 rounded-md mt-14" @click="getRandomJoke">
          Give me a random Joke
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// ref and reactive are the same?

import { reactive } from 'vue'
import axios from 'axios'

const state = reactive({
  count: 0,
  joke: null,
  randomNumber: null,
  searchQuery: '',
  queryTimeout: null,
  jokeData: null,
})

const jokeAPI = 'https://api.chucknorris.io/jokes/random'
// const categoryJoke = `https://api.chucknorris.io/jokes/search?query=${state.searchQuery}`

const getRandomJoke = async () => {
  const result = await axios(jokeAPI)
  state.joke = result.data.value
}

// Not using Async and await
// --------------------------
// const getRandomJoke = () => {
//   /*
//     - axios makes the request, and then you ll get the res (response)
//   */
//   axios.get('https://api.chucknorris.io/jokes/random')
//     .then(res => {
//       state.joke = res.data.value
//     })
// }

const searchForJokes = async () => {
  console.log(state.searchQuery)
  clearTimeout(state.queryTimeout)
  state.queryTimeout = setTimeout(async () => {
    if (state.searchQuery !== '') {
      const res = await axios(
        `https://api.chucknorris.io/jokes/search?query=${state.searchQuery}`
      )
      const getJokes = res.data.result
      
      // Math.random() returns a random number between 0 and 1. So, Math.random() < 0.3 will evaluate to true for approximately 30% of the elements in the array, and to false for the remaining 70%.
      // It is important to note that, the comparison expression (< 0.3) is used to limit the number of elements that are selected from the array. Without this comparison expression, the filter method will return the original array without any changes.
      // state.jokeData = getJokes.filter(() => Math.random() < 0.3).slice(0, 3)

      state.jokeData = getJokes.sort(() => Math.random() - 0.5).slice(0, 3)
    }
  }, 600)
}


</script>
