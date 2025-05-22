import React from "react";
import { Bot } from "lucide-react";

export default function AiMessage({ message }) {
  return (
    <>
      <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
        <Bot className="w-4 h-4 text-white" />
      </div>
      <div
        className={`p-4 rounded-2xl rounded-tl-md shadow-sm border max-w-xs lg:max-w-2xl ${
          message.isError ? "bg-red-50 border-red-200" : "bg-white"
        }`}
      >
        <div className="prose prose-sm max-w-none">
          <p
            className={`text-sm leading-relaxed whitespace-pre-wrap ${
              message.isError ? "text-red-700" : "text-gray-800"
            }`}
          >
            {message.content}
          </p>
        </div>
        <div className="text-xs text-gray-400 mt-2">
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>
    </>
  );
}
