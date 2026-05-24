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
  },
  {
    id: 10,
    title: "Docker with WSL 2: Install Ubuntu & Reclaim Disk Space",
    excerpt: "Set up Docker Desktop with WSL 2 and an Ubuntu distro on Windows, then learn how to compact the VHDX and prune unused Docker resources to save significant disk space.",
    date: "2026-05-24",
    category: "DevOps",
    topics: ["Docker", "WSL", "Ubuntu", "Windows", "DevOps"],
    readTime: "8 min read"
  }
]

// Detailed blog post content
export const BLOG_POST_CONTENT = {
  10: {
    sections: [
      {
        type: 'introduction',
        title: 'Introduction',
        content: [
          'Windows Subsystem for Linux 2 (WSL 2) is a full Linux kernel built by Microsoft that lets Linux distributions run natively on Windows without managing virtual machines. When paired with Docker Desktop, it provides a fast, lightweight container runtime with dynamic resource allocation — Docker only uses the CPU and memory it actually needs.',
          'In this guide, we will walk through enabling WSL 2, installing an Ubuntu distribution, configuring Docker Desktop to use the WSL 2 backend, and — importantly — how to reclaim disk space by pruning unused Docker resources and compacting the VHDX virtual disk file.'
        ]
      },
      {
        type: 'section',
        title: 'Prerequisites',
        content: [
          'Ensure you are running Windows 10 version 2004 (Build 19041) or later, or Windows 11.',
          'You will need at least WSL version 2.1.5 installed. The latest version of WSL is always recommended to avoid known issues with Docker Desktop.',
          'Download and install <a href="https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe" target="_blank" rel="noopener noreferrer">Docker Desktop for Windows</a> from the official Docker website.'
        ]
      },
      {
        type: 'section',
        title: 'Installing WSL 2 and Ubuntu',
        subsections: [
          {
            title: '1. Enable WSL 2',
            content: 'Open PowerShell as Administrator and run the following command. This installs WSL and sets WSL 2 as the default version:',
            code: {
              language: 'powershell',
              code: 'wsl --install'
            },
            note: 'If WSL is already installed, ensure WSL 2 is set as the default version with: wsl --set-default-version 2'
          },
          {
            title: '2. Install Ubuntu',
            content: 'Install the Ubuntu distribution from the Microsoft Store or directly from the command line:',
            code: {
              language: 'powershell',
              code: 'wsl --install -d Ubuntu'
            },
            note: 'You can list all available distributions with: wsl --list --online'
          },
          {
            title: '3. Verify the Installation',
            content: 'Check that Ubuntu is running in WSL 2 mode:',
            code: {
              language: 'powershell',
              code: 'wsl -l -v'
            },
            details: [
              'You should see Ubuntu listed with VERSION 2.',
              'If it shows VERSION 1, upgrade it with: <code>wsl --set-version Ubuntu 2</code>'
            ]
          }
        ]
      },
      {
        type: 'section',
        title: 'Enabling Docker Desktop WSL 2 Backend',
        subsections: [
          {
            title: '1. Turn on WSL 2 Engine in Docker Desktop',
            content: 'After installing Docker Desktop, enable the WSL 2 backend:',
            details: [
              'Open Docker Desktop and navigate to <strong>Settings</strong>.',
              'On the <strong>General</strong> tab, check <strong>Use the WSL 2 based engine</strong>.',
              'Click <strong>Apply & Restart</strong>.'
            ],
            note: 'On systems that support WSL 2, this option is enabled by default.'
          },
          {
            title: '2. Enable Docker Integration for Ubuntu',
            content: 'Grant your Ubuntu distro access to Docker commands:',
            details: [
              'Go to <strong>Settings → Resources → WSL Integration</strong>.',
              'Toggle on the Ubuntu distribution.',
              'Click <strong>Apply & Restart</strong>.'
            ],
            note: 'After this, you can run docker commands directly from your Ubuntu WSL terminal.'
          },
          {
            title: '3. Verify from Ubuntu Terminal',
            content: 'Open your Ubuntu WSL terminal and confirm Docker is accessible:',
            code: {
              language: 'bash',
              code: 'docker --version\ndocker run hello-world'
            }
          }
        ]
      },
      {
        type: 'section',
        title: 'Saving Disk Space',
        content: [
          'Over time, Docker accumulates stopped containers, dangling images, unused volumes, and build cache that consume significant disk space. Additionally, the WSL 2 virtual disk (VHDX) grows to accommodate this data but does not automatically shrink when data is deleted.',
          'The following steps will help you reclaim that wasted space.'
        ],
        subsections: [
          {
            title: '1. Prune All Unused Docker Resources',
            content: 'Run this command from any terminal (Windows or WSL) to remove all stopped containers, unused networks, dangling images, and build cache:',
            code: {
              language: 'bash',
              code: 'docker system prune -a'
            },
            details: [
              '<code>-a</code>: Also removes images not referenced by any container, not just dangling ones.',
              'You will be prompted to confirm before anything is deleted.',
              'This command can free several gigabytes of disk space on an active development machine.'
            ],
            note: 'Warning: this removes all images that are not currently used by a running container. Pull or rebuild any images you need afterwards.'
          },
          {
            title: '2. Shut Down WSL',
            content: 'Before compacting the VHDX, you must fully shut down all WSL instances, including the Docker Desktop WSL distributions. Open PowerShell and run:',
            code: {
              language: 'powershell',
              code: 'wsl --shutdown'
            },
            note: 'This terminates all running WSL distributions and the WSL 2 virtual machine. Docker Desktop will need to be restarted afterwards.'
          },
          {
            title: '3. Compact the Docker VHDX',
            content: 'The VHDX virtual disk file used by Docker\'s WSL 2 backend does not shrink automatically. Open an <strong>Administrator PowerShell</strong> window, navigate to the Docker WSL data directory, and run the Hyper-V optimization command:',
            code: {
              language: 'powershell',
              code: 'cd C:\\Users\\$env:USERNAME\\AppData\\Local\\Docker\\wsl\\data\nOptimize-VHD -Path ext4.vhdx'
            },
            details: [
              '<code>Optimize-VHD</code> is a PowerShell cmdlet from the Hyper-V module that compacts a VHDX by reclaiming unused blocks.',
              'The <code>ext4.vhdx</code> file is the virtual disk where Docker stores all container layers, images, and volumes under the WSL 2 backend.',
              'The command requires an elevated (Administrator) PowerShell session to run.',
              'The file is typically located at <code>C:\\Users\\&lt;USERNAME&gt;\\AppData\\Local\\Docker\\wsl\\data\\ext4.vhdx</code>.'
            ],
            note: 'Run docker system prune -a and wsl --shutdown before this step, otherwise the VHDX will still be in use and the command will fail.'
          }
        ]
      },
      {
        type: 'conclusion',
        title: 'Conclusion',
        content: [
          'Using Docker Desktop with the WSL 2 backend and an Ubuntu distribution gives you a native Linux development experience on Windows with minimal overhead. Docker commands are available from both Windows terminals and the Ubuntu WSL terminal.',
          'Regularly pruning unused Docker resources with <code>docker system prune -a</code> and periodically compacting the VHDX with <code>Optimize-VHD</code> after a <code>wsl --shutdown</code> keeps your disk usage under control — especially important on machines with limited SSD space.'
        ]
      }
    ]
  },
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
