"use client";

// START FORM IMPORTS - This group need to be: npm install zod @hookform/resolvers react-hook-form
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
// ============================ END

import { Section } from "@/components/common/Section";

// ShadCN Components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupTextarea, } from "@/components/ui/input-group";
import { Send } from "lucide-react";
import { toast } from "sonner";

const formSchema = z.object({
	name: z.string().min(2, { message: "Name must be at least 2 characters." }),
	email: z.string().email({ message: "Invalid email address." }),
	message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500, { message: "Message must be at most 500 characters." }),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
	const form = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
			},
		});

	const onSubmit = async (data: FormData) => {
		console.log("Form submitted:", data);
		await new Promise((resolve) => setTimeout(resolve, 1000));
		toast.success("Sent successfully!");
		form.reset();
	};

	return (
		<Section className="min-h-screen">
			<div className="grid lg:grid-cols-2 lg:gap-24 gap-12 items-start pt-8">
				<div className="space-y-6">
					<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
						Let's Connect
					</h1>
					<p className="text-muted-foreground text-lg md:text-xl">
						Have a project in mind or just want to say hi? Feel free to reach out! I'm always open to discussing new ideas and opportunities.
					</p>

					<div className="space-y-6 pt-8">
						<div className="flex items-start gap-4">
							<div className="mt-1">
								<p className="font-semibold text-foreground">Email</p>
								<p className="text-muted-foreground">gasolina.krodo@gmail.com</p>
							</div>
						</div>
						<div className="flex items-start gap-4">
							<div>
								<p className="font-semibold text-foreground">GitHub</p>
								<p className="text-muted-foreground">@Krodogas</p>
							</div>
						</div>
					</div>
				</div>

				<div className="w-full bg-muted/30 p-8 rounded-lg border border-border">
					<h3 className="text-lg font-semibold text-foreground mb-6">Send me a message</h3>
					<form id="contact-form" onSubmit={form.handleSubmit(onSubmit)}>
						<FieldGroup className="space-y-6">
							<Controller
								name="name"
								control={form.control}
								render={({ field, fieldState }) => (
									<Field data-invalid={fieldState.invalid}>
										<FieldLabel htmlFor="name">Name</FieldLabel>
										<Input
											{...field}
											id="name"
											aria-invalid={fieldState.invalid}
											placeholder="Enter your name"
											autoComplete="name"
										/>
										{fieldState.invalid && (
											<FieldError errors={[fieldState.error]} />
										)}
									</Field>
								)}
							/>

							<Controller
								name="email"
								control={form.control}
								render={({ field, fieldState }) => (
									<Field data-invalid={fieldState.invalid}>
										<FieldLabel htmlFor="email">Email</FieldLabel>
										<Input
											{...field}
											id="email"
											type="email"
											aria-invalid={fieldState.invalid}
											placeholder="Enter your email"
											autoComplete="email"
										/>
										{fieldState.invalid && (
											<FieldError errors={[fieldState.error]} />
										)}
									</Field>
								)}
							/>

							<Controller
								name="message"
								control={form.control}
								render={({ field, fieldState }) => (
									<Field data-invalid={fieldState.invalid}>
										<FieldLabel htmlFor="message">Message</FieldLabel>
										<InputGroup>
											<InputGroupTextarea
												{...field}
												id="message"
												placeholder="Your message"
												rows={5}
												className="min-h-24 resize-none"
												aria-invalid={fieldState.invalid}
											/>
											<InputGroupAddon align="block-end">
												<InputGroupText className="tabular-nums text-xs">
													{field.value.length}/500
												</InputGroupText>
											</InputGroupAddon>
										</InputGroup>
										{fieldState.invalid && (
											<FieldError errors={[fieldState.error]} />
										)}
									</Field>
								)}
							/>

							<Button 
								type="submit" 
								form="contact-form" 
								className="w-full group relative overflow-hidden bg-foreground text-background hover:bg-foreground/90 font-semibold py-6" 
								disabled={form.formState.isSubmitting}
							>
								<span className="flex items-center justify-center gap-2">
									{form.formState.isSubmitting ? (
										<>Sending...</>
									) : (
										<>
											Send Message
											<Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
										</>
									)}
								</span>
							</Button>
						</FieldGroup>
					</form>
				</div>
			</div>
		</Section>
	);
}
