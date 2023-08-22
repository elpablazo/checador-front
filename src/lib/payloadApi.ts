import axios from 'axios';
import { PAYLOAD_API_URL } from '$env/static/private';

export const payloadApi = axios.create({
	baseURL: PAYLOAD_API_URL,
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true
});
