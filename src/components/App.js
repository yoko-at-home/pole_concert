import React, { useState } from 'react';

import Main from './Main';
import SignIn from './SignIn';
import config from '../config.json';

const App = () => {
  const [name, setName] = useState("");

  if (config.signInEnabled && name === "") {
    return <SignIn setName={setName} />;
  }
  return <Main name={name} />;
};

export default App;
