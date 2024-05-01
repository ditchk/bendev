import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

export const useTheme = (): [Theme, (e: React.ChangeEvent<HTMLInputElement>) => void] => {
  const [theme, setTheme] = useState<Theme>('light');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTheme(e.target.checked? 'dark' : 'light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return [theme, handleChange];
};