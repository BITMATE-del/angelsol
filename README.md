# ANGEL SOLUTION

맞춤형 개발 스튜디오 랜딩 사이트 MVP — Next.js App Router.

## 구현 범위
- 반응형 메인 랜딩, 프로젝트 쇼룸(카테고리 필터), 프로젝트 상세
- 제작 서비스, 개발 프로세스, 소개 페이지
- 제작 문의 폼 / PostgreSQL 영구 저장 (설정 시)
- 관리자 비밀번호 로그인 / HTTP-only 서명 쿠키 / 문의 확인 및 상태 수정
- 기본 SEO 메타데이터

**중요:** 현재 쇼룸 카드는 실제 고객 납품 사례가 아닌 컨셉 시안입니다. 실제 화면/프로젝트를 공개할 때 해당 항목을 교체해야 합니다. 문의 API는 DB 연결 실패 시 접수 성공이라고 주장하지 않고 503을 반환합니다.

## 실행

```bash
npm install
cp .env.example .env.local
npm run dev
```

Node.js 20 이상을 권장합니다. `.env.local`에 `DATABASE_URL`, `ADMIN_PASSWORD`, `SESSION_SECRET`을 기입하고 PostgreSQL에 `db/schema.sql`을 적용한 뒤 관리자와 문의 기능을 사용할 수 있습니다.

```bash
npm run build
npm run start
```

## 배포

Vercel에서 `BITMATE-del/angelsol`을 새 프로젝트로 Import하고 필수 환경변수 3개를 입력합니다. Production용 데이터베이스를 연결하고 `db/schema.sql`을 적용하세요. 기존 BITMATE DB와는 분리해야 합니다.

## 구현 다음 단계
- PostgreSQL 기반 프로젝트 CMS CRUD/미디어 업로드
- 이미지·동영상 실제 제작 사례 콘텐츠 교체
- 파일 첨부, 이메일/텔레그램 신규 문의 알림
- 로그인 시도 제한, CAPTCHA/속도 제한, 관리자 역할 구분, 감사 로그
- 개인정보 처리방침 및 사업자 연락처 확정
- E2E 테스트 및 모바일 실브라우저 검수
