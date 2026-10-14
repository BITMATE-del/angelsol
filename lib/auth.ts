import {createHmac,timingSafeEqual} from "node:crypto";
import {cookies} from "next/headers";
const key="angelsol_admin";
function sign(payload:string){return createHmac("sha256",process.env.SESSION_SECRET!).update(payload).digest("hex")}
export async function authorized(){const secret=process.env.SESSION_SECRET;if(!secret)return false;const cookie=(await cookies()).get(key)?.value;if(!cookie)return false;const [expiry,signature]=cookie.split(".");if(!expiry||!signature||!/^\d+$/.test(expiry)||Number(expiry)<Date.now())return false;const expected=sign(expiry);return expected.length===signature.length&&timingSafeEqual(Buffer.from(expected),Buffer.from(signature));}
export async function authenticate(password:string){const expected=process.env.ADMIN_PASSWORD;const secret=process.env.SESSION_SECRET;if(!expected||!secret||secret.length<32)return false;const x=Buffer.from(password),y=Buffer.from(expected);if(x.length!==y.length||!timingSafeEqual(x,y))return false;const expiry=String(Date.now()+1000*60*60*12);(await cookies()).set(key,expiry+"."+sign(expiry),{httpOnly:true,sameSite:"lax",secure:process.env.NODE_ENV==="production",path:"/",maxAge:43200});return true;}
export async function logout(){(await cookies()).delete(key);}
