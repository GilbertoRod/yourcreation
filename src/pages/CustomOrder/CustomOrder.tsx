import { FormEvent, useRef, useState } from "react";
import './CustomOrder.css'
import { faL } from "@fortawesome/free-solid-svg-icons";

function CustomOrder() {
    const [firstName,setFirstName]=useState<String>("");
    const [fnCheck,setFnCheck] = useState<Boolean>(false);
    const [lastName,setLastName]=useState<String>("");
    const [lnCheck,setLnCheck] = useState<Boolean>(false);
    const [phone,setPhoneNumber]=useState<String>("");
    const [pnCheck,setPnCheck] = useState<Boolean>(false);



    const form = useRef();
    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        throw new Error("Function not implemented.");
    }
    const handleFNChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);

        if (event.target.value.length>0){
            setFnCheck(true);
        }
        else if(event.target.value.length<=0){
            setFnCheck(false);
        }

    };
    const handleLNChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);

        if (event.target.value.length>0){
            setLnCheck(true);
        }
        else if(event.target.value.length<=0){
            setLnCheck(false);
        }

    };

    const handlePNChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);

        if (event.target.value.length>0){
            setPnCheck(true);
        }
        else if(event.target.value.length<=0){
            setPnCheck(false);
        }

    };


    
    
    return (
        <>
        <div className="custom-order-text-container">
        <div className="custom-order-text">
            <h1>GET A CUSTOM ORDER QUOTE!</h1>
            <h2>HOW IT WORKS</h2>
            <h3>CONTACT</h3>
            <p>Once you fill out the form below, we will contact you with the phone number that you provided in your entry to discuss your order. if you have any more questions, please feel free to contact us via email <a href="mailto:mtmairbrush@gmail.com">mtmairbrush@gmail.com</a> or phone #<a href="tel:2148090226">(214)809-0226</a></p>
        </div>
        </div>
        <div className="form-wrapper">

            <form className="form-container">
                <input type="hidden" name="form-name" value="contact v1" />
                {/* <div className="reference-field-container">
                    Reference
                    <input name="reference-item" type="text" placeholder="" readOnly/>
                </div> */}
                <h1 style={{textAlign:"center"}}>CUSTOM ORDER FORM</h1>

                <div className="field-container">
                    <input name="" type="text" style={fnCheck?{marginRight:"2px"}:{marginRight:"2px", border:"1px solid tomato", borderRadius:"3px"}} placeholder="First Name" onChange={(e)=>{
                        handleFNChange(e)
                    }} required />



                    <input name="" type="text" style={lnCheck?{marginRight:"2px"}:{marginRight:"2px", border:"1px solid tomato", borderRadius:"3px"}} placeholder="Last Name" onChange={(e)=>{
                        handleLNChange(e)}} required/>
                </div>
                <div className="field-container">
                    <input name="" type="tel" style={pnCheck?{marginRight:"2px"}:{marginRight:"2px", border:"1px solid tomato", borderRadius:"3px"}} placeholder="Phone #" onChange={(e)=>{
                        handlePNChange(e)}} required/>
                </div>
                <div className="field-container">
                    <input name="" type="email" placeholder="Email" />
                </div>



                <h2 style={{textAlign:"center"}}>Order Details</h2>
                <div className="more-info">
                    <p>Please make sure to include the following information down below:</p><br/>
                    <ol style={{marginLeft:'50px'}}>
                        <li>The service that you want on your product(s)(Vinyl, DTG, Embroidery, etc)</li>
                        <li>The amount of products that you want printed, embroidered, and/or airbrushed.</li>
                        
                        <li>Any other information that will help such as colors, sizes, design concepts, etc. </li>
                    </ol>
                    <br/>
                    <span>If you need one of our services done on a t-shirt, please include if you want us to provide the t-shirt (black or white). The increased price for us providing the t-shirt is $5. Otherwise, you will have to provide the item and drop it off at our store.</span>
                    <br/>
                    <br/>
                    <span style={{color:"gray",fontStyle:"italic"}}>Feel free to include any other extra information that will help us provide an accurate quote for you!</span>
                </div>
                
                <div className="field-container">
                    
                <span style={{color:"red"}}>*</span>
                <br/>
                <textarea required/>
                </div>
                <span style={{color:"red"}}>*</span>

                <input id="confirm-box" type="checkbox"/>
                <label htmlFor="confirm-box">
                 By selecting this box, I confirm that this is my personal mobile phone number and give permission to Your Creation to contact me through phone calls and text messages (SMS) at this number. I understand that I can withdraw my consent at any time by contacting Your Creation. Standard message and data rates may apply.
                </label>
                <br/>
                <br/>
                <br/>
                <button type="submit" className="form-submit-btn">Submit</button>


            </form>
        </div>
        </>
    )
}

export default CustomOrder