import './style.css'

let state = {
}

function render (){
  let appEl = document.querySelector('#app')
  if (!appEl)  return
    appEl.textContent = ''

    // <header>
    //     <div class="left_header">
    //     <h1 class="header_logo">Hollixton</h1>
    //     <nav>
    //       <ul class="header_nav_list">
    //       <li class="header_nav_item">Girls</li>
    //       <li class="header_nav_item">Guys</li>
    //       <li class="header_nav_item">Sale</li>
    //       </ul>
    //     </nav>
    //   </div>
    //   <div class="right_header">
    //     <nav>
    //       <ul class="header_nav_list">
    //         <li class="header_nav_item">🔍</li>
    //         <li    class="header_nav_item">🧑</li>
    //         <li class="header_nav_item">👜</li>
    //       </ul>
    //     </nav>
    //   </div>
    //   </header> 

    let headerEl = document.createElement('header')
    appEl.appendChild(headerEl)

    let leftHeaderEl = document.createElement('div')
    leftHeaderEl.classList.add('left_header')
    headerEl.appendChild(leftHeaderEl)

    let headerLogoEl = document.createElement('h1')
    headerLogoEl.classList.add('header_logo')
    headerLogoEl.textContent = 'Hollixton'
    leftHeaderEl.appendChild(headerLogoEl)

    let headerNavEl = document.createElement('nav')
    leftHeaderEl.appendChild(headerNavEl)

    let headerNavListEl = document.createElement('ul')
    headerNavListEl.classList.add('header_nav_list')
    headerNavEl.appendChild(headerNavListEl)

    let headerNavItemEl = document.createElement('li')
    headerNavItemEl.classList.add('header_nav_item')

}
