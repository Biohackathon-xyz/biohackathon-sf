
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-biohack-primary mb-4">404</h1>
        <p className="text-2xl font-semibold text-gray-800 mb-2">Page not found</p>
        <p className="text-gray-600 mb-6">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="space-y-4">
          <Button asChild className="w-full bg-biohack-primary hover:bg-biohack-dark">
            <Link to="/">Return to Home</Link>
          </Button>
          {location.pathname.startsWith('/admin') && (
            <div className="mt-4 p-4 bg-gray-100 rounded-md text-left">
              <p className="text-sm text-gray-700 mb-2">
                <strong>Looking for the CMS?</strong>
              </p>
              <p className="text-sm text-gray-700">
                If you're trying to access the admin CMS, please navigate to:{' '}
                <a 
                  href="/admin/index.html" 
                  className="text-blue-600 hover:underline"
                >
                  /admin/index.html
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
