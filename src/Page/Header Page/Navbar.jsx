// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Stylehead.css";
const Navbar = () => {
  // const [menu, setMenu] = useState(false)

  return (


    <>
      <section className="head">

        <div className='left-row' style={{
          display: "flex", justifyContent: "space-around",
          gap: "1em",
        }}>
          <i class="fa-solid fa-hippo fa-2xl" style={{ marginTop: "10px" }}></i>
          <label htmlFor="">Pizzaeria </label>
          <i className='fa fa-phone'></i>
          <label>+0758151989</label>
        </div>


        <div className="rowright" >
          <ul className="menu"
            z>
            <li><Link to='/'> Home</Link></li>
            <li><Link to='/product'> Product</Link></li>
            <li><Link to='/cart'> Cart</Link></li>
            <li><Link to='/shipping'> Tracking Order</Link></li>
          </ul>

        </div>


        <div className="categories" style={{
          display: "flex", justifyContent: "space-around",
          gap: "1em",
        }}>
          <Link to="/cart">
            <i class="fa-solid fa-cart-shopping" style={{ color: "#ffffff", }} />
          </Link>

          <div className="dropdownmenu" >
            <h4 style={{ margin: "0" }} >Categories <i class="fa-solid fa-sort-down"></i></h4>
            <div class="dropdowncontent">
              <Link to="/product">Food Menu</Link>
            </div>
          </div>


          <div className='right-row'>
            <button> ENG</button>
            <button>VIE</button>
          </div>
        </div>
      </section>
    </>

  )
}

export default Navbar;
