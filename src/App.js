import React from 'react';


function App() {
  fetch('/api/createinvite')
      .then(response => response.json());

  const value = 'World';
  return <div>Hello {value}</div>;
}

export default App;
