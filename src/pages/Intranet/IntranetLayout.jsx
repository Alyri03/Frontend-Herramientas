import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

export default function IntranetLayout() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-6 bg-muted/50">
        <Outlet />
      </main>
    </div>
  );
}
