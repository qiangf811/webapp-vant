<template>
  <div id="app">
    <tab-bar/>
    <line-content/>
   
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        active: 'home'
      }
    }
  }
</script>