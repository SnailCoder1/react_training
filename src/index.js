import React from "react"
import ReactDOM from "react-dom"
import Maputo from "./Maputo"
import Header from "./Header"
import Footer from "./Footer"
import './css/tailwind.src.css';


const App = () => {

    return (
      <div className="page-wrapper">
          <div className="page-content">
              <Header />
              <div className="content-wrapper">
                  <Maputo />
              </div>
              <Footer />
          </div >
      </div >
  )
}

ReactDOM.render(<App />, document.getElementById("app"))

