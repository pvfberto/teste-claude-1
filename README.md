# TOTAL ADS 360º - Landing Page

Landing page de alta conversão para o curso "Total Ads 360º - Curso de Anúncios Inteligentes".

## 🚀 Tecnologias

- **React 18** com TypeScript
- **Vite** - Build tool
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações
- **Swiper** - Slider de depoimentos

## 📋 Pré-requisitos

- Node.js 18+
- npm ou yarn

## 🔧 Instalação

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 📁 Estrutura do Projeto

```
/src
  /components      # Componentes reutilizáveis
    - CTAButton.tsx
    - CountdownTimer.tsx
    - Footer.tsx
  /sections        # Seções da landing page (1-15)
    - Section1Hero.tsx
    - Section2Validation.tsx
    - ... (até Section15FinalChoice.tsx)
  /hooks           # Custom hooks
    - useCountdown.ts
  - App.tsx        # Componente principal
  - index.css      # Estilos globais e Tailwind
  - main.tsx       # Entry point

/public
  /assets          # ⚠️ IMPORTANTE: Adicione as imagens aqui!
```

## 🖼️ Assets Necessários

**IMPORTANTE:** Você precisa adicionar as seguintes imagens na pasta `public/assets/`:

### Imagens Obrigatórias:

1. **sessao_1.png** - Hero image (dashboard de anúncios)
2. **sessao_4.png** - Infográfico Andromeda
3. **sessao_5.png** - Foto Paulo Berto (300x300px, formato circular)
4. **sessao_6.png** - Diagrama Framework EM-SA
5. **sessao_7_aluno_1.png** - Foto depoimento aluno 1 (80x80px)
6. **sessao_7_aluno_2.png** - Foto depoimento aluno 2 (80x80px)
7. **sessao_7_aluno_3.png** - Foto depoimento aluno 3 (80x80px)
8. **sessao_7_aluno_4.png** - Foto depoimento aluno 4 (80x80px)
9. **sessao_7_aluno_5.png** - Foto depoimento aluno 5 (80x80px)
10. **sessao_11.png** - Infográfico Antes/Depois
11. **sessao_14.png** - Selo de Garantia 15 Dias (200x200px)

### Como adicionar:

```bash
# Criar a pasta assets se ainda não existir
mkdir -p public/assets

# Copiar suas imagens para a pasta
cp /caminho/suas/imagens/*.png public/assets/
```

## 🎨 Design

### Paleta de Cores:
- **Background principal:** `#111111` (preto intenso)
- **Background secundário:** `#191919` (grafite escuro)
- **Dourado:** `#B8860B` → `#F0E68C` (gradiente)
- **Texto principal:** `#FFFFFF`
- **Texto secundário:** `#F3EFE0`

### Tipografia:
- **Fontes:** Inter e Poppins
- **Títulos:** 48-64px (desktop), 32-40px (mobile)
- **Corpo:** 18px (desktop), 16px (mobile)

## 📱 Responsividade

A landing page foi desenvolvida com abordagem mobile-first e é totalmente responsiva:

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## ⚡ Performance

- Lazy loading de imagens
- Animações otimizadas com GPU (transform, opacity)
- Build otimizado com Vite
- Code splitting automático

## 🎯 Seções da Landing Page

1. **Hero** - Above the fold com headline e CTA
2. **Validação da Dor** - Pain points do público
3. **Consequências** - Agitação da dor
4. **Andromeda** - A causa raiz do problema
5. **Revelação** - Apresentação Paulo Berto
6. **Framework EM-SA** - Explicação do método
7. **Depoimentos** - Prova social com slider
8. **Produto** - Apresentação do curso
9. **Diferenciais** - Diferenciais pedagógicos
10. **Incluso** - O que está incluído
11. **Resultados** - Resultados esperados
12. **Autoridade** - Credenciais
13. **Oferta** - Preço e countdown
14. **Garantia** - Garantia incondicional
15. **Escolha Final** - Última chamada + CTA

## 🔄 Countdown Timer

O countdown na seção 13 está configurado para 7 dias a partir da data atual. Para alterar:

```typescript
// Em src/sections/Section13Offer.tsx
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 7); // Altere aqui
```

## 🎬 Animações

Todas as seções utilizam Framer Motion com animações:
- Fade-in + slide-up ao entrar no viewport
- Duração: 0.8s - 1.2s
- Easing: cubic-bezier(0.4, 0.0, 0.2, 1)

## 📝 Customização

### Alterar textos:
Cada seção é um componente separado em `/src/sections/`. Edite o componente correspondente.

### Alterar cores:
Edite `tailwind.config.js` para modificar a paleta de cores.

### Adicionar/remover seções:
1. Crie/remova o componente em `/src/sections/`
2. Importe/remova em `App.tsx`

## 🐛 Troubleshooting

### Imagens não aparecem:
- Verifique se as imagens estão em `public/assets/`
- Confirme os nomes dos arquivos (case-sensitive)
- Limpe o cache: `npm run build` e rode novamente

### Erros de build:
```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📦 Deploy

### Vercel (Recomendado):
```bash
npm install -g vercel
vercel
```

### Netlify:
```bash
npm run build
# Faça upload da pasta 'dist'
```

### Build manual:
```bash
npm run build
# A pasta 'dist' contém os arquivos estáticos
```

## 📄 Licença

Todos os direitos reservados © 2024 Total Ads 360º

## 👨‍💻 Desenvolvimento

Desenvolvido com Claude Code seguindo especificações de design moderno, minimalista e focado em conversão.

---

**Próximos passos:**
1. ✅ Adicione as imagens na pasta `public/assets/`
2. ✅ Rode `npm run dev` para ver a landing page
3. ✅ Customize textos e informações conforme necessário
4. ✅ Teste em diferentes dispositivos
5. ✅ Faça deploy!
