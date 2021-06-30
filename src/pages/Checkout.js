import React from "react";
import "./Checkout.css";
import { useSelector } from "react-redux";
import { selectCartInfo } from "../features/cart/cartSlice";
import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik'

const Checkout = () => {

    const cartInfo = useSelector(selectCartInfo);

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

        paymentType: Yup.string().required("A payment option is required"),

      });

    return (
        <>
            <h4>This is the checkout page</h4>
            
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
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                { ( { values, errors, touched }) => (
                    <>
                    <Form>
                        <div className="checkout-page-container">
                            <div className="summary info-box">
                                <h5 className="title">Information</h5>                                    
                                    <label>First Name
                                        <div>
                                        <Field className="field" name="firstName"  placeholder="John"/>
                                        </div>
                                    </label>
                                        {errors.firstName && touched.firstName ? (
                                            <p className="error">{errors.firstName}</p>
                                        ) : null}
                                    <label>Last Name
                                        <div>
                                        <Field className="field" name="lastName" placeholder="Doe"/>
                                        </div>
                                    </label>
                                        {errors.lastName && touched.lastName ? (
                                            <p className="error">{errors.lastName}</p>
                                        ) : null}
                                    <label>Email Address
                                        <div>
                                        <Field className="field" name="email" type="email" placeholder="email@email.com"/>
                                        </div>
                                    </label>
                                        {errors.email && touched.email ? <p className="error">{errors.email}</p> : null}
                                                                       
                            </div>

                            <div className="payment-method info-box">
                                    <h5 className="title">Payment Method</h5>
                                    <div id="my-radio-group"></div>
                                        <div role="group" aria-labelledby="my-radio-group">
                                            <label className="label--radio">
                                                <Field className="radio" type="radio" name="paymentType" value="Paypal" />
                                                <span className="text--label">Paypal</span>
                                            </label>
                                            <div>
                                                <label className="label--radio">
                                                <Field className="radio" type="radio" name="paymentType" value="Credit" />
                                                <span className="text--label">Credit card</span>
                                                </label>
                                            </div>                                            
                                        </div>
                                        {errors.paymentType && touched.paymentType ? <p className="error">{errors.paymentType}</p> : null}

                                    <label>Card number
                                        <div>
                                        <Field className="field" name="cardNumber" placeholder="1234 1234 1234 1234" />
                                        </div>
                                    </label>
                                    {errors.cardNumber && touched.cardNumber ? <p className="error">{errors.cardNumber}</p> : null}
                                    <label>Expiry date
                                        <div>
                                        <Field name="expiryDate" placeholder="09/25"/>
                                        </div>
                                    </label>
                                    {errors.expiryDate && touched.expiryDate ? <p className="error">{errors.expiryDate}</p> : null}
                                    <label>cvc/ccv
                                        <div>
                                        <Field name="ccv" placeholder="123"/>
                                        </div>
                                    </label>
                                    {errors.ccv && touched.ccv ? <p className="error">{errors.ccv}</p> : null}
                                    <button className="btn-submit" type="submit">Submit</button>
                                    <p className="ssl-message">Your transaction is secured with ssl encryption</p>
                                
                            </div>

                           
                                        </div>
                        
                    </Form>
                    
                    </>
                )}

            </Formik>
            
            </>
    )
}

export default Checkout;