import type { Project } from "@/lib/data";
export const categories=["WEB PLATFORM","AUTOMATION","BOT & SYSTEM","DASHBOARD","APP","DESIGN","OTHER"];
export function parseProject(body:unknown):Omit<Project,"id"> {
 if(!body||typeof body!=="object")throw Error("잘못된 요청입니다.");
 const b=body as Record<string,unknown>;
 const string=(k:string,max:number)=>{if(typeof b[k]!=="string"||String(b[k]).length>max)throw Error(k+" 입력값을 확인해 주세요.");return String(b[k]).trim()};
 const slug=string("slug",90),title=string("title",140),category=string("category",80),description=string("description",400),detail=string("detail",6000);
 if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))throw Error("주소는 소문자·숫자·하이픈만 사용합니다.");
 if(!title||!description||!detail||!categories.includes(category))throw Error("제목·분류·설명은 필수입니다.");
 const features=Array.isArray(b.features)?b.features:[];
 if(features.length>20||features.some(x=>typeof x!=="string"||x.length>140))throw Error("기능 설명이 너무 깁니다.");
 const gallery=Array.isArray(b.gallery)?b.gallery:[];
 if(gallery.length>15||gallery.some(x=>typeof x!=="string"||x.length>1800))throw Error("이미지는 최대 15개입니다.");
 const imageUrl=string("imageUrl",1800),demoUrl=string("demoUrl",1800);
 const safeUrl=(v:string)=>!v||v.startsWith("/assets/")||(/^https:\/\/[^\s@]+$/.test(v)&&!v.includes("\\"));
 if(!safeUrl(imageUrl)||!safeUrl(demoUrl)||gallery.some(x=>!safeUrl(x)))throw Error("이미지 및 데모 주소는 HTTPS 또는 공개 에셋 경로를 사용해 주세요.");
 const sortOrder=Number(b.sortOrder??0);
 if(!Number.isInteger(sortOrder)||sortOrder<0||sortOrder>100000)throw Error("정렬 순서를 확인해 주세요.");
 return {slug,title,category,description,detail,features:features.map(String),cover:string("cover",60)||"dashboard",status:string("status",80)||"컨셉 쇼케이스",featured:b.featured===true,published:b.published===true,imageUrl,gallery:gallery.map(String),demoUrl,sortOrder};
}
