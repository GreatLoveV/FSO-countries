import { useState, useEffect } from "react";
import api from './services/api'

const App = () => {
  const [items, setItems] = useState([])


  useEffect(()=>{
    api
      .getAll()
      .then(initialItems =>{
        setItems(initialItems)
      })
  }, [])
  //   {
  //   const fetchItems = async () => {
  //     try {
  //       const data = await api.getAll();
  //       setItems(data);
  //     } catch (error) {
  //       console.error("Failed to fetch items:", error);
  //     }
  //   };
  //   fetchItems();
  // }

  return(
    <div>
      {items.map(item=>{
        <div key={item.id}>{item.name}</div>
      })}
    </div>
  )
}

export default App