import { useStore } from '@nanostores/react';
import { isChatOpen } from '../stores/chatStore';

export default function AIChatTrigger() {
  const isOpen = useStore(isChatOpen);

  return (
    <button
      onClick={() => isChatOpen.set(!isOpen)}
      aria-label='Ask AI'
      aria-expanded={isOpen}
      className={`flex items-center gap-1.5 h-10 px-0 md:px-3 rounded-lg
        border-0 md:border
        text-[length:var(--sl-text-sm)] font-medium font-[family-name:inherit] whitespace-nowrap
        cursor-pointer transition-[border-color,background-color,color] duration-150
        md:border-[var(--sl-color-gray-5)] text-algo-accent-green
        hover:md:border-algo-accent-green hover:text-algo-accent-green
        bg-transparent ${isOpen ? 'md:bg-[var(--sl-color-gray-6)]' : ''}`}
    >
      <svg
        width='16'
        height='16'
        viewBox='0 0 24 24'
        fill='currentColor'
        aria-hidden='true'
      >
        <path d='m20.713 8.128-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M20 11a6 6 0 0 0 1.993-.339q.007.17.007.339a8 8 0 0 1-8 8v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8h4q.17 0 .339.007A6 6 0 0 0 20 11' />
      </svg>
      <span className='hidden md:inline'>Ask AI</span>
    </button>
  );
}
