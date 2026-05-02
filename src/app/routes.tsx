import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { HomePage } from "./pages/HomePage";
import { RoomsPage } from "./pages/RoomsPage";
import { FacilitiesPage } from "./pages/FacilitiesPage";
import { TariffPage } from "./pages/TariffPage";
import { ContactPage } from "./pages/ContactPage";
import { GalleryPage } from "./pages/GalleryPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsOfServicePage } from "./pages/TermsOfServicePage";
import { CancellationPolicyPage } from "./pages/CancellationPolicyPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "rooms", Component: RoomsPage },
      { path: "facilities", Component: FacilitiesPage },
      { path: "tariff", Component: TariffPage },
      { path: "contact", Component: ContactPage },
      { path: "gallery", Component: GalleryPage },
      { path: "privacy-policy", Component: PrivacyPolicyPage },
      { path: "terms-of-service", Component: TermsOfServicePage },
      { path: "cancellation-policy", Component: CancellationPolicyPage },
    ],
  },
]);
