// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Index from "./pages/Index";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Index />} />
//           {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";

// Pages
import Index from "./pages/Index";
import HowItWorks from "./pages/HowItWorks";
import Eligibility from "./pages/Eligibility";
import Blog from "./pages/Blog"; // correct component name must start with uppercase B
import BlogDetails from "./pages/BlogDetails";
import FAQ from "./pages/FAQ";
import Apply from "./pages/Apply";
import ApplyStep2 from "./pages/ApplyStep2";
import AboutUs from "./pages/AboutUs";
import Careers from "./pages/Careers";
import Press from "./pages/Press";

import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Licensing from "./pages/Licensing";
import Sitemap from "./pages/Sitemap";

import Contact from "./pages/Contact";

// import Contact from "./pages/Contact";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* <BrowserRouter> */}
      <ScrollToTop />
      <Routes>
        {/* Layout Wrapper */}
        <Route path="/" element={<Layout />}>
          {/* Pages inside layout */}
          <Route index element={<Index />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="eligibility" element={<Eligibility />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/faq" element={<FAQ />} />

          <Route path="contact" element={<Contact />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/apply/step-2" element={<ApplyStep2 />} />

          <Route path="about-us" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/press" element={<Press />} />

          <Route path="terms" element={<Terms />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="licensing" element={<Licensing />} />
          <Route path="sitemap" element={<Sitemap />} />
        </Route>

        {/* Fallback page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* </BrowserRouter> */}
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
