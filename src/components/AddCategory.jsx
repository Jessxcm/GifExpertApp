import { useState } from "react";

export const AddCategory = ( { onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <=1) return; //se sale de la funcion si no cumple la condicion

    //setCategories( categories =>  [ inputValue, ...categories ]);
    onNewCategory(inputValue.trim());
    setInputValue('');
  }

  return (
    <form onSubmit={ (event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      ></input>
    </form>
  );
};


