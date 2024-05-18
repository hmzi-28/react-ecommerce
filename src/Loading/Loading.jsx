import React from 'react';

const LoadingAndErrorComponent = ({ status, error }) => {
  if (status === 'loading') return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return null; // Return null if there's nothing to show (no loading or error)
};

export default LoadingAndErrorComponent;
