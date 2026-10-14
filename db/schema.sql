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
