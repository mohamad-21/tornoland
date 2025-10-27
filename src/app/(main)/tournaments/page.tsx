import { getToursWithAvatar } from "@/actions";
import TourList from "@/components/TourList";

export default async function Tours() {
	const tours = await getToursWithAvatar();

	return (
		<div className="flex flex-col gap-10">
			<TourList tours={tours} />
		</div>
	)
}
