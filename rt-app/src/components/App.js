import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";
import "../assets/styles.css";

function App() {
    return (
<div>
        <div>
        <Header/>
        </div>
       
        <div>
        <MainContent/>
        </div>

        <div> 
        <Footer/>   
        </div>  
</div>               

    );
    }
 
export default App;