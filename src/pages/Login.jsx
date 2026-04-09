import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
// import { loginUser } from '../api/auth'; // Ensure you import your login logic

const Login = () => {
  // 1. Move Hooks to the Top
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

 // 2. Consolidate the Submit Logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(''); 

    try {
      // 1. Send the login request to your backend
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email: formData.email,
        password: formData.password
      });

      // 2. Extract the token from your backend response
      // (Your backend sends it as response.data.token)
      const token = response.data.token;

      if (token) {
        // 3. Save the token so the Dashboard can use it for the Profile route
        localStorage.setItem('token', token);
        localStorage.setItem('isLoggedIn', 'true');
        
        console.log('Login successful');
        navigate('/dashboard');
      } else {
        throw new Error("No token received from server");
      }

    } catch (err) {
      // 4. Handle errors (e.g., "Invalid login credentials")
      console.error("Login error:", err);
      setError(err.response?.data?.error || 'Invalid credentials. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-4xl w-full bg-white md:rounded-2xl md:shadow-xl flex overflow-hidden">
        
        {/* Left Side: Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <div className="mb-10">
            <div className="w-10 h-10 bg-purple-600 rounded-xl mb-4"></div>
            <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
            <p className="text-gray-500 mt-2 text-sm">Log in to manage your BridgePay dashboard.</p>
          </div>

          {/* Show Error Message if it exists */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                <input 
                  type="email"
                  required
                  placeholder="name@company.com"
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
                <input 
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  className="w-full pl-10 pr-12 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className={`w-full ${loading ? 'bg-purple-400' : 'bg-purple-600 hover:bg-purple-700'} text-white font-semibold py-3 rounded-xl transition-all`}
            >
              {loading ? 'Logging in...' : 'Log In'}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-600">
            Don't have an account? {' '}
            <Link to="/signup" className="text-purple-600 font-bold hover:underline">Create account</Link>
          </p>
        </div>

        {/* Right Side: Branding */}
        <div className="hidden md:flex md:w-1/2 bg-purple-600 p-12 flex-col justify-between text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold leading-tight">Fast, secure payouts for your business.</h3>
            <p className="mt-4 text-purple-100 italic">"The most intuitive dashboard for managing international settlements."</p>
          </div>
          <div className="relative z-10 text-sm text-purple-200">
            © 2026 BridgePay Dashboard
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;