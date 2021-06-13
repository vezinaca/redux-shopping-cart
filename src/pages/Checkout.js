import React from "react";
import { useFormik } from 'formik';
import "./Checkout.css";
import { useSelector } from "react-redux";
import { selectCartInfo } from "../features/cart/cartSlice";
import * as Yup from 'yup';

const Checkout = () => {
    const formik = useFormik ({
        initialValues: { 
            cardNumber: "",
            expiryDate: "",
            ccv: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
            lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            cardNumber: Yup.string()
             .max(16, 'Must be 16 characters or less')
              .required('Required'),
            expiryDate: Yup.string()
            //   .max(4, 'Must be 4 characters or less')
            //   .required('Required'),
            .typeError('Not a valid expiration date. Example: MM/YY')
            .max(5, 'Not a valid expiration date. Example: MM/YY')
            .matches( /([0-9]{2})\/([0-9]{2})/,
            'Not a valid expiration date. Example: MM/YY')
            .required('Required'),
            ccv: Yup.string().max('Must be 3 characters or less').required('Required'),
          }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            console.log('submit');
        }

    });

//     export const expirationDate = Yup.string()
//   .typeError('Not a valid expiration date. Example: MM/YY')
//   .max(5, 'Not a valid expiration date. Example: MM/YY')
//   .matches(
//     /([0-9]{2})\/([0-9]{2})/,
//     'Not a valid expiration date. Example: MM/YY'
//   )
//   .required('Expiration date is required')

    const cartInfo = useSelector(selectCartInfo);

    return (
        <>
            <h4>This is checkout page</h4>
            <div className="checkout-page-container">
            <div className="summary info-box">
                    <h5>Information</h5>
                    <form onSubmit={formik.handleSubmit}>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                        />
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <div>{formik.errors.firstName}</div>
                            ) : null}
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName}
                        />
                        {formik.touched.lastName && formik.errors.lastName ? (
                            <div>{formik.errors.lastName}</div>
                            ) : null}
                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div>{formik.errors.email}</div>
                            ) : null}
                        <button className="btn-submit" type="submit">Submit</button>
                    </form>
                </div>
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
                        <label htmlFor="cardNumber">Card number</label>
                        <input
                            id="cardNumber"
                            name="cardNumber"
                            type="cardNumber"
                            placeholder='1234 5678 1234 5678'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.cardNumber}                            
                        />
                        <div className='credit-info'>
                            <div className='label-input'>
                                <label htmlFor="expiryDate">Expiry date</label>
                                <input
                                    id="expiryDate"
                                    name="expiryDate"
                                    type="expiryDate"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.expiryDate}
                                    placeholder='01/01'
                                />
                            </div>
                            {formik.touched.expiryDate && formik.errors.expiryDate ? (
                            <div>{formik.errors.expiryDate}</div>
                            ) : null}
                            <div className='label-input'>
                                <label htmlFor="ccv">cvc/ccv</label>
                                <input
                                    id="ccv"
                                    name="ccv"
                                    type="ccv"
                                    onChange={formik.handleChange}
                                    value={formik.values.ccv}
                                    placeholder='123'
                                />
                            </div>
                        </div>
                        <button className="btn-submit" type="submit">Submit</button>                       
                        <p>Your transaction is secured with ssl encryption</p>
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