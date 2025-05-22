import React from 'react'
import classes from './Header.module.css'
import {Link} from 'react-router-dom'
import {SlLocationPin} from "react-icons/sl";
import {BsSearch} from "react-icons/bs";
import LowerHeader from './LowerHeader';
import {BiCart} from "react-icons/bi";

const Header = ()=> {
  return (
    <>
    <section>
      <div className={classes.header__container}>
        {/* logo section */}
        <div className={classes.logo__container}>
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
            />
          </Link>

          {/* delivery */}
          <div className={classes.delivery}>
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>

        {/* search */}
        <div className={classes.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" name="" id="" placeholder="search product" />
          <BsSearch size={25} />
        </div>

        {/* other section */}
        <div className={classes.order__container}>
          <Link to="" className={classes.language}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png"
              alt=""
            />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </Link>
          
          <Link to="/auth">
               <p>Sing In</p>
              <span>Account & Lists</span>
            
          </Link>
          {/* orders */}
          <Link to="/orders">
            <p>returns</p>
            <span>& Orders</span>
          </Link>
          {/* cart */}
          <Link to="/cart" className={classes.cart}>
            <BiCart size={35}/>
            <span>0</span>
          </Link>
        </div>
      </div>
    </section>
    <LowerHeader/>
    </>
  );
}

export default Header
