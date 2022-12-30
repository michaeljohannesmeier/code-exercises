<template>
  <div class="container flex flex-col items-center">
    <h1 class="text-2xl font-semibold text-lime-900 mt-4">Hola Mike!</h1>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
      @click="state.count++"
    >
      Calculate
    </button>
    <p class="text-2xl font-semibold text-lime-900 mt-2">
      {{ state.count }} times clicked
    </p>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
      @click="printRandomNumberAfter2Seconds"
    >
      Print random number after 2 seconds
    </button>
    <p class="text-2xl font-semibold text-lime-900 mt-2">
      {{ state.randomNumber }}
    </p>

    <div
      class="joke-container mt-20 bg-fuchsia-200 rounded p-10 text-center shadow-md"
    >
      <h2 class="text-2xl">The great Chuck</h2>
      <h3 class="text-1xl mt-10">{{ state.joke }}</h3>
      <button
        class="bg-rose-400 hover:bg-rose-500 text-white font-bold p-2 rounded-md mt-16"
        @click="getRandomJoke"
      >
        Give a thought, great Chuck
      </button>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {},

  setup() {
    const state = reactive({ count: 0, joke: null, randomNumber: null });

    const getRandomJoke = () => {
      /* 
        - this is the short versino of getRandomJoke2
        - axios makes the request, and then you ll get the res (response), but see getRandomJoke2 to better understand
      */
      axios.get('https://api.chucknorris.io/jokes/random').then((res) => {
        state.joke = res.data.value;
      });
    };

    const getRandomJoke2 = () => {
      /*
        - getRandomJok2 is a different way to do the same thing as getRandomJoke (only a bit longer)
        - axios calls the endpoint and in .then it expects a function (processResult in our case)
        - when axios did the call, it will call this function
        - and it will pass, as a first argument, the result from the api
        - the result has some meta information about the request (like status code) and also the data under .data
       */
      axios.get('https://api.chucknorris.io/jokes/random').then(processResult);
    };

    const processResult = (resultFromAxios) => {
      /* This function is never called from you in the code, its called from axios after the job is done. We just pass it as an argument to another function (the then function) */
      console.log(resultFromAxios);
      state.joke = resultFromAxios.data.value;
    };

    const printRandomNumberAfter2Seconds = () => {
      /* 
        - this is just an example to show you another function, which expects a function as an input and it will call this function then automatically if "something" happens
        - how to do the 2 seconds waiting??
        - therefore, we can use setTimeout. Its an inbuild javascript function
        - it expects a function as the first argument and a time in milliseconds as the second argument
        - it then will call the function after the milliseconds have passe
      */
      setTimeout(setRandomNumberToState, 2000);
    };

    const setRandomNumberToState = () => {
      /* this functin is never called from you in the code, its called from setTimeout */
      state.randomNumber = Math.random();
    };

    return {
      getRandomJoke,
      getRandomJoke2,
      printRandomNumberAfter2Seconds,
      state,
    };
  },
};
</script>
