import React, { useState } from "react";

export default function EjercicioCuatro() {
  const [question1, setQuestion1] = useState({
    question: "¿Quién pintó la Mona Lisa?",
    answer1: "Monet",
    answer2: "Picasso",
    answer3: "Miguel Ángel",
    answerCorrect: "Leonardo da Vinci"
  });
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  const checkAnswer = (answer) => {
    if (answer === question1.answerCorrect) {
      setIsCorrectAnswer(true);
      alert("Respuesta correcta");
    } else {
      setIsCorrectAnswer(false);
      alert("Respuesta incorrecta");
    }
  };

  return (
    <>
      <h2>Ejercicio Cuatro: Juego de preguntas</h2>
      <h3>{question1.question}</h3>
      <button onClick={() => checkAnswer(question1.answer1)}>
        {question1.answer1}
      </button>
      <button onClick={() => checkAnswer(question1.answer2)}>
        {question1.answer2}
      </button>
      <button onClick={() => checkAnswer(question1.answer3)}>
        {question1.answer3}
      </button>
      <button onClick={() => checkAnswer(question1.answerCorrect)}>
        {question1.answerCorrect}
      </button>
      <p>{isCorrectAnswer ? "Respuesta correcta" : "Respuesta incorrecta"}</p>
    </>
  );
}
