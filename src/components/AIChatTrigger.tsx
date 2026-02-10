import { useStore } from '@nanostores/react';
import { isChatOpen } from '../stores/chatStore';

export default function AIChatTrigger() {
  const isOpen = useStore(isChatOpen);

  return (
    <button
      onClick={() => isChatOpen.set(!isOpen)}
      aria-label="Ask AI"
      aria-expanded={isOpen}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.35rem',
        padding: '0.35rem 0.65rem',
        border: '1px solid var(--sl-color-gray-5)',
        borderRadius: '0.5rem',
        background: isOpen ? 'var(--sl-color-gray-6)' : 'none',
        color: 'var(--sl-color-gray-2)',
        cursor: 'pointer',
        fontSize: 'var(--sl-text-sm)',
        fontWeight: 500,
        fontFamily: 'inherit',
        whiteSpace: 'nowrap' as const,
        transition: 'border-color 0.15s, background-color 0.15s, color 0.15s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--sl-color-gray-4)';
        e.currentTarget.style.color = 'var(--sl-color-white)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--sl-color-gray-5)';
        e.currentTarget.style.color = 'var(--sl-color-gray-2)';
      }}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M2 6.5C2 4 4.5 2 8 2s6 2 6 4.5S11.5 11 8 11c-.6 0-1.2-.1-1.7-.2L3 13v-3.3C2.4 8.8 2 7.7 2 6.5z" />
        <circle cx="5.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
        <circle cx="8" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
        <circle cx="10.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
      <span>Ask AI</span>
    </button>
  );
}
