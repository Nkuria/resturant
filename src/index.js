const body = document.getElementById('content');
function navigation () {
    // const body = document.getElementById('content');
    const navBar = document.createElement('div');
    navBar.classList.add('nav-bar');
    body.appendChild(navBar);

    const homeLink = document.createElement('a');
    homeLink.classList.add('nav-link');
    const homeLinkText = document.createTextNode("Home");
    homeLink.appendChild(homeLinkText);
    navBar.appendChild(homeLink);

    const menuLink = document.createElement('a');
    menuLink.classList.add('nav-link');
    const menuLinkText = document.createTextNode("Menu");
    menuLink.appendChild(menuLinkText);
    navBar.appendChild(menuLink);

    const contactLink = document.createElement('a');
    contactLink.classList.add('nav-link');
    const contactLinkText = document.createTextNode("Contact");
    contactLink.appendChild(contactLinkText);
    navBar.appendChild(contactLink);

    contactLink.addEventListener('click', () => {console.log("hello")}  );

}
// function newElem(name, element) {
//     const name = document.createElement(element);
// }
function homePage() {
    const mainContainer = document.createElement('div');
    mainContainer.classList.add("main-container-home");
    body.appendChild(mainContainer);
    
    function leftGrid() {
    const leftHome = document.createElement('div');
    mainContainer.appendChild(leftHome);
    leftHome.classList.add('left-home');

    const leftHomepar1 = document.createElement('p');
    leftHome.appendChild(leftHomepar1);
    leftHomepar1.classList.add('left-home-par1');
    const leftHomepar1Text = document.createTextNode("Enjoy the rich Taste");
    leftHomepar1.appendChild(leftHomepar1Text);

    const leftHomepar2 = document.createElement('p');
    leftHome.appendChild(leftHomepar2);
    leftHomepar2.classList.add('left-home-par2');
    const leftHomepar2Text = document.createTextNode("Come discover sweetness");
    leftHomepar2.appendChild(leftHomepar2Text);

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('menu-btn');
    leftHome.appendChild(menuBtn);
    menuBtn.innerHTML = "Discover Menu";
    }
    leftGrid();

    function rightGrid() {

        const rightHome = document.createElement('img');
        mainContainer.appendChild(rightHome);
        rightHome.classList.add('right-home');
        rightHome.setAttribute('src', './home-food.jpg');
    }
rightGrid();
}
navigation();
homePage();