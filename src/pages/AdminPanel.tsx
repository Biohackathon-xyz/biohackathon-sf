
import React from 'react';
import { Button } from '@/components/ui/button';

const AdminPanel: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-smythe mb-4">Biohackathon CMS</h1>
        <p className="text-gray-600">
          Please use the Sanity Studio to manage your content. The link below will open Sanity Studio in a new tab.
        </p>
      </header>

      <div className="mb-8">
        <Button
          size="lg"
          className="bg-black hover:bg-gray-800 text-white"
          onClick={() => window.open('https://your-project-id.sanity.studio/', '_blank')}
        >
          Open Sanity Studio
        </Button>
      </div>

      <div className="p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
        <ol className="list-decimal pl-5 space-y-3">
          <li>
            If you haven't yet created your Sanity project, visit{' '}
            <a
              href="https://www.sanity.io/get-started"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Sanity's Get Started page
            </a>
          </li>
          <li>
            Follow the instructions to create a new project and set up your Sanity Studio.
          </li>
          <li>After setup, replace "your-project-id" in the src/lib/sanity.ts file with your actual Sanity project ID.</li>
          <li>Customize your schema in the Sanity Studio to match the data structure needed for this website.</li>
          <li>You'll need to create schemas for cities, global awards, sponsors, and partners.</li>
        </ol>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-3">Need help?</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <a
              href="https://www.sanity.io/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Sanity Documentation
            </a>
          </li>
          <li>
            <a
              href="https://www.sanity.io/exchange"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Sanity Plugin Marketplace
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminPanel;
