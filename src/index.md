---
layout: docs
title: JinyDev - Laravel과 JinyPHP 개발 학습 플랫폼
description: Laravel 12와 JinyPHP를 활용한 현대적인 웹 개발을 체계적으로 학습할 수 있는 한국어 교육 플랫폼입니다. 초보자부터 실전 배포까지 단계별 가이드를 제공합니다.
keywords: Laravel, JinyPHP, PHP 8.4, 웹개발, 백엔드, 프레임워크, 튜토리얼, 한국어, 개발자교육, Livewire, MySQL, 서버배포
author: JinyPHP Team
permalink: /
lang: ko
date: 2024-11-18
categories: [Laravel, JinyPHP, 웹개발, 교육]
tags: [Laravel12, PHP8.4, JinyPHP, 웹개발, 백엔드, 프레임워크, 튜토리얼]

# SEO and Social Media
canonical_url: "https://jinyphp.github.io/jinyphp_study_01/"
robots: "index, follow"

# Open Graph
og:
  title: "JinyDev - Laravel과 JinyPHP 개발 학습 플랫폼"
  description: "Laravel 12와 JinyPHP를 활용한 현대적인 웹 개발을 체계적으로 학습할 수 있는 한국어 교육 플랫폼입니다."
  type: "website"
  url: "https://jinyphp.github.io/jinyphp_study_01/"
  image: "/assets/images/jinyphp-og-image.jpg"
  image:alt: "JinyDev Laravel JinyPHP 개발 학습 플랫폼"
  locale: "ko_KR"
  site_name: "JinyDev"

# Twitter Card
twitter:
  card: "summary_large_image"
  site: "@jinyphp"
  creator: "@jinyphp"
  title: "JinyDev - Laravel과 JinyPHP 개발 학습 플랫폼"
  description: "Laravel 12와 JinyPHP를 활용한 현대적인 웹 개발을 체계적으로 학습할 수 있는 한국어 교육 플랫폼입니다."
  image: "/assets/images/jinyphp-twitter-card.jpg"

# Structured Data
schema:
  type: "WebSite"
  name: "JinyDev"
  description: "Laravel과 JinyPHP 개발 학습을 위한 교육 플랫폼"
  url: "https://jinyphp.github.io/jinyphp_study_01/"
  author:
    type: "Organization"
    name: "JinyPHP Team"
  inLanguage: "ko-KR"
  about: "Laravel, JinyPHP, PHP 웹 개발 교육"
---

## 📚 문서 목록

### 🚀 시작하기

#### 01. 라라벨 시작하기
📖 **[Laravel 시작하기 가이드](./01.Start/index.md)**
- **[01. 라라벨이란?](./01.Start/01.what-is-laravel.md)** - 프레임워크 소개와 특징
- **[02. PHP 언어](./01.Start/02.php-language.md)** - PHP 8.4의 현대적 기능들
- **[03. 의존성 문제](./01.Start/03.dependency-issues.md)** - Composer와 패키지 관리
- **[04. 프레임워크](./01.Start/04.framework.md)** - MVC 패턴과 Laravel 구조

#### 02. 개발환경 구축하기
📖 **[Laravel 개발 환경 설정 가이드](./02.Setup/index.md)**
- **[01. 사전 요구사항](./02.Setup/01.requirements.md)** - PHP, Composer, Node.js 설치
- **[02. Laravel 프로젝트 설치](./02.Setup/02.laravel-install.md)** - 프로젝트 생성 및 기본 설정
- **[03. 데이터베이스 설정](./02.Setup/03.database.md)** - SQLite/PostgreSQL/MySQL 선택 및 연결
- **[04. GitHub 배포 준비](./02.Setup/04.github-deploy.md)** - Git 저장소 및 배포 설정

#### 03. JinyPHP 패키지 설치
📖 **[JinyPHP 패키지 설치 및 설정 가이드](./02.jinyphp.md)**
- JinyPHP 핵심 패키지 설치 (Auth, Admin, Site)
- 패키지 설정 및 초기화
- 개발 환경 구성
- 컴포넌트 생성 및 사용법

#### 04. 서버 배포하기
📖 **[Laravel 서버 배포 가이드](./03.deploy/index.md)**
- **[01. 클라우드 준비](./03.deploy/01.cloud-setup.md)** - Vultr 인스턴스 생성 및 초기 설정
- **[02. 서버 환경 설정](./03.deploy/02.server-setup.md)** - PHP 8.4, MySQL 8.4, Redis, Nginx 설치
- **[03. Laravel 배포](./03.deploy/03.laravel-deploy.md)** - 프로젝트 클론 및 환경 설정
- **[04. 도메인 HTTPS 설정](./03.deploy/04.domain-https.md)** - DNS, 가상 호스트, SSL 인증서
- **[05. 성능 최적화](./03.deploy/05.optimization.md)** - 1GB RAM 최적화 및 모니터링

---

## 🔄 개발 워크플로우

### 단계별 진행 순서

1. **Laravel 기초 학습** → [`01.Start/index.md`](./01.Start/index.md)
   - Laravel과 PHP 이해하기
   - 프레임워크 개념 학습
   - 의존성 관리 이해

2. **환경 구축** → [`02.Setup/index.md`](./02.Setup/index.md)
   - Laravel 개발 환경 설정
   - 로컬 데이터베이스 구성
   - GitHub 배포 준비

3. **JinyPHP 설치** → [`02.jinyphp.md`](./02.jinyphp.md)
   - JinyPHP 패키지 설치
   - 관리자 패널 설정
   - 인증 시스템 구성

4. **개발 및 테스트**
   - Livewire 컴포넌트 개발
   - JinyPHP 기능 활용
   - 로컬 테스트 진행

5. **서버 배포** → [`03.deploy/index.md`](./03.deploy/index.md)
   - 클라우드 서버 설정
   - 프로덕션 환경 구성
   - HTTPS 적용 및 최적화

---

## 🛠️ 주요 기술 스택

### 백엔드
- **Laravel 12** - PHP 웹 프레임워크
- **PHP 8.4** - 최신 PHP 버전 (Property Hooks, JIT)
- **JinyPHP** - Laravel 기반 확장 프레임워크

### 데이터베이스
- **SQLite** (학습/개발용) / **PostgreSQL 15+** (운영 권장) / **MySQL 8.4** (인기 선택지)
- **Redis 7.x** - 캐시 및 세션 스토리지

### 프론트엔드
- **Laravel Livewire 3.x** - 동적 UI 컴포넌트
- **Tailwind CSS v4** - 유틸리티 CSS 프레임워크
- **Vite** - 프론트엔드 빌드 도구

### 인프라
- **Ubuntu 25.10** - 서버 운영체제
- **Nginx 1.28** - 웹 서버
- **PHP-FPM 8.4** - PHP 프로세스 관리
- **Let's Encrypt** - SSL 인증서

---

## 📋 퀵 체크리스트

### 로컬 개발 환경
- [ ] PHP 8.4+ 설치 확인 ([01.requirements.md](./02.Setup/01.requirements.md))
- [ ] Composer 및 Node.js 설치
- [ ] Laravel 프로젝트 생성 ([02.laravel-install.md](./02.Setup/02.laravel-install.md))
- [ ] 데이터베이스 연결 설정 ([03.database.md](./02.Setup/03.database.md))
- [ ] GitHub 배포 설정 ([04.github-deploy.md](./02.Setup/04.github-deploy.md))

### JinyPHP 설치
- [ ] JinyPHP 패키지 설치 ([02.jinyphp.md](./02.jinyphp.md))
- [ ] 관리자 패널 접속 확인
- [ ] 인증 시스템 테스트

### 서버 배포
- [ ] 클라우드 서버 생성 ([01.cloud-setup.md](./03.deploy/01.cloud-setup.md))
- [ ] 서버 환경 구성 ([02.server-setup.md](./03.deploy/02.server-setup.md))
- [ ] Laravel 배포 ([03.laravel-deploy.md](./03.deploy/03.laravel-deploy.md))
- [ ] 도메인 연결 및 SSL 설정 ([04.domain-https.md](./03.deploy/04.domain-https.md))
- [ ] 성능 최적화 완료 ([05.optimization.md](./03.deploy/05.optimization.md))

---

## 🔗 유용한 링크

### 공식 문서
- [Laravel 공식 문서](https://laravel.com/docs)
- [Livewire 공식 문서](https://livewire.laravel.com/docs)
- [JinyPHP 공식 사이트](https://jinyphp.com) (예상)

### 개발 도구
- [Laravel Debugbar](https://github.com/barryvdh/laravel-debugbar)
- [Laravel IDE Helper](https://github.com/barryvdh/laravel-ide-helper)
- [Tailwind CSS](https://tailwindcss.com/docs)

### 배포 및 호스팅
- [Vultr 클라우드](https://www.vultr.com)
- [Let's Encrypt](https://letsencrypt.org)
- [GitHub Actions](https://github.com/features/actions)

---

## ❓ 문제 해결

### 일반적인 이슈
- **환경 설정 문제**: [`02.Setup/index.md`](./02.Setup/index.md)의 체크리스트 확인
- **JinyPHP 설치 문제**: [`02.jinyphp.md`](./02.jinyphp.md)의 설치 가이드 재확인
- **배포 관련 문제**: [`03.deploy/index.md`](./03.deploy/index.md)의 문제 해결 섹션 참고

### 개발 지원
- **로그 확인**: `storage/logs/laravel.log`
- **디버그 모드**: `.env`에서 `APP_DEBUG=true` 설정
- **캐시 클리어**: `php artisan optimize:clear`

---

*이 가이드는 Laravel 12 + JinyPHP 기반의 ERP 시스템 개발을 위한 종합 매뉴얼입니다.*

