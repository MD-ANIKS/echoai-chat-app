import { Bot } from "lucide-react";

export default function EmptyMessage() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <Bot className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-500 text-lg">Ask me anything to get started!</p>
      </div>
    </div>
  );
}
