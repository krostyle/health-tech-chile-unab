"use client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  names: z.string().min(2, {
    message: "Los nombres deben tener al menos 2 caracteres.",
  }),
  paternalLastName: z.string().min(2, {
    message: "El apellido paterno debe tener al menos 2 caracteres.",
  }),
  maternalLastName: z.string().min(2, {
    message: "El apellido materno debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, ingrese un correo electrónico válido.",
  }),
  rut: z.string().regex(/^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/, {
    message: "Por favor, ingrese un RUT válido (formato: 12.345.678-9).",
  }),
  healthInsurance: z.string({
    required_error: "Por favor seleccione una previsión de salud.",
  }),
  password: z.string().min(8, {
    message: "La contraseña debe tener al menos 8 caracteres.",
  }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
});

const healthInsuranceOptions = [
  { value: "fonasa", label: "Fonasa" },
  { value: "banmedica", label: "Banmédica" },
  { value: "colmena", label: "Colmena" },
  { value: "cruzblanca", label: "Cruz Blanca" },
  { value: "vidatres", label: "Nueva Masvida" },
  { value: "consalud", label: "Consalud" },
];

export default function RegisterPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      names: "",
      paternalLastName: "",
      maternalLastName: "",
      email: "",
      rut: "",
      healthInsurance: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Aquí iría la lógica de registro (sin implementar por ahora)
    console.log(values);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-8 flex justify-center items-center">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <h1 className="text-2xl font-semibold mb-4">Crear una nueva cuenta</h1>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="names"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombres</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex space-x-4">
                  <FormField
                    control={form.control}
                    name="paternalLastName"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Apellido paterno</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="maternalLastName"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Apellido materno</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Correo electrónico</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="rut"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>RUT</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="12.345.678-9" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="healthInsurance"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Previsión de Salud</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione su previsión de salud" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {healthInsuranceOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contraseña</FormLabel>
                      <FormControl>
                        <Input type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirmar Contraseña</FormLabel>
                      <FormControl>
                        <Input type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">Registrarse</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
