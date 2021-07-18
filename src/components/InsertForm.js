import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

export default function InsertForm({ onAddItem }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = { text };
    const url = "http://localhost:4000/items";
    const requestItem = axios.post(url, newItem);
    requestItem.then(item => {
      alert("Texto publicado!");
      setText("");
      onAddItem();
    });
    requestItem.catch(err => {
      alert("Infelizmente não conseguimos publicar seu texto!");
      setText("");
      onAddItem();
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Insert a new item..."
      />
    </form>
  );
}

const Input = styled.input`
  width: 400px;
  line-height: 40px;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  padding: 0 10px;
  outline: none;
`;
