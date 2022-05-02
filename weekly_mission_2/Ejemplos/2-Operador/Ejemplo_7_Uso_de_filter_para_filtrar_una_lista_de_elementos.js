// Ejemplo 7: Uso de filter para filtrar una lista de elementos
//console.log("Ejemplo 7: Uso de filter para filtrar una lista de elementos")

const countries7 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']

console.log("Paises que terminan en land:")
const countriesContainingLand = countries7.filter((country) => // esta es una función
  country.includes('land') // indicación para solo filtrar elementos que incluyan "land"
)
console.log(countriesContainingLand)

console.log("Paises que terminan en den:")
const countriesEndsByden = countries7.filter((country) => 
country.endsWith('den')
)
console.log(countriesEndsByden)

console.log("Paises que terminan en ark:")
const countriesEndsByark = countries7.filter((country) => 
country.endsWith('ark')
)
console.log(countriesEndsByark)

console.log("Paises que terminan en way:")
const countriesEndsByway = countries7.filter((country) => 
country.endsWith('way')
)
console.log(countriesEndsByway)