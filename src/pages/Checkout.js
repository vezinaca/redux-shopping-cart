import React from "react";
import { useFormik } from 'formik';
import "./Checkout.css";

const Checkout = () => {
    const formik = useFormik ({
        initialValues: { email: ""},
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }

    });
    return (
        <>
            <h4>This is checkout page</h4>
            <div className="checkout-page-container">
                <div className="payment-method info-box">
                    <h5>Payment Method</h5>
                    <form className="form" onSubmit={formik.handleSubmit}>
                        <div className='radio'>
                            <input type='radio' className="paypal" name="paymentType" value="paypal"></input>
                            <label for="paypal">Paypal</label>
                        </div>
                        <div className='radio'>
                            <input type='radio' className="credit" name="paymentType" value="credit"></input>
                            <label for="paypal">Credit card</label>
                        </div>                        
                        <label htmlFor="card-number">Card number</label>
                        <input
                            id="card-number"
                            name="card-number"
                            type="card-number"
                            onChange={formik.handleChange}
                            value={formik.values.cardNumber}
                        />
                        <div className='credit-info'>
                            <div className='label-input'>
                                <label htmlFor="expiry-date">Expiry date</label>
                                <input
                                    id="expiry-date"
                                    name="expiry-date"
                                    type="expiry-date"
                                    onChange={formik.handleChange}
                                    value={formik.values.cardNumber}
                                />
                            </div>
                            <div className='label-input'>
                                <label htmlFor="ccv">cvc/ccv</label>
                                <input
                                    id="ccv"
                                    name="ccv"
                                    type="ccv"
                                    onChange={formik.handleChange}
                                    value={formik.values.cardNumber}
                                />
                            </div>
                        </div>
                        <button className="btn-submit" type="submit">Submit</button>
                        <p>Your transaction is secured with ssl encryption</p>
                    </form>
                </div>
                <div className="summary info-box">
                    <h5>Summary</h5>
                    <form onSubmit={formik.handleSubmit}>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                        />
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                        />
                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        <button className="btn-submit" type="submit">Submit</button>
                    </form>
                </div>
            </div>

            


            {/* <div className="checkout-main">
                <form className="form">
                    <input type='radio' className="paypal" name="paymentType" value="paypal"></input>
                    <label for="paypal">Paypal</label>
                    <input type='radio' className="credit" name="paymentType" value="credit"></input>
                    <label for="paypal">Credit card</label>
                    
                    <input text></input>
                </form>
            </div> */}
        </>
    )
}

export default Checkout;