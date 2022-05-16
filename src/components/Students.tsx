import { useState } from "react"
import StudentsCard from "./StudentsCard";

type Animal = {
  id: number;
  name: string;
  pet: boolean;
  accidents: number;
  fluffy?: boolean; //this field becomes optional
}

const Students = () => {

  const [animals, setAnimals] = useState <Animal[]>([
    {
      id: 1,
      name: "Lion",
      pet: false,
      accidents: 4,
    }, 
    {
      id: 2,
      name: "Cat",
      pet: true,
      accidents: 9
    }, 
    {
      id: 3,
      name: "Giraffe",
      pet: false,
      accidents: 1
    }
  ])

  // @ts-ignore
  const ignore = (love, hate) => { //this line it being ignores
    return `I ${hate} ${love} TypeScript ` //avoid using @ts-ginore
  }

  const incrementAccidents = (id: number) => {
    const updatedAccidents = animals.map(animal => {
      if (animal.id === id){
        return {
          ...animal,
          accidents: animal.accidents + 1,
          fluffy: true
        }
      } else {
        return animal
      }
    })
    console.log("new array", updatedAccidents)
    setAnimals(updatedAccidents)
  }

  return (
    <div>
      Students List
      {animals.map(animal => {
        const { id, name, pet, accidents } = animal
        return <div key={animal.id}>
        {/* removed the button so we can pass a function as prop */}
          <StudentsCard 
            id={id}
            name={name} 
            pet={pet} 
            accidents={accidents}
            incrementAccidents={incrementAccidents}/>
        </div>
      })}
    </div>
  )
}

export default Students