"use client";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Menu,
  X,
  Home,
  Pill,
  Stethoscope,
  FileText,
  Users,
  ChevronDown,
  ChevronUp,
  Activity,
  Syringe,
  ClipboardList,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PatientPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const patientName = "Juan Pérez"; // Esto debería venir de los datos del usuario autenticado

  const menuItems = [
    { name: "Resumen", href: "/patient", icon: Home },
    {
      name: "Medicina",
      href: "/patient/medicine",
      icon: Pill,
      subItems: [
        { name: "Exámenes", href: "/patient/medicine/exams", icon: Activity },
        {
          name: "Indicadores",
          href: "/patient/medicine/indicators",
          icon: Activity,
        },
        { name: "Vacunas", href: "/patient/medicine/vaccines", icon: Syringe },
        {
          name: "Encuestas",
          href: "/patient/medicine/surveys",
          icon: ClipboardList,
        },
      ],
    },
    {
      name: "Atenciones",
      href: "/patient/attentions",
      icon: Stethoscope,
      subItems: [
        {
          name: "Citaciones",
          href: "/patient/attentions/appointments",
          icon: FileText,
        },
        {
          name: "Historial",
          href: "/patient/attentions/history",
          icon: FileText,
        },
        {
          name: "Encuesta",
          href: "/patient/attentions/survey",
          icon: ClipboardList,
        },
      ],
    },
    { name: "Informes", href: "/patient/reports", icon: FileText },
    { name: "Cargas Familiares", href: "/patient/dependents", icon: Users },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSubMenu = (name: string) => {
    if (openSubMenu === name) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(name);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow">
        <aside
          className={`${
            isMenuOpen ? "w-64" : "w-16"
          } bg-white border-r transition-all duration-300 overflow-hidden flex flex-col`}
        >
          <div className="flex items-center p-4 border-b">
            <Button
              variant="ghost"
              size="icon"
              className="mr-2"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
            {isMenuOpen && (
              <Link href="/patient" className="text-xl font-bold text-blue-600">
                HealthTech <span className="text-green-500">Chile</span>
              </Link>
            )}
          </div>
          <nav className="flex-grow p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.name}>
                  {item.subItems ? (
                    <div>
                      <button
                        onClick={() => toggleSubMenu(item.name)}
                        className="flex items-center w-full p-2 hover:bg-gray-100 rounded whitespace-nowrap"
                      >
                        <item.icon
                          className={`${
                            isMenuOpen ? "h-5 w-5 mr-2" : "h-8 w-8"
                          }`}
                        />
                        {isMenuOpen && (
                          <>
                            <span className="flex-grow text-left">
                              {item.name}
                            </span>
                            {openSubMenu === item.name ? (
                              <ChevronUp className="h-4 w-4" />
                            ) : (
                              <ChevronDown className="h-4 w-4" />
                            )}
                          </>
                        )}
                      </button>
                      {isMenuOpen && openSubMenu === item.name && (
                        <ul className="ml-4 mt-2 space-y-2">
                          {item.subItems.map((subItem) => (
                            <li key={subItem.name}>
                              <Link href={subItem.href}>
                                <span className="flex items-center p-2 hover:bg-gray-100 rounded whitespace-nowrap">
                                  <subItem.icon className="h-4 w-4 mr-2" />
                                  <span>{subItem.name}</span>
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link href={item.href}>
                      <span className="flex items-center p-2 hover:bg-gray-100 rounded whitespace-nowrap">
                        <item.icon
                          className={`${
                            isMenuOpen ? "h-5 w-5 mr-2" : "h-8 w-8"
                          }`}
                        />
                        <span className={`${isMenuOpen ? "inline" : "hidden"}`}>
                          {item.name}
                        </span>
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          {isMenuOpen && (
            <div className="p-4 border-t">
              <Link href="/patient/profile">
                <Button className="w-full justify-start">
                  <span className="truncate">{patientName}</span>
                </Button>
              </Link>
            </div>
          )}
        </aside>
        <main className="flex-grow p-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-gray-800">Resumen del Paciente</h1>
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                Agendar Telemedicina
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="col-span-1 md:col-span-2 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-blue-700">Información Personal</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4 p-6">
                  <div>
                    <p className="text-sm text-gray-500">Nombre</p>
                    <p className="font-semibold">{patientName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Edad</p>
                    <p className="font-semibold">35 años</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Género</p>
                    <p className="font-semibold">Masculino</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Grupo Sanguíneo</p>
                    <p className="font-semibold">O+</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-green-50">
                  <CardTitle className="text-green-700">Signos Vitales</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <p><span className="text-sm text-gray-500">Presión Arterial:</span> <span className="font-semibold">120/80 mmHg</span></p>
                    <p><span className="text-sm text-gray-500">Frecuencia Cardíaca:</span> <span className="font-semibold">72 bpm</span></p>
                    <p><span className="text-sm text-gray-500">Temperatura:</span> <span className="font-semibold">36.5°C</span></p>
                    <p><span className="text-sm text-gray-500">Peso:</span> <span className="font-semibold">70 kg</span></p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-purple-50">
                  <CardTitle className="text-purple-700">Próximas Citas</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-2">
                    <li className="flex justify-between items-center">
                      <span className="text-sm">15/05/2023</span>
                      <span className="font-semibold">Control General</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-sm">22/05/2023</span>
                      <span className="font-semibold">Examen de Sangre</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-yellow-50">
                  <CardTitle className="text-yellow-700">Medicamentos Actuales</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-2">
                    <li>
                      <p className="font-semibold">Paracetamol</p>
                      <p className="text-sm text-gray-500">500mg cada 8 horas</p>
                    </li>
                    <li>
                      <p className="font-semibold">Omeprazol</p>
                      <p className="text-sm text-gray-500">20mg una vez al día</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-red-50">
                  <CardTitle className="text-red-700">Últimos Exámenes</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-2">
                    <li className="flex justify-between items-center">
                      <span className="text-sm">10/04/2023</span>
                      <span className="font-semibold">Hemograma completo</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-sm">05/03/2023</span>
                      <span className="font-semibold">Perfil lipídico</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
