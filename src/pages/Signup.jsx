import React, { useState } from 'react';
import { useNavigate, Link, Form } from 'react-router-dom';
import { Eye, EyeOff, Lock, Mail, User, Building2, CheckCircle2 } from 'lucide-react';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        email: formData.email,
        password: formData.password,
        fullName: FormData.fullName
      })
    }
    // Later, we will connect this to your Node.js/Express backend
    console.log("Creating account for:", formData);
    
    // Simulate successful registration
    alert("Account created successfully! Please log in.");
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-5xl w-full bg-white md:rounded-2xl md:shadow-xl flex overflow-hidden">
        
        {/* Left Side: Branding/Value Prop */}
        <div className="hidden md:flex md:w-1/2 bg-purple-600 p-12 flex-col justify-between text-white relative">
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl mb-8 flex items-center justify-center">
               <div className="w-6 h-6 bg-white rounded-md"></div>
            </div>
            <h3 className="text-3xl font-bold leading-tight mb-6">Scale your business with global payouts.</h3>
            
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-purple-100">
                <CheckCircle2 size={20} className="text-purple-300" />
                <span>Instant settlement in multiple currencies.</span>
              </li>
              <li className="flex items-center gap-3 text-purple-100">
                <CheckCircle2 size={20} className="text-purple-300" />
                <span>Integration with Paystack & Flutterwave.</span>
              </li>
              <li className="flex items-center gap-3 text-purple-100">
                <CheckCircle2 size={20} className="text-purple-300" />
                <span>Bank-grade security and encryption.</span>
              </li>
            </ul>
          </div>
          
          <div className="relative z-10 text-sm text-purple-200">
            Join 5,000+ businesses using BridgePay.
          </div>
        </div>

        {/* Right Side: Signup Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Create your account</h2>
            <p className="text-gray-500 mt-2 text-sm">Start managing your fintech operations today.</p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400" size={18} />
                <input 
                  type="text"
                  required
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                />
              </div>
            </div>

            {/* Business Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Business Name</label>
              <div className="relative">
                <Building2 className="absolute left-3 top-3 text-gray-400" size={18} />
                <input 
                  type="text"
                  required
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
                  onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Work Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                <input 
                  type="email"
                  required
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
                <input 
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full pl-10 pr-12 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
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
              <p className="text-[10px] text-gray-400 mt-1">Must be at least 8 characters with a symbol.</p>
            </div>

            <button 
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl mt-2 transition-all shadow-lg shadow-purple-100"
            >
              Create Account
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account? {' '}
            <Link to="/login" className="text-purple-600 font-bold hover:underline">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;