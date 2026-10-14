import { database } from "@/lib/db";
import { projects as examples, type Project } from "@/lib/data";

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
export async function publicProjects():Promise<Project[]> {
 try {
  const rows = await database()`select * from portfolio_projects where published=true order by sort_order asc, id desc`;
  return rows.length ? rows.map(convert) : examples;
 } catch {return examples;}
}
export async function publicProject(slug:string):Promise<Project|undefined>{
 try {
  const rows=await database()`select * from portfolio_projects where slug=${slug} and published=true limit 1`;
  if(rows.length) return convert(rows[0]);
  const all=await database()`select count(*)::int as count from portfolio_projects where published=true`;
  if(Number(all[0].count)>0)return undefined;
 }catch{}
 return examples.find(p=>p.slug===slug);
}
export async function managedProjects():Promise<Project[]>{
 const rows=await database()`select * from portfolio_projects order by sort_order asc,id desc`;
 return rows.map(convert);
}
