import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { MessageSquare, X } from 'lucide-react'

interface AIChatbotIconProps {
  onOpen: () => void
}

export function AIChatbotIcon({ onOpen }: AIChatbotIconProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="icon"
        className={`rounded-full w-14 h-14 bg-black hover:bg-gray-800 text-white shadow-lg transition-all duration-300 ease-in-out ${
          isHovered ? 'scale-110' : 'scale-100'
        }`}
        onClick={onOpen}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Open AI Chat Assistant"
      >
        {isHovered ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageSquare className="h-6 w-6" />
        )}
      </Button>
    </div>
  )
}