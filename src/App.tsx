import React, { useEffect, useState } from 'react';
import './global/styles/index.scss';

const App = () => {
  const [theme, setTheme] = useState<boolean>(false);

  return (
    <div className="App">
      <div className={'theme ' + (theme ? 'theme--dark' : 'theme--default')}>
        Init
        <button className="button" onClick={() => setTheme((prev) => !prev)}>Change theme</button>
      </div>
    </div>
  );
}

export default App;
