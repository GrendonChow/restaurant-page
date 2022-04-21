import loadHome from './home';
import loadContact from './contact';
import loadMenu from './menu';

function pageLoad() {
    const content = document.getElementById('content');
    content.appendChild(createHeader());
    content.appendChild(createNavBar());
    content.appendChild(createTabContent());

    loadHome();
};

function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');
    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Cool Pizza Place';

    header.appendChild(title);

    return header;
}

function createNavBar(){
    const navBar = document.createElement('div');
    navBar.classList.add('navBar');

    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');

    homeBtn.textContent = 'Home';
    menuBtn.textContent = 'Menu';
    contactBtn.textContent = 'Contact';

    homeBtn.onclick = () => {
        loadHome();
    };

    menuBtn.onclick = () => {
        loadMenu();
    };

    contactBtn.onclick = () => {
        loadContact();
    };

    homeBtn.classList.add('button');
    menuBtn.classList.add('button');
    contactBtn.classList.add('button');

    navBar.appendChild(homeBtn);
    navBar.appendChild(menuBtn);
    navBar.appendChild(contactBtn)

    return navBar
}

function createTabContent() {
    const tabContent = document.createElement('div');
    tabContent.setAttribute("id", 'tabContent');
    return tabContent;

};

export default pageLoad;