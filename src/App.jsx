import { ThemeToggle } from './components/ThemeToggle';

export default function App() {
   return (
      <div className='flex flex-col min-h-screen justify-center items-center gap-8 light-bg light-text dark:dark-bg dark:dark-text'>
         <main className='flex-1 p-6'>
            <div className='flex flex-col gap-8'>
               <h1 className='text-4xl'>Escolhendo entre os temas Light ou Dark</h1>
               <ThemeToggle />
            </div>
         </main>

         <footer>
            <p className='text-slate-600 text-sm p-4'>
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
