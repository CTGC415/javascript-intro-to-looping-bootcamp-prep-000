function forLoop (array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array[array.length + 1] = "I am 1 strange loops."
    }
    else {
      array[array.length + 1] = "I am ${i} strange loops."
    }
  }
  return array
}