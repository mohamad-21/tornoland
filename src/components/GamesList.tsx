import { gamesTable } from "@/db/schema";
import Link from "next/link";

interface Props {
	games: (typeof gamesTable.$inferSelect)[]
	limited?: boolean
}

export default function GamesList({ games, limited = false }: Props) {
	return (
		<div className="flex flex-col gap-10">
			<div className="flex items-center justify-between max-sm:flex-col gap-4">
				<h2 className="sm:text-3xl text-2xl">لیست بازی ها</h2>
				{games.length > 0 && limited ? (
					<Link href="/games" className="inline-flex items-center gap-1 text-zinc-400">
						تمام بازی ها
						<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 6l-6 6l6 6" /></svg>
					</Link>
				) : (
					<h3 className="text-zinc-400">فعلا بازی ای وجود نداره</h3>
				)}
			</div>
			{games.length && (
				<ul className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
					{games.map(game => (
						<li key={game.id}>
							<Link href={`/games/${game.id}`} className="flex flex-col items-center justify-center gap-4 py-3 px-5 bg-gray-200 border border-foreground/20 dark:bg-zinc-900 rounded-lg max-w-sm">
								<img src={game.image_url} alt={game.name} className="rounded-lg aspect-square" width={150} />
								<div className="flex flex-col items-center gap-3">
									<h2 className="sm:text-xl text-lg text-foreground">{game.name}</h2>
									<p className="text-sm text-zinc-400 uppercase">{game.type}</p>
								</div>
							</Link>
						</li>
					))}
				</ul>
			)}
		</div >
	)
}
