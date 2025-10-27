import { tournamentsTable } from "@/db/schema";
import { Badge, DataList } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

type Props = {
	tours: (typeof tournamentsTable.$inferSelect & { image_url: string })[]
	limited?: boolean
}

export default function TourList({ tours, limited = false }: Props) {
	return (
		<div className="flex flex-col gap-10">
			<div className="flex items-center justify-between">
				<h2 className="text-3xl">لیست تورنومنت ها</h2>
				{limited && (
					<Link href="/tournaments" className="inline-flex items-center gap-1 text-zinc-400">
						تمام تورنومنت ها
						<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 6l-6 6l6 6" /></svg>
					</Link>
				)}
			</div>
			<ul className="grid sm:grid-cols-2 grid-cols-1 gap-4">
				{tours.map(tour => (
					<li key={tour.id}>
						<Link href={`/tournaments/${tour.id}`} className="dark:bg-[var(--jade-2)] bg-[var(--jade-4)] border-2 border-[var(--jade-6)] p-4 flex flex-col gap-4 rounded-lg">
							<div>
								<img src={tour.image_url} alt={tour.name} className="w-[100px] h-[100px]" />
							</div>
							<DataList.Root orientation={{ initial: "vertical", sm: "horizontal" }}>
								<DataList.Item>
									<DataList.Label>نام مسابقه</DataList.Label>
									<DataList.Value>
										<Badge color="jade" variant="soft" radius="full">
											{tour.name}
										</Badge>
									</DataList.Value>
								</DataList.Item>

								<DataList.Item>
									<DataList.Label>وضعیت</DataList.Label>
									<DataList.Value>
										{tour.status === "pending" && (
											<Badge color="amber" variant="soft" radius="full">
												در انتظار شروع
											</Badge>
										)}

										{tour.status === "progress" && (
											<Badge color="jade" variant="soft" radius="full">
												درحال برگزاری
											</Badge>
										)}

										{tour.status === "finished" && (
											<Badge color="red" variant="soft" radius="full">
												پایان یافته
											</Badge>
										)}
									</DataList.Value>
								</DataList.Item>
							</DataList.Root>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
