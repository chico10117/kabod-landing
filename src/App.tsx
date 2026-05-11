import { useMemo } from 'react';
import { AiChatWidget } from './components/AiChatWidget';
import { Button } from './components/Button';
import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import { WhatsappFloatingButton } from './components/WhatsappFloatingButton';
import { externalLinks } from './config/links';
import { RouterProvider, useRouter } from './lib/routing';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { GalleryPage } from './pages/GalleryPage';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ShopPage } from './pages/ShopPage';
import { TreatmentsPage } from './pages/TreatmentsPage';

const routes = [
  { path: '/', title: 'Kabod Hair | Peluquería premium en Madrid', component: HomePage },
  { path: '/servicios', title: 'Servicios | Kabod Hair', component: ServicesPage },
  { path: '/tratamientos', title: 'Tratamientos | Kabod Hair', component: TreatmentsPage },
  { path: '/tienda', title: 'Tienda demo | Kabod Hair', component: ShopPage },
  { path: '/galeria', title: 'Galería | Kabod Hair', component: GalleryPage },
  { path: '/sobre-kabod', title: 'Sobre Kabod | Kabod Hair', component: AboutPage },
  { path: '/contacto', title: 'Contacto | Kabod Hair', component: ContactPage },
];

function AppContent() {
  const { path } = useRouter();
  const route = useMemo(() => routes.find((item) => item.path === path) ?? routes[0], [path]);
  const Page = route.component;
  document.title = route.title;

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Page />
      </main>
      <SiteFooter />
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-warmWhite/95 p-3 shadow-salon backdrop-blur md:hidden">
        <Button href={externalLinks.koiboxBooking} className="w-full">
          Reservar cita
        </Button>
      </div>
      <WhatsappFloatingButton />
      <AiChatWidget />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
