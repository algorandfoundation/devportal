import { useState, useRef, useEffect, useCallback } from 'react';
import { useChat, useDeepThinking } from '@kapaai/react-sdk';
import type { Reaction } from '@kapaai/react-sdk';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { catppuccinMocha } from '../styles/catppuccin-mocha-prism';

/** Copy button with clipboard API + fallback */
function CopyButton({ text, className }: { text: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Fallback for older browsers using deprecated but safe DOM API
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      // eslint-disable-next-line -- deprecated but needed as clipboard fallback
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [text]);

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center justify-center p-1
        bg-[var(--sl-color-gray-5)] border-none rounded
        text-[var(--sl-color-gray-2)] cursor-pointer
        transition-[background,color] duration-150 ${className ?? ''}`}
      title={copied ? 'Copied!' : 'Copy'}
    >
      {copied ? (
        <svg
          width='14'
          height='14'
          viewBox='0 0 16 16'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M3 8.5l3 3 7-7' />
        </svg>
      ) : (
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
          <rect x='5' y='5' width='9' height='9' rx='1' />
          <path d='M11 5V3a1 1 0 00-1-1H3a1 1 0 00-1 1v7a1 1 0 001 1h2' />
        </svg>
      )}
    </button>
  );
}

/** Code block with hover-to-reveal copy button */
function CodeBlock({ code, language }: { code: string; language: string }) {
  return (
    <div className='relative group'>
      <SyntaxHighlighter
        style={catppuccinMocha}
        language={language}
        customStyle={{
          margin: '0.5rem 0',
          borderRadius: '0.375rem',
          fontSize: '0.75rem',
        }}
      >
        {code}
      </SyntaxHighlighter>
      <CopyButton
        text={code}
        className='absolute top-3 right-2 opacity-0 group-hover:opacity-100 transition-opacity'
      />
    </div>
  );
}

export default function ChatInterface() {
  const {
    conversation,
    submitQuery,
    isGeneratingAnswer,
    isPreparingAnswer,
    resetConversation,
    stopGeneration,
    addFeedback,
    error,
  } = useChat();
  const isLoading = isPreparingAnswer || isGeneratingAnswer;

  const deepThinking = useDeepThinking();

  const [input, setInput] = useState('');
  const [feedbackState, setFeedbackState] = useState<Record<string, Reaction>>(
    {},
  );
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
    if (!q || isLoading) return;
    submitQuery(q);
    setInput('');
  };

  const handleFeedback = async (qaId: string, reaction: Reaction) => {
    if (feedbackState[qaId]) return;
    try {
      addFeedback(qaId, reaction);
      setFeedbackState(prev => ({ ...prev, [qaId]: reaction }));
    } catch {
      // Silently fail — feedback is non-critical
    }
  };

  const hasMessages = conversation && conversation.length > 0;

  return (
    <div className='flex flex-col h-full text-[color:var(--sl-color-text)] font-[family-name:var(--sl-font,system-ui,sans-serif)]'>
      {/* Header */}
      <div className='flex items-center justify-between pl-4 pr-12 py-3 border-b border-[var(--sl-color-gray-5)] shrink-0'>
        <span className='font-semibold text-[length:var(--sl-text-sm)] text-[var(--sl-color-white)]'>
          Ask AI
        </span>
        <div className='flex gap-1'>
          {hasMessages && (
            <button
              onClick={() => {
                resetConversation();
                setFeedbackState({});
              }}
              className='flex items-center justify-center w-7 h-7 p-0 rounded-md cursor-pointer
                bg-[var(--sl-color-gray-6)] border border-[var(--sl-color-gray-5)]
                text-[var(--sl-color-gray-3)]
                transition-[border-color,color] duration-150
                hover:text-[#01DC94] hover:border-[#01DC94]'
              title='New conversation'
            >
              <svg
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='currentColor'
              >
                <path d='M7.207 2.543a1 1 0 0 1 0 1.414L5.414 5.75h7.836a8 8 0 1 1-8 8a1 1 0 1 1 2 0a6 6 0 1 0 6-6H5.414l1.793 1.793a1 1 0 0 1-1.414 1.414l-3.5-3.5a1 1 0 0 1 0-1.414l3.5-3.5a1 1 0 0 1 1.414 0' />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Messages */}
      <div className='flex-1 overflow-y-auto p-4'>
        {!hasMessages && (
          <div className='flex flex-col items-center justify-center text-center h-full gap-2 p-8'>
            <svg
              width='32'
              height='32'
              viewBox='0 0 16 16'
              fill='none'
              stroke='currentColor'
              strokeWidth='1'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='opacity-30'
            >
              <path d='M2 6.5C2 4 4.5 2 8 2s6 2 6 4.5S11.5 11 8 11c-.6 0-1.2-.1-1.7-.2L3 13v-3.3C2.4 8.8 2 7.7 2 6.5z' />
            </svg>
            <p className='font-semibold text-[length:var(--sl-text-base)] text-[var(--sl-color-white)] m-0'>
              Ask anything about Algorand
            </p>
            <p className='text-[length:var(--sl-text-sm)] text-[var(--sl-color-gray-3)] m-0 max-w-[280px] leading-relaxed'>
              Get answers from the Algorand documentation, guides, and API
              references.
            </p>
          </div>
        )}

        {conversation &&
          conversation.map((qa, index) => (
            <div key={qa.id || index} className='mb-5'>
              {/* User question */}
              <div className='flex justify-end mb-3'>
                <div
                  className='max-w-[85%] px-3 py-2 rounded-t-xl rounded-bl-xl
                    bg-[var(--sl-color-accent)] text-[var(--sl-color-black)]
                    text-[length:var(--sl-text-sm)] leading-relaxed font-medium'
                >
                  {qa.question}
                </div>
              </div>

              {/* AI answer */}
              <div className='pl-1'>
                {qa.answer ? (
                  <>
                    <div className='text-xs leading-relaxed text-[var(--sl-color-gray-1)]'>
                      <Markdown
                        components={{
                          a: ({ href, children }) => (
                            <a
                              href={href}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='text-[var(--sl-color-text-accent)] underline underline-offset-2'
                            >
                              {children}
                            </a>
                          ),
                          ul: ({ children }) => (
                            <ul className='my-1.5 pl-4'>{children}</ul>
                          ),
                          ol: ({ children }) => (
                            <ol className='my-1.5 pl-4'>{children}</ol>
                          ),
                          li: ({ children }) => (
                            <li className='mb-0.5'>{children}</li>
                          ),
                          code: ({ children, className }) => {
                            const match = /language-(\w+)/.exec(
                              className || '',
                            );
                            const code = String(children).replace(/\n$/, '');
                            return match ? (
                              <CodeBlock code={code} language={match[1]} />
                            ) : (
                              <code className='bg-[var(--sl-color-gray-6)] rounded-sm px-1.5 py-0.5 text-[0.85em]'>
                                {children}
                              </code>
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
                      <div className='mt-2.5 p-2 bg-[var(--sl-color-gray-6)] rounded-md border border-[var(--sl-color-gray-5)]'>
                        <span className='block text-[0.65rem] font-semibold text-[var(--sl-color-gray-3)] uppercase tracking-wider mb-1'>
                          Sources
                        </span>
                        <div className='flex flex-col gap-0.5'>
                          {qa.sources.map((src, i) => (
                            <a
                              key={i}
                              href={src.source_url}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='flex items-center gap-1 text-xs text-[var(--sl-color-text-accent)]
                                no-underline overflow-hidden text-ellipsis whitespace-nowrap'
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
                                className='shrink-0'
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

                    {/* Feedback & Copy */}
                    {qa.id && (
                      <div className='flex gap-1 mt-1.5'>
                        <button
                          onClick={() => handleFeedback(qa.id!, 'upvote')}
                          className={`flex items-center justify-center p-1 bg-transparent border-none
                            rounded cursor-pointer transition-colors duration-150
                            ${feedbackState[qa.id] === 'upvote' ? 'text-[var(--sl-color-text-accent)]' : 'text-[var(--sl-color-gray-4)]'}`}
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
                          onClick={() => handleFeedback(qa.id!, 'downvote')}
                          className={`flex items-center justify-center p-1 bg-transparent border-none
                            rounded cursor-pointer transition-colors duration-150
                            ${feedbackState[qa.id] === 'downvote' ? 'text-[var(--sl-color-text-accent)]' : 'text-[var(--sl-color-gray-4)]'}`}
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
                        <CopyButton text={qa.answer} className='ml-1' />
                      </div>
                    )}
                  </>
                ) : (
                  <div className='flex gap-1 py-2 text-[var(--sl-color-gray-3)] text-[0.6rem]'>
                    <span className='animate-[kapa-pulse_1.2s_ease-in-out_infinite]'>
                      ●
                    </span>
                    <span className='animate-[kapa-pulse_1.2s_ease-in-out_infinite_0.2s]'>
                      ●
                    </span>
                    <span className='animate-[kapa-pulse_1.2s_ease-in-out_infinite_0.4s]'>
                      ●
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        {error && (
          <div className='p-3 mx-0 mb-2 bg-red-900/20 border border-red-500/30 rounded-md text-red-300 text-xs'>
            {error}
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className='border-t border-[var(--sl-color-gray-5)] px-3 py-2.5 shrink-0'>
        {isGeneratingAnswer && (
          <button
            onClick={stopGeneration}
            className='flex items-center gap-1.5 px-2.5 py-1 mb-2 w-full justify-center
              bg-[var(--sl-color-gray-6)] border border-[var(--sl-color-gray-5)]
              rounded-md text-[var(--sl-color-gray-2)] cursor-pointer
              text-xs font-[family-name:inherit]'
          >
            <svg width='12' height='12' viewBox='0 0 16 16' fill='currentColor'>
              <rect x='3' y='3' width='10' height='10' rx='1.5' />
            </svg>
            Stop generating
          </button>
        )}
        <form
          onSubmit={handleSubmit}
          className='flex items-center gap-1.5 bg-[var(--sl-color-gray-6)] border border-[var(--sl-color-gray-5)] rounded-lg pl-2.5 pr-0.5 py-0.5'
        >
          <button
            type='button'
            onClick={deepThinking.toggle}
            title={
              deepThinking.active
                ? 'Deep thinking enabled'
                : 'Enable deep thinking'
            }
            className={`flex items-center justify-center p-1 bg-transparent border-none
              cursor-pointer rounded shrink-0
              transition-[color,background] duration-150
              ${deepThinking.active ? 'text-[#01DC94] bg-[rgba(1,220,148,0.15)]' : 'text-[var(--sl-color-gray-3)]'}`}
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
            className='flex-1 bg-transparent border-none outline-none
              text-[var(--sl-color-white)] text-[length:var(--sl-text-sm)]
              font-[family-name:inherit] py-1.5 min-w-0'
            disabled={isLoading}
          />
          <button
            type='submit'
            disabled={!input.trim() || isLoading}
            className={`flex items-center justify-center p-1.5
              bg-[var(--sl-color-accent)] border-none rounded-md
              text-[var(--sl-color-black)] cursor-pointer shrink-0
              transition-opacity duration-150
              ${input.trim() && !isLoading ? 'opacity-100' : 'opacity-40'}`}
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
            <div className='text-[0.7rem] text-[var(--sl-color-accent)] text-center mt-1.5 font-medium'>
              Deep thinking... {deepThinking.seconds}s
            </div>
          )}
        <div className='text-center text-[0.65rem] text-[var(--sl-color-gray-4)] mt-2'>
          Powered by{' '}
          <a
            href='https://kapa.ai'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[var(--sl-color-gray-3)] underline underline-offset-2'
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
