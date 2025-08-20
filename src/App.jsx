import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectsDetailsPage from "./pages/ProjectsDetailsPage";
import BlogPage from "./pages/BlogPage";
import ServiceDetailsPage from "./pages/ServiceDetailsPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import NewProjectsPage from "./pages/NewProjectsPage";
import NewProjectsDetailsPage from "./pages/NewProjectsDetailsPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          element={
            <ErrorBoundary>
              <MainLayout />
            </ErrorBoundary>
          }
        >
          <Route path="/" index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/brands" element={<NewProjectsPage />} />
          <Route path="/brands/:slug" element={<NewProjectsDetailsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
