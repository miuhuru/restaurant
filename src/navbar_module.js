const tabs = document.querySelectorAll("[data-tab-target]")

function createNavbar() {
  const navbar = document.createElement("div");
  document.body.appendChild(navbar);
  console.log(navbar)
  const home = document.createElement("li");
  const menu = document.createElement("li");
  const contact = document.createElement("li");

  navbar.classList.add("navbar")
  navbar.appendChild(home);

  navbar.appendChild(menu);
  navbar.appendChild(contact);
  home.classList.add("home");
  home.dataset.tabTarget = "#home"
  menu.classList.add("menu");
  menu.dataset.tabTarget = "#menu"
  contact.classList.add("contact");
  contact.dataset.tabTarget = "#contact"

  home.innerText = "HOME";
  menu.innerText = "MENU";
  contact.innerText = "CONTACT";
  
  return navbar, home, menu, contact;
}

function createTabContent() {
  const tabContent = document.createElement("div")
  tabContent.classList.add("tab-content")
  document.body.appendChild(tabContent)
  return tabContent
} 

export { createNavbar, createTabContent, tabs };
