import 'dotenv/config';
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { usersTable, gamesTable, tournamentsTable } from "./schema";
import { eq } from "drizzle-orm";

const poolConnection = mysql.createPool({
	host: "localhost",
	user: "root",
	database: "tornoland",
});

export const db = drizzle({ client: poolConnection });


async function main() {
	const user: typeof usersTable.$inferInsert[] = [
		{
			name: 'mohamad21',
			email: 'mohamad21@gmail.com',
			password: "123"
		}, {
			name: 'alex',
			email: 'alex@gmail.com',
			password: "123"
		},
	];
	// await db.insert(usersTable).values(user);


	const newGames: typeof gamesTable.$inferInsert[] = [
		{
			name: "Call Of Duty Mobile",
			image_url: "https://tornoland.com/storage/namegames/pkcy9L70C96ep4kTT5tiXIxjUF9yDJVD5aA3LzlS.png",
			description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			type: "action"
		},
		{
			name: "Free Fire",
			image_url: "https://tornoland.com/storage/namegames/beZgE0ofyObv7BK6cnINN34gQTXhQdCBfdnJyOtt.png",
			description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			type: "action"
		},
		{
			name: "Pubg mobile",
			image_url: "https://tornoland.com/storage/namegames/062E50Yg4d9rATCYIvhvViNOLEA1MruGZvWraEyR.png",
			description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			type: "action"
		},
		{
			name: "CS2",
			image_url: "https://tornoland.com/storage/namegames/6fSdQjBeYx9aGi5hyEpctc3qx2vqhRIkTvNqk39R.png",
			description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			type: "action"
		},
		{
			name: "FC26",
			image_url: "https://tornoland.com/storage/namegames/NCMUxApCtKcbv2ZosPblirE1drV4K0Vrx0a7rX8l.png",
			description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			type: "sport"
		},
		{
			name: "Dota2",
			image_url: "https://tornoland.com/storage/namegames/MdqjjApA7BOsYwjBuSu5hBX8GOlW9b6hlyD23Oza.png",
			description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			type: "action"
		},
	]


	const tourStartDate = new Date();
	tourStartDate.setDate(tourStartDate.getDate() + 3);

	const newTours: typeof tournamentsTable.$inferInsert[] = [
		{
			id: 22,
			name: 'دور سوم مسابقات اف سی ۲۶',
			type: 'offline',
			status: 'finished',
			duration: 2200,
			entry_fee: '150000',
			award_fee: '2500000',
			start_date: new Date("2025-09-24"),
			game_id: 5,
			player_id: 1,
		},
		{
			id: 21,
			name: 'دور دوم مسابقات اف سی ۲۶',
			type: 'online',
			status: 'finished',
			duration: 2200,
			entry_fee: '150000',
			award_fee: '2500000',
			start_date: new Date("2025-09-24"),
			game_id: 5,
			player_id: 1,
		},
		{
			id: 20,
			name: 'دور دوم مسابقات کالاف موبایل',
			type: 'online',
			status: 'finished',
			duration: 2200,
			entry_fee: '150000',
			award_fee: '2500000',
			start_date: new Date("2025-09-24"),
			game_id: 1,
			player_id: 1,
		},
		{
			id: 19,
			name: 'دور اول مسابقات کالاف موبایل',
			type: 'online',
			status: 'progress',
			duration: 2200,
			entry_fee: '150000',
			award_fee: '2500000',
			start_date: new Date("2025-09-24"),
			game_id: 1,
			player_id: 1,
		}
	]

	// await db.insert(gamesTable).values(newGames);
	// await db.insert(tournamentsTable).values(newTours);

	// await db
	// 	.update(usersTable)
	// 	.set({
	// 		name: "mohamad",
	// 	})
	// 	.where(eq(usersTable.email, user.email));
	// console.log('User info updated!')
	// await db.delete(usersTable).where(eq(usersTable.email, user.email));
	// console.log('User deleted!')
}
main();