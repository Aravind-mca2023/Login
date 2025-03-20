import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUser, FaEnvelope, FaPhoneAlt, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from "axios"; 

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault(); 
    
    const userData = {
      name,
      email,
      contactNumber,
      password,
      confirmPassword,
    };
  
    console.log("Sending data to backend:", userData);
  
    try {
      const response = await axios.post("http://localhost:5000/api/register", userData);
      console.log(response.data.message);
      
      toast.success("Registered successfully! Redirecting to login...", {
        position: "top-right",
        autoClose: 2000, 
      });
  
      setTimeout(() => {
        navigate("/login");
      }, 2000);
      
    } catch (error) {
      console.error("Error:", error.response?.data?.message || "Registration failed");
      toast.error(error.response?.data?.message || "Registration failed");
    }
  };
  
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Register</h1>
        <form onSubmit={handleRegister} style={styles.form}>
          <div style={styles.inputContainer}>
            <FaUser style={styles.icon} />
            <input 
              type="text" 
              placeholder="Full Name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              style={styles.input} 
            />
          </div>
          <div style={styles.inputContainer}>
            <FaPhoneAlt style={styles.icon} />
            <input 
              type="text" 
              placeholder="Contact Number" 
              value={contactNumber} 
              onChange={(e) => setContactNumber(e.target.value)} 
              style={styles.input} 
            />
          </div>
          <div style={styles.inputContainer}>
            <FaEnvelope style={styles.icon} />
            <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              style={styles.input} 
            />
          </div>
          <div style={styles.inputContainer}>
            <FaLock style={styles.icon} />
            <input 
              type={passwordVisible ? 'text' : 'password'} 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              style={styles.input} 
            />
            <div style={styles.eyeIcon} onClick={() => setPasswordVisible(!passwordVisible)}>
              {passwordVisible ? <FaEyeSlash style={styles.eye} /> : <FaEye style={styles.eye} />}
            </div>
          </div>
          <div style={styles.inputContainer}>
            <FaLock style={styles.icon} />
            <input 
              type={confirmPasswordVisible ? 'text' : 'password'} 
              placeholder="Confirm Password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              style={styles.input} 
            />
            <div style={styles.eyeIcon} onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
              {confirmPasswordVisible ? <FaEyeSlash style={styles.eye} /> : <FaEye style={styles.eye} />}
            </div>
          </div>
          <button type="submit" style={styles.button}>Register</button>
        </form>
        <div style={styles.loginLinkContainer}>
          <p style={styles.loginText}>
            Already have an account? <Link to="/login" style={styles.loginLink}>Login</Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

const styles = {
  container: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', padding: '20px', backgroundColor: '#90d6bb' },
  card: { backgroundColor: '#ebf9ff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '400px' },
  title: { fontSize: '2.5rem', marginBottom: '20px', textAlign: 'center' },
  form: { display: 'flex', flexDirection: 'column', width: '100%' },
  inputContainer: { position: 'relative', display: 'flex', alignItems: 'center', marginBottom: '15px' },
  icon: { position: 'absolute', left: '10px', color: '#2b7a78', fontSize: '1.2rem' },
  input: { padding: '10px 10px 10px 35px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '1rem', width: '100%' },
  eyeIcon: { position: 'absolute', right: '10px', top: '12px', cursor: 'pointer' },
  eye: { fontSize: '1.5rem', color: '#2b7a78' },
  button: { padding: '12px', backgroundColor: '#2b7a78', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1.1rem' },
  loginLinkContainer: { marginTop: '15px' },
  loginText: { fontSize: '1rem' },
  loginLink: { color: '#2b7a78', textDecoration: 'none', fontWeight: 'bold' },
};

export default RegisterPage;
