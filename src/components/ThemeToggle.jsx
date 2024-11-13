import { useState, useEffect } from 'react';

export function ThemeToggle() {
   const [theme, setTheme] = useState('light');

   function toggleButton() {
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('dark-mode-theme', newTheme);
      setTheme(newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
   }

   function toggleCheckbox(event) {
      const newTheme = event.target.checked ? 'dark' : 'light';
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
      <form className='flex flex-col gap-10'>
         <fieldset className='text-center'>
            <legend className='text-xl font-bold mb-4'>Checkbox</legend>
            <label className='flex gap-2'>
               <input
                  type='checkbox'
                  onChange={toggleCheckbox}
                  checked={theme === 'dark'}
               />
               {theme === 'light' && 'Trocar para Dark'}
               {theme === 'dark' && 'Trocar para Light'}
            </label>
         </fieldset>

         <fieldset className='text-center'>
            <legend className='text-xl font-bold mb-4'>Button</legend>
            <button
               type='button'
               className='btn-light dark:btn-dark rounded-[2rem] py-3 px-5'
               onClick={toggleButton}
            >
               {theme === 'light' && 'Trocar para Dark'}
               {theme === 'dark' && 'Trocar para Light'}
            </button>
         </fieldset>
      </form>
   );
}
