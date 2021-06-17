import React from "react";
import { useFormik, Form, Field } from 'formik';
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
            .required('First name required'),
            lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Last name required'),
            email: Yup.string().email('Invalid email address').required('Valid email address required'),
            cardNumber: Yup.string()
             .max(16, 'Must be 16 numbers')
            //  .matches( /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/, 'Must be 16 characters' )
            .matches( /([0-9]{16})/, '15 numbers')
            .required('Must be 16 numbers'),
            expiryDate: Yup.string()
            //   .max(4, 'Must be 4 characters or less')
            //   .required('Required'),
            .typeError('Not a valid expiration date. Example: MM/YY')
            .max(5, 'Carl MM/YY')
            .matches( /([0-9]{2})\/([0-9]{2})/,
            'MM/YY')
            .required('MM/YY required'),
            ccv: Yup.string()
            .max(3, 'Must be 3 numbers')
            .matches (/([0-9]{3})/, '3 numbers required')
            .required('3 numbers required'),

            paymentType: Yup.string().required("A radio option is required"),

          }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            console.log('submit');
        }

    });

    const cartInfo = useSelector(selectCartInfo);

    return (
        <>
            <h4>This is the checkout page</h4>
            <div className="checkout-page-container">
            <div className="summary info-box">
                    <h5 className="title">Information</h5>
                    <form onSubmit={formik.handleSubmit}>
                        {/* <div className="label-input"> */}
                            <label htmlFor="firstName">First Name</label>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.firstName}
                            />
                        {/* </div> */}
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <p className='error'>{formik.errors.firstName}</p>
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
                            <p className='error'>{formik.errors.lastName}</p>
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
                            <p className='error'>{formik.errors.email}</p>
                            ) : null}
                        {/* <button className="btn-submit" type="submit">Submit</button> */}
                    </form>
                </div>
                <div className="payment-method info-box">
                    <h5 className="title">Payment Method</h5>
                    <form className="form" onSubmit={formik.handleSubmit}>
                        <div className='paymentType'>
                            <div className='radio'>
                                <input type='radio' className="paypal" name="paymentType" value="paypal"></input>
                                <label for="paypal">Paypal</label>
                            </div>
                            <div className='radio'>
                                <input type='radio' className="credit" name="paymentType" value="credit"></input>
                                <label for="paypal">Credit card</label>
                            </div> 
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
                        {formik.touched.cardNumber && formik.errors.cardNumber ? (
                            <p className='error'>{formik.errors.cardNumber}</p>
                            ) : null}
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
                        <div className='credit-info-error'>
                            <div>
                                {formik.touched.expiryDate && formik.errors.expiryDate ? (
                                    <p className='error'>{formik.errors.expiryDate}</p>
                                    ) : null}
                            </div>
                            <div>
                            
                                {formik.touched.ccv && formik.errors.ccv ? (
                                    <p className='error ccv'>{formik.errors.ccv}</p>
                                    ) : null}
                            </div>
                            
                        </div>
                        <button className="btn-submit" type="submit">Submit</button>                       
                        <p className="ssl-message">Your transaction is secured with ssl encryption</p>
                        
                    </form>
                </div>



                
                
            </div>

            
        </>
    )
}

export default Checkout;