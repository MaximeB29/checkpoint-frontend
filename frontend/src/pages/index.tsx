import AddCountry from "@/components/AddCountry";
import Header from "@/components/Header";
import RecentCountry from "@/components/RecentCountry";

export default function Home() {
  return (
    <div>
      <Header />
      <AddCountry />
      <RecentCountry />
    </div>
  );
}
