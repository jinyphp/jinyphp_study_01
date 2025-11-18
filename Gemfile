source "https://rubygems.org"

# Jekyll 사이트 생성을 위한 gem
gem "jekyll", "~> 4.4.1"

# Jekyll 플러그인들
gem "jekyll-sass-converter", "~> 3.1"

# 테마
gem "minima", "~> 2.5"

# Windows와 JRuby는 tzinfo-data gem이 필요함
platforms :windows do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Jekyll이 Windows에서 제대로 작동하도록 하는 성능 향상 도구
gem "wdm", "~> 0.2.0", :platforms => [:mingw, :x64_mingw, :mswin]

# HTTP 서버 (개발용)
gem "webrick", "~> 1.9"

# Jekyll 플러그인 그룹 (중복 제거)
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.17"
  gem "jekyll-seo-tag", "~> 2.8"
  gem "jekyll-sitemap", "~> 1.4"
  gem "jekyll-relative-links", "~> 0.7"
end