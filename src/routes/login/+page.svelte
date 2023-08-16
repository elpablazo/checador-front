<script lang="ts">
	import { Form } from 'svelte-forms-lib';
	import * as yup from 'yup';
	import { signIn } from '@auth/sveltekit/client';

	import Input from '$components/form/Input.svelte';
	import Button from '$components/form/Button.svelte';

	const formProps = {
		initialValues: {
			email: '',
			password: ''
		},
		validationSchema: yup.object().shape({
			email: yup.string().email().required(),
			password: yup.string().required()
		}),
		onSubmit: (values: any) => {
			signIn('credentials', {
				email: values.email,
				password: values.password
			});
		}
	};
</script>

<div class="p-4 max-w-lg gap-8 mx-auto flex items-center h-full justify-center flex-col">
	<!-- FORM TITLE -->
	<h1 class="text-2xl md:text-3xl lg:text-4xl font-semibold">Entra a Passport</h1>

	<!-- FORM -->
	<Form class="w-full flex flex-col gap-4" {...formProps}>
		<!-- EMAIL -->
		<Input label="Email" type="text" name="email" placeholder="Ingresa tu email" />
		<!-- PASSWORD -->
		<Input label="Contraseña" type="password" name="password" placeholder="Ingresa tu contraseña" />
		<!-- SUBMIT -->
		<Button primary className="mt-4" type="submit">Iniciar sesión</Button>
	</Form>

	<hr class="border-1 rounded-lg w-full bg-gray-500" />

	<!-- CREA UNA CUENTA  -->
	<div class="flex flex-col gap-4">
		<p>
			¿Nuevo aquí?
			<a href="/register" class="underline hover:text-gray-700 font-medium">Crea una cuenta</a>
		</p>
	</div>
</div>
