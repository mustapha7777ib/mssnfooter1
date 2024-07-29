import logo from "/src/assets/logo.svg";
import send from "/src/assets/send.svg";
import facebook from "/src/assets/facebook.svg";
import instagram from "/src/assets/instagram.svg";
import twitter from "/src/assets/twitter.svg";
import whatsapp from "/src/assets/whatsapp.svg";

function Footer(){
    return(
        <div className="Flexbox">
            <div className="Flex1">
                <div className="logocon">
                    <img className="logo" src={logo}/>
                </div>
                <div className="a1">
                    <p className="big">Our Address</p>
                    <p className="nile">Nile University of Nigeria</p>
                    <p className="bodyy">Plot 681, Cadastral Zone C-OO, Research & Institution Area,<br/>Jabi Airport Bypass, Abuja FCT, 900001 Nigeria</p>
                
                </div>
                <div className="a2">
                    <p className="big bigg">Contact Us</p>
                    <p className="ok"><span className="round">Email:</span> mssn@nileuniversity</p>
                    <p className="ok"><span className="round">Phone Number:</span> 0901114238</p>

                </div>
            </div>
            <div className="Flex2">
                    <p className="big" id="big">Information</p>
                    <p>Islamic Calendar</p>
                    <p>Islamic News</p>
                    <p>FAQ</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Condition</p>
            </div>

            <div className="Flex3">
                <div className="c1">
                    <p className="big bigg">Stay In Touch</p>
                    <p className="bodyy">Drop your Email to stay updated on Latest Islamic news, 
                    standpoint, Advice and Opinion that would strengthen your faith </p>
                </div>
                <div className="inputbox">
                    <input className="inputer" placeholder="Enter your email address"></input>
                    <img className="sendbutton" src={send}/>
                </div>
                <p className="lonely">Join Us On</p>
                <div className="c2">
                    <img src = {facebook}/>
                    <img src = {instagram}/>
                    <img src = {twitter}/>
                    <img src = {whatsapp}/>
                </div>
            </div>
        </div>

        
    )
}
export default Footer