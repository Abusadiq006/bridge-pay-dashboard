import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Eye, EyeOff, Lock, Mail } from 'lucide-react'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({ email:'', password:''})
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        
    }
}

export default Login