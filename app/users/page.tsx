
interface User{
  id:number;
  name:String;
}


const UsersPage =async () => {

  const response =await fetch("https://jsonplaceholder.typicode.com/users");
  const Users:User[] =await response.json()

  return (
    <div>{Users.map((User) => <h4>{User.name}</h4>)}</div>
  )
}

export default UsersPage