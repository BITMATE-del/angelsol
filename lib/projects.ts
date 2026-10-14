import { database } from "@/lib/db";
import { unstable_cache } from "next/cache";
import { projects as examples, type Project } from "@/lib/data";

const databaseSql = database;
type Row = Record<string, unknown>;
function convert(row: Row): Project {
 return {
  id:Number(row.id), slug:String(row.slug), title:String(row.title),
  category:String(row.category), description:String(row.description),
  detail:String(row.detail), features:Array.isArray(row.features)?row.features.map(String):[],
  cover:String(row.cover ?? ""), status:String(row.status), featured:Boolean(row.featured),
  imageUrl:String(row.image_url ?? ""), gallery:Array.isArray(row.gallery)?row.gallery.map(String):[],
  published:Boolean(row.published), sortOrder:Number(row.sort_order ?? 0),
  demoUrl:String(row.demo_url ?? "")
 };
}
const publicProjectsQuery = unstable_cache(async ():Promise<Project[]> => {
 try {
  const sql=database();const rows = await sql`select * from portfolio_projects where published=true order by sort_order asc, id desc`;
  if(rows.length)return rows.map(convert);
  const all=await sql`select count(*)::int as count from portfolio_projects`;
  return Number(all[0].count)===0 ? examples : [];
 } catch {return examples;}
},["portfolio-list"],{revalidate:60,tags:["portfolio"]});
export const publicProjects = publicProjectsQuery;
export const publicProject = unstable_cache(async (slug:string):Promise<Project|undefined>=>{
 try {
  const sql=database();const rows=await sql`select * from portfolio_projects where slug=${slug} and published=true limit 1`;
  if(rows.length) return convert(rows[0]);
  const all=await sql`select count(*)::int as count from portfolio_projects`;
  if(Number(all[0].count)>0)return undefined;
 }catch{}
 return examples.find(p=>p.slug===slug);
}
},["portfolio-detail"],{revalidate:60,tags:["portfolio"]});
export async function managedProjects():Promise<Project[]>{
 const sql=database();const rows=await sql`select * from portfolio_projects order by sort_order asc,id desc`;
 return rows.map(convert);
}
