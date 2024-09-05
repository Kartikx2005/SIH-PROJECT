'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { Calendar as CalendarIcon, Eye, EyeOff, Upload, CheckCircle2, Loader2 } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Header } from "@/components/ui/Header"
import { Footer } from "@/components/ui/Footer"


export default function Component() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    aadhar: '',
    pan: '',
    dob: null,
    password: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState(0)
  const [uploadStatus, setUploadStatus] = useState('idle') // 'idle', 'uploading', 'success', 'error'
  const [uploadedFile, setUploadedFile] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    validateField(name, value)
  }

  const validateField = (name, value) => {
    let error = ''
    switch (name) {
      case 'email':
        error = !/\S+@\S+\.\S+/.test(value) ? 'Invalid email address' : ''
        break
      case 'aadhar':
        error = !/^\d{12}$/.test(value) ? 'Aadhar number must be 12 digits' : ''
        break
      case 'pan':
        error = !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value) ? 'Invalid PAN number' : ''
        break
      case 'password':
        setPasswordStrength(calculatePasswordStrength(value))
        error = value.length < 8 ? 'Password must be at least 8 characters long' : ''
        break
      case 'confirmPassword':
        error = value !== formData.password ? 'Passwords do not match' : ''
        break
      default:
        break
    }
    setErrors(prev => ({ ...prev, [name]: error }))
  }

  const calculatePasswordStrength = (password) => {
    let strength = 0
    if (password.length >= 8) strength += 25
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength += 25
    if (password.match(/\d/)) strength += 25
    if (password.match(/[^a-zA-Z\d]/)) strength += 25
    return strength
  }

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setUploadStatus('uploading')
      // Simulating an upload process
      setTimeout(() => {
        setUploadedFile(file)
        setUploadStatus('success')
      }, 2000)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 ">
      <Header/>
      <div className = "flex-grow flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl mx-auto shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold text-center text-primary">Create Your Account</CardTitle>
          <CardDescription className="text-center text-muted-foreground">
            Sign up now and join our amazing community!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-sm font-medium">Full Name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="border-2 border-primary/20 focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="border-2 border-primary/20 focus:border-primary transition-colors"
                />
                {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="border-2 border-primary/20 focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="aadhar" className="text-sm font-medium">Aadhar Card Number</Label>
                <Input
                  id="aadhar"
                  name="aadhar"
                  value={formData.aadhar}
                  onChange={handleInputChange}
                  required
                  className="border-2 border-primary/20 focus:border-primary transition-colors"
                />
                {errors.aadhar && <p className="text-sm text-red-500">{errors.aadhar}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="pan" className="text-sm font-medium">PAN Number</Label>
                <Input
                  id="pan"
                  name="pan"
                  value={formData.pan}
                  onChange={handleInputChange}
                  required
                  className="border-2 border-primary/20 focus:border-primary transition-colors"
                />
                {errors.pan && <p className="text-sm text-red-500">{errors.pan}</p>}
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Date of Birth</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal border-2 border-primary/20 hover:bg-primary/10",
                        !formData.dob && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.dob ? format(formData.dob, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.dob}
                      onSelect={(date) => setFormData(prev => ({ ...prev, dob: date }))}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="profilePhoto" className="text-sm font-medium">Profile Photo</Label>
              <div className="flex items-center space-x-2">
                <Input
                  id="profilePhoto"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileUpload}
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => document.getElementById('profilePhoto').click()}
                  className="w-full border-2 border-primary/20 hover:bg-primary/10"
                  disabled={uploadStatus === 'uploading'}
                >
                  {uploadStatus === 'uploading' ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Upload className="mr-2 h-4 w-4" />
                      {uploadedFile ? 'Change Photo' : 'Upload Photo'}
                    </>
                  )}
                </Button>
              </div>
              {uploadStatus === 'success' && (
                <Alert className="mt-2 bg-green-50 text-green-700 border-green-200">
                  <CheckCircle2 className="h-4 w-4" />
                  <AlertDescription>
                    File "{uploadedFile.name}" uploaded successfully!
                  </AlertDescription>
                </Alert>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="border-2 border-primary/20 focus:border-primary transition-colors pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
              <Progress value={passwordStrength} className="w-full h-2" />
              <p className="text-sm text-muted-foreground">
                Password strength: {passwordStrength === 100 ? 'Strong' : passwordStrength >= 50 ? 'Medium' : 'Weak'}
              </p>
              {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-sm font-medium">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
                className="border-2 border-primary/20 focus:border-primary transition-colors"
              />
              {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword}</p>}
            </div>
            <div className="space-y-2 bg-primary/5 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-primary">Password Suggestions:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                  Use at least 8 characters
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                  Include both uppercase and lowercase letters
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                  Use at least one number
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                  Include at least one special character (e.g., !@#$%^&*)
                </li>
              </ul>
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">Create Account</Button>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-center w-full text-muted-foreground">
            Already have an account? <Link href="/login" className="text-primary hover:underline font-medium">Log in</Link>
          </p>
        </CardFooter>
      </Card>
    </div>
    <Footer/>
    </div>
  )
}
