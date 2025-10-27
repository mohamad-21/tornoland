import { Button, Heading } from "@radix-ui/themes";
import Link from "next/link";

export default function Hero() {
	return (
		<div className="flex md:items-center md:flex-row flex-col sm:gap-10 gap-6 pb-20">
			<div>
				<img src="/images/tornoland-banner.jpg" className="rounded-xl" alt="tornoland-banner" />
			</div>
			<div className="flex flex-col gap-10 max-w-xl">
				<div className="flex flex-col gap-2">
					<Heading size={{ initial: "5", sm: "7" }} className="sm:!leading-12">تورنولند. جایی که هیجان رقابت آغاز می شود!</Heading>
					<p className="text-zinc-400">در تورنولند می‌تونی در تورنومنت‌های جذاب شرکت کنی، جایزه بگیری و مهارتت رو به چالش بکشی.</p>
				</div>
				<div className="flex items-center gap-5">
					<Link href="/tournaments">
						<Button size="3">شروع کنید</Button>
					</Link>
					<Link href="#">بیشتر بدانید</Link>
				</div>
			</div>
		</div>
	)
}
