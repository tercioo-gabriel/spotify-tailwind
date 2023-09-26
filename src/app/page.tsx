import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>

      <div className='flex flex-1'>

        <aside className='w-72 bg-zinc-950 p-6'>

          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full'/>
            <div className='w-3 h-3 bg-yellow-500 rounded-full'/>
            <div className='w-3 h-3 bg-green-500 rounded-full'/>
          </div>

          <nav className='space-y-5 mt-10'>

            <a href="" className='flex flex-1 align-center gap-3 text-sm text-zinc-200 font-semibold items-center'>
              <HomeIcon />
              Home</a>

            <a href="" className='flex flex-1 align-center gap-3 text-sm text-zinc-200 font-semibold items-center'>
              <Search />
              Search</a>

            <a href="" className='flex flex-1 align-center gap-3 text-sm text-zinc-200 font-semibold items-center'>
              <Library />
              Your Library</a>
          </nav>

          <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Hots Hits Brasil</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Top 50 Mundial</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>This is: Red Hot Chilli Peppers</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist aleatória</a>
          </nav>
        </aside>

        <main className='flex-1 p-6'>

          <div className='flex items-center gap-4'>
            <button className='bg-black/50 rounded-full p-1.5'>
              <ChevronLeft />
            </button>
            <button className='bg-black/50 rounded-full p-1.5'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4'>
            <div className='bg-white/10 rounded-md'>Playlist</div>
            <div className='bg-white/10 rounded-md'>Playlist</div>
            <div className='bg-white/10 rounded-md'>Playlist</div>
            <div className='bg-white/10 rounded-md'>Playlist</div>
            <div className='bg-white/10 rounded-md'>Playlist</div>
            <div className='bg-white/10 rounded-md'>Playlist</div>
          </div>
        </main>
      </div>

      <footer className='bg-zinc-800 border-t border-zinc-700 p-6'>
        Footer
      </footer>
    </div>
  )
}
