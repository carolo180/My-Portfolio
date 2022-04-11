import React, { useState } from "react";
import "./Footer.css"
import waves from "../../assets/images/waves.svg"
import { RiWhatsappFill } from "react-icons/ri";
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
    
         let named = values.nombre
         let mails = values.mail
         let phones = values.phone
         let message = values.msn
         
       
      
         var url = "https://wa.me/573044531854?text="+
         "Hi i am " + named + ","+ "%0a"
         + " My email is " + mails + ","+" %0a"
          + message + "."
         
         window.open(url, '_blank').focus();
      };

  return (
    <div className='footer'>
          <form id="formu_contacto" action="" className="form-box"  autocomplete="off" onSubmit={e => { e.preventDefault(); goToWhatsapp(); }}>
					
                    <div className="mahi_holder">
                        <div className="container">
                              <div className="box_form bg_1">
                                    <div className="titnormal">
                                        <h1 className="titleform"> Contact me </h1>
                                    </div> 
                                    <div className="sectform">
                                    <div id="campoNom" className="col-3 input-effect">
                                      <input className="effect-16" 
                                      type="text" 
                                      placeholder="Full Names" 
                                      required="required" 
                                      name="names" 
                                      id="names" 
                                      onChange={handleInputChange}
                                      value={values.names}/>
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
                                       type="text"
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
                        <button  type="submit">Send Information <RiWhatsappFill className="iconwhats"/></button>
                      </div>	
                </form>	
              
       <Footer2 />
    </div>
  )
}

export default Footer