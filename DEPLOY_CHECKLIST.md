# ✅ Checklist de Deploy - Correção de Requisições Excessivas

## 🚀 Antes do Deploy

- [ ] Commit todas as alterações
- [ ] Teste localmente: `npm run build && npm run preview`
- [ ] Verifique se não há erros no console

## 📦 Arquivos Modificados

### Críticos (Service Worker)
- ✅ `public/sw.js` - Estratégia mudada para Cache First + filtros
- ✅ `src/main.tsx` - Detecção de bots adicionada
- ✅ `public/robots.txt` - Rate limiting e bloqueio de bots de IA

### Configuração
- ✅ `src/App.tsx` - React Query com limites de retry
- ✅ `vercel.json` - Headers de segurança e cache
- ✅ `.env.example` - Variáveis de ambiente

### Documentação
- ✅ `SECURITY_FIXES.md` - Detalhes das correções
- ✅ `DEPLOY_CHECKLIST.md` - Este arquivo
- ✅ `public/clear-cache.html` - Ferramenta de limpeza

## 🔧 Após o Deploy

### 1. Monitoramento Imediato (primeiras 2 horas)
- [ ] Acesse Vercel Dashboard > Analytics
- [ ] Monitore "Function Invocations"
- [ ] Verifique "Bandwidth Usage"
- [ ] Cheque logs em tempo real

### 2. Teste o Site
- [ ] Acesse o site em modo anônimo
- [ ] Verifique se o Service Worker registrou: DevTools > Application > Service Workers
- [ ] Confirme que o cache está funcionando
- [ ] Teste navegação entre páginas

### 3. Limpeza de Cache (se necessário)
- [ ] Compartilhe com usuários: `https://seu-site.vercel.app/clear-cache.html`
- [ ] Ou instrua: Configurações > Limpar dados de navegação

### 4. Monitoramento Contínuo (24-48h)
- [ ] Compare requisições antes/depois
- [ ] Verifique origem das requisições nos logs
- [ ] Monitore custos na Vercel

## 🆘 Se o Problema Persistir

### Opção 1: Desabilitar Service Worker Temporariamente
```javascript
// Em src/main.tsx, comente todo o bloco do Service Worker
```

### Opção 2: Ativar Proteção Avançada na Vercel
1. Acesse Vercel Dashboard
2. Settings > Firewall (requer plano Pro)
3. Configure rate limiting por IP

### Opção 3: Adicionar Cloudflare
1. Configure Cloudflare na frente da Vercel
2. Ative "Under Attack Mode" temporariamente
3. Configure rate limiting no Cloudflare

## 📊 Métricas Esperadas

### Antes (problema)
- Requisições: 10k-100k+/dia anormais
- Bandwidth: Alto consumo
- Origem: Bots/crawlers

### Depois (corrigido)
- Requisições: Redução de 60-80%
- Bandwidth: Redução significativa
- Cache Hit Rate: >70%

## 🔗 Links Úteis

- Vercel Analytics: https://vercel.com/dashboard/analytics
- Vercel Logs: https://vercel.com/dashboard/deployments
- Service Worker Status: DevTools > Application > Service Workers

## 📞 Suporte

Se após 48h o problema persistir:
1. Exporte logs da Vercel
2. Verifique User-Agents das requisições
3. Considere migrar para Cloudflare Pages ou Netlify
