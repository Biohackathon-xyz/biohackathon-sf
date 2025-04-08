
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Sanity project configuration
export const config = {
  projectId: 'jze2b0zl',
  dataset: 'production',
  apiVersion: '2024-04-08', // Today's date
  useCdn: true,
};

// Create a Sanity client
export const sanityClient = createClient(config);

// Set up the image URL builder
const builder = imageUrlBuilder(sanityClient);

// Helper function to generate image URLs
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
