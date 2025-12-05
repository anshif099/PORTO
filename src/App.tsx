import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Google from "./pages/Google";
import Cursor from "./components/Cursor";
import { CursorProvider } from "./contexts/CursorContext";
import AmazeWit from "./pages/AmazeWit";
import LinkedInHackWeek from "./pages/LinkedInHackWeek";
import AmazonPXT from "./pages/AmazonPXT";
import Xiaomi from "./pages/Xiaomi";
import Work from "./pages/Work";
import WhoWeAre from "./pages/WhoWeAre";
import Article from "./pages/Article";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CursorProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Cursor />
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="Contact" element={<Contact/>} />
            <Route path="Google" element={<Google/>} />
            <Route path="AmazeWit" element={<AmazeWit/>} />
            <Route path="LinkedInHackWeek" element={<LinkedInHackWeek/>} />
            <Route path="AmazonPXT" element={<AmazonPXT/>} />
            <Route path="Xiaomi" element={<Xiaomi/>} />
             <Route path="Work" element={<Work/>} />
             <Route path="WhoWeAre" element={<WhoWeAre/>} />
             <Route path="Article" element={<Article/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CursorProvider>
  </QueryClientProvider>
);

export default App;
