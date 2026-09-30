import React from 'react';
import './index.css';

const links = [
  {
    name: '官网主页',
    url: 'https://example.com',
    description: '官方网站主页链接'
  },
  {
    name: '用户中心',
    url: 'https://user.example.com',
    description: '用户登录和管理中心'
  },
  {
    name: '帮助文档',
    url: 'https://docs.example.com',
    description: '产品使用说明和帮助文档'
  },
  {
    name: '社区论坛',
    url: 'https://forum.example.com',
    description: '用户交流讨论社区'
  }
];

function App() {
  return (
    <div className="container">
      <header>
        <h1>网址发布页</h1>
        <p>以下是可用的服务链接</p>
      </header>

      <main>
        <div className="link-list">
          {links.map((link, index) => (
            <div key={index} className="link-item">
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="link-title">
                {link.name}
              </a>
              <p className="link-description">{link.description}</p>
              <code className="link-url">{link.url}</code>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <p>&copy; 2024 网址发布页</p>
      </footer>
    </div>
  );
}

export default App;
