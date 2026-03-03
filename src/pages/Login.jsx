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
            
        </div>
    )
}

export default Login