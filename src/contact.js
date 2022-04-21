function createMenu(){
    const container = document.createElement('div');
    container.classList.add('menuContainer');
    container.textContent= "test";

    return container;
}

function loadContact() {
    const tabContent = document.getElementById('tabContent');
    tabContent.textContent = "";
    tabContent.appendChild(createMenu());
}

export default loadContact;