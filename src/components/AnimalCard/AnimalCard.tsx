
import { AnimalCardProps } from "./types"; 
import { AnimalCardWrapper} from "./styles";




function AnimalCard({ animalData}: AnimalCardProps) {

  return (
    <AnimalCardWrapper>
      <h2>{animalData.name}</h2>
      <p>{animalData.species}</p>
      {/* <img  src={animalData.image}/> */}
    </AnimalCardWrapper>
  );
}

export default AnimalCard;