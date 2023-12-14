const contant ={
  name:"Cristiano Ronaldo",
  Email:'thantoeaung278@gmail.com',
  Adress:'Portual',
  Age:38
}

export default function Contant() {
  return(
    <div>
      <h1>My is : {contant.name}</h1>
      <h2>Email : {contant.Email} </h2>
      <h2>Address : {contant.Adress} </h2>
      <h1>Age : {contant.Age} </h1>
    </div>

  )
}