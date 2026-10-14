"use client";
import {useState} from "react";
const artwork:Record<string,string>={trading:"/assets/showcase/trading-platform.png",automation:"/assets/showcase/contents-automation.png",bot:"/assets/showcase/messenger-bot.png",dashboard:"/assets/showcase/admin-dashboard.png"};
export default function ProjectArt({cover,index,imageUrl}:{cover:string;index?:number;imageUrl?:string}){
 const [broken,setBroken]=useState(false);
 const image=imageUrl||artwork[cover];
 return <div className={"art art-"+cover}>{image&&!broken?<img src={image} alt="프로젝트 시안 이미지" loading="lazy" onError={()=>setBroken(true)} style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>:<><span className="art-label">ANGEL SOLUTION / CONCEPT</span><div className="art-orb"/><div className="art-window"><div className="art-window-top"><span/><span/><span/><b>ANGEL / CONCEPT</b></div><div className="art-window-body"><div className="art-window-side"><i/><i/><i/><i/></div><div className="art-window-content"><i/><div className="art-boxes"><i/><i/><i/></div><div className="art-lines"/></div></div></div><span className="art-counter">{String(index||1).padStart(2,"0")} / CONCEPT</span></>}</div>
}