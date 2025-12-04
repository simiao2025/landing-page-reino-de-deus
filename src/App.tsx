import { ChevronDown, Check, Quote, Star, Send } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState('');
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const faqItems = [
    {
      question: 'Como vou receber o ebook?',
      answer: 'Após a compra, você receberá um link de download imediatamente no seu email. O ebook será enviado em formato PDF, pronto para ler em qualquer dispositivo.'
    },
    {
      question: 'Em quais dispositivos posso ler?',
      answer: 'O ebook funciona em qualquer dispositivo: computador, tablet ou smartphone. Você pode ler online ou fazer download para ler offline.'
    },
    {
      question: 'Qual é o tempo de entrega?',
      answer: 'É instantâneo! Assim que você completar o pagamento, o link de download será enviado para seu email automaticamente.'
    },
    {
      question: 'Para quem é este livro?',
      answer: 'Para todo cristão que deseja entender seu propósito, romper com a religiosidade, aprofundar seu relacionamento com Deus e viver como verdadeiro filho(a) do Rei.'
    },
    {
      question: 'O conteúdo é espiritual demais ou prático?',
      answer: 'É equilibrado! Combina revelação espiritual profunda com princípios práticos que você pode aplicar no seu dia a dia. Cada capítulo tem exemplos reais e reflexões.'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Santos',
      role: 'Pastora',
      text: 'Este livro mudou minha forma de entender o Reino. Passei de uma fé baseada em regras para uma vida de relacionamento genuíno com Deus. Recomendo a todos.',
      stars: 5
    },
    {
      name: 'Carlos Oliveira',
      role: 'Empresário',
      text: 'A clareza sobre autoridade espiritual me libertou. Agora governo minha família e negócio com a sabedoria do Reino, não com medo. Transformador!',
      stars: 5
    },
    {
      name: 'Juliana Costa',
      role: 'Mãe e Professora',
      text: 'Finalmente entendi como levar o Reino para fora das paredes da igreja. Agora minha vida reflete Deus em cada lugar onde eu vou.',
      stars: 5
    },
    {
      name: 'Pedro Mendes',
      role: 'Músico Cristão',
      text: 'A seção sobre o Código da Intimidade me mostrou que Deus quer proximidade comigo, não distância. Meu relacionamento com o Pai nunca mais foi igual.',
      stars: 5
    }
  ];

  const benefits = [
    { icon: '✨', title: 'Identidade Renovada', description: 'Descubra quem você é realmente em Cristo e o poder dessa filiação' },
    { icon: '🎯', title: 'Propósito Claro', description: 'Entenda seu verdadeiro propósito e viva como representante do Rei' },
    { icon: '💎', title: 'Autoridade Espiritual', description: 'Acesse e exerça sua autoridade legítima no Reino de Deus' },
    { icon: '🕊️', title: 'Intimidade com Deus', description: 'Construa um relacionamento profundo e transformador com o Pai' },
    { icon: '🔑', title: 'Chaves do Reino', description: 'Desbloqueie acesso aos depósitos espirituais de graça e poder' },
    { icon: '⚡', title: 'Vida Transformada', description: 'Manifeste o Reino em cada aspecto da sua vida — trabalho, família, sociedade' }
  ];

  const chapters = [
    { num: '01', title: 'Reino vs. Religião', subtitle: 'Relacionamento, não regras' },
    { num: '02', title: 'As Riquezas da Justiça', subtitle: 'Posicionamento e autoridade' },
    { num: '03', title: 'Código da Intimidade', subtitle: 'Proximidade com o Pai' },
    { num: '04', title: 'Código da Autoridade', subtitle: 'Poder delegado' },
    { num: '05', title: 'Código da Cultura do Reino', subtitle: 'Manifestando o Céu na terra' },
    { num: '06', title: 'Governo Espiritual', subtitle: 'Filhos maduros liderando' }
  ];

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(212, 165, 116, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(212, 165, 116, 0.6);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-slideIn {
          animation: slideIn 0.8s ease-out forwards;
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        .gradient-text {
          background: linear-gradient(135deg, #1e3a8a 0%, #d4a574 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-gradient {
          background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #193a6e 100%);
        }
        .button-shine {
          position: relative;
          overflow: hidden;
        }
        .button-shine::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: shine 3s infinite;
        }
        @keyframes shine {
          0% { transform: translate(-100%, -100%); }
          100% { transform: translate(100%, 100%); }
        }
      `}</style>

      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-xl font-bold gradient-text">O Reino de Deus Está Entre Nós</div>
          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#sobre" className="hover:text-blue-900 transition">Sobre</a>
            <a href="#capitulos" className="hover:text-blue-900 transition">Capítulos</a>
            <a href="#beneficios" className="hover:text-blue-900 transition">Benefícios</a>
            <a href="#depoimentos" className="hover:text-blue-900 transition">Depoimentos</a>
          </nav>
        </div>
      </header>

      <section className="hero-gradient text-white pt-24 pb-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight animate-fadeInUp" style={{animationDelay: '0.1s'}}>
            O Reino de Deus <br/><span className="text-yellow-300">Está Entre Nós</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed animate-fadeInUp max-w-2xl mx-auto" style={{animationDelay: '0.2s'}}>
            Descubra como viver como filho(a) de Deus nos dias atuais. Rompa com a religiosidade e entre num relacionamento transformador com o Pai.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
            <button className="button-shine bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition relative">
              Quero meu ebook por R$ 27,90
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition">
              Saiba mais
            </button>
          </div>

          <p className="text-gray-300 text-sm animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            Ebook digital | 15 páginas | Leia em qualquer dispositivo
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-yellow-300" />
        </div>
      </section>

      <section id="sobre" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slideIn">
              <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">Sobre o Livro</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-6">Um Convite para a Transformação</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Em um mundo onde a espiritualidade se perde em rituais e dogmas, este livro surge como um farol de clareza e transformação.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Você descobrirá o verdadeiro significado de ser <strong>filho(a) de Deus</strong> — não apenas um título, mas uma <strong>posição de autoridade e intimidade</strong>. Uma jornada que transforma entendimento em prática, fé em ação, e religião em relacionamento.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check size={20} className="text-yellow-500 flex-shrink-0" />
                  <span>Linguagem clara e inspiradora</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} className="text-yellow-500 flex-shrink-0" />
                  <span>Exemplos práticos para cada tema</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} className="text-yellow-500 flex-shrink-0" />
                  <span>Reflexões e orações transformadoras</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} className="text-yellow-500 flex-shrink-0" />
                  <span>Baseado em princípios bíblicos sólidos</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white animate-glow">
              <div className="text-center">
                <div className="text-6xl font-black mb-4">O REINO</div>
                <div className="h-1 w-16 bg-yellow-400 mx-auto mb-6"></div>
                <p className="text-lg mb-8">Como viver como filho de Deus nos dias atuais</p>
                <p className="font-bold text-yellow-300 mb-6">João L. F. de Carvalho</p>
                <div className="bg-white/20 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-yellow-300">R$ 27,90</p>
                  <p className="text-sm text-gray-100 mt-2">Ebook Digital em PDF</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">Para Quem É</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3">Este livro é para você se...</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Deseja entender seu propósito como filho(a) de Deus',
              'Quer romper com a religiosidade e viver relacionamento real com Deus',
              'Procura aprofundar sua fé com bases bíblicas sólidas',
              'Busca maturidade espiritual e autoridade no Reino',
              'Quer levar o Reino para fora das paredes da igreja',
              'Anela por intimidade genuína com o Pai',
              'Deseja viver com identidade clara e propósito',
              'Procura transformação que impacte todas as áreas da vida'
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition">
                <div className="w-6 h-6 rounded-full bg-yellow-400 text-blue-900 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  ✓
                </div>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="capitulos" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">6 Capítulos Transformadores</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3">O que você vai aprender</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {chapters.map((ch, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-yellow-400 hover:shadow-lg transition">
                <div className="text-4xl font-black text-blue-900 mb-2">{ch.num}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{ch.title}</h3>
                <p className="text-yellow-600 font-semibold">{ch.subtitle}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-900 text-white rounded-2xl p-8 text-center">
            <p className="text-lg mb-4">
              Cada capítulo inclui versículos bíblicos, princípios-chave, exemplos práticos e reflexões para aplicar em sua vida.
            </p>
            <p className="text-yellow-300 font-bold">
              "Se vós estiverdes em mim, e as minhas palavras estiverem em vós, pedireis tudo o que quiserdes, e vos será feito." — João 15:7
            </p>
          </div>
        </div>
      </section>

      <section id="beneficios" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">Transformação Real</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3">Benefícios que você vai experimentar</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 text-center hover:shadow-xl transition">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="depoimentos" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">Histórias Reais</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3">O que leitores estão dizendo</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 border border-gray-200 hover:border-yellow-400 transition">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote size={32} className="text-yellow-300 mb-4" />
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Sobre o Autor</h2>
          <p className="text-lg text-gray-100 mb-6 leading-relaxed">
            João L. F. de Carvalho é um estudioso apaixonado pela Palavra de Deus e pelo Reino. Com clareza didática e profundidade espiritual, ele traz à tona verdades que transformam vidas.
          </p>
          <p className="text-lg text-gray-100 mb-6 leading-relaxed">
            Este livro nasce do desejo de trazer clareza a um dos maiores tesouros espirituais: <strong>o que realmente significa ser filho(a) de Deus</strong>.
          </p>
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur border border-white/20">
            <p className="text-yellow-300 font-bold mb-2">Sua Missão</p>
            <p className="text-gray-100">
              Revelar o Reino de Deus como um estilo de vida transformador, conduzindo cristãos de uma fé baseada em religiosidade para uma vida de relacionamento profundo, autoridade espiritual e propósito divino.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 md:p-12 text-center text-blue-900">
            <h2 className="text-3xl font-bold mb-4">Garantia de 100% de Satisfação</h2>
            <p className="text-lg mb-6 opacity-90">
              Se por qualquer motivo o livro não atender suas expectativas nos primeiros 7 dias, devolvemos seu dinheiro integralmente — sem perguntas.
            </p>
            <p className="font-semibold opacity-75">Sua satisfação é nossa prioridade.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Perguntas Frequentes</h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <span className="font-bold text-gray-900 text-left">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-yellow-500 transition-transform ${faqOpen === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                {faqOpen === idx && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 hero-gradient text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Transforme sua vida no Reino</h2>
          <p className="text-lg text-gray-100 mb-10 max-w-2xl mx-auto">
            Não espere mais. Descubra sua verdadeira identidade, acesse sua autoridade espiritual e comece uma jornada transformadora como filho(a) do Rei.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="button-shine bg-yellow-400 text-blue-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition relative">
              Garantir minha cópia por R$ 27,90
            </button>
          </div>

          <p className="text-gray-300 text-sm">
            Acesso imediato | Leia em qualquer dispositivo | Garantia de 7 dias
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 rounded-xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Receba atualizações e conteúdo exclusivo</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Seu melhor email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-bold transition flex items-center justify-center gap-2">
                <Send size={18} />
                Inscrever
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="text-white font-bold mb-3">O Reino</p>
              <p className="text-sm">Um guia para viver como filho(a) de Deus</p>
            </div>
            <div>
              <p className="text-white font-bold mb-3">Autor</p>
              <p className="text-sm">João L. F. de Carvalho</p>
            </div>
            <div>
              <p className="text-white font-bold mb-3">Produto</p>
              <p className="text-sm">Ebook Digital | 15 páginas | Formato PDF</p>
            </div>
            <div>
              <p className="text-white font-bold mb-3">Suporte</p>
              <p className="text-sm">Dúvidas? Envie um email</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2025 João L. F. de Carvalho. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
