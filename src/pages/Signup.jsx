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
                    <div>
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl mb-8 flex items-center justify-center">
                            <div className="w-6 h-6 bg-white rounded-md"></div>
                        </div>
                        <h3 className="text-3xl font-bold leading-tight mb-6">Scale your business with global payouts.</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup