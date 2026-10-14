"use client";

import Image from "next/image";
import { useState } from "react";

const artwork: Record<string, {src:string; alt:string}> = {
  trading: {src:"/assets/showcase/trading-platform.png",alt:"트레이딩 플랫폼 맞춤 제작 컨셉 시안"},
  automation: {src:"/assets/showcase/contents-automation.png",alt:"콘텐츠 자동화 시스템 컨셉 시안"},
  bot: {src:"/assets/showcase/messenger-bot.png",alt:"메신저 상담 솔루션 컨셉 시안"},
  dashboard: {src:"/assets/showcase/admin-dashboard.png",alt:"맞춤형 관리자 시스템 컨셉 시안"}
};

export default function ProjectArt({ cover, index }: {cover:string; index?:number}) {
  const [imageError,setImageError]=useState(false);
  const item=artwork[cover];
  return (
    <div className={"art art-"+cover}>
      {item && !imageError ? (
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(max-width: 700px) 100vw, 50vw"
          style={{objectFit:"cover"}}
          onError={()=>setImageError(true)}
        />
      ) : (
        <>
          <span className="art-label">ANGEL SOLUTION / CONCEPT</span>
          <div className="art-orb"/>
          <div className="art-window">
            <div className="art-window-top"><span/><span/><span/><b>ANGEL / CONCEPT</b></div>
            <div className="art-window-body">
              <div className="art-window-side"><i/><i/><i/><i/></div>
              <div className="art-window-content">
                <i/>
                <div className="art-boxes"><i/><i/><i/></div>
                <div className="art-lines"/>
              </div>
            </div>
          </div>
          <span className="art-counter">{String(index||1).padStart(2,"0")} / CONCEPT</span>
        </>
      )}
    </div>
  );
}
