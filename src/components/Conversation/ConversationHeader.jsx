import { Trash2 } from "lucide-react";
export default function ConversationHeader({conversation, clearConversation}) {
  return (
                <div className="px-6 py-3 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    {conversation.length} messages
                  </span>
                  <button
                    onClick={clearConversation}
                    className="flex items-center gap-1 px-3 py-1 text-xs text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-3 h-3" />
                    Clear
                  </button>
                </div>
  )
}
