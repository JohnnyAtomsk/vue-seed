<template>
  <div id="app">
    <header></header>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './components/_header/header'

export default {
  name: 'App',

  components: {
    Header
  }
}
</script>
