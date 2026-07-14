import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFoundRedirect } from "./NotFoundRedirect";
import NotFound from "../modules/landing/pages/NotFound";
import MainLayout from "../layout/public/MainLayout";
import HomeLanding from "../modules/landing/pages/HomeLanding";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomeLanding />} />
        </Route>

        {/* Catch-all Route for 404 Not Found */}
        <Route path="/404" element={<NotFound />} />

        <Route path="*" element={<NotFoundRedirect />} />
      </Routes>
    </BrowserRouter>
  );
}
