"use client";
import {useState,type FormEvent} from "react";
import {KeyRound,ArrowRight,ShieldCheck} from "lucide-react";
export default function AdminLogin(){
 const [code,setCode]=useState("");
 const [error,setError]=useState("");
 const [busy,setBusy]=useState(false);
 async function submit(e:FormEvent<HTMLFormElement>){
  e.preventDefault();setError("");setBusy(true);
  try{
   const r=await fetch("/api/admin/login",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({password:code})});
   if(!r.ok)throw Error("관리 코드를 확인해 주세요.");
   window.location.assign("/admin/projects");
  }catch(e){setError(e instanceof Error?e.message:"로그인할 수 없습니다.");setBusy(false);}
 }
 return <form className="form-shell" onSubmit={submit} style={{maxWidth:475,textAlign:"center",padding:"45px 35px"}}>
  <div style={{height:58,width:58,display:"grid",placeItems:"center",background:"#f3eadd",borderRadius:18,margin:"0 auto 20px",color:"#95724e"}}><KeyRound size={27}/></div>
  <h2 style={{fontSize:24,margin:"0 0 9px"}}>관리 코드 입력</h2>
  <p style={{color:"#8b8175",fontSize:13,lineHeight:1.8,marginBottom:28}}>회원가입 없이 관리자 전용 코드로 접속합니다.</p>
  <div className="field" style={{textAlign:"left"}}><label htmlFor="admin-code">관리 코드</label><input id="admin-code" type="password" name="code" value={code} onChange={e=>setCode(e.target.value)} autoComplete="off" required placeholder="관리 코드를 입력하세요" /></div>
  {error&&<p className="message error" role="alert">{error}</p>}
  <button className="button-primary" type="submit" disabled={busy||!code} style={{width:"100%"}}>{busy?"확인 중...":"관리자 입장"} <ArrowRight size={17}/></button>
  <p style={{display:"flex",alignItems:"center",justifyContent:"center",gap:6,fontSize:11,color:"#a29788",marginTop:24}}><ShieldCheck size={14}/> 관리 코드는 서버에서만 검증합니다.</p>
 </form>
}