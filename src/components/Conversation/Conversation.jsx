import { useState, useRef, useEffect } from "react";
import axios from "axios";
import InputArea from "./InputArea";
import ChatMessageArea from "./ChatMessageArea";
import ConversationHeader from "./ConversationHeader";

export default function Conversation() {
  const [question, setQuestion] = useState("");
  const [conversation, setConversation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;


  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversation, isLoading]);

  async function generateAnswer() {
    if (!question.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: "user",
      content: question,
      timestamp: new Date(),
    };

    console.log("User message:", userMessage);

    // Add user message to conversation
    setConversation((prev) => [...prev, userMessage]);
    const currentQuestion = question;
    setQuestion("");
    console.log("Current question:", currentQuestion);
    console.log("Adding user message to conversation:", conversation);
    setIsLoading(true);



    try {
      const response = await axios({
        url: `${apiUrl}:generateContent?key=${apiKey}`,
        method: "post",
        data: {
          contents: [
            {
              parts: [
                {
                  text: currentQuestion,
                },
              ],
            },
          ],
        },
      });

      console.log("Response from Gemini AI:", response.data);

      const aiMessage = {
        id: Date.now() + 1,
        type: "ai",
        content: response.data.candidates[0].content.parts[0].text,
        timestamp: new Date(),
      };

      console.log("AI message:", aiMessage);

      // Add AI response to conversation
      setConversation((prev) => [...prev, aiMessage]);
      console.log("Adding AI response to conversation:", conversation);

      console.log("Conversation:", conversation);
    } catch (error) {
      console.error("Error generating answer:", error);
      const errorMessage = {
        id: Date.now() + 1,
        type: "ai",
        content:
          "Sorry, I encountered an error while processing your request. Please try again.",
        timestamp: new Date(),
        isError: true,
      };
      setConversation((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      console.log("Conversation:", conversation);
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      generateAnswer();
    }
  };

  const clearConversation = () => {
    setConversation([]);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header with Clear Button */}
      {conversation.length > 0 && (
        <ConversationHeader
          conversation={conversation}
          clearConversation={clearConversation}
        />
      )}

      {/* Chat Messages Area */}
      <ChatMessageArea
        conversation={conversation}
        isLoading={isLoading}
        messagesEndRef={messagesEndRef}
      />

      {/* Input Area */}
      <InputArea
        question={question}
        setQuestion={setQuestion}
        generateAnswer={generateAnswer}
        isLoading={isLoading}
        handleKeyPress={handleKeyPress}
      />
    </div>
  );
}
