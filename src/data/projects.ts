export type Project = {
  name: string;
  description: string;
  bullets: string[];
  technologies: string[];
  dateLabel?: string;
  featured: boolean;
  href: string;
  liveHref?: string;
  image: string;
};

const defaultHref = 'https://github.com/louiegutierrez';

export const projects: Project[] = [
  {
    name: 'Raytheon Capstone: Drone Swarm C2 (In Progress)',
    description:
      'Multi-vehicle command pipeline for operator waypoints, simulator control, and telemetry streaming to a web UI.',
    bullets: [
      'Built a pipeline to send operator waypoints to a headless swarm simulator and stream telemetry to a web UI.',
      'Orchestrated and validated swarm runs with up to 15 vehicles for arming, takeoff, and waypoint execution.',
      'Integrated MAVLink command and telemetry flows for multi-vehicle real-time state updates.',
    ],
    technologies: ['Python', 'ArduPilot SITL', 'Docker', 'MAVLink', 'Agile'],
    dateLabel: 'In Progress',
    featured: true,
    href: defaultHref,
    liveHref: '#',
    image:
      'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=900&h=600&fit=crop',
  },
  {
    name: 'PirateSearchEngine',
    description:
      'Python search engine with fast query performance and ranking improvements for large crawled datasets.',
    bullets: [
      'Built an inverted index over 10k+ pages and achieved sub-300ms query latency using TF-IDF ranking.',
      'Improved result quality with PageRank/HITS and reduced duplicate documents using SimHash.',
      'Optimized query handling and reliability for responsive search UX.',
    ],
    technologies: ['Python', 'TF-IDF', 'PageRank', 'SimHash', 'Streamlit'],
    featured: true,
    href: "https://github.com/louiegutierrez/PirateSearchEngine",
    liveHref: '#',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&h=600&fit=crop',
  },
  {
    name: 'Quadruped Robot Locomotion Simulation',
    description:
      'Physics-based quadruped locomotion simulation and reinforcement learning policy training.',
    bullets: [
      'Simulated Unitree Go2 locomotion in Isaac Lab/PhysX with randomized terrains and 12-DOF dynamics.',
      'Trained PPO locomotion policies in GPU-parallel environments for faster convergence and stability.',
    ],
    technologies: ['Python', 'NVIDIA Isaac Lab', 'PyTorch', 'PPO'],
    featured: false,
    href: "https://github.com/Elijahtab/CS-175-Project",
    liveHref: '#',
    image:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&h=600&fit=crop',
  },
  {
    name: 'The925Movies',
    description:
      'Java Servlet movie platform deployed on AWS with Dockerized services and cloud operations.',
    bullets: [
      'Deployed a Java Servlet movie platform on AWS EC2 with Tomcat and MySQL.',
      'Containerized services with Docker and operated cloud infrastructure in AWS.',
    ],
    technologies: ['Java', 'MySQL', 'AWS EC2', 'Docker', 'Tomcat'],
    featured: false,
    href: defaultHref,
    liveHref: '#',
    image:
      'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=900&h=600&fit=crop',
  },
  {
    name: "Trailblazers",
    description:
      "Web-based hiking trail discovery platform with personalized recommendations and user-generated content.",
    bullets: [
      "Built a web-based hiking trail discovery platform with personalized recommendations based on user preferences and location.",
      "Implemented user-generated content features for trail reviews, photos, and ratings.",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    featured: false,
    href: "https://github.com/mkimball1/trailblazers",
    liveHref: '#',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&h=600&fit=crop',
  }
];
