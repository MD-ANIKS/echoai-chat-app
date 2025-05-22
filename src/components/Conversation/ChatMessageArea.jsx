import AiMessage from "./AiMessage";
import UserMessage from "./UserMessage";
import EmptyMessage from "./EmptyMessage";
import LoadingMessage from "./LoadingMessage";

export default function ChatMessageArea({
  conversation,
  isLoading,
  messagesEndRef,
}) {
  return (
    <div className="h-96 overflow-y-auto p-6 bg-gray-50">
      {conversation.length === 0 && !isLoading ? (
        <EmptyMessage />
      ) : (
        <div className="space-y-6">
          {conversation.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-3 ${
                message.type === "user" ? "justify-end" : ""
              }`}
            >
              {message.type === "user" ? (
                <UserMessage message={message} />
              ) : (
                <AiMessage message={message} />
              )}
            </div>
          ))}

          {/* Loading Message */}
          {isLoading && <LoadingMessage />}

          <div ref={messagesEndRef} />
        </div>
      )}
    </div>
  );
}
