"use client";

import { UploadReportButton } from "@/components/shared/upload-report-button";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { useReportStore } from "@/lib/store";
import { useChat } from "@ai-sdk/react";
import {
  ArrowLeft,
  Loader2,
  PanelRightClose,
  PanelRightOpen,
  Send,
  Sparkles,
  TriangleAlert,
  User,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function Chat() {
  const { reportData } = useReportStore();

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    status,
    error,
    setMessages,
  } = useChat();

  const [showSidebar, setShowSidebar] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only md:not-sr-only md:inline">
                Back to Home
              </span>
            </Link>
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-teal-600" />
              <span className="text-xl font-bold">MediScan AI</span>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowSidebar(!showSidebar)}
            className="md:hidden"
          >
            {showSidebar ? (
              <PanelRightClose className="h-5 w-5" />
            ) : (
              <PanelRightOpen className="h-5 w-5" />
            )}
          </Button>
        </div>
      </header>

      <main className="flex flex-1 overflow-hidden">
        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="w-full space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex gap-3 max-w-[80%] ${
                      message.role === "user" ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    <div
                      className={`flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full ${
                        message.role === "user" ? "bg-teal-600" : "bg-gray-100"
                      }`}
                    >
                      {message.role === "user" ? (
                        <User className="h-5 w-5 text-white" />
                      ) : (
                        <Sparkles className="h-5 w-5 text-teal-600" />
                      )}
                    </div>
                    <div
                      className={`rounded-lg px-4 py-3 ${
                        message.role === "user"
                          ? "bg-teal-600 text-white"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      <p className="text-sm sm:text-base">
                        <ReactMarkdown>{message.content}</ReactMarkdown>
                      </p>
                      <p className="mt-1 text-xs opacity-70">
                        {message.createdAt?.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {status === "submitted" && (
                <div className="flex justify-start">
                  <div className="flex gap-3 max-w-[80%]">
                    <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full bg-gray-100">
                      <Sparkles className="h-5 w-5 text-teal-600" />
                    </div>
                    <div className="rounded-lg px-4 py-3 bg-gray-100 text-gray-800">
                      <div className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin text-teal-600" />
                        <p className="text-sm">AI doctor is thinking...</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {error && (
                <div className="flex justify-start">
                  <div className="flex gap-3 max-w-[80%]">
                    <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full bg-gray-100">
                      <Sparkles className="h-5 w-5 text-teal-600" />
                    </div>
                    <div className="rounded-lg px-4 py-3 bg-gray-100 text-gray-800">
                      <div className="flex items-center gap-2">
                        <TriangleAlert className="h-4 w-4 text-rose-600" />
                        <p className="text-sm">
                          Failed to response.Try again...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="border-t bg-white p-4">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleSubmit(event, {
                  data: {
                    reportData: reportData,
                  },
                });
              }}
              className="w-full "
            >
              <div className="flex gap-2 items-center">
                <Textarea
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask about your medical report..."
                  className="min-h-12 resize-none"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSubmit(e, {
                        data: {
                          reportData: reportData,
                        },
                      });
                    }
                  }}
                />
                <Button
                  type="submit"
                  size="icon"
                  className="h-12 w-12 shrink-0 bg-teal-600 hover:bg-teal-700"
                  disabled={isLoading || !input.trim()}
                >
                  <Send className="h-5 w-5" />
                  <span className="sr-only">Send message</span>
                </Button>
              </div>
              <p className="mt-2 text-xs text-gray-500 text-center">
                AI responses are simulated for demonstration purposes.
              </p>
            </form>
          </div>
        </div>

        {/* Sidebar - Medical Reports */}
        <div
          className={`border-l bg-gray-50 w-full md:w-80 lg:w-96 shrink-0 overflow-auto transition-all duration-300 ease-in-out ${
            showSidebar ? "translate-x-0" : "translate-x-full md:translate-x-0"
          } ${
            showSidebar
              ? "absolute md:relative inset-0 z-10 md:z-0"
              : "hidden md:block"
          }`}
        >
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowSidebar(!showSidebar)}
                className="md:hidden"
              >
                <PanelRightClose className="h-5 w-5" />
              </Button>
            </div>

            <div className="space-y-3">
              <UploadReportButton
                label="Upload new report"
                className="w-full"
              />
            </div>

            <div className="mt-6 rounded-lg border bg-white p-4">
              <h3 className="font-medium mb-2">Report Summary</h3>
              <div className="space-y-2 text-sm max-h-[600px] overflow-y-auto">
                <ReactMarkdown>{reportData}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
