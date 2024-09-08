"use client";

import { useState, useEffect } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {AIChatbotIcon} from "@/components/ui/chatbot"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";

const formSchema = z.object({
  startupName: z
    .string()
    .min(2, { message: "Startup name must be at least 2 characters." }),
  ayushDiscipline: z.enum(
    ["Ayurveda", "Yoga", "Naturopathy", "Unani", "Siddha", "Homoeopathy"],
    {
      required_error: "Please select an AYUSH discipline.",
    }
  ),
  businessType: z.enum(["Sole Proprietorship", "Partnership", "Company"], {
    required_error: "Please select a business type.",
  }),
  founderIds: z.any().optional(),
  registrationCertificate: z.any().optional(),
  ayushCertification: z.any().optional(),
  tin: z
    .string()
    .regex(/^\d{9}$/, { message: "TIN must be 9 digits." })
    .optional(),
  addressProof: z.any().optional(),
  ownershipDeed: z.any().optional(),
  noc: z.any().optional(),
  financialStatements: z.any().optional(),
  productsServices: z
    .string()
    .min(10, {
      message: "Please provide more details about your products/services.",
    })
    .optional(),
  email: z.string().email({ message: "Invalid email address." }).optional(),
  phone: z
    .string()
    .regex(/^\d{10}$/, { message: "Phone number must be 10 digits." })
    .optional(),
  location: z
    .string()
    .min(5, { message: "Please provide a valid location." })
    .optional(),
  startupStage: z
    .enum(["Idea Stage", "Early-Stage", "Growth Stage"])
    .optional(),
  targetMarket: z
    .string()
    .min(20, {
      message: "Please provide more details about your target market.",
    })
    .optional(),
  complianceCheck: z.boolean().optional(),
  fundingStatus: z
    .enum(["Self-Funded", "Seed Funding", "Venture Capital"])
    .optional(),
  futurePlans: z
    .string()
    .min(50, {
      message: "Please provide more details about your future plans.",
    })
    .optional(),
});

type FormData = z.infer<typeof formSchema>;

const formSections = [
  "Startup Information",
  "Founder Details",
  "Company Details",
  "Legal and Financial Documents",
  "Business Details",
  "Market and Compliance",
];

export default function StartupRegistrationForm() {
  const [currentSection, setCurrentSection] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState<"success" | "error">("success");
  const [formData, setFormData] = useState<Partial<FormData>>({});

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    defaultValues: formData,
  });

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (type === "change") {
        setFormData((current) => ({
          ...current,
          [name as keyof typeof formData]: value,
        }));
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const isFormComplete = Object.values(data).every(
      (value) => value !== undefined && value !== ""
    );
    if (isFormComplete) {
      console.log(data);
      setAlertMessage("Form submitted successfully!");
      setAlertType("success");
    } else {
      setAlertMessage("Please fill in all required fields before submitting.");
      setAlertType("error");
    }
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  const nextSection = () => {
    setCurrentSection((prev) => Math.min(prev + 1, formSections.length - 1));
  };

  const prevSection = () => {
    setCurrentSection((prev) => Math.max(prev - 1, 0));
  };

  const renderSection = () => {
    switch (currentSection) {
      case 0:
        return (
          <>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="startupName">Startup Name</Label>
                <Input
                  id="startupName"
                  placeholder="Enter your startup name"
                  {...register("startupName")}
                />
                {errors.startupName && (
                  <p className="text-red-500 text-sm">
                    {errors.startupName.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="ayushDiscipline">AYUSH Discipline</Label>
                <Controller
                  name="ayushDiscipline"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select AYUSH discipline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Ayurveda">Ayurveda</SelectItem>
                        <SelectItem value="Yoga">Yoga</SelectItem>
                        <SelectItem value="Naturopathy">Naturopathy</SelectItem>
                        <SelectItem value="Unani">Unani</SelectItem>
                        <SelectItem value="Siddha">Siddha</SelectItem>
                        <SelectItem value="Homoeopathy">Homoeopathy</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.ayushDiscipline && (
                  <p className="text-red-500 text-sm">
                    {errors.ayushDiscipline.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label>Business Type</Label>
                <Controller
                  name="businessType"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Sole Proprietorship" id="sole" />
                        <Label htmlFor="sole">Sole Proprietorship</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Partnership" id="partnership" />
                        <Label htmlFor="partnership">Partnership</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Company" id="company" />
                        <Label htmlFor="company">Company</Label>
                      </div>
                    </RadioGroup>
                  )}
                />
                {errors.businessType && (
                  <p className="text-red-500 text-sm">
                    {errors.businessType.message}
                  </p>
                )}
              </div>
            </div>
          </>
        );
      case 1:
        return (
          <>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="founderIds">
                  Founders&apos; Identification
                </Label>
                <Input
                  id="founderIds"
                  type="file"
                  multiple
                  {...register("founderIds")}
                  onChange={(e) => {
                    register("founderIds").onChange(e);
                    setFormData((prev) => ({
                      ...prev,
                      founderIds: e.target.files,
                    }));
                  }}
                />
                {errors.founderIds && (
                  <p className="text-red-500 text-sm">
                    {typeof errors.founderIds?.message === "string" && (
                      <p>{errors.founderIds.message}</p>
                    )}
                  </p>
                )}
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="registrationCertificate">
                  Company Registration Certificate
                </Label>
                <Input
                  id="registrationCertificate"
                  type="file"
                  {...register("registrationCertificate")}
                  onChange={(e) => {
                    register("registrationCertificate").onChange(e);
                    setFormData((prev) => ({
                      ...prev,
                      registrationCertificate: e.target.files?.[0],
                    }));
                  }}
                />
                {errors.registrationCertificate && (
                  <p className="text-red-500 text-sm">
                    {errors.registrationCertificate?.message === "string" && (
                      <p>{errors.registrationCertificate.message}</p>
                    )}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="ayushCertification">
                  AYUSH Practice Certification
                </Label>
                <Input
                  id="ayushCertification"
                  type="file"
                  {...register("ayushCertification")}
                  onChange={(e) => {
                    register("ayushCertification").onChange(e);
                    setFormData((prev) => ({
                      ...prev,
                      ayushCertification: e.target.files?.[0],
                    }));
                  }}
                />
                {errors.ayushCertification && (
                  <p className="text-red-500 text-sm">
                    {typeof errors.registrationCertificate?.message ===
                      "string" && (
                      <p>{errors.registrationCertificate.message}</p>
                    )}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="tin">Tax Identification Number (TIN)</Label>
                <Input
                  id="tin"
                  placeholder="Enter your TIN"
                  {...register("tin")}
                />
                {errors.tin && (
                  <p className="text-red-500 text-sm">{errors.tin.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="addressProof">Proof of Address</Label>
                <Input
                  id="addressProof"
                  type="file"
                  {...register("addressProof")}
                  onChange={(e) => {
                    register("addressProof").onChange(e);
                    setFormData((prev) => ({
                      ...prev,
                      addressProof: e.target.files?.[0],
                    }));
                  }}
                />
                {errors.addressProof && (
                  <p className="text-red-500 text-sm">
                    {typeof errors.addressProof?.message === "string" && (
                      <p>{errors.addressProof.message}</p>
                    )}
                  </p>
                )}
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="ownershipDeed">
                  Partnership/Ownership Deed
                </Label>
                <Input
                  id="ownershipDeed"
                  type="file"
                  {...register("ownershipDeed")}
                  onChange={(e) => {
                    register("ownershipDeed").onChange(e);
                    setFormData((prev) => ({
                      ...prev,
                      ownershipDeed: e.target.files?.[0],
                    }));
                  }}
                />
                {errors.ownershipDeed && (
                  <p className="text-red-500 text-sm">
                    {typeof errors.ownershipDeed?.message === "string" && (
                      <p>{errors.ownershipDeed.message}</p>
                    )}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="noc">NOC from Local Authorities</Label>
                <Input
                  id="noc"
                  type="file"
                  {...register("noc")}
                  onChange={(e) => {
                    register("noc").onChange(e);
                    setFormData((prev) => ({
                      ...prev,
                      noc: e.target.files?.[0],
                    }));
                  }}
                />
                {errors.noc && (
                  <p className="text-red-500 text-sm">
                    {typeof errors.noc?.message === "string" && (
                      <p>{errors.noc.message}</p>
                    )}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="financialStatements">
                  Financial Statements
                </Label>
                <Input
                  id="financialStatements"
                  type="file"
                  {...register("financialStatements")}
                  onChange={(e) => {
                    register("financialStatements").onChange(e);
                    setFormData((prev) => ({
                      ...prev,
                      financialStatements: e.target.files?.[0],
                    }));
                  }}
                />
                {errors.financialStatements && (
                  <p className="text-red-500 text-sm">
                    {typeof errors.financialStatements?.message ===
                      "string" && <p>{errors.financialStatements.message}</p>}
                  </p>
                )}
              </div>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="productsServices">
                  List of Products/Services
                </Label>
                <Textarea
                  id="productsServices"
                  placeholder="List your products/services"
                  {...register("productsServices")}
                />
                {errors.productsServices && (
                  <p className="text-red-500 text-sm">
                    {errors.productsServices.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  placeholder="Enter your phone number"
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Operational Location</Label>
                <Input
                  id="location"
                  placeholder="Enter your primary business location"
                  {...register("location")}
                />
                {errors.location && (
                  <p className="text-red-500 text-sm">
                    {errors.location.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="startupStage">Startup Stage</Label>
                <Controller
                  name="startupStage"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select startup stage" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Idea Stage">Idea Stage</SelectItem>
                        <SelectItem value="Early-Stage">Early-Stage</SelectItem>
                        <SelectItem value="Growth Stage">
                          Growth Stage
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.startupStage && (
                  <p className="text-red-500 text-sm">
                    {errors.startupStage.message}
                  </p>
                )}
              </div>
            </div>
          </>
        );
      case 5:
        return (
          <>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="targetMarket">Target Market</Label>
                <Textarea
                  id="targetMarket"
                  placeholder="Describe your target audience"
                  {...register("targetMarket")}
                />
                {errors.targetMarket && (
                  <p className="text-red-500 text-sm">
                    {errors.targetMarket.message}
                  </p>
                )}
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="complianceCheck"
                  {...register("complianceCheck")}
                />
                <Label htmlFor="complianceCheck">
                  I confirm awareness of AYUSH regulations
                </Label>
              </div>
              {errors.complianceCheck && (
                <p className="text-red-500 text-sm">
                  {errors.complianceCheck.message}
                </p>
              )}
              <div className="space-y-2">
                <Label htmlFor="fundingStatus">Funding Status</Label>
                <Controller
                  name="fundingStatus"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select funding status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Self-Funded">Self-Funded</SelectItem>
                        <SelectItem value="Seed Funding">
                          Seed Funding
                        </SelectItem>
                        <SelectItem value="Venture Capital">
                          Venture Capital
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.fundingStatus && (
                  <p className="text-red-500 text-sm">
                    {errors.fundingStatus.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="futurePlans">Future Plans</Label>
                <Textarea
                  id="futurePlans"
                  placeholder="Describe your growth and expansion plans"
                  {...register("futurePlans")}
                />
                {errors.futurePlans && (
                  <p className="text-red-500 text-sm">
                    {errors.futurePlans.message}
                  </p>
                )}
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  function handleChatbotOpen(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-100 to-indigo-200">
      <Header />
      <div className="flex-grow flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              AYUSH Startup Registration
            </CardTitle>
            <CardDescription className="text-center">
              Complete the form to register your AYUSH startup
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-lg font-semibold">
                    Registration Progress
                  </Label>
                  <Progress
                    value={(currentSection / (formSections.length - 1)) * 100}
                    className="w-full h-2"
                  />
                </div>
                <h2 className="text-xl font-bold mb-4 text-center bg-primary text-primary-foreground py-2 rounded-md">
                  {formSections[currentSection]}
                </h2>
                {renderSection()}
                <div className="flex justify-between mt-6">
                  {currentSection > 0 && (
                    <Button
                      type="button"
                      onClick={prevSection}
                      variant="outline"
                    >
                      Previous
                    </Button>
                  )}
                  {currentSection < formSections.length - 1 ? (
                    <Button type="button" onClick={nextSection}>
                      Next
                    </Button>
                  ) : (
                    <Button type="submit">Submit</Button>
                  )}
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-gray-500 w-full text-center">
              Need help? Contact support at support@ayushstartup.com
            </p>
          </CardFooter>
        </Card>
      </div>
      {showAlert && (
        <Alert
          className={`fixed bottom-4 right-4 w-96 ${
            alertType === "success"
              ? "bg-green-100 border-green-400 text-green-700"
              : "bg-red-100 border-red-400 text-red-700"
          }`}
        >
          {alertType === "success" ? (
            <CheckCircle2 className="h-4 w-4" />
          ) : (
            <AlertCircle className="h-4 w-4" />
          )}
          <AlertTitle>
            {alertType === "success" ? "Success" : "Error"}
          </AlertTitle>
          <AlertDescription>{alertMessage}</AlertDescription>
        </Alert>
      )}
      <Footer />
      <AIChatbotIcon onOpen={handleChatbotOpen} />
    </div>
    
  );
}
