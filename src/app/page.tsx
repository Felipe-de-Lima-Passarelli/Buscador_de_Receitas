//Components
import SearchAPI from "@/components/SearchAPI";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full min-w-250">
      <SearchAPI />
      <Footer />
    </div>
  );
}
