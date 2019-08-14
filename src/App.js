import React from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

function App() {
  return (
    <div>
      <Layout>
        <h1>Burger</h1>
        <BurgerBuilder />
      </Layout>

    </div>
  );
}

export default App;
