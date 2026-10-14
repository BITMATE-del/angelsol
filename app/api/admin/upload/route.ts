import {NextResponse} from "next/server";
import {authorized} from "@/lib/auth";
import {put} from "@vercel/blob";
import {randomUUID} from "node:crypto";
export const runtime="nodejs";
export async function POST(req:Request){
 if(!await authorized())return NextResponse.json({error:"Unauthorized"},{status:401});
 if(!process.env.BLOB_READ_WRITE_TOKEN)return NextResponse.json({error:"Vercel Blob 저장소 연결이 필요합니다."},{status:503});
 try{
  const form=await req.formData();
  const file=form.get("file");
  if(!(file instanceof File))return NextResponse.json({error:"이미지를 선택해 주세요."},{status:400});
  if(file.size>8*1024*1024||file.size===0)return NextResponse.json({error:"8MB 이하 이미지만 가능합니다."},{status:400});
  const mime=({ "image/jpeg":"jpg","image/png":"png","image/webp":"webp" } as Record<string,string>)[file.type];
  if(!mime)return NextResponse.json({error:"JPG, PNG, WEBP만 가능합니다."},{status:400});
  const bytes=new Uint8Array(await file.arrayBuffer());
  const valid=(mime==="jpg"&&bytes[0]===255&&bytes[1]===216&&bytes[2]===255)||(mime==="png"&&bytes.slice(0,4).join(",")==="137,80,78,71")||(mime==="webp"&&String.fromCharCode(...bytes.slice(0,4))==="RIFF"&&String.fromCharCode(...bytes.slice(8,12))==="WEBP");
  if(!valid)return NextResponse.json({error:"파일 형식 검증에 실패했습니다."},{status:400});
  const asset=await put("showcase/"+randomUUID()+"."+mime,file,{access:"public",addRandomSuffix:false,contentType:file.type});
  return NextResponse.json({url:asset.url});
 }catch{return NextResponse.json({error:"업로드에 실패했습니다. 저장소 설정을 확인해 주세요."},{status:503})}
}
