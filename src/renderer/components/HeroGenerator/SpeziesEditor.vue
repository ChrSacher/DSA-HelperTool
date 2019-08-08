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
import Spezien from '@/data/spezien'
import CharacterModel from '@/containers/models/CharacterModel'
export default {
  name: 'SpeziesWähler',
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
      character: {},
      spezien: Spezien,
      first: {
        name: 'test'
      },
      second: {
        name: 'test'
      },
      third: CharacterModel
    }
  },
  created () {
    this.character = this.lodash.cloneDeep(this.templateCharacter)
    var first = Object.create(CharacterModel)

    var second = Object.create(CharacterModel)
    console.log(first)
    first.spells.getName()
    second.spells.getName()
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
