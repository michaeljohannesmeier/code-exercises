<template>
  <div class="container flex flex-col items-center">
    <div class="flex flex-col items-center">
      <h1 class="text-2xl font-semibold text-lime-900 mt-4">Hola Amigo!</h1>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
        @click="sortMe"
      >
        Sort me
      </button>
      <p class="text-2xl font-semibold text-lime-900 mt-2">
        {{ state.dataToSort }}
      </p>
    </div>

    <div class="flex flex-col items-center">
      <input
        type="text"
        placeholder="Search for a joke"
        v-model="state.searchQuery"
        class="px-2 py-1 text-black mt-20 bg-slate-300 border-b focus:border-slate-600 focus:outline-none focus:shadow-md"
      />
      <button
        class="bg-rose-400 hover:bg-rose-500 text-white font-bold p-2 rounded-md mt-2"
        @click="getJokes"
      >
        Give me a Joke
      </button>
      <!-- <p v-if="!serverError && jokes.lenth === 0">No result match, try again</p> -->
      <div
        v-if="state.jokes.length > 0"
        class="joke-container mt-5 bg-fuchsia-200 rounded p-10 mx-10 text-center shadow-md"
      >
        <h2 class="text-3xl border-b-2">The great Chuck!</h2>
        <h3 class="text-2xl mt-10 text-black">
          {{ state.joke }}
          <li v-for="(joke, index) in state.jokes" :key="index" class="mb-5">
            {{ joke.value }}
          </li>
        </h3>
      </div>
    </div>
  </div>
</template>

<script setup>
// ref and reactive are the same?

import { reactive } from 'vue';
import axios from 'axios';

const state = reactive({
  dataToSort: ['Beta', 'Alpha', 'Gamma', 0, 10, '&'],
  searchQuery: '',
  jokes: [],
});

const jokeAPI = 'https://api.chucknorris.io/jokes/random';

const getJokes = () => {
  if (state.searchQuery) {
    getJokeBySearch();
  } else {
    getRandomJoke();
  }
};

const getRandomJoke = async () => {
  const result = await axios(jokeAPI);
  state.jokes = [result.data];
};

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

const getJokeBySearch = async () => {
  const res = await axios(
    `https://api.chucknorris.io/jokes/search?query=${state.searchQuery}`
  );
  const jokes = res.data.result;

  // Math.random() returns a random number between 0 and 1. So, Math.random() < 0.3 will evaluate to true for approximately 30% of the elements in the array, and to false for the remaining 70%.
  // It is important to note that, the comparison expression (< 0.3) is used to limit the number of elements that are selected from the array. Without this comparison expression, the filter method will return the original array without any changes.
  // state.jokesData = jokes.filter(() => Math.random() < 0.3).slice(0, 3)

  // Math.random will be something between 0 and 1, so lets say
  //   - its 0.2, then 0.2 - 0.5 will be < 0
  //   - its 0.6, then 0.6 - 0.5 will be > 0

  // Sort start and opens new emty array result = []
  // This happens for all jokes: 
  //   - so loop 1: Matho.random = 0.2 => return values < 0 => order of joke1 and joke2 stays the same => result = [joke1, joke2]
  //   - so loop 2: Matho.random = 0.6 => return values > 0 => order of joke2 and joke3 switches       => result = [joke1, joke3, joke2]
  //   - so loop 2: Matho.random = 0.7 => return values > 0 => order of joke2 and joke4 switches       => result = [joke1, joke3, joke4, joke2]
  //   - so loop 2: Matho.random = 0.1 => return values > 0 => order of joke2 and joke5 stays the same => result = [joke1, joke3, joke4, joke2, joke5]

  state.jokes = jokes.sort(() => Math.random() - 0.5).slice(0, 3);
};

const sortMe = () => {
  /*
   * - Sort is a function
   * - As a first argument, it expects a function which returns a number
   * - Sort opens a new array internally and puts elements into the new array for every loop
   * - The function will be called by sort passing two values (value1 and value2), starting with the first two values
   *     - then passing the last value of the new array and the 3. element, so the second time, the values will be (lastValue, value3)
   *     - then passing the last value of the new array and the 4. element, so the second time, the values will be (lastValue, value4)
   *     - then passing the last value of the new array and the 5. element, so the second time, the values will be (lastValue, value5)
   * - If the number, which is returned is < 0, then value1 will be places before value2
   * - If the number, which is returned is > 0, then value2 will be places before value1
   * - If the number, which is retunred is = 0, then value1 will be placed before value2
   * - see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   *  
  */
  state.dataToSort = state.dataToSort.sort((value1, value2) => {

    // shortcut: state.dataToSort.sort((value1, value2) => value1 > value2 ? 1 : -1)
    if (value1 > value2) {
      return 1;
    } else {
      return -1;
    }
  });
};
</script>
