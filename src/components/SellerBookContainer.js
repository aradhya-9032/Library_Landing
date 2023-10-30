import React from 'react';
import mySingle from '../assets/singlebook.png';

const SellerBookContainer = () => {
  return (
    <div className="seller-book-container">
      <div className="text-heading">
        <p style={{ color: 'orange', fontSize: '35px', fontWeight: 500, fontFamily: 'r', marginTop: '-.4rem' }}>Best</p>
        <br />
        <span style={{ fontWeight: 300, fontSize: '26px', color: 'black', fontFamily: "Georgia, 'Times New Roman', Times, serif", marginLeft: '10px' }}>seller books</span>
      </div>
      <br />
      <div className="text-points">
        <div className="text-point">
          <h5>1. A Tale of Two Cities</h5>
          <p>Charles Dickens</p>
        </div>
        <br /><br />

        <div className="text-point">
          <h5>2. The Lord of the Rings</h5><br />
          <div className="book-img">
            <img src={mySingle}alt="" />

            <div id="full-stars-example-two"><br />
              <div className="rating-group">
                <input disabled checked className="rating__input rating__input--none" name="rating3" id="rating3-none" value="0" type="radio" />
                <label aria-label="1 star" className="rating__label" htmlFor="rating3-1"><i className="rating__icon rating__icon--star fa fa-star"></i></label>
                <input className="rating__input" name="rating3" id="rating3-1" value="1" type="radio" />
                <label aria-label="2 stars" className="rating__label" htmlFor="rating3-2"><i className="rating__icon rating__icon--star fa fa-star"></i></label>
                <input className="rating__input" name="rating3" id="rating3-2" value="2" type="radio" />
                <label aria-label="3 stars" className="rating__label" htmlFor="rating3-3"><i className="rating__icon rating__icon--star fa fa-star"></i></label>
                <input className="rating__input" name="rating3" id="rating3-3" value="3" type="radio" />
                <label aria-label="4 stars" className="rating__label" htmlFor="rating3-4"><i className="rating__icon rating__icon--star fa fa-star"></i></label>
                <input className="rating__input" name="rating3" id="rating3-4" value="4" type="radio" />
                <label aria-label="5 stars" className="rating__label" htmlFor="rating3-5"><i className="rating__icon rating__icon--star fa fa-star"></i></label>
                <input className="rating__input" name="rating3" id="rating3-5" value="5" type="radio" />
                <p style={{ fontSize: '20px', color: 'black', position: 'relative', left: '5rem' }}>$18.00</p>
              </div>
            </div>
            <br />
          </div><br />
          <div className="book-img-text">
            <p style={{ fontSize: '20px', color: 'black', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>J.R.R Tolkien. Copies Sold: 150 millions</p><br />
            <p>The lord of the Rings is an epic high-fantasy novel written by English author J.R.R Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into. . . <a style={{ color: 'orange' }} href="#">read more</a></p>
          </div>
          <div className="text-point1">
            <h5>3. The Littele Princess</h5>
            <p>Antonie de Saint-Exupery</p>
          </div>
          <br />
          <br />
          <div className="text-point1">
            <h5>4. The Hobbit</h5>
            <p>J.R.R Tolkien</p>
          </div>
          <br />
          <br />
          <div className="text-point1">
            <h5>5. Alice's Adventures in Wonderland</h5>
            <p>Lewis Carroll</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerBookContainer;
