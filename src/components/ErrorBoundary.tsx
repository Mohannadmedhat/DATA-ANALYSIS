import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught Error in Presentation:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="w-full max-w-4xl mx-auto my-auto p-8 rounded-2xl bg-slate-900 border border-slate-800 text-white flex flex-col items-center justify-center text-center shadow-2xl">
          <div className="w-14 h-14 rounded-2xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400 mb-4">
            <AlertTriangle className="w-7 h-7" />
          </div>
          <h2 className="text-2xl font-bold text-slate-100 mb-2">Slide Rendering Refresh</h2>
          <p className="text-sm text-slate-400 mb-6 max-w-md">
            The presentation encountered a transient rendering state. Click below to refresh and resume Session 04 seamlessly.
          </p>
          <button
            onClick={() => {
              this.setState({ hasError: false });
              window.location.reload();
            }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs transition-all shadow-lg cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reload Presentation</span>
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
