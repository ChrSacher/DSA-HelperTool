<template>
  <div >
     
      Wähle die Rasse deines Helden!
      <div>
        <div class="buttonRadioGroup" v-for="(spezie,i) in spezien" v-bind:key="i">
          <label class=""><input type="radio" name="toggle" v-model="selectedSpezies" :value="spezie"><span>{{spezie.name}}</span></label>
        </div>
        <SpeciesInfo class="infoPanel" :species="selectedSpezies"></SpeciesInfo>
      </div>
      <div class="below">
        <md-button md-ripple class="md-raised md-primary " @click="$router.push({name:'hero-generator'})">Zurück zur Heldengallerie</md-button>
        <md-button md-ripple class="md-raised md-primary ">Weiter zur Namensgebung</md-button>
      </div>
  </div>
</template>

<script>
import Spezien from '@/data/spezien'
// import CharacterModel from '@/containers/models/CharacterModel'
import SpeciesInfo from '@/components/HeroGenerator/InformationComponents/SpeciesInfo'
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
    SpeciesInfo
  },
  data () {
    return {
      character: {},
      spezien: Spezien,
      selectedSpezies: {}
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
.buttonRadioGroup {
    margin:4px;
}

.buttonRadioGroup label {
    float:left;
    width:170px;
    margin:4px;
    background-color:#EFEFEF;
    border-radius:4px;
    border:1px solid #D0D0D0;
    overflow:auto;

}

.buttonRadioGroup label span {
    text-align:center;
    font-size: 32px;
    padding:13px 0px;
    display:block;
}

.buttonRadioGroup label input {
    position:absolute;
    top:-20px;
}

.buttonRadioGroup input:checked + span {
    background-color:#a09e9e;
    color:#F7F7F7;
}
.below {
  float: left;
  clear: both;
}
.wrapper {
    display: flex;
     flex-wrap: wrap;
  }
  .infoPanel{
    width: 100%;
    padding: 30px;
  }
</style>
