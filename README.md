# CyberSavers - Frontend

## Descrição
Este repositório corresponde à **segunda etapa** do desenvolvimento do projeto **CyberSavers**. O frontend foi criado para fornecer uma interface gráfica intuitiva e acessível para os agricultores utilizarem as funcionalidades fornecidas pela API desenvolvida na primeira etapa do projeto. Essa interface conecta os usuários à plataforma CyberSavers, facilitando a visualização de dados e a interação com o marketplace agrícola.

### Objetivos do Frontend:
1. **Integração com a API**: Consumir as informações fornecidas pela API do CyberSavers, como análise de pH do solo, tendências de mercado, e recomendações personalizadas.
2. **Interface Amigável**: Criar um design responsivo e intuitivo que facilite o uso por parte dos agricultores, mesmo aqueles com pouca experiência com tecnologia.
3. **Acesso ao Marketplace**: Permitir que agricultores possam visualizar e gerenciar produtos no marketplace, conectando-os diretamente a compradores locais.

## Estrutura do Projeto

```bash
CyberSavers-Frontend/
├── images/                        # Contém as imagens utilizadas na interface
│   └── fundo.png                  # Imagem de fundo da aplicação
├── javascript/                    # Scripts para funcionalidades dinâmicas
│   └── main.js                    # Script principal para gerenciamento das funções do frontend
├── pages/                         # Páginas HTML da aplicação
│   ├── index.html                 # Página inicial da aplicação
│   ├── login.html                 # Página de login dos usuários
│   └── dashboard.html             # Painel principal para visualização de dados
├── tailwind.css                   # Estilização principal usando o Tailwind CSS
└── README.md                      # Arquivo README do frontend
```

## Tecnologias Utilizadas

- **HTML5**: Estrutura básica das páginas.
- **CSS3/Tailwind CSS**: Estilização e layout responsivo.
- **JavaScript**: Implementação de funcionalidades dinâmicas e manipulação de DOM.
- **API Fetch**: Comunicação com a API desenvolvida na primeira etapa do projeto.
- **Git e GitHub**: Controle de versão e colaboração.

## Instalação e Configuração

### Pré-requisitos
Antes de iniciar, é necessário garantir que a API do backend esteja rodando corretamente. Siga as etapas de instalação e configuração descritas no [README do Backend](https://github.com/Hackathon-CyberSavers/cybersavers-api).

### Como Clonar o Repositório

1. Clone este repositório em seu ambiente local:
   ```bash
   git clone https://github.com/SeuUsuario/CyberSavers-Frontend.git
   ```

2. Navegue até a pasta do projeto:
   ```bash
   cd CyberSavers-Frontend
   ```

### Executando o Projeto
Abra o arquivo `index.html` no seu navegador preferido para iniciar a aplicação.

## Funcionalidades
- **Dashboard**: Visualização de dados em gráficos e tabelas interativas.
- **Login e Cadastro**: Gerenciamento de contas de usuários.
- **Integração com o Marketplace**: Permite gerenciar produtos e conectar-se com compradores.
