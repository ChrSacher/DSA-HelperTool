<template>
  <div class="wrapper" v-if="species && species.name">
      <div  class="Field">
         <b>Name:</b> {{species.name}}
      </div>
      <div  class="Field">
         <b>AP Kosten:</b> {{species.apWert}}
      </div>
      <div  class="Field">
         <b>Basis Lebensenergie:</b> {{species.basisLebensEnergie}}
      </div>
      <div  class="Field">
         <b>Basis Seelenkraft:</b> {{species.basisSeelenkraft}}
      </div>
      <div  class="Field">
         <b>Basis Zähigkeit:</b> {{species.basisZähigkeit}}
      </div>
      <div  class="Field">
         <b>Basis Geschwindigkeit:</b> {{species.basisGeschwindigkeit}}
      </div>
      <div  class="Field">
         <b>Veränderungen:</b> {{species.eigenschaftsänderungen.text}}
      </div>

  </div>
</template>

<script>
export default {
  name: 'SpeciesInfo',
  props: {
    species: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  computed: {

  },
  components: {
  },
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style scoped>
.wrapper {
    display: block;

  }
  .Field {
    padding-right: 30px;
    width: 100%;
  }
</style>
