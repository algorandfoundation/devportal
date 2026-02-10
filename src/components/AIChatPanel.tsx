import { useEffect, useCallback } from 'react';
import { useStore } from '@nanostores/react';
import { KapaProvider } from '@kapaai/react-sdk';
import { isChatOpen } from '../stores/chatStore';
import ChatInterface from './ChatInterface';

const INTEGRATION_ID = import.meta.env.PUBLIC_KAPA_INTEGRATION_ID ?? '';

// Debug: log to help diagnose env var issues
if (typeof window !== 'undefined') {
  console.log('[AIChatPanel] INTEGRATION_ID:', INTEGRATION_ID ? '(set)' : '(empty)');
}

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
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 300,
          background: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(2px)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 0.2s ease',
        }}
        aria-hidden='true'
      />

      {/* Panel */}
      <div
        role='dialog'
        aria-label='AI Chat Assistant'
        aria-hidden={!isOpen}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 301,
          width: '440px',
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
          style={{
            position: 'absolute',
            top: '0.6rem',
            right: '0.6rem',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.35rem',
            background: 'none',
            border: 'none',
            color: 'var(--sl-color-gray-3)',
            cursor: 'pointer',
            borderRadius: '0.25rem',
            transition: 'color 0.15s',
          }}
        >
          <svg
            width='16'
            height='16'
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
            callbacks={{
              askAI: {
                onQuerySubmit: (data: any) =>
                  console.log('[Kapa] Query:', data.question),
                onAnswerGenerationCompleted: (data: any) =>
                  console.log('[Kapa] Answer complete:', data.questionAnswerId),
              },
            }}
          >
            <ChatInterface />
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
