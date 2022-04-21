function createHome() {
    const container = document.createElement('div');
    container.classList.add('homeContainer');
    const heading = document.createElement('h3');
    heading.textContent = "The best pizza in the world";
    const quote = document.createElement('div');
    quote.classList.add('quote')
    quote.textContent = 'You won\'t be dissapointed!'


    const image = new Image()
    image.src = 'images/pizza.jpg'
    image.style.width = '30rem'

    container.appendChild(heading);
    container.appendChild(quote);
    container.appendChild(image);

    return container;
}

function loadHome() {
    const tabContent = document.getElementById('tabContent');
    tabContent.textContent = "";
    tabContent.appendChild(createHome())
}

export default loadHome;