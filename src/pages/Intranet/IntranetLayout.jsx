import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

export default function IntranetLayout() {
  return (
    <div className="flex min-h-screen bg-muted/50">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
