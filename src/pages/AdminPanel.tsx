
import React from 'react';
import { Button } from '@/components/ui/button';
import { config } from '@/lib/sanity';
import { Link } from 'react-router-dom';

const AdminPanel: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Biohackathon CMS</h1>
        <p className="text-gray-600 mb-2">
          This site uses Sanity Studio to manage content.
        </p>
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
          <p className="text-yellow-700">
            <strong>Note:</strong> The older Decap CMS files in the /admin directory are deprecated and should not be used.
          </p>
        </div>
      </header>

      <div className="space-y-6">
        <div className="p-6 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Option 1: Access Sanity Studio (Recommended)</h2>
          <p className="mb-4">Access Sanity Studio directly using your project ID:</p>
          <Button
            size="lg"
            className="bg-black hover:bg-gray-800 text-white"
            onClick={() => window.open(`https://${config.projectId}.sanity.studio/`, '_blank')}
          >
            Open Sanity Studio
          </Button>
          <p className="mt-4 text-sm text-gray-600">
            This will take you directly to your project's Sanity Studio interface.
          </p>
        </div>

        <div className="p-6 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Option 2: Access Sanity Dashboard</h2>
          <p className="mb-4">Access your Sanity project from the Sanity dashboard:</p>
          <Button
            size="lg"
            className="bg-black hover:bg-gray-800 text-white"
            onClick={() => window.open(`https://www.sanity.io/manage/project/${config.projectId}`, '_blank')}
          >
            Open Sanity Dashboard
          </Button>
          <p className="mt-4 text-sm text-gray-600">
            From the dashboard, you can click on "Content Studio" to access the editing interface.
          </p>
        </div>

        <div className="p-6 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Option 3: Set Up Sanity Studio Locally</h2>
          <p className="mb-4">Follow these steps to set up Sanity Studio on your local machine:</p>
          <ol className="list-decimal pl-5 space-y-3">
            <li>Install Sanity CLI: <code className="bg-gray-200 px-2 py-1 rounded">npm install -g @sanity/cli</code></li>
            <li>Initialize a new Sanity project: <code className="bg-gray-200 px-2 py-1 rounded">sanity init --project {config.projectId} --dataset {config.dataset}</code></li>
            <li>Navigate to the created directory: <code className="bg-gray-200 px-2 py-1 rounded">cd [your-project-name]</code></li>
            <li>Start Sanity Studio: <code className="bg-gray-200 px-2 py-1 rounded">sanity start</code></li>
            <li>Access the local studio at <code className="bg-gray-200 px-2 py-1 rounded">http://localhost:3333</code></li>
          </ol>
        </div>

        <div className="p-6 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Getting Started with Sanity</h2>
          <ol className="list-decimal pl-5 space-y-3">
            <li>Create schemas for your content types (cities, awards, sponsors, partners)</li>
            <li>Add and manage content through the Sanity Studio interface</li>
            <li>Your content will automatically appear on the website once published</li>
          </ol>
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Need help?</h3>
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
                  href="https://www.sanity.io/docs/create-a-schema-and-configure-it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Creating Schemas
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-gray-200">
        <Link to="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default AdminPanel;
