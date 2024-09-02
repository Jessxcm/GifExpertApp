import { useState } from "react";
import { GifGrid, AddCategory } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);

    //setCategories([...categories, newCategory ]);
    //setcategories( cat => [...cat, 'Valorant']);
  };

  return (
    <>

      <h1>GifExpertApp</h1>

      <AddCategory

        onNewCategory={(value) => onAddCategory(value)} //value es el nombre del primer argumento
      ></AddCategory>

        {categories.map((category) => (
          <GifGrid 
          key={ category }
          category={ category }
          ></GifGrid>
        ))}

    </>
  );
};
