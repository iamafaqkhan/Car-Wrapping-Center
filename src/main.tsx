import React, { Component, ErrorInfo, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class RootErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Captured by RootErrorBoundary:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#090a0f] text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="w-12 h-12 rounded-xl bg-[#ccff00]/10 border border-[#ccff00]/30 flex items-center justify-center text-[#ccff00] font-black text-xl mb-4 font-display">
            CW
          </div>
          <h2 className="text-xl font-bold font-display uppercase tracking-wider mb-2">
            Car Wrapping Center · Villanterio
          </h2>
          <p className="text-xs text-slate-400 max-w-md mb-6 leading-relaxed">
            Si è verificato un temporaneo problema di caricamento dell'interfaccia. Clicca sul pulsante sottostante per ricaricare la pagina o contatta direttamente il nostro team su WhatsApp.
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.location.reload()}
              className="px-5 py-2.5 bg-[#ccff00] text-black font-bold text-xs uppercase rounded-xl hover:bg-[#b8e600] transition-colors"
            >
              Ricarica Pagina
            </button>
            <a
              href="https://wa.me/393514658227"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#171a26] border border-[#2b3147] text-white font-bold text-xs uppercase rounded-xl hover:bg-[#222738] transition-colors"
            >
              WhatsApp Diretto
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Global safety listener for unhandled rejections
if (typeof window !== 'undefined') {
  window.addEventListener('unhandledrejection', (event) => {
    console.warn('Prevented uncaught promise rejection:', event.reason);
    event.preventDefault();
  });
}

createRoot(document.getElementById('root')!).render(
  <RootErrorBoundary>
    <App />
  </RootErrorBoundary>
);
