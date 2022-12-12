import Card from './card';

const Cards = () => {
    const cardsArray = [{ img: require('../img/alexvause.jpeg'), desc: 'Alex Vause' },
    { img: '', desc: "Piper Chapman" },
    { img: '', desc: "Nicky Nichols" },
    { img: '', desc: "Poussey Washington" },
    { img: '', desc: "Sophia Burset" },
    { img: '', desc: "Suzanne Warren" },
    { img: '', desc: "Tiffany Doggett" },
    { img: '', desc: "Tasha Jefferson" },
    { img: '', desc: "Galina Reznikov" },
    { img: '', desc: "Maria Ruiz" },
    { img: '', desc: "Big Boo" },
    { img: '', desc: "Blanca Flores" }];

    return (
        <div id="cards">
            <Card cardsArray={cardsArray}></Card>
        </div>
    )

}

export default Cards