import React from "react";
import "../Style/header.css";
function Navbar() {
  return (
    <nav>
      <div className="navLink">
        <img
          src="data:image/png;base64,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"
          alt="Loading img"
        />
        <a href="">Consult a Doctor</a>
      </div>
      <div className="navLink">
        <img
          src="data:image/png;base64,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"
          alt="Loading img"
        />
        <a href="">Order Medicine</a>
      </div>
      <div className="navLink">
        <img
          src="data:image/png;base64,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"
          alt="Loading img"
        />
        <a href="">Book for Diagnostic</a>
      </div>
      <div className="socialIcon">
      {/* adding social media links */}
        <a href="https://www.facebook.com/help/104002523024878" target="blank" class="fa fa-facebook"></a>
        <a href="https://twitter.com/i/flow/login" target="blank" class="fa fa-twitter"></a>
        <a href="https://www.youtube.com/" target="blank" class="fa fa-youtube"></a>
      </div>
    </nav>
  );
}

export default Navbar;
