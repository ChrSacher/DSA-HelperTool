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
      veränderung: [
        {
          eigenschaft: 'IN',
          wert: 1
        },
        {
          eigenschaft: 'GE',
          wert: 1
        }
      ]
    }
  }
}

export default Spezien
