import { Send, Bot, User, Trash2 } from "lucide-react";

export default function Header() {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
          <Bot className="w-7 h-7 text-white" />
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          EchoAi
        </h1>
      </div>
      <p className="text-gray-600 text-lg">Your intelligent AI assistant</p>
    </div>
  );
}
