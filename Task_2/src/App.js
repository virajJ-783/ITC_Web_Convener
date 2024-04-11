// App.js
import React, { useState } from 'react';
import Form from './Form.js' ;

function App() {
  const [data, setData] = useState([]);

  const handleSubmit = (formData) => {
    setData([...data, formData]);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} />
      
    </div>
  );
}

export default App;
