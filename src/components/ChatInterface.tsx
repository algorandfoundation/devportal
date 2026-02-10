import { useState, useRef, useEffect } from 'react';
import { useChat, useDeepThinking } from '@kapaai/react-sdk';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { catppuccinMocha } from '../styles/catppuccin-mocha-prism';

export default function ChatInterface() {
  const {
    conversation,
    submitQuery,
    isGeneratingAnswer,
    resetConversation,
    stopGeneration,
    addFeedback,
  } = useChat();

  const deepThinking = useDeepThinking();

  const [input, setInput] = useState('');
  const [feedbackState, setFeedbackState] = useState<
    Record<string, 'upvote' | 'downvote'>
  >({});
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversation]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = input.trim();
    if (!q || isGeneratingAnswer) return;
    submitQuery(q);
    setInput('');
  };

  const handleFeedback = async (
    qaId: string,
    reaction: 'upvote' | 'downvote',
  ) => {
    if (feedbackState[qaId]) return;
    try {
      await addFeedback(qaId, reaction);
      setFeedbackState((prev: Record<string, 'upvote' | 'downvote'>) => ({
        ...prev,
        [qaId]: reaction,
      }));
    } catch {
      // Silently fail
    }
  };

  const hasMessages = conversation && [...conversation].length > 0;

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <span style={styles.headerTitle}>Ask AI</span>
        <div style={styles.headerActions}>
          {hasMessages && (
            <button
              onClick={() => {
                resetConversation();
                setFeedbackState({});
              }}
              style={styles.headerBtn}
              title='New conversation'
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
              >
                <path d='M2.5 2.5v4h4' />
                <path d='M2.8 10a5.5 5.5 0 108.4-6.6L6.5 6.5' />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Messages */}
      <div style={styles.messages}>
        {!hasMessages && (
          <div style={styles.emptyState}>
            <svg
              width='32'
              height='32'
              viewBox='0 0 16 16'
              fill='none'
              stroke='currentColor'
              strokeWidth='1'
              strokeLinecap='round'
              strokeLinejoin='round'
              style={{ opacity: 0.3 }}
            >
              <path d='M2 6.5C2 4 4.5 2 8 2s6 2 6 4.5S11.5 11 8 11c-.6 0-1.2-.1-1.7-.2L3 13v-3.3C2.4 8.8 2 7.7 2 6.5z' />
            </svg>
            <p style={styles.emptyTitle}>Ask anything about Algorand</p>
            <p style={styles.emptySubtitle}>
              Get answers from the Algorand documentation, guides, and API
              references.
            </p>
          </div>
        )}

        {conversation &&
          [...conversation].map((qa: any, index: number) => (
            <div key={qa.id || index} style={styles.qaPair}>
              {/* User question */}
              <div style={styles.userMessage}>
                <div style={styles.userBubble}>{qa.question}</div>
              </div>

              {/* AI answer */}
              <div style={styles.aiMessage}>
                {qa.answer ? (
                  <>
                    <div style={styles.answerContent}>
                      <Markdown
                        components={{
                          a: ({ href, children }) => (
                            <a
                              href={href}
                              target='_blank'
                              rel='noopener noreferrer'
                              style={styles.markdownLink}
                            >
                              {children}
                            </a>
                          ),
                          ul: ({ children }) => (
                            <ul style={styles.markdownList}>{children}</ul>
                          ),
                          ol: ({ children }) => (
                            <ol style={styles.markdownList}>{children}</ol>
                          ),
                          li: ({ children }) => (
                            <li style={styles.markdownListItem}>{children}</li>
                          ),
                          code: ({ children, className }) => {
                            const match = /language-(\w+)/.exec(
                              className || '',
                            );
                            const code = String(children).replace(/\n$/, '');
                            return match ? (
                              <SyntaxHighlighter
                                style={catppuccinMocha}
                                language={match[1]}
                                customStyle={{
                                  margin: '0.5rem 0',
                                  borderRadius: '0.375rem',
                                  fontSize: '0.75rem',
                                }}
                              >
                                {code}
                              </SyntaxHighlighter>
                            ) : (
                              <code style={styles.inlineCode}>{children}</code>
                            );
                          },
                          pre: ({ children }) => <>{children}</>,
                        }}
                      >
                        {qa.answer}
                      </Markdown>
                    </div>

                    {/* Sources */}
                    {qa.sources && qa.sources.length > 0 && (
                      <div style={styles.sources}>
                        <span style={styles.sourcesLabel}>Sources</span>
                        <div style={styles.sourcesList}>
                          {qa.sources.map((src: any, i: number) => (
                            <a
                              key={i}
                              href={src.source_url}
                              target='_blank'
                              rel='noopener noreferrer'
                              style={styles.sourceLink}
                            >
                              <svg
                                width='10'
                                height='10'
                                viewBox='0 0 16 16'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              >
                                <path d='M6 3H3v10h10v-3' />
                                <path d='M9 2h5v5' />
                                <path d='M14 2L7 9' />
                              </svg>
                              {src.title || src.source_url}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Feedback */}
                    <div style={styles.feedback}>
                      <button
                        onClick={() => handleFeedback(qa.id, 'upvote')}
                        style={{
                          ...styles.feedbackBtn,
                          ...(feedbackState[qa.id] === 'upvote'
                            ? styles.feedbackActive
                            : {}),
                        }}
                        disabled={!!feedbackState[qa.id]}
                        title='Helpful'
                      >
                        <svg
                          width='12'
                          height='12'
                          viewBox='0 0 16 16'
                          fill={
                            feedbackState[qa.id] === 'upvote'
                              ? 'currentColor'
                              : 'none'
                          }
                          stroke='currentColor'
                          strokeWidth='1.5'
                        >
                          <path d='M4 7h1.5l2-5 .5-.5h1L9 4l-.5 3H13l.5.5L12 13H5L4 12V7z' />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleFeedback(qa.id, 'downvote')}
                        style={{
                          ...styles.feedbackBtn,
                          ...(feedbackState[qa.id] === 'downvote'
                            ? styles.feedbackActive
                            : {}),
                        }}
                        disabled={!!feedbackState[qa.id]}
                        title='Not helpful'
                      >
                        <svg
                          width='12'
                          height='12'
                          viewBox='0 0 16 16'
                          fill={
                            feedbackState[qa.id] === 'downvote'
                              ? 'currentColor'
                              : 'none'
                          }
                          stroke='currentColor'
                          strokeWidth='1.5'
                        >
                          <path d='M12 9h-1.5l-2 5-.5.5h-1L7 12l.5-3H3l-.5-.5L4 3h7l1 1v5z' />
                        </svg>
                      </button>
                    </div>
                  </>
                ) : (
                  <div style={styles.thinking}>
                    <span style={styles.thinkingDot}>●</span>
                    <span
                      style={{ ...styles.thinkingDot, animationDelay: '0.2s' }}
                    >
                      ●
                    </span>
                    <span
                      style={{ ...styles.thinkingDot, animationDelay: '0.4s' }}
                    >
                      ●
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div style={styles.inputArea}>
        {isGeneratingAnswer && (
          <button onClick={stopGeneration} style={styles.stopBtn}>
            <svg width='12' height='12' viewBox='0 0 16 16' fill='currentColor'>
              <rect x='3' y='3' width='10' height='10' rx='1.5' />
            </svg>
            Stop generating
          </button>
        )}
        <form onSubmit={handleSubmit} style={styles.inputForm}>
          <button
            type='button'
            onClick={deepThinking.toggle}
            title={
              deepThinking.active
                ? 'Deep thinking enabled'
                : 'Enable deep thinking'
            }
            style={{
              ...styles.deepThinkingBtn,
              ...(deepThinking.active ? styles.deepThinkingActive : {}),
            }}
          >
            <svg width='16' height='16' viewBox='0 0 24 24' fill='currentColor'>
              <path d='M9.5 2c.645 0 1.245.188 1.75.512v18.733A3.74 3.74 0 0 1 8.994 22c-1.726 0-3.195-1.187-3.627-2.8A4 4 0 0 1 2 15.25V15c0-1.562.896-2.914 2.201-3.572a3.876 3.876 0 0 1 2.081-6.633A3.25 3.25 0 0 1 9.5 2m3.25 3.86q.119.08.25.139l1.4.46c.517.175 1.014.566 1.19 1.09l.41 1.45a1.55 1.55 0 0 0 1.46 1.05c.236.003.47-.052.68-.16c-.12.2-.181.428-.18.66c-.004.54.362 1.048.87 1.23c.376.12 1.007.181 1.15.62c.24.76.501 1.65 1.48 1.65a1.3 1.3 0 0 0 .407-.063A4 4 0 0 1 22 15v.25a4 4 0 0 1-3.367 3.95c-.431 1.613-1.901 2.8-3.627 2.8a3.74 3.74 0 0 1-2.256-.755zM21.484 8a.3.3 0 0 1 .285.201l.25.766a1.58 1.58 0 0 0 .999.998l.765.248l.015.004a.304.304 0 0 1 .146.46a.3.3 0 0 1-.146.11l-.765.248a1.58 1.58 0 0 0-.999.998l-.249.766a.303.303 0 0 1-.57 0l-.25-.766a1.58 1.58 0 0 0-.998-1.002l-.765-.248a.304.304 0 0 1-.146-.46a.3.3 0 0 1 .146-.11l.765-.248a1.58 1.58 0 0 0 .984-.998L21.2 8.2a.3.3 0 0 1 .284-.2m-4.011-8a.545.545 0 0 1 .512.363l.449 1.376a2.84 2.84 0 0 0 1.797 1.797l1.378.447l.028.007a.55.55 0 0 1 .363.514a.54.54 0 0 1-.363.513l-1.378.447A2.84 2.84 0 0 0 18.46 7.26l-.447 1.376L18 8.67a.545.545 0 0 1-1.014-.034L16.54 7.26a2.84 2.84 0 0 0-1.798-1.804l-1.378-.447A.55.55 0 0 1 13 4.496a.54.54 0 0 1 .363-.513l1.378-.447A2.84 2.84 0 0 0 16.5 1.773l.012-.034l.447-1.376A.55.55 0 0 1 17.473 0' />
            </svg>
          </button>
          <input
            ref={inputRef}
            type='text'
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder={
              deepThinking.active
                ? 'Ask with deep thinking...'
                : 'Ask a question...'
            }
            style={styles.input}
            disabled={isGeneratingAnswer}
          />
          <button
            type='submit'
            disabled={!input.trim() || isGeneratingAnswer}
            style={{
              ...styles.submitBtn,
              opacity: input.trim() && !isGeneratingAnswer ? 1 : 0.4,
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
              strokeLinejoin='round'
            >
              <path d='M2 8h12M10 4l4 4-4 4' />
            </svg>
          </button>
        </form>
        {deepThinking.active &&
          isGeneratingAnswer &&
          deepThinking.seconds > 0 && (
            <div style={styles.deepThinkingStatus}>
              Deep thinking... {deepThinking.seconds}s
            </div>
          )}
        <div style={styles.poweredBy}>
          Powered by{' '}
          <a
            href='https://kapa.ai'
            target='_blank'
            rel='noopener noreferrer'
            style={styles.kapaLink}
          >
            kapa.ai
          </a>
        </div>
      </div>

      {/* Thinking animation keyframes */}
      <style>{`
        @keyframes kapa-pulse {
          0%, 80%, 100% { opacity: 0.3; }
          40% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    color: 'var(--sl-color-text)',
    fontFamily: 'var(--sl-font, system-ui, sans-serif)',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.75rem 2.5rem 0.75rem 1rem',
    borderBottom: '1px solid var(--sl-color-gray-5)',
    flexShrink: 0,
  },
  headerTitle: {
    fontWeight: 600,
    fontSize: 'var(--sl-text-sm)',
    color: 'var(--sl-color-white)',
  },
  headerActions: {
    display: 'flex',
    gap: '0.25rem',
  },
  headerBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.3rem',
    background: 'none',
    border: 'none',
    color: 'var(--sl-color-gray-3)',
    cursor: 'pointer',
    borderRadius: '0.25rem',
    transition: 'color 0.15s',
  },
  messages: {
    flex: 1,
    overflowY: 'auto',
    padding: '1rem',
  },
  emptyState: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center' as const,
    height: '100%',
    gap: '0.5rem',
    padding: '2rem',
  },
  emptyTitle: {
    fontWeight: 600,
    fontSize: 'var(--sl-text-base)',
    color: 'var(--sl-color-white)',
    margin: 0,
  },
  emptySubtitle: {
    fontSize: 'var(--sl-text-sm)',
    color: 'var(--sl-color-gray-3)',
    margin: 0,
    maxWidth: '280px',
    lineHeight: 1.5,
  },
  qaPair: {
    marginBottom: '1.25rem',
  },
  userMessage: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '0.75rem',
  },
  userBubble: {
    maxWidth: '85%',
    padding: '0.5rem 0.75rem',
    borderRadius: '0.75rem 0.75rem 0 0.75rem',
    background: 'var(--sl-color-accent)',
    color: 'var(--sl-color-black)',
    fontSize: 'var(--sl-text-sm)',
    lineHeight: 1.5,
    fontWeight: 500,
  },
  aiMessage: {
    paddingLeft: '0.25rem',
  },
  answerContent: {
    fontSize: '0.75rem',
    lineHeight: 1.6,
    color: 'var(--sl-color-gray-1)',
  },
  markdownLink: {
    color: 'var(--sl-color-text-accent)',
    textDecoration: 'underline',
    textUnderlineOffset: '2px',
  },
  markdownList: {
    margin: '0.35rem 0',
    paddingLeft: '1.1rem',
  },
  markdownListItem: {
    marginBottom: '0.2rem',
  },
  codeBlock: {
    background: 'var(--sl-color-gray-6)',
    borderRadius: '0.375rem',
    padding: '0.6rem 0.75rem',
    overflow: 'auto' as const,
    fontSize: '0.8rem',
    lineHeight: 1.5,
    margin: '0.5rem 0',
  },
  inlineCode: {
    background: 'var(--sl-color-gray-6)',
    borderRadius: '0.2rem',
    padding: '0.1rem 0.3rem',
    fontSize: '0.85em',
  },
  sources: {
    marginTop: '0.6rem',
    padding: '0.5rem 0.6rem',
    background: 'var(--sl-color-gray-6)',
    borderRadius: '0.375rem',
    border: '1px solid var(--sl-color-gray-5)',
  },
  sourcesLabel: {
    display: 'block',
    fontSize: '0.65rem',
    fontWeight: 600,
    color: 'var(--sl-color-gray-3)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.04em',
    marginBottom: '0.3rem',
  },
  sourcesList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.2rem',
  },
  sourceLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',
    fontSize: '0.75rem',
    color: 'var(--sl-color-text-accent)',
    textDecoration: 'none',
    overflow: 'hidden' as const,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap' as const,
  },
  feedback: {
    display: 'flex',
    gap: '0.25rem',
    marginTop: '0.4rem',
  },
  feedbackBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.25rem',
    background: 'none',
    border: 'none',
    color: 'var(--sl-color-gray-4)',
    cursor: 'pointer',
    borderRadius: '0.2rem',
    transition: 'color 0.15s',
  },
  feedbackActive: {
    color: 'var(--sl-color-text-accent)',
  },
  thinking: {
    display: 'flex',
    gap: '0.25rem',
    padding: '0.5rem 0',
    color: 'var(--sl-color-gray-3)',
    fontSize: '0.6rem',
  },
  thinkingDot: {
    animation: 'kapa-pulse 1.2s ease-in-out infinite',
  },
  inputArea: {
    borderTop: '1px solid var(--sl-color-gray-5)',
    padding: '0.6rem 0.75rem',
    flexShrink: 0,
  },
  stopBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.35rem',
    padding: '0.3rem 0.6rem',
    marginBottom: '0.5rem',
    background: 'var(--sl-color-gray-6)',
    border: '1px solid var(--sl-color-gray-5)',
    borderRadius: '0.375rem',
    color: 'var(--sl-color-gray-2)',
    cursor: 'pointer',
    fontSize: '0.75rem',
    fontFamily: 'inherit',
    width: '100%',
    justifyContent: 'center',
  },
  inputForm: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    background: 'var(--sl-color-gray-6)',
    border: '1px solid var(--sl-color-gray-5)',
    borderRadius: '0.5rem',
    padding: '0.15rem 0.15rem 0.15rem 0.6rem',
  },
  input: {
    flex: 1,
    background: 'none',
    border: 'none',
    outline: 'none',
    color: 'var(--sl-color-white)',
    fontSize: 'var(--sl-text-sm)',
    fontFamily: 'inherit',
    padding: '0.4rem 0',
    minWidth: 0,
  },
  submitBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.4rem',
    background: 'var(--sl-color-accent)',
    border: 'none',
    borderRadius: '0.375rem',
    color: 'var(--sl-color-black)',
    cursor: 'pointer',
    flexShrink: 0,
    transition: 'opacity 0.15s',
  },
  deepThinkingBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.35rem',
    background: 'none',
    border: 'none',
    color: 'var(--sl-color-gray-3)',
    cursor: 'pointer',
    borderRadius: '0.25rem',
    transition: 'color 0.15s, background 0.15s',
    flexShrink: 0,
  },
  deepThinkingActive: {
    color: 'var(--sl-color-accent)',
    background: 'var(--sl-color-accent-low)',
  },
  deepThinkingStatus: {
    fontSize: '0.7rem',
    color: 'var(--sl-color-accent)',
    textAlign: 'center' as const,
    marginTop: '0.35rem',
    fontWeight: 500,
  },
  poweredBy: {
    textAlign: 'center' as const,
    fontSize: '0.65rem',
    color: 'var(--sl-color-gray-4)',
    marginTop: '0.5rem',
  },
  kapaLink: {
    color: 'var(--sl-color-gray-3)',
    textDecoration: 'underline',
    textUnderlineOffset: '2px',
  },
};
