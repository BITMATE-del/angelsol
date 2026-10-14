import {NextResponse} from "next/server";
import {authenticate,logout} from "@/lib/auth";
export async function POST(req:Request){
 try{const body=await req.json();const code=body.password;
 if(typeof code!=="string"||code.length>256||!await authenticate(code))return NextResponse.json({error:"INVALID_CODE"},{status:401});
 return NextResponse.json({ok:true});
 }catch{return NextResponse.json({error:"BAD_REQUEST"},{status:400})}
}
export async function DELETE(){await logout();return NextResponse.json({ok:true})}
