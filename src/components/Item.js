import React from "react";

const Item = () => {
    const riddles = [
        {
            id: 1,
            description: "Что можно сломать, даже не трогая?",
            option1: "Слово",
            option2: "Обещание",
            option3: "Сердце",
            option4: "Мечта",
            correct: 2,
        },
        {
            id: 2,
            description: "Я всегда голоден, меня часто кормят, но когда я пью, я умираю. Что я?",
            option1: "Вогонь",
            option2: "Огонь",
            option3: "Книга",
            option4: "Растение",
            correct: 1,
        },
        {
            id: 3,
            description: "Что у всех есть, но никто не может потерять?",
            option1: "Деньги",
            option2: "Время",
            option3: "Друзья",
            option4: "Воспоминания",
            correct: 2,
        },
        {
            id: 4,
            description: "Я легкий как перышко, но даже самый сильный человек не может удержать меня больше пяти минут. Что я?",
            option1: "Дыхание",
            option2: "Перо",
            option3: "Облако",
            option4: "Вода",
            correct: 1,
        },
        {
            id: 5,
            description: "Что имеет много ключей, но не открывает ни одной двери?",
            option1: "Пианино",
            option2: "Компьютер",
            option3: "Клавиатура",
            option4: "Книга",
            correct: 1,
        },
    ];
    return (
        <div>
            {riddles.map((riddle) => (
                <div key={riddle.id}>
                    <h3>{riddle.description}</h3>
                    <ul>
                        <p>
                            <input type="radio" name={riddle.id} value="1" /> {riddle.option1}
                        </p>
                        <p>
                            <input type="radio" name={riddle.id} value="2" /> {riddle.option2}
                        </p>
                        <p>
                            <input type="radio" name={riddle.id} value="3" /> {riddle.option3}
                        </p>
                        {riddle.option4 && (
                            <p>
                                {" "}
                                <input type="radio" name={riddle.id} value="4" /> {riddle.option4}
                            </p>
                        )}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Item;

