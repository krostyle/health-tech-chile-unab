import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="w-full bg-gray-100 shadow-md">
      <div className="max-w-5xl mx-auto py-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            HealthTech <span className="text-green-500">Chile</span>
          </Link>
          <div>
            <Link href="/login" className="mr-4">
              <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-100">Iniciar sesión</Button>
            </Link>
            <Link href="/register">
              <Button className="bg-green-500 hover:bg-green-600 text-white">Registrarse</Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
