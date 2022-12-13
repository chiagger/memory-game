import React, { useEffect, useState } from 'react';
import Card from './card';
import Header from './header';

const Cards = () => {
    const [cardsArray, setCardsArray] = useState([{ key: 1, img: require('../img/alexvause.jpeg'), desc: 'Alex Vause' },
    { key: 2, img: require('../img/piperchapman.jpg'), desc: "Piper Chapman" },
    { key: 3, img: require('../img/nickynichols.jpg'), desc: "Nicky Nichols" },
    { key: 4, img: require('../img/pousseywashington.jpeg'), desc: "Poussey Washington" },
    { key: 5, img: require('../img/sophiaburset.jpg'), desc: "Sophia Burset" },
    { key: 6, img: require('../img/suzannewarren.webp'), desc: "Suzanne Warren" },
    { key: 7, img: require('../img/tiffanydoggett.webp'), desc: "Tiffany Doggett" },
    { key: 8, img: require('../img/tashajefferson.webp'), desc: "Tasha Jefferson" },
    { key: 9, img: require('../img/galinareznikov.webp'), desc: "Galina Reznikov" },
    { key: 10, img: require('../img/mariaruiz.webp'), desc: "Maria Ruiz" },
    { key: 11, img: require('../img/bigboo.webp'), desc: "Big Boo" },
    { key: 12, img: require('../img/blancaflores.webp'), desc: "Blanca Flores" }]);
    const [cardsArr, setCardsArr] = useState([]);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);


    useEffect(() => {
        const handleScore = () => {
            setScore((prev) => prev + 1)
        }

        const handleHighScore = () => {
            setHighScore(score);
        }

        const reset = () => {
            setScore(0);
            setCardsArr([]);
        }

        function shuffle() {
            cardsArray.sort(() => Math.random() - 0.5);
        }

        function shuffleCards(e) {
            shuffle();
            let clicked;
            if (e.target.tagName === "IMG") {
                clicked = e.target.parentNode.parentNode.lastChild.textContent;
            } else {
                clicked = e.target.lastChild.textContent;
            }
            if (!cardsArr.includes(clicked)) {
                setCardsArr((prev) => [...prev, clicked]);
                handleScore();
            } else {
                handleHighScore();
                reset();
            }
            setCardsArray([...cardsArray]); //setResult(results) doesn't trigger rerender. You need to pass a new array, like this: setResult([...results]).
        }

        const cardDivs = document.querySelectorAll(".card");
        cardDivs.forEach(card => { card.addEventListener("click", shuffleCards) })

        return () => {
            cardDivs.forEach(card => { card.removeEventListener("click", shuffleCards) })
        };

    }, [cardsArray, cardsArr, score])


    return (
        <div>
            <Header score={score} highScore={highScore}></Header>
            <div className="content">
                <div id="cards">
                    <Card cardsArray={cardsArray}></Card>
                </div>
            </div>
            <div className="footer"></div>
        </div>
    )

}

export default Cards