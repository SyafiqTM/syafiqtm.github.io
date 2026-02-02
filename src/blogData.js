// Centralized blog post data
export const BLOG_POSTS = [
  {
    id: 1,
    title: "Building a React Dashboard with Hooks",
    excerpt: "Learn how to create a dynamic dashboard using React hooks and modern patterns.",
    date: "2024-01-15",
    category: "React",
    topics: ["React", "Hooks", "Frontend"],
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Infrastructure as Code with Terraform",
    excerpt: "A comprehensive guide to managing cloud infrastructure using Terraform best practices.",
    date: "2024-01-10",
    category: "DevOps",
    topics: ["Terraform", "Infrastructure", "DevOps"],
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Google Cloud Platform: Getting Started",
    excerpt: "Everything you need to know to start deploying applications on GCP.",
    date: "2024-01-05",
    category: "Cloud",
    topics: ["Google Cloud", "Cloud", "Deployment"],
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Advanced React Patterns",
    excerpt: "Exploring compound components, render props, and custom hooks patterns.",
    date: "2023-12-20",
    category: "React",
    topics: ["React", "Design Patterns", "Frontend"],
    readTime: "10 min read"
  },
  {
    id: 5,
    title: "Terraform Modules: Best Practices",
    excerpt: "How to structure and organize your Terraform code for maximum reusability.",
    date: "2023-12-15",
    category: "DevOps",
    topics: ["Terraform", "Infrastructure", "Best Practices"],
    readTime: "7 min read"
  },
  {
    id: 6,
    title: "GCP Cloud Functions Deep Dive",
    excerpt: "Understanding serverless architecture with Google Cloud Functions.",
    date: "2023-12-10",
    category: "Cloud",
    topics: ["Google Cloud", "Serverless", "Cloud Functions"],
    readTime: "9 min read"
  },
  {
    id: 7,
    title: "React Server Components Explained",
    excerpt: "A detailed look at React Server Components and their benefits.",
    date: "2023-12-01",
    category: "React",
    topics: ["React", "Server Components", "Next.js"],
    readTime: "12 min read"
  },
  {
    id: 8,
    title: "Multi-Cloud Strategy with Terraform",
    excerpt: "Managing resources across AWS, Azure, and GCP with a unified approach.",
    date: "2023-11-25",
    category: "DevOps",
    topics: ["Terraform", "Multi-Cloud", "AWS", "Azure", "Google Cloud"],
    readTime: "15 min read"
  },
  {
    id: 9,
    title: "Installing Redis with Docker",
    excerpt: "A step-by-step guide to installing and running Redis using Docker containers with best practices for data persistence and security.",
    date: "2026-02-02",
    category: "DevOps",
    topics: ["Docker", "Redis", "DevOps", "Containers", "Database"],
    readTime: "10 min read"
  }
]

// Detailed blog post content
export const BLOG_POST_CONTENT = {
  9: {
    sections: [
      {
        type: 'introduction',
        title: 'Introduction',
        content: [
          'To install Redis using Docker, you need to pull the official Redis image from Docker Hub and run it in a container. This process is straightforward and typically involves a few simple commands in your terminal or command prompt.',
          'Redis is an open-source, in-memory data structure store that can be used as a database, cache, and message broker. Using Docker to run Redis provides isolation, portability, and ease of deployment across different environments.'
        ]
      },
      {
        type: 'section',
        title: 'Prerequisites',
        content: [
          'Ensure you have Docker installed on your system. You can download Docker Desktop for Windows, macOS, or Linux from the official Docker website.',
          'To verify Docker is installed, run <code>docker --version</code> in your terminal. You should see the Docker version information displayed.'
        ]
      },
      {
        type: 'section',
        title: 'Step-by-Step Installation',
        subsections: [
          {
            title: '1. Pull the Redis Image',
            content: 'Open your terminal and run the following command to download the official Redis image:',
            code: {
              language: 'bash',
              code: 'docker pull redis:latest'
            },
            note: 'This command fetches the latest stable Redis image from the Docker Hub registry.'
          },
          {
            title: '2. Run the Redis Container',
            content: 'Start a Redis container in the background (detached mode) with the following command:',
            code: {
              language: 'bash',
              code: 'docker run -d --name my-redis -p 6379:6379 redis:latest'
            },
            details: [
              '<code>-d</code>: Runs the container in detached mode.',
              '<code>--name my-redis</code>: Assigns the name "my-redis" to your container for easy reference.',
              '<code>-p 6379:6379</code>: Maps the container\'s default Redis port (6379) to port 6379 on your host machine, allowing you to connect from your local environment.',
              '<code>redis:latest</code>: Specifies the image to use.'
            ],
            note: 'For added security and to ensure your data persists even if the container is removed, it\'s highly recommended to use a strong password and set up a volume for data persistence (see below).'
          },
          {
            title: '3. Verify the Installation',
            content: 'To check if your Redis container is running correctly, use the docker ps command:',
            code: {
              language: 'bash',
              code: 'docker ps'
            },
            note: 'You should see the my-redis container listed with a "Status" of "Up".'
          },
          {
            title: '4. Connect to Redis',
            content: 'You can interact with your Redis instance using the command-line interface (CLI) from within the container:',
            code: {
              language: 'bash',
              code: 'docker exec -it my-redis redis-cli'
            },
            details: [
              'Inside the Redis CLI, you can test the connection:'
            ],
            additionalCode: {
              language: 'redis',
              code: `127.0.0.1:6379> PING
PONG
127.0.0.1:6379> SET mykey "Hello, Docker Redis!"
OK
127.0.0.1:6379> GET mykey
"Hello, Docker Redis!"`
            },
            note: 'Type exit or press Ctrl+C to leave the Redis CLI.'
          }
        ]
      },
      {
        type: 'section',
        title: 'Advanced: Data Persistence and Security',
        subsections: [
          {
            title: 'Data Persistence',
            content: 'To prevent data loss on container stops or removals, use a Docker volume to persist data on your host machine:',
            code: {
              language: 'bash',
              code: 'docker run -d --name my-redis-persistent -p 6379:6379 -v redis_data:/data redis:latest redis-server --appendonly yes'
            },
            note: 'This command mounts a named volume redis_data to the /data directory inside the container, where Redis stores its data files, and enables append-only file (AOF) persistence.'
          },
          {
            title: 'Security with Password',
            content: 'To run Redis with a password for better security:',
            code: {
              language: 'bash',
              code: 'docker run -d --name my-redis-secured -p 6379:6379 redis:latest redis-server --requirepass your_strong_redis_password'
            },
            note: 'When connecting to a password-protected instance, you will need to authenticate using the AUTH command within the redis-cli.'
          }
        ]
      },
      {
        type: 'conclusion',
        title: 'Conclusion',
        content: [
          'Installing Redis using Docker is a straightforward process that provides flexibility and ease of deployment. By following these steps, you can quickly set up a Redis instance for development or testing purposes.',
          'Remember to implement proper security measures such as password protection and consider data persistence strategies for production environments. Docker makes it easy to manage these configurations and scale your Redis deployments as needed.'
        ]
      }
    ]
  }
}
