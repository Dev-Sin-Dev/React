import React from 'react';
import "./start.css";

function start() {
    return (
        <>
            <div className="main-container">
               <div className="grid-container">
                    <div className="text top">
                        <h1>Czym jest generator wyglądów?</h1>
                        <p>
                        Prawdopodobnie wielokrotnie zdarzyła Ci się sytuacja, w której chciałeś zmienić wygląd swojej postaci,
                        ale nie wiedziałeś jakie przedmioty będą się ze sobą najlepiej komponować. 
                        Możliwe też, że zwyczajnie nie miałeś odpowiedniej ilości pieniędzy żeby kupić konkretny skin "w ciemno".
                        Właśnie dla takich osób jak Ty powstał generator wyglądów postaci w grze The Pride of Taern!
                        Dzięki niemu możesz sprawdzić wygląd dowolnej kombinacji przedmiotów jeszcze przed zakupem w grze!
                        </p>
                    </div>

                    <div className="text bottom">
                        <h1>Jak to w ogóle działa?</h1>
                        <p>
                        Obsługa generatora jest banalnie prosta. Zacznij od wyboru klasy postaci, dla której chcesz sprawdzić wygląd,
                        możesz to zrobić klikając "Wybierz klasę postaci" na samej górze strony. Dalsza obsługa jest dosyć intuicyjna.
                        Klikasz w typ przedmiotu, który Cię interesuje, a później z listy wybierasz ten konkretny, którego wygląd chcesz przetestować.
                        Po prawej stronie masz dostępną zmianę koloru przedmiotów.
                        </p>
                    </div>
               </div>
            </div>
        </>
    )
}

export default start