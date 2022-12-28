<template>
  <h1 class="text-2xl font-semibold text-lime-900">Hola Mau!</h1>
  <div class="mt-20">Well done, now add a click listener to the calculate button. After pressing the button, the number 1 should be displayed "HERE". After clicking 2 time, 2 should be displayed and so on. Should be an easy task.</div>
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6">Calculate</button>
  <div class="mt-20">HERE</div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.mt-20 {
  margin-top: 20px;
}
</style>
