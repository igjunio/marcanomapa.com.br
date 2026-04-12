(function () {
  const languageSelect = document.getElementById('language-select');
  if (!languageSelect) return;

  const whatsappMessages = {
    pt: 'Olá! Vim pelo site da Marca no Mapa e gostaria de entender melhor como funciona a criação do site e a configuração do Google Meu Negócio para minha empresa.',
    en: 'Hello! I found Marca no Mapa through the website and I would like to better understand how website creation and Google Business Profile setup work for my company.',
    es: '¡Hola! Llegué al sitio de Marca no Mapa y me gustaría entender mejor cómo funciona la creación del sitio web y la configuración de Google Business Profile para mi empresa.'
  };

  const translations = {
    en: {
      'Criação de Site Profissional e Google Meu Negócio | Marca no Mapa': 'Professional Website Creation and Google Business Profile | Marca no Mapa',
      'marca no': 'mark on',
      'Mapa': 'Map',
      'Mais credibilidade e autoridade local': 'More credibility and local authority',
      'Sua empresa aparecendo no Google, transmitindo profissionalismo e gerando mais oportunidades todos os dias.': 'Your business showing up on Google, conveying professionalism, and generating more opportunities every day.',
      'Criamos um site 100% personalizado + configuramos seu Google Meu Negócio para que sua empresa seja encontrada, lembrada e escolhida.': 'We build a 100% custom website and set up your Google Business Profile so your company can be found, remembered, and chosen.',
      'Quero profissionalizar minha empresa': 'I want to professionalize my company',
      'Sua empresa no Google Maps': 'Your business on Google Maps',
      'Informações organizadas e profissionais': 'Organized and professional information',
      'Minimal portrait preview': 'Minimal portrait preview',
      'Site com a identidade da sua marca': 'Website with your brand identity',
      'A verdade é simples': 'The truth is simple',
      'Hoje, se sua empresa não aparece no Google ou não tem um site profissional, você está perdendo clientes.': 'Today, if your business does not appear on Google or does not have a professional website, you are losing customers.',
      'Pessoas pesquisam antes de comprar': 'People research before buying',
      'Conferem avaliações': 'They check reviews',
      'Buscam confiança': 'They seek trust',
      'Comparam marcas': 'They compare brands',
      'Se sua presença digital é fraca, você transmite insegurança — mesmo oferecendo um ótimo serviço.': 'If your digital presence is weak, you seem unreliable — even when you provide excellent service.',
      'Quero aparecer no Google': 'I want to appear on Google',
      'Seu cliente já está pesquisando — a questão é: ele encontra você?': 'Your customer is already searching — the question is: can they find you?',
      'Como nós resolvemos isso para você': 'How we solve this for you',
      'Presença no Google': 'Google Presence',
      'Configuramos e otimizamos seu Google Meu Negócio para que sua empresa.': 'We set up and optimize your Google Business Profile so your company can:',
      'Apareça no Google Maps': 'Appear on Google Maps',
      'Mostre horário, telefone e localização': 'Show business hours, phone number, and location',
      'Receba avaliações': 'Receive reviews',
      'Transmita profissionalismo': 'Convey professionalism',
      'Site Profissional e Personalizado': 'Professional and Custom Website',
      'Nada de template genérico. Desenvolvemos um site exclusivo para sua empresa': 'No generic templates. We build an exclusive website for your business',
      'Design alinhado à sua marca': 'Design aligned with your brand',
      'Layout moderno': 'Modern layout',
      'Adaptado para celular': 'Mobile-friendly',
      'Rápido e otimizado': 'Fast and optimized',
      'Informações organizadas para gerar confiança': 'Organized information to build trust',
      'Estrutura Técnica Completa': 'Complete Technical Structure',
      'Você não precisa se preocupar com parte técnica. Nós cuidamos disso.': 'You do not need to worry about the technical part. We take care of it.',
      'Registro de domínio': 'Domain registration',
      'Hospedagem': 'Hosting',
      'Manutenção opcional': 'Optional maintenance',
      'Suporte inicial': 'Initial support',
      'Quem não é visto, não é lembrado.': 'Who is not seen is not remembered.',
      'O que muda depois disso?': 'What changes after that?',
      'Você deixa de parecer amador': 'You stop looking amateur',
      'Imagine quando alguém pesquisar sua empresa': 'Imagine when someone searches for your business',
      '📍 Ela aparece no Google Maps': '📍 It appears on Google Maps',
      '🌐 Ela tem um site profissional': '🌐 It has a professional website',
      '⭐ Ela tem avaliações': '⭐ It has reviews',
      '📱 As informações estão organizadas': '📱 The information is organized',
      'E começa a parecer uma empresa consolidada.': 'And it starts to look like an established company.',
      'Isso gera': 'This generates',
      '✔️ Mais confiança': '✔️ More trust',
      '✔️ Mais contatos': '✔️ More contacts',
      '✔️ Mais pedidos de orçamento': '✔️ More quote requests',
      '✔️ Mais autoridade no seu mercado': '✔️ More authority in your market',
      'Sua empresa precisa parecer do tamanho que ela quer se tornar.': 'Your company needs to look as big as it wants to become.',
      'Profissionalismo gera confiança. Confiança gera vendas.': 'Professionalism builds trust. Trust generates sales.',
      'Falar com especialista agora': 'Talk to an expert now',
      'Tire as suas dúvidas aqui': 'Get your questions answered here',
      'Perguntas frequentes': 'Frequently asked questions',
      'Preciso ter conhecimento em tecnologia para contratar?': 'Do I need technical knowledge to hire you?',
      'Não.': 'No.',
      'Nós cuidamos de toda a parte técnica para você.': 'We take care of the entire technical part for you.',
      'Desde o registro do domínio até a publicação do site e configuração do Google Meu Negócio.': 'From domain registration to website publishing and Google Business Profile setup.',
      'Você só precisa nos passar as informações do seu negócio.': 'You only need to send us your business information.',
      'O que exatamente está incluso no serviço?': 'What exactly is included in the service?',
      'Você recebe:': 'You receive:',
      '- Configuração completa e otimizada do seu Google Meu Negócio': '- Full and optimized setup of your Google Business Profile',
      '- Criação de uma página profissional personalizada para sua empresa': '- Creation of a custom professional page for your business',
      '- Hospedagem do site': '- Website hosting',
      '- Registro do domínio': '- Domain registration',
      '- Publicação e suporte inicial.': '- Publishing and initial support.',
      'Tudo pronto para sua empresa começar a ser encontrada no digital.': 'Everything ready for your business to start being found online.',
      'Meu site será igual ao de outras empresas?': 'Will my website be the same as other companies?',
      'Cada projeto é desenvolvido com base na identidade e nas necessidades do seu negócio.': 'Each project is developed based on your business identity and needs.',
      'O objetivo é que sua empresa tenha uma presença digital única e profissional.': 'The goal is for your company to have a unique and professional digital presence.',
      'Em quanto tempo meu site fica pronto?': 'How long does it take for my website to be ready?',
      'Normalmente entre 5 e 10 dias úteis, dependendo da rapidez no envio das informações necessárias.': 'Usually between 5 and 10 business days, depending on how quickly the necessary information is sent.',
      'Depois que o site estiver publicado posso pedir alterações?': 'After the website is published, can I request changes?',
      'Sim.': 'Yes.',
      '- Durante 12 meses após a publicação, você pode solicitar alterações na:': '- For 12 months after publication, you can request changes to:',
      '- textos': '- texts',
      '- imagens': '- images',
      '- links': '- links',
      '- informações do negócio': '- business information',
      'Sempre que precisar atualizar algo, é só entrar em contato.': 'Whenever you need to update something, just contact us.',
      'Posso mudar o layout ou adicionar novas páginas depois?': 'Can I change the layout or add new pages later?',
      'Alterações estruturais como:': 'Structural changes such as:',
      '- novo design': '- new design',
      '- novas páginas': '- new pages',
      '- mudanças de layout': '- layout changes',
      'são consideradas um novo projeto.': 'are considered a new project.',
      'Isso porque envolvem desenvolvimento e planejamento adicionais.': 'This is because they involve additional development and planning.',
      'Preciso pagar mensalidade?': 'Do I need to pay a monthly fee?',
      'O valor do projeto é pago uma única vez.': 'The project fee is paid only once.',
      'Esse valor já inclui 12 meses de hospedagem, suporte e manutenção de conteúdo.': 'This amount already includes 12 months of hosting, support, and content maintenance.',
      'O que acontece depois de 12 meses?': 'What happens after 12 months?',
      'Após esse período, você pode optar por continuar com nosso serviço de:': 'After this period, you can choose to continue with our service for:',
      '- Hospedagem': '- Hosting',
      '- Manutenção': '- Maintenance',
      '- Renovação de domínio': '- Domain renewal',
      '- Pequenas atualizações': '- Small updates',
      'O valor é simbólico, apenas para manter sua estrutura digital ativa.': 'The amount is symbolic, only to keep your digital structure active.',
      'Minha empresa realmente vai aparecer no Google?': 'Will my business really appear on Google?',
      'Configuramos seu perfil de forma completa e otimizada para aumentar suas chances de aparecer nas buscas locais.': 'We configure your profile fully and optimally to increase your chances of appearing in local searches.',
      'Isso ajuda clientes próximos a encontrar sua empresa com mais facilidade.': 'This helps nearby customers find your company more easily.',
      'Ter um site e Google Meu Negócio realmente traz resultado?': 'Does having a website and Google Business Profile really bring results?',
      'Eles não fazem milagres sozinhos.': 'They do not perform miracles alone.',
      'Mas são a base da presença digital de qualquer negócio hoje.': 'But they are the foundation of any business digital presence today.',
      'Com eles, sua empresa transmite mais confiança, profissionalismo e pode gerar mais contatos e oportunidades.': 'With them, your company conveys more trust and professionalism and can generate more contacts and opportunities.',
      'E se eu não gostar do resultado?': 'What if I do not like the result?',
      'Antes da publicação, você poderá revisar o site e solicitar ajustes de conteúdo.': 'Before publication, you can review the website and request content adjustments.',
      'Nosso objetivo é que você se sinta seguro e satisfeito com a presença digital da sua empresa.': 'Our goal is for you to feel confident and satisfied with your company digital presence.',
      'Como funciona o pagamento?': 'How does payment work?',
      'O pagamento é feito no início do projeto.': 'Payment is made at the beginning of the project.',
      'Após a confirmação, iniciamos imediatamente a criação do seu site e configuração digital.': 'After confirmation, we immediately begin your website creation and digital setup.',
      'Por que investir nisso agora?': 'Why invest in this now?',
      'Porque hoje as pessoas pesquisam antes de comprar.': 'Because today people research before buying.',
      'Se sua empresa não aparece ou não transmite confiança, você pode estar perdendo clientes todos os dias.': 'If your company does not appear or does not convey trust, you may be losing customers every day.',
      'Feito com ♥ por Marca no Mapa': 'Made with ♥ by Marca no Mapa',
      'Logomarca Mapa no Mapa': 'Marca no Mapa logo',
      'Empresário personalizando o site profissional da sua empresa com elementos digitais e identidade visual da marca': 'Business owner customizing the company professional website with digital elements and brand visual identity',
      'Dono de pequeno negócio confuso diante de elementos digitais desorganizados representando falta de presença online': 'Small business owner confused by disorganized digital elements representing lack of online presence',
      'Empresa local com presença profissional no Google Maps recebendo clientes após criação de site e configuração digital': 'Local business with professional presence on Google Maps receiving customers after website creation and digital setup',
      'Escolha o idioma': 'Choose language',
      'Alternar tema': 'Toggle theme'
    },
    es: {
      'Criação de Site Profissional e Google Meu Negócio | Marca no Mapa': 'Creación de Sitio Web Profesional y Perfil de Empresa en Google | Marca no Mapa',
      'marca no': 'marca en el',
      'Mapa': 'Mapa',
      'Mais credibilidade e autoridade local': 'Más credibilidad y autoridad local',
      'Sua empresa aparecendo no Google, transmitindo profissionalismo e gerando mais oportunidades todos os dias.': 'Tu empresa apareciendo en Google, transmitiendo profesionalismo y generando más oportunidades todos los días.',
      'Criamos um site 100% personalizado + configuramos seu Google Meu Negócio para que sua empresa seja encontrada, lembrada e escolhida.': 'Creamos un sitio 100% personalizado + configuramos tu Perfil de Empresa en Google para que tu empresa sea encontrada, recordada y elegida.',
      'Quero profissionalizar minha empresa': 'Quiero profesionalizar mi empresa',
      'Sua empresa no Google Maps': 'Tu empresa en Google Maps',
      'Informações organizadas e profissionais': 'Información organizada y profesional',
      'Minimal portrait preview': 'Vista previa de retrato minimalista',
      'Site com a identidade da sua marca': 'Sitio con la identidad de tu marca',
      'A verdade é simples': 'La verdad es simple',
      'Hoje, se sua empresa não aparece no Google ou não tem um site profissional, você está perdendo clientes.': 'Hoy, si tu empresa no aparece en Google o no tiene un sitio profesional, estás perdiendo clientes.',
      'Pessoas pesquisam antes de comprar': 'Las personas investigan antes de comprar',
      'Conferem avaliações': 'Revisan reseñas',
      'Buscam confiança': 'Buscan confianza',
      'Comparam marcas': 'Comparan marcas',
      'Se sua presença digital é fraca, você transmite insegurança — mesmo oferecendo um ótimo serviço.': 'Si tu presencia digital es débil, transmites inseguridad, incluso ofreciendo un gran servicio.',
      'Quero aparecer no Google': 'Quiero aparecer en Google',
      'Seu cliente já está pesquisando — a questão é: ele encontra você?': 'Tu cliente ya está buscando — la pregunta es: ¿te encuentra?',
      'Como nós resolvemos isso para você': 'Cómo resolvemos esto para ti',
      'Presença no Google': 'Presencia en Google',
      'Configuramos e otimizamos seu Google Meu Negócio para que sua empresa.': 'Configuramos y optimizamos tu Perfil de Empresa en Google para que tu empresa:',
      'Apareça no Google Maps': 'Aparezca en Google Maps',
      'Mostre horário, telefone e localização': 'Muestre horario, teléfono y ubicación',
      'Receba avaliações': 'Reciba reseñas',
      'Transmita profissionalismo': 'Transmita profesionalismo',
      'Site Profissional e Personalizado': 'Sitio Profesional y Personalizado',
      'Nada de template genérico. Desenvolvemos um site exclusivo para sua empresa': 'Nada de plantillas genéricas. Desarrollamos un sitio exclusivo para tu empresa',
      'Design alinhado à sua marca': 'Diseño alineado con tu marca',
      'Layout moderno': 'Diseño moderno',
      'Adaptado para celular': 'Adaptado para móvil',
      'Rápido e otimizado': 'Rápido y optimizado',
      'Informações organizadas para gerar confiança': 'Información organizada para generar confianza',
      'Estrutura Técnica Completa': 'Estructura Técnica Completa',
      'Você não precisa se preocupar com parte técnica. Nós cuidamos disso.': 'No necesitas preocuparte por la parte técnica. Nosotros nos encargamos.',
      'Registro de domínio': 'Registro de dominio',
      'Hospedagem': 'Hosting',
      'Manutenção opcional': 'Mantenimiento opcional',
      'Suporte inicial': 'Soporte inicial',
      'Quem não é visto, não é lembrado.': 'Quien no es visto, no es recordado.',
      'O que muda depois disso?': '¿Qué cambia después de esto?',
      'Você deixa de parecer amador': 'Dejas de parecer amateur',
      'Imagine quando alguém pesquisar sua empresa': 'Imagina cuando alguien busque tu empresa',
      '📍 Ela aparece no Google Maps': '📍 Aparece en Google Maps',
      '🌐 Ela tem um site profissional': '🌐 Tiene un sitio profesional',
      '⭐ Ela tem avaliações': '⭐ Tiene reseñas',
      '📱 As informações estão organizadas': '📱 La información está organizada',
      'E começa a parecer uma empresa consolidada.': 'Y comienza a parecer una empresa consolidada.',
      'Isso gera': 'Esto genera',
      '✔️ Mais confiança': '✔️ Más confianza',
      '✔️ Mais contatos': '✔️ Más contactos',
      '✔️ Mais pedidos de orçamento': '✔️ Más solicitudes de presupuesto',
      '✔️ Mais autoridade no seu mercado': '✔️ Más autoridad en tu mercado',
      'Sua empresa precisa parecer do tamanho que ela quer se tornar.': 'Tu empresa debe parecer del tamaño que quiere llegar a ser.',
      'Profissionalismo gera confiança. Confiança gera vendas.': 'El profesionalismo genera confianza. La confianza genera ventas.',
      'Falar com especialista agora': 'Hablar con un especialista ahora',
      'Tire as suas dúvidas aqui': 'Resuelve tus dudas aquí',
      'Perguntas frequentes': 'Preguntas frecuentes',
      'Preciso ter conhecimento em tecnologia para contratar?': '¿Necesito conocimientos de tecnología para contratar?',
      'Não.': 'No.',
      'Nós cuidamos de toda a parte técnica para você.': 'Nosotros nos encargamos de toda la parte técnica por ti.',
      'Desde o registro do domínio até a publicação do site e configuração do Google Meu Negócio.': 'Desde el registro del dominio hasta la publicación del sitio y la configuración del Perfil de Empresa en Google.',
      'Você só precisa nos passar as informações do seu negócio.': 'Solo necesitas enviarnos la información de tu negocio.',
      'O que exatamente está incluso no serviço?': '¿Qué incluye exactamente el servicio?',
      'Você recebe:': 'Recibes:',
      '- Configuração completa e otimizada do seu Google Meu Negócio': '- Configuración completa y optimizada de tu Perfil de Empresa en Google',
      '- Criação de uma página profissional personalizada para sua empresa': '- Creación de una página profesional personalizada para tu empresa',
      '- Hospedagem do site': '- Hosting del sitio',
      '- Registro do domínio': '- Registro del dominio',
      '- Publicação e suporte inicial.': '- Publicación y soporte inicial.',
      'Tudo pronto para sua empresa começar a ser encontrada no digital.': 'Todo listo para que tu empresa comience a ser encontrada en digital.',
      'Meu site será igual ao de outras empresas?': '¿Mi sitio será igual al de otras empresas?',
      'Cada projeto é desenvolvido com base na identidade e nas necessidades do seu negócio.': 'Cada proyecto se desarrolla con base en la identidad y necesidades de tu negocio.',
      'O objetivo é que sua empresa tenha uma presença digital única e profissional.': 'El objetivo es que tu empresa tenga una presencia digital única y profesional.',
      'Em quanto tempo meu site fica pronto?': '¿En cuánto tiempo estará listo mi sitio?',
      'Normalmente entre 5 e 10 dias úteis, dependendo da rapidez no envio das informações necessárias.': 'Normalmente entre 5 y 10 días hábiles, según la rapidez en el envío de la información necesaria.',
      'Depois que o site estiver publicado posso pedir alterações?': '¿Después de publicar el sitio puedo pedir cambios?',
      'Sim.': 'Sí.',
      '- Durante 12 meses após a publicação, você pode solicitar alterações na:': '- Durante 12 meses después de la publicación, puedes solicitar cambios en:',
      '- textos': '- textos',
      '- imagens': '- imágenes',
      '- links': '- enlaces',
      '- informações do negócio': '- información del negocio',
      'Sempre que precisar atualizar algo, é só entrar em contato.': 'Siempre que necesites actualizar algo, solo contáctanos.',
      'Posso mudar o layout ou adicionar novas páginas depois?': '¿Puedo cambiar el diseño o agregar nuevas páginas después?',
      'Alterações estruturais como:': 'Cambios estructurales como:',
      '- novo design': '- nuevo diseño',
      '- novas páginas': '- nuevas páginas',
      '- mudanças de layout': '- cambios de diseño',
      'são consideradas um novo projeto.': 'se consideran un nuevo proyecto.',
      'Isso porque envolvem desenvolvimento e planejamento adicionais.': 'Esto se debe a que implican desarrollo y planificación adicionales.',
      'Preciso pagar mensalidade?': '¿Necesito pagar mensualidad?',
      'O valor do projeto é pago uma única vez.': 'El valor del proyecto se paga una sola vez.',
      'Esse valor já inclui 12 meses de hospedagem, suporte e manutenção de conteúdo.': 'Ese valor ya incluye 12 meses de hosting, soporte y mantenimiento de contenido.',
      'O que acontece depois de 12 meses?': '¿Qué pasa después de 12 meses?',
      'Após esse período, você pode optar por continuar com nosso serviço de:': 'Después de ese período, puedes optar por continuar con nuestro servicio de:',
      '- Hospedagem': '- Hosting',
      '- Manutenção': '- Mantenimiento',
      '- Renovação de domínio': '- Renovación de dominio',
      '- Pequenas atualizações': '- Pequeñas actualizaciones',
      'O valor é simbólico, apenas para manter sua estrutura digital ativa.': 'El valor es simbólico, solo para mantener activa tu estructura digital.',
      'Minha empresa realmente vai aparecer no Google?': '¿Mi empresa realmente va a aparecer en Google?',
      'Configuramos seu perfil de forma completa e otimizada para aumentar suas chances de aparecer nas buscas locais.': 'Configuramos tu perfil de forma completa y optimizada para aumentar tus posibilidades de aparecer en búsquedas locales.',
      'Isso ajuda clientes próximos a encontrar sua empresa com mais facilidade.': 'Esto ayuda a clientes cercanos a encontrar tu empresa más fácilmente.',
      'Ter um site e Google Meu Negócio realmente traz resultado?': '¿Tener sitio web y Perfil de Empresa en Google realmente da resultados?',
      'Eles não fazem milagres sozinhos.': 'No hacen milagros por sí solos.',
      'Mas são a base da presença digital de qualquer negócio hoje.': 'Pero son la base de la presencia digital de cualquier negocio hoy.',
      'Com eles, sua empresa transmite mais confiança, profissionalismo e pode gerar mais contatos e oportunidades.': 'Con ellos, tu empresa transmite más confianza y profesionalismo y puede generar más contactos y oportunidades.',
      'E se eu não gostar do resultado?': '¿Y si no me gusta el resultado?',
      'Antes da publicação, você poderá revisar o site e solicitar ajustes de conteúdo.': 'Antes de la publicación, podrás revisar el sitio y solicitar ajustes de contenido.',
      'Nosso objetivo é que você se sinta seguro e satisfeito com a presença digital da sua empresa.': 'Nuestro objetivo es que te sientas seguro y satisfecho con la presencia digital de tu empresa.',
      'Como funciona o pagamento?': '¿Cómo funciona el pago?',
      'O pagamento é feito no início do projeto.': 'El pago se realiza al inicio del proyecto.',
      'Após a confirmação, iniciamos imediatamente a criação do seu site e configuração digital.': 'Después de la confirmación, iniciamos de inmediato la creación de tu sitio y configuración digital.',
      'Por que investir nisso agora?': '¿Por qué invertir en esto ahora?',
      'Porque hoje as pessoas pesquisam antes de comprar.': 'Porque hoy las personas investigan antes de comprar.',
      'Se sua empresa não aparece ou não transmite confiança, você pode estar perdendo clientes todos os dias.': 'Si tu empresa no aparece o no transmite confianza, puedes estar perdiendo clientes todos los días.',
      'Feito com ♥ por Marca no Mapa': 'Hecho con ♥ por Marca no Mapa',
      'Logomarca Mapa no Mapa': 'Logotipo de Marca no Mapa',
      'Empresário personalizando o site profissional da sua empresa com elementos digitais e identidade visual da marca': 'Empresario personalizando el sitio profesional de su empresa con elementos digitales e identidad visual de la marca',
      'Dono de pequeno negócio confuso diante de elementos digitais desorganizados representando falta de presença online': 'Dueño de pequeño negocio confundido ante elementos digitales desorganizados que representan falta de presencia online',
      'Empresa local com presença profissional no Google Maps recebendo clientes após criação de site e configuração digital': 'Empresa local con presencia profesional en Google Maps recibiendo clientes después de crear el sitio y configuración digital',
      'Escolha o idioma': 'Elige idioma',
      'Alternar tema': 'Cambiar tema'
    }
  };

  const normalize = (text) => text.replace(/\u200b/g, '').replace(/\s+/g, ' ').trim();

  const textNodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node || !node.nodeValue) return NodeFilter.FILTER_REJECT;
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      if (['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
      if (parent.closest('#language-select')) return NodeFilter.FILTER_REJECT;

      const normalized = normalize(node.nodeValue);
      if (!normalized) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  let currentNode;
  while ((currentNode = walker.nextNode())) {
    textNodes.push({ node: currentNode, original: currentNode.nodeValue, key: normalize(currentNode.nodeValue) });
  }

  const altElements = Array.from(document.querySelectorAll('[alt], [aria-label]')).map((element) => ({
    element,
    alt: element.getAttribute('alt'),
    ariaLabel: element.getAttribute('aria-label')
  }));

  const metadata = {
    title: document.title,
    description: document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
    keywords: document.querySelector('meta[name="keywords"]')?.getAttribute('content') || ''
  };

  const setWhatsAppMessage = (lang) => {
    const message = whatsappMessages[lang] || whatsappMessages.pt;
    const encodedMessage = encodeURIComponent(message);
    document.querySelectorAll('a[href*="wa.me/5562984026559"]').forEach((anchor) => {
      anchor.href = `https://wa.me/5562984026559?text=${encodedMessage}`;
    });
  };

  const applyLanguage = (lang) => {
    const dictionary = translations[lang] || {};

    textNodes.forEach(({ node, original, key }) => {
      const translated = dictionary[key];
      node.nodeValue = translated || original;
    });

    altElements.forEach(({ element, alt, ariaLabel }) => {
      if (alt) {
        const translatedAlt = dictionary[normalize(alt)];
        element.setAttribute('alt', translatedAlt || alt);
      }

      if (ariaLabel) {
        const translatedAria = dictionary[normalize(ariaLabel)];
        element.setAttribute('aria-label', translatedAria || ariaLabel);
      }
    });

    const descriptionMeta = document.querySelector('meta[name="description"]');
    const keywordsMeta = document.querySelector('meta[name="keywords"]');

    const translatedTitle = dictionary[normalize(metadata.title)];
    const translatedDescription = dictionary[normalize(metadata.description)];
    const translatedKeywords = dictionary[normalize(metadata.keywords)];

    document.title = translatedTitle || metadata.title;
    if (descriptionMeta) descriptionMeta.setAttribute('content', translatedDescription || metadata.description);
    if (keywordsMeta) keywordsMeta.setAttribute('content', translatedKeywords || metadata.keywords);

    document.documentElement.lang = lang === 'pt' ? 'pt-br' : lang;
    setWhatsAppMessage(lang);
  };

  const savedLanguage = localStorage.getItem('site-language') || 'pt';
  languageSelect.value = savedLanguage;
  applyLanguage(savedLanguage);

  languageSelect.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    localStorage.setItem('site-language', selectedLanguage);
    applyLanguage(selectedLanguage);
  });
})();
