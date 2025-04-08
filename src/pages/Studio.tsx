
import React, { useEffect } from 'react';
import { config } from '@/lib/sanity';

const Studio = () => {
  useEffect(() => {
    // Direct redirect to Sanity Studio
    window.location.href = `https://${config.projectId}.sanity.studio/desk`;
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting to Sanity Studio...</h1>
        <p>If you're not redirected automatically, click the link below:</p>
        <a 
          href={`https://${config.projectId}.sanity.studio/desk`}
          className="text-blue-600 hover:underline mt-4 inline-block"
          target="_blank"
          rel="noreferrer"
        >
          Open Sanity Studio
        </a>
      </div>
    </div>
  );
};

export default Studio;
