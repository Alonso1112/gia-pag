import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Sparkles } from "lucide-react";
import { useState } from "react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface AIChatProps {
  messages: Message[];
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
}

export default function AIChat({ messages, onSendMessage, isLoading = false }: AIChatProps) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput("");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Sparkles className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-semibold">🤖 Asistente creativo con IA</h2>
      </div>

      <Card className="h-[400px] flex flex-col">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                  data-testid={`message-${message.id}`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="bg-muted rounded-lg p-3">
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-muted-foreground rounded-full"
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {messages.length === 0 && !isLoading && (
            <div className="text-center py-12 text-muted-foreground">
              <Sparkles className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>Pregunta lo que necesites para tu creatividad ✨</p>
            </div>
          )}
        </div>

        <div className="border-t p-4">
          <div className="flex gap-2">
            <Input
              placeholder="Escribe tu pregunta..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              data-testid="input-chat-message"
            />
            <Button onClick={handleSend} size="icon" data-testid="button-send-message">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
