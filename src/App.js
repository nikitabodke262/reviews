import React from 'react';
import { FaGithubAlt } from 'react-icons/fa';
import Review from './Review';
function App() {
  return (

    <>
      <main>
        <div className="container">
            <div className="title">
              <h2>Our Reviews</h2>
                <div className="underline"></div>
            </div>
            <Review />
        </div>
      </main>
    </>

  )
}

export default App;