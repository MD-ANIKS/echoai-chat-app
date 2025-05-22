import { User } from "lucide-react";

export default function userMessage({ message }) {
  return (
    <>
      <div className="bg-blue-600 text-white p-4 rounded-2xl rounded-tr-md max-w-xs lg:max-w-md">
        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
      </div>
      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
        <User className="w-4 h-4 text-white" />
      </div>
    </>
  );
}
