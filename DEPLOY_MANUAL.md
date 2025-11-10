# 📋 Guia para Upload Manual no GitHub Pages

## 🚀 Preparação dos Arquivos

### 1. Primeira etapa - Build do projeto
Execute no terminal (dentro da pasta do projeto):
```bash
npm run build
```

Isso criará a pasta `dist` com os arquivos compilados.

### 2. Estrutura para GitHub
Após o build, você deve ter esta estrutura:
```
Guia de Turismo CC/
├── dist/                    # ← Pasta gerada pelo build
├── .github/
│   └── workflows/
│       └── deploy.yml
├── components/
├── constants/
├── node_modules/           # ← NÃO incluir no GitHub
├── App.tsx
├── index.html
├── index.tsx
├── index.css
├── package.json
├── README.md
├── tsconfig.json
├── types.ts
├── vite.config.ts
└── .gitignore              # ← Arquivo que vamos criar
```

## 📁 Arquivos que NÃO devem ir para o GitHub
- `node_modules/` (pasta de dependências)
- `dist/` (será gerada automaticamente)
- `.env` ou `.env.local` (se existir)

## 🎯 Processo de Upload Manual

### Opção 1: Upload direto no GitHub.com
1. Acesse [github.com](https://github.com)
2. Clique em "New repository"
3. Nome: `guia-turistico-cristino-castro`
4. Marque "Add a README file"
5. Clique "Create repository"
6. Na página do repositório, clique "uploading an existing file"
7. Arraste TODOS os arquivos EXCETO `node_modules` e `dist`

### Opção 2: Usando GitHub Desktop
1. Baixe GitHub Desktop
2. Clone o repositório criado
3. Copie os arquivos para a pasta local
4. Commit e push

## ⚙️ Configurações no GitHub Pages

### Após fazer upload:
1. Vá em `Settings` do repositório
2. Na lateral esquerda, clique em `Pages`
3. Em "Source", selecione `GitHub Actions`
4. O workflow automático será executado

### URL final será:
`https://SEU_USUARIO.github.io/guia-turistico-cristino-castro/`

## 🔄 Para atualizações futuras:
1. Faça as alterações no código
2. Execute `npm run build` localmente
3. Faça upload dos arquivos alterados no GitHub
4. O deploy acontecerá automaticamente