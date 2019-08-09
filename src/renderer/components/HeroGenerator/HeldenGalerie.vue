<template>
  <div class="wrapper">
    <md-button md-ripple class="md-raised" @click="$router.push({name:'hero-generator-spezieneditor'})">Neuen Charakter erstellen</md-button>
  </div>
</template>

<script>
  
  export default {
    name: 'HeldenGalerie',
    props: {
      templateCharacter: {
        type: Object,
        default: function getDefaultCharacter () {
          return {}
        }
      }
    },
    components: {

    },
    data () {
      return {
        character: {}
      }
    },
    created () {
      this.character = this.lodash.cloneDeep(this.templateCharacter)
    },
    methods: {
    }
  }
</script>

<style scoped>
  
</style>
