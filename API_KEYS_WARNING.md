# ⚠️ ATENÇÃO: Tratamento de API Keys

## 🔐 Problema Identificado
Seu projeto usa uma API key do Gemini (`GEMINI_API_KEY`) que está no arquivo `.env.local`.

## ❌ O que NÃO fazer:
- NÃO fazer upload do arquivo `.env.local` para o GitHub
- NÃO colocar API keys diretamente no código

## ✅ Soluções Recomendadas:

### Opção 1: Remover funcionalidades que usam API
Se a API não for essencial, remova as partes do código que a utilizam.

### Opção 2: Usar dados estáticos
Substitua chamadas à API por dados pré-definidos no arquivo `constants/data.ts`.

### Opção 3: Backend separado
Crie um backend que faça as chamadas à API e exponha endpoints públicos.

### Opção 4: API pública sem autenticação
Use APIs que não precisam de chaves secretas.

## 🚨 Status Atual do .env.local:
- Arquivo encontrado: `.env.local`
- Conteúdo: `GEMINI_API_KEY=PLACEHOLDER_API_KEY`
- ✅ Já está no `.gitignore` (não será enviado)

## 📋 Ação Recomendada:
Para GitHub Pages, revise o código que usa a API do Gemini ou substitua por dados estáticos.