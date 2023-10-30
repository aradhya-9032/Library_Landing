import React from 'react';
import myTable from '../assets/table.png';

function TableContainer() {
  return (
    <div class="table-container">
    <div class="table-img">
        <img src={myTable} alt="" />
    </div>
   
        <div class="table-img-text">
            <div class="text-heading">
                <p style={{color:"orange", fontSize: "35px" , fontWeight: "500px",  fontFamily: "r",  marginTop: "-.4rem" }}>Our</p> &nbsp; &nbsp;
                 <br />
                 <span style={{fontWeight: "300", fontSize: "26px", color: "black", fontFamily: "Georgia, 'Times New Roman', Times, serif", marginLeft: "10px" }}>Library</span>
                
            </div>
            <br />
              <div class="noraml-text">
                <p > Your reading list is a good place to start, but you will be expected to resd more widely too. Use Sevi to search for information on your topic, and to find books, journal articles and other materials in the <b style={{color: "black" }}>'Library'</b></p>
              </div>
    </div>
   </div>
  );
}

export default TableContainer;
