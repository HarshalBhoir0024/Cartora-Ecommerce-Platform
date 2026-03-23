import React, { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault(); // prevent form reload
    if (!name || !email || !password) {
      alert("Please fill all fields!");
      return;
    }
    // temporary alert (replace later with API call)
    alert(`Login successful!\nName: ${name}\nEmail: ${email}`);
    
    // Clear fields
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <input 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password"
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;