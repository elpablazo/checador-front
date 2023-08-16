import { SvelteKitAuth } from '@auth/sveltekit';
import Credentials from '@auth/core/providers/credentials';
import axios from 'axios';
import { payloadApi } from '$lib/payloadApi';

export const handle = SvelteKitAuth({
	providers: [],
	pages: {
		signIn: '/login'
	}
});
