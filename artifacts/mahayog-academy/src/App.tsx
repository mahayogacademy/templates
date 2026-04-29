import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import AboutAcademy from "@/pages/AboutAcademy";
import MahayogMeditation from "@/pages/MahayogMeditation";
import Ashram from "@/pages/Ashram";
import Contact from "@/pages/Contact";
import Projects from "@/pages/Projects";
import FounderGuru from "@/pages/FounderGuru";
import Lineage from "@/pages/Lineage";
import VedantaCourse from "@/pages/VedantaCourse";
import Register from "@/pages/Register";
import GuruDarshan from "@/pages/GuruDarshan";
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutAcademy} />
      <Route path="/meditation" component={MahayogMeditation} />
      <Route path="/ashram" component={Ashram} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
      <Route path="/founder-guru" component={FounderGuru} />
      <Route path="/lineage" component={Lineage} />
      <Route path="/vedanta" component={VedantaCourse} />
      <Route path="/register" component={Register} />
      <Route path="/guru-darshan" component={GuruDarshan} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
          <ScrollToTop />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
