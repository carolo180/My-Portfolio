import React, { useState } from "react";
import "./Footer.css"
import { RiWhatsappFill } from "react-icons/ri";
import { MdMarkunreadMailbox } from "react-icons/md";
import Footer2 from "../footer2/Footer2";

const Footer = () => {

    const [values, setValues] = useState("");

    const initialStateValues = {
        names:"",
        mail:"",
        phone:"",
        msn: "",
      };

    const handleInputChange = e =>{
      const {name, value} = e.target;
      setValues({...values, [name]: value});
     };

     const goToWhatsapp = e =>{
        setValues({...initialStateValues})
         console.log(values)
    
         let named = values.names
         let mails = values.mail
         let message = values.msn
         
       
      
         var url = "https://wa.me/573044531854?text="+
         "Hi i am " + named + ","+ "%0a"
         + " My email is " + mails + ","+" %0a"
          + message + "."
         
         window.open(url, '_blank').focus();
      };

  return (
    <div className='footer'>
          <form id="formu_contacto" action="https://formsubmit.co/caponeris1@gmail.com" 
          method="POST" className="form-box"  autocomplete="off">
					
                    <div className="mahi_holder">
                        <div className="container">
                              <div className="box_form bg_1">
                                    <div className="titnormal">
                                        <h1 className="titleform"> Contact me </h1>
                                    </div> 
                                    <div className="sectform">
                                    <div id="campoNom" className="col-3 input-effect">
                                      <input className="effect-16" 
                                     
                                      placeholder="Full Names" 
                                      required="required" 
                                      name="names" 
                                      id="names" 
                                      onChange={handleInputChange}
                                      value={values.names}
                                      />
                                    <span className="focus-border"/>
                                    <div className="feedback"></div>
                                   </div>
    
    
                                <div id="campoApe" className="col-3 input-effect">
                                <input className="effect-16"
                                       placeholder="Email" 
                                       required="required" 
                                       name="mail" 
                                       id="mail"
                                       onChange={handleInputChange}
                                       value={values.mail}/>
                                      <span className="focus-border"/>
                                </div> 
                                    </div>
                                 
                                
                                
            
                                <div id="campoCelu" className="col-3 input-effect">
                                      <input className="effect-16"
                                      
                                        placeholder="Write Your Message" 
                                        required="required" 
                                        name="msn"
                                         id="msn"
                                         onChange={handleInputChange}
                                         value={values.msn}
                                         />
                              <span className="focus-border"/>
                                </div>
      
                             </div>
                        </div>
                    </div>
                        <div id="boton_enviar" className="suscribirse">
                            <button onClick={e => { e.preventDefault(); goToWhatsapp(); }}>
                                Send it by<span className="invisible">-</span>
                                 <RiWhatsappFill className="iconwhats"/></button> 

                            <button type="submit">Send it by E-mail<span className="invisible">-</span>
                            <MdMarkunreadMailbox className="iconemail"/></button>
                        </div>	
                </form>	
               <Footer2 />
     
    </div>
  )
}

export default Footer