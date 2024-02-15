import React from 'react';
import Home from './Home';
import  Header from "./Header";
import  Main from "./Main";
import Footer from "./Footer";
import Content from './Content';

function App (){
    return(
       <div>
       <Header />
       <Home />
       <Content />
       <Main />
       <Footer />
       </div>
    )
}
export default App;