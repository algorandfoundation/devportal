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
        width='14'
        height='14'
        viewBox='0 0 16 16'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
        aria-hidden='true'
      >
        <path d='M2 6.5C2 4 4.5 2 8 2s6 2 6 4.5S11.5 11 8 11c-.6 0-1.2-.1-1.7-.2L3 13v-3.3C2.4 8.8 2 7.7 2 6.5z' />
        <circle cx='5.5' cy='6.5' r='0.5' fill='currentColor' stroke='none' />
        <circle cx='8' cy='6.5' r='0.5' fill='currentColor' stroke='none' />
        <circle cx='10.5' cy='6.5' r='0.5' fill='currentColor' stroke='none' />
      </svg>
      <span className='hidden md:inline'>Ask AI</span>
    </button>
  );
}
