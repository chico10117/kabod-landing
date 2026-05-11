import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

type RouterContextValue = {
  path: string;
  navigate: (to: string) => void;
  isActive: (to: string) => boolean;
};

const RouterContext = createContext<RouterContextValue | undefined>(undefined);

const normalizePath = (path: string) => (path === '' ? '/' : path);

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((to: string) => {
    if (to.startsWith('#')) {
      const element = document.querySelector(to);
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    window.history.pushState({}, '', to);
    setPath(normalizePath(to));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const value = useMemo(
    () => ({
      path,
      navigate,
      isActive: (to: string) => path === to,
    }),
    [navigate, path],
  );

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export function useRouter() {
  const value = useContext(RouterContext);
  if (!value) {
    throw new Error('useRouter must be used inside RouterProvider');
  }
  return value;
}

type AppLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string;
};

export function AppLink({ to, onClick, children, ...props }: AppLinkProps) {
  const { navigate } = useRouter();
  const isExternal = to.startsWith('http') || to.startsWith('mailto:') || to.startsWith('tel:');

  return (
    <a
      href={to}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented || isExternal || event.metaKey || event.ctrlKey || event.shiftKey) {
          return;
        }
        event.preventDefault();
        navigate(to);
      }}
      {...props}
    >
      {children}
    </a>
  );
}
