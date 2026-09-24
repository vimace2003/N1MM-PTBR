# Manual N1MM+ em Português (PT-BR)

Tradução não-oficial, comunitária, do manual do [N1MM Logger+](https://n1mmwp.hamdocs.com/) para o português do Brasil.

Projeto do [GG52 Floripa DX](https://gg52floripadx.com/) — iniciativa de [PP5KJ](https://pp5kj.com).

O site é HTML/CSS/JS estático, sem build step. Todo o conteúdo publicável está em [`site/`](site/).

## Deploy automático (GitHub Actions → HostGator)

Todo push para `main` que altere algo em `site/` publica automaticamente via FTP/FTPS
para a HostGator, usando [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

Para o workflow funcionar, configure em **Settings → Secrets and variables → Actions** deste repositório:

**Secrets** (obrigatórios):
- `FTP_SERVER` — host FTP da HostGator (ex.: `ftp.gg52floripadx.com` ou o IP do servidor, disponível no cPanel em "Contas FTP")
- `FTP_USERNAME` — usuário da conta FTP criada no cPanel
- `FTP_PASSWORD` — senha dessa conta FTP

**Variable** (opcional):
- `FTP_SERVER_DIR` — pasta de destino no servidor. Se não definida, usa o padrão
  `/home2/vini0792/n1mm.gg52floripadx.com/` já configurado no workflow.

### Criando a conta FTP no cPanel

1. No cPanel da HostGator, abra **Contas FTP**.
2. Crie uma conta com **diretório inicial** apontando exatamente para a pasta de destino
   (ex.: `n1mm.gg52floripadx.com` ou o caminho completo informado acima).
3. Se o diretório inicial da conta FTP já for essa pasta, defina `FTP_SERVER_DIR` como `./`
   em vez do caminho absoluto — caso contrário o deploy vai tentar criar a pasta dentro dela mesma.

> **Nota:** o caminho usado como padrão no workflow foi digitado como
> `/home2/vini0792/n1mm.gg52floripadx/com` (com uma barra em vez de ponto antes de "com").
> Isso não é um caminho válido de domínio, então usei `/home2/vini0792/n1mm.gg52floripadx.com/`
> (com ponto) — confirme se está correto e ajuste a variável `FTP_SERVER_DIR` se precisar.

## Executar localmente

Basta abrir [`site/index.html`](site/index.html) direto no navegador — não há dependências
nem servidor necessário para visualizar o conteúdo.
