import React, { useContext, useState } from 'react'
import classes from './Payment.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { DataContext } from '../../Components/DataProvider/DataProvider';
import ProductCard from '../../Components/Product/ProductCard';
import { useStripe,useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';


function Payment() {

   const [{ user, basket }] = useContext(DataContext)
   console.log(err)

   const totalItem = basket?.reduce((amonut, item) => {
     return item.amonut + amonut;
   }, 0);

   const total = basket.reduce((amount, item) => {
     return item.price * item.amount + amount;
   }, 0);

    const [cardError, setCardError] = useState(null);

      const stripe = useStripe();
      const elements = useElements();

     const handleChange = (e)=>{
         console.log(e)
         e?.error?.message? setCardError(e?.error?.message): setCardError("")
     }

  return (
    <LayOut>
      {/* header */}
      <div className={classes.Payment_header}>Checkout ({totalItem}) items</div>
      {/* payment method */}
      <section className={classes.payment}>
        {/* address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user.email}</div>
            <div>123 react lane</div>
            <div>chicago, It</div>
          </div>
        </div>

        <hr />

        {/* product */}
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />

        {/* card from */}
        <div>
          <h3>Payment methods</h3>
          <div className={classes.Payment_card_container}>
            <div className={classes.payment__details}>
              <form action="">
                {/* error */}
                {cardError && (
                  <small stype={{ color: "red" }}>{cardError}</small>
                )}
                {/* card element */}
                <CardElement onChange={handleChange} />
                {/* price */}
                <div className={classes.payment_price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      <p>Total Order |</p> <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button>Pay Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Payment
