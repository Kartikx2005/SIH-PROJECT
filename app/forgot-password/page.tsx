"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";

export default function ForgotPasswordPage() {
  const [verificationMethod, setVerificationMethod] = useState("email");
  const [identifier, setIdentifier] = useState("");
  const [otp, setOtp] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [otpSent, setOtpSent] = useState(false);

  useEffect(() => {
    // Clear the identifier and its error when verification method changes
    setIdentifier("");
    setErrors((prev) => ({ ...prev, identifier: "" }));
    setOtpSent(false);
  }, [verificationMethod]);

  const validateIdentifier = () => {
    const newErrors: { [key: string]: string } = {};

    switch (verificationMethod) {
      case "email":
        if (!/\S+@\S+\.\S+/.test(identifier)) {
          newErrors.identifier = "Invalid email address";
        }
        break;
      case "phone":
        if (!/^\d{10}$/.test(identifier)) {
          newErrors.identifier = "Invalid phone number (must be 10 digits)";
        }
        break;
      case "aadhar":
        if (!/^\d{12}$/.test(identifier)) {
          newErrors.identifier = "Invalid Aadhar number (must be 12 digits)";
        }
        break;
      case "pan":
        if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(identifier)) {
          newErrors.identifier = "Invalid PAN (must be in format ABCDE1234F)";
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSendOtp = () => {
    if (validateIdentifier()) {
      // Here you would typically send the OTP to the user
      console.log("Sending OTP to:", identifier);
      setOtpSent(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateIdentifier() && otp) {
      // Here you would typically verify the OTP and reset the password
      console.log("Verifying OTP:", otp);
    }
  };

  const getInputType = () => {
    switch (verificationMethod) {
      case "email":
        return "email";
      case "phone":
        return "tel";
      case "aadhar":
      case "pan":
        return "text";
      default:
        return "text";
    }
  };

  const getInputPlaceholder = () => {
    switch (verificationMethod) {
      case "email":
        return "Enter your email";
      case "phone":
        return "Enter your phone number";
      case "aadhar":
        return "Enter your Aadhar number";
      case "pan":
        return "Enter your PAN";
      default:
        return "Enter your identifier";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 ">
      <Header />
      <div className="flex-grow flex items-center justify-center p-4">
        <Card className="w-full max-w-md mx-auto shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold text-center text-primary">
              Forgot Password
            </CardTitle>
            <CardDescription className="text-center text-muted-foreground">
              Choose a verification method to reset your password
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">
                  Verification Method
                </Label>
                <RadioGroup
                  defaultValue="email"
                  onValueChange={setVerificationMethod}
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
                  {verificationMethod.charAt(0).toUpperCase() +
                    verificationMethod.slice(1)}
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
              {!otpSent ? (
                <Button
                  type="button"
                  onClick={handleSendOtp}
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                >
                  Send OTP
                </Button>
              ) : (
                <div className="space-y-2">
                  <Label htmlFor="otp" className="text-sm font-medium">
                    OTP
                  </Label>
                  <Input
                    id="otp"
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                    className="border-2 border-primary/20 focus:border-primary transition-colors"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                  >
                    Verify OTP
                  </Button>
                </div>
              )}
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <div className="flex justify-between w-full">
              <Link href="/login">
                <Button variant="outline">Back to Login</Button>
              </Link>
              <Link href="/signup">
                <Button variant="outline">Register New User</Button>
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
