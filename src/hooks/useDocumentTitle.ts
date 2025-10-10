import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useDocumentTitle(title?: string) {
  const location = useLocation();
  
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title, location.pathname]);
}
