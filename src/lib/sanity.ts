
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Your Sanity project configuration
// You'll need to replace these with your actual Sanity project details
export const config = {
  projectId: 'your-project-id', // Find this in your sanity.json or on manage.sanity.io
  dataset: 'production',
  apiVersion: '2023-05-03', // Use the latest API version
  useCdn: true, // For faster response, but won't include the latest changes immediately
};

// Create a Sanity client
export const sanityClient = createClient(config);

// Create an image URL builder
const builder = imageUrlBuilder(sanityClient);

// Helper function to get image URLs
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
