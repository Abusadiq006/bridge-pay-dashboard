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
    setError(''); // Clear previous errors

    try {
      // Connect to your real backend here
      // const data = await loginUser(formData.email, formData.password);
      
      // For now, simulate success
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userToken', 'dummy-token-123');
      
      console.log('Login successful');
      navigate('/dashboard');
    } catch (err) {
      setError(err.error || 'Invalid credentials. Please try again.');
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