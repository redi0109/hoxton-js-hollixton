import './style.css'

let state = {
}

function render (){
  let appEl = document.querySelector('#app')
  if (!appEl)  return
    appEl.textContent = ''

  
    // <header>
    //   <div class="left_header">
    //   <h1 class="header_logo"><a href="">Hollixton</a></h1>
    //   <nav>
    //     <ul class="header_nav_list">
    //     <li class="header_nav_item"> <a class="category" href="">Girls</a> </li>
    // <li class="header_nav_item"> <a class="category" href="">Guys</a> </li>
    // <li class="header_nav_item"><a class="category" href="">Sale</a></li>
 
    //     </ul>
    //   </nav>
    // </div>
    // <div class="right_header">
    //   <nav>
    //     <ul class="header_nav_list">
    //       <li class="header_nav_item">🔍</li>
    //       <li class="header_nav_item">🧑</li>
    //       <li class="header_nav_item">👜</li>
    //     </ul>
    //   </nav>
    // </div>
    // </header>

    let headerEl = document.createElement('header')
    appEl.append(headerEl)

    let leftHeaderEl = document.createElement('div')
    leftHeaderEl.className = 'left_header'
    headerEl.append(leftHeaderEl)

    let headerLogoEl = document.createElement('h1')
    headerLogoEl.className = 'header_logo'
    headerLogoEl.textContent = 'Hollixton'
    leftHeaderEl.append(headerLogoEl)

    let headerNavEl = document.createElement('nav')
    leftHeaderEl.append(headerNavEl)

    let headerNavListEl = document.createElement('ul')
    headerNavListEl.className =  'header_nav_list'
    headerNavEl.append(headerNavListEl)

    let headerNavItemEl = document.createElement('li')
    headerNavItemEl.className = 'header_nav_item'
    headerNavListEl.append(headerNavItemEl)

    let headerNavItemAEl = document.createElement('a')
    headerNavItemAEl.className = 'category'
    headerNavItemAEl.textContent = 'Girls'
    headerNavItemEl.append(headerNavItemAEl)

    let headerNavItemAEl2 = document.createElement('a')
    headerNavItemAEl2.className = 'category'
    headerNavItemAEl2.textContent = 'Guys'
    headerNavItemEl.append(headerNavItemAEl2)

    let headerNavItemAEl3 = document.createElement('a')
    headerNavItemAEl3.className = 'category'
    headerNavItemAEl3.textContent = 'Sale'
    headerNavItemEl.append(headerNavItemAEl3)
    
    let rightHeaderEl = document.createElement('div')
    rightHeaderEl.className = 'right_header'
    headerEl.append(rightHeaderEl)

    let rightHeaderNavEl = document.createElement('nav')
    rightHeaderEl.append(rightHeaderNavEl)

    let rightHeaderNavListEl = document.createElement('ul')
    rightHeaderNavListEl.className = 'header_nav_list'
    rightHeaderNavEl.append(rightHeaderNavListEl)

    let rightHeaderNavItemEl = document.createElement('li')
    rightHeaderNavItemEl.className = 'header_nav_item'
    rightHeaderNavItemEl.textContent = '🔍'
    rightHeaderNavListEl.append(rightHeaderNavItemEl)

    let rightHeaderNavItemEl2 = document.createElement('li')
    rightHeaderNavItemEl2.className = 'header_nav_item'
    rightHeaderNavItemEl2.textContent = '🧑'
    rightHeaderNavListEl.append(rightHeaderNavItemEl2)

    let rightHeaderNavItemEl3 = document.createElement('li')
    rightHeaderNavItemEl3.className = 'header_nav_item'
    rightHeaderNavItemEl3.textContent = '👜'
    rightHeaderNavListEl.append(rightHeaderNavItemEl3)


  //   <main>
  //   <div class="main_home">
  //     <h3 class="category_name">Home</h3>
  //     <div class="products">
  //       <div class="item">
  //         <img class="product_img" src="https://imgs.search.brave.com/kfs2hEYN5xUzGWExL63OosT6Jhgp-Rv0hk5FT24cp9k/rs:fit:700:1053:1/g:ce/aHR0cHM6Ly9pbWcu/cGlrYmVzdC5jb20v/MDEvNjAvNzUvODN2/cElrYkVzVGhway5q/cGctMC5qcGchYnc3/MDA" alt="">
  //         <div class="product_details">
  //         <h4 class="item_name">Product Name</h4>
  //         <p class="price">$100</p>
  //       </div>
  //       </div>

   let mainEl = document.createElement ('main')
    appEl.append (mainEl)

    let mainHomeEl = document.createElement ('div')
    mainHomeEl.className = 'main_home'
    mainEl.append (mainHomeEl)

    let categoryNameEl = document.createElement ('h3')
    categoryNameEl.className = 'category_name'
    categoryNameEl.textContent = 'Home'
    mainHomeEl.append (categoryNameEl)

    let productsEl = document.createElement ('div')
    productsEl.className = 'products'
    mainHomeEl.append (productsEl)

    let itemEl = document.createElement ('div')
    itemEl.className = 'item'
    productsEl.append (itemEl)
    
    let productImgEl = document.createElement ('img')
    productImgEl.className = 'product_img'
    productImgEl.src = 'https://imgs.search.brave.com/kfs2hEYN5xUzGWExL63OosT6Jhgp-Rv0hk5FT24cp9k/rs:fit:700:1053:1/g:ce/aHR0cHM6Ly9pbWcu/cGlrYmVzdC5jb20v/MDEvNjAvNzUvODN2/cElrYkVzVGhway5q/cGctMC5qcGchYnc3/MDA'
    itemEl.append (productImgEl)

    let productDetailsEl = document.createElement ('div')
    productDetailsEl.className = 'product_details'
    itemEl.append (productDetailsEl)

    let itemNameEl = document.createElement ('h4')
    itemNameEl.className = 'item_name'
    itemNameEl.textContent = 'Product Name'
    productDetailsEl.append (itemNameEl)

    let priceEl = document.createElement ('p')
    priceEl.className = 'price'
    priceEl.textContent = '$100'
    productDetailsEl.append (priceEl)



}

render ()