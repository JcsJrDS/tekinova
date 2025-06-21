import React, { useState } from 'react';

// --- ÍCONES SVG COMO COMPONENTES ---
// Para evitar dependências externas, os ícones são definidos como componentes SVG aqui.

const CodeIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const TargetIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const BrainCircuitIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2a10 10 0 0 0-10 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.08.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33s1.7.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.33 4.68-4.56 4.93.36.31.69.92.69 1.85v2.74c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"></path>
  </svg>
);

const SendIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

const MenuIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);

const XIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);


// --- COMPONENTE Header ---
const Header = ({ onMenuClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ['Serviços', 'Sobre Nós', 'Portfólio', 'Contato'];

  const scrollToSection = (id) => {
    document.getElementById(id.toLowerCase().replace(' ', '-')).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };
  
  return (
    <header className="bg-gray-900 bg-opacity-80 backdrop-blur-md text-white p-4 fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wider">TEKINOVA</h1>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => (
            <button key={link} onClick={() => scrollToSection(link)} className="hover:text-purple-400 transition-colors duration-300">{link}</button>
          ))}
          <button onClick={() => scrollToSection('Contato')} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 transform hover:scale-105">
            Peça um Orçamento
          </button>
        </nav>
        <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
        </div>
      </div>
       {isMenuOpen && (
            <div className="md:hidden mt-4">
                <nav className="flex flex-col items-center space-y-4">
                    {navLinks.map(link => (
                        <button key={link} onClick={() => scrollToSection(link)} className="hover:text-purple-400 transition-colors duration-300 text-lg">{link}</button>
                    ))}
                    <button onClick={() => scrollToSection('Contato')} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-300 transform hover:scale-105 w-full">
                        Peça um Orçamento
                    </button>
                </nav>
            </div>
        )}
    </header>
  );
};

// --- COMPONENTE Hero ---
const Hero = () => {
    const scrollToServices = () => {
        document.getElementById('serviços').scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <section id="hero" className="min-h-screen bg-gray-900 text-white flex items-center justify-center text-center relative overflow-hidden pt-20">
             {/* Fundo animado */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-1/4 right-1/2 w-96 h-96 bg-purple-400 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>
            <div className="container mx-auto px-4 z-10">
                <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">Inovação Digital que <span className="text-purple-400">Impulsiona</span> seu Negócio.</h2>
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up">
                    Desenvolvemos sistemas web sob medida, landing pages de alta conversão e agentes de IA que automatizam e revolucionam sua operação.
                </p>
                <button onClick={scrollToServices} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-110 shadow-lg shadow-purple-500/50">
                    Descubra Nossas Soluções
                </button>
            </div>
        </section>
    );
};


// --- COMPONENTE Services ---
const Services = () => {
  const serviceItems = [
    {
      icon: <CodeIcon className="h-10 w-10 text-purple-400 mb-4" />,
      title: "Desenvolvimento de Sistemas Web",
      description: "Criamos plataformas robustas, escaláveis e seguras, totalmente alinhadas com seus processos de negócio para maximizar a eficiência."
    },
    {
      icon: <TargetIcon className="h-10 w-10 text-purple-400 mb-4" />,
      title: "Landing Pages de Alta Conversão",
      description: "Desenhamos e desenvolvemos landing pages otimizadas para transformar visitantes em clientes, com design atraente e foco total em resultados."
    },
    {
      icon: <BrainCircuitIcon className="h-10 w-10 text-purple-400 mb-4" />,
      title: "Criação de Agentes de IA",
      description: "Implementamos agentes de IA personalizados para automatizar tarefas, oferecer atendimento ao cliente 24/7 e gerar insights valiosos a partir de dados."
    }
  ];

  return (
    <section id="serviços" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">Soluções Inteligentes para o seu Desafio</h3>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">Do conceito à implementação, entregamos tecnologia que gera valor real.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {serviceItems.map((item, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-lg shadow-xl hover:shadow-purple-500/20 transform hover:-translate-y-2 transition-all duration-300">
              {item.icon}
              <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- COMPONENTE About ---
const About = () => {
  return (
    <section id="sobre-nós" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
            <img 
                src="/Equipe.png"
                alt="Equipe TEKINOVA"
                className="rounded-lg shadow-2xl w-full"
            />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Somos a <span className="text-purple-400">TEKINOVA</span></h3>
          <p className="text-gray-300 leading-relaxed">
            Nascemos da paixão por tecnologia e inovação. Nosso objetivo não é apenas entregar software, mas criar parcerias estratégicas para levar seu negócio ao próximo nível. Combinamos criatividade, expertise técnica e as mais recentes tecnologias de IA para construir o futuro, hoje.
          </p>
        </div>
      </div>
    </section>
  );
};

// --- COMPONENTE Portfolio ---
const Portfolio = () => {
    const projects = [
        {
            title: "Sistema de Gestão ERP",
            category: "Sistema Web",
            imgUrl: "https://placehold.co/600x400/9333EA/FFFFFF?text=Projeto+1"
        },
        {
            title: "Chatbot de Atendimento com IA",
            category: "Agente de IA",
            imgUrl: "https://placehold.co/600x400/9333EA/FFFFFF?text=Projeto+2",
            videoUrl: "/rag_web_rapida.mp4" // Caminho relativo ao public
        },
        {
            title: "Landing Page para Startup",
            category: "Landing Page",
            imgUrl: "/Lp.jpg", // Caminho local
            link: "https://mesv.empreendersendovoce.com.br/"
        }
    ];

    // Separa o projeto de vídeo dos demais
    const videoProject = projects.find(p => p.videoUrl);
    const otherProjects = projects.filter(p => !p.videoUrl);

    return (
        <section id="portfólio" className="py-20 bg-gray-800">
            <div className="container mx-auto px-4 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">Projetos que Geram Orgulho</h3>
                <p className="text-gray-400 mb-12 max-w-2xl mx-auto">Uma amostra do nosso trabalho e da nossa dedicação.</p>

                {/* Grid para projetos de imagem (Projeto 1 e 3) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {otherProjects.map((project, index) => (
                        <div key={index} className="group relative rounded-lg overflow-hidden shadow-lg">
                            {project.link ? (
                              <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <img src={project.imgUrl} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"/>
                              </a>
                            ) : (
                              <img src={project.imgUrl} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"/>
                            )}
                            <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-80 transition-all duration-300 flex flex-col justify-center items-center p-4 text-white text-center opacity-0 group-hover:opacity-100 pointer-events-none">
                                <h4 className="text-xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h4>
                                <p className="text-purple-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{project.category}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Container para o projeto de vídeo */}
                {videoProject && (
                    <div className="mt-12 max-w-4xl mx-auto">
                        <div className="group relative rounded-lg overflow-hidden shadow-lg">
                            <div className="aspect-video w-full">
                                <video
                                  src={videoProject.videoUrl}
                                  controls
                                  className="w-full h-full object-cover rounded-lg"
                                >
                                  Seu navegador não suporta vídeo.
                                </video>
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-80 transition-all duration-300 flex flex-col justify-center items-center p-4 text-white text-center opacity-0 group-hover:opacity-100 pointer-events-none">
                                <h4 className="text-xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{videoProject.title}</h4>
                                <p className="text-purple-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{videoProject.category}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

// --- COMPONENTE Contact ---
const Contact = () => {
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const response = await fetch('https://formspree.io/f/mldnwwor', {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });
        if (response.ok) {
            setStatus("Mensagem enviada com sucesso!");
            e.target.reset();
        } else {
            setStatus("Ocorreu um erro. Tente novamente.");
        }
        setTimeout(() => setStatus(""), 5000);
    };

  return (
    <section id="contato" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Pronto para <span className="text-purple-400">Inovar?</span></h3>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">Vamos conversar sobre como a TEKINOVA pode ajudar a transformar sua ideia em um projeto de sucesso.</p>
        
        <div className="max-w-xl mx-auto bg-gray-800 p-8 rounded-lg shadow-2xl">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="Seu Nome" name="name" required className="bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-full" />
              <input type="email" placeholder="Seu E-mail" name="email" required className="bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-full" />
            </div>
            <select name="service" className="bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-full mb-4">
              <option value="">Qual serviço te interessa mais?</option>
              <option value="sistemas-web">Desenvolvimento de Sistemas Web</option>
              <option value="landing-pages">Landing Pages</option>
              <option value="agentes-ia">Criação de Agentes de IA</option>
            </select>
            <textarea placeholder="Sua Mensagem" name="message" rows="4" required className="bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-full mb-4"></textarea>
            <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg w-full transition-all duration-300 flex items-center justify-center gap-2">
              Enviar Mensagem <SendIcon className="h-5 w-5"/>
            </button>
          </form>
          {status && <p className="mt-4 text-green-400">{status}</p>}
        </div>
      </div>
    </section>
  );
};

// --- COMPONENTE Footer ---
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-xl font-bold text-white mb-2">TEKINOVA</h3>
        <p className="mb-4">Transformando ideias em realidade digital.</p>
        <p>&copy; {new Date().getFullYear()} TEKINOVA. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

// --- COMPONENTE WhatsAppButton ---
const WhatsAppButton = () => {
    // IMPORTANTE: Substitua 'SEUNUMERODOWHATSAPP' pelo seu número completo com código do país (ex: 5511999999999)
    const phoneNumber = "554791883517"; 
    const message = "Olá! Visitei o site da TEKINOVA e gostaria de mais informações.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transform hover:scale-110 transition-transform duration-300 animate-pulse"
            aria-label="Contate-nos pelo WhatsApp"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.357 1.846 6.088l-1.035 3.777 3.849-1.011z" />
            </svg>
        </a>
    );
}


// --- COMPONENTE PRINCIPAL App ---
export default function App() {
  return (
    <div className="bg-gray-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
