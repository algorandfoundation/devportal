# Pinnable AI Chat Panel Design

**Date:** 2026-02-11
**Status:** Draft
**Reference:** [Stripe Docs AI](https://docs.stripe.com/get-started)

## Overview

Add the ability to "pin" the AI chat panel so it pushes main content to the left (side-by-side mode) instead of floating over the page. This provides a persistent, distraction-free reference experience similar to Stripe's documentation AI.

## Behavioral Modes

### 1. Floating Mode (Default)

Current behavior remains unchanged:

- Panel slides in from right, overlays content with semi-transparent backdrop
- Body scroll is locked while panel is open
- Clicking backdrop or pressing `Escape` closes panel
- Panel width: 540px

### 2. Pinned Mode

New side-by-side layout:

- Panel pushes main content to the left (no overlay/backdrop)
- Main content **shrinks responsively** to accommodate the 540px panel
- Body scroll remains enabled (user can scroll main content normally)
- Panel stays open while navigating between pages
- Only available on viewports ≥ 1200px (smaller screens always use floating mode)

### State Persistence

Pin preference stored in `localStorage`:
- Key: `ai-chat-pinned`
- Value: `"true"` | `"false"`
- Survives page refreshes and navigation

## UI Controls & Interactions

### Pin Toggle Button

- **Location:** Chat panel header, next to the reset button
- **Icon:** Sidebar dock icon (panel pushing content)
- **Size:** 28x28px (matches existing header buttons)
- **Styling:** Same as reset/close buttons with green hover state (#01DC94)
- **Tooltip:** "Pin panel" when floating, "Unpin panel" when pinned

### Mode Transitions

| Transition | Animation |
|------------|-----------|
| Floating → Pinned | Main content shrinks with 0.25s ease transition, backdrop fades out |
| Pinned → Floating | Main content expands, backdrop fades in |
| Close (either mode) | Panel slides out to right |

### Keyboard Shortcuts

- `Escape`: Closes panel in both modes
- Future: Consider `Cmd+.` or similar to toggle pin state

## Technical Architecture

### State Management

**File:** `src/stores/chatStore.ts`

```typescript
import { atom } from 'nanostores';

/** Whether the AI chat panel is open */
export const isChatOpen = atom(false);

/** Whether the AI chat panel is pinned (side-by-side mode) */
export const isChatPinned = atom(false);

/** Initialize pinned state from localStorage */
export function initChatPinned() {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('ai-chat-pinned');
    isChatPinned.set(stored === 'true');
  }
}

/** Toggle pinned state and persist */
export function toggleChatPinned() {
  const newValue = !isChatPinned.get();
  isChatPinned.set(newValue);
  localStorage.setItem('ai-chat-pinned', String(newValue));
}
```

### Layout Integration

The root layout needs to respond to the pinned state. Two approaches:

#### Option A: CSS Class on Root Element

Add a class to the `<html>` or `<body>` element when pinned:

```css
/* Global styles */
html.chat-pinned {
  --chat-panel-width: 500px;
}

html.chat-pinned main,
html.chat-pinned .main-content {
  margin-right: var(--chat-panel-width);
  transition: margin-right 0.25s ease;
}

/* Prevent pinned mode on small screens */
@media (max-width: 1199px) {
  html.chat-pinned main,
  html.chat-pinned .main-content {
    margin-right: 0;
  }
}
```

#### Option B: CSS Variable + React Context

Use a CSS custom property controlled by React:

```tsx
// In AIChatPanel or root component
useEffect(() => {
  document.documentElement.style.setProperty(
    '--chat-margin-right',
    isPinned && isOpen ? '500px' : '0'
  );
}, [isPinned, isOpen]);
```

**Recommendation:** Option A (CSS class) is simpler and doesn't require changes to the Starlight layout components.

### Component Changes

#### `src/components/AIChatPanel.tsx`

```tsx
export default function AIChatPanel() {
  const isOpen = useStore(isChatOpen);
  const isPinned = useStore(isChatPinned);

  // Initialize pinned state on mount
  useEffect(() => {
    initChatPinned();
  }, []);

  // Sync pinned class to document
  useEffect(() => {
    if (isOpen && isPinned) {
      document.documentElement.classList.add('chat-pinned');
    } else {
      document.documentElement.classList.remove('chat-pinned');
    }
    return () => {
      document.documentElement.classList.remove('chat-pinned');
    };
  }, [isOpen, isPinned]);

  // Only show backdrop in floating mode
  const showBackdrop = isOpen && !isPinned;

  // Lock body scroll only in floating mode
  useEffect(() => {
    if (isOpen && !isPinned) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, isPinned]);

  return (
    <>
      {/* Backdrop - only in floating mode */}
      {showBackdrop && (
        <div onClick={close} style={backdropStyles} aria-hidden="true" />
      )}

      {/* Panel */}
      <div role="dialog" style={panelStyles}>
        {/* ... existing content ... */}
      </div>
    </>
  );
}
```

#### `src/components/ChatInterface.tsx`

Add pin button to header actions:

```tsx
<div style={styles.headerActions}>
  {/* Pin toggle */}
  <button
    onClick={toggleChatPinned}
    className="chat-panel-btn"
    style={styles.headerBtn}
    title={isPinned ? 'Unpin panel' : 'Pin panel'}
  >
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      {isPinned ? (
        // Unpinned icon (panel floating)
        <path d="..." />
      ) : (
        // Pinned icon (panel docked)
        <path d="..." />
      )}
    </svg>
  </button>

  {/* Reset button (existing) */}
  {hasMessages && (
    <button onClick={resetConversation} ...>
      ...
    </button>
  )}
</div>
```

### Responsive Behavior

| Viewport Width | Behavior |
|----------------|----------|
| < 1200px | Pin button hidden, always floating mode |
| ≥ 1200px | Pin button visible, both modes available |

```tsx
// Check if pinning is available
const canPin = typeof window !== 'undefined' && window.innerWidth >= 1200;

// Listen for resize to handle edge cases
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 1200 && isPinned) {
      // Gracefully fall back to floating on resize below breakpoint
      // Note: Don't change the stored preference, just the visual behavior
    }
  };
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, [isPinned]);
```

## Implementation Files

| File | Changes |
|------|---------|
| `src/stores/chatStore.ts` | Add `isChatPinned` atom, `initChatPinned()`, `toggleChatPinned()` |
| `src/components/AIChatPanel.tsx` | Add pinned state sync, conditional backdrop, body scroll logic |
| `src/components/ChatInterface.tsx` | Add pin toggle button to header, pass `isPinned` prop |
| `src/styles/global.css` | Add `.chat-pinned` layout styles with responsive breakpoint |

## Edge Cases

1. **Page navigation while pinned**
   - Panel persists, chat state maintained via Kapa SDK
   - `chat-pinned` class stays on document

2. **Window resize below breakpoint while pinned**
   - Visual behavior switches to floating (backdrop appears)
   - Stored preference unchanged (returns to pinned when resized back)

3. **Mobile/tablet (< 1200px)**
   - Pin button hidden from UI
   - Always uses floating mode regardless of stored preference

4. **Print styles**
   - Panel should be hidden: `@media print { .chat-panel { display: none; } }`

5. **Focus management**
   - When pinning, focus remains in chat panel
   - When unpinning, focus remains in chat panel

## Testing Checklist

- [ ] Floating mode works as before (default)
- [ ] Pin button toggles between modes
- [ ] Main content shrinks/expands smoothly on toggle
- [ ] Backdrop only appears in floating mode
- [ ] Body scroll locked only in floating mode
- [ ] Preference persists in localStorage across refreshes
- [ ] Resize below 1200px switches to floating behavior
- [ ] Resize above 1200px restores pinned behavior (if preference set)
- [ ] Pin button hidden on viewports < 1200px
- [ ] Navigation between pages preserves panel state
- [ ] Escape key closes panel in both modes
- [ ] Panel hidden in print styles

## Future Considerations

1. **Keyboard shortcut** - Add `Cmd+.` or similar to toggle pin state
2. **Animation refinement** - Consider spring animations for smoother transitions
3. **Width customization** - Allow users to resize panel width (drag handle)
4. **Remember panel open state** - Optionally persist open/closed state too
