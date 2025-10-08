# Helping Hands - Aplicativo (Dispositivos Móveis)

## 📖 Sobre o Projeto

**Helping Hands** é uma aplicação que busca conectar pessoas da comunidade, permitindo que elas ofereçam ou encontrem serviços, sejam eles gratuitos ou remunerados.

Este repositório contém o aplicativo que será submetido à avaliação na disciplina de **Dispositivos Móveis (DEC000112)**, da Universidade Estadual de Santa Cruz (UESC).

---

## ✨ Funcionalidades Implementadas

A interface desenvolvida implementa a funcionalidade de **"Consulta de Serviços"**, permitindo ao usuário:

* **Visualizar uma Lista de Serviços:** Carregar e exibir uma lista de prestadores de serviço.
* **Busca Flexível em Tempo Real:** Implementar uma barra de busca que filtre a lista dinamicamente, tanto pelo **nome do prestador** quanto pelo **serviço oferecido**.
* **Interface Componentizada:** O código foi estruturado em componentes React Native reutilizáveis.

---

## 🚀 Tecnologias Utilizadas

* **React Native:** Framework principal para a construção do aplicativo multiplataforma (iOS e Android).
* **Expo:** Plataforma e conjunto de ferramentas para agilizar o desenvolvimento e a execução do aplicativo.
* **TypeScript:** Linguagem base do projeto.
* **StyleSheet API:** Para a estilização dos componentes, seguindo a abordagem nativa do React Native.
* **React Native Vector Icons:** (Ou similar) Biblioteca para a utilização de ícones na interface.

---

## 📱 Como Executar o Projeto

Para visualizar e testar o aplicativo em sua máquina e em um dispositivo móvel, siga os passos abaixo.

**Pré-requisitos:**
* [Node.js](https://nodejs.org/en) (versão 22.12+ ou superior).
* [Git](https://git-scm.com/) instalado.
* **App Expo Go** instalado no seu celular (iOS ou Android).
* (Opcional) Um emulador Android (via Android Studio) ou iOS (via Xcode no macOS).

**Passo a passo:**

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/CibelleSousa/Helping-Hands-App.git]
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd Helping-Hands-App
    ```

3.  **Instale as dependências do projeto:**
    ```bash
    npm install
    ```

4.  **Execute a aplicação com o Expo:**
    ```bash
    npx expo start
    ```

5.  Após o comando acima, um QR Code aparecerá no seu terminal. Abra o app **Expo Go** no seu celular e escaneie o QR Code para abrir o aplicativo. Certifique-se de que seu computador e seu celular estejam na mesma rede Wi-Fi.

---

## 📂 Estrutura de Pastas

O código-fonte do projeto está organizado da seguinte forma dentro da pasta `src/`:

* **`components/`**: Contém todos os componentes React reutilizáveis da aplicação (`Header`, `SearchBar`, `ServiceList`, `ServiceProviderCard`).
* **`data/`**: Contém o arquivo `mockedServices.js`, que simula a nossa base de dados.
* **`screens/`**: Pasta para organizar as telas principais do aplicativo (ex: `HomeScreen.js`).
* **`App.tsx`**: Componente principal que organiza a página e gerencia o estado da aplicação.

---

## 🧱 Estrutura de Dados

Para garantir a consistência do desenvolvimento, todos os componentes e lógicas seguiram o seguinte "contrato de dados" para os objetos que representam os prestadores de serviço.

| Campo | Tipo de Dado | Descrição | Exemplo |
| :--- | :--- | :--- | :--- |
| `id` | `Number` | Identificador numérico único para cada serviço. | `1` |
| `nome` | `String` | Nome completo do prestador de serviço. | `'Letícia Oliveira'` |
| `servico`| `String` | A especialidade ou o serviço principal oferecido. | `'Pet care specialist'` |
| `urlFoto`| `String` | A URL completa para a imagem de perfil do prestador. | `'https://.../leticia.jpg'` |
| `focoDescricao` | `String` | O parágrafo de descrição do serviço (Focus). | `'Focus: To provide loving...'` |

---

## 👩‍💻 Desenvolvedores

* **Cibelle Sousa Rodrigues**
* **Alice Martins Valero**
* **Emanuel Humberto Menezes Cerqueira**
