import React from 'react'
import './searchbar.css';
import { Button, TextField } from '@mui/material';
import { AccessAlarm,SearchIcon,  ThreeDRotation } from '@mui/icons-material';


const Homepage = () => {
  return (
    <>
      <section className='search-bar'>
        <div className="search-section">

          <div className="logo">
            <img src="https://th.bing.com/th/id/R.46ae8ab1a6a09803ca19f967a085bfa3?rik=vb4PqAlMUsoZ8A&riu=http%3a%2f%2fimg.freepik.com%2ffree-vector%2fpizzeria-logo_1051-1483.jpg%3fsize%3d338%26ext%3djpg&ehk=NeWKlsIkNcBqqMLU9NrK5Nqh7aAyTOjZO1VkcgMAXys%3d&risl=&pid=ImgRaw&r=0"
              alt='1' />
          </div>

          <div className="search">
            <i class="fa-sharp fa-solid fa-magnifying-glass-location" style={{ color: "#008080", size: "2xl" }} ></i> 
             <input   type="text" placeholder='Please enter ' /> 
            {/* <SearchIcon></SearchIcon>
            <TextField classNames="mdc-text-field__input" rows="8"  variant="outlined" /> */}
          </div>

        </div>

      </section>
    </>
  )
};

export default Homepage;
