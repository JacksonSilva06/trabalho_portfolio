document.addEventListener('DOMContentLoaded', function(){

        // Elementos do DOM
        const projectsContainer = document.getElementById('projectsContainer');
        const prevButton = document.getElementById('prevProject');
        const nextButton = document.getElementById('nextProject');
        const indicatorsContainer = document.getElementById('projetoIndicadores');
        
        // Dados dos projetos

        const projects = [
            {
                title: "E-commerce Completo",
                description: "Plataforma de e-commerce com carrinho de compras, checkout e integração com pagamentos. Desenvolvido com React e Node.js",
                technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
                link: "https://www.ecommercejs.com",
                image: "imagens/ecommerce.jpg"
            },
            {
                title: "Dashboard Analytics",
                description: "Painel administrativo com gráficos interativos e visualização de dados em tempo real.",
                technologies: ["Vue.js", "Chart.js", "Firebase", "Sass"],
                link: "#",
                image: "imagens/dashboard.png"
            },
            {
                title: "Aplicativo de Tarefas",
                description: "To-do app com drag and drop, categorias e persistência de dados no localStorage.",
                technologies: ["JavaScript", "HTML5", "CSS3", "Drag API"],
                link: "#",
                image: "imagens/todoapp.jpg"
            }     
        ];

        let currentProject = 0;
        let projectsElements = [];

    // Função para renderizar os projetos
    function renderProjects() {
        projectsContainer.innerHTML = '';
        projectsElements = [];
        
        projects.forEach((project, index) => {
            const projectElement = document.createElement('div');
            projectElement.className = `project ${index === currentProject ? 'active' : ''}`;
            projectElement.innerHTML = `
                <h3>${project.title}</h3>
                <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
                <p>${project.description}</p>
                <div class="tech-tags">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <a href="${project.link}" class="botao-projeto" target="_blank">Ver Projeto</a>
            `;
            projectsContainer.appendChild(projectElement);
            projectsElements.push(projectElement);
        });
        
        renderIndicators();
    }

    // Função para renderizar os indicadores
    function renderIndicators() {
        indicatorsContainer.innerHTML = '';
        
        projects.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.className = `projeto-indicador ${index === currentProject ? 'active' : ''}`;
            indicator.addEventListener('click', () => {
                currentProject = index;
                renderProjects();
            });
            indicatorsContainer.appendChild(indicator);
        });
    }

    // Event listeners para navegação
    prevButton.addEventListener('click', () => {
        if (currentProject > 0) {
            currentProject--;
            renderProjects();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentProject < projects.length - 1) {
            currentProject++;
            renderProjects();
        }
    });

    // Inicializa o carrossel
    renderProjects();
});

// Validação do Formulário de Contato
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Resetar mensagens de erro
    document.querySelectorAll('.erro').forEach(erro => {
        erro.textContent = '';
    });
    
    // Validar campos
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    let valido = true;
    
    // Validação do Nome
    if (nome === '') {
        document.getElementById('erro-nome').textContent = 'Por favor, insira seu nome.';
        valido = false;
    }
    
    // Validação do E-mail
    if (email === '') {
        document.getElementById('erro-email').textContent = 'Por favor, insira seu e-mail.';
        valido = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('erro-email').textContent = 'Por favor, insira um e-mail válido.';
        valido = false;
    }
    
    // Validação da Mensagem
    if (mensagem === '') {
        document.getElementById('erro-mensagem').textContent = 'Por favor, insira sua mensagem.';
        valido = false;
    } else if (mensagem.length < 10) {
        document.getElementById('erro-mensagem').textContent = 'A mensagem deve ter pelo menos 10 caracteres.';
        valido = false;
    }
    
    // Se tudo estiver válido
    if (valido) {
        const mensagemSucesso = document.getElementById('mensagem-sucesso');
        mensagemSucesso.textContent = 'Mensagem enviada com sucesso! Obrigado pelo contato.';
        mensagemSucesso.style.display = 'block';
        
        // Resetar formulário
        document.getElementById('form-contato').reset();
        
        // Esconder mensagem após 5 segundos
        setTimeout(() => {
            mensagemSucesso.style.display = 'none';
        }, 5000);
        
        // Aqui você poderia adicionar código para enviar os dados para um servidor
        // console.log({ nome, email, mensagem });
    }
});

// Efeito hover no botão de enviar (melhorado)
const botaoEnviar = document.getElementById('botao-enviar');
botaoEnviar.addEventListener('mouseenter', () => {
    botaoEnviar.style.boxShadow = '0 4px 12px rgba(52, 152, 219, 0.3)';
});
botaoEnviar.addEventListener('mouseleave', () => {
    botaoEnviar.style.boxShadow = 'none';
});