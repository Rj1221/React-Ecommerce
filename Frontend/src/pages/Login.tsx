import React, { useState, ChangeEvent } from "react";
import { FcGoogle } from "react-icons/fc";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const [gender, setGender] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const handleGenderChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value);
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  return (
    <>
      <div className="login">
        <main>
          <h1 className="heading">Login</h1>
          <div>
            <label htmlFor="gender">Gender</label>
            <select value={gender} onChange={handleGenderChange}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Prefer not to say</option>
            </select>
          </div>
          <div>
            <label htmlFor="date">Date of Birth</label>
            <input type="date" value={date} onChange={handleDateChange} />
          </div>
          <div>
            <p>Already Signed In Once</p>
            <button type="button">
              <FcGoogle /> <span>Sign In With Google</span>
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default Login;
