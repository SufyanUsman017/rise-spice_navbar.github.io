import React from "react";

function Follow() {
  return (
    <>
      <div className="container my-5 py-5 text-center ">
        <h1>Follow Us</h1>
        <div className="row py-5 my-5">
          <div className="col-md-3">
            <div className="follow-main">
           <a rel="noreferrer" href="https://www.facebook.com/waleedcode" target="-blank"> <img src="https://cdn-icons-png.flaticon.com/512/3670/3670032.png" width="60" height="60" alt="" className="img-small mb-4"/>          
           </a>
           <h3>1000+</h3>
           <p>facebook</p>
            </div>
          </div>
          <div className="col-md-3">
          <div className="follow-main">
            <a rel="noreferrer" href="https://www.github.com/waleedcode" target="-blank"> <img src="https://cdn-icons-png.flaticon.com/512/270/270798.png" width="60" height="60" alt="" className="img-small mb-4"/>           
            </a>
            <h3>1000+</h3>
            <p>github</p>
            </div>
          </div>
          <div className="col-md-3">
          <div className="follow-main">
            <a rel="noreferrer" href="https://www.tiktok.com/waleedcode" target="-blank"> <img src="https://cdn-icons-png.flaticon.com/512/3046/3046126.png" width="60" height="60" alt="" className="img-small mb-4"/>           
            </a>
            <h3>1000+</h3>
            <p>tiktok</p>
            </div>
          </div>
          <div className="col-md-3">
          <div className="follow-main">
            <a rel="noreferrer" href="https://www.instagram.com/waleedcode" target="-blank"> <img src="https://cdn-icons-png.flaticon.com/512/3955/3955024.png" width="60" height="60" alt="" className="img-small mb-4"/>           
            </a>
            <h3>1000+</h3>
            <p>instagram</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Follow;
