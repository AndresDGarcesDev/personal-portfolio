import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="bg-background">
      <main>
        <Outlet />
      </main>
    </div>
  );
}
