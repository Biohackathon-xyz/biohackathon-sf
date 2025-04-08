
import { useQuery } from '@tanstack/react-query';
import matter from 'gray-matter';
import { marked } from 'marked';

// Function to fetch and process markdown content
async function fetchMarkdownContent(filePath: string) {
  try {
    const response = await fetch(`/content/${filePath}.md`);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${filePath}.md: ${response.status}`);
    }
    const text = await response.text();
    
    // Parse frontmatter and content
    const { content, data } = matter(text);
    
    // Convert markdown to HTML
    const html = marked(content);
    
    return {
      html,
      frontmatter: data,
    };
  } catch (error) {
    console.error(`Error loading markdown for ${filePath}:`, error);
    return null;
  }
}

// Function to list available schedule days
async function fetchAvailableScheduleDays() {
  const days = [];
  const maxDays = 7; // Try up to 7 days
  
  for (let i = 1; i <= maxDays; i++) {
    try {
      const dayPath = `schedule/day${i}`;
      const response = await fetch(`/content/${dayPath}.md`);
      
      if (response.ok) {
        const text = await response.text();
        const { content, data } = matter(text);
        
        // Process the schedule data
        const scheduleItems = content
          .split('\n')
          .filter(line => line.trim().startsWith('|') && !line.trim().startsWith('| Time'))
          .filter(line => !line.trim().startsWith('|---'))
          .map(line => {
            const parts = line.split('|').filter(part => part.trim());
            if (parts.length >= 3) {
              return {
                time: parts[0].trim(),
                event: parts[1].trim(),
                description: parts[2].trim()
              };
            }
            return null;
          })
          .filter(item => item !== null);
        
        days.push({
          id: `day${i}`,
          title: data.title || `Day ${i} Schedule`,
          subtitle: data.subtitle || `Day ${i}`,
          content: scheduleItems
        });
      }
    } catch (error) {
      console.error(`Error checking for day${i}:`, error);
    }
  }
  
  return days;
}

// Custom hook to fetch markdown content
export function useLocalContent(contentKey: string) {
  return useQuery({
    queryKey: ['markdown', contentKey],
    queryFn: async () => {
      const result = await fetchMarkdownContent(contentKey);
      return result?.html || null;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

// Hook specifically for schedule days
export function useScheduleDays() {
  return useQuery({
    queryKey: ['schedule-days'],
    queryFn: fetchAvailableScheduleDays,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}
