# ANGEL SOLUTION
맞춤 제작 스튜디오 랜딩 + 포트폴리오 CMS MVP.

## 핵심 기능
- 메인/쇼룸/프로젝트 상세/제작 문의 반응형 사이트
- 관리자 문의 조회, 상담 상태 관리
- **관리자 CMS**: `/admin/projects`에서 프로젝트 추가, 수정, 삭제, 대표 이미지, 갤러리, 공개/비공개, 추천 여부, 정렬 순서, 데모 URL 관리
- PostgreSQL에 등록된 공개 프로젝트 우선 표시. CMS 프로젝트가 없으면 기본 컨셉 4개를 예시로 표시
- 서버 권한 검사, 파일 MIME/signature·크기 검증, Vercel Blob 이미지 업로드

## 배포 전 설정
1. Vercel에서 `BITMATE-del/angelsol` 연결
2. Node 20 이상 사용하고 `npm install && npm run build`
3. 전용 PostgreSQL DB 준비 후 `db/schema.sql` 적용
4. `DATABASE_URL`, `ADMIN_PASSWORD`, 32자 이상의 `SESSION_SECRET` 환경변수 설정
5. Vercel Blob 저장소 연결 및 `BLOB_READ_WRITE_TOKEN` 환경변수 설정 (이미지 업로드에 필요)
6. 재배포한 뒤 관리자 로그인 → 프로젝트 등록 → 공개 체크 → 홈페이지 확인

## 주의
관리자 CMS를 운영하려면 DB 및 인증 환경변수가 반드시 필요합니다. 업로드 저장소 미설정 시 이미지는 URL 입력 방식으로 등록할 수 있습니다. 기존 기본 4개 예시는 DB에 자동 복사되지 않습니다. 기존 예시도 편집 가능하게 하려면 CMS에 새 항목으로 직접 등록해야 합니다.

운영 전 추가 권장 사항: 관리자 MFA/시도 제한, 파일 업로드 속도 제한, 개인정보 정책, 감사로그, 브라우저 실사용 테스트. 컨셉 시안을 실제 납품물로 오인시키지 마세요.
