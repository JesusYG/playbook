// Ejemplo 12: Uso de find en una lista de objetos
const scores12 = [
    { name: 'A', score: 80 },
    { name: 'M', score: 80 },
    { name: 'E', score: 50 },
    { name: 'N', score: 85 },
    { name: 'J', score: 90 },
  ]
  
  const score_less_than_80 = scores12.find((user) => user.score > 80)
  console.log("Ejemplo 12. Primer usuario con score mayor a 80:" + score_less_than_80.name)