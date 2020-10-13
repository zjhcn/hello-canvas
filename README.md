# hello-canvas

#### 介绍

**Web前端开发精品课——HTML5 Canvas开发详解**一书的代码实践


#### 软件架构
根据章节划分文件夹

```
├─src                      # 主要代码
│  │                         # c{number} 是按章节划分的目录
│  ├─c2                      # 直线图形
│  ├─c3                      # 曲线图形
│  ├─c4                      # 线条操作
│  │ ├─4-2                     # lineWidth 定义线条的宽度
│  │ ├─4-3                     # lineCap   定义线条开始处和结尾处的线帽样式
│  │ └─4-4                     # lineJoin  定义两个线条交接处的样式
│  │ 
│  ├─c5                      # 文本操作
│  ├─c6                      # 图片操作
│  │ ├─6-2                     # 绘制操作
│  │ ├─6-3                     # 平铺操作
│  │ └─6-4                     # 切割操作
│  │ 
│  ├─c7                      # 变形操作
│  │ ├─7-2                     # 平移操作
│  │ ├─7-3                     # 缩放操作
│  │ ├─7-4                     # 旋转操作
│  │ ├─7-5                     # 变换矩阵
│  │ ├─7-6                     # 变形操作 图形和图片
│  │ ├─7-7                     # 使用变形绘制多彩的图形
│  │ 
│  ├─utils                   # 公共函数
│  ├─css                     # 公共样式
│  ├─css                     # 公共样式
│  │ 
│  ├─template.html           # html模版
│  ├─template.ts             # js模版
│  └─out                     # ts编译输出文件夹
│
└─@types                     # 全局ts接口、类型定义
```


#### 安装教程

1.  npm i

#### 使用说明

1.  npm run watch
  - 编译ts文件

2.  npm start
  - 运行服务,在浏览器访问

#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request
