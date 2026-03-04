import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Eye, EyeOff, Lock, Mail, User, Building2, CheckCircle } from 'lucide-react'

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        fullName: '',
        businessName: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Creating account for:", formData)

        alert("Account created successfully! Please log in.")
        navigate('/login')
    }

    return (
        <div>
            <div>

                {/* Left Side: Branding/ Value prop */}
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default Signup