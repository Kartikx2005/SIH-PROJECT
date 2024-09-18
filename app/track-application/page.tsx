'use client'


import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Bell, CheckCircle, Clock, XCircle, Search, Download, HelpCircle } from 'lucide-react'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'

// type TrackingInfo = {
//   type: string;
//   status: string;
//   stages: {
//     name: string;
//     completed: boolean;
//     timestamp: string | null;
//   }[];
//   description?: string;
//   lastUpdate?: string;
//   submissionDate: string;
//   documentVerification: string;
//   assignedOfficer: string;
//   officerContact: string;
// };

type ApplicationTrackingInfo = {
  type: 'Application';
  status: string;
  stages: {
    name: string;
    completed: boolean;
    timestamp: string | null;
  }[];
  submissionDate: string;
  documentVerification: string;
  assignedOfficer: string;
  officerContact: string;
};

// Define the structure for a ticket
type TicketTrackingInfo = {
  type: 'ticket';
  status: string;
  description: string;
  submissionDate: string;
  resolutionDate: string;
};

// Define the structure for a complaint
type ComplaintTrackingInfo = {
  type: 'complaint';
  status: string;
  description: string;
  submissionDate: string;
  lastUpdate: string;
};

// Define a union type that can be any of the above
type TrackingInfo = ApplicationTrackingInfo | TicketTrackingInfo | ComplaintTrackingInfo;

type MockTrackingData = {
  [key: string]: TrackingInfo;
};

// Mock data for demonstration
const mockTrackingData: Record<string, TrackingInfo> = {
  "APP123": {
    type: "Application",
    status: "Under Review",
    stages: [
      { name: "Application Received", completed: true, timestamp: "2023-06-15 10:30 AM" },
      { name: "Under Review", completed: true, timestamp: "2023-06-16 02:15 PM" },
      { name: "Approved/Rejected", completed: false, timestamp: null }
    ],
    submissionDate: "2023-06-15",
    documentVerification: "Pending",
    assignedOfficer: "John Doe",
    officerContact: "john.doe@ayush.gov.in"
  },
  "COM456": {
    type: "complaint",
    status: "In-Progress",
    description: "Issue with document upload",
    submissionDate: "2023-06-18",
    lastUpdate: "2023-06-19 11:45 AM"
  },
  "TIC789": {
    type: "ticket",
    status: "Resolved",
    description: "Query about registration process",
    submissionDate: "2023-06-20",
    resolutionDate: "2023-06-21 03:30 PM"
  }
}

export default function TrackingManagement() {
  const [trackingId, setTrackingId] = useState("")
  const [trackingResult, setTrackingResult] = useState<TrackingInfo | null>(null);
  const [error, setError] = useState("")

  const handleTrack = () => {
    setError("")
    if (trackingId in mockTrackingData) {
      setTrackingResult(mockTrackingData[trackingId as keyof typeof mockTrackingData]);
    } else {
      setError("Invalid Tracking ID, please try again.")
      setTrackingResult(null)
    }
  }

  const getStatusColor = (status : string ) => {
    switch (status) {
      case "Approved":
        return "text-green-500"
      case "Rejected":
        return "text-red-500"
      default:
        return "text-orange-500"
    }
  }

  const getStatusIcon = (status : string ) => {
    switch (status) {
      case "Approved":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "Rejected":
        return <XCircle className="h-5 w-5 text-red-500" />
      default:
        return <Clock className="h-5 w-5 text-orange-500" />
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-50 to-blue-50">
      <Header />
      <main className="flex-grow p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold text-center text-green-800">Tracking Management</h1>

          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
                <label htmlFor="trackingId" className="sr-only">Enter Tracking ID</label>
                <Input
                  id="trackingId"
                  placeholder="Enter Tracking ID"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  className="flex-grow"
                />
                <Button onClick={handleTrack} className="bg-green-500 hover:bg-green-600 text-white w-full sm:w-auto">
                  Track
                </Button>
              </div>
              {error && <p className="mt-2 text-red-500">{error}</p>}
            </CardContent>
          </Card>

          {trackingResult && (
            <Card className="bg-white shadow-lg">
              <CardHeader className="bg-blue-100">
                <CardTitle className="text-blue-800 text-xl flex items-center">
                  {getStatusIcon(trackingResult.status)}
                  <span className="ml-2">Status: </span>
                  <span className={`ml-2 ${getStatusColor(trackingResult.status)}`}>
                    {trackingResult.status}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {trackingResult.type === "Application" && (
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Application Progress</h3>
                      <Progress value={
                        (trackingResult.stages.filter(stage => stage.completed).length / trackingResult.stages.length) * 100
                      } className="h-2 bg-gray-200" indicatorColor="bg-green-500" />
                    </div>
                    <div className="space-y-2">
                      {trackingResult.stages.map((stage, index) => (
                        <div key={index} className="flex items-center">
                          {stage.completed ? (
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          ) : (
                            <Clock className="h-5 w-5 text-orange-500 mr-2" />
                          )}
                          <span className={stage.completed ? "text-green-700" : "text-orange-700"}>
                            {stage.name}
                          </span>
                          {stage.timestamp && (
                            <span className="ml-2 text-sm text-gray-500">
                              ({stage.timestamp})
                            </span>
                          )}eyJhbGciOiJSUzI1NiIsImtpZCI6IjAyMTAwNzE2ZmRkOTA0ZTViNGQ0OTExNmZmNWRiZGZjOTg5OTk0MDEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiS2FydGlrIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0p4MGlnSVVGVzlyQmszbEJTcFRKbTJDa3hxbzhTTWhneUpJaTFWZTl0eFRtZXVpZz1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9leGEyLWZiMTcwIiwiYXVkIjoiZXhhMi1mYjE3MCIsImF1dGhfdGltZSI6MTcyNjA0MTIyMywidXNlcl9pZCI6IlJvMkl0dnR6QjhVUDZHdnNLQXpyb3NkOFFrQzMiLCJzdWIiOiJSbzJJdHZ0ekI4VVA2R3ZzS0F6cm9zZDhRa0MzIiwiaWF0IjoxNzI2MDQxMjI3LCJleHAiOjE3MjYwNDQ4MjcsImVtYWlsIjoia2FydGlreGRldjIwMDVAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMDc3MTY2OTA1MjIzOTIwNjU0MjIiXSwiZW1haWwiOlsia2FydGlreGRldjIwMDVAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.exC29xdTXCXnSBZmLcOCBSkFfX_JitAMbj3nxHorF8O6al3V2uWqNHyCRdmfwzTTk0FbyVjyKcnFdf3CI3FhpRa9W1XCxZdXPvfkwFV1W_4CMi5tLA2UjUCfLXccS7V5hvf48Ljst2rk9107AB-yJLGAUGKD4jql8LcM37G8K45RQ2KafRmmH3E-oBwfnRicBL11CXHoVanPbBLNkXnN8kLnNBjhl3mdS8mNJu8J_KfhCLUG9iHwXv9jAqxZTbTfSW-5wCsCTSmOQstJBPJFjO6sp4807moNfOMzIow3RZem-Fgj6EmbmamcoWmbZLD9DyJ4KtUbYHLPtZ4IsnCRYw
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                      <div>
                        <p className="font-semibold">Submission Date:</p>
                        <p>{trackingResult.submissionDate}</p>
                      </div>
                      <div>
                        <p className="font-semibold">Document Verification:</p>
                        <p>{trackingResult.documentVerification}</p>
                      </div>
                      <div>
                        <p className="font-semibold">Assigned Officer:</p>
                        <p>{trackingResult.assignedOfficer}</p>
                      </div>
                      <div>
                        <p className="font-semibold">Officer Contact:</p>
                        <p>{trackingResult.officerContact}</p>
                      </div>
                    </div>
                    <Button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white">
                      <Download className="h-4 w-4 mr-2" />
                      Download Documents
                    </Button>
                  </div>
                )}
                {(trackingResult.type === "complaint" || trackingResult.type === "ticket") && (
                  <div className="space-y-4">
                    <p><span className="font-semibold">Description:</span> {trackingResult.description}</p>
                    <p><span className="font-semibold">Submission Date:</span> {trackingResult.submissionDate}</p>
                    {trackingResult.type === "complaint" && (
                      <p><span className="font-semibold">Last Update:</span> {trackingResult.lastUpdate}</p>
                    )}
                    {trackingResult.type === "ticket" && trackingResult.resolutionDate && (
                      <p><span className="font-semibold">Resolution Date:</span> {trackingResult.resolutionDate}</p>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          <Card className="bg-white shadow-lg">
            <CardHeader className="bg-green-100">
              <CardTitle className="text-green-800 text-xl">Manage Tickets</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <Tabs defaultValue="complaints">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="complaints">Complaints</TabsTrigger>
                  <TabsTrigger value="tickets">Support Tickets</TabsTrigger>
                </TabsList>
                <TabsContent value="complaints" className="mt-4">
                  <p className="text-gray-600 mb-4">Track and manage your complaints here.</p>
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white">Raise New Complaint</Button>
                </TabsContent>
                <TabsContent value="tickets" className="mt-4">
                  <p className="text-gray-600 mb-4">View and track your support tickets.</p>
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white">Raise New Ticket</Button>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader className="bg-blue-100">
              <CardTitle className="text-blue-800 text-xl flex items-center">
                <Search className="h-5 w-5 mr-2" />
                Search and Filter
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <Input placeholder="Search previous entries" className="flex-grow" />
                <Button className="bg-green-500 hover:bg-green-600 text-white w-full sm:w-auto">Search</Button>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
                  Filter by Date
                </Button>
                <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
                  Filter by Status
                </Button>
                <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
                  Filter by Type
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white flex items-center">
              <HelpCircle className="h-5 w-5 mr-2" />
              Contact Support
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}