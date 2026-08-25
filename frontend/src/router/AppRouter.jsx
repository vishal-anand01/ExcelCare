import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutUsPage } from "../pages/AboutUsPage";
import { BlogPage } from "../pages/BlogPage";
import { CarpetCleaningPage } from "../pages/CarpetCleaningPage";
import { ContactUsPage } from "../pages/ContactUsPage";
import { CurtainCleaningPage } from "../pages/CurtainCleaningPage";
import { DryCleaningPage } from "../pages/DryCleaningPage";
import { FranchisePage } from "../pages/FranchisePage";
import { HomePage } from "../pages/HomePage";
import { IroningPage } from "../pages/IroningPage";
import { LaundryServicesPage } from "../pages/LaundryServicesPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { ServicesPage } from "../pages/ServicesPage";
import { ShoeCleaningPage } from "../pages/ShoeCleaningPage";
import { StoreLocatorPage } from "../pages/StoreLocatorPage";

export function AppRouter() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/laundry-services" element={<LaundryServicesPage />} />
        <Route path="/dry-cleaning" element={<DryCleaningPage />} />
        <Route path="/ironing" element={<IroningPage />} />
        <Route path="/shoe-cleaning" element={<ShoeCleaningPage />} />
        <Route path="/curtain-cleaning" element={<CurtainCleaningPage />} />
        <Route path="/carpet-cleaning" element={<CarpetCleaningPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/store-locator" element={<StoreLocatorPage />} />
        <Route
          path="/best-laundry-franchise-in-india"
          element={<FranchisePage />}
        />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
