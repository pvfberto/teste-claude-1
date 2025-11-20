import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Section7Testimonials = () => {
  const testimonials = [
    {
      stars: 5,
      text: 'Eu estava literalmente pensando em desistir. Meus clientes reclamando, campanhas no vermelho, eu sem saber o que fazer. Quando aprendi o Método EM-SA® tudo mudou. Em 15 dias consegui melhorar o ROAS de 1.8x para 4.2x em um dos clientes. Salvou minha carreira.',
      image: '/assets/sessao_7_aluno_1.png',
      name: '[Nome do Aluno]',
      info: 'Gestor de Tráfego | [Cidade/Estado]'
    },
    {
      stars: 5,
      text: 'Eu já tinha gastado mais de R$80 mil em anúncios que não funcionavam. Estava prestes a fechar meu e-commerce. O Paulo me mostrou que eu estava criando anúncios completamente errados. Hoje escalo R$300/dia com ROAS consistente de 5x. Mudou meu negócio.',
      image: '/assets/sessao_7_aluno_2.png',
      name: '[Nome do Aluno]',
      info: 'E-commerce | [Cidade/Estado]'
    },
    {
      stars: 5,
      text: 'Eu trabalhava em banco, CLT, e queria migrar pro digital. Fiz 3 cursos antes mas nunca conseguia resultado. Com o Total Ads 360º finalmente entendi COMO criar anúncios de verdade. Hoje tenho 4 clientes fixos e faturamento de R$12 mil/mês. Larguei o emprego.',
      image: '/assets/sessao_7_aluno_3.png',
      name: '[Nome do Aluno]',
      info: 'Gestor de Tráfego | [Cidade/Estado]'
    },
    {
      stars: 5,
      text: 'CPL estava R$45, eu estava desesperado. Apliquei o EM-SA e em 2 semanas caiu pra R$18. Mesma oferta, mesmo público. Só mudei os anúncios. Economia de 60% nos custos. Vale cada centavo.',
      image: '/assets/sessao_7_aluno_4.png',
      name: '[Nome do Aluno]',
      info: 'Infoprodutor | [Cidade/Estado]'
    },
    {
      stars: 5,
      text: 'Minha agência estava estagnada em R$30k/mês. Implementei o Método EM-SA® em TODOS os clientes. Resultado: retenção subiu 80%, indicações explodiram, hoje faturamos R$85k/mês. O método funciona em qualquer nicho.',
      image: '/assets/sessao_7_aluno_5.png',
      name: '[Nome do Aluno]',
      info: 'Dono de Agência | [Cidade/Estado]'
    }
  ];

  return (
    <section className="bg-[#111111] px-6 md:px-20 py-12 md:py-24">
      <div className="max-w-content mx-auto">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-black tracking-wider-xl text-center mb-6"
        >
          Não Acredite Apenas Na Minha Palavra
        </motion.h2>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-2xl text-center text-[#F3EFE0] mb-10 md:mb-16"
        >
          Veja o que alunos que estavam na sua situação estão dizendo:
        </motion.p>

        {/* Slider de depoimentos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#191919] border-t-4 border-[#FF5C00] rounded-lg p-6 md:p-10 h-full flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-transform duration-300">
                  {/* Estrelas */}
                  <div className="text-3xl text-[#FF5C00] mb-6">
                    {'⭐'.repeat(testimonial.stars)}
                  </div>

                  {/* Texto */}
                  <p className="text-lg leading-relaxed text-[#F3EFE0] italic mb-8 flex-grow">
                    "{testimonial.text}"
                  </p>

                  {/* Foto */}
                  <img
                    src={testimonial.image}
                    alt={`Foto de ${testimonial.name}`}
                    className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-[#FF5C00] object-cover"
                    loading="lazy"
                  />

                  {/* Nome */}
                  <p className="text-xl font-bold text-center mb-2">
                    {testimonial.name}
                  </p>

                  {/* Info */}
                  <p className="text-base text-center text-[rgba(243,239,224,0.7)]">
                    {testimonial.info}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style>{`
        .swiper-button-prev,
        .swiper-button-next {
          color: #FF5C00;
        }
        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          opacity: 1;
        }
        .swiper-pagination-bullet {
          background: rgba(184, 134, 11, 0.3);
        }
        .swiper-pagination-bullet-active {
          background: #FF5C00;
        }
      `}</style>
    </section>
  );
};

export default Section7Testimonials;
