<template>
  <div id="app">
    
    <message>hello there</message>
    <message>hi</message>

    <counter></counter>

  </div>
</template>

<script>
import Message from './components/Message.vue';

import Counter from './components/Counter.vue';

export default {
  name: 'app',

  components: { 'message': Message,
   		'counter': Counter },

  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
