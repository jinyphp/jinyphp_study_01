# 🌐 서버 접속과 웹서버

**목표**: 웹서버와 HTTP 통신을 이해하고, Laravel 개발환경에서 서버 접속 마스터

## 📚 학습 모듈

이 섹션에서는 웹서버와 HTTP 통신에 대해 체계적으로 학습합니다:

### Module 1: [웹서버란?](웹서버란.html)
- 웹서버의 정의와 역할
- Apache, Nginx, IIS 등 웹서버 종류
- 정적 파일 vs 동적 파일 처리
- 웹서버와 PHP의 협업 방식
- 운영환경 설정 방법

### Module 2: [HTTP 통신과 서버 접속](http.html)
- HTTP 프로토콜 이해
- 브라우저와 서버의 통신 과정
- Laravel 개발 서버 활용법
- HTTP 상태 코드와 메서드
- 실습과 트러블슈팅

## 🎯 학습 목표

### ✅ 이해할 개념들
- 📡 **HTTP 프로토콜**: 웹 통신의 기본 규칙
- 🖥️ **웹서버**: 웹페이지를 제공하는 소프트웨어
- 🔄 **요청/응답**: 브라우저와 서버의 대화법
- ⚙️ **동적 처리**: PHP/Laravel의 역할

### ✅ 실습할 기술들
- 🚀 **Laravel 개발 서버**: `php artisan serve` 완전 활용
- 🔧 **서버 설정**: Apache/Nginx 기본 구성
- 📊 **모니터링**: 로그 확인과 성능 측정
- 🌐 **다양한 환경**: Docker, Valet, Homestead

## 🤔 서버 접속이란 무엇일까요?

### 실생활 비유로 이해하기

웹 서버와 브라우저의 관계는 **전화 통화**와 비슷합니다:

```
📞 전화 통화 과정
1. 내가 친구 번호를 눌러요 (브라우저에서 URL 입력)
2. 전화가 친구에게 연결돼요 (인터넷을 통해 서버 접속)
3. 친구가 전화를 받아요 (웹서버가 요청 수신)
4. 친구가 대답해요 (웹서버가 HTML 응답)
5. 내가 들어요 (브라우저에 웹페이지 표시)
```

### 웹에서의 서버 접속 과정

```
🌐 웹 접속 과정
사용자 (브라우저) ↔ 인터넷 ↔ 웹서버 (Laravel 앱)

1. 브라우저: "example.com 보여줘!"
2. 인터넷: "메시지를 서버로 전달"
3. 웹서버: "요청 받았어! 처리할게"
4. Laravel: "데이터 가져와서 HTML 만들기"
5. 웹서버: "완성된 페이지 전송!"
6. 브라우저: "페이지 화면에 표시"
```

## 🖥️ 웹서버란?

### 웹서버의 정의

**웹서버**는 인터넷을 통해 웹페이지를 제공하는 컴퓨터 프로그램입니다.

```
🏪 웹서버 = 인터넷 상점
├── 📋 메뉴판 (웹페이지)를 준비하고
├── 🛎️ 고객 주문(HTTP 요청)을 받아서
├── 👨‍🍳 요리사(PHP/Laravel)에게 요리를 시키고
└── 🍽️ 완성된 요리(HTML)를 고객에게 서빙
```

### 웹서버가 하는 일

1. **🔍 요청 받기**: 브라우저에서 보낸 HTTP 요청 수신
2. **📄 파일 찾기**: 요청된 웹페이지나 파일 위치 확인
3. **⚙️ 프로그램 실행**: PHP/Laravel 코드 실행 (필요한 경우)
4. **📤 응답 보내기**: HTML, CSS, JS 등을 브라우저로 전송

### 웹서버의 종류

```
🌐 주요 웹서버들
├── 🟠 Apache HTTP Server
│   ├── 가장 오래되고 안정적
│   ├── 설정이 쉬움 (.htaccess)
│   └── PHP와 완벽 호환
│
├── 🟢 Nginx (엔진엑스)
│   ├── 빠른 성능, 적은 메모리 사용
│   ├── 대용량 트래픽 처리 우수
│   └── 역방향 프록시로도 사용
│
├── ⚡ LiteSpeed
│   ├── Apache 호환 + 빠른 성능
│   └── 상용 라이선스
│
└── 🔷 Microsoft IIS
    ├── Windows 전용
    └── ASP.NET과 최적화
```

## 🔗 웹서버와 인터프리터 언어

### 정적 파일 vs 동적 파일

**📄 정적 파일 (Static Files)**
```html
<!-- index.html - 항상 같은 내용 -->
<!DOCTYPE html>
<html>
<head>
    <title>정적 페이지</title>
</head>
<body>
    <h1>안녕하세요!</h1>
    <p>이 내용은 항상 같아요</p>
</body>
</html>
```

**⚙️ 동적 파일 (Dynamic Files)**
```php
<!-- index.php - 실행할 때마다 다른 내용 -->
<!DOCTYPE html>
<html>
<head>
    <title>동적 페이지</title>
</head>
<body>
    <h1>안녕하세요!</h1>
    <p>현재 시간: <?= date('Y-m-d H:i:s') ?></p>
    <p>랜덤 숫자: <?= rand(1, 100) ?></p>
</body>
</html>
```

### PHP와 웹서버의 협업

```
🤝 웹서버와 PHP의 협업
1. 브라우저: "index.php 파일 요청"
2. 웹서버: "PHP 파일이네? PHP 인터프리터야!"
3. PHP: "코드 실행해서 HTML 생성"
4. 웹서버: "생성된 HTML을 브라우저에게 전송"
```

### FastCGI와 PHP-FPM

```
📡 PHP 실행 방식들

1. mod_php (Apache 모듈)
   ├── Apache와 PHP가 하나로 합쳐짐
   ├── 빠른 시작
   └── 메모리 사용량 큼

2. PHP-FPM (FastCGI Process Manager)
   ├── PHP가 별도 프로세스로 실행
   ├── 안정성 높음
   ├── 메모리 효율적
   └── Nginx와 완벽 호환
```

## 🚀 Laravel 개발 서버 사용하기

### Artisan 내장 서버

Laravel은 개발용 내장 웹서버를 제공합니다:

```bash
# Laravel 개발 서버 시작
php artisan serve

# 결과 출력
Laravel development server started: http://127.0.0.1:8000
```

### 내장 서버의 특징

```
🔧 Artisan 서버 특징
├── ✅ 설치 필요 없음 (PHP만 있으면 됨)
├── ✅ 설정이 간단함
├── ✅ 개발/테스트에 최적화
├── ❌ 운영환경에는 부적합
└── ❌ 성능이 제한적
```

### 다양한 서버 옵션

```bash
# 기본 서버 시작 (localhost:8000)
php artisan serve

# 특정 포트 사용
php artisan serve --port=8080

# 다른 IP에서도 접속 허용
php artisan serve --host=0.0.0.0 --port=8000

# 특정 도메인으로 접속
php artisan serve --host=myapp.local --port=8000
```

## 🌍 운영환경 웹서버 설정

### Apache + PHP 설정

**1. Apache 가상호스트 설정**
```apache
# /etc/apache2/sites-available/laravel.conf
<VirtualHost *:80>
    ServerName example.com
    DocumentRoot /var/www/laravel/public

    <Directory /var/www/laravel/public>
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/laravel_error.log
    CustomLog ${APACHE_LOG_DIR}/laravel_access.log combined
</VirtualHost>
```

**2. .htaccess 파일 (public 폴더)**
```apache
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteRule ^(.*)$ index.php [QSA,L]
</IfModule>
```

### Nginx + PHP-FPM 설정

**1. Nginx 설정 파일**
```nginx
# /etc/nginx/sites-available/laravel
server {
    listen 80;
    server_name example.com;
    root /var/www/laravel/public;
    index index.php;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.2-fpm.sock;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }
}
```

## 🛠️ 실습: 로컬 개발환경 구축

### 1단계: Laravel 프로젝트 생성

```bash
# Laravel 프로젝트 생성
composer create-project laravel/laravel my-first-app

# 프로젝트 폴더로 이동
cd my-first-app
```

### 2단계: 개발 서버 시작

```bash
# 개발 서버 실행
php artisan serve

# 브라우저에서 접속: http://localhost:8000
```

### 3단계: 첫 번째 라우트 만들기

```php
// routes/web.php
Route::get('/hello', function () {
    return '<h1>안녕하세요! 서버 접속 성공!</h1>';
});
```

**테스트**: `http://localhost:8000/hello` 접속

### 4단계: 서버 로그 확인하기

개발 서버를 실행하면 실시간 로그가 표시됩니다:

```bash
php artisan serve

# 접속할 때마다 로그 출력
[Mon Nov 20 10:30:25 2023] 127.0.0.1:52070 [200]: GET /hello
[Mon Nov 20 10:30:26 2023] 127.0.0.1:52071 [404]: GET /favicon.ico
```

## 🔧 서버 접속 트러블슈팅

### 자주 발생하는 문제들

**1. 🚫 "Address already in use" 에러**
```bash
# 해결방법: 다른 포트 사용
php artisan serve --port=8080
```

**2. 🚫 "Permission denied" 에러**
```bash
# 해결방법: 폴더 권한 확인
sudo chmod -R 755 storage bootstrap/cache
sudo chown -R www-data:www-data storage bootstrap/cache
```

**3. 🚫 "500 Internal Server Error"**
```bash
# 해결방법: 로그 확인
tail -f storage/logs/laravel.log

# 환경설정 확인
php artisan config:clear
php artisan cache:clear
```

**4. 🚫 ".env 파일 없음" 에러**
```bash
# 해결방법: .env 파일 복사 및 키 생성
cp .env.example .env
php artisan key:generate
```

## 📊 성능 모니터링

### 서버 응답 시간 확인

```bash
# curl로 응답 시간 측정
curl -w "총 시간: %{time_total}초\n" -s -o /dev/null http://localhost:8000

# 여러 번 테스트
for i in {1..5}; do curl -w "요청 $i: %{time_total}초\n" -s -o /dev/null http://localhost:8000; done
```

### Laravel Debugbar 설치

```bash
# 개발용 디버그 도구 설치
composer require barryvdh/laravel-debugbar --dev

# 패키지 등록 (Laravel 5.5 이상은 자동)
php artisan vendor:publish --provider="Barryvdh\Debugbar\ServiceProvider"
```

## 🌐 다양한 개발환경

### Docker를 사용한 Laravel

```yaml
# docker-compose.yml
version: '3.8'
services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "8000:8000"
    volumes:
      - .:/app
    command: php artisan serve --host=0.0.0.0 --port=8000

  mysql:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: secret
      MYSQL_DATABASE: laravel
    ports:
      - "3306:3306"
```

### Laravel Valet (macOS)

```bash
# Valet 설치 (macOS 전용)
composer global require laravel/valet

# Valet 설치
valet install

# Laravel 프로젝트 폴더에서
valet link my-app

# 브라우저에서 my-app.test 접속
```

### Laravel Homestead (가상머신)

```bash
# Homestead 설치
vagrant box add laravel/homestead

# Homestead 프로젝트 생성
composer require laravel/homestead --dev

# 초기화
php vendor/bin/homestead make

# 가상머신 시작
vagrant up
```

## 🎯 실전 팁

### 개발 효율성 높이기

**1. 🔄 자동 재시작 설정**
```bash
# nodemon 설치 (파일 변경 감지)
npm install -g nodemon

# 자동 재시작으로 서버 실행
nodemon --exec "php artisan serve" --watch app --watch routes
```

**2. 🌐 터널링으로 외부 접속**
```bash
# ngrok 설치 후
ngrok http 8000

# 외부에서 접속 가능한 URL 제공
# https://abc123.ngrok.io → http://localhost:8000
```

**3. 📱 모바일 기기에서 테스트**
```bash
# 모든 네트워크 인터페이스에서 접속 허용
php artisan serve --host=0.0.0.0

# 모바일에서 컴퓨터 IP로 접속
# http://192.168.1.100:8000
```

## 🚀 다음 단계

이제 서버 접속을 이해했으니:

1. **[🍯 라우팅 맛보기](04-01.route-taste/index.html)** - URL과 페이지 연결하기
2. **[🌱 뷰 맛보기](05-01.view-taste/index.html)** - 동적 HTML 페이지 만들기
3. **[🍯 템플릿 맛보기](06-01.template-taste/index.html)** - Blade로 멋진 페이지 구성

## 🎉 정리하며...

**서버 접속의 핵심:**
- 🌐 **웹서버**: 인터넷의 요청을 받아 처리하는 프로그램
- ⚙️ **동적 처리**: PHP가 실시간으로 HTML을 생성
- 🚀 **Laravel**: 개발 서버로 빠른 테스트 가능
- 🔧 **설정**: Apache/Nginx로 운영환경 구축

**Laravel 개발 서버로:**
- 🎯 빠른 프로토타이핑이 가능하고
- 🔍 실시간 디버깅이 쉬우며
- 📱 다양한 기기에서 테스트할 수 있습니다

이제 **서버와 브라우저의 대화**를 완벽히 이해했으니, 본격적인 Laravel 개발을 시작해보세요! 🔥

---

💡 **꿀팁**: 개발할 때는 `php artisan serve`로 시작하고, 나중에 운영 서버는 Nginx + PHP-FPM 조합을 추천합니다! 
