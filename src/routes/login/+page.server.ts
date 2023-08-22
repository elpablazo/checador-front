import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals, params }) => {
	// Obtenemos la sesión del usuario mediante auth.js
	const session = await locals.getSession();

	// Si el usuario ya está logueado, redirigimos a la página de inicio
	if (session?.user) {
		throw redirect(307, '/dashboard');
	}

	return {
		session
	};
}) satisfies PageServerLoad;
