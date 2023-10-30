const capitalise = (input) => {
  if (input === '') {
    return input
  }



   else if (input[0] === input[0].toUpperCase()){
    return input[0] + input.slice(1).toLowerCase()
  }
  else {
    let first = input[0]
    const rest = input.slice(1)

  const restlower = rest.toLowerCase()
  const firstUpper = first.toUpperCase()
  const word = firstUpper + restlower
  return word}


}

// Do not delete the code below 🙏

module.exports = {
  capitalise
}
