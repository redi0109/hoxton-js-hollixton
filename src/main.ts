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
    appEl.append(headerEl)

    let leftHeaderEl = document.createElement('div')
    leftHeaderEl.className='left_header'
    headerEl.append(leftHeaderEl)

    let headerLogoEl = document.createElement('h1')
    headerLogoEl.className = 'header_logo'
    headerLogoEl.textContent = 'Hollixton'
    leftHeaderEl.append(headerLogoEl)

    let headerNavEl = document.createElement('nav')
    leftHeaderEl.append(headerNavEl)

    let headerNavListEl = document.createElement('ul')
    headerNavListEl.className = 'header_nav_list'
    headerNavEl.append(headerNavListEl)

    let headerNavItemEl = document.createElement('li')
    headerNavItemEl.className = 'header_nav_item'

}
