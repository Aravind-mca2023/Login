import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(`Attempting login with Email: ${email}`);

    if (email && password) {
      try {
        const response = await axios.post('http://localhost:5000/api/login', { email, password });

        console.log('API Response:', response.data);

        if (response.data.token) {
          toast.success('Login successful!');
          localStorage.setItem('token', response.data.token);
          setTimeout(() => {
            navigate('/home');
          }, 1500);
        } else {
          toast.error('Invalid email or password');
        }
      } catch (error) {
        console.error('Login error:', error.response ? error.response.data : error.message);
        toast.error('An error occurred during login.');
      }
    } else {
      toast.warning('Please enter email and password');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Login</h1>

        <form onSubmit={handleLogin} style={styles.form}>
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
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
            <div
              style={styles.eyeIcon}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash style={styles.eye} /> : <FaEye style={styles.eye} />}
            </div>
          </div>
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>

        <p style={styles.registerText}>
          Don't have an account? <Link to="/register" style={styles.registerLink}>Register</Link>
        </p>
      </div>

      <ToastContainer />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#90d6bb',
    padding: '20px',
  },
  card: {
    width: '400px',
    padding: '20px',
    backgroundColor: '#ebf9ff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  inputContainer: {
    position: 'relative',
    marginBottom: '15px',
  },
  icon: {
    position: 'absolute',
    top: '50%',
    left: '10px',
    transform: 'translateY(-50%)',
    fontSize: '1.2rem',
    color: '#2b7a78',
  },
  input: {
    padding: '10px 10px 10px 30px',
    width: '90%',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  button: {
    padding: '12px',
    backgroundColor: '#2b7a78',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1.1rem',
  },
  registerText: {
    marginTop: '20px',
    fontSize: '1rem',
  },
  registerLink: {
    color: '#2b7a78',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  eyeIcon: {
    position: 'absolute',
    top: '50%',
    right: '10px',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
  },
  eye: {
    fontSize: '1.5rem',
    color: '#2b7a78',
  },
};

export default LoginPage;