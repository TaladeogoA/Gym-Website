import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const FAQ = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  return (
    <article className="faq" onClick={() => setShow((prev) => !prev)}>
      <div>
        <h4>{question}</h4>
        <button className="faq__icon">
          {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {show && <p>{answer}</p>}
    </article>
  );
};

export default FAQ;
