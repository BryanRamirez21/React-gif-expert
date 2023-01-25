import { useState, useEffect } from "react";
import { GitItem } from "./GitItem";
import { useFecthGifs } from "../hooks/useFecthGifs";

export const GitGrid = ({category}) => {

  const {images, isLoading} = useFecthGifs(category);

/*
const [imgaes, setImages] = useState([]);

const getImgs = async() => {
  const newImgs = await getGifs(category);
  setImages(newImgs);
}

useEffect(() => {
  getImgs();
}, [])
*/

    return (
      <>
          <h3>{category}</h3>
          {
            isLoading && (<h2>Cargando...</h2>)
          }
          <div className="card-grid">
          {images.map((image) => (
                <GitItem key={image.id}
                /*{...image} == con esto esparcimos las props del image (state del images)
                                para que lleguen como props al gift itetm y tenga acceso a cada prop del image*/
                  title={image.title}
                  url={image.url}
                />
            ))}
          </div>
      </>
    )
}
