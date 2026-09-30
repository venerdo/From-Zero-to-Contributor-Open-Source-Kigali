import { Component, type ReactNode } from 'react';

export default class ErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <main className="grid h-full place-items-center p-8 text-center">
        <div>
          <h1 className="font-display text-3xl font-bold">Something went wrong.</h1>
          <button className="mt-6 min-h-11 rounded bg-osk px-5 font-semibold text-ink" onClick={() => location.reload()}>
            Reload presentation
          </button>
        </div>
      </main>
    );
  }
}
