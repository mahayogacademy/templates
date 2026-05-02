import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { useEffect, useRef } from "react";
import { QueryClient, QueryClientProvider, useQueryClient } from "@tanstack/react-query";
import { ClerkProvider, useClerk } from "@clerk/react";
import { publishableKeyFromHost } from "@clerk/react/internal";
import { shadcn } from "@clerk/themes";
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
import Events from "@/pages/Events";
import HistoricEventDetail from "@/pages/HistoricEventDetail";
import BhuSamadhiDetail from "@/pages/BhuSamadhiDetail";
import TarakBrahmaDetail from "@/pages/TarakBrahmaDetail";
import CovidAnusthanDetail from "@/pages/CovidAnusthanDetail";
import AtirudriDetail from "@/pages/AtirudriDetail";
import RamarchanDetail from "@/pages/RamarchanDetail";
import HanumadDetail from "@/pages/HanumadDetail";
import Gurukul from "@/pages/Gurukul";
import Volunteer from "@/pages/Volunteer";
import CustomTalks from "@/pages/CustomTalks";
import Teachings from "@/pages/Teachings";
import ArticleDetail from "@/pages/ArticleDetail";
import NewsDetail from "@/pages/NewsDetail";
import SignInPage from "@/pages/SignInPage";
import SignUpPage from "@/pages/SignUpPage";
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

const clerkPubKey = publishableKeyFromHost(
  window.location.hostname,
  import.meta.env.VITE_CLERK_PUBLISHABLE_KEY,
);

const clerkProxyUrl = import.meta.env.VITE_CLERK_PROXY_URL;

function stripBase(path: string): string {
  return basePath && path.startsWith(basePath)
    ? path.slice(basePath.length) || "/"
    : path;
}

const clerkAppearance = {
  theme: shadcn,
  cssLayerName: "clerk",
  options: {
    logoPlacement: "inside" as const,
    logoLinkUrl: basePath || "/",
    logoImageUrl: `${window.location.origin}${basePath}/logo.svg`,
  },
  variables: {
    colorPrimary: "#b8892a",
    colorForeground: "#2c1a08",
    colorMutedForeground: "#7a6252",
    colorDanger: "#c0392b",
    colorBackground: "#ffffff",
    colorInput: "#faf9f6",
    colorInputForeground: "#2c1a08",
    colorNeutral: "#d4c4b0",
    fontFamily: "'Inter', sans-serif",
    borderRadius: "0.625rem",
  },
  elements: {
    rootBox: "w-full flex justify-center",
    cardBox: "shadow-lg rounded-xl w-[440px] max-w-full overflow-hidden" as string,
    card: "!shadow-none !border-0 !rounded-none" as string,
    footer: "!shadow-none !border-0 !rounded-none" as string,
    headerTitle: "text-[#2c1a08] font-semibold",
    headerSubtitle: "text-[#7a6252]",
    socialButtonsBlockButtonText: "text-[#2c1a08] font-medium",
    formFieldLabel: "text-[#2c1a08] font-medium",
    footerActionLink: "text-[#b8892a] hover:text-[#a07820] font-medium",
    footerActionText: "text-[#7a6252]",
    dividerText: "text-[#7a6252]",
    identityPreviewEditButton: "text-[#b8892a]",
    formFieldSuccessText: "text-green-700",
    alertText: "text-[#2c1a08]",
    logoBox: "flex items-center justify-center py-2",
    logoImage: "h-12 w-auto",
    socialButtonsBlockButton: "border border-[#d4c4b0] hover:bg-[#faf9f6] transition-colors",
    formButtonPrimary: "bg-[#b8892a] hover:bg-[#a07820] text-white font-medium transition-colors",
    formFieldInput: "border-[#d4c4b0] bg-[#faf9f6] text-[#2c1a08] focus:border-[#b8892a] focus:ring-[#b8892a]",
    footerAction: "bg-[#f8f5ef]",
    dividerLine: "bg-[#d4c4b0]",
    alert: "border border-[#d4c4b0]",
    otpCodeFieldInput: "border-[#d4c4b0] bg-[#faf9f6]",
    formFieldRow: "gap-3",
    main: "gap-4",
  },
};

function ScrollReset() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function ClerkQueryClientCacheInvalidator() {
  const { addListener } = useClerk();
  const qc = useQueryClient();
  const prevUserIdRef = useRef<string | null | undefined>(undefined);

  useEffect(() => {
    const unsubscribe = addListener(({ user }) => {
      const userId = user?.id ?? null;
      if (
        prevUserIdRef.current !== undefined &&
        prevUserIdRef.current !== userId
      ) {
        qc.clear();
      }
      prevUserIdRef.current = userId;
    });
    return unsubscribe;
  }, [addListener, qc]);

  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/sign-in/*?" component={SignInPage} />
      <Route path="/sign-up/*?" component={SignUpPage} />
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
      <Route path="/events" component={Events} />
      <Route path="/events/historic/bhu-samadhi" component={BhuSamadhiDetail} />
      <Route path="/events/historic/tarak-brahma-mahayagya" component={TarakBrahmaDetail} />
      <Route path="/events/historic/covid-anusthan" component={CovidAnusthanDetail} />
      <Route path="/events/historic/atirudri-mahayagya" component={AtirudriDetail} />
      <Route path="/events/historic/ramarchan-mahayagya" component={RamarchanDetail} />
      <Route path="/events/historic/hanumad-mahayagya" component={HanumadDetail} />
      <Route path="/gurukul" component={Gurukul} />
      <Route path="/volunteer" component={Volunteer} />
      <Route path="/custom-talks" component={CustomTalks} />
      <Route path="/teachings" component={Teachings} />
      <Route path="/teachings/:id" component={ArticleDetail} />
      <Route path="/news/:id" component={NewsDetail} />
      <Route path="/events/historic/:slug" component={HistoricEventDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function ClerkProviderWithRoutes() {
  const [, setLocation] = useLocation();

  return (
    <ClerkProvider
      publishableKey={clerkPubKey!}
      proxyUrl={clerkProxyUrl}
      appearance={clerkAppearance}
      signInUrl={`${basePath}/sign-in`}
      signUpUrl={`${basePath}/sign-up`}
      afterSignOutUrl={`${basePath}/`}
      localization={{
        signIn: {
          start: {
            title: "Welcome back",
            subtitle: "Sign in to your spiritual account",
          },
        },
        signUp: {
          start: {
            title: "Join the Academy",
            subtitle: "Create your free account to begin",
          },
        },
      }}
      routerPush={(to) => setLocation(stripBase(to))}
      routerReplace={(to) => setLocation(stripBase(to), { replace: true })}
    >
      <QueryClientProvider client={queryClient}>
        <ClerkQueryClientCacheInvalidator />
        <ScrollReset />
        <Router />
        <ScrollToTop />
      </QueryClientProvider>
    </ClerkProvider>
  );
}

function App() {
  return (
    <TooltipProvider>
      <WouterRouter base={basePath}>
        <ClerkProviderWithRoutes />
      </WouterRouter>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
