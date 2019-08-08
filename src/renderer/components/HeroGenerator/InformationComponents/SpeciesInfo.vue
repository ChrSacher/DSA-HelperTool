<template>
  <div >
      <div class="InputField">
        <label for="Charactername">Charactername</label>
        <input type="text" id="Charactername" v-model="character.name" placeholder="Der Name deines Characters">
      </div>
      Wähle die Rasse deines Helden!
      <div v-for="(spezie,i) in spezien" v-bind:key="i">
        <Button>{{spezie.name}}</Button>
      </div>

      <button @click="$router.push({name:'hero-generator'})">Zurück zur Heldengallerie</button>
      <button>Weiter zur Namensgebung</button>
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
    display: flex;
     flex-wrap: wrap;
  }
  .InputField{
    width: 300px;
    padding: 30px;
  }
</style>
