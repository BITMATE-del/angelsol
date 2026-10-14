import Link from "next/link";
import {authorized} from "@/lib/auth";
import {database} from "@/lib/db";
import AdminLogin from "./sign-in";
import AdminPanel from "./panel";
export const dynamic="force-dynamic";
export default async function Admin(){
 if(!await authorized())return <main className="shell"><div className="page-heading" style={{textAlign:"center"}}><span className="eyebrow">ANGEL / PRIVATE ACCESS</span><h1>관리자 전용 페이지</h1><p style={{margin:"auto"}}>별도의 회원가입은 필요하지 않습니다.</p></div><AdminLogin/></main>;
 let inquiries:Record<string,unknown>[]=[];let dbError="";
 try{const sql=database();const rows=await sql`select id,name,email,service,budget,project,message,status,created_at from inquiries order by created_at desc limit 100`;inquiries=rows as Record<string,unknown>[];}catch{dbError="문의 저장소 미연결: 제작 문의 목록은 데이터 저장 설정 후 표시됩니다.";}
 return <main className="shell" style={{paddingBottom:100}}><div className="page-heading"><span className="eyebrow">ANGEL / ADMIN</span><h1>운영 대시보드</h1><p>관리 코드로 인증되었습니다. 프로젝트 등록 및 제작 문의 관리를 시작하세요.</p><Link href="/admin/projects" className="button-primary" style={{marginTop:18}}>프로젝트 등록·관리 ↗</Link></div><div className="admin-grid"><div className="admin-box"><small>최근 문의</small><b>{inquiries.length}</b></div><div className="admin-box"><small>신규 문의</small><b>{inquiries.filter(i=>i.status==="new").length}</b></div><div className="admin-box"><small>상담 중</small><b>{inquiries.filter(i=>i.status==="contacted").length}</b></div></div>{dbError&&<div className="message error">{dbError}</div>}<AdminPanel initial={inquiries}/></main>;
}