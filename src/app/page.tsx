//Components
import SearchAPI from "@/components/SearchAPI";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-w-250 min-h-screen">
      <SearchAPI />
      <Footer />
    </div>
  );
}
