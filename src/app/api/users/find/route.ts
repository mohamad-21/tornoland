import { db } from "@/db";
import { usersTable } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export const dynamnic = "force-dynamic";

export async function GET(req: NextRequest) {
	const email = req.nextUrl.searchParams.get("email") as string;
	const password = req.nextUrl.searchParams.get("password") as string;

	const [user] = await db.select().from(usersTable).where(
		and(
			eq(usersTable.email, email),
			eq(usersTable.password, password)
		)
	);

	if (!user) {
		return NextResponse.json({
			ok: false,
			message: "User not found"
		}, { status: 404 });
	}

	return NextResponse.json({
		ok: true,
		...user
	});
}