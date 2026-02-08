export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: 'News' | 'Events' | 'Achievements' | 'Academic' | 'Arts';
  author: string;
  date: string;
  imageUrl: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Dragon Dance Festival: Preserving Singkawang\'s Heritage',
    slug: 'dragon-dance-festival-2023',
    excerpt: 'Our students participated in the annual Dragon Dance Festival, showcasing their skills and dedication to preserving our cultural heritage.',
    content: `
      <p>The Dragon Dance Festival is one of the most anticipated events in Singkawang, and this year, SMK Mudita's troupe made us proud. Under the guidance of our dedicated instructors, the students have been practicing for months to perfect their routine.</p>
      <p>The performance was not just about the dance; it was a demonstration of teamwork, discipline, and respect for tradition. The vibrant colors of the dragon, the rhythmic beat of the drums, and the synchronized movements of our students captivated the audience.</p>
      <p>We believe that engaging in such cultural activities helps our students connect with their roots and develop a strong sense of identity. It also fosters a spirit of unity and collaboration, which are essential values at SMK Mudita.</p>
    `,
    category: 'Arts',
    author: 'Mei Ling',
    date: 'October 15, 2023',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8YtIBCisGvG8m_-MprFxgkH3kSQ9ZC7uBBzkxj6qMa3gB4XKrC_tNxixqhoer1CYD2fVIVNx1Eyqal96dd-TOm5mA6G2KylFEMErXLpOT-A4EobOZV1vroLobZgSeKjX3iq-4yj3Mkpzf_5ASEUUd6M9b92oM6wsUEWyRdswf0NzUXJropEVznK9fndbRGjOFQ4aD2W6AfRIwJDVsg22oTFKY_9HuZlRNy5p-20IertRHrhnT4dbKTmVFQ29FXg44879mI441u28T',
  },
  {
    id: '2',
    title: 'Cultural Dance Troupe Performs at City Hall',
    slug: 'cultural-dance-city-hall',
    excerpt: 'A stunning performance by our Cultural Dance Troupe at the City Hall, attended by local dignitaries.',
    content: `
      <p>Our Cultural Dance Troupe had the honor of performing at the Singkawang City Hall last weekend. The event was attended by the Mayor and other local dignitaries, making it a significant occasion for our school.</p>
      <p>The students performed a traditional dance that told the story of Singkawang's rich history. Their graceful movements and expressive faces conveyed the emotions of the story beautifully, earning them a standing ovation from the audience.</p>
      <p>This performance is a testament to the hard work and talent of our students. We are incredibly proud of them for representing SMK Mudita with such grace and professionalism.</p>
    `,
    category: 'Arts',
    author: 'Admin',
    date: 'September 20, 2023',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdsn67YzJOeUyrkDZ5tc0KWJ1tpTQJjffe2aIAmHfWkGb2_8CARA8RxsCLIf-BCuvmA0z_RJRpVZev2shfRu0e_IR3sWQ8H6_5h5bvMjTkmUpRwbGP-jIkRPa7fs9WGZUL1tohwTz4F__JaU2F5cQj-U2lMAJRHTDZd1mgypv3-ThRASoISZzBHPOSJXJu2WESF2dV0Rxak1cr24xLl-TuiRKCPKKxN7m1_eUYEQjyE6fMHSreEorb55YjXmYEOeGl6tf45TlIFCmU',
  },
  {
    id: '3',
    title: 'Robotics Club Innovation: Smart Waste Management',
    slug: 'robotics-club-smart-waste',
    excerpt: 'The Robotics Club has developed a prototype for a smart waste management system, winning the "Best Innovation Award".',
    content: `
      <p>Innovation is at the heart of SMK Mudita's academic philosophy, and our Robotics Club has once again proven their prowess. Their latest project, a "Smart Waste Management" system, has won the "Best Innovation Award" at the Young Inventors Fair.</p>
      <p>The system uses sensors to detect waste levels in bins and automatically alerts the collection team when a bin is full. This not only optimizes the waste collection process but also contributes to a cleaner and more sustainable environment.</p>
      <p>The project was developed entirely by our students, from the initial concept to the final prototype. It showcases their technical skills, problem-solving abilities, and commitment to using technology for social good.</p>
    `,
    category: 'Academic',
    author: 'Robotics Team',
    date: 'November 5, 2023',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCG0QOBu0bWOuvk7iQ3iDGQcPIbuMI67YLUCqXPxrBwipalgZ4U_tQCJYNgaGHgmZPybJRWL3MrxmYC3TAOAGxyuIHEnEPQkO09CdBnS3xORCSd7WI1DwKdjh2vrbQ6rfKCsNXujHCpLY-JLWhNcplm5HXGABrLPi3WBg1PRuMaSr9j5IuvRd9aAm1icQFIt62O8fF4szDJ2IUiBKIVkwpUUDHrwnJQA7WVKuVSaSnp0Qel60-HLmVJ66bJITdSp2U4OqfU8bgAIIb0',
  },
  {
    id: '4',
    title: 'Basketball Finals: A Thrilling Match',
    slug: 'basketball-finals-2023',
    excerpt: 'Our basketball team fought hard in the finals, demonstrating great sportsmanship and skill.',
    content: `
      <p>The atmosphere was electric at the regional Basketball Finals as our school team faced off against their rivals. It was a close match from start to finish, with both teams displaying exceptional skill and determination.</p>
      <p>Although the match ended in a narrow defeat, our players showed incredible heart and sportsmanship. They fought for every point and never gave up, embodying the true spirit of competition.</p>
      <p>We are proud of our team's performance and the way they represented SMK Mudita. This experience will undoubtedly make them stronger and more resilient for future challenges.</p>
    `,
    category: 'Events',
    author: 'Coach Budi',
    date: 'August 12, 2023',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBobPgfwjvu2lBqEk7uTclCJqTzTFyzTFtbOcsO_oCUyfopzOf0MMQmw87rO2jFxpaCE7Q_ap0ipCi2WuwUa6MBYl6q1y-5XKbf6QDtheiOJDIpJ_3w3Dd2BXC6lI9arYt7z6SsmuDfYbBs7iwejnm70D1vkvV3iLZcdUK0nUVAgoKfxCGnPHva2B1_zcLQ8E46Se9t8doh22-unSQsn5GhUZVaolzDpjtpsxycGC-PMgOXZA0G2fpZ2HRwalvYf1G91EAB-08kNb7X',
  },
  {
    id: '5',
    title: 'Scouts Camp 2023: Leadership and Survival',
    slug: 'scouts-camp-2023',
    excerpt: 'A weekend of leadership training and survival skills for our Scouts troop.',
    content: `
      <p>The annual Scouts Camp is a rite of passage for many of our students. This year's camp, held in the lush forests of West Kalimantan, focused on leadership development and survival skills.</p>
      <p>Students learned how to build shelters, navigate using a compass, and cook over an open fire. They also participated in team-building exercises that tested their communication and problem-solving skills.</p>
      <p>The camp was a transformative experience for many, helping them build confidence and resilience. We look forward to seeing how these young leaders will contribute to our school community in the future.</p>
    `,
    category: 'Events',
    author: 'Scout Leader',
    date: 'July 25, 2023',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBobPgfwjvu2lBqEk7uTclCJqTzTFyzTFtbOcsO_oCUyfopzOf0MMQmw87rO2jFxpaCE7Q_ap0ipCi2WuwUa6MBYl6q1y-5XKbf6QDtheiOJDIpJ_3w3Dd2BXC6lI9arYt7z6SsmuDfYbBs7iwejnm70D1vkvV3iLZcdUK0nUVAgoKfxCGnPHva2B1_zcLQ8E46Se9t8doh22-unSQsn5GhUZVaolzDpjtpsxycGC-PMgOXZA0G2fpZ2HRwalvYf1G91EAB-08kNb7X',
  },
  {
    id: '6',
    title: '1st Place Math Olympiad: Provincial Level',
    slug: 'math-olympiad-win-2023',
    excerpt: 'Our Grade 11 team brings home the gold from the Provincial Math Olympiad.',
    content: `
      <p>We are thrilled to announce that our Grade 11 team has won 1st Place at the Provincial Math Olympiad! This is a remarkable achievement that highlights the academic excellence of our students.</p>
      <p>The competition was fierce, with teams from top schools across the province participating. However, our students' problem-solving skills and teamwork set them apart from the rest.</p>
      <p>We would like to congratulate the team members and their teachers for their hard work and dedication. This victory is a source of great pride for the entire SMK Mudita community.</p>
    `,
    category: 'Achievements',
    author: 'Academic Dept',
    date: 'September 5, 2023',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBobPgfwjvu2lBqEk7uTclCJqTzTFyzTFtbOcsO_oCUyfopzOf0MMQmw87rO2jFxpaCE7Q_ap0ipCi2WuwUa6MBYl6q1y-5XKbf6QDtheiOJDIpJ_3w3Dd2BXC6lI9arYt7z6SsmuDfYbBs7iwejnm70D1vkvV3iLZcdUK0nUVAgoKfxCGnPHva2B1_zcLQ8E46Se9t8doh22-unSQsn5GhUZVaolzDpjtpsxycGC-PMgOXZA0G2fpZ2HRwalvYf1G91EAB-08kNb7X',
  },
  {
    id: '7',
    title: 'Annual Choir Concert',
    slug: 'annual-choir-concert',
    excerpt: 'The school choir mesmerized the audience with their harmonious voices.',
    content: `
        <p>The Annual Choir Concert was a night to remember. Our talented choir members performed a repertoire of songs ranging from traditional folk tunes to contemporary hits.</p>
        <p>The audience was captivated by the harmonies and the passion of the singers. It was a beautiful celebration of music and talent.</p>
    `,
    category: 'Arts',
    author: 'Music Dept',
    date: 'October 1, 2023',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdsn67YzJOeUyrkDZ5tc0KWJ1tpTQJjffe2aIAmHfWkGb2_8CARA8RxsCLIf-BCuvmA0z_RJRpVZev2shfRu0e_IR3sWQ8H6_5h5bvMjTkmUpRwbGP-jIkRPa7fs9WGZUL1tohwTz4F__JaU2F5cQj-U2lMAJRHTDZd1mgypv3-ThRASoISZzBHPOSJXJu2WESF2dV0Rxak1cr24xLl-TuiRKCPKKxN7m1_eUYEQjyE6fMHSreEorb55YjXmYEOeGl6tf45TlIFCmU'
  }
];

export const CATEGORIES = ['All', 'News', 'Events', 'Achievements', 'Academic', 'Arts'] as const;

export function getAllPosts() {
  return BLOG_POSTS;
}

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getRelatedPosts(currentSlug: string, category: string, limit = 3) {
    return BLOG_POSTS
        .filter(post => post.slug !== currentSlug && post.category === category)
        .slice(0, limit);
}
