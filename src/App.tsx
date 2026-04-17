/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Wrench, 
  Disc, 
  Droplets, 
  Wind, 
  MapPin, 
  Phone, 
  Clock, 
  Instagram, 
  MessageCircle, 
  ChevronRight, 
  Menu, 
  X, 
  CheckCircle2,
  ShieldCheck,
  Zap,
  Navigation
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Separator } from '@/components/ui/Separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/Sheet';

const SERVICES = [
  {
    title: "Pneus & Rodas",
    description: "Venda de pneus multimarcas e conserto especializado de rodas com precisão.",
    icon: <Disc className="w-8 h-8" />,
    image: "/pneus.png"
  },
  {
    title: "Geometria 3D",
    description: "Alinhamento computadorizado de última geração para máxima precisão e segurança.",
    icon: <Navigation className="w-8 h-8" />,
    image: "/alinhamento3d.png"
  },
  {
    title: "Balanceamento",
    description: "Eliminação de vibrações para um rodar suave e maior vida útil dos componentes.",
    icon: <Zap className="w-8 h-8" />,
    image: "/balanceamento.png"
  },
  {
    title: "Freios & Suspensão",
    description: "Manutenção completa do sistema de frenagem e amortecimento do seu veículo.",
    icon: <ShieldCheck className="w-8 h-8" />,
    image: "/freio.png"
  },
  {
    title: "Troca de Óleo e Filtro",
    description: "Lubrificantes de alta performance para garantir a saúde do seu motor.",
    icon: <Droplets className="w-8 h-8" />,
    image: "/oleo.png"
  },
  {
    title: "Ar-Condicionado",
    description: "Higienização completa para um ar puro e sistema eficiente em todas as estações.",
    icon: <Wind className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Acessórios",
    description: "Venda de baterias, Palhetas, Lampadas e LEDs, engates para reboque, capotas marítimas e muito mais.",
    icon: <Disc className="w-8 h-8" />,
    image: "/led1.png"
  }
];

const HOURS = [
  { day: "Segunda-feira", time: "08:00 – 18:00" },
  { day: "Terça-feira", time: "08:00 – 18:00" },
  { day: "Quarta-feira", time: "08:00 – 18:00" },
  { day: "Quinta-feira", time: "08:00 – 18:00" },
  { day: "Sexta-feira", time: "08:00 – 18:00" },
  { day: "Sábado", time: "08:00 – 12:00" },
  { day: "Domingo", time: "Fechado", closed: true },
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/48991125805";

  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-primary-foreground">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-bottom border-border py-3 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3 md:mt-0 -mt-4">
            <img 
              src="/paulolopes.png" 
              alt="Pneus Center Paulo Lopes Logo" 
              className="h-20 md:h-24 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#servicos" className="text-base font-bold text-foreground hover:text-primary transition-colors">Serviços</a>
            <a href="#sobre" className="text-base font-bold text-foreground hover:text-primary transition-colors">Sobre</a>
            <a href="#contato" className="text-base font-bold text-foreground hover:text-primary transition-colors">Contato</a>
            <Button render={<a href={whatsappUrl} target="_blank" rel="noopener noreferrer" />} nativeButton={false} className="rounded-full px-6 py-6 font-bold text-base">
              <svg 
                viewBox="0 0 24 24" 
                className="w-6 h-6 mr-2 fill-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Agendar Agora
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger render={<Button variant="ghost" size="icon" className="w-16 h-16" />}>
                <Menu className="w-12 h-12" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px]">
                <div className="flex flex-col gap-5 mt-12">
                  <a href="#servicos" className="text-lg font-heading font-bold hover:text-primary transition-colors">Serviços</a>
                  <a href="#sobre" className="text-lg font-heading font-bold hover:text-primary transition-colors">Sobre</a>
                  <a href="#contato" className="text-lg font-heading font-bold hover:text-primary transition-colors">Contato</a>
                  <Separator className="my-2" />
                  <div className="flex flex-col gap-4">
                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Fale conosco:</p>
                    <a href="tel:4831972315" className="flex items-center gap-3 text-base font-medium text-foreground hover:text-primary transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                      (48) 3197-2315
                    </a>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-base font-medium text-foreground hover:text-primary transition-colors">
                      <svg 
                        viewBox="0 0 24 24" 
                        className="w-5 h-5 fill-primary"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      (48) 99112-5805
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="/paulolopes.png" 
            alt="Premium Tire and Wheel Shop" 
            className="w-full h-full object-cover object-right md:object-[110%_center] opacity-40 md:opacity-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-background/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 xl:col-span-6"
            >
              <Badge variant="outline" className="mb-6 border-primary/50 text-foreground bg-primary/20 px-4 py-1 rounded-full backdrop-blur-sm">
                Referência em Paulo Lopes - SC
              </Badge>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[0.9] tracking-tighter mb-6 text-foreground">
                CUIDADO <span className="text-primary">PREMIUM</span> PARA O SEU VEÍCULO.
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl leading-relaxed">
                Especialistas em pneus, geometria 3D e manutenção automotiva completa. Tecnologia de ponta e atendimento de confiança desde 2024.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full text-lg px-8 h-14 shadow-lg shadow-primary/20" nativeButton={false} render={<a href={whatsappUrl} target="_blank" rel="noopener noreferrer" />}>
                  Agendar Serviço
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full text-lg px-8 h-14 backdrop-blur-sm bg-white/5 text-foreground border-white/20 hover:bg-white/10" nativeButton={false} render={<a href="#servicos" />}>
                  Ver Serviços
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-12 right-4 md:right-12 hidden lg:block">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-card/90 backdrop-blur-xl border border-border p-6 rounded-2xl shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium">Atendimento</p>
                <p className="text-xl font-bold text-foreground">Segunda a Sábado</p>
                <p className="text-xs text-muted-foreground font-medium">08:00 – 18:00 (Sáb até 12h)</p>
              </div>
            </div>
            <Separator className="mb-4 opacity-50" />
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Navigation className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium">Localização</p>
                <p className="text-xl font-bold text-foreground">Paulo Lopes</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Serviços Especializados</h2>
            <p className="text-muted-foreground text-lg">
              Oferecemos uma gama completa de soluções para garantir a performance e segurança do seu automóvel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-card">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-foreground">
                      <div className="bg-primary p-2 rounded-lg inline-block mb-2">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/sobre.png" 
                  alt="Quality Service" 
                  className="w-full aspect-square object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
              
              <div className="absolute bottom-8 left-8 bg-card/90 backdrop-blur-md p-6 rounded-2xl border border-border shadow-xl max-w-[240px]">
                <p className="text-4xl font-bold text-primary mb-1">2024</p>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Referência em manutenção automotiva</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-primary/20 text-foreground border-primary/50 hover:bg-primary/30">Nossa História</Badge>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">Compromisso com a sua Segurança</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  A <span className="text-foreground font-bold">Pneus Center Paulo Lopes</span> nasceu com o propósito de elevar o padrão de manutenção automotiva na região. Especializados em pneus e serviços mecânicos essenciais, unimos tecnologia e experiência para cuidar do seu patrimônio.
                </p>
                <p>
                  Localizada estrategicamente em Paulo Lopes – SC, nossa oficina conta com equipamentos de última geração, como a Geometria 3D, garantindo que cada serviço seja executado com a máxima precisão exigida pelos veículos modernos.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-sm font-bold text-foreground">Atendimento de Confiança</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-sm font-bold text-foreground">Peças de Alta Qualidade</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-sm font-bold text-foreground">Equipe Especializada</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-sm font-bold text-foreground">Tecnologia 3D</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-background via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-6xl font-heading font-bold mb-8 max-w-4xl mx-auto leading-tight">
            PRONTO PARA DAR AO SEU CARRO O TRATAMENTO QUE ELE MERECE?
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="rounded-full text-xl px-12 h-16 shadow-xl bg-foreground text-background hover:bg-foreground/90 border-none font-bold" nativeButton={false} render={<a href={whatsappUrl} target="_blank" rel="noopener noreferrer" />}>
              <svg 
                viewBox="0 0 24 24" 
                className="w-7 h-7 mr-3 fill-[#25D366]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section id="contato" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-12">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-8">Onde Estamos</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl h-fit">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-lg text-foreground">Endereço</p>
                      <p className="text-muted-foreground">Rua Bertoldo Ernesto dos Santos, 740</p>
                      <p className="text-muted-foreground">Paulo Lopes – SC</p>
                      <p className="text-muted-foreground">CEP: 88490-000</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl h-fit">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-lg text-foreground">Telefones</p>
                      <a href="tel:4831972315" className="block text-muted-foreground hover:text-primary transition-colors">(48) 3197-2315</a>
                      <a href="tel:48991125805" className="block text-muted-foreground hover:text-primary transition-colors">(48) 99112-5805</a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl h-fit">
                      <Instagram className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-lg text-foreground">Redes Sociais</p>
                      <a href="https://www.instagram.com/pneuscenterpl" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">@pneuscenterpl</a>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Horário de Funcionamento
                </h3>
                <div className="space-y-3">
                  {HOURS.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className={`text-sm ${item.closed ? 'text-muted-foreground opacity-60' : 'font-medium text-foreground'}`}>{item.day}</span>
                      <span className={`text-sm ${item.closed ? 'text-destructive font-bold' : 'text-muted-foreground'}`}>{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="lg:col-span-2">
              <div className="w-full h-full min-h-[400px] rounded-3xl overflow-hidden border border-border bg-card relative group">
                {/* Simulated Map Background */}
                <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/map/1200/800')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-1000" />
                
                {/* Fallback pattern if map image fails */}
                <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
                
                <div className="absolute inset-0 flex items-center justify-center p-8 bg-background/20 backdrop-blur-[2px]">
                  <div className="bg-background/90 backdrop-blur-xl p-8 rounded-3xl border border-border shadow-2xl text-center max-w-md">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <MapPin className="w-8 h-8 text-primary animate-bounce" />
                    </div>
                    <h4 className="text-2xl font-bold mb-2">Visite nossa Loja</h4>
                    <p className="text-muted-foreground mb-8">
                      Estamos localizados em Paulo Lopes. Atendemos toda a região de Garopaba, Palhoça e Imbituba.
                    </p>
                    <Button className="w-full rounded-full h-12" nativeButton={false} render={<a href="https://www.google.com/maps/search/?api=1&query=Pneus+Center+Paulo+Lopes+Rua+Bertoldo+Ernesto+dos+Santos+740" target="_blank" rel="noopener noreferrer" />}>
                      Abrir no Google Maps
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-4">
              <img 
                src="/paulolopes.png" 
                alt="Pneus Center Paulo Lopes Logo" 
                className="h-[136px] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <p className="text-xs text-muted-foreground max-w-xs text-center md:text-left">
                Comércio de Pneus e Manutenção Automotiva Completa. Aceitamos cartões de crédito, débito e pagamentos por aproximação (NFC).
              </p>
            </div>
            
            <div className="flex gap-8">
              <a href="https://www.instagram.com/pneuscenterpl" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-[72px] h-[72px]" />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-[72px] h-[72px] fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Pneus Center Paulo Lopes. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        className="fixed bottom-6 right-6 z-50"
      >
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center justify-center w-16 h-16 rounded-full shadow-2xl bg-[#25D366] hover:bg-[#20BA56] transition-transform hover:scale-110 active:scale-95"
        >
          <svg 
            viewBox="0 0 24 24" 
            className="w-10 h-10 fill-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>
      </motion.div>
    </div>
  );
}
