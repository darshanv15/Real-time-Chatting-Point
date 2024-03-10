import { useState } from "react";
import axios from "axios";
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const authObject = {
      "Project-ID": "a397fac9-3150-420e-aa04-67754527b12d",
      "User-Name": username,
      "User-Secret": password,
    };
    try {
      // username / password => chatengine -> give messages

      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });
      // works out -> logged in
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
    } catch (error) {
      // error -> try with new username ...
      setError("Oops incorrect credentails...!");
    }
  };
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chatting Point</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          {/* <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="input" placeholder="Password" maxLength={8} required/> */}
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
            className="input"
            placeholder="Password"
            maxLength={8}
            required
          />
          <label>
            <input
              style={{ marginLeft: "20px", marginBottom: "10px" }}
              type="checkbox"
              onChange={toggleShowPassword}
              checked={showPassword}
            />
            &nbsp;<span style={{ color: "white" }}>Show Password</span>
          </label>
          <div align="center">
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
          </div>
          <br />
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
