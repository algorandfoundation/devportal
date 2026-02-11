import { atom } from 'nanostores';

/** Whether the AI chat panel is open */
export const isChatOpen = atom(false);

/** Whether the AI chat panel is pinned (side-by-side mode) */
export const isChatPinned = atom(false);

/** localStorage key for persisting pin preference */
const PINNED_STORAGE_KEY = 'ai-chat-pinned';

/** Minimum viewport width for pinned mode */
export const PIN_BREAKPOINT = 1200;

/** Initialize pinned state from localStorage */
export function initChatPinned() {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(PINNED_STORAGE_KEY);
    isChatPinned.set(stored === 'true');
  }
}

/** Toggle pinned state and persist to localStorage */
export function toggleChatPinned() {
  const newValue = !isChatPinned.get();
  isChatPinned.set(newValue);
  if (typeof window !== 'undefined') {
    localStorage.setItem(PINNED_STORAGE_KEY, String(newValue));
  }
}
