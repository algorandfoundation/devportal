import { useEffect, useCallback, useState } from 'react';
import { useStore } from '@nanostores/react';
import { KapaProvider } from '@kapaai/react-sdk';
import {
  isChatOpen,
  isChatPinned,
  initChatPinned,
  PIN_BREAKPOINT,
} from '../stores/chatStore';
import ChatInterface from './ChatInterface';

const INTEGRATION_ID = import.meta.env.PUBLIC_KAPA_INTEGRATION_ID ?? '';

export default function AIChatPanel() {
  const isOpen = useStore(isChatOpen);
  const isPinned = useStore(isChatPinned);
  const [canPin, setCanPin] = useState(false);

  const close = useCallback(() => isChatOpen.set(false), []);

  // Initialize pinned state from localStorage on mount
  useEffect(() => {
    initChatPinned();
  }, []);

  // Check if viewport supports pinning (≥ 1200px)
  useEffect(() => {
    const checkCanPin = () => {
      setCanPin(window.innerWidth >= PIN_BREAKPOINT);
    };
    checkCanPin();
    window.addEventListener('resize', checkCanPin);
    return () => window.removeEventListener('resize', checkCanPin);
  }, []);

  // Sync `chat-pinned` class to document when pinned and open
  useEffect(() => {
    if (isOpen && isPinned && canPin) {
      document.documentElement.classList.add('chat-pinned');
    } else {
      document.documentElement.classList.remove('chat-pinned');
    }
    return () => {
      document.documentElement.classList.remove('chat-pinned');
    };
  }, [isOpen, isPinned, canPin]);

  // Escape key closes panel
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) close();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, close]);

  // Lock body scroll when open in floating mode only
  useEffect(() => {
    const isFloating = !isPinned || !canPin;
    if (isOpen && isFloating) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, isPinned, canPin]);

  // Determine if we're in floating mode (show backdrop)
  const isFloatingMode = !isPinned || !canPin;
  const showBackdrop = isOpen && isFloatingMode;

  return (
    <>
      {/* Backdrop - only in floating mode */}
      <div
        onClick={close}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 300,
          background: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(2px)',
          opacity: showBackdrop ? 1 : 0,
          pointerEvents: showBackdrop ? 'auto' : 'none',
          transition: 'opacity 0.2s ease',
        }}
        aria-hidden='true'
      />

      {/* Panel */}
      <div
        role='dialog'
        aria-label='AI Chat Assistant'
        aria-hidden={!isOpen}
        className='ai-chat-panel'
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 301,
          width: '500px',
          maxWidth: '100vw',
          background: 'var(--sl-color-bg-nav)',
          borderLeft: '1px solid var(--sl-color-gray-5)',
          boxShadow: isOpen ? '-8px 0 24px rgba(0, 0, 0, 0.3)' : 'none',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.25s ease',
          display: 'flex',
          flexDirection: 'column' as const,
        }}
      >
        {/* Close button */}
        <button
          onClick={close}
          aria-label='Close chat'
          className='chat-panel-btn'
          style={{
            position: 'absolute',
            top: '0.75rem',
            right: '0.75rem',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '28px',
            height: '28px',
            padding: 0,
            background: 'var(--sl-color-gray-6)',
            border: '1px solid var(--sl-color-gray-5)',
            color: 'var(--sl-color-gray-3)',
            cursor: 'pointer',
            borderRadius: '0.375rem',
            transition: 'border-color 0.15s, color 0.15s',
          }}
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
        <style>{`
          .chat-panel-btn:hover {
            color: #01DC94 !important;
            border-color: #01DC94 !important;
          }
        `}</style>

        {/* Chat content */}
        {INTEGRATION_ID ? (
          <KapaProvider
            integrationId={INTEGRATION_ID}
            callbacks={{
              askAI: {
                onQuerySubmit: (data: any) =>
                  console.log('[Kapa] Query:', data.question),
                onAnswerGenerationCompleted: (data: any) =>
                  console.log('[Kapa] Answer complete:', data.questionAnswerId),
              },
            }}
          >
            <ChatInterface canPin={canPin} />
          </KapaProvider>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              padding: '2rem',
              textAlign: 'center',
              color: 'var(--sl-color-gray-3)',
              fontSize: 'var(--sl-text-sm)',
              gap: '0.5rem',
            }}
          >
            <p style={{ fontWeight: 600, color: 'var(--sl-color-white)' }}>
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
