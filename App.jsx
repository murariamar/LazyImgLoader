import React from 'react';
import { LazyImage } from './LazyImage';

const App = () => {
  return (
    <div className="image-container">
      <LazyImage src="./images/1.sm.webp" />
      <LazyImage src="./images/2.sm.webp" />
      <LazyImage src="./images/3.sm.webp" />
      <LazyImage src="./images/4.sm.webp" />
      <LazyImage src="./images/5.sm.webp" />
    </div>
  );
};

export default App;
