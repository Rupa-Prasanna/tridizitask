import "./index.css"
//import HomeCard from "../HomeCard"
import {Component} from "react"

class Home extends Component{
    render(){
        return(
            <div>
                <center> 
                    
                    <img className="nav-bar" src="https://i.imgur.com/FJPLO8D.png" alt=""/>
                    <div className="container-wrapper">
                    
                        <div className="container1">
                            <div className="content1">
                            <p> Find Your Sweet Home </p>
                            </div>

                        </div>
                        <div className="container2">
                            <div className="content2">
                            <p>Need Help to Choose Your Property</p>
                            <button className="call-button"> Let Us Call You!</button>
                            </div>

                        </div>
                        <div className="keyword-wrapper">
                            <div className="keyword-box"> 
                       <div className="keyword-row1">
                          <div className="search-box">
                            <img alt="" className="search-icon" src="https://i.imgur.com/4uRf1J3.png"/>
                            <div className="keyword">
                            <h5> Keyword </h5>
                            </div>
                           </div>
                          <div className="button-con">
                          <button className="all-button">All</button>
                          <button className="rent-button">For Rent</button>
                          <button className="sale-button">For Sale</button>
                          </div>
                        </div>
                        
                        <div className="keyword-row2">
                            <h5 className="name1"> All Main Locations</h5>
                            <h5 className="name2"> All Types </h5>
                            

                        </div>
                        <div className="keyword-row3">
                            <div className="advance-search">
                                <div>
                                <img alt="" className="search-icon2" src="https://i.imgur.com/4uRf1J3.png"/>
                                </div>
                                <div>
                                <p> Advance search</p>
                                </div>
                            </div> 
                            <button className="search-button"> Search </button>
                        </div>
                            </div>
                    
                            <p className="features-row">+   Looking for certain features </p>
                    
                       
                    </div>
                        
                    </div>
                    
                    <div className="sofa-image"> 
                       
                    <img className="img1" src="https://i.ibb.co/c8CKbJm/rental-image-1170x720-1-2.png" alt=""/>                       
                    </div>  
                    <h2> Featured Property</h2>
                    <div className="rental-card-container">
                        <img src="https://i.ibb.co/XLVDZQK/Group-1000005449.png" alt=""/>
                        <img src="https://i.ibb.co/XLVDZQK/Group-1000005449.png" alt=""/>
                        <img src="https://i.ibb.co/XLVDZQK/Group-1000005449.png" alt=""/>
                        <img src="https://i.ibb.co/XLVDZQK/Group-1000005449.png" alt=""/>
                        <img src="https://i.ibb.co/XLVDZQK/Group-1000005449.png" alt=""/>
                        <img src="https://i.ibb.co/XLVDZQK/Group-1000005449.png" alt=""/>
                        
                        
                        

                    </div>
                    <button> View All Featured </button>
                    <div className="capture-container">
                        <div className="capture-card">
                            <p> Capture & Earn </p>
                            <p> Earn Upto 30,000 Per Month </p>
                            <button> Contact Us Now</button>

                        </div>
                        <div>
                            <img alt="loading" className="capture-image" src="https://i.ibb.co/vk4WZ5J/Group-1000005486-1.png"/>

                        </div>
                    </div>
                    <h1> Few Core Wings</h1>
                    <div className="marketing-icon-container">
                        <img alt="" className="marketing-icon" src="https://i.imgur.com/E05Bbpd.png"/>
                    </div>
                    <div className="capture-container">
                        <div className="capture-card">
                            <p> Real Estate Agent </p>
                            <p> join in our team to get more income in Real Estate Industry through <span> GoodToBuy Properties</span> </p>
                            <button> Apply Now</button>

                        </div>
                        <div>
                            <img alt="loading" className="real-estate-image" src="https://i.imgur.com/yKkzc0Q.png"/>

                        </div>
                    </div>
                    <h1 className="why-question"> Why GoodTOBuy? </h1>
                    <img src="https://i.imgur.com/Gjl9d4T.png" alt=""/>
                    <img src="https://i.imgur.com/vk82CbJ.png" alt=""/>
                    <img src="https://i.ibb.co/QmcszVt/Group-1000005457.png" alt=""/>
                    <h1 className="why-question"> Property Type </h1>
                    <img src="https://i.ibb.co/cbDWNjF/Group-1000005458.png" alt=""/>
                    <h1 className="link-heading"> Quick Links </h1>
                    <div className="for-sale-row">
                        <a href="">flats for sale in kphb</a>
                        <a href="">Villas for sale in kphb</a>
                        <a href="">Individual Houses for sale in kphb</a>

                    </div>
                    <div className="for-sale-row">
                        <a href="">flats for sale in Bachupally</a>
                        <a href="">Villas for sale in Bachupally</a>
                        <a href="">Individual Houses for sale in Bachupally</a>

                    </div>
                    <div className="for-sale-row">
                        <a href="">flats for sale in miyapur</a>
                        <a href="">Villas for sale in miyapur</a>
                        <a href="">Individual Houses for sale in miyapur</a>

                    </div>
                    <div className="for-sale-row">
                        <a href="">flats for sale in nizampet</a>
                        <a href="">Villas for sale in nizampet</a>
                        <a href="">Individual Houses for sale in nizampet</a>

                    </div>
                    <div className="for-sale-row">
                        <a href="">flats for sale in kukkatpally</a>
                        <a href="">Villas for sale in kukkatpally</a>
                        <a href="">Individual Houses for sale in kukkatpally</a>

                    </div>
                    <div className="for-sale-row">
                        <a href="">flats for sale in patancheru</a>
                        <a href="">Villas for sale in patancheru</a>
                        <a href="">Individual Houses for sale in patancheru</a>

                    </div>
                    <div className="for-sale-row">
                        <a href="">flats for sale in Madhapur</a>
                        <a href="">Villas for sale in Madhapur</a>
                        <a href="">Individual Houses for sale in Madhapur</a>

                    </div>
                    <div className="for-sale-row">
                        <a href="">flats for sale in Kondapur</a>
                        <a href="">Villas for sale in Kondapur</a>
                        <a href="">Individual Houses for sale in Kondapur</a>

                    </div>
                    <div className="for-sale-row">
                        <a href="">flats for sale in Bachupally</a>
                        <a href="">Villas for sale in Bachupally</a>
                        <a href="">Individual Houses for sale in Bachupally</a>

                    </div>
                    <div className="for-sale-row">
                        <a href="">flats for sale in Hitech city</a>
                        <a href="">Villas for sale in Hitech city</a>
                        <a href="">Individual Houses for sale in Hitech city</a>

                    </div>
                    <div className="for-sale-row">
                        <a href="">flats for sale in Lingampally</a>
                        <a href="">Villas for sale in Lingampally</a>
                        <a href="">Individual Houses for sale in Lingampally</a>

                    </div>
                    <div className="for-sale-row">
                        <a href="">flats for sale in Ameerpet</a>
                        <a href="">Villas for sale in Ameerpet</a>
                        <a href="">Individual Houses for sale in Ameerpet</a>

                    </div>
                    <img src="https://i.ibb.co/3MBCwqN/Group-1000005487.png" alt=""/>
                </center>
            </div>
        )
    }
}
export default Home