---
title: 术语表
description: 一百来个词，各一行，随时查
---

# 术语表

按主题分组，不按字母序。每组内部的词互相关联。

## 材料与密码学

**对称密钥（symmetric key）** — 加解密或验证用同一个秘密。密码、API key、TOTP 种子都是这类。

**非对称密钥对（asymmetric key pair）** — 私钥签名/解密，公钥验签/加密。私钥不出持有者。

**哈希（hash）** — 单向函数，输出定长。用于存密码时必须是**慢哈希**（bcrypt/scrypt/argon2）。

**盐（salt）** — 每个用户一段随机值，混入哈希输入，使相同密码产生不同输出。

**HMAC** — 用对称密钥做完整性校验的构造。HOTP、预签名 URL 用它。

**签名（signature）** — 用私钥对数据做的密码学证明，任何人可用公钥验证。

**ed25519 / RSA / ECDSA** — 三种签名算法。ed25519 是现代默认选择，密钥短、快、无参数陷阱。

**熵（entropy）** — 不可预测性的量度，单位是比特。6 位数字约 20 比特。

## 凭据类型

**bearer token** — 持有即身份的凭据。谁拿到谁能用，不验证"是不是本人"。

**PAT（personal access token）** — 绑定到用户账号、可限 scope 的长期 API 凭据。

**API key** — 给程序用的凭据，通常一对（id + secret）。

**access token** — 短期、带 scope 的访问凭据（OAuth 语境）。

**refresh token** — 长效凭据，用来换新的 access token。

**session ID** — 服务端有状态的会话标识，通常放在 cookie 里。

**JWT（JSON Web Token）** — 自包含的签名令牌格式。三部分：header、payload（明文）、signature。

**认证器（authenticator）** — 生成或持有凭据的东西。可以是 app、硬件密钥、芯片。

**credential ID** — WebAuthn 凭据的随机标识，服务端存它来找到对应公钥。

## 认证过程

**认证（authentication）** — 证明"你是谁"。

**授权（authorization）** — 决定"你能做什么"。

**MFA / 2FA** — 多因素/双因素认证。因素必须来自不同类别。

**因素类别** — 你知道的、你有的、你是什么。三者之一才算独立因素。

**step-up authentication** — 敏感操作时要求再一次更强的验证。

**passwordless** — 不用密码。有三种不同含义，注意区分（见第 7 篇）。

**SSO（single sign-on）** — 一次登录，多处可用。靠一个中心 IdP。

**IdP（identity provider）** — 签发身份断言的服务器。

**SP（service provider）** — 依赖 IdP 的那一方。

**断言（assertion）** — IdP 签发的"这个人是 X"的声明。SAML 里叫 assertion。

## 协议与标准

**OAuth 2.0** — 委托授权框架（RFC 6749）。**不是认证协议。**

**OIDC（OpenID Connect）** — 建在 OAuth 上的身份层，发 ID token。

**SAML 2.0** — 企业 SSO 协议，基于 XML。

**PKCE** — 公共客户端的授权码保护（RFC 7636）。

**DPoP** — 把 token 绑定到客户端密钥，防转发（RFC 9449）。

**token exchange** — 令牌换令牌（RFC 8693）。

**WebAuthn** — 浏览器里的凭据 API（W3C）。

**CTAP2** — 认证器与客户端之间的协议（FIDO 联盟）。

**FIDO2** — WebAuthn + CTAP2 的商业名称。

**passkey** — WebAuthn 可发现凭据的商业叫法。

**rp.id（relying party ID）** — WebAuthn 里的域名标识，绑定在凭据上，不可更改。

**HOTP / TOTP** — 基于计数器 / 时间的一次性密码（RFC 4226 / 6238）。

**SPIFFE** — 工作负载身份的标准化，身份形如 `spiffe://...`。

**SCIM** — 用户/组同步协议，和认证无关。

**mTLS** — 双向 TLS，客户端也出示证书。

## 概念与策略

**scope** — token 的权限范围。

**audience（aud）** — token 的目标接收方，防止被挪用。

**consent** — 用户同意授权的界面/动作。

**revocation** — 撤销一个已发出的凭据。难易程度差别很大。

**rotation** — 定期更换凭据。

**attestation** — 证明"这是某个特定硬件/软件"的密码学证据。

**anti-phishing** — 凭据绑定目标（域名），使钓鱼站无法复用。只有 passkey 一类做到。

**session fixation** — 攻击者预置 session ID 的漏洞，登录后必须换 ID。

**credential stuffing** — 用别处泄露的密码批量试登录。

**SIM swapping** — 攻击者补办你的手机号，从而接管短信验证码。

**MFA fatigue** — 反复推送确认直到用户烦了点同意。

**secret zero** — 获取其他所有秘密所依赖的那个初始秘密。

## 存放与硬件

**密码管理器** — 加密存一堆凭据，一个主密码解锁。

**钥匙串（keychain）** — 操作系统的凭据存储服务。

**ssh-agent / gpg-agent** — 常驻进程，代做签名运算。

**TPM** — 主板上的安全芯片，绑定机器，密钥不可导出。

**Secure Enclave / Strongbox** — 移动设备上的独立安全芯片。

**HSM** — 服务器用的硬件安全模块。

**KMS** — 云上的密钥管理服务，密钥不出服务。

**Vault** — 秘密分发与动态凭据系统。

**PIV** — 智能卡标准，YubiKey 支持。

**OATH** — 硬件令牌里的 HOTP/TOTP 功能，YubiKey 支持。

## 容易混的几对

| 这一对 | 差别在哪 |
|---|---|
| 认证 / 授权 | 你是谁 / 你能干什么 |
| OAuth / OIDC | 委托授权 / 在其上加身份层 |
| SSH key / GPG key | 同一种材料，不同用途，现已可互通 |
| TOTP / passkey | 共享秘密派生 / 不可导出私钥签名，后者抗钓鱼 |
| 同步 passkey / 硬件密钥 | 都可同步与不可同步，后者不可复制 |
| 密码管理器 / KMS | 给人用 / 给服务用 |
| TPM / Secure Enclave | 绑机器 / 绑个人设备 |
| 硬件密钥 / YubiKey 里的功能 | 一根设备里装了多套互不相干的机制 |
| 密码 / PIN | 单独成立 / 通常只用于本地解锁 |
| 会话延长 / 第二因素 | 降低安全要求 / 提高安全要求 |
