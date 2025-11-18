# CLAUDE.md

이 파일은 Claude Code (claude.ai/code)가 이 저장소에서 작업할 때 필요한 가이드를 제공합니다.

## 프로젝트 개요

이 저장소는 **Laravel 12 개발과 JinyPHP 프레임워크 배포를 학습하기 위한 한국어 교육 문서 저장소**입니다. 9개 파일에 총 3,947줄의 마크다운 가이드가 포함되어 있지만 **실제 애플리케이션 코드는 없습니다**.

**목적:** JinyPHP ERP 프레임워크를 사용한 Laravel 애플리케이션 설정, 개발, 배포를 위한 단계별 튜토리얼

## 저장소 구조

```
/
├── index.md              # 메인 문서 허브 (143줄)
├── 01.start.md          # 소개 (최소한, 6줄)
├── 02.Setup/            # 개발 환경 설정 가이드 (총 1,605줄)
│   ├── index.md         # 설정 개요 및 네비게이션
│   ├── 01.requirements.md  # 사전 요구사항 및 설치 (PHP 8.4, Composer, Node.js)
│   ├── 02.laravel-install.md  # Laravel 프로젝트 생성
│   ├── 03.database.md   # PostgreSQL/MySQL 설정 및 구성
│   └── 04.github-deploy.md   # Git 워크플로우 및 GitHub 배포
├── 03.Deploy.md         # 운영 서버 배포 (1,911줄 - 가장 포괄적)
└── 04.jinyphp.md        # JinyPHP 패키지 설치 및 통합
```

## 기술 스택 (문서화된 내용)

**백엔드:**
- Laravel 12 with PHP 8.4 (Property Hooks, JIT 컴파일)
- JinyPHP - Laravel 기반 ERP 프레임워크 확장
- PostgreSQL 15+ (권장) 또는 MySQL 8.4
- Redis 7.x 캐싱 및 세션용

**프론트엔드:**
- Laravel Livewire 3.x 동적 컴포넌트용
- Tailwind CSS v4 유틸리티 퍼스트 스타일링
- Vite 모던 에셋 번들링

**인프라:**
- Ubuntu 25.10 서버 OS
- Nginx 1.28 웹 서버
- PHP-FPM 8.4 프로세스 매니저
- Let's Encrypt SSL 인증서
- Vultr 클라우드 호스팅 플랫폼

## 주요 문서 파일

### 설정 가이드 (`02.Setup/` - 1,605줄)
- **`01.requirements.md`**: macOS, Ubuntu, Windows용 완전한 사전 요구사항 설치
- **`02.laravel-install.md`**: Installer 또는 Composer를 통한 Laravel 프로젝트 생성
- **`03.database.md`**: 상세한 PostgreSQL/MySQL 구성을 포함한 데이터베이스 설정
- **`04.github-deploy.md`**: Git 워크플로우, GitHub Actions CI/CD, 배포 전략

### 운영 배포 (`03.Deploy.md` - 1,911줄)
- Ubuntu 25.10 서버 프로비저닝 및 보안 (UFW 방화벽)
- LEMP 스택 설치 (Linux, Nginx, MySQL/PostgreSQL, PHP)
- GitHub 저장소로부터 Laravel 애플리케이션 배포
- 커스텀 도메인용 Let's Encrypt SSL/HTTPS 설정
- 1GB RAM 서버용 성능 최적화
- `demo.jinyerp.com`을 사용한 실제 예시

### JinyPHP 통합 (`04.jinyphp.md` - 282줄)
- JinyPHP 패키지 설치 (`jiny/auth`, `jiny/admin`, `jiny/site`)
- 로컬 패키지 개발 설정 및 구성
- 마이그레이션 실행 및 에셋 컴파일

## 문서 특성

**언어:** 한국어, 초보자 친화적인 대화체 스타일
**구조:** 로컬 설정 → 운영 배포 → 프레임워크 통합의 점진적 학습 경로
**세부 수준:** 모든 구성 파일과 서비스에 대한 포괄적인 파일 경로 문서화
**대상:** 운영 배포를 학습하는 Laravel 초보자

## 일반적인 문서 작업

이 저장소는 문서 전용이므로 일반적인 작업은 다음과 같습니다:

### 콘텐츠 업데이트
```bash
# 빌드 명령 불필요 - 마크다운 파일을 직접 편집
git add .
git commit -m "문서 업데이트"
git push origin master
```

### 네비게이션
- 완전한 개요와 네비게이션을 위해 `index.md`에서 시작
- `02.Setup/index.md`는 설정 체크리스트와 진행 상황 추적 제공
- 각 가이드는 한국어 섹션 헤더와 함께 내부 네비게이션 포함

### 파일 구조 가이드라인
- 한국어를 전체적으로 유지
- 강조를 위한 이모지 시각적 단서 사용 (💡, 🚀, ⚠️)
- 모든 구성 참조에 대한 절대 파일 경로 포함
- 점진적 학습 구조 유지

## 저장소 상태

- **Git 브랜치:** `master` (깨끗한 작업 디렉터리)
- **최근 커밋:** "first" (c946e59) - 초기 커밋
- **총 파일:** 9개 마크다운 파일 (활성 애플리케이션 코드 없음)
- **의존성 없음:** package.json, composer.json 또는 빌드 도구 불필요

## 이 저장소 작업하기

**요구사항:** 마크다운 편집기와 Git만 필요
**빌드 프로세스 없음:** 순수 문서 - 파일을 직접 편집
**테스트:** 포맷팅 확인을 위한 마크다운 렌더링 미리보기
**배포:** Git push를 통한 문서 업데이트 (애플리케이션 배포 없음)