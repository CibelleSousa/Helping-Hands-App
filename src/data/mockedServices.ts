import { ServiceProvider } from "./mockedServices.type";


/**
 * Este arquivo simula uma base de dados para a aplicação "Helping Hands".
 * Os dados foram intencionalmente diversificados para permitir testes
 * de diferentes cenários de busca na interface, como nomes compostos,
 * acentos e termos ambíguos.
 */
const MockedData: ServiceProvider[] = [
  {
    id: 1, nome: 'Letícia Oliveira', servico: 'Pet care', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4_WOevl5t3J8UeAEq5tMF9ypeY_JRuB3iGw&s', focoDescricao: 'Foco em cuidado atencioso e responsável para pets de pequeno e médio porte.',
    avaliacao: 4.8, comentarios: 125, disponibilidade: 'Seg-Sáb / 9h-17h',
    textoPerfil: 'Apaixonada por animais desde criança. Calma, confiável e dedicada ao bem-estar individual de cada pet. Adoro brincar e garantir que se sintam seguros e felizes.',
    textoExperiencia: 'Trabalho como cuidadora de pets há mais de 5 anos. Experiência com passeios diários, cuidados com animais idosos e administração de medicamentos quando necessário.',
    destaques: ['Certificada em primeiros socorros para pets', 'Cuidado personalizado', 'Flexibilidade de horários']
  },
  {
    id: 2, nome: 'Renata França', servico: 'Shopping Assistant', urlFoto: 'https://st4.depositphotos.com/12982378/24512/i/450/depositphotos_245124972-stock-photo-charming-curly-woman-smiling-closed.jpg', focoDescricao: 'Auxílio em compras e organização de tarefas do dia a dia.',
    avaliacao: 4.5, comentarios: 88, disponibilidade: 'Seg-Sex / Horário comercial',
    textoPerfil: 'Organizada, proativa e com ótimo senso de estilo. Adoro ajudar as pessoas a otimizar seu tempo e encontrar exatamente o que precisam.',
    textoExperiencia: 'Experiência como assistente pessoal e de compras, ajudando clientes com listas de supermercado, presentes e organização de agendas.',
    destaques: ['Ótimo conhecimento de lojas locais', 'Discrição e confiabilidade', 'Organização de tarefas']
  },
  {
    id: 3, nome: 'Felipe Araújo', servico: 'Diarista', urlFoto: 'https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg', focoDescricao: 'Serviços de limpeza e organização residencial com agilidade.',
    avaliacao: 4.9, comentarios: 153, disponibilidade: 'Seg-Sex / 8h-17h',
    textoPerfil: 'Detalhiista, rápido e comprometido com a limpeza. Gosto de deixar os ambientes impecáveis e organizados para o conforto dos clientes.',
    textoExperiencia: 'Vários anos de experiência em limpeza residencial e comercial, utilizando produtos adequados para cada superfície e ambiente.',
    destaques: ['Limpeza detalhada', 'Organização de armários', 'Pontualidade e confiança']
  },
  {
    id: 4, nome: 'Bruno Costa', servico: 'Eletricista', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA-DXU_9y6CaUlIUlM9E4MqtdPLtZuNYGbcA&s', focoDescricao: 'Manutenção elétrica residencial, reparos e instalações.',
    avaliacao: 4.7, comentarios: 99, disponibilidade: 'Seg-Sáb / 8h-18h',
    textoPerfil: 'Eletricista qualificado e experiente, focado em segurança e soluções eficientes para problemas elétricos residenciais.',
    textoExperiencia: 'Mais de 10 anos atuando com instalações elétricas, troca de fiação, instalação de luminárias, tomadas e reparos em geral.',
    destaques: ['Serviço com garantia', 'Atendimento de emergências', 'Certificado NR10']
  },
  {
    id: 5, nome: 'Mariana Lima', servico: 'Jardinagem', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTDz3nqfElxcn9UUqCpiqlLI9P-bWwQ1jv7w&s', focoDescricao: 'Cuidado e manutenção de jardins, gramados e plantas ornamentais.',
    avaliacao: 4.6, comentarios: 75, disponibilidade: 'Ter-Sáb / 8h-16h',
    textoPerfil: 'Amante da natureza, dedicada a manter jardins bonitos e saudáveis. Conhecimento em diversas espécies de plantas e técnicas de jardinagem.',
    textoExperiencia: 'Experiência em poda, adubação, controle de pragas, plantio e manutenção geral de jardins residenciais e corporativos.',
    destaques: ['Criação de paisagismo', 'Manutenção de hortas', 'Consultoria para plantas']
  },
  {
    id: 6, nome: 'Carlos Eduardo', servico: 'Desenvolvedor Web', urlFoto: 'https://media.istockphoto.com/id/1485546774/pt/foto/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=lXDGScuGZHB43G9RC6o0_8J0pqR05K5RSrV2K3JG0nU=', focoDescricao: 'Criação de sites e pequenas aplicações web sob demanda.',
    avaliacao: 4.9, comentarios: 60, disponibilidade: 'Horário flexível / Remoto',
    textoPerfil: 'Desenvolvedor focado em criar soluções web eficientes e com boa usabilidade. Apaixonado por tecnologia e aprendizado contínuo.',
    textoExperiencia: 'Experiência com React, Node.js e bancos de dados SQL/NoSQL. Desenvolvimento de landing pages, e-commerces e sistemas internos.',
    destaques: ['Sites responsivos', 'Otimização de performance (SEO)', 'Integração com APIs']
  },
  {
    id: 7, nome: 'Vanessa Rocha', servico: 'Manicure e Pedicure', urlFoto: 'https://media.istockphoto.com/id/1483329842/pt/foto/studio-portrait-of-attractive-woman-wearing-shirt-and-laughing-while-sitting-at-isolated-grey.jpg?s=612x612&w=0&k=20&c=0F5iXUL_ZpSRjyJKisRz_gpaE-3ucaBoheY83XDeE_g=', focoDescricao: 'Serviços de beleza e cuidado para unhas, com atendimento a domicílio.',
    avaliacao: 4.7, comentarios: 115, disponibilidade: 'Qua-Dom / 10h-19h',
    textoPerfil: 'Profissional detalhista e cuidadosa, utilizando materiais esterilizados e de alta qualidade para garantir a saúde e beleza das suas unhas.',
    textoExperiencia: 'Mais de 8 anos de experiência em manicure, pedicure, esmaltação em gel e decoração de unhas (nail art).',
    destaques: ['Atendimento a domicílio', 'Especialista em unhas de gel', 'Material esterilizado']
  },
  {
    id: 8, nome: 'Lucas Martins', servico: 'Pintor Residencial', urlFoto: 'https://media.istockphoto.com/id/1364917563/pt/foto/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=U8JPP2jR5ibSuE_t0JrWgm0iQEfuMHHGMGTwEIMzNq0=', focoDescricao: 'Pintura de interiores e exteriores, com foco em acabamento de qualidade.',
    avaliacao: 4.8, comentarios: 102, disponibilidade: 'Seg-Sex / 8h-17h',
    textoPerfil: 'Pintor cuidadoso com os detalhes e o acabamento. Utilizo materiais de qualidade para garantir a durabilidade e beleza da pintura.',
    textoExperiencia: 'Experiência com preparação de superfícies, aplicação de massa corrida, pintura com diferentes tipos de tinta e texturas.',
    destaques: ['Acabamento impecável', 'Limpeza pós-serviço', 'Orçamento sem compromisso']
  },
  {
    id: 9, nome: 'Beatriz Almeida', servico: 'Aulas de Violão', urlFoto: 'https://st4.depositphotos.com/12982378/24512/i/450/depositphotos_245124972-stock-photo-charming-curly-woman-smiling-closed.jpg', focoDescricao: 'Aulas particulares de violão para iniciantes, do popular ao clássico.',
    avaliacao: 4.9, comentarios: 70, disponibilidade: 'Flexível / Online ou Presencial',
    textoPerfil: 'Musicista apaixonada por ensinar. Metodologia paciente e adaptada ao ritmo de cada aluno, do básico à primeira música.',
    textoExperiencia: 'Formada em música, com experiência em aulas particulares para crianças, adolescentes e adultos. Repertório variado.',
    destaques: ['Aulas para iniciantes', 'Material didático incluído', 'Foco em teoria e prática']
  },
  {
    id: 10, nome: 'Ricardo Souza', servico: 'Montador de Móveis', urlFoto: 'https://media.istockphoto.com/id/1352495212/pt/foto/portrait-of-friendly-young-businessman.jpg?s=612x612&w=0&k=20&c=JRHk1YPuyc5gsuRKnL-WJqXGCm9lB7tJMLP4Wl91Tto=', focoDescricao: 'Montagem e desmontagem de móveis de forma rápida e segura.',
    avaliacao: 4.7, comentarios: 130, disponibilidade: 'Seg-Sáb / 9h-18h',
    textoPerfil: 'Montador experiente, cuidadoso com seus móveis e ágil na execução do serviço. Equipado com as ferramentas adequadas.',
    textoExperiencia: 'Anos de experiência na montagem de móveis de diversas marcas e modelos, incluindo guarda-roupas, estantes, camas e cozinhas planejadas.',
    destaques: ['Montagem rápida', 'Ferramentas próprias', 'Disponibilidade aos sábados']
  },
  {
    id: 11, nome: 'Juliana Nogueira', servico: 'Dog Walker', urlFoto: 'https://media.istockphoto.com/id/1389348844/pt/foto/studio-shot-of-a-beautiful-young-woman-smiling-while-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=_S9i0a8hmVyTNfyoie0DU7Somh9P_a5qL25kapJbmvU=', focoDescricao: 'Passeios diários e adestramento básico para cães de todos os portes.',
    avaliacao: 4.9, comentarios: 95, disponibilidade: 'Seg-Sex / Manhã e Tarde',
    textoPerfil: 'Amante de cães, responsável e atenta às necessidades de cada animal. Passeios focados em exercício e socialização segura.',
    textoExperiencia: 'Experiência com cães de diferentes raças e temperamentos. Conhecimento em técnicas básicas de adestramento positivo.',
    destaques: ['Passeios em grupo ou individuais', 'Flexibilidade de duração', 'Relatórios diários com fotos']
  },
  {
    id: 12, nome: 'Fernando Pereira', servico: 'Suporte de TI', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAQ2hR3qM4d7u_3CvoxvXMxOkXfk5jRPlioA&s', focoDescricao: 'Resolução de problemas em computadores, notebooks e redes domésticas.',
    avaliacao: 4.6, comentarios: 82, disponibilidade: 'Seg-Sex / Horário comercial',
    textoPerfil: 'Técnico paciente e didático, focado em resolver problemas de informática de forma eficiente e explicar as soluções de maneira clara.',
    textoExperiencia: 'Experiência com formatação, remoção de vírus, configuração de redes Wi-Fi, instalação de softwares e recuperação de dados.',
    destaques: ['Atendimento remoto ou presencial', 'Suporte para Windows e macOS', 'Configuração de impressoras']
  },
  {
    id: 13, nome: 'Aline Barros', servico: 'Chef de Cozinha', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiiBm5VewsDuIlhLPUSlB_3jX2n8sCTWMIsw&sr', focoDescricao: 'Preparo de refeições personalizadas para eventos ou para a semana.',
    avaliacao: 5.0, comentarios: 110, disponibilidade: 'Mediante agendamento',
    textoPerfil: 'Chef criativa e apaixonada por gastronomia. Prezo pela qualidade dos ingredientes e pela apresentação dos pratos.',
    textoExperiencia: 'Experiência em restaurantes e eventos. Especializada em culinária brasileira e mediterrânea. Preparo de cardápios personalizados.',
    destaques: ['Personal chef para eventos', 'Congelados gourmet', 'Opções vegetarianas e veganas']
  },
  {
    id: 14, nome: 'Gustavo Ribeiro', servico: 'Fotógrafo', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAcxKvNdS_m2u21A3f1eq6wnd7jBrabcfYDw&s', focoDescricao: 'Cobertura fotográfica de eventos sociais e ensaios pessoais.',
    avaliacao: 4.8, comentarios: 90, disponibilidade: 'Fins de semana e feriados',
    textoPerfil: 'Fotógrafo com olhar atento aos detalhes e emoções. Busco registrar momentos especiais de forma autêntica e artística.',
    textoExperiencia: 'Cobertura de casamentos, aniversários, formaturas e ensaios fotográficos (gestante, família, casal). Edição profissional das imagens.',
    destaques: ['Equipamento profissional', 'Entrega rápida das fotos', 'Álbuns personalizados']
  },
  {
    id: 15, nome: 'Camila Santos', servico: 'Tradutora (Inglês)', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyRqC0QTapocrSRTC4ThnZg0gBdBf6j0xjXA&s', focoDescricao: 'Tradução de documentos e textos do inglês para o português.',
    avaliacao: 4.9, comentarios: 58, disponibilidade: 'Horário comercial / Remoto',
    textoPerfil: 'Tradutora detalhista e comprometida com a precisão e fluidez do texto final. Excelente domínio de ambos os idiomas.',
    textoExperiencia: 'Tradução de artigos acadêmicos, manuais técnicos, legendas de vídeos e documentos corporativos. Experiência com ferramentas de tradução (CAT tools).',
    destaques: ['Tradução juramentada (consulta)', 'Revisão de textos', 'Cumprimento de prazos']
  },
  {
    id: 16, nome: 'Rafael Gomes', servico: 'Encanador', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZj6M5HxtneYiiM1v-ELHSGTypLVAoQ6bguw&s', focoDescricao: 'Reparos hidráulicos, detecção e conserto de vazamentos.',
    avaliacao: 4.5, comentarios: 77, disponibilidade: 'Atendimento 24h (emergências)',
    textoPerfil: 'Encanador experiente e equipado para resolver vazamentos, entupimentos e outros problemas hidráulicos com rapidez e eficiência.',
    textoExperiencia: 'Reparo de torneiras, chuveiros, descargas, caixas d\'água. Desentupimento de pias, ralos e vasos sanitários. Instalação de pontos de água.',
    destaques: ['Atendimento emergencial', 'Detecção de vazamentos', 'Serviço limpo e organizado']
  },
  {
    id: 17, nome: 'Larissa Ferreira', servico: 'Babá', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxeZhF_fEzXjb4t1PBMupOYeUKDz0Iu7dxGA&s', focoDescricao: 'Cuidado infantil com experiência e referências, disponível em horários flexíveis.',
    avaliacao: 4.9, comentarios: 105, disponibilidade: 'Noites e Fins de Semana',
    textoPerfil: 'Babá carinhosa, responsável e divertida. Adoro crianças e tenho experiência em cuidar de bebês e crianças maiores.',
    textoExperiencia: 'Experiência comprovada com referências. Cuidados com alimentação, higiene, sono e atividades lúdicas adequadas para cada idade.',
    destaques: ['Disponibilidade noturna', 'Primeiros socorros pediátricos', 'Atividades educativas']
  },
  {
    id: 18, nome: 'Thiago Mendes', servico: 'Motorista Particular', urlFoto: 'https://media.istockphoto.com/id/520860375/pt/foto/ele-empresas-geridas.jpg?s=612x612&w=0&k=20&c=m3lG5EcUZKnynSHndeNGzZs2av2mgcHVHrcBp4tmLrw=', focoDescricao: 'Transporte para compromissos, viagens e aeroportos com segurança.',
    avaliacao: 4.8, comentarios: 92, disponibilidade: 'Mediante agendamento',
    textoPerfil: 'Motorista profissional, pontual e discreto. Veículo confortável e seguro. Conhecimento das melhores rotas.',
    textoExperiencia: 'Experiência como motorista particular e executivo. Transporte para aeroportos, reuniões, eventos e viagens curtas.',
    destaques: ['Veículo com ar condicionado', 'Direção segura', 'Disponibilidade para viagens']
  },
  {
    id: 19, nome: 'Sofia Azevedo', servico: 'Consultora de Estilo', urlFoto: 'https://www.shutterstock.com/image-photo/beautiful-asian-woman-lilac-hair-260nw-2613904989.jpg', focoDescricao: 'Ajuda para organizar o guarda-roupa e montar looks para diferentes ocasiões.',
    avaliacao: 4.7, comentarios: 63, disponibilidade: 'Flexível / Online ou Presencial',
    textoPerfil: 'Consultora de imagem e estilo, apaixonada por moda e por ajudar pessoas a expressarem sua personalidade através das roupas.',
    textoExperiencia: 'Análise de coloração pessoal, tipo físico e estilo. Organização de guarda-roupa (closet cleaning) e montagem de looks.',
    destaques: ['Personal shopper', 'Consultoria online', 'Workshops de estilo']
  },
  {
    id: 20, nome: 'Daniel Andrade', servico: 'Professor de Reforço', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk_JP3p8M52qy4TQGX6-OEwiikpxjc-hiJIA&s', focoDescricao: 'Aulas de reforço escolar em matemática e física para ensino fundamental e médio.',
    avaliacao: 4.9, comentarios: 80, disponibilidade: 'Seg-Sex / Tarde e Noite',
    textoPerfil: 'Professor paciente e com didática clara, focado em ajudar os alunos a superar dificuldades em matemática e física.',
    textoExperiencia: 'Graduando em Engenharia, com experiência em aulas particulares e monitoria. Acompanhamento escolar e preparação para provas.',
    destaques: ['Reforço de Matemática e Física', 'Aulas individuais', 'Ajuda com tarefas de casa']
  },
  // --- Cenário: Ricardo Rocha vs. Fotógrafo
  {
    id: 21, nome: 'Ricardo Rocha', servico: 'Fotógrafo', urlFoto: 'https://media.istockphoto.com/id/1352495212/pt/foto/portrait-of-friendly-young-businessman.jpg?s=612x612&w=0&k=20&c=JRHk1YPuyc5gsuRKnL-WJqXGCm9lB7tJMLP4Wl91Tto=', focoDescricao: 'Fotografia de eventos, produtos e retratos profissionais.',
    avaliacao: 4.9, comentarios: 112, disponibilidade: 'Fins de semana e agendamentos',
    textoPerfil: 'Fotógrafo apaixonado por capturar a essência de cada momento. Equipamento de ponta e olhar criativo.',
    textoExperiencia: 'Especialista em fotografia de casamentos e eventos corporativos. Experiência com ensaios em estúdio e externos.',
    destaques: ['Fotografia de casamento', 'Ensaios externos', 'Edição profissional']
  },
  {
    id: 22, nome: 'Ricardo Rocha', servico: 'Consultor de Vendas', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAQ2hR3qM4d7u_3CvoxvXMxOkXfk5jRPlioA&s', focoDescricao: 'Consultoria para otimização de processos de vendas B2B.',
    avaliacao: 4.6, comentarios: 71, disponibilidade: 'Horário comercial',
    textoPerfil: 'Profissional com vasta experiência em vendas e gestão comercial. Foco em resultados e estratégias personalizadas.',
    textoExperiencia: 'Consultoria para startups e empresas estabelecidas. Treinamento de equipes de vendas e implementação de CRM.',
    destaques: ['Estratégia de vendas B2B', 'Treinamento de equipes', 'Análise de métricas']
  },
  {
    id: 23, nome: 'Ricardo Rocha', servico: 'Designer Gráfico', urlFoto: 'https://media.istockphoto.com/id/520860375/pt/foto/ele-empresas-geridas.jpg?s=612x612&w=0&k=20&c=m3lG5EcUZKnynSHndeNGzZs2av2mgcHVHrcBp4tmLrw=', focoDescricao: 'Criação de identidades visuais, logos e materiais de marketing.',
    avaliacao: 4.8, comentarios: 85, disponibilidade: 'Seg-Sex / Remoto',
    textoPerfil: 'Designer criativo e atento às tendências do mercado. Busco traduzir a identidade da marca em peças visuais impactantes.',
    textoExperiencia: 'Criação de logos, papelaria, posts para redes sociais, banners e layouts para sites. Domínio do pacote Adobe.',
    destaques: ['Identidade Visual', 'Design para redes sociais', 'Criação de logos']
  },
  {
    id: 24, nome: 'Laura Mendes', servico: 'Fotógrafo', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4_WOevl5t3J8UeAEq5tMF9ypeY_JRuB3iGw&s', focoDescricao: 'Especialista em fotografia de paisagens e natureza.',
    avaliacao: 4.7, comentarios: 68, disponibilidade: 'Flexível / Viagens',
    textoPerfil: 'Fotógrafa aventureira, apaixonada por registrar a beleza do mundo natural. Disponível para projetos e expedições.',
    textoExperiencia: 'Fotografia documental de natureza, paisagens e vida selvagem. Venda de fotos para bancos de imagem e decoração.',
    destaques: ['Fotografia de natureza', 'Venda de prints', 'Disponível para viagens']
  },
  // --- Cenário: Nomes Compostos Parecidos
  {
    id: 25, nome: 'Ana Clara Souza', servico: 'Esteticista', urlFoto: 'https://st4.depositphotos.com/12982378/24512/i/450/depositphotos_245124972-stock-photo-charming-curly-woman-smiling-closed.jpg', focoDescricao: 'Limpeza de pele, massagem modeladora e tratamentos faciais.',
    avaliacao: 4.8, comentarios: 93, disponibilidade: 'Ter-Sáb / 10h-19h',
    textoPerfil: 'Esteticista dedicada ao cuidado e bem-estar da pele. Utilizo produtos de qualidade e técnicas personalizadas.',
    textoExperiencia: 'Experiência em limpeza de pele profunda, hidratação facial, peeling de diamante, drenagem linfática e massagem relaxante.',
    destaques: ['Limpeza de pele', 'Tratamentos faciais', 'Massagem relaxante']
  },
  {
    id: 26, nome: 'Maria Clara Dias', servico: 'Nutricionista', urlFoto: 'https://media.istockphoto.com/id/1389348844/pt/foto/studio-shot-of-a-beautiful-young-woman-smiling-while-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=_S9i0a8hmVyTNfyoie0DU7Somh9P_a5qL25kapJbmvU=', focoDescricao: 'Planos alimentares personalizados para diversos objetivos.',
    avaliacao: 4.9, comentarios: 108, disponibilidade: 'Seg-Qui / Horário comercial',
    textoPerfil: 'Nutricionista focada em reeducação alimentar e saúde. Acredito em uma nutrição equilibrada e sem radicalismos.',
    textoExperiencia: 'Elaboração de planos alimentares para emagrecimento, ganho de massa muscular, controle de doenças (diabetes, hipertensão) e vegetarianismo.',
    destaques: ['Reeducação alimentar', 'Nutrição esportiva', 'Acompanhamento personalizado']
  },
  {
    id: 27, nome: 'João Lucas Fernandes', servico: 'Personal Trainer', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA-DXU_9y6CaUlIUlM9E4MqtdPLtZuNYGbcA&s', focoDescricao: 'Treinamento físico focado em hipertrofia e emagrecimento.',
    avaliacao: 4.7, comentarios: 115, disponibilidade: 'Flexível / Manhã, Tarde, Noite',
    textoPerfil: 'Educador físico motivador e experiente. Monto treinos personalizados de acordo com seus objetivos e limitações.',
    textoExperiencia: 'Experiência com musculação, treinamento funcional, preparação para corridas e treinos para grupos especiais (idosos, gestantes).',
    destaques: ['Treinos personalizados', 'Acompanhamento online', 'Avaliação física']
  },
  {
    id: 28, nome: 'Mário Lucas Correia', servico: 'Fisioterapeuta', urlFoto: 'https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg', focoDescricao: 'Reabilitação de lesões ortopédicas e esportivas.',
    avaliacao: 4.8, comentarios: 79, disponibilidade: 'Seg-Sex / Tarde',
    textoPerfil: 'Fisioterapeuta dedicado à recuperação e prevenção de lesões. Atendimento focado na necessidade individual de cada paciente.',
    textoExperiencia: 'Experiência com reabilitação pós-cirúrgica, tratamento de dores na coluna, lesões musculares e articulares. Liberação miofascial.',
    destaques: ['Fisioterapia ortopédica', 'Reabilitação esportiva', 'Atendimento domiciliar']
  },
  // --- Cenário: Nomes com Acento
  {
    id: 29, nome: 'Sônia Braga', servico: 'Advogada', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTDz3nqfElxcn9UUqCpiqlLI9P-bWwQ1jv7w&s', focoDescricao: 'Consultoria jurídica na área cível e de família.',
    avaliacao: 4.9, comentarios: 91, disponibilidade: 'Horário comercial',
    textoPerfil: 'Advogada experiente e comprometida com a defesa dos direitos dos meus clientes. Atuação ética e transparente.',
    textoExperiencia: 'Especialista em direito de família (divórcio, pensão alimentícia, guarda) e direito cível (contratos, indenizações).',
    destaques: ['Direito de Família', 'Direito Cível', 'Consultoria jurídica']
  },
  {
    id: 30, nome: 'Fábio Júnior', servico: 'Contador', urlFoto: 'https://media.istockphoto.com/id/1364917563/pt/foto/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=U8JPP2jR5ibSuE_t0JrWgm0iQEfuMHHGMGTwEIMzNq0=', focoDescricao: 'Serviços de contabilidade para pequenas e médias empresas.',
    avaliacao: 4.6, comentarios: 105, disponibilidade: 'Seg-Sex / 9h-18h',
    textoPerfil: 'Contador organizado e atualizado com a legislação fiscal. Auxilio empresas a manterem suas obrigações em dia e a otimizar sua carga tributária.',
    textoExperiencia: 'Abertura e encerramento de empresas, escrituração fiscal e contábil, apuração de impostos, folha de pagamento e declaração de imposto de renda.',
    destaques: ['Contabilidade para MEI', 'Assessoria fiscal', 'Imposto de Renda']
  },
  {
    id: 31, nome: 'Vitória Régia', servico: 'Arquiteta', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiiBm5VewsDuIlhLPUSlB_3jX2n8sCTWMIsw&sr', focoDescricao: 'Projetos de arquitetura residencial e design de interiores.',
    avaliacao: 4.9, comentarios: 75, disponibilidade: 'Horário comercial / Reuniões agendadas',
    textoPerfil: 'Arquiteta criativa, atenta às necessidades e desejos dos clientes para criar espaços funcionais e esteticamente agradáveis.',
    textoExperiencia: 'Desenvolvimento de projetos arquitetônicos completos, desde o estudo preliminar até o acompanhamento da obra. Projetos de interiores e decoração.',
    destaques: ['Projetos residenciais', 'Design de interiores', 'Acompanhamento de obra']
  },
  {
    id: 32, nome: 'Débora Nascimento', servico: 'Psicóloga', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyRqC0QTapocrSRTC4ThnZg0gBdBf6j0xjXA&s', focoDescricao: 'Terapia individual para adultos com abordagem cognitivo-comportamental.',
    avaliacao: 5.0, comentarios: 120, disponibilidade: 'Flexível / Online ou Presencial',
    textoPerfil: 'Psicóloga acolhedora e dedicada a auxiliar no processo de autoconhecimento e desenvolvimento pessoal. Ambiente seguro e confidencial.',
    textoExperiencia: 'Atendimento clínico para adultos com foco em ansiedade, depressão, estresse, relacionamentos e autoestima. Abordagem TCC.',
    destaques: ['Terapia Cognitivo-Comportamental', 'Atendimento online', 'Foco em ansiedade e depressão']
  },
  // --- Cenário: Mais "istas"
  {
    id: 33, nome: 'Paula Fernandes', servico: 'Recepcionista', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxeZhF_fEzXjb4t1PBMupOYeUKDz0Iu7dxGA&s', focoDescricao: 'Serviços de recepção para eventos e escritórios.',
    avaliacao: 4.5, comentarios: 66, disponibilidade: 'Eventos / Freelancer',
    textoPerfil: 'Recepcionista simpática, organizada e com excelente comunicação. Experiência em lidar com o público em diferentes situações.',
    textoExperiencia: 'Recepção e credenciamento em eventos corporativos, feiras e congressos. Atendimento telefônico e presencial em escritórios.',
    destaques: ['Recepcionista bilíngue (Inglês)', 'Organização de eventos', 'Excelente comunicação']
  },
  {
    id: 34, nome: 'Otávio Martins', servico: 'Motorista de Aplicativo', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZj6M5HxtneYiiM1v-ELHSGTypLVAoQ6bguw&s', focoDescricao: 'Motorista particular para corridas locais.',
    avaliacao: 4.4, comentarios: 140, disponibilidade: 'Variável (conforme app)',
    textoPerfil: 'Motorista cuidadoso e conhecedor da cidade. Comprometido em oferecer uma viagem segura e agradável.',
    textoExperiencia: 'Motorista de aplicativo com alta avaliação. Experiência com diferentes plataformas e tipos de passageiros.',
    destaques: ['Viagens locais rápidas', 'Carro limpo e seguro', 'Conhecimento da cidade']
  },
  // --- Preenchimento com mais dados diversos (IDs 35 a 100) ---
  {
    id: 35, nome: 'Marcelo Antunes', servico: 'Churrasqueiro', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk_JP3p8M52qy4TQGX6-OEwiikpxjc-hiJIA&s', focoDescricao: 'Serviço de churrasco completo para festas e eventos.',
    avaliacao: 4.9, comentarios: 88, disponibilidade: 'Fins de semana e feriados',
    textoPerfil: 'Mestre churrasqueiro com paixão por carnes de qualidade e preparo impecável. Levo tudo o que você precisa para o seu evento.',
    textoExperiencia: 'Experiência em churrascos para grupos pequenos e grandes. Conhecimento de diferentes cortes e pontos de carne. Preparo de acompanhamentos.',
    destaques: ['Churrasco para eventos', 'Carnes nobres', 'Acompanhamentos inclusos']
  },
  {
    id: 36, nome: 'Patrícia Poeta', servico: 'Jornalista', urlFoto: 'https://www.shutterstock.com/image-photo/beautiful-asian-woman-lilac-hair-260nw-2613904989.jpg', focoDescricao: 'Redação de artigos e matérias para blogs e sites.',
    avaliacao: 4.7, comentarios: 52, disponibilidade: 'Horário comercial / Remoto',
    textoPerfil: 'Jornalista com excelente habilidade de escrita e pesquisa. Produzo conteúdo informativo e engajador para diversas plataformas.',
    textoExperiencia: 'Redação e edição de textos para web, entrevistas, cobertura de eventos e criação de conteúdo para redes sociais.',
    destaques: ['Redação SEO', 'Criação de conteúdo web', 'Entrevistas']
  },
  {
    id: 37, nome: 'Márcio Garcia', servico: 'Vidraceiro', urlFoto: 'https://media.istockphoto.com/id/1485546774/pt/foto/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=lXDGScuGZHB43G9RC6o0_8J0pqR05K5RSrV2K3JG0nU=', focoDescricao: 'Instalação e manutenção de vidros, espelhos e box.',
    avaliacao: 4.6, comentarios: 69, disponibilidade: 'Seg-Sex / 8h-17h',
    textoPerfil: 'Vidraceiro detalhista e experiente. Trabalho com segurança e precisão para garantir a melhor instalação e acabamento.',
    textoExperiencia: 'Instalação de janelas, portas de vidro, box para banheiro, espelhos e tampos de mesa. Manutenção e troca de vidros quebrados.',
    destaques: ['Instalação de box', 'Espelhos sob medida', 'Serviço rápido']
  },
  {
    id: 38, nome: 'Isabela Drummond', servico: 'Confeiteira', urlFoto: 'https://media.istockphoto.com/id/1483329842/pt/foto/studio-portrait-of-attractive-woman-wearing-shirt-and-laughing-while-sitting-at-isolated-grey.jpg?s=612x612&w=0&k=20&c=0F5iXUL_ZpSRjyJKisRz_gpaE-3ucaBoheY83XDeE_g=', focoDescricao: 'Bolos e doces personalizados para todas as ocasiões.',
    avaliacao: 5.0, comentarios: 135, disponibilidade: 'Encomendas / Agendamento',
    textoPerfil: 'Confeiteira apaixonada por criar doces que encantam os olhos e o paladar. Uso ingredientes frescos e de alta qualidade.',
    textoExperiencia: 'Especialista em bolos decorados (pasta americana, buttercream), doces finos para festas, cupcakes e sobremesas.',
    destaques: ['Bolos decorados', 'Doces para festas', 'Opções sem glúten/lactose']
  },
  {
    id: 39, nome: 'Ricardo Reymond', servico: 'Marceneiro', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAcxKvNdS_m2u21A3f1eq6wnd7jBrabcfYDw&s', focoDescricao: 'Criação e reparo de móveis de madeira sob medida.',
    avaliacao: 4.8, comentarios: 81, disponibilidade: 'Seg-Sex / Horário comercial',
    textoPerfil: 'Marceneiro habilidoso e criativo. Trabalho com diversos tipos de madeira para criar peças únicas e duráveis.',
    textoExperiencia: 'Fabricação de móveis planejados (armários, estantes, painéis), restauração de móveis antigos e pequenos reparos em madeira.',
    destaques: ['Móveis sob medida', 'Restauração', 'Acabamento de qualidade']
  },
  {
    id: 40, nome: 'Helena Ranaldi', servico: 'Cerimonialista', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4_WOevl5t3J8UeAEq5tMF9ypeY_JRuB3iGw&s', focoDescricao: 'Organização completa de casamentos e eventos sociais.',
    avaliacao: 4.9, comentarios: 98, disponibilidade: 'Mediante consulta',
    textoPerfil: 'Cerimonialista organizada e dedicada a tornar seu evento inesquecível. Cuido de todos os detalhes para que você possa aproveitar.',
    textoExperiencia: 'Planejamento e execução de casamentos, festas de 15 anos, bodas e eventos corporativos. Coordenação de fornecedores e cronograma.',
    destaques: ['Organização de casamentos', 'Assessoria completa', 'Coordenação no dia do evento']
  },
  {
    id: 41, nome: 'Leandro Hassum', servico: 'Animador de Festas', urlFoto: 'https://media.istockphoto.com/id/1352495212/pt/foto/portrait-of-friendly-young-businessman.jpg?s=612x612&w=0&k=20&c=JRHk1YPuyc5gsuRKnL-WJqXGCm9lB7tJMLP4Wl91Tto=', focoDescricao: 'Animação com personagens, mágicas e brincadeiras.',
    avaliacao: 4.7, comentarios: 73, disponibilidade: 'Fins de semana',
    textoPerfil: 'Animador divertido e experiente em entretenimento infantil. Levo alegria e diversão para a sua festa.',
    textoExperiencia: 'Shows de mágica, palhaço, esculturas de balões e brincadeiras interativas para crianças de todas as idades.',
    destaques: ['Animação infantil', 'Show de mágica', 'Personagens temáticos']
  },
  {
    id: 42, nome: 'Cláudia Abreu', servico: 'Fotógrafo', urlFoto: 'https://st4.depositphotos.com/12982378/24512/i/450/depositphotos_245124972-stock-photo-charming-curly-woman-smiling-closed.jpg', focoDescricao: 'Passeios recreativos para cães (sinônimo de Dog Walker).',
    avaliacao: 4.8, comentarios: 89, disponibilidade: 'Fins de semana e Agendamentos',
    textoPerfil: 'Fotógrafa com olhar sensível para registrar momentos espontâneos. Especialista em retratos e eventos familiares.',
    textoExperiencia: 'Ensaios fotográficos de família, gestantes, bebês e cobertura de eventos sociais como batizados e aniversários.',
    destaques: ['Ensaios de família', 'Fotografia de eventos', 'Retratos espontâneos']
  },
  {
    id: 43, nome: 'Sérgio Guizé', servico: 'Barman', urlFoto: 'https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg', focoDescricao: 'Preparo de drinks e coquetéis para festas e bares.',
    avaliacao: 4.6, comentarios: 101, disponibilidade: 'Noites e Fins de Semana',
    textoPerfil: 'Barman criativo e ágil, com conhecimento em coquetelaria clássica e moderna. Preparo drinks saborosos e visualmente atraentes.',
    textoExperiencia: 'Experiência em bares, restaurantes e eventos. Criação de cardápios de drinks personalizados e preparo de coquetéis não alcoólicos.',
    destaques: ['Coquetelaria para eventos', 'Drinks clássicos e autorais', 'Barman freelancer']
  },
  {
    id: 44, nome: 'Taís Araújo', servico: 'Maquiadora', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTDz3nqfElxcn9UUqCpiqlLI9P-bWwQ1jv7w&s', focoDescricao: 'Maquiagem social para eventos, noivas e formaturas.',
    avaliacao: 4.9, comentarios: 122, disponibilidade: 'Mediante agendamento',
    textoPerfil: 'Maquiadora profissional, atenta às últimas tendências e dedicada a realçar a beleza natural de cada cliente.',
    textoExperiencia: 'Especialista em maquiagem para noivas, madrinhas, debutantes e eventos sociais. Utilizo produtos de alta qualidade e longa duração.',
    destaques: ['Maquiagem para noivas', 'Maquiagem social', 'Produtos de alta qualidade']
  },
  {
    id: 45, nome: 'Lázaro Ramos', servico: 'Ator (Aulas)', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA-DXU_9y6CaUlIUlM9E4MqtdPLtZuNYGbcA&s', focoDescricao: 'Aulas de teatro e expressão corporal para iniciantes.',
    avaliacao: 4.8, comentarios: 77, disponibilidade: 'Noites / Online ou Presencial',
    textoPerfil: 'Ator e diretor com paixão por compartilhar conhecimento. Aulas focadas em desinibição, criatividade e técnicas de interpretação.',
    textoExperiencia: 'Experiência com aulas de teatro para grupos e individuais, para adolescentes e adultos. Montagem de pequenas cenas.',
    destaques: ['Aulas de interpretação', 'Expressão corporal', 'Teatro para iniciantes']
  },
  {
    id: 46, nome: 'Andréia Horta', servico: 'Revisora de Textos', urlFoto: 'https://media.istockphoto.com/id/1389348844/pt/foto/studio-shot-of-a-beautiful-young-woman-smiling-while-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=_S9i0a8hmVyTNfyoie0DU7Somh9P_a5qL25kapJbmvU=', focoDescricao: 'Revisão ortográfica e gramatical de trabalhos acadêmicos.',
    avaliacao: 4.9, comentarios: 65, disponibilidade: 'Horário comercial / Remoto',
    textoPerfil: 'Revisora meticulosa e atenta aos detalhes. Garanto a clareza, coesão e correção gramatical dos seus textos.',
    textoExperiencia: 'Revisão de artigos científicos, TCCs, dissertações, livros e textos para web. Adequação às normas da ABNT.',
    destaques: ['Revisão ABNT', 'Revisão ortográfica e gramatical', 'Clareza textual']
  },
  {
    id: 47, nome: 'Marcos Palmeira', servico: 'Produtor Orgânico', urlFoto: 'https://media.istockphoto.com/id/1364917563/pt/foto/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=U8JPP2jR5ibSuE_t0JrWgm0iQEfuMHHGMGTwEIMzNq0=', focoDescricao: 'Venda de cestas de produtos orgânicos frescos.',
    avaliacao: 5.0, comentarios: 140, disponibilidade: 'Entregas semanais',
    textoPerfil: 'Produtor rural dedicado ao cultivo de alimentos orgânicos, saudáveis e saborosos, respeitando o meio ambiente.',
    textoExperiencia: 'Produção de hortaliças, legumes e frutas orgânicas certificadas. Montagem e entrega de cestas semanais variadas.',
    destaques: ['Cestas orgânicas', 'Produtos frescos da estação', 'Entrega em domicílio']
  },
  {
    id: 48, nome: 'Dira Paes', servico: 'Costureira', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiiBm5VewsDuIlhLPUSlB_3jX2n8sCTWMIsw&sr', focoDescricao: 'Ajustes, reparos e confecção de roupas sob medida.',
    avaliacao: 4.7, comentarios: 105, disponibilidade: 'Horário comercial',
    textoPerfil: 'Costureira experiente e caprichosa. Realizo desde pequenos ajustes até a confecção de peças exclusivas.',
    textoExperiencia: 'Ajustes de barras, cinturas e mangas. Troca de zíperes. Confecção de vestidos de festa, saias, blusas e uniformes.',
    destaques: ['Ajustes e reparos', 'Roupas sob medida', 'Confecção de vestidos']
  },
  {
    id: 49, nome: 'Irandhir Santos', servico: 'Técnico de Celular', urlFoto: 'https://media.istockphoto.com/id/1485546774/pt/foto/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=lXDGScuGZHB43G9RC6o0_8J0pqR05K5RSrV2K3JG0nU=', focoDescricao: 'Conserto de telas, baterias e outros componentes de smartphones.',
    avaliacao: 4.6, comentarios: 92, disponibilidade: 'Seg-Sáb / 9h-18h',
    textoPerfil: 'Técnico especializado em reparo de smartphones de diversas marcas. Diagnóstico rápido e serviço com garantia.',
    textoExperiencia: 'Troca de telas, baterias, conectores de carga e outros componentes. Reparos em placa e solução de problemas de software.',
    destaques: ['Troca de tela na hora', 'Reparo de iPhone e Android', 'Serviço com garantia']
  },
  {
    id: 50, nome: 'Adriana Esteves', servico: 'Dubladora', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyRqC0QTapocrSRTC4ThnZg0gBdBf6j0xjXA&s', focoDescricao: 'Serviços de locução e dublagem para vídeos e comerciais.',
    avaliacao: 4.9, comentarios: 78, disponibilidade: 'Remoto / Freelancer',
    textoPerfil: 'Atriz e dubladora com voz versátil e excelente dicção. Gravação em estúdio caseiro com qualidade profissional.',
    textoExperiencia: 'Dublagem de personagens, narração para vídeos institucionais, audiobooks, spots de rádio e URA (atendimento telefônico).',
    destaques: ['Locução publicitária', 'Dublagem', 'Voz versátil']
  },
  {
    id: 51, nome: 'Fábio Assunção', servico: 'Piscineiro', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAQ2hR3qM4d7u_3CvoxvXMxOkXfk5jRPlioA&s', focoDescricao: 'Limpeza e tratamento químico de piscinas.',
    avaliacao: 4.5, comentarios: 81, disponibilidade: 'Visitas semanais/quinzenais',
    textoPerfil: 'Profissional dedicado à manutenção e limpeza de piscinas, garantindo água cristalina e segura para o uso.',
    textoExperiencia: 'Limpeza física (aspiração, escovação), controle de pH e cloro, tratamento de água verde e manutenção de filtros e bombas.',
    destaques: ['Tratamento de piscinas', 'Manutenção preventiva', 'Água cristalina']
  },
  {
    id: 52, nome: 'Letícia Sabatella', servico: 'Cantora (Eventos)', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxeZhF_fEzXjb4t1PBMupOYeUKDz0Iu7dxGA&s', focoDescricao: 'Apresentações musicais de voz e violão para casamentos.',
    avaliacao: 5.0, comentarios: 99, disponibilidade: 'Eventos / Agendamento',
    textoPerfil: 'Cantora com voz suave e repertório eclético. Apresentações emocionantes para tornar seu evento ainda mais especial.',
    textoExperiencia: 'Performance musical em cerimônias de casamento, recepções, jantares e eventos corporativos. Repertório de MPB, pop e bossa nova.',
    destaques: ['Música para casamentos', 'Voz e violão', 'Repertório personalizado']
  },
  {
    id: 53, nome: 'Murilo Benício', servico: 'Chaveiro', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZj6M5HxtneYiiM1v-ELHSGTypLVAoQ6bguw&s', focoDescricao: 'Cópias de chaves e abertura de portas e cadeados.',
    avaliacao: 4.6, comentarios: 110, disponibilidade: 'Atendimento 24h',
    textoPerfil: 'Chaveiro experiente e confiável. Atendimento rápido para emergências e serviços gerais de chaveiro.',
    textoExperiencia: 'Abertura de portas residenciais e automotivas, cópias de chaves comuns e codificadas, instalação de fechaduras e travas de segurança.',
    destaques: ['Abertura de portas 24h', 'Chaves codificadas', 'Instalação de fechaduras']
  },
  {
    id: 54, nome: 'Giovanna Antonelli', servico: 'Designer de Sobrancelhas', urlFoto: 'https://www.shutterstock.com/image-photo/beautiful-asian-woman-lilac-hair-260nw-2613904989.jpg', focoDescricao: 'Design e aplicação de henna para sobrancelhas.',
    avaliacao: 4.8, comentarios: 140, disponibilidade: 'Ter-Sáb / 10h-19h',
    textoPerfil: 'Designer especialista em realçar o olhar através do design de sobrancelhas personalizado para cada tipo de rosto.',
    textoExperiencia: 'Técnicas de design com pinça e linha, aplicação de henna, brow lamination e micropigmentação (consultar).',
    destaques: ['Design de sobrancelhas', 'Aplicação de henna', 'Micropigmentação fio a fio']
  },
  {
    id: 55, nome: 'Ricardo Nero', servico: 'Tatuador', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk_JP3p8M52qy4TQGX6-OEwiikpxjc-hiJIA&s', focoDescricao: 'Criação de tatuagens personalizadas em diversos estilos.',
    avaliacao: 4.9, comentarios: 95, disponibilidade: 'Agendamento / Estúdio próprio',
    textoPerfil: 'Tatuador artístico, apaixonado por transformar ideias em arte na pele. Biossegurança e materiais de alta qualidade.',
    textoExperiencia: 'Especialista em estilos como fineline, blackwork, aquarela e old school. Criação de desenhos exclusivos para cada cliente.',
    destaques: ['Tatuagens exclusivas', 'Estilos variados', 'Biossegurança rigorosa']
  },
  {
    id: 56, nome: 'Juliana Paes', servico: 'Modelo Fotográfica', urlFoto: 'https://media.istockphoto.com/id/1483329842/pt/foto/studio-portrait-of-attractive-woman-wearing-shirt-and-laughing-while-sitting-at-isolated-grey.jpg?s=612x612&w=0&k=20&c=0F5iXUL_ZpSRjyJKisRz_gpaE-3ucaBoheY83XDeE_g=', focoDescricao: 'Modelo para ensaios fotográficos de marcas e produtos.',
    avaliacao: 4.7, comentarios: 82, disponibilidade: 'Freelancer / Agendamento',
    textoPerfil: 'Modelo fotográfica versátil e expressiva. Experiência em frente às câmeras para diversos segmentos.',
    textoExperiencia: 'Trabalhos para catálogos de moda, campanhas publicitárias, editoriais e e-commerce. Boa desenvoltura e profissionalismo.',
    destaques: ['Modelo fashion', 'Modelo comercial', 'Disponibilidade para viagens']
  },
  {
    id: 57, nome: 'Tony Ramos', servico: 'Cuidador de Idosos', urlFoto: 'https://media.istockphoto.com/id/520860375/pt/foto/ele-empresas-geridas.jpg?s=612x612&w=0&k=20&c=m3lG5EcUZKnynSHndeNGzZs2av2mgcHVHrcBp4tmLrw=', focoDescricao: 'Acompanhamento e auxílio a idosos em suas rotinas diárias.',
    avaliacao: 4.9, comentarios: 118, disponibilidade: 'Diurno / Noturno / Fins de semana',
    textoPerfil: 'Cuidador paciente, atencioso e dedicado ao bem-estar e conforto da pessoa idosa. Experiência e referências.',
    textoExperiencia: 'Auxílio com higiene pessoal, alimentação, medicação, mobilidade e acompanhamento em consultas médicas. Atividades de lazer e companhia.',
    destaques: ['Acompanhamento 24h (consultar)', 'Cuidados paliativos', 'Experiência comprovada']
  },
  {
    id: 58, nome: 'Fernanda Montenegro', servico: 'Contadora de Histórias', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4_WOevl5t3J8UeAEq5tMF9ypeY_JRuB3iGw&s', focoDescricao: 'Narração de histórias para crianças em festas e escolas.',
    avaliacao: 5.0, comentarios: 90, disponibilidade: 'Eventos / Agendamento',
    textoPerfil: 'Atriz e contadora de histórias apaixonada por encantar o público infantil com narrativas lúdicas e interativas.',
    textoExperiencia: 'Apresentações em festas de aniversário, escolas, bibliotecas e eventos culturais. Repertório variado de contos clássicos e populares.',
    destaques: ['Contação de histórias interativa', 'Teatro de fantoches', 'Oficinas lúdicas']
  },
  {
    id: 59, nome: 'Lima Duarte', servico: 'Artesão', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAcxKvNdS_m2u21A3f1eq6wnd7jBrabcfYDw&s', focoDescricao: 'Produção e venda de peças de artesanato em madeira.',
    avaliacao: 4.8, comentarios: 72, disponibilidade: 'Feiras / Online',
    textoPerfil: 'Artesão com habilidade em transformar madeira bruta em peças decorativas e utilitárias únicas.',
    textoExperiencia: 'Criação de esculturas, porta-retratos, caixas decoradas, tábuas de corte e outros objetos em madeira. Trabalho manual detalhado.',
    destaques: ['Peças exclusivas em madeira', 'Artesanato local', 'Aceita encomendas']
  },
  {
    id: 60, nome: 'Glória Pires', servico: 'Organizadora Profissional', urlFoto: 'https://st4.depositphotos.com/12982378/24512/i/450/depositphotos_245124972-stock-photo-charming-curly-woman-smiling-closed.jpg', focoDescricao: 'Organização de armários, closets e ambientes residenciais.',
    avaliacao: 4.9, comentarios: 105, disponibilidade: 'Horário comercial',
    textoPerfil: 'Personal organizer certificada. Ajudo a transformar a desordem em ambientes funcionais, práticos e harmoniosos.',
    textoExperiencia: 'Organização de closets e guarda-roupas (método de dobras), cozinhas, escritórios e áreas de serviço. Criação de sistemas de organização.',
    destaques: ['Organização residencial', 'Método Marie Kondo (adaptado)', 'Consultoria de organização']
  },
  {
    id: 61, nome: 'Francisco Cuoco', servico: 'Reparos Residenciais', urlFoto: 'https://media.istockphoto.com/id/1352495212/pt/foto/portrait-of-friendly-young-businessman.jpg?s=612x612&w=0&k=20&c=JRHk1YPuyc5gsuRKnL-WJqXGCm9lB7tJMLP4Wl91Tto=', focoDescricao: 'Pequenos reparos, o famoso "marido de aluguel".',
    avaliacao: 4.6, comentarios: 85, disponibilidade: 'Seg-Sáb / 9h-17h',
    textoPerfil: 'Profissional "faz-tudo" para resolver pequenos reparos e instalações em sua casa com praticidade e eficiência.',
    textoExperiencia: 'Instalação de prateleiras, cortinas, varais, suportes de TV. Pequenos reparos elétricos (troca de tomadas) e hidráulicos (troca de torneiras).',
    destaques: ['Marido de aluguel', 'Pequenos reparos', 'Instalações diversas']
  },
  {
    id: 62, nome: 'Eva Wilma', servico: 'Florista', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTDz3nqfElxcn9UUqCpiqlLI9P-bWwQ1jv7w&s', focoDescricao: 'Criação de arranjos florais para decoração e presentes.',
    avaliacao: 4.8, comentarios: 78, disponibilidade: 'Encomendas / Loja física (consultar)',
    textoPerfil: 'Florista apaixonada por criar arranjos que transmitem beleza e emoção. Trabalho com flores frescas e selecionadas.',
    textoExperiencia: 'Criação de buquês, arranjos para eventos (casamentos, corporativos), cestas de presente e decoração floral de ambientes.',
    destaques: ['Arranjos florais personalizados', 'Buquês de noiva', 'Assinatura floral']
  },
  {
    id: 63, nome: 'Juca de Oliveira', servico: 'Fotógrafo', urlFoto: 'https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg', focoDescricao: 'Consultoria para escolha e harmonização de vinhos.',
    avaliacao: 4.9, comentarios: 62, disponibilidade: 'Agendamento / Consultoria',
    textoPerfil: 'Fotógrafo especializado em retratos corporativos e fotos de produtos. Imagens que valorizam sua marca pessoal ou negócio.',
    textoExperiencia: 'Ensaios fotográficos para perfis profissionais (LinkedIn), fotos de produtos para e-commerce e catálogos.',
    destaques: ['Retratos corporativos', 'Fotografia de produtos', 'Estúdio próprio (consultar)']
  },
  {
    id: 64, nome: 'Betty Faria', servico: 'Professora de Dança', urlFoto: 'https://media.istockphoto.com/id/1389348844/pt/foto/studio-shot-of-a-beautiful-young-woman-smiling-while-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=_S9i0a8hmVyTNfyoie0DU7Somh9P_a5qL25kapJbmvU=', focoDescricao: 'Aulas de dança de salão para todas as idades.',
    avaliacao: 4.7, comentarios: 88, disponibilidade: 'Noites / Fins de semana',
    textoPerfil: 'Professora de dança experiente e animada. Aulas divertidas para aprender a dançar e se exercitar ao mesmo tempo.',
    textoExperiencia: 'Aulas de forró, samba de gafieira, bolero, salsa e zouk. Aulas particulares e em grupo. Coreografias para eventos.',
    destaques: ['Dança de salão', 'Aulas particulares', 'Coreografias']
  },
  {
    id: 65, nome: 'Stênio Garcia', servico: 'Pescador (Guia)', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA-DXU_9y6CaUlIUlM9E4MqtdPLtZuNYGbcA&s', focoDescricao: 'Guia de pesca esportiva em rios e lagos da região.',
    avaliacao: 4.8, comentarios: 55, disponibilidade: 'Fins de semana / Agendamento',
    textoPerfil: 'Pescador experiente e conhecedor dos melhores pontos de pesca da região. Levo você a uma pescaria segura e produtiva.',
    textoExperiencia: 'Guia para pesca de tucunaré, traíra e outros peixes locais. Aluguel de barco e equipamento (consultar).',
    destaques: ['Guia de pesca esportiva', 'Conhecimento da região', 'Pesca embarcada']
  },
  {
    id: 66, nome: 'Aracy Balabanian', servico: 'Aulas de Culinária', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiiBm5VewsDuIlhLPUSlB_3jX2n8sCTWMIsw&sr', focoDescricao: 'Aulas práticas de culinária básica e regional.',
    avaliacao: 4.9, comentarios: 71, disponibilidade: 'Sábados / Agendamento',
    textoPerfil: 'Cozinheira de mão cheia, apaixonada por ensinar os segredos da boa culinária de forma simples e prática.',
    textoExperiencia: 'Aulas de culinária básica (arroz, feijão, carnes), pratos regionais, sobremesas e pães caseiros. Aulas em grupo ou individuais.',
    destaques: ['Culinária básica', 'Comida regional', 'Aulas práticas']
  },
  {
    id: 67, nome: 'Tarcísio Meira', servico: 'Personal Driver', urlFoto: 'https://media.istockphoto.com/id/1364917563/pt/foto/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=U8JPP2jR5ibSuE_t0JrWgm0iQEfuMHHGMGTwEIMzNq0=', focoDescricao: 'Serviço de motorista (sinônimo de Motorista Particular).',
    avaliacao: 4.9, comentarios: 95, disponibilidade: 'Mediante agendamento prévio',
    textoPerfil: 'Motorista experiente, focado em segurança, conforto e pontualidade. Ideal para viagens ou para quem busca um serviço diferenciado.',
    textoExperiencia: 'Transporte executivo, viagens intermunicipais, motorista para eventos sociais com espera. Veículo de luxo (consultar).',
    destaques: ['Transporte executivo', 'Viagens', 'Motorista para eventos']
  },
  {
    id: 68, nome: 'Nicette Bruno', servico: 'Acompanhante Hospitalar', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyRqC0QTapocrSRTC4ThnZg0gBdBf6j0xjXA&s', focoDescricao: 'Acompanhamento de pacientes em hospitais e clínicas.',
    avaliacao: 4.8, comentarios: 83, disponibilidade: 'Diurno / Noturno',
    textoPerfil: 'Acompanhante atenciosa e prestativa, oferecendo suporte e companhia a pacientes durante internações ou consultas.',
    textoExperiencia: 'Auxílio na comunicação com a equipe médica, cuidados básicos de conforto, leitura e companhia para pacientes de todas as idades.',
    destaques: ['Acompanhamento em hospitais', 'Suporte ao paciente', 'Companhia']
  },
  {
    id: 69, nome: 'Ricardo Goulart', servico: 'Corretor de Imóveis', urlFoto: 'https://media.istockphoto.com/id/1485546774/pt/foto/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=lXDGScuGZHB43G9RC6o0_8J0pqR05K5RSrV2K3JG0nU=', focoDescricao: 'Intermediação na compra, venda e aluguel de imóveis.',
    avaliacao: 4.7, comentarios: 101, disponibilidade: 'Horário comercial e fins de semana',
    textoPerfil: 'Corretor de imóveis credenciado (CRECI), dedicado a encontrar o imóvel ideal para você ou a vender seu imóvel com agilidade.',
    textoExperiencia: 'Avaliação de imóveis, captação de clientes, negociação e acompanhamento de todo o processo de compra, venda ou locação.',
    destaques: ['Compra e venda de imóveis', 'Aluguel residencial', 'Avaliação imobiliária']
  },
  {
    id: 70, nome: 'Nathalia Timberg', servico: 'Fotógrafo', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxeZhF_fEzXjb4t1PBMupOYeUKDz0Iu7dxGA&s', focoDescricao: 'Aulas sobre etiqueta social e profissional.',
    avaliacao: 5.0, comentarios: 79, disponibilidade: 'Agendamento / Workshops',
    textoPerfil: 'Fotógrafa especialista em retratos artísticos e conceituais. Capturo a beleza e a personalidade de forma única.',
    textoExperiencia: 'Ensaios fotográficos temáticos, retratos fine art, fotografia de moda conceitual.',
    destaques: ['Retratos artísticos', 'Fotografia conceitual', 'Ensaios temáticos']
  },
  {
    id: 71, nome: 'Leonardo Villar', servico: 'Restaurador de Arte', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAQ2hR3qM4d7u_3CvoxvXMxOkXfk5jRPlioA&s', focoDescricao: 'Restauração de pinturas e pequenas esculturas.',
    avaliacao: 4.9, comentarios: 45, disponibilidade: 'Ateliê / Agendamento',
    textoPerfil: 'Restaurador de arte com conhecimento técnico e sensibilidade para preservar a integridade de obras de arte.',
    textoExperiencia: 'Restauração de pinturas a óleo, acrílicas, esculturas em madeira e gesso. Limpeza, reintegração cromática e conservação preventiva.',
    destaques: ['Restauração de pinturas', 'Conservação de arte', 'Técnicas especializadas']
  },
  {
    id: 72, nome: 'Laura Cardoso', servico: 'Revisora de TCC', urlFoto: 'https://www.shutterstock.com/image-photo/beautiful-asian-woman-lilac-hair-260nw-2613904989.jpg', focoDescricao: 'Revisão e formatação de trabalhos de conclusão de curso.',
    avaliacao: 4.8, comentarios: 95, disponibilidade: 'Remoto / Prazos a combinar',
    textoPerfil: 'Professora aposentada com vasta experiência em revisão de textos acadêmicos. Garanto a qualidade e adequação às normas.',
    textoExperiencia: 'Revisão de TCCs, monografias, dissertações e teses. Correção ortográfica, gramatical, de coesão, coerência e formatação ABNT.',
    destaques: ['Revisão ABNT completa', 'Correção textual detalhada', 'Experiência acadêmica']
  },
  {
    id: 73, nome: 'Gianfrancesco Guarnieri', servico: 'Eletricista Automotivo', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZj6M5HxtneYiiM1v-ELHSGTypLVAoQ6bguw&s', focoDescricao: 'Manutenção elétrica especializada em veículos.',
    avaliacao: 4.7, comentarios: 88, disponibilidade: 'Horário comercial',
    textoPerfil: 'Especialista em elétrica automotiva. Diagnóstico preciso e solução de problemas elétricos em carros nacionais e importados.',
    textoExperiencia: 'Reparo de alternadores, motores de partida, vidros elétricos, travas, alarmes e sistemas de injeção eletrônica.',
    destaques: ['Elétrica automotiva geral', 'Diagnóstico eletrônico', 'Instalação de acessórios']
  },
  {
    id: 74, nome: 'Marília Pêra', servico: 'Personal Stylist', urlFoto: 'https://media.istockphoto.com/id/1483329842/pt/foto/studio-portrait-of-attractive-woman-wearing-shirt-and-laughing-while-sitting-at-isolated-grey.jpg?s=612x612&w=0&k=20&c=0F5iXUL_ZpSRjyJKisRz_gpaE-3ucaBoheY83XDeE_g=', focoDescricao: 'Consultoria de imagem e estilo pessoal.',
    avaliacao: 4.9, comentarios: 92, disponibilidade: 'Agendamento / Consultoria',
    textoPerfil: 'Consultora de estilo que te ajuda a descobrir e expressar sua identidade através da moda, com elegância e autenticidade.',
    textoExperiencia: 'Análise de estilo, visagismo, montagem de looks para ocasiões especiais e dia a dia. Acompanhamento em compras.',
    destaques: ['Consultoria de imagem', 'Visagismo', 'Análise de estilo']
  },
  {
    id: 75, nome: 'José Wilker', servico: 'Crítico de Cinema (Aulas)', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk_JP3p8M52qy4TQGX6-OEwiikpxjc-hiJIA&s', focoDescricao: 'Aulas sobre história e crítica de cinema.',
    avaliacao: 4.8, comentarios: 61, disponibilidade: 'Online / Workshops',
    textoPerfil: 'Crítico e professor de cinema, apaixonado por analisar e discutir a sétima arte em profundidade.',
    textoExperiencia: 'Cursos e workshops sobre história do cinema, análise fílmica, gêneros cinematográficos e diretores renomados.',
    destaques: ['História do Cinema', 'Análise Fílmica', 'Cursos online']
  },
  {
    id: 76, nome: 'Bibi Ferreira', servico: 'Professora de Canto', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4_WOevl5t3J8UeAEq5tMF9ypeY_JRuB3iGw&s', focoDescricao: 'Aulas de técnica vocal para cantores amadores e profissionais.',
    avaliacao: 5.0, comentarios: 105, disponibilidade: 'Agendamento / Presencial ou Online',
    textoPerfil: 'Professora de canto experiente, com foco em técnica vocal, afinação, respiração e interpretação.',
    textoExperiencia: 'Aulas individuais personalizadas para diferentes estilos musicais (popular, lírico, musical). Preparação vocal para audições e apresentações.',
    destaques: ['Técnica vocal', 'Preparação para audições', 'Aulas de canto popular']
  },
  {
    id: 77, nome: 'Ricardo Cardoso', servico: 'Técnico de Informática', urlFoto: 'https://media.istockphoto.com/id/520860375/pt/foto/ele-empresas-geridas.jpg?s=612x612&w=0&k=20&c=m3lG5EcUZKnynSHndeNGzZs2av2mgcHVHrcBp4tmLrw=', focoDescricao: 'Manutenção e formatação de computadores.',
    avaliacao: 4.6, comentarios: 97, disponibilidade: 'Horário comercial / Visita técnica',
    textoPerfil: 'Técnico de informática dedicado a solucionar problemas de hardware e software em desktops e notebooks.',
    textoExperiencia: 'Formatação com backup, instalação de Windows e Office, remoção de vírus, troca de peças (HD, memória), configuração de redes.',
    destaques: ['Formatação de computadores', 'Remoção de vírus', 'Manutenção preventiva']
  },
  {
    id: 78, nome: 'Cacilda Becker', servico: 'Aulas de Oratória', urlFoto: 'https://st4.depositphotos.com/12982378/24512/i/450/depositphotos_245124972-stock-photo-charming-curly-woman-smiling-closed.jpg', focoDescricao: 'Aulas para desenvolvimento da comunicação e perda do medo de falar em público.',
    avaliacao: 4.9, comentarios: 85, disponibilidade: 'Noites / Workshops',
    textoPerfil: 'Especialista em comunicação e oratória. Ajudo você a se expressar com clareza, confiança e impacto.',
    textoExperiencia: 'Treinamentos individuais e em grupo sobre técnicas de apresentação, controle da ansiedade, linguagem corporal e argumentação.',
    destaques: ['Falar em público', 'Técnicas de apresentação', 'Comunicação assertiva']
  },
  {
    id: 79, nome: 'Italo Rossi', servico: 'Garçom para Eventos', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAcxKvNdS_m2u21A3f1eq6wnd7jBrabcfYDw&s', focoDescricao: 'Serviço de garçom freelancer para festas e eventos.',
    avaliacao: 4.7, comentarios: 112, disponibilidade: 'Freelancer / Eventos',
    textoPerfil: 'Garçom experiente, ágil e cortês. Garanto um atendimento de qualidade para os convidados do seu evento.',
    textoExperiencia: 'Serviço de buffet, empratado, coquetel volante. Experiência em casamentos, aniversários, formaturas e eventos corporativos.',
    destaques: ['Garçom freelancer', 'Atendimento para festas', 'Experiência em eventos']
  },
  {
    id: 80, nome: 'Fernanda Vasconcellos', servico: 'Dog Walker', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTDz3nqfElxcn9UUqCpiqlLI9P-bWwQ1jv7w&s', focoDescricao: 'Passeios e cuidados com cães. Mais uma opção de Dog Walker.',
    avaliacao: 4.8, comentarios: 91, disponibilidade: 'Seg-Sex / Manhã',
    textoPerfil: 'Adoro cães e ofereço passeios divertidos e seguros para gastar a energia do seu melhor amigo.',
    textoExperiencia: 'Passeios individuais focados nas necessidades do cão (exercício, socialização). Experiência com diversas raças.',
    destaques: ['Passeios matinais', 'Cuidados com cães', 'Amor pelos animais']
  },
  {
    id: 81, nome: 'Thiago Fragoso', servico: 'Pet Care', urlFoto: 'https://media.istockphoto.com/id/1352495212/pt/foto/portrait-of-friendly-young-businessman.jpg?s=612x612&w=0&k=20&c=JRHk1YPuyc5gsuRKnL-WJqXGCm9lB7tJMLP4Wl91Tto=', focoDescricao: 'Serviço de "cat sitter" para quando você viaja.',
    avaliacao: 4.9, comentarios: 77, disponibilidade: 'Visitas agendadas',
    textoPerfil: 'Cat sitter responsável e carinhoso. Cuido do seu gato no conforto do seu lar enquanto você viaja tranquilo.',
    textoExperiencia: 'Visitas para alimentação, troca de areia, brincadeiras e administração de medicamentos (se necessário). Envio de fotos e vídeos.',
    destaques: ['Cat sitter', 'Cuidados em domicílio', 'Relatórios diários']
  },
  {
    id: 82, nome: 'Paolla Oliveira', servico: 'Veterinária (Consulta)', urlFoto: 'https://media.istockphoto.com/id/1389348844/pt/foto/studio-shot-of-a-beautiful-young-woman-smiling-while-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=_S9i0a8hmVyTNfyoie0DU7Somh9P_a5qL25kapJbmvU=', focoDescricao: 'Consultas veterinárias a domicílio para cães e gatos.',
    avaliacao: 5.0, comentarios: 155, disponibilidade: 'Agendamento / Atendimento domiciliar',
    textoPerfil: 'Médica veterinária dedicada à saúde e bem-estar dos animais de estimação. Atendimento carinhoso e profissional no conforto do seu lar.',
    textoExperiencia: 'Consultas clínicas gerais, vacinação, aplicação de microchip, exames básicos e orientação sobre cuidados preventivos.',
    destaques: ['Veterinária em domicílio', 'Vacinação de pets', 'Consultas clínicas']
  },
  {
    id: 83, nome: 'Caio Castro', servico: 'Piloto (Voos Panorâmicos)', urlFoto: 'https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg', focoDescricao: 'Voos panorâmicos pela cidade para turistas e eventos.',
    avaliacao: 4.8, comentarios: 69, disponibilidade: 'Fins de semana / Agendamento',
    textoPerfil: 'Piloto experiente e apaixonado por voar. Ofereço uma vista inesquecível da cidade com segurança e profissionalismo.',
    textoExperiencia: 'Voos panorâmicos diurnos e noturnos sobre os principais pontos turísticos. Voos para ocasiões especiais (pedidos de casamento, aniversários).',
    destaques: ['Voo panorâmico', 'Turismo aéreo', 'Experiência única']
  },
  {
    id: 84, nome: 'Grazi Massafera', servico: 'Influenciadora Digital', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiiBm5VewsDuIlhLPUSlB_3jX2n8sCTWMIsw&sr', focoDescricao: 'Criação de conteúdo e divulgação para marcas locais.',
    avaliacao: 4.7, comentarios: 101, disponibilidade: 'Projetos / Parcerias',
    textoPerfil: 'Criadora de conteúdo digital com foco em lifestyle, beleza e bem-estar. Conecto marcas a um público engajado.',
    textoExperiencia: 'Produção de fotos e vídeos para redes sociais (Instagram, TikTok). Divulgação de produtos e serviços. Cobertura de eventos.',
    destaques: ['Marketing de influência', 'Criação de conteúdo', 'Parcerias com marcas']
  },
  {
    id: 85, nome: 'Eriberto Leão', servico: 'Mágico', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA-DXU_9y6CaUlIUlM9E4MqtdPLtZuNYGbcA&s', focoDescricao: 'Shows de mágica e ilusionismo para festas infantis e de adultos.',
    avaliacao: 4.9, comentarios: 84, disponibilidade: 'Eventos / Agendamento',
    textoPerfil: 'Mágico profissional com shows interativos e surpreendentes para todas as idades. Levo encantamento para o seu evento.',
    textoExperiencia: 'Shows de mágica de perto (close-up) e de palco. Ilusionismo, mentalismo e números cômicos. Adaptação para diferentes públicos.',
    destaques: ['Mágico para festas', 'Show de ilusionismo', 'Entretenimento para eventos']
  },
  {
    id: 86, nome: 'Alinne Moraes', servico: 'Professora de Yoga', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyRqC0QTapocrSRTC4ThnZg0gBdBf6j0xjXA&s', focoDescricao: 'Aulas de Hatha Yoga para grupos ou individuais.',
    avaliacao: 4.8, comentarios: 96, disponibilidade: 'Manhãs e Noites / Online ou Presencial',
    textoPerfil: 'Instrutora de Yoga certificada, dedicada a guiar práticas que promovem equilíbrio entre corpo, mente e espírito.',
    textoExperiencia: 'Aulas de Hatha Yoga, Vinyasa Flow e meditação guiada. Aulas adaptadas para iniciantes e praticantes avançados.',
    destaques: ['Aulas de Hatha Yoga', 'Meditação guiada', 'Yoga para iniciantes']
  },
  {
    id: 87, nome: 'Malvino Salvador', servico: 'Lutador (Aulas de Boxe)', urlFoto: 'https://media.istockphoto.com/id/1364917563/pt/foto/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=U8JPP2jR5ibSuE_t0JrWgm0iQEfuMHHGMGTwEIMzNq0=', focoDescricao: 'Aulas particulares de boxe para condicionamento físico.',
    avaliacao: 4.7, comentarios: 75, disponibilidade: 'Agendamento / Aulas particulares',
    textoPerfil: 'Ex-lutador e instrutor de boxe. Aulas focadas em técnica, condicionamento físico e alívio do estresse.',
    textoExperiencia: 'Treinamento de fundamentos do boxe (socos, esquivas, movimentação), treino de manoplas e saco de pancadas. Foco em fitness.',
    destaques: ['Aulas de boxe fitness', 'Treino de condicionamento', 'Técnica de luta']
  },
  {
    id: 88, nome: 'Deborah Secco', servico: 'Atriz (Coach)', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxeZhF_fEzXjb4t1PBMupOYeUKDz0Iu7dxGA&s', focoDescricao: 'Coaching para atores iniciantes e preparação para testes.',
    avaliacao: 4.9, comentarios: 81, disponibilidade: 'Online / Agendamento',
    textoPerfil: 'Atriz experiente oferecendo mentoria e coaching para quem está começando na carreira ou se preparando para audições.',
    textoExperiencia: 'Orientação sobre técnicas de interpretação para TV e cinema, análise de texto, construção de personagem e dicas para testes de elenco.',
    destaques: ['Coaching para atores', 'Preparação para testes', 'Interpretação para TV']
  },
  {
    id: 89, nome: 'Vladimir Brichta', servico: 'Palhaço de Hospital', urlFoto: 'https://media.istockphoto.com/id/1485546774/pt/foto/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=lXDGScuGZHB43G9RC6o0_8J0pqR05K5RSrV2K3JG0nU=', focoDescricao: 'Trabalho voluntário ou remunerado como Doutor da Alegria.',
    avaliacao: 5.0, comentarios: 102, disponibilidade: 'Voluntário / Projetos específicos',
    textoPerfil: 'Ator com formação em palhaçaria, dedicado a levar alegria e humanização para ambientes hospitalares.',
    textoExperiencia: 'Atuação como palhaço em hospitais pediátricos e geriátricos, utilizando técnicas de improviso, música e ludicidade.',
    destaques: ['Doutores da Alegria', 'Humanização hospitalar', 'Palhaçaria']
  },
  {
    id: 90, nome: 'Marieta Severo', servico: 'Produtora Cultural', urlFoto: 'https://www.shutterstock.com/image-photo/beautiful-asian-woman-lilac-hair-260nw-2613904989.jpg', focoDescricao: 'Consultoria para elaboração de projetos culturais e captação de recursos.',
    avaliacao: 4.8, comentarios: 70, disponibilidade: 'Consultoria / Projetos',
    textoPerfil: 'Produtora cultural experiente, auxiliando artistas e grupos a viabilizarem seus projetos através de leis de incentivo e editais.',
    textoExperiencia: 'Elaboração de projetos para leis Rouanet, ProAC e editais municipais/estaduais. Captação de patrocínio e prestação de contas.',
    destaques: ['Leis de incentivo à cultura', 'Elaboração de projetos', 'Captação de recursos']
  },
  {
    id: 91, nome: 'Mateus Solano', servico: 'Bicicleteiro', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAQ2hR3qM4d7u_3CvoxvXMxOkXfk5jRPlioA&s', focoDescricao: 'Manutenção e reparo de bicicletas de todos os tipos.',
    avaliacao: 4.7, comentarios: 95, disponibilidade: 'Horário comercial / Oficina',
    textoPerfil: 'Mecânico de bicicletas apaixonado por ciclismo. Realizo desde reparos simples até manutenções completas.',
    textoExperiencia: 'Regulagem de marchas e freios, troca de pneus e câmaras, lubrificação, montagem de bicicletas e revisão geral.',
    destaques: ['Manutenção de bikes', 'Revisão geral', 'Montagem de bicicletas']
  },
  {
    id: 92, nome: 'Regina Casé', servico: 'Guia Turístico', urlFoto: 'https://media.istockphoto.com/id/1483329842/pt/foto/studio-portrait-of-attractive-woman-wearing-shirt-and-laughing-while-sitting-at-isolated-grey.jpg?s=612x612&w=0&k=20&c=0F5iXUL_ZpSRjyJKisRz_gpaE-3ucaBoheY83XDeE_g=', focoDescricao: 'Tours guiados pelos pontos históricos e culturais da cidade.',
    avaliacao: 4.9, comentarios: 110, disponibilidade: 'Agendamento / Grupos ou Individual',
    textoPerfil: 'Guia de turismo credenciada, apaixonada pela história e cultura local. Roteiros personalizados e informativos.',
    textoExperiencia: 'Tours a pé pelo centro histórico, visitas a museus e pontos turísticos, roteiros gastronômicos e culturais. Atendimento em português e inglês.',
    destaques: ['Guia de turismo local', 'Roteiros personalizados', 'Tours culturais']
  },
  {
    id: 93, nome: 'Marcelo Serrado', servico: 'DJ para Festas', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZj6M5HxtneYiiM1v-ELHSGTypLVAoQ6bguw&s', focoDescricao: 'DJ com repertório variado para casamentos, formaturas e aniversários.',
    avaliacao: 4.8, comentarios: 105, disponibilidade: 'Eventos / Noites e Fins de Semana',
    textoPerfil: 'DJ experiente e versátil, com equipamento de som e iluminação profissional. Animo sua festa com os melhores hits!',
    textoExperiencia: 'Seleção musical personalizada para cada evento (anos 80, pop, eletrônico, funk, sertanejo). Experiência em casamentos, festas de 15 anos e eventos corporativos.',
    destaques: ['DJ para casamentos', 'Equipamento próprio', 'Repertório variado']
  },
  {
    id: 94, nome: 'Carolina Dieckmann', servico: 'Fotógrafa de Pets', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4_WOevl5t3J8UeAEq5tMF9ypeY_JRuB3iGw&s', focoDescricao: 'Ensaios fotográficos profissionais para animais de estimação.',
    avaliacao: 5.0, comentarios: 85, disponibilidade: 'Agendamento / Estúdio ou Externo',
    textoPerfil: 'Fotógrafa apaixonada por pets. Registro a personalidade e a beleza do seu animal de estimação com carinho e paciência.',
    textoExperiencia: 'Ensaios fotográficos para cães, gatos e outros pets. Fotos em estúdio ou em locações externas (parques, praias).',
    destaques: ['Ensaio pet', 'Fotografia de animais', 'Fotos em estúdio ou externas']
  },
  {
    id: 95, nome: 'Rodrigo Lombardi', servico: 'Mestre de Cerimônias', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk_JP3p8M52qy4TQGX6-OEwiikpxjc-hiJIA&s', focoDescricao: 'Apresentação e condução de eventos corporativos e sociais.',
    avaliacao: 4.9, comentarios: 98, disponibilidade: 'Eventos / Agendamento',
    textoPerfil: 'Mestre de cerimônias com excelente comunicação e presença de palco. Conduzo seu evento com profissionalismo e carisma.',
    textoExperiencia: 'Apresentação de eventos corporativos, premiações, formaturas, casamentos e congressos. Elaboração de roteiros e cerimonial.',
    destaques: ['Mestre de cerimônias bilíngue (Inglês)', 'Eventos corporativos', 'Excelente comunicação']
  },
  {
    id: 96, nome: 'Christiane Torloni', servico: 'Diarista', urlFoto: 'https://st4.depositphotos.com/12982378/24512/i/450/depositphotos_245124972-stock-photo-charming-curly-woman-smiling-closed.jpg', focoDescricao: 'Mais uma opção de diarista para limpeza residencial.',
    avaliacao: 4.7, comentarios: 120, disponibilidade: 'Seg-Qui / 8h-16h',
    textoPerfil: 'Profissional de limpeza experiente e confiável. Deixo sua casa brilhando com cuidado e atenção aos detalhes.',
    textoExperiencia: 'Limpeza geral de residências, incluindo pisos, banheiros, cozinha e vidros. Organização básica dos ambientes.',
    destaques: ['Limpeza residencial', 'Experiência e referências', 'Serviço confiável']
  },
  {
    id: 97, nome: 'Humberto Martins', servico: 'Professor de Surf', urlFoto: 'https://media.istockphoto.com/id/520860375/pt/foto/ele-empresas-geridas.jpg?s=612x612&w=0&k=20&c=m3lG5EcUZKnynSHndeNGzZs2av2mgcHVHrcBp4tmLrw=', focoDescricao: 'Aulas de surf para iniciantes e intermediários.',
    avaliacao: 4.8, comentarios: 77, disponibilidade: 'Manhãs / Fins de semana',
    textoPerfil: 'Surfista experiente e instrutor credenciado. Aulas seguras e divertidas para você aprender a pegar suas primeiras ondas.',
    textoExperiencia: 'Aulas teóricas e práticas sobre segurança no mar, técnicas de remada, subida na prancha e leitura de ondas. Equipamento incluso.',
    destaques: ['Aulas de surf para iniciantes', 'Equipamento incluso', 'Instrutor credenciado']
  },
  {
    id: 98, nome: 'Vera Fischer', servico: 'Artista Plástica', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTDz3nqfElxcn9UUqCpiqlLI9P-bWwQ1jv7w&s', focoDescricao: 'Criação e venda de quadros e esculturas abstratas.',
    avaliacao: 4.9, comentarios: 63, disponibilidade: 'Ateliê / Online',
    textoPerfil: 'Artista plástica com foco em arte abstrata contemporânea. Crio peças que exploram cores, formas e texturas.',
    textoExperiencia: 'Pintura em tela (acrílica, óleo), esculturas em cerâmica e metal. Participação em exposições individuais e coletivas.',
    destaques: ['Arte abstrata', 'Pintura em tela', 'Venda de obras originais']
  },
  {
    id: 99, nome: 'Miguel Falabella', servico: 'Roteirista', urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAcxKvNdS_m2u21A3f1eq6wnd7jBrabcfYDw&s', focoDescricao: 'Escrita de roteiros para vídeos institucionais e publicitários.',
    avaliacao: 4.7, comentarios: 55, disponibilidade: 'Remoto / Freelancer',
    textoPerfil: 'Roteirista criativo com experiência em transformar ideias em narrativas audiovisuais envolventes.',
    textoExperiencia: 'Criação de roteiros para vídeos de marketing, treinamentos corporativos, documentários curtos e peças de teatro.',
    destaques: ['Roteiros publicitários', 'Storytelling', 'Adaptação de conteúdo']
  },
  {
    id: 100, nome: 'Susana Vieira', servico: 'Aulas de Teatro', urlFoto: 'https://media.istockphoto.com/id/1389348844/pt/foto/studio-shot-of-a-beautiful-young-woman-smiling-while-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=_S9i0a8hmVyTNfyoie0DU7Somh9P_a5qL25kapJbmvU=', focoDescricao: 'Aulas de teatro para a terceira idade.',
    avaliacao: 4.9, comentarios: 67, disponibilidade: 'Ter e Qui / 14h-16h',
    textoPerfil: 'Atriz experiente e apaixonada por compartilhar a arte do teatro. Aulas focadas na desinibição, expressão corporal e diversão.',
    textoExperiencia: 'Vasta experiência em palcos e televisão. Metodologia adaptada para o público da terceira idade, promovendo bem-estar e socialização.',
    destaques: ['Foco na terceira idade', 'Exercícios de improvisação', 'Melhora da autoestima e comunicação']
  }
];

export default MockedData;