
let page3 = () => {


  if (document.querySelector('.page3')){
    fetch("http://localhost:3000/posts.json")
      .then(response => response.json())
      .then((data) => {
        console.log(data.length)
      })
  }

  setInterval(myTimer, 1000);

  function myTimer() {

  }
}


export { page3 }
