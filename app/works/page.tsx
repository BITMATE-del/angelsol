import type {Metadata} from "next";import {publicProjects} from "@/lib/projects";import WorksGallery from "./works-gallery";
export const metadata:Metadata={title:"프로젝트 쇼룸"};
export const revalidate = 60;
export default async function Works(){const projects=await publicProjects();return <main className="shell"><div className="page-heading"><span className="eyebrow">OUR PROJECTS</span><h1>우리가 만드는 것들.</h1><p>아이디어에서 실제 기능으로 이어지는 맞춤형 디지털 프로젝트를 소개합니다. 컨셉 시안은 실제 납품 사례와 구분해 표기합니다.</p></div><WorksGallery initial={projects}/></main>}