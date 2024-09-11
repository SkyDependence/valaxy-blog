---
title: 如何创建YouTube API凭证
date: 2024-08-16 21:55:27
updated: false
tags: [YouTube]
categories:
    - tech
---

# 如何创建您的 YouTube API 凭据

[原文链接](https://gist.github.com/Kurukshetran/5904e8cb2361623498481f4a9a1338aa)

创建您的 YouTube API 凭据需要完成两个主要步骤：

- 第一阶段 - 创建 Google OAuth 2.0 Web 应用程序客户端。
- 第二阶段 - 创建 YouTube 刷新令牌。

## 第一阶段 - 如何创建 Google OAuth 2.0 Web 应用程序客户端

要创建您的 YouTube API 凭据，请执行以下步骤：

1. 访问 [Google 开发者控制台](https://console.developers.google.com/project) 并使用您的 Google 凭据登录。

2. 点击“选择项目”并选择“创建项目...”。会显示一个新项目的屏幕。

3. 在“项目名称”字段中输入项目名称。
   - 选择是否希望通过点击“是”或“否”接收电子邮件更新。
   - 点击“是”以同意您使用任何服务和相关 API 时，需遵守 Google 规定的适用服务条款。

   **注意**：建议您在同意之前阅读并审查适用条款。

4. 点击“创建”。项目创建完成后，您将被重定向到新项目的仪表板。

5. 点击“菜单”按钮。开发者控制台菜单将显示。

6. 选择“API 管理器”。API 管理器屏幕将显示。

7. 点击“YouTube 数据 API”。YouTube 数据 API 概览屏幕将显示。

8. 点击“启用 API”。API 启用后，必须创建凭据才能使用。

9. 点击“前往凭据”。凭据屏幕将显示。

10. 点击“添加凭据”并从下拉菜单中选择“OAuth 2.0 客户端 ID”。OAuth 2.0 客户端 ID 屏幕将显示，但在配置同意屏幕之前无法使用。

11. 点击“配置同意屏幕”。OAuth 同意屏幕将显示。

12. 在“向用户显示的产品名称”字段中输入产品名称。这只是一个形式，因为该 OAuth 客户端仅对您可见。
    - 点击“保存”。您的 OAuth 同意屏幕已保存，您可以继续定义 OAuth 客户端 ID。凭据创建客户端 ID 屏幕将显示。

13. 选择“Web 应用程序”。
    - 在“名称”字段中为您的 Web 客户端输入名称。
    - 复制并粘贴以下 URL 到“授权的重定向 URL”字段：
      - https://developers.google.com/oauthplayground
    - 点击“创建”。您的 OAuth Web 客户端已创建并显示。

14. 复制并粘贴您的“客户端 ID”和“密钥”到文本编辑器。

    **重要提示！** 您将在 Vidible 平台的公司设置屏幕中需要使用这些凭据。

15. 在 OAuth 客户端屏幕中点击“确定”。凭据 OAuth 2.0 客户端 ID 屏幕将显示。

## 第二阶段 - 创建 YouTube 刷新令牌

要创建 YouTube 刷新令牌，请执行以下步骤：

1. 访问 [Google OAuth Playground](https://developers.google.com/oauthplayground/) 并使用您的 Google 凭据登录。

2. 点击“配置”菜单。将显示配置下拉菜单。
    - 选中“使用您自己的 OAuth 凭据”复选框。将显示 OAuth 凭据字段。
    - 在“OAuth 客户端 ID”字段中输入您在第一阶段创建的 OAuth 客户端 ID。
    - 在“OAuth 客户端密钥”字段中输入您在第一阶段创建的 OAuth 客户端密钥。
    - 点击“关闭”以保存您的设置。

3. 在“选择并授权 API”窗格中，向下滚动并点击“YouTube 数据 API v3”。下拉菜单将显示所有 YouTube 数据 API。
    - 点击每个 API 方法选择所有 YouTube 数据 API。每个 API 方法对应一个选中标记。
    - 点击“授权 API”。请求/响应将显示在屏幕右侧的窗格中。

4. 如果您尚未登录，请选择您的 Google 账户。

5. 点击“允许”以授予您的 Web 应用程序客户端访问所选 API 的权限。

6. 点击“交换授权代码以获取令牌”。请求/响应窗格将更新，并显示一个包含访问令牌的身份验证 JSON 对象。

7. 复制显示在双引号之间的刷新令牌。
    - 这是您需要在 Vidible 平台的公司设置屏幕中输入的 API 令牌。
    - 此外，您还需要之前获取的客户端 ID 和客户端密钥。
