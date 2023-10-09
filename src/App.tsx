import "./App.css";
import { Button } from "@/components/ui/button";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Influencers from "./pages/influencers";

function App() {
  return (
    <>
      <header className="absolute left-0 top-0 flex h-16 w-full items-center justify-between bg-gray-100 px-4 py-2">
        <h1 className="text-2xl font-bold">Amdocs Posts</h1>
        <nav className="flex gap-2">
          <Button variant={"ghost"}>Influencers</Button>
          <Button variant={"ghost"}>Reports</Button>
        </nav>
      </header>
      <main className="flex h-screen w-full flex-col px-4 pt-20">
        <Router>
          <Routes>
            <Route path="/influencers" element={<Influencers />} />
            <Route path="/reports" element={<div>Reports</div>} />
            <Route path="*" element={<div>Homepage</div>} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
