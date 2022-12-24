import React from 'react';
import { useSelector } from "react-redux";

type User = {
  name: string;
  age: number;
}
interface RootState {
  user: User
}

const Title = () => {
  const user: User  = useSelector((state: RootState)=> {
    console.log(state);
    return state.user;
  });
  return (
    <div>
      <span> User Info </span>
      <div>Name: {user.name}</div>
      <span>Age: {user.age}</span>
    </div>
  );
};

export default Title;