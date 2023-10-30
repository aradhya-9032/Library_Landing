import React from 'react';
import myMsg from '../assets/msg.png';
import myFace from '../assets/face.png';
import myBook from '../assets/book.png';
import mySearch from '../assets/search.png';

function Main() {
  return (
    <main>
       <div class="main-container">
            <div class="heading">
               <p style={{color:"orange", fontSize: "35px",fontWeight: "500px", fontFamily: "r" }}>Our</p> &nbsp;
                <span style={{fontWeight: "300", fontSize: "26px", color: "black", fontFamily: "Georgia, 'Times New Roman', Times, serif" }}>resources</span>
            </div>
            <div class="items">
                <div class="item1">
                    <img src={mySearch} alt="" />
                    <p>Researchers</p><br />
                    <h6 style={{color: "grey" }}>Register online 
                        <br /> Discover tools and mange alerts <br /> Leran about how to access</h6>
                </div>
                <div class="item2">
                    <img src={myBook} alt="" />
                    <p>Librarian</p><br />
                    <h6 style={{color: "grey" }}>Mange your account <br />
                         View products and solutions 
                         <br /> Find resources and support</h6>
                </div>
                <div class="item3">
                    <img src={myMsg} alt="" />
                    <p>Societies</p><br/>
                    <h6 style={{color: "grey" }}>Publishh with Wiley 
                        <br />Explore our resource library
                    <br />Leran about topics and trends</h6>
                </div>
                <div class="item4">
                    <img src={myFace} alt="" />
                    <p>Authors</p><br/>
                    <h6 style={{color: "grey" }}>Submit a paper
                        <br />Track your article
                        <br />Leran about Open Access
                    </h6>
                </div>
            </div>
        </div>
    </main>
  );
}

export default Main;

