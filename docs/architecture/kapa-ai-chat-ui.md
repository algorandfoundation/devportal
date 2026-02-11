# Kapa AI Chat UI Architecture

This document describes the custom Kapa AI chat interface implementation in the Algorand Developer Portal. This replaces the default Kapa widget with a custom slide-out panel that provides a more integrated user experience.

## Overview

The chat UI consists of:

- **Floating trigger button** - Always visible in the header, toggles the chat panel
- **Slide-out panel** - Full-height panel that slides in from the right
- **Chat interface** - Custom message UI with markdown rendering, syntax highlighting, and deep thinking support

## Key Files

| File | Type | Purpose |
|------|------|---------|
| `src/components/AIChatPanel.tsx` | React | Panel container, backdrop, Kapa provider |
| `src/components/AIChatTrigger.tsx` | React | Floating action button in header |
| `src/components/ChatInterface.tsx` | React | Message UI, input, markdown rendering |
| `src/stores/chatStore.ts` | TypeScript | Nanostores atom for panel open/close state |
| `src/styles/catppuccin-mocha-prism.ts` | TypeScript | Syntax highlighting theme |
| `src/components/CustomThemeProvider.astro` | Astro | Mounts the chat panel |

## Architecture

### Component Hierarchy

```
CustomThemeProvider.astro
  AIChatPanel.tsx (client:only="react")
    KapaProvider (from @kapaai/react-sdk)
      ChatInterface.tsx
        Message rendering
        Markdown (react-markdown)
        SyntaxHighlighter (react-syntax-highlighter)
        Input area

Header.astro
  AIChatTrigger.tsx (client:idle)
```

### State Management

The panel open/close state uses Nanostores for simple cross-component communication:

```typescript
// src/stores/chatStore.ts
import { atom } from 'nanostores';
export const isChatOpen = atom(false);
```

- `AIChatTrigger` toggles `isChatOpen` on click
- `AIChatPanel` subscribes to `isChatOpen` to show/hide

This pattern avoids prop drilling through Astro components and allows React components to share state.

## Component Details

### AIChatPanel.tsx

**Responsibilities:**

- Renders the slide-out panel container (440px width, fixed right)
- Renders semi-transparent backdrop with blur effect
- Locks body scroll when panel is open
- Handles Escape key to close
- Wraps content in `KapaProvider` for SDK context
- Shows error message if `PUBLIC_KAPA_INTEGRATION_ID` is not configured

**Key implementation details:**

```tsx
// Panel positioning
<div style={{
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  width: '440px',
  transform: isChatOpen ? 'translateX(0)' : 'translateX(100%)',
  transition: 'transform 0.3s ease-in-out',
  zIndex: 1001,
}}>
```

**Kapa SDK integration:**

```tsx
<KapaProvider integrationId={integrationId}>
  <ChatInterface />
</KapaProvider>
```

### AIChatTrigger.tsx

**Responsibilities:**

- Renders the floating "Ask AI" button
- Toggles panel open/close state
- Shows visual feedback (hover states, aria-expanded)

**Styling:**

- Uses Starlight CSS variables for theming
- Chat bubble icon with animated dots
- Hover state changes background and icon color

### ChatInterface.tsx

**Responsibilities:**

- Display conversation history (questions and answers)
- Handle message submission
- Render markdown responses with syntax highlighting
- Display source citations with links
- Provide feedback buttons (upvote/downvote)
- Support deep thinking toggle
- Stop generation button
- Auto-scroll to latest messages

**Kapa SDK hooks used:**

```tsx
const {
  messages,           // Conversation history
  input,              // Current input value
  handleInputChange,  // Input change handler
  handleSubmit,       // Form submit handler
  isLoading,          // Loading state
  stop,               // Stop generation
  setMessages,        // Clear conversation
  sendFeedback,       // Send upvote/downvote
} = useChat();

const {
  deepThinkingEnabled,
  setDeepThinkingEnabled,
  isDeepThinking,
} = useDeepThinking();
```

**Message rendering:**

Messages are rendered with `react-markdown` for markdown support and `react-syntax-highlighter` for code blocks:

```tsx
<ReactMarkdown
  components={{
    code({ className, children }) {
      const match = /language-(\w+)/.exec(className || '');
      return match ? (
        <SyntaxHighlighter
          style={catppuccinMocha}
          language={match[1]}
          PreTag="div"
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className={className}>{children}</code>
      );
    },
  }}
>
  {message.content}
</ReactMarkdown>
```

**Source citations:**

When Kapa provides sources, they are rendered as clickable links below the answer.

## Styling Approach

### Design Tokens

The chat UI uses Starlight CSS custom properties for consistent theming:

```css
--sl-color-bg           /* Background */
--sl-color-bg-nav       /* Navigation background */
--sl-color-text         /* Primary text */
--sl-color-text-accent  /* Accent text */
--sl-color-gray-*       /* Gray scale (1-6) */
--sl-color-accent       /* Brand accent */
```

### Syntax Highlighting

Code blocks use the Catppuccin Mocha theme (`src/styles/catppuccin-mocha-prism.ts`), which provides a dark, readable color scheme that matches the site aesthetic.

### Animations

- **Panel slide:** `transform: translateX()` with 0.3s ease-in-out
- **Backdrop fade:** `opacity` with 0.3s transition
- **Thinking dots:** CSS keyframe animation for loading indicator

## Configuration

### Environment Variable

```bash
PUBLIC_KAPA_INTEGRATION_ID=108606d0-4102-47e3-b712-86427976daf4
```

This ID connects to the Kapa.ai integration configured for the Algorand documentation.

### Package Dependencies

```json
{
  "@kapaai/react-sdk": "^0.9.1",
  "@nanostores/react": "^1.0.0",
  "nanostores": "^1.1.0",
  "react-markdown": "^10.1.0",
  "react-syntax-highlighter": "^16.1.0"
}
```

## Integration Points

### Header.astro

The trigger button is rendered in the header on all page types:

```astro
<!-- Homepage -->
<div class="header-actions">
  <AIChatTrigger client:idle />
</div>

<!-- Library pages -->
<div class="library-header-actions">
  <AIChatTrigger client:idle />
</div>

<!-- Content pages -->
<div class="header-actions">
  <AIChatTrigger client:idle />
</div>
```

Uses `client:idle` directive so the button hydrates after the page is idle, not blocking initial render.

### CustomThemeProvider.astro

The panel is rendered in the theme provider (which wraps the entire site):

```astro
---
import AIChatPanel from './AIChatPanel';
---

<slot />
<AIChatPanel client:only="react" />
```

Uses `client:only="react"` because:
- The panel has no server-rendered content (it is hidden by default)
- It depends on React-only features (hooks, state)
- Avoids hydration mismatch issues

## What is Reusable vs Prototype-Only

### Reusable (keep for production)

- **`AIChatPanel.tsx`** - Panel container and Kapa provider setup
- **`AIChatTrigger.tsx`** - Trigger button (may need style tweaks)
- **`chatStore.ts`** - State management pattern
- **`catppuccin-mocha-prism.ts`** - Syntax highlighting theme
- **Kapa SDK integration pattern** - useChat, useDeepThinking hooks

### May Need Refinement

- **`ChatInterface.tsx`** - Core functionality is solid, but:
  - Styling uses inline CSS objects (could move to CSS file)
  - Some hardcoded colors could use more CSS variables
  - Mobile responsiveness needs testing
  - Accessibility (focus management, screen reader announcements)

### Configuration to Update

- **Integration ID** - Will need production Kapa integration ID
- **Kapa dashboard** - May need to configure which docs are indexed

## Features Implemented

| Feature | Status | Notes |
|---------|--------|-------|
| Slide-out panel | Done | 440px width, smooth animation |
| Backdrop overlay | Done | Click to close, blur effect |
| Keyboard support | Done | Escape to close |
| Markdown rendering | Done | Full markdown support |
| Syntax highlighting | Done | Catppuccin Mocha theme |
| Source citations | Done | Clickable links to docs |
| Feedback (up/down) | Done | Sends to Kapa analytics |
| Deep thinking | Done | Toggle and status indicator |
| Stop generation | Done | Cancels in-progress response |
| New conversation | Done | Clears message history |
| Auto-scroll | Done | Scrolls to latest message |
| Body scroll lock | Done | Prevents background scroll |

## Future Considerations

1. **Conversation persistence** - Could save conversation history to localStorage

2. **Suggested prompts** - Show helpful starter questions for new users

3. **Context awareness** - Could pass current page URL to Kapa for more relevant answers

4. **Mobile optimization** - Panel should be full-width on mobile

5. **Keyboard navigation** - Tab through messages, focus management

6. **Copy code button** - Add button to copy code blocks

7. **Message actions** - Copy answer, share link, etc.
