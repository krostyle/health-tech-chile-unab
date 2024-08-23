import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-24">
        <section className="text-center mb-20">
          <h1 className="text-4xl font-bold mb-4">
            Bienvenido a Healtech Chile
          </h1>
          <p className="text-xl mb-8">
            La plataforma de telemedicina líder en Chile
          </p>
          <Link href="/register">
            <Button size="lg" className="bg-green-500 hover:bg-green-600">
              Comienza ahora
            </Button>
          </Link>
        </section>

        <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Consultas en línea</CardTitle>
              <CardDescription>
                Accede a atención médica desde la comodidad de tu hogar
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Seguimiento continuo</CardTitle>
              <CardDescription>
                Monitoreo constante para todos nuestros pacientes
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Profesionales calificados</CardTitle>
              <CardDescription>
                Conecta con los mejores especialistas del país
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Inteligencia Artificial</CardTitle>
              <CardDescription>
                Diagnósticos preliminares asistidos por IA para una atención más
                rápida
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Expediente médico digital</CardTitle>
              <CardDescription>
                Acceso seguro a tu historial médico desde cualquier lugar
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recordatorios inteligentes</CardTitle>
              <CardDescription>
                Nunca olvides una cita o medicación con nuestro sistema de
                alertas
              </CardDescription>
            </CardHeader>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
