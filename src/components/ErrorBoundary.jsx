import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('Error caught by ErrorBoundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='min-h-screen flex items-center justify-center text-center p-6'>
          <div>
            <h1 className='text-3xl font-bold mb-2'>Something went wrong</h1>
            <p className='text-red-600 mb-4'>{this.state.error?.message}</p>
            <button
              onClick={() => window.location.reload()}
              className='bg-blue-600 text-white px-4 py-2 rounded'
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
