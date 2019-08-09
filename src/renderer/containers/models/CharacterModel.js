const Character = {
  name: 'test',
  family: '',
  gender: '',
  species: {},
  culture: {},
  skills: [],
  birthPlace: '',
  birthDate: '',
  age: 0,
  hairColor: '',
  size: 0,
  weight: 0,
  title: '',
  sozialclass: '',
  characteristika: '',
  addiotinal: '',
  locationKnowledge: '',
  profile: {},
  getName: function () {
    console.log(this.name)
  },
  setSpecies: function (newSpec) {
    this.species = newSpec
  },
  addSkill: function () {
  },
  removeSkill: function () {
  },
  evaluateSkills: function () {
  }
}
export default Character
