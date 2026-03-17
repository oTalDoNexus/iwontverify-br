# iwontverify-br
O IWontVerifyBR é um conjunto de userscripts Tampermonkey para remediar (bypass) a necessidade de verificações faciais em sites bloqueados no Brasil

Toda contribuição é bem-vinda, apenas peço que teste bem seu código antes e o mantenha o mais limpo e performático possível (sempre tente trabalhar com patches, evitando loops etc).
Esse repositório tem como foco manter a funcionalidade em Android, PC e iOS, contanto que tenham um navegador com suporte à execução de userscripts em Javascript (extensões como Tampermonkey... Ou navegadores como o Chromite para Android).

# Como usar?

No PC, em seu navegador (Chrome, Edge, Firefox...) procure na loja de extensões a extensão [Tampermonkey](https://tampermonkey.net).
Após instalado a extensão, clique no ícone da extensão, vá em "adicionar novo script", apague tudo e cole o conteudo da script "IWontVerifyBR.user.js", depois apenas salve (CTRL+S) e aproveite!
Há também diversos tutoriais no youtube sobre como usar scripts Tampermonkey.

No Android, use um navegador com suporte à extensão e faça o mesmo, ou utilize um com suporte a UserScripts nativo

# Por que esse projeto existe?

A lei "ECA Digital" também conhecida como "Lei Felca" nada mais é que uma quebra da sua privacidade a troco de nada.
Num país onde políticos não sabem o mínimo sobre o ecossistema digital e saem cospindo leis sem motivo, essa lei não serve para proteger as crianças e adolescentes, e pior que isso, os expõe à novos riscos (talvez piores?)
Pare pra pensar, quando foi que os adultos se tornaram tão incompetentes e irresponsáveis a ponto de precisarem do governo proteger os filhos deles por eles?
Nós somos de uma geração da internet onde não haviam barreiras, e crescemos normalmente com isso sem nenhum risco, pois provavelmente algum responsável seu sempre esteve de olho em tudo o que você fazia.
Isso é parte da evolução humana, por isso somos tão inteligentes hoje... Quanto mais barreiras criamos, mais INvoluímos, atualmente as IA's quando não são usadas como ferramenta já nos torna mais "burros" pois não somos nós pensando, da mesma forma é essa verificação necessária em vários produtos e serviços.

# Por que isso é tão nocivo? 
A resposta é: seus dados **SERÃO** vazados, a questão é só QUANDO serão vazados pois a resposta é sempre que eles serão...
Isso já aconteceu diversas vezes em plataformas como Discord, Roblox e diversas outras.
Mas as empresas dizem que os dados são processados só no meu dispositivo, como é possível vazar? Aí entra outro problema: na era de modelos generativos de IA, você vai querer correr o risco? Você está "vendendo" seus dados e sua imagem para uma empresa que tem muito dinheiro pra bancar multas, afinal, você é bem mais valioso pra ela do que uma simples multa... Além de que em alguns casos a verificação leva 48h (para documentos), ou seja, seus dados FICAM num servidor guardados por até dois dias, que as empresas dizem deletar depois, mas as empresas de verificação só vendem o serviço, o contratante pode simplesmente configurar o sistema para reter seus documentos por mais tempo, até que um dia eles **SERÃO VAZADOS**.

Mas o problema é só o vazamento de dados? Claro que não, imagina que se você verifica por exemplo um celular Android com seu rosto logo na configuração inicial de fábrica (antes de ter todos seus apps instalado, simplesmente com um celular novo) se sua biometria facial junto com seus dados tiverem um token único ou o proprio HWID (ID's de identificação de hardware, que costumam ser únicos pra cada dispositivo), você poderá ser identificado em diferentes aplicativos sem nunca ter verificado, ou seja, o site/app já tem uma ideia de quem é você sem nem te perguntar. **ISSO É UMA QUEBRA MASSIVA DE PRIVACIDADE E UM DESRESPEITO COM VOCÊ**. Isso coloca em risco jornalistas e diversos outros que correm riscos no dia a dia, isso por simplesmente usar a internet. 

# **ESSA LEI NÃO PROTEGE NINGUÉM**
Já pensou que "legal" um vazamento contendo o rosto de uma criança que era pra ser protegida por essa lei? Pois é... ao invés de melhorar as políticas públicas para combater esses crimes horríveis, eles criminalizam o uso de Linux.

# Essa script não suporta um site, o que fazer?
Abra um issue, eu ou algum contribuidor provavelmente vai conseguir te dizer se é possivel passar ou não da verificação e atualizar a script com um pull.

Você também pode tentar verificar com auxilio de sites como: https://nofacescan.app/ e https://ageman.pages.dev/ emulando uma webcam com algum app (OBS Studio etc.)

Espero que esse projeto prospere, e que surja um melhor! <3
