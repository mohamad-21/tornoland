"use client";

import { joinToTour } from "@/actions";
import { gamesTable, tournamentsTable, usersTable } from "@/db/schema";
import { Badge, Button, DataList, Tabs } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

type Props = {
	params: Promise<{ id: string }>
	tour: typeof tournamentsTable.$inferSelect
	user: typeof usersTable.$inferSelect | null
	game: typeof gamesTable.$inferSelect
	userIsJoined: boolean
	tourPlayers: typeof usersTable.$inferSelect[]
}

export default function TourData({ params, tour, user, game, userIsJoined, tourPlayers }: Props) {
	const router = useRouter();

	async function onJoinTour() {
		if (userIsJoined) return;
		if (!user) {
			return router.replace("/login");
		}

		await joinToTour({ tour_id: tour.id, player_id: user.id })
			.then(() => {
				router.refresh()
			});
	}

	return (
		<div className="flex flex-col gap-25">
			<div className="flex flex-col items-center gap-5">
				<img src={game.image_url} alt={game.name} width={200} />
				<div className="flex flex-col items-center gap-6">
					<h2 className="text-3xl">{tour.name}</h2>
					{tour.status === "pending" && (
						<Button variant={userIsJoined ? "ghost" : "surface"} onClick={onJoinTour}>
							{userIsJoined ? "شما جزو این تورنومنت هستید" : "ثبت نام در تورنومنت"}
						</Button>
					)}
					{tour.status === "progress" && (
						<Button variant="surface" color="amber">
							تورنومنت درحال برگزاری است
						</Button>
					)}
					{tour.status === "finished" && (
						<Button variant="surface" color="crimson">
							تورنومنت به پایان رسیده
						</Button>
					)}
				</div>
			</div>
			<div>
				<h2 className="text-2xl mb-10">جزئیات تورنومنت</h2>
				<Tabs.Root defaultValue="overview" dir="rtl">
					<Tabs.List size="2" className="!text-base">
						<Tabs.Trigger value="overview">اطلاعات مسابقه</Tabs.Trigger>
						<Tabs.Trigger value="players">بازیکنان</Tabs.Trigger>
					</Tabs.List>

					<Tabs.Content value="overview">
						<div className="py-10">
							<DataList.Root className="!text-xl space-y-3">
								<DataList.Item>
									<DataList.Label>بازی مسابقه</DataList.Label>
									<DataList.Value>
										<Badge size="3" color="jade" variant="soft" radius="full">
											{game.name}
										</Badge>
									</DataList.Value>
								</DataList.Item>

								<DataList.Item>
									<DataList.Label>وضعیت</DataList.Label>
									<DataList.Value>
										{tour.status === "pending" && (
											<Badge size="3" color="amber" variant="soft" radius="full">
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

								<DataList.Item>
									<DataList.Label>ورودی مسابقه</DataList.Label>
									<DataList.Value>
										{Intl.NumberFormat("en-us", {
											style: "currency",
											currency: "USD"
										}).format(Number(tour.entry_fee))}
									</DataList.Value>
								</DataList.Item>

								<DataList.Item>
									<DataList.Label>جایزه</DataList.Label>
									<DataList.Value>
										{Intl.NumberFormat("en-us", {
											style: "currency",
											currency: "USD"
										}).format(Number(tour.award_fee))}
									</DataList.Value>
								</DataList.Item>

								<DataList.Item>
									<DataList.Label>مدت زمان</DataList.Label>
									<DataList.Value>
										{Math.ceil(tour.duration / 60)} دقیقه
									</DataList.Value>
								</DataList.Item>

								<DataList.Item>
									<DataList.Label>تاریخ شروع</DataList.Label>
									<DataList.Value>
										{Intl.DateTimeFormat("fa-ir", { dateStyle: "long" }).format(tour.start_date)}
									</DataList.Value>
								</DataList.Item>

								<DataList.Item>
									<DataList.Label>نوع مسابقه</DataList.Label>
									<DataList.Value>
										{tour.type === "online" ? "آنلاین" : "آفلاین"}
									</DataList.Value>
								</DataList.Item>
							</DataList.Root>
						</div>
					</Tabs.Content>

					<Tabs.Content value="players">
						{tourPlayers.length > 0 ? (
							<ul className="py-10 flex flex-col gap-6">
								{tourPlayers.map(player => (
									<li key={player.id} className="flex items-center gap-2">
										<img src={game.image_url} width={50} alt={player.name} />
										<p className="text-xl">{player.name}</p>
									</li>
								))}
							</ul>
						) : (
							<h3 className="text-xl py-10">هنوز بازیکنی در این مسابقه ثبت نام نکرده.</h3>
						)}
					</Tabs.Content>
				</Tabs.Root>
			</div>
		</div>
	)
}
