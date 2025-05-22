import Header from "./components/Header";
import Footer from "./components/Footer";
import Conversation from "./components/Conversation/Conversation";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <Header />

        {/* Main Chat Interface */}
        <Conversation />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
