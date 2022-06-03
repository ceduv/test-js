
let page2 = () => {
  if (document.querySelector('.page2')){
    // return scroll pixel Y
    let scrollY = () => {
      let supportPageOffset = window.pageXOffset !== undefined;
      let isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
      return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    }

    let elements = document.querySelectorAll('[data-sticky]')
    for(let i = 0; i < elements.length ; i++){
      (function (element){
        // let element = document.querySelector('.menu')
        let rect = element.getBoundingClientRect()
        let top = rect.top + scrollY()
        let offset = parseInt(element.getAttribute('data-offset') || 0 , 10)

        // fake element
        let fake = document.createElement('div')
        fake.style.width = rect.width + "px"
        fake.style.height = rect.height + "px"

        // FUNCTIONS
        // add/remove fixed on navbar
        let onScroll = () => {
          let hasScrollClass = element.classList.contains('fixed')

          if (scrollY() > top - offset && !hasScrollClass) {
            element.classList.add('fixed')
            element.style.width = rect.width + "px"
            element.style.top = offset + "px"
            element.parentNode.insertBefore(fake, element)
            console.log('add')
          } else if (scrollY() < top - offset && hasScrollClass) {
            element.classList.remove('fixed')
            element.parentNode.removeChild(fake)
            console.log('remove')
          }
        }

        // resize navbar
        let onResize = () => {
          element.style.width = "auto"
          element.classList.remove('fixed')
          fake.style.display = "none"
          rect = element.getBoundingClientRect()
          top = rect.top + scrollY()
          fake.style.width = rect.width + "px"
          fake.style.height = rect.height + "px"
          fake.style.display = "block"
          onScroll()
        }

        // Listener
        window.addEventListener('scroll', onScroll)
        window.addEventListener('resize', onResize)

      })(elements[i])
    }

  }
}


export { page2 }
