"use client";

import { Form, FormControl, FormField, FormLabel, FormMessage, FormSubmit } from "@radix-ui/react-form";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

export default function Contact() {

	function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
	}

	return (
		<div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-24">
			<div className="flex flex-col gap-10">
				<div>
					<p className="text-3xl inline-flex gap-3 items-center">
						<svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-message-forward"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" /><path d="M13 8l3 3l-3 3" /><path d="M16 11h-8" /></svg>
						فرم تماس
					</p>
					<p className="text-zinc-400 mt-3">پرسش یا پیشنهاد خود را با ما در میان بگذارید</p>
				</div>
				<Form className="max-w-md space-y-4 p-8 bg-zinc-300 dark:bg-zinc-900 rounded-xl" onSubmit={onSubmit}>
					<FormField name="email" className="flex flex-col gap-2">
						<FormLabel>نام</FormLabel>
						<FormControl asChild>
							<TextField.Root type="text" required className="!h-10" placeholder="نام خود را وارد کنید">
								<TextField.Slot></TextField.Slot>
							</TextField.Root>
						</FormControl>
					</FormField>

					<FormField name="email" className="flex flex-col gap-2">
						<FormLabel>ایمیل</FormLabel>
						<FormControl asChild>
							<TextField.Root type="email" required className="!h-10" placeholder="ایمیل خود را وارد کنید">
								<TextField.Slot></TextField.Slot>
							</TextField.Root>
						</FormControl>
						<FormMessage
							className="text-[13px] text-red-300"
							match="typeMismatch"
						>
							لطفا ایمیل معتبر وارد کنید
						</FormMessage>
					</FormField>

					<FormField name="message" className="flex flex-col gap-2">
						<FormLabel>پیام</FormLabel>
						<FormControl asChild>
							<TextArea required className="!h-20" placeholder="پیام خود را اینجا وارد کنید">
							</TextArea>
						</FormControl>
					</FormField>

					<FormSubmit asChild>
						<Button variant="surface" className="!w-full !py-5">ارسال پیام</Button>
					</FormSubmit>
				</Form>
			</div>
			<div className="flex flex-col gap-10">
				<div>
					<p className="text-3xl inline-flex gap-3 items-center">
						<svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 3a1 1 0 0 1 .877 .519l.051 .11l2 5a1 1 0 0 1 -.313 1.16l-.1 .068l-1.674 1.004l.063 .103a10 10 0 0 0 3.132 3.132l.102 .062l1.005 -1.672a1 1 0 0 1 1.113 -.453l.115 .039l5 2a1 1 0 0 1 .622 .807l.007 .121v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 2.824 -2.995l.176 -.005h4z" /></svg>
						اطلاعات تماس
					</p>
					<p className="text-zinc-400 mt-3">از راه های زیر می توانید با ما در ارتباط باشید</p>
				</div>
				<ul className="flex flex-col gap-5">
					<li className="flex items-center gap-3">
						<div className="p-2 bg-blue-400 rounded-full">
							<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
						</div>
						<div className="flex flex-col gap-2">
							<p>ایمیل</p>
							<p className="text-zinc-400">info@tornoland.com</p>
						</div>
					</li>
					<li className="flex items-center gap-3">
						<div className="p-2 bg-blue-400 rounded-full">
							<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 3a1 1 0 0 1 .877 .519l.051 .11l2 5a1 1 0 0 1 -.313 1.16l-.1 .068l-1.674 1.004l.063 .103a10 10 0 0 0 3.132 3.132l.102 .062l1.005 -1.672a1 1 0 0 1 1.113 -.453l.115 .039l5 2a1 1 0 0 1 .622 .807l.007 .121v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 2.824 -2.995l.176 -.005h4z" /></svg>
						</div>
						<div className="flex flex-col gap-2">
							<p>تماس</p>
							<p className="text-zinc-400">۰۲۱-۱۲۳۴۵۶۷۸</p>
						</div>
					</li>
					<li className="flex items-center gap-3">
						<div className="p-2 bg-blue-400 rounded-full">
							<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg>
						</div>
						<div className="flex flex-col gap-2">
							<p>آدرس</p>
							<p className="text-zinc-400">تهران، خیابان آزادی، پلاک ۱۲۳</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	)
}
