import Card from './card';

const Cards = () => {
    const cardsArray = [{ img: require('../img/alexvause.jpeg'), desc: 'Alex Vause' },
    { img: require('../img/piperchapman.jpg'), desc: "Piper Chapman" },
    { img: require('../img/nickynichols.jpg'), desc: "Nicky Nichols" },
    { img: require('../img/pousseywashington.jpeg'), desc: "Poussey Washington" },
    { img: require('../img/sophiaburset.jpg'), desc: "Sophia Burset" },
    { img: require('../img/suzannewarren.webp'), desc: "Suzanne Warren" },
    { img: require('../img/tiffanydoggett.webp'), desc: "Tiffany Doggett" },
    { img: require('../img/tashajefferson.webp'), desc: "Tasha Jefferson" },
    { img: require('../img/galinareznikov.webp'), desc: "Galina Reznikov" },
    { img: require('../img/mariaruiz.webp'), desc: "Maria Ruiz" },
    { img: require('../img/bigboo.webp'), desc: "Big Boo" },
    { img: require('../img/blancaflores.webp'), desc: "Blanca Flores" }];

    return (
        <div id="cards">
            <Card cardsArray={cardsArray}></Card>
        </div>
    )

}

export default Cards