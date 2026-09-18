import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AboutUsPage } from "../pages/AboutUsPage";
import { BlogPage } from "../pages/BlogPage";
import { BlogArticlePage } from "../pages/Blog/BlogArticlePage";
import { CarpetCleaningPage } from "../pages/CarpetCleaningPage";
import { ContactUsPage } from "../pages/ContactUsPage";
import { CurtainCleaningPage } from "../pages/CurtainCleaningPage";
import { DryCleaningPage } from "../pages/DryCleaningPage";
import { FaqPage } from "../pages/FaqPage";
import { HomePage } from "../pages/HomePage";
import { IroningPage } from "../pages/IroningPage";
import { LaundryServicesPage } from "../pages/LaundryServicesPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { PrivacyPolicyPage } from "../pages/PrivacyPolicyPage";
import { ServicesPage } from "../pages/ServicesPage";
import { ShoeCleaningPage } from "../pages/ShoeCleaningPage";
import { TermsConditionsPage } from "../pages/TermsConditionsPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
        <Route path="/faqs" element={<FaqPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogArticlePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
