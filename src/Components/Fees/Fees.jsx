import React from 'react'
import "./Fees.css"
import ocean from "../../assets/ocean.jpg"

const Fees = () => {
  return (
       <section className="fees">
        <div className="fees-det">
            <h1>Session Fees:</h1>
            <br />
            <p>$200 / individual session</p>
            <br />
            <p>$240 / couples session</p>
        </div>

       <div className="thought-section">
  <img src={ocean} alt="ocean" className="thought-bg" />
  <div className="thought-text">
    <h1>
      “I have come to believe that caring for myself is not self-indulgent. Caring for myself is an act of survival.”
    </h1>
    <p>—Audre Lorde</p>
  </div>
</div>
       </section>
  )
}

export default Fees