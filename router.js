let ancors = document.querySelectorAll( "nav a" )

// const route = ( even ) =>
// {
//   even = even || window.even;
//   even.preventDefault()
//   window.history.pushState( {}, "", even.target.href );
// };
const route = ( e ) =>
{
  e = e || window.e
  e.preventDefault()
  window.history.pushState({}, "",e.target.href)
}


ancors.forEach( ancor =>
  {
    ancor.addEventListener("click", route)
  })

const routes = {
  404:"/404.html",
  "/": "/index.html",
  "/about": "/about.html",
  "/lorem":"/lorem.html"
}


let handleLocation = async () =>
{
  const path = window.location.pathname;
  const route =routes[path] || routes[404]
  const html  = await fetch(route).then(data=>data.text())
  document.getElementById("main-page").innerHTML = html
}  
window.onpopstate = handleLocation
  
handleLocation()
  
  
  
  
window.route = route;

