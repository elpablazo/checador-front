import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals }) => {
	// Obtenemos la sesión del usuario mediante auth.js
	const session = await locals.getSession();

	// Si no está logueado, redirigimos a la página de login
	if (!session?.user) {
		throw redirect(307, '/login');
	}

	return {
		session
	};
}) satisfies LayoutServerLoad;
