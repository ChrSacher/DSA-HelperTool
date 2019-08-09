import Eigenschaften from './eigenschaften'

const Spezien = {
  elf: {
    id: 0,
    tag: 'Elf',
    name: 'Elf(in)',
    apWert: 18, // Abenteuerpunkte
    basisLebensEnergie: 2,
    basisSeelenkraft: -4,
    basisZähigkeit: -6,
    basisGeschwindigkeit: 8,
    eigenschaftsänderungen: {
      text: 'IN + 1, GE + 1',
      change: [
        {
          eigenschaft: Eigenschaften.Intuition.tag,
          wert: 1
        },
        {
          eigenschaft: Eigenschaften.Gewandtheit.tag,
          wert: 1
        }
      ]
    }
  }
}

export default Spezien
