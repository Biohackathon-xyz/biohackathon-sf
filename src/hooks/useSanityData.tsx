
import { useQuery } from '@tanstack/react-query';

// Mock data for cities
const mockCities = [
  {
    name: "San Francisco",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    subdomain: "sf",
    date: "June 13 - 22, 2025"
  },
  {
    name: "London",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
    subdomain: "london",
    date: "July 5 - 6, 2025"
  },
  {
    name: "Boston",
    image: "https://images.unsplash.com/photo-1501979376754-2ff867a4f659",
    subdomain: "boston",
    date: "June 2025"
  },
  {
    name: "Prague",
    image: "https://images.unsplash.com/photo-1592906209472-a36b1f3782ef",
    subdomain: "prague",
    date: "June 2025"
  },
  {
    name: "Timișoara",
    image: "https://images.unsplash.com/photo-1566209259189-5fe63e28693f?q=80&w=2697&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subdomain: "timisoara",
    date: "June 2025"
  },
  {
    name: "Gdynia",
    image: "https://images.unsplash.com/photo-1577091144216-0782c3a71b8d?q=80&w=3552&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subdomain: "gdynia",
    date: "June 2025"
  }
];

// Mock data for global awards
const mockAwards = [
  {
    title: "Grand Challenge Award",
    prize: "$10,000",
    description: "For the most innovative solution with global impact potential"
  },
  {
    title: "Open Science Champion",
    prize: "$5,000",
    description: "For exemplary open collaboration and documentation"
  },
  {
    title: "DIY Biohacking Excellence",
    prize: "$3,000",
    description: "For creativity in accessible biohacking approaches"
  }
];

// Mock data for global sponsors
const mockSponsors = [
  {
    name: "TechBio Ventures",
    logo: "https://placehold.co/200x80?text=TechBio+Ventures",
    url: "#"
  },
  {
    name: "OpenScience Foundation",
    logo: "https://placehold.co/200x80?text=OpenScience+Foundation",
    url: "#"
  },
  {
    name: "BioInnovate Labs",
    logo: "https://placehold.co/200x80?text=BioInnovate+Labs",
    url: "#"
  },
  {
    name: "Genomica Inc.",
    logo: "https://placehold.co/200x80?text=Genomica+Inc.",
    url: "#"
  }
];

// Mock data for global partners
const mockPartners = [
  {
    name: "DIY Bio Association",
    logo: "https://placehold.co/180x60?text=DIY+Bio+Association",
    url: "#"
  },
  {
    name: "Academic Alliance",
    logo: "https://placehold.co/180x60?text=Academic+Alliance",
    url: "#"
  },
  {
    name: "BioMakers Network",
    logo: "https://placehold.co/180x60?text=BioMakers+Network",
    url: "#"
  },
  {
    name: "Global Science Forum",
    logo: "https://placehold.co/180x60?text=Global+Science+Forum",
    url: "#"
  },
  {
    name: "STEM Education Coalition",
    logo: "https://placehold.co/180x60?text=STEM+Education+Coalition",
    url: "#"
  },
  {
    name: "OpenLab Initiative",
    logo: "https://placehold.co/180x60?text=OpenLab+Initiative",
    url: "#"
  }
];

// Generic hook for fetching mock data
export function useSanityData<T>(query: string, params?: Record<string, any>) {
  return useQuery({
    queryKey: ['mock', query, params],
    queryFn: async () => {
      // This is just a mock function that returns data based on the query
      console.log('Mock query:', query);
      return [] as T;
    },
  });
}

// Specialized hooks for specific data types using mock data
export function useCities() {
  return useQuery({
    queryKey: ['cities'],
    queryFn: async () => {
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 500));
      return mockCities;
    },
  });
}

export function useGlobalAwards() {
  return useQuery({
    queryKey: ['globalAwards'],
    queryFn: async () => {
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 500));
      return mockAwards;
    },
  });
}

export function useGlobalSponsors() {
  return useQuery({
    queryKey: ['globalSponsors'],
    queryFn: async () => {
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 500));
      return mockSponsors;
    },
  });
}

export function useGlobalPartners() {
  return useQuery({
    queryKey: ['globalPartners'],
    queryFn: async () => {
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 500));
      return mockPartners;
    },
  });
}
