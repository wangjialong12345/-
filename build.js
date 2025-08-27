#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 简单的构建脚本，用于复制文件到 build 目录
console.log('🚀 开始构建 3D 旋转木马照片展示项目...');

// 创建 build 目录
const buildDir = path.join(__dirname, 'build');
if (!fs.existsSync(buildDir)) {
    fs.mkdirSync(buildDir, { recursive: true });
    console.log('✅ 创建 build 目录');
}

// 复制 index.html
try {
    fs.copyFileSync(
        path.join(__dirname, 'index.html'),
        path.join(buildDir, 'index.html')
    );
    console.log('✅ 复制 index.html');
} catch (error) {
    console.error('❌ 复制 index.html 失败:', error.message);
    process.exit(1);
}

// 复制 images 目录
const imagesDir = path.join(__dirname, 'images');
const buildImagesDir = path.join(buildDir, 'images');

try {
    if (fs.existsSync(imagesDir)) {
        // 创建 build/images 目录
        if (!fs.existsSync(buildImagesDir)) {
            fs.mkdirSync(buildImagesDir, { recursive: true });
        }
        
        // 复制所有图片文件
        const imageFiles = fs.readdirSync(imagesDir);
        imageFiles.forEach(file => {
            if (file.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
                fs.copyFileSync(
                    path.join(imagesDir, file),
                    path.join(buildImagesDir, file)
                );
            }
        });
        console.log(`✅ 复制 ${imageFiles.length} 个图片文件`);
    } else {
        console.log('⚠️  images 目录不存在，跳过图片复制');
    }
} catch (error) {
    console.error('❌ 复制图片文件失败:', error.message);
    process.exit(1);
}

console.log('🎉 构建完成！项目已准备好部署到 Netlify');
console.log('📁 构建输出目录: ./build');
