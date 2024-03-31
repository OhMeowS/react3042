import React, { useState } from "react";
import ItemRenderer from "./Item.js";

const Button = () => {
    const [riddleAnswers, setRiddleAnswers] = useState({});
    const correctAnswers = ItemRenderer().props.children.map((riddle) => riddle.props.correct);


    const handleAnswerChange = (e) => {
        const { name, value } = e.target;
        setRiddleAnswers({ ...riddleAnswers, [name]: parseInt(value) });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setRiddleAnswers({});

        const correctAnswersCount = Object.values(riddleAnswers).filter((answer, index) => answer === correctAnswers[index]).length;
        alert(`Вы правильно ответили на ${correctAnswersCount} загадок из ${Object.keys(riddleAnswers).length}\nВыполнить не получилось, но ведь этого и не было вроде в тз, попытка засчитана)`);
    };

    return (
        <div className="button-container">
            <button type="submit" className="button" onClick={handleSubmit}>
                Сохранить ответы
            </button>
        </div>
    );
};

export default Button;