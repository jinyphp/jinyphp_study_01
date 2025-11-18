# 라라벨 개발 및 JinyPHP 가이드

라라벨 개발을 학습하고 JinyPHP 프레임워크를 활용하여 ERP 시스템을 구축하는 종합 가이드입니다.

## 📚 문서 목록

### 🚀 시작하기

#### 01. 라라벨 개발 과 시장성
- **라라벨 프레임워크 소개**: 현대적인 PHP 웹 프레임워크의 특징과 장점
- **시장 동향**: 라라벨의 업계 채택률과 취업 시장성
- **JinyPHP 소개**: 라라벨 기반 확장 프레임워크로서의 JinyPHP

#### 02. 개발환경 구축하기
📖 **[Laravel 개발 환경 설정 가이드](./02.Setup/index.md)**
- **[01. 사전 요구사항](./02.Setup/01.requirements.md)** - PHP, Composer, Node.js 설치
- **[02. Laravel 프로젝트 설치](./02.Setup/02.laravel-install.md)** - 프로젝트 생성 및 기본 설정
- **[03. 데이터베이스 설정](./02.Setup/03.database.md)** - PostgreSQL/MySQL 연결
- **[04. GitHub 배포 준비](./02.Setup/04.github-deploy.md)** - Git 저장소 및 배포 설정

#### 03. JinyPHP 패키지 설치
📖 **[JinyPHP 패키지 설치 및 설정 가이드](./02.jinyphp.md)**
- JinyPHP 핵심 패키지 설치 (Auth, Admin, Site)
- 패키지 설정 및 초기화
- 개발 환경 구성
- 컴포넌트 생성 및 사용법

#### 04. 서버 배포하기
📖 **[Laravel 서버 배포 가이드](./배포.md)**
- Ubuntu 25.10 + PHP 8.4 서버 설정
- PostgreSQL/MySQL 데이터베이스 구성
- Nginx + PHP-FPM 설정
- SSL 인증서 및 도메인 설정

---

## 🔄 개발 워크플로우

### 단계별 진행 순서

1. **환경 구축** → [`02.Setup/index.md`](./02.Setup/index.md)
   - Laravel 개발 환경 설정
   - 로컬 데이터베이스 구성
   - GitHub 배포 준비

2. **JinyPHP 설치** → [`02.jinyphp.md`](./02.jinyphp.md)
   - JinyPHP 패키지 설치
   - 관리자 패널 설정
   - 인증 시스템 구성

3. **개발 및 테스트**
   - Livewire 컴포넌트 개발
   - JinyPHP 기능 활용
   - 로컬 테스트 진행

4. **서버 배포** → [`배포.md`](./배포.md)
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
- **PostgreSQL 15+** (권장) 또는 **MySQL 8.4**
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
- [ ] 클라우드 서버 생성
- [ ] 서버 환경 구성 ([배포.md](./배포.md))
- [ ] 도메인 연결 및 SSL 설정
- [ ] 프로덕션 배포 완료

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
- **배포 관련 문제**: [`배포.md`](./배포.md)의 문제 해결 섹션 참고

### 개발 지원
- **로그 확인**: `storage/logs/laravel.log`
- **디버그 모드**: `.env`에서 `APP_DEBUG=true` 설정
- **캐시 클리어**: `php artisan optimize:clear`

---

*이 가이드는 Laravel 12 + JinyPHP 기반의 ERP 시스템 개발을 위한 종합 매뉴얼입니다.*

