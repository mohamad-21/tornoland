"use client";

import { navlinks } from "@/lib/constants";
import { Button } from "@radix-ui/themes";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

export default function Header() {
	const [showSidebar, setShowSidebar] = useState(false);
	const sess = useSession();
	const loggedIn = sess?.data?.user;

	return (
		<>
			<header className="sticky top-0 left-0 right-0 w-full py-4 px-6 bg-background/40 backdrop-blur-lg">
				<nav className="flex items-center gap-6 w-full max-w-4xl mx-auto">
					<Link href="/">
						<img src="/logo.svg" className="rounded-full" alt="tornoland" width={35} />
					</Link>
					<ul className="hidden md:flex items-center gap-4">
						{navlinks.map(link => (
							<li key={link.href}>
								<Link href={link.href}>{link.title}</Link>
							</li>
						))}
					</ul>
					<div className="mr-auto flex items-center gap-6">
						{!loggedIn ? (
							<>
								<Link href="/login">ورود</Link>
								<Link href="#">
									<Button>ثبت نام</Button>
								</Link>
							</>
						) : (
							<Link href="#" onClick={async () => await signOut()} className="inline-flex items-center gap-2 hover:text-red-400">
								<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 1C2.44771 1 2 1.44772 2 2V13C2 13.5523 2.44772 14 3 14H10.5C10.7761 14 11 13.7761 11 13.5C11 13.2239 10.7761 13 10.5 13H3V2L10.5 2C10.7761 2 11 1.77614 11 1.5C11 1.22386 10.7761 1 10.5 1H3ZM12.6036 4.89645C12.4083 4.70118 12.0917 4.70118 11.8964 4.89645C11.7012 5.09171 11.7012 5.40829 11.8964 5.60355L13.2929 7H6.5C6.22386 7 6 7.22386 6 7.5C6 7.77614 6.22386 8 6.5 8H13.2929L11.8964 9.39645C11.7012 9.59171 11.7012 9.90829 11.8964 10.1036C12.0917 10.2988 12.4083 10.2988 12.6036 10.1036L14.8536 7.85355C15.0488 7.65829 15.0488 7.34171 14.8536 7.14645L12.6036 4.89645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
								خروج
							</Link>
						)}
						<div className="hidden md:flex items-center justify-center">
							<ThemeToggle />
						</div>
						<button className="flex md:hidden" onClick={() => setShowSidebar(!showSidebar)}>
							<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
						</button>
					</div>
				</nav>
			</header>
			<aside className={`fixed top-0 right-0 ${showSidebar ? "translate-x-0" : "translate-x-full"} bottom-0 py-12 px-6 w-full max-w-[300px] flex flex-col gap-12 bg-zinc-900 z-50`}>
				<div className="flex items-center justify-between gap-3">
					<h2 className="md:text-3xl text-2xl flex items-center gap-3">
						<img src="/logo.svg" width={35} alt="tornoland" />
						تورنولند
					</h2>
					<ThemeToggle />
				</div>

				<nav className="flex flex-col gap-6">
					<ul className="flex flex-col gap-4">
						{navlinks.map(link => (
							<li key={link.href}>
								<Link href={link.href} onClick={() => setShowSidebar(false)}>{link.title}</Link>
							</li>
						))}
					</ul>
					<div className="flex items-center gap-4">
						{!loggedIn ? (
							<>
								<Link href="/login" onClick={() => setShowSidebar(false)}>ورود</Link>
								<Link href="#" onClick={() => setShowSidebar(false)}>
									<Button>ثبت نام</Button>
								</Link>
							</>
						) : (
							<Link href="#" onClick={async () => {
								await signOut()
								setShowSidebar(false);
							}} className="inline-flex items-center gap-2 hover:text-red-400">
								<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 1C2.44771 1 2 1.44772 2 2V13C2 13.5523 2.44772 14 3 14H10.5C10.7761 14 11 13.7761 11 13.5C11 13.2239 10.7761 13 10.5 13H3V2L10.5 2C10.7761 2 11 1.77614 11 1.5C11 1.22386 10.7761 1 10.5 1H3ZM12.6036 4.89645C12.4083 4.70118 12.0917 4.70118 11.8964 4.89645C11.7012 5.09171 11.7012 5.40829 11.8964 5.60355L13.2929 7H6.5C6.22386 7 6 7.22386 6 7.5C6 7.77614 6.22386 8 6.5 8H13.2929L11.8964 9.39645C11.7012 9.59171 11.7012 9.90829 11.8964 10.1036C12.0917 10.2988 12.4083 10.2988 12.6036 10.1036L14.8536 7.85355C15.0488 7.65829 15.0488 7.34171 14.8536 7.14645L12.6036 4.89645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
								خروج
							</Link>
						)}
					</div>
				</nav>
			</aside>
			<div className={`absolute inset-0 ${showSidebar ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} bg-background/60 backdrop-blur-sm`} onClick={() => setShowSidebar(false)} />
		</>
	)
}
