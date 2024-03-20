import { Search } from "../components/Search";

export default function Home() {
  return (
    <main className="h-screen">
      <div className="flex flex-col h-full md:flex-row">
        <Search />
      </div>
    </main>
  );
}
