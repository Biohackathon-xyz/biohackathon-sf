
import { useQuery } from '@tanstack/react-query';
import { sanityClient } from '@/lib/sanity';

// Generic hook for fetching data from Sanity
export function useSanityData<T>(query: string, params?: any) {
  return useQuery({
    queryKey: ['sanity', query, params],
    queryFn: async () => {
      return sanityClient.fetch<T>(query, params);
    },
  });
}

// Specialized hooks for specific data types
export function useCities() {
  return useSanityData<any[]>(`*[_type == "city"] | order(name asc)`);
}

export function useGlobalAwards() {
  return useSanityData<any[]>(`*[_type == "globalAward"] | order(title asc)`);
}

export function useGlobalSponsors() {
  return useSanityData<any[]>(`*[_type == "globalSponsor"] | order(name asc)`);
}

export function useGlobalPartners() {
  return useSanityData<any[]>(`*[_type == "globalPartner"] | order(name asc)`);
}
