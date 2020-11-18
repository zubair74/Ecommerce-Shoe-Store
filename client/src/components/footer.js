import React from 'react'
import "../style2.css";

function Footer() {
    return (
        <footer className= {window.innerWidth < 416 ? 'not-footers' : 'jh'} id="footer">
      <div class="container py-4">
      <div class="copyright">
        &copy; Copyright <strong><span>Your Companion</span></strong>. All Rights Reserved
      </div>
      {/* <div class="credits">

        Designed and Developed by Your Companion <a href="https://github.com/zubair74">Zubair Anis</a>
      </div> */}
    </div>
    </footer>
    )
}

export default Footer
