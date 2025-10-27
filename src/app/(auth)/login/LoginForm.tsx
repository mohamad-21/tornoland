"use client";

import { loginWithCredentials } from "@/actions";
import { Form, FormControl, FormField, FormLabel, FormMessage, FormSubmit } from "@radix-ui/react-form";
import { Button, TextField } from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState, useTransition } from "react";

export default function LoginForm() {
	const [error, setError] = useState("");
	const [isPending, startTransition] = useTransition();
	const router = useRouter();
	const { update } = useSession();

	async function onSubmit(e: FormEvent<HTMLFormElement>) {
		setError("");
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		startTransition(async () => {
			const res = await loginWithCredentials(data);

			if (res.err) {
				setError(res.err);
			}
		})
	}

	return (
		<div className="w-full max-w-sm mx-auto flex flex-col items-center justify-center pt-5">
			<div className="mb-10 flex items-center justify-center gap-6 flex-col">
				<img src="/logo.svg" alt="tornoland" width={70} />
				<h2 className="text-2xl">ورود به حساب</h2>
			</div>
			<Form className="w-full space-y-4" onSubmit={onSubmit}>
				<FormField name="email" className="flex flex-col gap-2">
					<FormLabel>ایمیل</FormLabel>
					<FormControl asChild>
						<TextField.Root type="email" disabled={isPending} required className="!h-10" placeholder="ایمیل خود را وارد کنید">
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


				<FormField name="password" className="flex flex-col gap-2">
					<FormLabel>رمز عبور</FormLabel>
					<FormControl asChild>
						<TextField.Root type="password" disabled={isPending} required className="!h-10" placeholder="رمز عبور خود را وارد کنید">
							<TextField.Slot></TextField.Slot>
						</TextField.Root>
					</FormControl>
					<FormMessage
						className="text-[13px] text-red-300"
						match="valueMissing"
					>
						لطفا رمز عبور را وارد کنید
					</FormMessage>
				</FormField>

				{error && (
					<p
						className="text-[13px] text-red-300"
					>
						{error}
					</p>
				)}

				<FormSubmit asChild>
					<Button variant="surface" loading={isPending} className="!w-full !py-5">ورود به حساب کاربری</Button>
				</FormSubmit>
			</Form>

			<button className="flex items-center gap-2 text-sm fixed left-10 top-10" onClick={() => router.back()}>
				بازگشت
				<svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
			</button>
		</div>
	)
}
