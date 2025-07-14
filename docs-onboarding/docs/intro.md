---
sidebar_position: 1
---

# 시작하기

앰플리튜드, 믹스패널 등 **프로덕트 분석툴**을 도입하려면?
이 가이드에서는 누구나 쉽게 따라할 수 있도록 단계별로 안내합니다.

## 준비물
- Node.js (18버전 이상)
- GitHub 계정
- (선택) 로고 이미지 파일

## 빠른 시작

1. **문서 사이트 클론 및 설치**
   ```bash
   git clone [여기에 저장소 주소]
   cd docs-onboarding
   npm install
   ```
2. **개발 서버 실행**
   ```bash
   npm start
   ```
   브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

3. **문서 수정/추가**
   - `/docs/` 폴더에 마크다운 파일을 추가하거나 수정하세요.
   - 변경사항은 저장 시 자동으로 반영됩니다.

## 문서 구조 예시
- 시작하기 (이 페이지)
- 분석툴 설치 및 연동
- 이벤트 정의 및 트래킹
- 대시보드 활용법
- FAQ

## 커스터마이징
- 브랜드 컬러, 로고 이미지는 `/src/css/custom.css`, `/static/img/logo/`에서 관리합니다.
- 추가 문의는 [GitHub Issues](https://github.com/your-org/your-repo/issues)로 남겨주세요.

---

> 이 문서는 GitBook 스타일로 제작되었으며, 누구나 쉽게 프로덕트 분석툴을 도입할 수 있도록 설계되었습니다.
