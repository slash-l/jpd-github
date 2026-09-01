export async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }
  return response.json();
}

export function processData(data) {
  if (!Array.isArray(data)) {
    return [];
  }

  return data.slice(0, 5).map((item) => ({
    id: item.id,
    name: item.name || item.title || item.username || 'unknown'
  }));
}

export class DemoProject {
  constructor(config = {}) {
    this.config = {
      apiUrl: 'https://jsonplaceholder.typicode.com',
      ...config
    };
    this.version = '1.0.0';
  }

  async getUsers() {
    try {
      const url = `${this.config.apiUrl}/users`;
      const data = await fetchData(url);
      return processData(data);
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }

  displayInfo() {
    const info = {
      project: 'npm-demo-project',
      version: this.version,
      currentTime: new Date().toISOString(),
      features: [
        'External dependency management',
        'Tar.gz packaging',
        'ES6+ support'
      ]
    };
    
    console.log('=== Project Information ===');
    Object.entries(info).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        console.log(`${key}:`);
        value.forEach(item => console.log(`  - ${item}`));
      } else {
        console.log(`${key}: ${value}`);
      }
    });
    console.log('===========================');

    return info;
  }
}

// 默认导出
export default DemoProject;

// 示例使用
if (process.argv[1] && import.meta.url === `file://${process.argv[1]}`) {
  const demo = new DemoProject();
  demo.displayInfo();

  demo.getUsers()
    .then((users) => {
      console.log(`Fetched ${users.length} users`);
    })
    .catch(console.error);
}