# 认证与密码：一套系统的讲法

SSH key、GPG key、PAT、token、认证器 app、passkey、密码保管箱——它们感觉像二十来种互不相干的技术，实际上底层只有两种密码学材料，其余全是包装、授权策略和保管方式。

这套文章的目标不是把二十个名字逐个解释一遍——那样你还是得背。目标是给你一副骨架，让你遇到任何一个没见过的名字，能自己把它放到正确的位置上。

## 在线阅读

站点：<https://wurenrumian.github.io/authnpassword/>

## 本地运行

需要 Node.js 18 以上。

```bash
npm install
npm run dev      # 开发预览 http://localhost:5173/authnpassword/
npm run build    # 产出静态站点到 docs/.vitepress/dist
npm run preview  # 预览构建结果
```

## 目录结构

```
docs/
├── .vitepress/config.mts   # 站点配置（导航、侧边栏、搜索）
├── public/                 # 静态资源（logo 等）
├── index.md                # 首页（hero + 主线概览）
└── guide/                  # 正文
    ├── index.md            # 导读：怎么读、篇目表
    ├── 00-overview.md      # 总地图
    ├── 01-materials.md     # 两种材料
    ├── 02-bearer.md        # 直接出示
    ├── 03-signature.md     # 挑战签名
    ├── 04-otp.md           # 一次性派生
    ├── 05-passkey.md       # passkey 与 WebAuthn
    ├── 06-oauth.md         # 授权与委托
    ├── 07-factors.md       # 身份代数
    ├── 08-storage.md       # 存放与生命周期
    ├── 09-server.md        # 服务端那一侧
    ├── 10-machine.md       # 机器身份
    ├── 11-cheatsheet.md    # 选型与速查
    └── 12-glossary.md      # 术语表
```

## 篇目

| 篇目 | 解决什么 |
|---|---|
| [00 总地图](docs/guide/00-overview.md) | 四十个名字一次排完，回答"到底有多少种" |
| [01 两种材料](docs/guide/01-materials.md) | 对称秘密 / 密钥对。整本书的地基 |
| [02 直接出示](docs/guide/02-bearer.md) | 密码、cookie、token、API key、PAT |
| [03 挑战签名](docs/guide/03-signature.md) | SSH、GPG、mTLS、Kerberos |
| [04 一次性派生](docs/guide/04-otp.md) | TOTP、HOTP、恢复码、推送确认 |
| [05 passkey 与 WebAuthn](docs/guide/05-passkey.md) | 为什么只有这一类真抗钓鱼 |
| [06 授权与委托](docs/guide/06-oauth.md) | OAuth 2、OIDC、JWT、scope、SAML |
| [07 身份代数](docs/guide/07-factors.md) | 第一/第二因素、"几因素"到底在数什么 |
| [08 存放与生命周期](docs/guide/08-storage.md) | 密码管理器、KMS、TPM、ssh-agent、硬件密钥 |
| [09 服务端那一侧](docs/guide/09-server.md) | 口令存储、会话、撤销、账户恢复 |
| [10 机器身份](docs/guide/10-machine.md) | 工作负载、SPIFFE、OIDC 联邦、CI 凭据 |
| [11 选型与速查](docs/guide/11-cheatsheet.md) | 按场景查表、十条规则、反模式 |
| [12 术语表](docs/guide/12-glossary.md) | 一百来个词，各一行 |

## 部署

推送到 `main` 分支时，GitHub Actions（`.github/workflows/deploy.yml`）会自动构建并发布到 GitHub Pages。仓库 Settings → Pages → Source 需要选择 **GitHub Actions**。

站点发布在子路径 `/authnpassword/` 下，对应的 `base` 已在 `docs/.vitepress/config.mts` 里配置。如果换到自定义域名或 `*.github.io` 根路径，把 `base` 改成 `'/'` 即可。

## 关于准确性的约定

涉及协议的地方会标出 RFC 或标准编号。凡是"某个实现通常怎么做"而非"规范保证"的内容，会明确写成惯例。没有标号的判断是作者意见，你可以不同意。

写这套东西时我尽量不省略前提。如果某处你觉得跳跃太大，那多半是我省掉了一步，而不是你应该已经知道——开个 issue，我补上。
