create table if not exists inquiries (
 id bigint generated always as identity primary key,
 name varchar(100) not null,
 email varchar(200) not null,
 phone varchar(30),
 service varchar(100) not null,
 budget varchar(100),
 project varchar(120),
 message text not null,
 status varchar(20) not null default 'new' check (status in ('new','contacted','quoted','closed')),
 consent_at timestamptz not null,
 created_at timestamptz not null default now(),
 updated_at timestamptz not null default now()
);
create index if not exists inquiries_created_idx on inquiries(created_at desc);

create table if not exists portfolio_projects(
 id bigint generated always as identity primary key,
 slug varchar(90) unique not null,
 title varchar(140) not null,
 category varchar(80) not null default 'OTHER',
 description varchar(400) not null,
 detail text not null,
 features jsonb not null default '[]'::jsonb,
 cover varchar(60) not null default 'dashboard',
 image_url text not null default '',
 gallery jsonb not null default '[]'::jsonb,
 demo_url text not null default '',
 status varchar(80) not null default '컨셉 쇼케이스',
 featured boolean not null default false,
 published boolean not null default false,
 sort_order integer not null default 100,
 created_at timestamptz not null default now(),
 updated_at timestamptz not null default now()
);
create index if not exists portfolio_projects_public_idx on portfolio_projects(published,sort_order,id desc);
