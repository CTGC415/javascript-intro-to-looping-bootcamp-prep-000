function forLoop (array) {
  for (let i = 0; i < 25; i++) {
    array[array.length + 1] = `I am ${i} strange loops.`
  }
  return array
}