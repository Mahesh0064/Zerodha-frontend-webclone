import React from "react";

function Signup() {
  return (
    <div className="container">
      <div className="row p-5 mt-5">
        <div className="col-6">
          <img src="media/images/signup.png" alt="signup image" />
        </div>
        <div className="col-6 text-center">
          <h1 className="fs-2 ">Signup now</h1>
          <p className="fs-4 text-muted mb-5">
            Or track your existing application.
          </p>
          +91 : <input type="number" placeholder="Enter mobile number" />
          <br />
          <br />
          <p className="text-muted fs-6">
            You will receive an OTP on your number
          </p>
          <br />
          <button
            className="p-2 btn btn-primary fs-5 "
            style={{ width: "40%", margin: "left" }}
          >
            Continue
          </button>
          <br />
          <br />
          <a href="">Want to open an NRI account?</a>
        </div>
      </div>
      <div className="row  p-5  text-muted text-center">
        <p>
          I authorise Zerodha to contact me even if my number is registered on
          DND. I authorise Zerodha to fetch my KYC information from the C-KYC
          registry with my PAN.
        </p>
        <p>
          {" "}
          Please visit <a href="">this article</a> to know more.
        </p>
        <p>
          If you are looking to open a HUF, Corporate, Partnership, or NRI
          account, you have to use the <a href="">offline forms</a>. For help,
          <a href="">click here</a>.
        </p>
      </div>
    </div>
  );
}

export default Signup;
