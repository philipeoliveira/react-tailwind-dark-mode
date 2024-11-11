import { useState, useEffect } from 'react';

export function ThemeToggle() {
   const [theme, setTheme] = useState('light');

   function toggle() {
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('dark-mode-theme', newTheme);
      setTheme(newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
   }

   useEffect(() => {
      const themeFromLocalStorage = localStorage.getItem('dark-mode-theme');

      if (themeFromLocalStorage) {
         setTheme(themeFromLocalStorage);
         document.documentElement.classList.toggle(
            'dark',
            themeFromLocalStorage === 'dark'
         );
      }
   }, []);

   return (
      <button className='btn-light dark:btn-dark rounded p-3' onClick={toggle}>
         {theme === 'light' && 'Trocar para Dark'}
         {theme === 'dark' && 'Trocar para Light'}
      </button>
   );
}
