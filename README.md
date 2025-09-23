# POC Semantic Release

Este é um exemplo prático de como usar [semantic-release](https://github.com/semantic-release/semantic-release) para automatizar a publicação de pacotes no npm através do GitHub Actions.

## 🚀 Funcionalidades

- ✅ Publicação automática no npm
- ✅ Geração automática de changelog
- ✅ Versionamento semântico baseado em commits
- ✅ Integração com GitHub Actions
- ✅ Criação automática de releases no GitHub

## 📦 Como usar

### Instalação

```bash
npm install poc-semantic-release
```

### Uso

```javascript
const { main } = require('poc-semantic-release');

// Executa a função principal
main();
```

Ou execute diretamente:

```bash
npx poc-semantic-release
```

## 🔧 Configuração

### 1. Configurar o repositório

Atualize a URL do repositório no `package.json`:

```json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/SEU_USUARIO/poc-semantic-release.git"
  }
}
```

### 2. Configurar secrets no GitHub

No seu repositório GitHub, vá em **Settings > Secrets and variables > Actions** e adicione:

- `NPM_TOKEN`: Token de acesso do npm (obtenha em [npmjs.com](https://www.npmjs.com/settings/tokens))

### 3. Configurar o semantic-release

O arquivo `.releaserc.json` já está configurado com:

- Análise de commits para determinar o tipo de release
- Geração de changelog
- Publicação no npm
- Criação de release no GitHub
- Atualização automática do package.json e CHANGELOG.md

## 📝 Convenções de commit

O semantic-release usa [Conventional Commits](https://www.conventionalcommits.org/) para determinar o tipo de release:

- `feat:` - Nova funcionalidade (minor version)
- `fix:` - Correção de bug (patch version)
- `BREAKING CHANGE:` - Mudança que quebra compatibilidade (major version)
- `docs:`, `style:`, `refactor:`, `test:`, `chore:` - Não geram release

### Exemplos:

```bash
# Patch version (1.0.0 -> 1.0.1)
git commit -m "fix: corrige erro no console.log"

# Minor version (1.0.0 -> 1.1.0)
git commit -m "feat: adiciona nova funcionalidade de teste"

# Major version (1.0.0 -> 2.0.0)
git commit -m "feat: reescreve API

BREAKING CHANGE: a função main() agora retorna uma Promise"
```

## 🔄 Workflow

1. Faça commits seguindo as convenções
2. Faça push para a branch `main` ou `master`
3. O GitHub Actions executará automaticamente:
   - Instalação de dependências
   - Execução de testes
   - Análise de commits
   - Geração de changelog
   - Publicação no npm
   - Criação de release no GitHub

## 📁 Estrutura do projeto

```
poc-semantic-release/
├── .github/
│   └── workflows/
│       └── release.yml          # Workflow do GitHub Actions
├── .releaserc.json              # Configuração do semantic-release
├── index.js                     # Código principal
├── package.json                 # Configuração do npm
└── README.md                    # Este arquivo
```

## 🛠️ Desenvolvimento

### Instalar dependências

```bash
npm install
```

### Executar testes

```bash
npm test
```

### Executar semantic-release localmente

```bash
npx semantic-release --dry-run
```

## 📚 Recursos úteis

- [Documentação do semantic-release](https://semantic-release.gitbook.io/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [GitHub Actions](https://docs.github.com/en/actions)
- [npm CLI](https://docs.npmjs.com/cli/)

## 📄 Licença

MIT.
