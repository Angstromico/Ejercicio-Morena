type Brands = 'Adidas' | 'Nike' | 'Puma' | 'Reebok'
const PersonInfo = [
  { name: 'Morena', age: 15, brand: 'Adidas', sex: 'Female' },
  { name: 'Demian', age: 18, brand: 'Nike', sex: 'Male' },
  { name: 'Veronica', age: 48, brand: 'Puma', sex: 'Female' },
  { name: 'Agustin', age: 53, brand: 'Reebok', sex: 'Male' },
]
let Adidas = 0
let Nike = 0
let Puma = 0
let Reebok = 0
const countBrands = (brand: Brands) => {
  if (brand === 'Adidas') {
    Adidas++
    console.log('Adidas: ', Adidas)
  } else if (brand === 'Reebok') {
    Reebok++
    console.log('Reebok: ', Reebok)
  } else if (brand === 'Puma') {
    Puma++
    console.log('Puma: ', Puma)
  } else {
    Nike++
    console.log('Nike: ', Nike)
  }
}
PersonInfo.forEach((person) => {
  countBrands(person.brand)
})
