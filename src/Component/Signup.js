import React, { useState } from "react";

export const Signup = () => {
  const [registration, setregistration] = useState({
    Username: "",
    Phone: "",
    Email: "",
    Password: "",
  });
  const [record, setrecord] = useState([]);
  const handleInput = (i) => {
    const name = i.target.name;
    const value = i.target.value;

    setregistration({ ...registration, [name]: value });
  };
  const handleOutput = (o) => {
    o.preventDefault();
    const newrecord = { ...registration, id: new Date().getTime().toString() };
    setrecord([...record, newrecord]);
  };
  return (
    <div className="page">
      <h1>Sign Up</h1>
      <form action="" onSubmit={handleOutput}>
        <div className="txt_field">
          <input
            type="text"
            required
            autoComplete="off"
            name="Username"
            id="Username"
            value={registration.Usename}
            onChange={handleInput}
          />
          <span></span>
          <label htmlFor="Fullname">Full Name</label>
        </div>
        <div className="txt_field">
          <input
            type="tel"
            required
            autoComplete="off"
            name="Phone"
            id="Phone"
            value={registration.Phone}
            onChange={handleInput}
          />
          <span></span>
          <label htmlFor="Phone">Phone</label>
        </div>
        <div className="txt_field">
          <input
            type="email"
            required
            autoComplete="off"
            name="Email"
            id="Email"
            value={registration.Email}
            onChange={handleInput}
          />
          <span></span>
          <label htmlFor="Email">Email</label>
        </div>

        <div className="txt_field">
          <input
            type="password"
            required
            autoComplete="off"
            name="Password"
            id="Password"
            value={registration.Password}
            onChange={handleInput}
          />
          <span></span>
          <label htmlFor="Password">Password</label>
        </div>
        <input type="submit" value="Login" />
        <div className="signup_link">
          <a href="#">Forgot Password?</a>
        </div>

        <div className="signup_link">
          Not have account? <a href="#">Create account</a>
        </div>
      </form>
      <div>
        {record.map((output) => {
          const { id, Username, Phone, Email, Password } = output;
          return (
            <div className="showdata">
              <h3>Signup Data</h3>
              <div className="data" key={output.id}>
                <p>{Username}</p>
                <p>{Phone}</p>
                <p>{Email}</p>
                <p>{Password}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
