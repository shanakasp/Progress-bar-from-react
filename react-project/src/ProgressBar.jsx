import React, { useState } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const handleClick = () => {
    if (progress < 100) {
      setProgress(prevProgress => prevProgress + 20);
    }
  };

  const handleReset = () => {
    setProgress(0);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div
        style={{
          width: `${progress * 0.4}%`,
          height: '20px',
          backgroundColor: 'lightcoral',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span style={{ color: 'white', fontWeight: 'bold' }}>{progress}%</span>
      </div>
      <button onClick={handleClick} style={{ backgroundColor: 'lightblue', marginTop: '20px', padding: '10px 20px', border: 'none' }}>Submit</button>
      <button onClick={handleReset} style={{ backgroundColor: 'orange', marginTop: '20px', padding: '10px 20px', border: 'none' }}>Reset</button>

      {progress === 100 && <div style={{ color: 'green', marginTop: '20px' }}>Success!</div>}
    </div>
  );
};

export default ProgressBar;
