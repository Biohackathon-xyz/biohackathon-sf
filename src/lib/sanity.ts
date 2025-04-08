
// This is a stub file to replace the previous Sanity client
// It provides the urlFor function that components expect, but just returns the original URL

export type SanityImageSource = string | { asset?: { _ref?: string } } | null;

export const config = {
  projectId: 'removed',
  dataset: 'removed',
  apiVersion: '2025-04-08',
  useCdn: false,
};

// Helper function to generate image URLs (simplified version)
export function urlFor(source: SanityImageSource): { url: () => string } {
  if (!source) return { url: () => '' };
  
  // If it's a string, return it directly
  if (typeof source === 'string') {
    return { url: () => source };
  }
  
  // If it has an asset with _ref, it was a Sanity image, just return empty string
  // In a real app, you'd convert this to a URL, but we're removing Sanity
  return { url: () => '' };
}
