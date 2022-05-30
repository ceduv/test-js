const test = () => {
  let p = document.querySelector('p')
  p.addEventListener('click', (event) => {
    console.log("connect")
    p.innerText = 'test'
  })

}
export {test}
