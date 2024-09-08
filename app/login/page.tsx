'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Header } from "@/components/ui/Header"
import { Footer } from "@/components/ui/Footer"
import {AIChatbotIcon} from "@/components/ui/chatbot"


export default function LoginPage() {
  const [loginMethod, setLoginMethod] = useState('email')
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  useEffect(() => {
    // Clear the identifier and its error when login method changes
    setIdentifier('')
    setErrors(prev => ({ ...prev, identifier: '' }))
  }, [loginMethod])

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    // Validate identifier based on login method
    switch (loginMethod) {
      case 'email':
        if (!/\S+@\S+\.\S+/.test(identifier)) {
          newErrors.identifier = 'Invalid email address'
        }
        break
      case 'phone':
        if (!/^\d{10}$/.test(identifier)) {
          newErrors.identifier = 'Invalid phone number (must be 10 digits)'
        }
        break
      case 'aadhar':
        if (!/^\d{12}$/.test(identifier)) {
          newErrors.identifier = 'Invalid Aadhar number (must be 12 digits)'
        }
        break
      case 'pan':
        if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(identifier)) {
          newErrors.identifier = 'Invalid PAN (must be in format ABCDE1234F)'
        }
        break
    }

    // Validate password
    if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      // Here you would typically handle the login logic
      console.log('Login attempt:', { loginMethod, identifier, password, rememberMe })
    }
  }

  const getInputType = () => {
    switch (loginMethod) {
      case 'email':
        return 'email'
      case 'phone':
        return 'tel'
      case 'aadhar':
      case 'pan':
        return 'text'
      default:
        return 'text'
    }
  }

  const getInputPlaceholder = () => {
    switch (loginMethod) {
      case 'email':
        return 'Enter your email'
      case 'phone':
        return 'Enter your phone number'
      case 'aadhar':
        return 'Enter your Aadhar number'
      case 'pan':
        return 'Enter your PAN'
      default:
        return 'Enter your identifier'
    }
  }

  function handleChatbotOpen(): void {
    throw new Error('Function not implemented.')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 ">
      <Header/>
      <div className = "flex-grow flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold text-center text-primary">Login</CardTitle>
          <CardDescription className="text-center text-muted-foreground">
            Choose your login method and enter your credentials
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium">Login Method</Label>
              <RadioGroup
                defaultValue="email"
                onValueChange={setLoginMethod}
                className="flex flex-wrap gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="email" id="email" />
                  <Label htmlFor="email">Email</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="phone" id="phone" />
                  <Label htmlFor="phone">Phone</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="aadhar" id="aadhar" />
                  <Label htmlFor="aadhar">Aadhar</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pan" id="pan" />
                  <Label htmlFor="pan">PAN</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label htmlFor="identifier" className="text-sm font-medium">
                {loginMethod.charAt(0).toUpperCase() + loginMethod.slice(1)}
              </Label>
              <Input
                id="identifier"
                type={getInputType()}
                placeholder={getInputPlaceholder()}
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                required
                className="border-2 border-primary/20 focus:border-primary transition-colors"
              />
              {errors.identifier && (
                <Alert variant="destructive">
                  <AlertDescription>{errors.identifier}</AlertDescription>
                </Alert>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              {errors.password && (
                <Alert variant="destructive">
                  <AlertDescription>{errors.password}</AlertDescription>
                </Alert>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="rememberMe"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              />
              <Label htmlFor="rememberMe" className="text-sm font-medium">
                Remember me
              </Label>
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
              Login
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Link
            href="/forgot-password"
            className="text-sm text-primary hover:underline font-medium"
          >
            Forgot your password?
          </Link>
          <p className="text-sm text-center text-muted-foreground">
          {"Don't have an account?"} {' '}
          <Link href="/signup" className="text-primary hover:underline font-medium">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
      </div>
      <Footer/>
      <AIChatbotIcon onOpen={handleChatbotOpen} />
    </div>
  )
}
