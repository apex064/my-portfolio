import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! How can I assist you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: "Got it — I'll get back to you shortly!",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Tilt effect logic
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [0, 1], [6, -6]);
  const rotateY = useTransform(x, [0, 1], [-6, 6]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const bounds = ref.current?.getBoundingClientRect();
      if (!bounds) return;

      const xValue = (e.clientX - bounds.left) / bounds.width;
      const yValue = (e.clientY - bounds.top) / bounds.height;

      x.set(xValue);
      y.set(yValue);
    };

    const node = ref.current;
    if (node) {
      node.addEventListener('mousemove', handleMouseMove);
      return () => node.removeEventListener('mousemove', handleMouseMove);
    }
  }, [x, y]);

  return (
    <>
      {/* Chat Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={ref}
            style={{ rotateX, rotateY }}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-5 right-5 w-80 bg-black/80 backdrop-blur-md rounded-xl shadow-lg flex flex-col z-50 border border-gray-800"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-3 text-white font-semibold border-b border-gray-800">
              <span>Chat with me!</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="p-3 h-52 overflow-y-auto bg-white/5 text-sm text-white space-y-2">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`p-2 rounded-lg max-w-[80%] ${
                    message.isUser
                      ? 'bg-[--color-neon] text-black self-end ml-auto'
                      : 'bg-zinc-800'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex p-3 bg-white/5 gap-2 border-t border-gray-800">
              <input
                type="text"
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 bg-zinc-900 text-white p-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-[--color-neon] text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="bg-[--color-neon] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[--color-neon-hover] transition-colors flex items-center justify-center"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 bg-[--color-neon] text-black rounded-full p-4 neon-shadow hover:neon-shadow-hover transition-all duration-300 z-40"
      >
        <MessageCircle size={24} />
      </motion.button>
    </>
  );
}

