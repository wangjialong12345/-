# 🎠 3D旋转木马照片展示

一个美丽的3D旋转木马照片展示网站，支持触摸滑动和响应式设计。

## ✨ 功能特点

- 🎠 **3D旋转木马效果** - 炫酷的3D视觉效果
- 📱 **响应式设计** - 完美适配各种设备
- 👆 **触摸支持** - 支持滑动手势操作
- 🖼️ **瀑布流网格** - 可切换到网格视图模式
- ⚡ **自动播放** - 可控制的自动旋转功能
- ⌨️ **键盘控制** - 支持方向键等快捷键操作

## 🚀 部署到 Netlify

### 方法一：通过 Git 仓库部署（推荐）

1. 将项目推送到 GitHub/GitLab 等 Git 仓库
2. 登录 [Netlify](https://netlify.com)
3. 点击 "New site from Git"
4. 选择你的 Git 仓库
5. 构建设置会自动从 `netlify.toml` 读取：
   - Build command: `npm run build`
   - Publish directory: `build`
6. 点击 "Deploy site"

### 方法二：手动部署

1. 运行构建命令：
   ```bash
   npm run build
   ```

2. 将 `build` 文件夹拖拽到 Netlify 的部署区域

## 🛠️ 本地开发

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

然后在浏览器中访问 `http://localhost:8000`

### 构建项目
```bash
npm run build
```

## 📁 项目结构

```
├── index.html          # 主页面文件
├── images/             # 照片文件夹
│   ├── 1.jpg
│   ├── 2.jpg
│   └── ...
├── package.json        # 项目配置
├── netlify.toml        # Netlify 部署配置
├── build.js           # 构建脚本
└── README.md          # 项目说明
```

## 🎮 使用说明

### 键盘快捷键
- `←/→` 方向键：切换照片
- `空格键`：暂停/开始自动旋转
- `Home`：跳转到第一张照片
- `End`：跳转到最后一张照片
- `1`：切换到3D旋转木马模式
- `2`：切换到瀑布流网格模式

### 触摸操作
- 左右滑动：切换照片
- 点击照片：聚焦当前照片
- 点击指示器：跳转到指定照片

## 🔧 自定义配置

### 更换照片
1. 将你的照片放入 `images` 文件夹
2. 按照 `1.jpg`, `2.jpg`, `3.jpg` 的格式命名
3. 在 `index.html` 中修改 `totalSlides` 变量为你的照片数量

### 调整旋转速度
在 `index.html` 中找到 `rotationSpeed` 变量，修改数值（单位：毫秒）

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！
