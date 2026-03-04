import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Eye, EyeOff, Lock, Mail, User, Building2, CheckCircle, CheckCircle2 } from 'lucide-react'

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
                <div className=" md:flex md:w-1/2 bg-purple-600 p-12 flex-col justify-between text-white relative">
                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl mb-8 flex items-center justify-center">
                            <div className="w-6 h-6 bg-white rounded-md"></div>
                        </div>
                        <h3 className="text-3xl font-bold leading-tight mb-6">Scale your business with global payouts.</h3>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-purple-100">
                                <CheckCircle2 size={20} className="text-purple-300"/>
                                <span>Instant settlement in multiple currencies.</span>
                            </li>
                            <li className="flex items-center gap-3 text-purple-100">
                                <CheckCircle2 size={20} className="text-purple-300"/>
                                <span>Integration with Paystack & Flutterwave.</span>
                            </li>
                            <li>
                                <CheckCircle2 />
                                <span>Bank-grade security and encryption.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup