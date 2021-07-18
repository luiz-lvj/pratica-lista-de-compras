import { useEffect, useState } from "react";
import styled from "styled-components";
import InsertForm from "./InsertForm";
import axios from "axios";

export default function ShoppingList() {
  
  const [items, setItems] = useState([]);

  useEffect(loadItems, []);

  function loadItems() {
    const url = "http://localhost:4000/items"
    const requestItems = axios.get(url);
    requestItems.then(response =>{
      setItems([...response.data]);
    });
    requestItems.catch(err => {
      alert("Infelizmente não conseguimos pegar seus itens!");
    });
  }

  return (
    <>
      <InsertForm onAddItem={loadItems} />
      <List>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </List>
    </>
  );
}

const List = styled.ul`
  margin-top: 40px;
  background: #fff;
  width: 600px;
  padding: 20px;
  border-radius: 10px;
  font-size: 25px;
  padding-left: 50px;
  line-height: 40px;
  list-style-type: disc;
`;
