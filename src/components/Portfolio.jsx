import React from 'react'

export default function Portfolio() {
  return (
    <div>
      <div className="container text-center my-5 py-5">
        <div className="row align-items-center ">
          <div className="col-md-6">
            <div className="home_1">
              <h2>
                hello, <span>I'm</span>
              </h2>
              <h1>Sufyan Usman</h1>
              <h3>Frontend Developer</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
                dolor eius voluptas modi vel nostrum deleniti commodi, accusamus
                quasi sit omnis veniam, facere deserunt hic numquam nobis. Enim,
                voluptas dolores. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Praesentium vitae ratione, optio cumque
                nesciunt ipsum molestias, similique veritatis obcaecati qui in
                veniam perferendis, tempore asperiores error fugiat assumenda
                molestiae. Maiores!
              </p>
              <button className="btn" type="button">
                Contact Now
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="home_2">
              <img src={img1} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
