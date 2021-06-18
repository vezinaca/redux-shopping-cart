import React from "react";
import "./Checkout.css";
import { useSelector } from "react-redux";
import { selectCartInfo } from "../features/cart/cartSlice";
import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik'

const Checkout = () => {

    const cartInfo = useSelector(selectCartInfo);

    const bidon = () => {
        console.log('bidon');
    }

    const creditInfoSchema = Yup.object({
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
        .matches( /([0-9]{16})/, '16 numbers required')
        .required('Credit card number required'),
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

      });

    return (
        <>
            <h4>This is the checkout page</h4>
            <div className="checkout-page-container">
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    cardNumber: '',
                    expiryDate: '',
                    ccv: '',
                    paymentType: '',
                }}
                validationSchema={creditInfoSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }}
            >
                { ( { values, errors, touched }) => (
                    <>
                    <div className="summary info-box">
                        <h5 className="title">Information</h5>
                            <Form>
                            <label>First Name
                                <div>
                                <Field name="firstName" />
                                </div>
                            </label>
                                {errors.firstName && touched.firstName ? (
                                    <p className="error">{errors.firstName}</p>
                                ) : null}
                            <label>Last Name
                                <Field name="lastName" />
                            </label>
                                {errors.lastName && touched.lastName ? (
                                    <p className="error">{errors.lastName}</p>
                                ) : null}
                            <label>Email Address
                                <Field name="email" type="email" />
                            </label>
                                {errors.email && touched.email ? <p className="error">{errors.email}</p> : null}
                                <button type="submit">Submit</button>

                            </Form>
                    </div>
                    </>
                )}

            </Formik>
                
                <div className="summary info-box">
                    <h5 className="title">Information</h5>
                        <form onSubmit={bidon}>
                            
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    onChange={bidon}
                                    onBlur={bidon}
                                    value={bidon}
                                />
                                <p className='error'>First name error</p>
                            
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                onChange={bidon}
                                onBlur={bidon}
                                value={bidon}
                            />
                            <p className='error'>last name error</p>
                            
                            <label htmlFor="email">Email Address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                onChange={bidon}
                                onBlur={bidon}
                                value={bidon}
                            />
                            <p className='error'>email error</p>
                            
                        </form>
                </div>
                <div className="payment-method info-box">
                    <h5 className="title">Payment Method</h5>
                        <form className="form" onSubmit={bidon}>
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
                                onChange={bidon}
                                onBlur={bidon}
                                value={bidon}                            
                            />
                            <p className='error'>card  number error</p>
                            
                            <div className='credit-info'>
                                <div className='label-input'>
                                    <label htmlFor="expiryDate">Expiry date</label>
                                    <input
                                        id="expiryDate"
                                        name="expiryDate"
                                        type="expiryDate"
                                        onChange={bidon}
                                        onBlur={bidon}
                                        value={bidon}
                                        placeholder='01/01'
                                    />
                                </div>
                                
                                <div className='label-input'>
                                    <label htmlFor="ccv">cvc/ccv</label>
                                    <input
                                        id="ccv"
                                        name="ccv"
                                        type="ccv"
                                        onChange={bidon}
                                        value={bidon}
                                        placeholder='123'
                                    />
                                </div>                     
                                
                            </div>
                            <div className='credit-info-error'>
                                <div>
                                <p className='error'>error</p>
                                </div>
                                <div>
                                <p className='error ccv'>error</p>
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