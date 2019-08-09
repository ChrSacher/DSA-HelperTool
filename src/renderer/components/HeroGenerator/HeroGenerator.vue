<template>
  <div>
     <md-tabs class="md-transparent" md-alignment="fixed">
      <md-tab id="tab-home" md-label="Spezieneditor" exact>
        <SpeziesEditor :templateCharacter="character"></SpeziesEditor>
      </md-tab>
      <md-tab id="tab-profil" md-label="Profil" >
        <ProfileEditor></ProfileEditor>
      </md-tab>
      <md-tab id="tab-eigenschaften" md-label="Eigenschaften" >
        <EigenschaftenEditor></EigenschaftenEditor>
      </md-tab>
      <md-tab id="tab-vorteile" md-label="Vor/Nachteile" >
        <VorNachteilEditor></VorNachteilEditor>
      </md-tab>
      <md-tab id="tab-fertigkeiten" md-label="Fertigkeiten" >
        <FertigkeitenEditor></FertigkeitenEditor>
      </md-tab>
      <md-tab id="tab-kampftechniken" md-label="Kampftechniken">
        <KampftechnikenEditor></KampftechnikenEditor>
      </md-tab>
      <md-tab id="tab-zauber" md-label="Zauber">
        <ZauberEditor></ZauberEditor>
      </md-tab>
      <md-tab id="tab-liturgien" md-label="Liturgien">
        <LiturgienEditor></LiturgienEditor>
      </md-tab>
      <md-tab id="tab-ausrüstung" md-label="Ausrüstung">
        <gearEditor></gearEditor>
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
  import SpeziesEditor from '@/components/HeroGenerator/SpeziesEditor'
  import ProfileEditor from '@/components/HeroGenerator/ProfileEditor'
  import EigenschaftenEditor from '@/components/HeroGenerator/EigenschaftenEditor'
  import VorNachteilEditor from '@/components/HeroGenerator/VorNachteilEditor'
  import FertigkeitenEditor from '@/components/HeroGenerator/FertigkeitenEditor'
  import KampftechnikenEditor from '@/components/HeroGenerator/KampftechnikenEditor'
  import ZauberEditor from '@/components/HeroGenerator/ZauberEditor'
  import LiturgienEditor from '@/components/HeroGenerator/LiturgienEditor'
  import gearEditor from '@/components/HeroGenerator/gearEditor'
  import Character from '@/containers/models/CharacterModel'
  export default {
    name: 'HeroGenerator',
    props: {
      templateCharacter: {
        type: Object,
        default: function getDefaultCharacter () {
          return {}
        }
      }
    },
    components: {
      SpeziesEditor,
      ProfileEditor,
      EigenschaftenEditor,
      VorNachteilEditor,
      FertigkeitenEditor,
      KampftechnikenEditor,
      ZauberEditor,
      LiturgienEditor,
      gearEditor
    },
    data () {
      return {
        character: {}
      }
    },
    created () {
      if (!this.templateCharacter || this.lodash.isEmpty(this.templateCharacter)) {
        this.character = Object.create(Character)
      } else {
        this.character = this.templateCharacter
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>
