import { SvelteKitAuth } from '@auth/sveltekit';
import Credentials from '@auth/core/providers/credentials';
import { payloadApi } from '$lib/payloadApi';
import type { Handle } from '@sveltejs/kit';

export const handle = SvelteKitAuth({
	providers: [
		Credentials({
			credentials: {
				email: { label: 'Email', type: 'email' },
				password: { label: 'Password', type: 'password' }
			},
			authorize: async ({ email, password }) => {
				try {
					// Enviamos los datos de login al servidor y obtenemos al usuario
					const { data } = await payloadApi.post('/workers/login', { email, password });

					return {
						id: data?.user?.id,
						email: data?.user?.email,
						image: data?.user?.profilePicture?.url || null,
						name: data?.user?.name,
						token: data?.token,
						expires: data?.exp
					};
				} catch (error: any) {
					return null;
				}
			}
		})
	],
	pages: {
		signIn: '/login',
		error: '/login'
	}
}) satisfies Handle;
