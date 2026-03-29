import { useEffect, useCallback } from 'react';
import { useStore } from '@nanostores/react';
import { KapaProvider } from '@kapaai/react-sdk';
import { isChatOpen } from '../stores/chatStore';
import ChatInterface from './ChatInterface';

const INTEGRATION_ID = import.meta.env.PUBLIC_KAPA_INTEGRATION_ID ?? '';

export default function AIChatPanel() {
  const isOpen = useStore(isChatOpen);

  const close = useCallback(() => isChatOpen.set(false), []);

  // Escape key closes panel
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) close();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, close]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={close}
        className={`fixed inset-0 z-[300] bg-black/50 backdrop-blur-sm
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden='true'
      />

      {/* Panel */}
      <div
        role='dialog'
        aria-label='AI Chat Assistant'
        aria-hidden={!isOpen}
        className={`fixed top-0 right-0 bottom-0 z-[301] w-[500px] max-w-[100vw]
          flex flex-col bg-[var(--sl-color-bg-nav)] border-l border-[var(--sl-color-gray-5)]
          ${isOpen ? 'translate-x-0 shadow-[-8px_0_24px_rgba(0,0,0,0.3)]' : 'translate-x-full'}`}
      >
        {/* Close button */}
        <button
          onClick={close}
          aria-label='Close chat'
          className='absolute top-3 right-3 z-[1] flex items-center justify-center
            w-7 h-7 p-0 rounded-md cursor-pointer
            bg-[var(--sl-color-gray-6)] border border-[var(--sl-color-gray-5)]
            text-[var(--sl-color-gray-3)]
            transition-[border-color,color] duration-150
            hover:text-[#01DC94] hover:border-[#01DC94]'
        >
          <svg
            width='14'
            height='14'
            viewBox='0 0 16 16'
            fill='none'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
          >
            <path d='M4 4l8 8M12 4l-8 8' />
          </svg>
        </button>

        {/* Chat content */}
        {INTEGRATION_ID ? (
          <KapaProvider
            integrationId={INTEGRATION_ID}
            callbacks={{ askAI: {} }}
          >
            <ChatInterface />
          </KapaProvider>
        ) : (
          <div
            className='flex flex-col items-center justify-center h-full p-8
              text-center text-[var(--sl-color-gray-3)] text-[length:var(--sl-text-sm)] gap-2'
          >
            <p className='font-semibold text-[var(--sl-color-white)]'>
              AI Chat Not Configured
            </p>
            <p>
              Set the <code>PUBLIC_KAPA_INTEGRATION_ID</code> environment
              variable to enable the AI chat assistant.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
