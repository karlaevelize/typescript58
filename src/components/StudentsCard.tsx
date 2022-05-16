type Props =  {
  id: number;
  name: string;
  pet: boolean;
  accidents: number;
  incrementAccidents: (id: number) => void
}

const StudentsCard = (props: Props) => {

  return (
    <div>
      <p><b>{props.name}</b></p>
      <ul>
        <li>Is it a pet? {props.pet ? "Yes" : "No"}</li>
        <li>Number of accidents: {props.accidents}</li>
      </ul>
      <button onClick={() => props.incrementAccidents(props.id)}>Increment Accidents</button>
    </div>
  )
}

export default StudentsCard