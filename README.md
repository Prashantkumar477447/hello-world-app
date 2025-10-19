# 🚀 Deploy a Node.js App to Cloud Run with CI-CD 

This project demonstrates how to **deploy a simple Node.js application** on **Google Cloud Run** with a **fully automated CI/CD pipeline** using **Cloud Build** and **Cloud Source Repositories/Github** — all configured **using the Google Cloud Console**.

---

## 💡 Project Overview

The goal of this project is to showcase a **complete CI/CD pipeline in Google Cloud Platform** 

Whenever you push code to the repository:

* Cloud Build automatically builds a Docker image.
* The image is pushed to Artifact Registry.
* You can deploy the latest image to Cloud Run with one click.

---

## 🧱 Architecture

| Stage   | GCP Service               | Purpose                                 |
| ------- | ------------------------- | --------------------------------------- |
| Code    | Cloud Source Repositories | Store source code                       |
| Build   | Cloud Build               | Build Docker image automatically        |
| Store   | Artifact Registry         | Store built container image             |
| Deploy  | Cloud Run                 | Run containerized app serverlessly      |


---

## 🛠️ Step-by-Step Setup

### 1. Create Node.js App

Create a folder named `app` and add the following files:


---

### 2. Set Up GCP Project

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project (e.g., `cloudrun-cicd-demo`)
3. Ensure it’s set as the **active project**

---

### 3. Enable Required APIs

In **APIs & Services → Library**, enable:

* Cloud Build API
* Cloud Run Admin API
* Artifact Registry API
* Cloud Source Repositories API
* IAM API

---

### 4. Push Code to Cloud Source Repositories

1. Go to **Source Repositories → Create Repository**
2. Name it: `hello-world-app`

### 5. Create Artifact Registry

1. Go to **Artifact Registry → Create Repository**
2. Choose:

   * Name: `hello-world-repo`
   * Format: Docker
   * Region: `asia-south1` (or your preferred region)
3. Click **Create**
![WhatsApp Image 2025-10-15 at 11 39 58_4df2dde7](https://github.com/user-attachments/assets/587327d8-0ca3-4fba-aded-998ab5004a13)

---

### 6. Create Cloud Build Trigger

1. Go to **Cloud Build → Triggers → Create Trigger**
2. Source: **Cloud Source Repository**
3. Repository: `hello-world-app`
4. Event: **Push to branch**
5. Branch: `^main$`
6. Configuration type: **Dockerfile**
7. Click **Create Trigger**
![WhatsApp Image 2025-10-15 at 11 38 30_859dccb1](https://github.com/user-attachments/assets/62ef85bf-e2cb-4d66-a74a-42d825d9e907)
![WhatsApp Image 2025-10-15 at 11 39 11_fa0c99e8](https://github.com/user-attachments/assets/59f10dd2-f43a-400c-91bb-e78321f15868)


---

### 7. Run First Build

1. Go to **Cloud Build → Triggers**
2. Click **Run Trigger → Select main**
3. Wait for the build to complete.

✅ Check **Artifact Registry** to confirm image creation:

```
asia-south1-docker.pkg.dev/PROJECT_ID/hello-world-repo/hello-world:latest
```

---

### 8. Deploy to Cloud Run

1. Go to **Cloud Run → Create Service**
2. Choose existing image from Artifact Registry
3. Fill:

   * Service name: `hello-world-service`
   * Region: `asia-south1`
   * Authentication: Allow unauthenticated invocations
4. Click **Create**
![WhatsApp Image 2025-10-15 at 11 40 35_8e91043c](https://github.com/user-attachments/assets/8f78c5e5-838f-4e28-b8b3-bb0d6052b6d8)

✅ When deployment completes, open the generated **Service URL**:

```
https://hello-world-service-xyz-asia-south1.run.app
```

You should see:

> **Hello from Cloud Run! 🚀**
![WhatsApp Image 2025-10-15 at 11 41 33_24493fd4](https://github.com/user-attachments/assets/c15f432d-ca83-49b3-b0f5-7d2ac3057b00)

---

## 🎯 Result

✅ Every code push automatically triggers:

1. **Cloud Build** → Builds Docker image
2. **Artifact Registry** → Stores the image
3. **Cloud Run** → Deploy latest version (manually or automatically)

Your application is **fully serverless**, **scalable**, and **pay-per-use** — all set up via **Google Cloud Console**.

---
