import "./App.css";
import { Influencers, Reports } from "@/pages";

function App() {
  return (
    <>
      <header className="top-0 flex h-16 w-full items-center justify-between px-4 py-2">
        <h1 className="text-2xl font-bold">Amdocs Posts</h1>
      </header>
      <main className="flex w-full gap-4 p-5 px-4">
        <Reports />
        <Influencers />
      </main>
    </>
  );
}

export default App;
