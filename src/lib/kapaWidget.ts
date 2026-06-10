type KapaOpenOptions = {
  mode?: 'search' | 'ai';
  query?: string;
  submit?: boolean;
};

type KapaRenderOptions = {
  onRender?: () => void;
};

type KapaCallable = {
  open: (options?: KapaOpenOptions) => void;
  close: () => void;
  render: (options?: KapaRenderOptions) => void;
  unmount: () => void;
};

type KapaPreinit = ((command: string, options?: unknown) => void) & {
  open?: (options?: KapaOpenOptions) => void;
  render?: (options?: KapaRenderOptions) => void;
  unmount?: () => void;
  q?: unknown[];
  c?: (args: unknown[]) => void;
};

declare global {
  interface Window {
    Kapa?: KapaCallable | KapaPreinit;
    __kapaAskAiInit?: boolean;
  }
}

/** Open the Kapa website widget modal in Ask AI mode. */
export function openKapaWidget(
  options: KapaOpenOptions = { mode: 'ai' },
): void {
  const kapa = window.Kapa;
  if (!kapa) return;

  // After init, Kapa stays callable but only `.open()` reliably reopens the modal.
  // The preinit `Kapa('open', …)` queue is only for calls made before the widget loads.
  if (typeof kapa.open === 'function') {
    kapa.open(options);
    return;
  }

  if (typeof kapa === 'function') {
    kapa('open', options);
  }
}

/**
 * Wire up the custom "Ask AI" triggers and keep the Kapa widget working across
 * Astro view transitions. Safe to call multiple times; only the first call
 * registers listeners.
 */
export function initKapaAskAi(): void {
  if (window.__kapaAskAiInit) return;
  window.__kapaAskAiInit = true;

  // Delegated handler: a single listener on `document` survives view transitions,
  // so every `[data-kapa-ask-ai-trigger]` button works without per-button wiring.
  document.addEventListener('click', event => {
    const trigger = (event.target as Element | null)?.closest(
      '[data-kapa-ask-ai-trigger]',
    );
    if (!trigger) return;

    event.preventDefault();
    openKapaWidget({ mode: 'ai' });
  });

  // Astro view transitions swap `<head>` and `<body>`, which removes Kapa's
  // injected theme styles (head) and widget container (body). That leaves the
  // widget broken and unstyled after client-side navigation. Re-mount it on each
  // navigation so it comes back fully styled. The conversation resets on
  // navigation, the same as it would on a full page reload.
  document.addEventListener('astro:before-swap', () => {
    window.Kapa?.unmount?.();
  });

  document.addEventListener('astro:after-swap', () => {
    window.Kapa?.render?.();
  });
}
