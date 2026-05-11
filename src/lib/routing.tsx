import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

type RouterContextValue = {
  path: string;
  navigate: (to: string) => void;
  isActive: (to: string) => boolean;
};

const RouterContext = createContext<RouterContextValue | undefined>(undefined);

const baseUrl = import.meta.env.BASE_URL || '/';
const basePath = baseUrl === '/' ? '' : baseUrl.replace(/\/$/, '');

const normalizePath = (path: string) => (path === '' ? '/' : path);

const stripBasePath = (pathname: string) => {
  if (!basePath) {
    return normalizePath(pathname);
  }

  if (pathname === basePath) {
    return '/';
  }

  if (pathname.startsWith(`${basePath}/`)) {
    return normalizePath(pathname.slice(basePath.length));
  }

  return normalizePath(pathname);
};

const withBasePath = (to: string) => {
  if (!basePath || to.startsWith('#')) {
    return to;
  }

  return `${basePath}${to === '/' ? '/' : to}`;
};

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [path, setPath] = useState(() => stripBasePath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => setPath(stripBasePath(window.location.pathname));
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((to: string) => {
    if (to.startsWith('#')) {
      const element = document.querySelector(to);
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    window.history.pushState({}, '', withBasePath(to));
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
      href={isExternal ? to : withBasePath(to)}
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
