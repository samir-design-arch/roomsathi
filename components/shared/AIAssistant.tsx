"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, Send, X, Sparkles } from "lucide-react";

type Message = {
  role: "user" | "bot";
  text: string;
};

function getBotResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("budget") || lower.includes("price") || lower.includes("cost")) {
    return "We have rooms from NPR 5,000 to NPR 45,000 per month. What's your budget range?";
  }
  if (lower.includes("kirtipur") || lower.includes("lalitpur") || lower.includes("baneshwor") || lower.includes("location")) {
    return "Great choices! We have verified listings in Kirtipur, Pulchowk, Baneshwor, Jawalakhel, and more. Which area interests you?";
  }
  if (lower.includes("safe") || lower.includes("safety") || lower.includes("girl")) {
    return "Safety is our priority! All listings have safety scores 75+. We have many girls-only hostels with 24/7 security, CCTV, and female wardens.";
  }
  if (lower.includes("ai") || lower.includes("match") || lower.includes("recommend")) {
    return "Try our AI Room Finder! Just answer a few questions and we'll find your perfect room instantly.";
  }
  if (lower.includes("hello") || lower.includes("hi") || lower.includes("namaste")) {
    return "Namaste! Welcome to RoomSathi. How can I help you find your perfect room today?";
  }
  return "You can browse our featured listings or try the AI Room Finder for personalized recommendations. What would you like to know?";
}

export function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Namaste! I'm Sathi, your AI assistant. Looking for a room? Tell me your budget and preferred area!",
    },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: getBotResponse(text) }]);
    }, 600);
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          size="icon"
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg"
          aria-label="Open AI assistant"
        >
          <Sparkles className="h-5 w-5" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-[80vh] sm:h-[600px]">
        <div className="mx-auto flex h-full w-full max-w-2xl flex-col">
          <DrawerHeader className="border-b pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <DrawerTitle className="font-heading">Sathi AI</DrawerTitle>
                  <p className="text-xs text-muted-foreground">Housing assistant • Online</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DrawerHeader>

          <ScrollArea className="flex-1 px-4 py-4" ref={scrollRef}>
            <div className="space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  {msg.role === "bot" ? (
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Bot className="h-4 w-4" />
                    </div>
                  ) : (
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-secondary text-xs">You</AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="border-t p-4">
            <div className="flex items-center gap-2">
              <Input
                placeholder="Ask about rooms, prices, areas..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                className="flex-1"
              />
              <Button size="icon" onClick={send} aria-label="Send message">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
