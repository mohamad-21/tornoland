import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [
		Credentials({
			credentials: {
				email: {},
				password: {}
			},
			async authorize(credentials, request) {
				try {
					const resp = await fetch(`${process.env.BASE_URL}/api/users/find?email=${credentials.email}&password=${credentials.password}`);
					const user: User = await resp.json();
					if (!user) {
						throw new Error("User not found");
					}
					return {
						id: user.id!,
						name: user.name,
						email: user.email,
						image: null
					};
				} catch (err: any) {
					return null;
				}
			}
		})
	],
})