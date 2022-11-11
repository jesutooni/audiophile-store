import React from "react";
import Header from "./components/base/header";
import Footer from "./components/base/footer";

import HomePage from "./routes/index";

const App = () => {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
};

export default App;
