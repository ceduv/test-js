
let tabs = () => {

  let tabs = document.querySelectorAll('.tabs a')
  // nodelist

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', (e) => {
      let li = e.target.parentNode
      let div = e.target.parentNode.parentNode.parentNode

      // stop the reload
      e.preventDefault()

      // if click on active tabs
      if(li.classList.contains('active')){
        return false
      }

      // remove active class tabs
      div.querySelector('.tabs .active').classList.remove('active')
      // add active on click tabs
      li.classList.add('active')

      // remove active on content
      div.querySelector('.tabs-content .active').classList.remove('active')
      // add active class on content by attribute
      div.querySelector(e.target.getAttribute('href')).classList.add('active')

    })
  }

}


export {tabs}
