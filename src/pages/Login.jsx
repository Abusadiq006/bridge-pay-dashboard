import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Eye, EyeOff, Lock, Mail } from 'lucide-react'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({ email:'', password:''})
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('isLoggedIn', 'true')
        localStorage.setItem('userToken', 'dummy-token-123')
        navigate('/dashboard')
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-4xl w-full bg-white md:rounded-2xl md:shadow-xl flex overflow-hidden">

                {/* Left Side: Form */}
                <div className="w-full md:w-1/2 p-8 md:p-12">
                    <div className="mb-10">
                        <div className="w-10 h-10 bg-purple-600 rounded-xl mb-4">
                            <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
                            <p className="text-gray-500 mt-2 text-sm">Log in to manage your BridgePay dashboard.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                <div className="relative"></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login