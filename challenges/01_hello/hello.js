
// Do not delete the code below 🙏
function hello(name) {
  if (name.length === 0) {
    return 'no empty strings allowed'
  }
 else if (typeof name === null) {
    return 'Hello Stranger'
  }
  else{
  return `Hello ${name}`
}}
module.exports = {
  hello
}
