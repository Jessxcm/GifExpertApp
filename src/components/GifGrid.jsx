import { GifItem } from "./GifItem";
import { useFetchGifs } from "./hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

  const {images, isLoading} = useFetchGifs(category);

  console.log({images, isLoading});


  return (
    <>
      <h3>{category}</h3>
      {/* <LoadingMessage isLoading={isLoading}></LoadingMessage> */}

      {
        isLoading && (<h2> Cargando...</h2>)
      }
     
      <div className="card-grid"> 
        {images.map((image) => (
          <GifItem key={image.id}
          {...image} //exparcir todas las propiedades de image, para no mandar todas por separado y el componente toma en las props las que necesita
          ></GifItem>
        ))}
      </div>
    </>
  );
};
