import React from 'react'
import { useSelector } from 'react-redux/es/exports';

export default function ShoppingCart() {
    const cartData = useSelector((value) =>
        value.cart.item
    );
    return (
        <section>
            <div className='aem-Grid aem-Grid--12 shopping-cart container'>
                <div>
                    <h1>Your Shopping Bag</h1>
                    <button className='underbar'></button>
                </div>
                {cartData.map((value) => {
                    return (
                    <div className='aem-Grid aem-Grid--12'>
                        <div className='aem-GridColumn aem-GridColumn--default--4'>
                            <div className='aem-Grid aem-Grid--12 cart-product'>
                                <div className='aem-GridColumn aem-GridColumn--default--6'>
                                    <img src={value.image} alt='' />
                                </div>
                                <div className='aem-GridColumn aem-GridColumn--default--6'>
                                    <h6>{value.title}</h6>
                                    <p>Size : Medium</p>
                                    <p>Color : Storm</p>
                                    <p>${value.price}</p>
                                </div>
                            </div>
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--2 '>
                            <div className='cart-btn'>
                                <button>+</button>
                                <input type="text" id="" name="" className='cart-input'/>
                                <button>-</button>
                            </div>
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--2 '>
                            <ul>
                                <li><a href='/'><img src={require('./Images/edit-2.svg').default} alt='' />Edit item</a></li>
                                <li><a href='/'><img src={require('./Images/trash-2.svg').default} alt='' />Remove</a></li>
                                <li><a href='/'><img src={require('./Images/heart.svg').default} alt='' />Save for later</a></li>
                            </ul>
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--4 pricing-summary'>
                            <h5>Pricing Summary</h5>
                            <div className='aem-Grid aem-Grid--12'>
                               <p>Subtotal<span>$ 388.00</span></p>
                               <p>Coupon<span>- $ 77.60</span></p>
                               <p>Gift Card<span>- $ 100.00</span></p>
                               <p>Estimated tax<span>$ 23.28</span></p>
                               <p>Estimated shipping<span>FREE</span></p>
                               <h6>Estimated Total<span>$ 233.68</span></h6>
                               <button><img src={require('./Images/lock.svg').default} alt=''/>CHECKOUT</button>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
            <div className='aem-Grid aem-Grid--12'>
                <div className='aem-GridColumn aem-GridColumn--default--8'>1</div>
            </div>
        </section>
    )
}
