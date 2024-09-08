"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {AIChatbotIcon} from "@/components/ui/chatbot"

import {
  Bell,
  Upload,
  FileText,
  HelpCircle,
  MessageSquare,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";

// Mock user data (replace with actual data fetching logic)
const userData = {
  name: "Kartik",
  progress: 70,
  status: "Under Review",
  notifications: [
    {
      id: 1,
      message: "Your document is missing",
      timestamp: "2023-06-15T10:30:00Z",
      type: "error",
    },
    {
      id: 2,
      message: "Application is under review",
      timestamp: "2023-06-14T14:45:00Z",
      type: "info",
    },
  ],
  documents: [
    { name: "Identity Proof", status: "Uploaded" },
    { name: "Business Registration", status: "Pending" },
    { name: "AYUSH Certification", status: "Error" },
  ],
  tickets: [
    { id: 1, title: "Issue with document upload", status: "Open" },
    { id: 2, title: "Clarification on guidelines", status: "Resolved" },
  ],
};

const statusColors = {
  "Under Review": "bg-yellow-500",
  Approved: "bg-green-500",
  "Documents Missing": "bg-red-500",
};

const notificationIcons = {
  error: <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0" />,
  info: <Bell className="h-5 w-5 text-blue-500 flex-shrink-0" />,
  success: <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />,
};

const documentStatusColors = {
  Uploaded: "text-green-500",
  Pending: "text-yellow-500",
  Error: "text-red-500",
};

const ticketStatusColors = {
  Open: "bg-red-100 text-red-800",
  "In Progress": "bg-yellow-100 text-yellow-800",
  Resolved: "bg-green-100 text-green-800",
};
type DocumentStatus = "Uploaded" | "Pending" | "Error";
  type NotificationType = "error" | "info" | "success";
  type Status = "Under Review" | "Approved" | "Documents Missing";
type TicketStatus = "Open" | "In Progress" | "Resolved";
export default function Dashboard() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  
  function handleChatbotOpen(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-50 to-blue-50">
      <Header />
      <main className="flex-grow p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <Card className="bg-white shadow-lg border-l-4 border-green-500">
            <CardContent className="p-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-green-800 break-words">
                Welcome to Your AYUSH Startup Dashboard
              </h1>
              <p className="mt-2 text-sm text-blue-700">
                Manage your startup registration, track progress, and access
                essential resources from your dashboard.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <p className="text-lg font-semibold text-green-700 mb-2 sm:mb-0">
                  Good Morning, {userData.name}!
                </p>
                <p className="text-sm text-blue-600">
                  {currentDate} | {currentTime}
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white shadow-lg">
              <CardHeader className="bg-green-100 p-4">
                <CardTitle className="text-green-800 text-lg sm:text-xl">
                  Your Registration Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <Progress
                  value={userData.progress}
                  className="w-full bg-green-200"
                  indicatorColor="bg-green-500"
                />
                <p className="mt-2 text-sm text-blue-700">
                  {userData.progress}% completed – Pending final approval
                </p>
                <div className="mt-4 flex flex-wrap justify-between text-xs text-green-600">
                  {[
                    "Registration Started",
                    "Documents Uploaded",
                    "Under Review",
                    "Approval Pending",
                    "Completed",
                  ].map((step, index) => (
                    <span key={index} className="mb-1 mr-1">
                      {step}
                    </span>
                  ))}
                </div>
                <Button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white">
                  Continue Registration
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader className="bg-blue-100 p-4">
                <CardTitle className="text-blue-800 text-lg sm:text-xl">
                  Application Status
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      statusColors[userData.status as Status]
                    }`}
                  ></div>
                  <span className="font-semibold text-blue-700">
                    {userData.status}
                  </span>
                </div>
                <div className="mt-4 space-y-2 sm:space-y-0 sm:space-x-2 flex flex-col sm:flex-row">
                  <Button
                    variant="outline"
                    className="border-blue-500 text-blue-500 hover:bg-blue-50 w-full sm:w-auto"
                  >
                    View Details
                  </Button>
                  <Button
                    variant="outline"
                    className="border-blue-500 text-blue-500 hover:bg-blue-50 w-full sm:w-auto"
                  >
                    Update Information
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <Card className="bg-white shadow-lg xl:col-span-2">
              <CardHeader className="bg-green-100 p-4">
                <CardTitle className="flex items-center text-green-800 text-lg sm:text-xl">
                  <Bell className="mr-2 h-5 w-5 flex-shrink-0" />
                  Notifications & Alerts
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {userData.notifications.map((notification) => (
                    <li
                      key={notification.id}
                      className="flex items-start space-x-3 p-3 bg-blue-50 rounded-md"
                    >
                      {notificationIcons[notification.type as NotificationType]}
                      <div className="flex-grow min-w-0">
                        <p className="text-sm font-medium text-blue-800 break-words">
                          {notification.message}
                        </p>
                        <p className="text-xs text-blue-600 mt-1">
                          {new Date(notification.timestamp).toLocaleString()}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader className="bg-blue-100 p-4">
                <CardTitle className="flex items-center text-blue-800 text-lg sm:text-xl">
                  <Upload className="mr-2 h-5 w-5 flex-shrink-0" />
                  Manage Your Documents
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {userData.documents.map((doc, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span className="text-blue-700 break-words mr-2">
                        {doc.name}
                      </span>
                      <span
                        className={`text-sm font-medium ${
                          documentStatusColors[doc.status as DocumentStatus]
                        } flex-shrink-0`}
                      >
                        {doc.status}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white">
                  Upload New Document
                </Button>
                <p className="mt-2 text-xs text-blue-600 text-center">
                  Supported formats: PDF, JPEG, PNG (max 5MB)
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white shadow-lg">
              <CardHeader className="bg-green-100 p-4">
                <CardTitle className="flex items-center text-green-800 text-lg sm:text-xl">
                  <MessageSquare className="mr-2 h-5 w-5 flex-shrink-0" />
                  Raise a Complaint or Track Support Tickets
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {userData.tickets.map((ticket) => (
                    <li
                      key={ticket.id}
                      className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0"
                    >
                      <span className="text-green-700 break-words mr-2">
                        {ticket.title}
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          ticketStatusColors[ticket.status as TicketStatus]
                        } flex-shrink-0`}
                      >
                        {ticket.status}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white">
                  Raise New Ticket
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader className="bg-blue-100 p-4">
                <CardTitle className="flex items-center text-blue-800 text-lg sm:text-xl">
                  <FileText className="mr-2 h-5 w-5 flex-shrink-0" />
                  Helpful Resources
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    className="w-full border-blue-500 text-blue-500 hover:bg-blue-50"
                  >
                    View Guidelines
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-blue-500 text-blue-500 hover:bg-blue-50"
                  >
                    Download Forms
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-blue-500 text-blue-500 hover:bg-blue-50"
                  >
                    FAQs
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-blue-500 text-blue-500 hover:bg-blue-50"
                  >
                    Contact Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white shadow-lg">
            <CardHeader className="bg-green-100 p-4">
              <CardTitle className="flex items-center text-green-800 text-lg sm:text-xl">
                <HelpCircle className="mr-2 h-5 w-5 flex-shrink-0" />
                Need Help?
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-sm text-blue-700 mb-4">
                Our 24/7 AI Support is here to help you with any questions or
                issues related to your registration process.
              </p>
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                Ask AI Assistant
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
      <AIChatbotIcon onOpen={handleChatbotOpen} />
    </div>
  );
}
