import Eigenschaften from '../data/eigenschaften'
const EigenschaftenHelper = (function () {
  function getEigenschaftByID (id = 99) {
    return Eigenschaften.find(eig => eig.id === id)
  }
  function getEigenschaftByTag (tagName = '') {
    return Eigenschaften.find(eig => eig.tag === tagName)
  }
  function getEigenschaftByName (name = '') {
    return Eigenschaften.find(eig => eig.name === name)
  }

  // Reveal public pointers to
  // private functions and properties

  return {
    getEigenschaftByID,
    getEigenschaftByTag,
    getEigenschaftByName
  }
}())

export default EigenschaftenHelper
