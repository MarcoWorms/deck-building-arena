const randomIndex = array =>
  Math.floor(Math.random() * array.length)

export const randomFromArray = array => array[randomIndex(array)]
