const divcontainer = document.querySelector('.container');
const divs = divcontainer.querySelectorAll('.panel');

const expandCard = (e) => {
    // divs.forEach((div) => {
    //     div.classList.add('active');
    // })
    removeActiveClasses();
    divs.forEach(() => {
        const cardToExpand = e.target;
    cardToExpand.classList.add('active')
    })
    
}

const removeActiveClasses = () => {
    divs.forEach((div) => {
        div.classList.remove('active');
    })
}

// divs.addEventListeners
divcontainer.addEventListener('click', expandCard);



