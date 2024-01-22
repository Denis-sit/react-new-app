import React from 'react';
import Users from './Components/User/Users';

function App() {
  const user = {
    name: 'Ivan',
    secondName: 'Petrov',
    age: 25,
    gender: 'М',
    rank: 3,
  };

  return (
    <>
      <Users {...user} />
    </>
  );
}

export default App;
