import { ThemeToggle } from './components/ThemeToggle';

export default function App() {
   return (
      <div className='flex flex-col min-h-screen justify-center items-center gap-8 light-bg light-text dark:dark-bg dark:dark-text'>
         <main className='flex-1 p-6'>
            <div className='flex flex-col justify-center items-center gap-10'>
               <h1 className='text-4xl'>Switch Dark Mode</h1>
               <ThemeToggle />
            </div>
         </main>

         <footer>
            <p className='light-text dark:dark-text text-sm p-4'>
               Desenvolvido por{' '}
               <a
                  href='https://github.com/philipeoliveira'
                  title='Abrir em nova aba o GitHub do autor Philipe Oliveira'
                  target='_blank'
               >
                  Philipe Oliveira
               </a>
            </p>
         </footer>
      </div>
   );
}
