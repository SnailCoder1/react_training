import React from "react"
import ReactDOM from "react-dom"
import Maputo from "./Maputo"
import Header from "./Header"
import Footer from "./Footer"

const App = () => {
  return (
      <div>   
          <Maputo />
          <Header />
          <Footer />
      </div>
  )
};



ReactDOM.render(<App />, document.getElementById("app"))

