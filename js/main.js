$(document).ready(function () {
    // Carrega os componentes estáticos
    $("#home").load("components/home.html", function() {
        console.log("Componente home carregado");
        // Inicializa a animação de digitação manualmente
        initTypewriterAnimation();
    });
    $("#header").load("components/header.html");
    $("#about").load("components/about.html", function() {
        // Garante que o placeholder não fique hidden pelo scroll-reveal do setupScrollAnimations
        $('#about').addClass('animated');
        activateScrollAnimations();
    });
    $("#parallax").load("components/parallax.html", function() {
        console.log("Componente parallax carregado");
        // Inicializa o efeito parallax
        initParallaxEffect();
        // Ativa as animações de elementos com scroll
        activateScrollAnimations();
    });
    $("#contact").load("components/contact.html", function() {
        // Garante que o placeholder não fique hidden pelo scroll-reveal do setupScrollAnimations
        $('#contact').addClass('animated');
        activateScrollAnimations();
    });
    $("#footer").load("components/footer.html");
    
    // Carrega a seção de depoimentos
    $("#testimonials").load("components/testimonials.html", function() {
        console.log("Componente de depoimentos carregado");
        initializeTestimonials();
    });
    
    // Configurar animações de scroll para todos os elementos
    setupScrollAnimations();
    
    // Carrega a seção de projetos e inicializa tudo após o carregamento
    $("#projects").load("components/projects.html", function() {
        console.log("Componente de projetos carregado");

        // Ativa animações de scroll para os elementos do componente
        activateScrollAnimations();

        // Carrega os projetos no carrossel
        initializeProjects();
        
        // Configura o fechamento da modal
        $(document).on("click", "#closeModal", function() {
            $("#projectModal").addClass("hidden");
            $("#modalVideo")[0].pause();
        });
        
        // Fecha a modal quando clicar fora dela
        $(document).on("click", ".modal-bg", function() {
            $("#projectModal").addClass("hidden");
            $("#modalVideo")[0].pause();
        });
    });

    // Carrega as habilidades e, após o componente ser carregado, insere os itens dinamicamente
    $("#skills").load("components/skills.html", function () {
        // Garante que o placeholder não fique hidden pelo scroll-reveal do setupScrollAnimations
        $('#skills').addClass('animated');
        $.getJSON('data/skills.json', function (skills) {
            $.each(skills, function (index, skill) {
                var skillHtml = `
            <div class="bg-zinc-900 w-28 h-28 rounded-lg flex flex-col items-center justify-center transform transition duration-300 hover:scale-105 hover:border hover:border-yellow-500 border border-transparent scroll-reveal">              
                <i class="${skill.icon} text-6xl text-yellow-500"></i>
                <p class="text-lg mt-2 text-yellow-500">${skill.name}</p>
            </div>
          `;
                $('#skillsContainer').append(skillHtml);
            });
            
            // Ativa as animações de scroll após adicionar as habilidades
            activateScrollAnimations();
        });
    });

    // Função que inicializa o carrossel de depoimentos
    function initializeTestimonials() {
        console.log("Inicializando depoimentos");
        
        $.getJSON('data/testimonials.json', function(testimonials) {
            console.log("Dados JSON carregados:", testimonials.length + " depoimentos");
            
            // Adicionar os indicadores de navegação
            $('#testimonialDots').empty();
            var visibleDots = testimonials.length;
            for (var i = 0; i < visibleDots; i++) {
                var dot = $('<div></div>')
                    .addClass('w-2 h-2 rounded-full bg-zinc-700 hover:bg-yellow-500 transition duration-300 cursor-pointer')
                    .attr('data-index', i);
                $('#testimonialDots').append(dot);
            }
            
            // Limpar o carrossel antes de adicionar os novos depoimentos
            $("#testimonialsCarousel").empty();
            
            $.each(testimonials, function(index, testimonial) {
                // Cria o card do depoimento
                var card = $('<div></div>', {
                    "class": "testimonial-card snap-center scroll-reveal",
                    "data-index": index
                });
                
                // Conteúdo do depoimento
                var content = $('<div></div>', {
                    "class": "testimonial-content"
                });
                
                // Texto do depoimento com truncamento para 10 linhas
                var textContainer = $('<div></div>', {
                    "class": "testimonial-text-container"
                });
                
                var text = $('<p></p>', {
                    "class": "testimonial-text truncated",
                    text: testimonial.text
                });
                
                var expandButton = $('<button></button>', {
                    "class": "expand-testimonial hidden text-yellow-500 mt-2 text-sm hover:text-yellow-400 transition duration-300 focus:outline-none",
                    text: "Ler mais"
                });
                
                textContainer.append(text, expandButton);
                
                // Informações do autor
                var author = $('<div></div>', {
                    "class": "testimonial-author"
                });
                
                // Avatar do autor
                var avatar = $('<img>', {
                    src: testimonial.avatar,
                    alt: testimonial.name,
                    "class": "author-avatar",
                    onerror: "this.src='media/images/default-avatar.jpg'" // Fallback para imagem padrão
                });
                
                // Informações do autor
                var authorInfo = $('<div></div>', {
                    "class": "author-info"
                });
                
                // Nome do autor
                var authorName = $('<div></div>', {
                    "class": "author-name",
                    text: testimonial.name
                });
                
                // Cargo/Empresa do autor
                var authorTitle = $('<div></div>', {
                    "class": "author-title",
                    text: testimonial.position
                });
                
                // Montagem do card
                authorInfo.append(authorName, authorTitle);
                author.append(avatar, authorInfo);
                content.append(textContainer, author);
                card.append(content);
                
                // Adicionar o card ao carrossel
                $("#testimonialsCarousel").append(card);
                
                console.log("Depoimento adicionado:", testimonial.name);
            });
            
            // Configurar controles do carrossel
            setupTestimonialControls();
            
            // Calcular a largura total do carrossel
            updateTestimonialCarouselWidth();
            
            // Atualizar quando a janela for redimensionada
            $(window).on('resize', updateTestimonialCarouselWidth);
            
            // Garantir que a primeira bolinha esteja selecionada no carregamento
            setTimeout(function() {
                updateTestimonialCarouselWidth();
                $('#testimonialDots div').removeClass('bg-yellow-500 active-dot').addClass('bg-zinc-700');
                $('#testimonialDots div[data-index="0"]').removeClass('bg-zinc-700').addClass('bg-yellow-500 active-dot');

                // Ativa as animações de scroll após adicionar os depoimentos
                activateScrollAnimations();
            }, 100);
            
            // Verificar quais depoimentos precisam do botão "Ler mais"
            setTimeout(function() {
                $('.testimonial-text').each(function() {
                    var textElement = $(this);
                    var lineHeight = parseInt(window.getComputedStyle(textElement[0]).lineHeight);
                    var textHeight = textElement.height();
                    var maxHeight = lineHeight * 10;
                    
                    if (textHeight > maxHeight) {
                        textElement.closest('.testimonial-text-container').find('.expand-testimonial').removeClass('hidden');
                    }
                });
            }, 300);
            
            // Evento para expandir/colapsar o texto
            $(document).on('click', '.expand-testimonial', function() {
                var button = $(this);
                var textElement = button.siblings('.testimonial-text');
                
                if (textElement.hasClass('truncated')) {
                    textElement.removeClass('truncated');
                    button.text('Ler menos');
                } else {
                    textElement.addClass('truncated');
                    button.text('Ler mais');
                }
            });
            
        }).fail(function(jqXHR, textStatus, errorThrown) {
            console.error("Erro ao carregar os depoimentos:", textStatus, errorThrown);
            $("#testimonialsCarousel").html('<div class="text-center text-yellow-500 w-full py-8">Erro ao carregar depoimentos. Por favor, tente novamente mais tarde.</div>');
        });
    }
    
    // Função para atualizar a largura total do carrossel de depoimentos
    function updateTestimonialCarouselWidth() {
        var totalCards = $('.testimonial-card').length;
        if (totalCards === 0) return;

        var carouselEl = document.getElementById('testimonialsCarousel');
        var firstCard = $('.testimonial-card').first()[0];
        var computedGap = parseInt(window.getComputedStyle(carouselEl).columnGap) || 32;
        var actualCardWidth = firstCard.offsetWidth + computedGap;

        var lastCardPosition = (totalCards - 1) * actualCardWidth;
        $('#testimonialsCarousel').data('lastCardPosition', lastCardPosition);
        $('#testimonialsCarousel').data('maxScroll', lastCardPosition);
        $('#testimonialsCarousel').data('cardWidth', actualCardWidth);
        $('#testimonialsCarousel').data('totalCards', totalCards);
        $('#testimonialsCarousel').data('visibleDots', totalCards);
    }
    
    // Configura os controles do carrossel de depoimentos
    function setupTestimonialControls() {
        console.log("Configurando controles do carrossel de depoimentos");
        
        // Adiciona o observador de interseção para os cards do carrossel
        setupTestimonialIntersectionObserver();
        
        // Atualizar os indicadores ao rolar o carrossel manualmente
        $('#testimonialsCarousel').on('scroll', function() {
            // Debounce para não chamar a função muitas vezes durante o scroll
            clearTimeout($.data(this, 'scrollTimer'));
            $.data(this, 'scrollTimer', setTimeout(function() {
                var scrollPos = $('#testimonialsCarousel').scrollLeft();
                var cardWidth = $('#testimonialsCarousel').data('cardWidth') || 352; // Width + gap
                var totalCards = $('#testimonialsCarousel').data('totalCards') || $('.testimonial-card').length;
                var visibleDots = $('#testimonialsCarousel').data('visibleDots') || totalCards - 1;
                
                // Cálculo mais preciso do índice atual
                var currentIndex = Math.round(scrollPos / cardWidth);

                // Garantir que o índice esteja dentro dos limites
                currentIndex = Math.max(0, Math.min(currentIndex, visibleDots - 1));

                // Atualizar pontos de navegação
                updateTestimonialDots(currentIndex);
            }, 100));
        });
        
        // Navegar ao clicar nos pontos indicadores
        $(document).on('click', '#testimonialDots div', function() {
            var index = $(this).data('index');
            var cardWidth = $('#testimonialsCarousel').data('cardWidth') || 352; // Width + gap
            var totalCards = $('#testimonialsCarousel').data('totalCards') || $('.testimonial-card').length;
            var visibleDots = $('#testimonialsCarousel').data('visibleDots') || totalCards;

            var scrollTo = index * cardWidth;
            
            // Animar a rolagem com efeito de ease
            $('#testimonialsCarousel').animate({
                scrollLeft: scrollTo
            }, 500, 'swing');
            
            // Atualizar os indicadores
            updateTestimonialDots(Math.min(index, visibleDots - 1));
        });
        
        // Adicionar os handlers dos botões de navegação:
        
        // Botão anterior
        $(document).on("click", "#prevTestimonial", function() {
            console.log("Botão anterior clicado (depoimentos)");
            var scrollPos = $("#testimonialsCarousel").scrollLeft();
            var cardWidth = $('#testimonialsCarousel').data('cardWidth') || 352; // Width + gap
            var scrollTo = Math.max(0, scrollPos - cardWidth);
            
            $("#testimonialsCarousel").animate({ scrollLeft: scrollTo }, 500, 'swing');
            
            // Atualizar os indicadores
            var newIndex = Math.floor(scrollTo / cardWidth);
            var visibleDots = $('#testimonialsCarousel').data('visibleDots') || $('.testimonial-card').length - 1;
            
            // Ajustar índice para as bolinhas visíveis
            newIndex = Math.min(newIndex, visibleDots - 1);
            updateTestimonialDots(newIndex);
        });
        
        // Botão próximo
        $(document).on("click", "#nextTestimonial", function() {
            console.log("Botão próximo clicado (depoimentos)");
            var scrollPos = $("#testimonialsCarousel").scrollLeft();
            var cardWidth = $('#testimonialsCarousel').data('cardWidth') || 352; // Width + gap
            var maxScroll = $('#testimonialsCarousel').data('maxScroll');
            var totalCards = $('#testimonialsCarousel').data('totalCards') || $('.testimonial-card').length;
            var visibleDots = $('#testimonialsCarousel').data('visibleDots') || totalCards;

            var scrollTo = scrollPos + cardWidth;

            // Garantir que não ultrapasse o limite máximo
            if (maxScroll && scrollTo > maxScroll) {
                scrollTo = maxScroll;
                updateTestimonialDots(visibleDots - 1);
            } else {
                var newIndex = Math.round(scrollTo / cardWidth);
                newIndex = Math.max(0, Math.min(newIndex, visibleDots - 1));
                updateTestimonialDots(newIndex);
            }
            
            $("#testimonialsCarousel").animate({ scrollLeft: scrollTo }, 500, 'swing');
        });
    }
    
    // Função para configurar o observador de interseção para os cards do carrossel de depoimentos
    function setupTestimonialIntersectionObserver() {
        if ('IntersectionObserver' in window) {
            var options = {
                root: document.getElementById('testimonialsCarousel'),
                rootMargin: '0px',
                threshold: 0.5 // Ajustado para ser mais sensível
            };
            
            var observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        var index = $(entry.target).data('index');
                                    var visibleDots = $('#testimonialsCarousel').data('visibleDots') || $('.testimonial-card').length;
                        updateTestimonialDots(Math.min(index, visibleDots - 1));
                    }
                });
            }, options);
            
            // Observe todos os cards
            $('.testimonial-card').each(function() {
                observer.observe(this);
            });
        }
    }
    
    // Atualiza os indicadores de forma mais visual para o carrossel de depoimentos
    function updateTestimonialDots(activeIndex) {
        if (activeIndex === undefined || activeIndex === null) return;
        
        var visibleDots = $('#testimonialsCarousel').data('visibleDots') || $('.testimonial-card').length - 1;
        
        // Certifique-se de que o índice não ultrapasse o número de bolinhas visíveis
        activeIndex = Math.min(activeIndex, visibleDots - 1);
        
        $('#testimonialDots div').removeClass('bg-yellow-500 active-dot').addClass('bg-zinc-700');
        $('#testimonialDots div[data-index="' + activeIndex + '"]').removeClass('bg-zinc-700').addClass('bg-yellow-500 active-dot');
    }

    // Função que configura animações de scroll para elementos da página
    function setupScrollAnimations() {
        // Adiciona classe para elementos que receberão animação
        $('h2, h3, p, .btn, img, section').addClass('scroll-reveal');
        
        // Configura o observador de interseção para animar elementos durante o scroll
        activateScrollAnimations();
        
        // Adiciona listener para o scroll da página para efeitos adicionais
        $(window).on('scroll', function() {
            var scrollTop = $(window).scrollTop();
            
            // Efeito parallax para o fundo de seções
            $('.py-16').each(function() {
                var offset = $(this).offset().top;
                var distance = offset - scrollTop;
                
                // Aplica um efeito sutil de parallax
                $(this).css('background-position', '50% ' + (distance * 0.05) + 'px');
            });
        });
    }
    
    // Função para ativar as animações de scroll usando Intersection Observer
    function activateScrollAnimations() {
        if ('IntersectionObserver' in window) {
            var options = {
                root: null, // viewport
                rootMargin: '0px',
                threshold: 0.15 // 15% da visibilidade para acionar
            };
            
            var observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        $(entry.target).addClass('animated');
                        // Remover da observação após animar
                        observer.unobserve(entry.target);
                    }
                });
            }, options);
            
            // Observar todos os elementos com a classe scroll-reveal
            $('.scroll-reveal').each(function() {
                observer.observe(this);
            });
        } else {
            // Fallback para navegadores sem suporte a Intersection Observer
            $('.scroll-reveal').addClass('animated');
        }
    }

    // Função que inicializa o carrossel de projetos
    function initializeProjects() {
        console.log("Inicializando projetos");
        
        $.getJSON('data/projects.json', function(projects) {
            console.log("Dados JSON carregados:", projects.length + " projetos");
            
            // Adicionar os indicadores de navegação (um a menos do que o total de projetos)
            $('#carouselDots').empty();
            var visibleDots = projects.length;
            for (var i = 0; i < visibleDots; i++) {
                var dot = $('<div></div>')
                    .addClass('w-2 h-2 rounded-full bg-zinc-700 hover:bg-yellow-500 transition duration-300 cursor-pointer')
                    .attr('data-index', i);
                $('#carouselDots').append(dot);
            }
            
            // Limpar o carrossel antes de adicionar os novos cards
            $("#projectsCarousel").empty();
            
            $.each(projects, function(index, project) {
                // Cria o card do projeto com os atributos para a modal
                var card = $('<div></div>', {
                    "class": "project-card bg-zinc-900 rounded-xl cursor-pointer min-w-[320px] max-w-[320px] flex flex-col snap-center border border-transparent hover:border-yellow-500/30 scroll-reveal",
                    "data-title": project.title,
                    "data-video": project.video,
                    "data-description": project.description,
                    "data-link": project.link || "#",
                    "data-technologies": JSON.stringify(project.technologies || []),
                    "data-index": index
                });
                
                // Cria o container da imagem para dar mais destaque
                var imgContainer = $('<div></div>', {
                    "class": "w-full overflow-hidden rounded-t-xl"
                });
                
                // Cria a imagem do projeto com classe ajustada
                var img = $('<img>', {
                    src: project.image,
                    alt: project.title,
                    "class": "w-full h-[180px] object-cover transition-transform duration-500 hover:scale-105"
                });
                
                // Adiciona a imagem ao container
                imgContainer.append(img);
                
                // Cria o container para o conteúdo do card
                var contentContainer = $('<div></div>', {
                    "class": "p-5 flex flex-col flex-grow"
                });
                
                // Cria o título do projeto
                var title = $('<h3></h3>', {
                    "class": "text-xl font-bold mb-2 text-yellow-500",
                    text: project.title
                });
                
                // Cria um resumo curto do projeto
                var shortDesc = $('<p></p>', {
                    "class": "text-gray-400 text-sm flex-grow leading-relaxed",
                    text: project.description.substring(0, 80) + "..."
                });
                
                // Adiciona botão "Ver mais"
                var viewMore = $('<button></button>', {
                    "class": "mt-4 bg-transparent border border-yellow-500 text-yellow-500 px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-500 hover:text-zinc-900 transition-colors duration-300 inline-flex items-center justify-center group",
                    text: "Ver detalhes"
                });
                
                // Adiciona ícone ao botão com animação
                var icon = $('<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/></svg>');
                viewMore.append(icon);
                
                // Adiciona os elementos ao container de conteúdo
                contentContainer.append(title, shortDesc, viewMore);
                
                // Junta os elementos e adiciona ao carrossel
                card.append(imgContainer, contentContainer);
                $("#projectsCarousel").append(card);
                
                console.log("Card adicionado:", project.title);
            });
            
            // Configura os controles do carrossel após a criação dos cards
            setupCarouselControls();
            
            // Calcular a largura total do carrossel
            updateCarouselWidth();
            
            // Atualizar quando a janela for redimensionada
            $(window).on('resize', updateCarouselWidth);
            
            // Garantir que a primeira bolinha esteja selecionada no carregamento
            setTimeout(function() {
                updateCarouselWidth();
                // Definir o primeiro indicador como ativo
                $('#carouselDots div').removeClass('bg-yellow-500 active-dot').addClass('bg-zinc-700');
                $('#carouselDots div[data-index="0"]').removeClass('bg-zinc-700').addClass('bg-yellow-500 active-dot');

                // Ativa as animações de scroll após adicionar os cards
                activateScrollAnimations();
            }, 100);
            
        }).fail(function(jqXHR, textStatus, errorThrown) {
            console.error("Erro ao carregar os projetos:", textStatus, errorThrown);
            $("#projectsCarousel").html('<div class="text-center text-yellow-500 w-full py-8">Erro ao carregar projetos. Por favor, tente novamente mais tarde.</div>');
        });
    }
    
    // Função para atualizar a largura total do carrossel
    function updateCarouselWidth() {
        var totalCards = $('.project-card').length;
        if (totalCards === 0) return;

        var carouselEl = document.getElementById('projectsCarousel');
        var firstCard = $('.project-card').first()[0];
        var computedGap = parseInt(window.getComputedStyle(carouselEl).columnGap) || 32;
        var actualCardWidth = firstCard.offsetWidth + computedGap;

        var lastCardPosition = (totalCards - 1) * actualCardWidth;
        $('#projectsCarousel').data('lastCardPosition', lastCardPosition);
        $('#projectsCarousel').data('maxScroll', lastCardPosition);
        $('#projectsCarousel').data('cardWidth', actualCardWidth);
        $('#projectsCarousel').data('totalCards', totalCards);
        $('#projectsCarousel').data('visibleDots', totalCards);
    }
    
    // Função para configurar o observador de interseção para os cards do carrossel
    function setupIntersectionObserver() {
        if ('IntersectionObserver' in window) {
            var options = {
                root: document.getElementById('projectsCarousel'),
                rootMargin: '0px',
                threshold: 0.5 // Ajustado para ser mais sensível
            };
            
            var observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        var index = $(entry.target).data('index');
                        var visibleDots = $('#projectsCarousel').data('visibleDots') || $('.project-card').length;

                        updateCarouselDots(Math.min(index, visibleDots - 1));
                    }
                });
            }, options);
            
            // Observe todos os cards
            $('.project-card').each(function() {
                observer.observe(this);
            });
        }
    }
    
    // Atualiza os indicadores de forma mais visual
    function updateCarouselDots(activeIndex) {
        if (activeIndex === undefined || activeIndex === null) return;
        
        var visibleDots = $('#projectsCarousel').data('visibleDots') || $('.project-card').length;

        // Certifique-se de que o índice não ultrapasse o número de bolinhas visíveis
        activeIndex = Math.min(activeIndex, visibleDots - 1);
        
        $('#carouselDots div').removeClass('bg-yellow-500 active-dot').addClass('bg-zinc-700');
        $('#carouselDots div[data-index="' + activeIndex + '"]').removeClass('bg-zinc-700').addClass('bg-yellow-500 active-dot');
    }
    
    // Configura os controles do carrossel
    function setupCarouselControls() {
        console.log("Configurando controles do carrossel");
        
        // Adiciona o observador de interseção para os cards do carrossel
        setupIntersectionObserver();
        
        // Atualizar os indicadores ao rolar o carrossel manualmente
        $('#projectsCarousel').on('scroll', function() {
            // Usamos um debounce para não chamar a função várias vezes durante o scroll
            clearTimeout($.data(this, 'scrollTimer'));
            $.data(this, 'scrollTimer', setTimeout(function() {
                var scrollPos = $('#projectsCarousel').scrollLeft();
                var cardWidth = $('#projectsCarousel').data('cardWidth') || 352; // Width + gap
                var visibleDots = $('#projectsCarousel').data('visibleDots') || $('.project-card').length;

                // Cálculo mais preciso do índice atual
                var currentIndex = Math.round(scrollPos / cardWidth);

                // Garantir que o índice esteja dentro dos limites
                currentIndex = Math.max(0, Math.min(currentIndex, visibleDots - 1));
                
                // Atualizar pontos de navegação
                updateCarouselDots(currentIndex);
            }, 100));
        });
        
        // Navegar ao clicar nos pontos indicadores
        $(document).on('click', '#carouselDots div', function() {
            var index = $(this).data('index');
            var cardWidth = $('#projectsCarousel').data('cardWidth') || 352; // Width + gap
            var visibleDots = $('#projectsCarousel').data('visibleDots') || $('.project-card').length;

            var scrollTo = index * cardWidth;
            
            // Animar a rolagem com efeito de ease
            $('#projectsCarousel').animate({
                scrollLeft: scrollTo
            }, 500, 'swing');
            
            // Atualizar os indicadores
            updateCarouselDots(Math.min(index, visibleDots - 1));
        });

        // Adicionar os handlers dos botões de navegação:
        
        // Botão anterior
        $(document).on("click", "#prev", function() {
            console.log("Botão anterior clicado");
            var scrollPos = $("#projectsCarousel").scrollLeft();
            var cardWidth = $('#projectsCarousel').data('cardWidth') || 352; // Width + gap
            var scrollTo = Math.max(0, scrollPos - cardWidth);
            
            $("#projectsCarousel").animate({ scrollLeft: scrollTo }, 500, 'swing');
            
            // Atualizar os indicadores
            var newIndex = Math.floor(scrollTo / cardWidth);
            var visibleDots = $('#projectsCarousel').data('visibleDots') || $('.project-card').length;

            // Ajustar índice para as bolinhas visíveis
            newIndex = Math.min(newIndex, visibleDots - 1);
            updateCarouselDots(newIndex);
        });
        
        // Botão próximo
        $(document).on("click", "#next", function() {
            console.log("Botão próximo clicado");
            var scrollPos = $("#projectsCarousel").scrollLeft();
            var cardWidth = $('#projectsCarousel').data('cardWidth') || 352; // Width + gap
            var maxScroll = $('#projectsCarousel').data('maxScroll');
            var visibleDots = $('#projectsCarousel').data('visibleDots') || $('.project-card').length;

            var scrollTo = scrollPos + cardWidth;

            // Calcular o novo índice com base no scroll atualizado
            var newIndex = Math.round(scrollTo / cardWidth);

            // Garantir que o índice esteja dentro dos limites
            newIndex = Math.max(0, Math.min(newIndex, visibleDots - 1));

            // Garantir que não ultrapasse o limite máximo
            if (maxScroll && scrollTo > maxScroll) {
                scrollTo = maxScroll;
            }

            updateCarouselDots(newIndex);
            
            $("#projectsCarousel").animate({ scrollLeft: scrollTo }, 500, 'swing');
        });
        
        // Abrir a modal ao clicar em um card de projeto
        $(document).on("click", ".project-card", function() {
            var title = $(this).data("title");
            var videoPath = $(this).data("video");
            var description = $(this).data("description");
            var link = $(this).data("link");
            var technologies = $(this).data("technologies");
            
            console.log("Card clicado:", title);
            
            // Atualiza os elementos da modal
            $("#modalTitle").text(title);
            $("#modalDescription").text(description);
            $("#modalLink").attr("href", link);
            
            // Atualiza a fonte do vídeo e recarrega o elemento
            var videoType = videoPath.endsWith('.webm') ? 'video/webm' : 'video/mp4';
            
            // Encontre a source correspondente ao tipo de vídeo e atualize
            $("#modalVideo source[type='" + videoType + "']").attr("src", videoPath);
            $("#modalVideo")[0].load();
            
            // Limpa e adiciona as tecnologias
            $("#modalTechnologies").empty();
            if (technologies && technologies.length > 0) {
                $.each(technologies, function(i, tech) {
                    var techBadge = $('<span></span>', {
                        "class": "px-2 py-1 bg-zinc-800 text-yellow-500 rounded text-xs mr-2 mb-2",
                        text: tech
                    });
                    $("#modalTechnologies").append(techBadge);
                });
            }
            
            // Exibe a modal com uma animação
            $("#projectModal").removeClass("hidden").addClass("animate-fadeIn");
        });
    }

    // Função para inicializar a animação de digitação
    function initTypewriterAnimation() {
        console.log("Inicializando animação de digitação");
        const typewriterElement = document.getElementById('typewriter');
        
        if (!typewriterElement) {
            console.error("Elemento typewriter não encontrado");
            // Tentar novamente depois de um momento
            setTimeout(initTypewriterAnimation, 200);
            return;
        }
        
        const professions = [
            "Back End Developer",
            "Software Engineer",
            "Full Stack Developer", 
            "DevOps Engineer"
        ];
        
        let currentProfession = 0;
        
        function updateProfession() {
            // Função para atualizar com efeito de digitação
            function typeText(text, element, i = 0) {
                if (i <= text.length) {
                    element.textContent = text.substring(0, i);
                    setTimeout(() => typeText(text, element, i + 1), 100);
                } else {
                    // Quando terminar de digitar, agenda para apagar após 2s
                    setTimeout(() => eraseText(text, element), 2000);
                }
            }
            
            // Função para apagar o texto letra por letra
            function eraseText(text, element, i = text.length) {
                if (i >= 0) {
                    element.textContent = text.substring(0, i);
                    setTimeout(() => eraseText(text, element, i - 1), 50);
                } else {
                    // Quando terminar de apagar, passa para a próxima profissão
                    currentProfession = (currentProfession + 1) % professions.length;
                    setTimeout(() => typeText(professions[currentProfession], element), 300);
                }
            }
            
            // Inicia a digitação da profissão atual
            typeText(professions[currentProfession], typewriterElement);
        }
        
        // Inicia a animação
        updateProfession();
        console.log("Animação de digitação iniciada");
    }

    // Função para inicializar o efeito parallax
    function initParallaxEffect() {
        console.log("Inicializando efeito parallax com CSS direto");
        
        // Verificação para dispositivos móveis onde background-attachment: fixed não funciona bem
        function isMobile() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
        }
        
        // Esperar que o container do parallax seja carregado
        function checkParallaxContainer() {
            const parallaxBg = document.querySelector('.parallax-bg');
            if (!parallaxBg) {
                console.log("Container de parallax não encontrado, tentando novamente em 200ms");
                setTimeout(checkParallaxContainer, 200);
                return;
            }
            
            console.log("Container de parallax encontrado, aplicando efeitos");
            
            // Configuração já está sendo feita no componente parallax.html
            // Este código está aqui para garantir compatibilidade com implementações anteriores
            if (isMobile()) {
                console.log("Dispositivo móvel detectado para parallax");
            } else {
                console.log("Desktop detectado para parallax");
            }
        }
        
        // Iniciar verificação
        checkParallaxContainer();
    }
});
