import React, { useState } from "react";
import "./accordion.css";
import { questions } from "../../../questions";
import { motion } from "framer-motion";

const Accordion = () => {
  const [number, setNumber] = useState(null);

  const handleQuestion = (questionId) => {
    setNumber(questionId);
    if (number == questionId) {
      setNumber(null);
    }
  };

  return (
    <div className="accordion">
      <h2>FAQ</h2>
      {questions.map((question) => {
        return (
          <div
            className="individualQuestion"
            onClick={() => handleQuestion(question.id)}
          >
            <div className="question">{question.question}</div>
            {number == question.id && (
              <motion.div
                className="answer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                {question.answer}
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
