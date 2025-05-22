import { Send } from "lucide-react";

export default function InputArea({
  question,
  setQuestion,
  generateAnswer,
  isLoading,
  handleKeyPress,
}) {
  return (
    <div className="p-6 bg-white border-t border-gray-200">
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your question here..."
            className="w-full p-4 pr-12 border border-gray-300 rounded-xl resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
            rows={3}
          />
          <div className="absolute bottom-3 right-3 text-xs text-gray-400">
            Press Enter to send
          </div>
        </div>
        <button
          onClick={generateAnswer}
          disabled={!question.trim() || isLoading}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center gap-2 font-medium self-end"
        >
          <Send className="w-4 h-4" />
          Send
        </button>
      </div>
    </div>
  );
}
