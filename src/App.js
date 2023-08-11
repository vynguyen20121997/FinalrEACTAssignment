import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Items from './Page/Product Page/Product-section';
import { ShopContextProvider } from './Page/context/Shopcontext';
import Cart from './Page/Cart Page/Cart';
import Homepage from './Page/Home Page/Homepage';
import Navbar from './Page/Header Page/Navbar';
import { ThemeProvider, createTheme, makeStyles } from '@mui/material';
import { Footers } from './Page/Footer/Footer';
import Shippingpage from './Page/Shiping Page/confirmpopup';
import { UserContext } from './Page/Cart Page/UpdateInfoHandle';
import UpdateInfoHandle from './Page/Cart Page/UpdateInfoHandle';
const theme = createTheme();

 

function App() {
  
  return (

    <div className="App">
      <ThemeProvider theme={theme}>
     <ShopContextProvider>
        <BrowserRouter>
         <Navbar/>
          <Routes>
          <Route path="/" element={<Homepage />}/>
            <Route path="/product" element={<Items />} />
            <Route path="/cart" element={<Cart />}/>
            <Route path="/shipping" element={<Shippingpage />}/>
          </Routes>
          <Footers/>
        </BrowserRouter>
      </ShopContextProvider>
      </ThemeProvider>
   
    </div>
  );
}

export default App;
