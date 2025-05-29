"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { code: "LC", title: "Lavagem Completa Premium", category: "Luxo", duration: "1h", price: "R$ 90,00" },
  { code: "EN", title: "Enceramento com Cera de Carnaúba", category: "Luxo", duration: "1h30min", price: "R$ 180,00" },
  { code: "PC", title: "Polimento Técnico de Carroceria", category: "Luxo", duration: "2h", price: "R$ 250,00" },
  { code: "HI", title: "Higienização com Ozônio", category: "Luxo", duration: "1h15min", price: "R$ 150,00" },
  { code: "LE", title: "Lavagem + Enceramento Premium", category: "Luxo", duration: "1h30min", price: "R$ 220,00" },
  { code: "VC", title: "Vitrificação de Pintura", category: "Proteção", duration: "4h", price: "R$ 850,00" },
  { code: "CR", title: "Cristalização de Vidros", category: "Proteção", duration: "40min", price: "R$ 120,00" },
  { code: "RH", title: "Revitalização de Couro", category: "Interior", duration: "1h30min", price: "R$ 200,00" }
];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-gray-900">
      <Image src="/logo-estetica-auto.png" alt="Logo" width={120} height={120} className="my-10" />
      <div className="flex gap-4 mb-10">
        <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-4 text-lg rounded-xl shadow-md">Novo Agendamento</Button>
        <Button className="bg-slate-800 hover:bg-slate-900 text-white px-6 py-4 text-lg rounded-xl shadow-md">Minhas Reservas</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-7xl">
        {services.map((service) => (
          <Card key={service.code} className="shadow-lg hover:shadow-xl transition duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gray-900 text-white font-bold w-10 h-10 flex items-center justify-center rounded-full">{service.code}</div>
                <Button className="bg-amber-600 text-white text-sm px-4 py-2 rounded-md">Reservar</Button>
              </div>
              <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-1">Categoria: {service.category}</p>
              <p className="text-sm text-gray-600">Duração: {service.duration}</p>
              <p className="text-sm font-bold text-gray-900 mt-1">Preço: {service.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}