<script lang="ts">
	import { signIn } from '@auth/sveltekit/client';
	import * as yup from 'yup';

	import { Form } from 'svelte-forms-lib';
	import Input from '$components/form/Input.svelte';
	import Button from '$components/form/Button.svelte';

	import { page } from '$app/stores';

	import { onMount } from 'svelte';
	import toast from 'svelte-french-toast';

	onMount(() => {
		if ($page.url.searchParams.get('error') === 'CredentialsSignin') {
			toast.error('El email o la contraseña son incorrectos');
		}
	});

	const formProps = {
		initialValues: {
			email: '',
			password: ''
		},
		validationSchema: yup.object().shape({
			email: yup.string().email().required(),
			password: yup.string().required()
		}),
		onSubmit: async (values: any) => {
			// Todo: Handle errors
			await signIn('credentials', {
				...values
			});
		}
	};
</script>

<div class="p-4 max-w-lg gap-8 mx-auto flex items-center h-full justify-center flex-col">
	<!-- TITLE -->
	<h1 class="text-2xl md:text-3xl lg:text-4xl font-semibold">Iniciar Sesión</h1>

	<!-- FORM -->
	<Form class="w-full flex flex-col gap-4" {...formProps}>
		<!-- EMAIL -->
		<Input label="Email" type="text" name="email" placeholder="Ingresa tu email" />
		<!-- PASSWORD -->
		<Input label="Contraseña" type="password" name="password" placeholder="Ingresa tu contraseña" />
		<!-- SUBMIT -->
		<Button primary className="mt-4" type="submit">Entrar</Button>
	</Form>

	<hr class="border-1 rounded-lg w-full bg-gray-500" />

	<div class="flex flex-col gap-4">
		<p>
			¿Eres nuevo aquí?
			<a href="/login" class="underline hover:text-gray-700 font-medium">Regístrate</a>
		</p>
	</div>
</div>
