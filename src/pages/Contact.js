import React,{Fragment, useRef, useState } from 'react'
import Breadcrums from '../components/Breadcrums'
import emailjs from 'emailjs-com'

function Contact() {
    const form = useRef();
    const [emailMessage, setEmailMessage] = useState(false)

    const sendEmail=(e)=>{
        e.preventDefault();

    emailjs.sendForm('service_9e4be4v', 'template_gg2rv36', form.current, 'user_wdi2neDdHME2H6mYZQCBS')
      .then((result) => {
          setEmailMessage(true)
          console.log(result.text);
      }, (error) => {
          setEmailMessage(false)
      });
      e.target.reset()
    }
    return (
        <Fragment>
            <Breadcrums breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Contac Us" Pdescription="Thank you for your interest in ZYTCode. Please provide the following information about your business needs to help us serve you better"/>
            <section className="contact_info_area sec_pad bg_color">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="contact_info_item">
                                <h6 className="f_p f_size_20 t_color3 f_500 mb_20">KSA Office Address</h6>
                                <p className="f_400 f_size_15">Office No: 110, 4th floor, Sadain Towers, Al Faisaliya Jeddah, Saudi Arabia</p>
                            </div>
                            </div>
                            <div className="col-lg-3">
                            <div className="contact_info_item">
                                <h6 className="f_p f_size_20 t_color3 f_500 mb_20">Dubai Office Address</h6>
                                <p className="f_400 f_size_15">8th floor, The office 4, One center, Dubai WTC, sheikh zayed road, Dubai UAE</p>
                            </div>
                            </div>
                            <div className="col-lg-3">
                            <div className="contact_info_item">
                                <h6 className="f_p f_size_20 t_color3 f_500 mb_20">India Office Address</h6>
                                <p className="f_400 f_size_15">No.13, 2nd A Cross, R.T Nagar,<br/> Bangalore 560032 <br />
                                Karnataka, INDIA
                                <br />
                                </p>
                            </div>
                            </div>
                            <div className="col-lg-3">
                            <div className="contact_info_item">
                                <h6 className="f_p f_size_20 t_color3 f_500 mb_20">Contact Info</h6>
                                <p className="f_400 f_size_15"><span className="f_400 t_color3">Phone:</span> <a href="tel:3024437488">(+966) 5653 90 186 </a></p>
                                <p className="f_400 f_size_15"><span className="f_400 t_color3">Phone:</span> <a href="tel:3024437488">(+966) 5001 131 663 </a></p>
                               
                                <p className="f_400 f_size_15"><span className="f_400 t_color3">Email:</span> <a href="mailto:saasland@gmail.com">info@zytcode.com</a></p>
                            </div>
                        </div>
                        <div className="contact_form col-lg-9">
                            <h2 className="f_p f_size_22 t_color3 f_600 l_height28 mb_40">Leave a Message</h2>
                            <form ref={form}  className="contact_form_box" onSubmit={sendEmail} >
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group text_box">
                                            <input type="text"  name="from_name" placeholder="Your Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group text_box">
                                            <input type="text" name="email"  placeholder="Your Email" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group text_box">
                                            <input type="text"  name="subject" placeholder="Subject" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group text_box">
                                            <textarea  name="message"  cols="30" rows="10" placeholder="Enter Your Message . . ."></textarea>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn_three">Send Message</button>
                            </form>
                            {/* {emailStatus ? emailStatus : null} */}
                            {emailMessage && <div className="alert alert-success" >Your message succesfully sent!</div>}
                          
                        </div>
                    </div>
                    
                </div>
            </section>
        </Fragment>
    )
}

export default Contact
