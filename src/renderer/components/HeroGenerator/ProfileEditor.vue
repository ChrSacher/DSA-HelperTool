<template>
  <div >
       <div class="InputField">
        <label for="Charactername">Charactername</label>
        <input type="text" id="Charactername" v-model="character.name" placeholder="Der Name deines Characters">
      </div>
  </div>
</template>

<script>
  
  export default {
    name: 'ProfileEditor',
    props: {
  
    },
    components: {

    },
    data () {
      return {
        character: {}
      }
    },
    created () {
  
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>
