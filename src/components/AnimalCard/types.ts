// type AnimalData = {
//   name: string;
//   species: string;
//   image: string;
// };

interface AnimalData {
  name: string;
  species: string;
  image: string;
};

export interface AnimalCardProps {
  animalData: AnimalData;
}
