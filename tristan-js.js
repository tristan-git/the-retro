//Responsive nav mobile

const getMenuDesktopLink = document.querySelectorAll(".linkDesktop");
const getMenuMobileLink = document.getElementById("mobile-nav-ul");
for (let i = 0; i < getMenuDesktopLink.length; i++) {
  getMenuMobileLink.innerHTML += getMenuDesktopLink[i].outerHTML;
}

const burgerClose = document.getElementsByClassName("burger-close");
const burgerOpen = document.getElementsByClassName("burger-open");
const navToDisplay = document.getElementById("mobile-nav");

const open = () => navToDisplay.classList.add("open");
burgerOpen[0].addEventListener("click", open);

const close = () => navToDisplay.classList.remove("open");
burgerClose[0].addEventListener("click", close);

// const autoBuildNavAndTitles = () => {
//     const findAllH1string = document.querySelectorAll("h1");
//     const findSidebarMenu = document.getElementById("sidebar-nav");

//     for (let i = 0; i < findAllH1string.length; i++) {
//       document.getElementsByTagName("H1")[i].setAttribute("id", i);
//       document.querySelectorAll("h1 > span")[i].innerHTML = i + 1;
//       document
//         .getElementsByTagName("section")
//         [i].setAttribute("class", "section");
//       let = generateLink = `<li class="menu-link-item" ><a href="#${i}">${findAllH1string[i].textContent}</a></li>`;
//       findSidebarMenu.innerHTML += generateLink;
//     }
//   };
