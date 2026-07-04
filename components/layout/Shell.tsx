import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { AIAssistant } from "@/components/shared/AIAssistant";

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <AIAssistant />
    </div>
  );
}
