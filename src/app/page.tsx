//Components
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Countries } from "@/components/medals/countries";

export default function Home() {
  return (
    <main className="min-h-screen max-w-3xl mx-auto px-8 lg:px-0">
      <Header />
      <Countries />
      <Footer />
    </main>
  );
}
