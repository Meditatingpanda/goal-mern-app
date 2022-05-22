import { useState } from "react";
import { FaUser } from "react-icons/fa";
function Register() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    password1: "",
  });

  const { name, username, password, password1 } = formData;
  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <section className="heading">
        <h1>
          <FaUser />
          Register
        </h1>
        <p>Please Create A account</p>
      </section>
      <section className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={username}
              placeholder="Enter your Username"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter your Password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password1"
              name="password1"
              value={password1}
              placeholder="Re-enter Your password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Register;
