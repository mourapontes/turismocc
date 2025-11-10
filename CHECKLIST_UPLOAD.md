# 📁 Lista de Arquivos para Upload Manual no GitHub

## ✅ Arquivos que DEVEM ser incluídos no upload:

### 📂 Arquivos na raiz:
- [ ] `App.tsx`
- [ ] `index.html`
- [ ] `index.tsx`
- [ ] `index.css`
- [ ] `metadata.json`
- [ ] `package.json`
- [ ] `README.md`
- [ ] `tsconfig.json`
- [ ] `types.ts`
- [ ] `vite.config.ts`
- [ ] `.gitignore`
- [ ] `DEPLOY_MANUAL.md` (este guia)
- [ ] `CHECKLIST_UPLOAD.md` (esta lista)

### 📂 Pastas completas:
- [ ] `components/` (com Card.tsx, Footer.tsx, Header.tsx, Home.tsx, SectionPage.tsx)
- [ ] `constants/` (com data.ts)
- [ ] `.github/` (com workflows/deploy.yml)

## ❌ Arquivos que NÃO devem ser incluídos:
- ❌ `node_modules/` (pasta muito grande, será instalada automaticamente)
- ❌ `dist/` (será gerada automaticamente no GitHub)
- ❌ Arquivos `.env*` (se existirem)

## 🚀 Processo de Upload:

### 1. Criar repositório no GitHub:
   - Nome sugerido: `guia-turistico-cristino-castro`
   - Descrição: "Guia Turístico de Cristino Castro - React + TypeScript"
   - Público
   - Adicionar README (pode substituir depois)

### 2. Upload dos arquivos:
   - Selecione todos os arquivos marcados ✅ acima
   - Arraste para o GitHub ou use "Upload files"
   - Commit message: "Adicionar projeto completo do guia turístico"

### 3. Configurar GitHub Pages:
   - Vá em Settings → Pages
   - Source: "GitHub Actions"
   - O deploy será automático após cada commit

### 4. Verificar se funcionou:
   - Aguarde alguns minutos
   - Acesse: `https://SEU_USUARIO.github.io/guia-turistico-cristino-castro/`

## 🔧 Comandos úteis (se quiser usar Git depois):
```bash
# Instalar dependências (após clone)
npm install

# Rodar localmente
npm run dev

# Fazer build
npm run build
```

## 📝 Notas importantes:
- O projeto está configurado para funcionar no GitHub Pages
- O workflow automático fará o build e deploy
- Não precisa fazer upload da pasta `dist`
- As API keys do Gemini precisam ser removidas ou tratadas adequadamente