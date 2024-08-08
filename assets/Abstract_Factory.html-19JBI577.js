import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o as c,c as l,b as e,d as t,e as a,a as i}from"./app-DoHoykSH.js";const d={},p=e("h1",{id:"abstract-factory",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#abstract-factory"},[e("span",null,"Abstract Factory")])],-1),m=e("h2",{id:"brenda-gabriela-martinez-araujo-20221tadssaj0001",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#brenda-gabriela-martinez-araujo-20221tadssaj0001"},[e("span",null,"Brenda Gabriela Martinez Araújo (20221TADSSAJ0001)")])],-1),u={href:"https://github.com/Brenda-Martinez",target:"_blank",rel:"noopener noreferrer"},h=i('<h1 id="abstract-factory-1" tabindex="-1"><a class="header-anchor" href="#abstract-factory-1"><span>Abstract Factory</span></a></h1><h2 id="intencao" tabindex="-1"><a class="header-anchor" href="#intencao"><span>Intenção</span></a></h2><p>A implementação do padrão de projeto Abstract Factory consiste em fornecer uma interface para criação de famílias de objetos relacionados ou dependentes, sem especificar suas classes concretas. Para isso, ele pode ser composto por vários Factory Methods.</p><h2 id="tambem-conhecido-como" tabindex="-1"><a class="header-anchor" href="#tambem-conhecido-como"><span>Também conhecido como</span></a></h2><ul><li>Factory of Factories</li><li>Virtual Constructor</li><li>Product Family Creator</li></ul><h2 id="motivacao" tabindex="-1"><a class="header-anchor" href="#motivacao"><span>Motivação</span></a></h2><p>Existem situações em que um sistema precisa entregar para o cliente objetos compatíveis entre si. Codificar diretamente a criação desses objetos nas classes que os utilizam pode levar a várias complicações:</p><ul><li>se a criação dos objetos estiver diretamente codificada nas classes que utilizam esses objetos, o código dessas classes pode se tornar excessivamente complexo e difícil de manter, especialmente se o sistema precisar suportar diferentes famílias de produtos;</li><li>diferentes conjuntos de produtos podem ser mais apropriados em diferentes situações. Codificar diretamente a criação de produtos específicos limita a capacidade de trocar ou adicionar novos conjuntos de produtos sem alterar o código existente;</li><li>adicionar novos produtos ou variantes pode ser desafiador se a criação dos produtos for parte integrante da lógica de uma classe cliente.</li></ul><p>O padrão <strong>Abstract Factory</strong> busca definir uma interface para criar famílias de objetos relacionados, sem especificar suas classes concretas, abstraindo o processo de instanciação de objetos.</p><h3 id="o-que-sao-fabricas-e-produtos" tabindex="-1"><a class="header-anchor" href="#o-que-sao-fabricas-e-produtos"><span>O que são fábricas e produtos?</span></a></h3><p>Fábricas são <em><strong>operações</strong></em> que criam <em><strong>objetos</strong></em>. Ou seja, uma função que cria um objeto é uma fábrica. Produtos são os objetos que são retornados pelo método de fabricação (FACTORY METHOD).</p><h3 id="exemplo" tabindex="-1"><a class="header-anchor" href="#exemplo"><span>Exemplo</span></a></h3>',12),b=e("img",{src:"https://i.imgur.com/BcOp0uB.png",alt:"Diagrama GUI",loading:"lazy"},null,-1),f={href:"https://imgur.com/BcOp0uB",target:"_blank",rel:"noopener noreferrer"},g=i('<p>Imagine que estamos desenvolvendo uma aplicação que precisa gerar interfaces de usuário para diferentes plataformas, como Windows e Linux. A criação desses elementos de interface varia entre as plataformas, e a aplicação deve suportar essas variações sem alterar seu código central. Utilizando esse padrão de projeto, os participantes irão atuar da seguinte maneira:</p><ul><li><strong>AbstractFactory:</strong> define uma interface para criar produtos de uma família de produtos relacionados, por exemplo, GUIFactory pode ser a fábrica abstrata que cria componentes de interface como botões e formulários;</li><li><strong>ConcreteFactory:</strong> implementa a interface da GUIFactory para criar produtos concretos específicos para uma plataforma. Por exemplo, FactoryWindows cria botões e formulários específicos para Windows, enquanto FactoryLinux faz o mesmo para Linux;</li><li><strong>AbstractProduct:</strong> define uma interface para um tipo de produto, por exemplo, Botao e Form podem ser interfaces que definem os métodos que todos os botões e caixas de diálogo devem implementar;</li><li><strong>ConcreteProduct:</strong> implementa a interface dos produtos abstratos. Por exemplo, BotaoWindows e BotaoLinux são implementações concretas para botões no Windows e Linux, respectivamente;</li><li><strong>Client:</strong> utiliza apenas a interface da GUIFactory e dos produtos abstratos, permitindo a criação de produtos sem conhecer suas classes concretas. A classe cliente, por exemplo, Application, pode usar a fábrica para criar e interagir com botões e formulários sem saber se está no Windows ou Linux.</li></ul><p>Dependendo da plataforma alvo, a fábrica concreta (FactoryWindows ou FactoryLinux) será instanciada, e a aplicação criará seus componentes de interface utilizando a fábrica adequada.</p><p>Assim, ao utilizar o padrão Abstract Factory, o sistema é capaz de criar famílias de produtos relacionados de forma flexível e extensível, facilitando a adição de novos produtos e variações sem modificar o código cliente.</p><h2 id="aplicabilidade" tabindex="-1"><a class="header-anchor" href="#aplicabilidade"><span>Aplicabilidade</span></a></h2><p>A utilização do padrão de projeto Abstract Factory é ideal para quando há uma necessidade de restringir que objetos de tipos incompatíveis atuem na mesma família. Nesse caso, uma fábrica produzirá apenas objetos do mesmo tipo.</p><h2 id="estrutura" tabindex="-1"><a class="header-anchor" href="#estrutura"><span>Estrutura</span></a></h2><figure><img src="https://www.dofactory.com/img/diagrams/net/abstract.png" alt="diagrama livro" tabindex="0" loading="lazy"><figcaption>diagrama livro</figcaption></figure><h2 id="participantes" tabindex="-1"><a class="header-anchor" href="#participantes"><span>Participantes</span></a></h2><ul><li><p><strong>AbstractFactory</strong></p><ul><li>define uma interface para criar objetos de um tipo de família de produtos;</li><li>pode incluir métodos para criar diferentes tipos de produtos relacionados, garantindo que os produtos criados pertençam à mesma família.</li></ul></li><li><p><strong>ConcreteFactory</strong></p><ul><li>implementa a interface AbstractFactory e cria as instâncias concretas dos produtos. Cada ConcreteFactory é responsável por criar uma família específica de produtos.</li></ul></li><li><p><strong>AbstractProduct</strong></p><ul><li>declara uma interface para um tipo de produto específico;</li><li>pode incluir métodos que definem o comportamento ou as propriedades dos produtos dessa categoria.</li></ul></li><li><p><strong>ConcreteProduct</strong></p><ul><li>implementa a interface AbstractProduct. Cada ConcreteProduct representa uma implementação específica de um produto na família que a ConcreteFactory cria.</li></ul></li><li><p><strong>Client</strong></p><ul><li>usa apenas as interfaces definidas pelos AbstractFactory e AbstractProduct. O cliente pode trabalhar com qualquer ConcreteFactory e seus respectivos ConcreteProducts sem precisar conhecer os detalhes específicos de suas implementações.</li></ul></li></ul><h2 id="outro-exemplo-meu-exemplo" tabindex="-1"><a class="header-anchor" href="#outro-exemplo-meu-exemplo"><span>Outro exemplo / Meu exemplo</span></a></h2><h3 id="jogo-da-segunda-guerra-mundial" tabindex="-1"><a class="header-anchor" href="#jogo-da-segunda-guerra-mundial"><span>Jogo da Segunda Guerra Mundial</span></a></h3>',12),x=e("img",{src:"https://i.imgur.com/SA6Niz4.png",alt:"Meu Exemplo",loading:"lazy"},null,-1),A={href:"https://imgur.com/SA6Niz4",target:"_blank",rel:"noopener noreferrer"},y=i('<h2 id="consequencias" tabindex="-1"><a class="header-anchor" href="#consequencias"><span>Consequências</span></a></h2><h3 id="pros" tabindex="-1"><a class="header-anchor" href="#pros"><span>Prós</span></a></h3><ul><li>Compatibilidade entre objetos <ul><li>Todos os objetos instanciados pelo método Abstract Factory são compatíveis, pois eles vem de uma herança abstrata única.</li></ul></li><li>Evita o Acoplamento entre objetos externos <ul><li>Ao utilizar uma classe abstrata para instanciar os objetos, os objetos não necessitam ter relações entre si</li></ul></li><li>Muito aderente ao SOLID <ul><li>Objetos ficam fechados para alteração, mas abertos para expansão (OCP)</li><li>Separa o codigo que cria (fábricas) do codigo que utiliza os objetos (cliente) (SRP)</li></ul></li></ul><h3 id="contras" tabindex="-1"><a class="header-anchor" href="#contras"><span>Contras</span></a></h3><ul><li>Complexidade <ul><li>O uso do Abstract Factory pode levar a um aumento significativo no número de classes no sistema, o que pode tornar o projeto mais difícil de gerenciar e compreender. Implementar esse padrão pode adicionar complexidade ao código devido à necessidade de criar múltiplas classes e interfaces para cada família de objetos.</li></ul></li><li>Manutenção <ul><li>Com o crescimento do sistema, a manutenção de múltiplas fábricas e suas implementações pode se tornar onerosa e difícil de gerenciar, já que qualquer mudança em uma família de objetos pode exigir alterações em todas as fábricas relacionadas. Além disso, o código cliente fica rigidamente acoplado às fábricas abstratas, pois a lógica de criação de objetos é delegada a fábricas, o que pode afetar a eficiência e flexibilidade do projeto.</li></ul></li></ul><h2 id="exemplos" tabindex="-1"><a class="header-anchor" href="#exemplos"><span>Exemplos</span></a></h2><h3 id="diagramas-mermaid" tabindex="-1"><a class="header-anchor" href="#diagramas-mermaid"><span>Diagramas Mermaid</span></a></h3>',7);function v(j,F){const o=s("ExternalLinkIcon"),r=s("Mermaid");return c(),l("div",null,[p,m,e("p",null,[e("a",u,[t("@Brenda-Martinez"),a(o)])]),h,e("p",null,[b,e("a",f,[t("Imgur"),a(o)])]),g,e("p",null,[x,e("a",A,[t("Imgur"),a(o)])]),y,a(r,{id:"mermaid-293",code:"eJyVkt8KwiAUxu99Ci+L2KBdxhjMYt32CmYWgzXB2UVU797mn6WbExMG45zf53fUL0kSIGrR0B081PjG8R3DI6vAUCcN7jpdBbBfsgDLcyc4JqLqP8af8CV7w8rzuhWUXzGhRTFWN4RTLOiJs8uDiHK1huZ3AUE/BEnkAyz7PWt7WlBtv7X8l522EVaKCXllUV5ZhJdiHC8jD96nT4H+VpTm0rxNc0qvV0iJJsppUPJ3ms6eL5pUVzYl07Rw4xQAVJhm+bG3UOOEEB2TWTLsXdSoIUQHYHxzeWB3CH/P0SGnpyfz9zIAvvugKVI="}),a(r,{id:"mermaid-294",code:"eJytUssKwjAQvOcrclSk/QApPahUBK/iOcQogTaBNKKi/rvJRtI0fdBDcwnszOxjdpMkQZrrkq3xjpObIhXB+9MB2TgtSV3/owibBwELF4RqqV74DWH7sowLzdSVUJbnPrqiihHNNlITuVhi+GOwkKoymP0A+qKg1lYKwzIkV/DMxUU+6qDu3BWOXNyfc+YHxahRLbpNMp0NydumdPFwpE6tEbGFe7TB+rNPmg6saAoVksfENM0DlyPAWzxwF14cdjHCDRzoo7rpfdKm30Ge9wxobvcweqerGGtUcAIAxO21EadAP4UFHxo="}),a(r,{id:"mermaid-295",code:"eJyNUlFqwzAM/fcp9LkxkgOMECisGwz61V1AS9VgcOriOlBoe/c6bmLkxGnqnzjSe3qS/LIsE1ZaRZ+woRbWZ2qOSkMGv7rWsEPYUt0e3PenJWMQNu5HohIdr1J4On1JrA02AtzxAfjGfyMr/JMNwcXHu1MU8mDJ7LGisgzRj8oQWlpZaXCnzds7DNcxZNsetbHkEP3NA24iLbxS0hVh8vNCD+iiHIPNia7l+TXJDrgoGECR3FDi6WYjRl/udUK8mJ6XRLCBU5LzBdiIcZp7p7jm+fRNF2FhbxyU52XsrHGSm2rqI05Pt8GAU8OMPcLLpdoNoLEVwuv7oRMdpQGBP3jBZ6d9ptKeK+46vkSw"})])}const _=n(d,[["render",v],["__file","Abstract_Factory.html.vue"]]),B=JSON.parse('{"path":"/posts/Seminarios/seminario-1/Abstract_Factory.html","title":"Abstract Factory","lang":"pt-BR","frontmatter":{"icon":"edit","date":"2024-07-25T23:10:00.000Z","tag":["Abstract Factory","gof"],"category":["seminario"],"order":10,"excerpt":"Apresentação do Padrão de Projeto Abstract Factory","author":"Brenda-Martinez","gitInclude":["../../../../src/includes/abstract_factory/seminario-1-Brenda-Martinez/README.md"],"description":"Abstract Factory Brenda Gabriela Martinez Araújo (20221TADSSAJ0001) @Brenda-Martinez Abstract Factory Intenção A implementação do padrão de projeto Abstract Factory consiste em ...","head":[["meta",{"property":"og:url","content":"https://20241-ifba-saj-ads-ppr.github.io/blog-material-aula/blog-material-aula/posts/Seminarios/seminario-1/Abstract_Factory.html"}],["meta",{"property":"og:site_name","content":"20241 PPR Blog das Aulas"}],["meta",{"property":"og:title","content":"Abstract Factory"}],["meta",{"property":"og:description","content":"Abstract Factory Brenda Gabriela Martinez Araújo (20221TADSSAJ0001) @Brenda-Martinez Abstract Factory Intenção A implementação do padrão de projeto Abstract Factory consiste em ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"pt-BR"}],["meta",{"property":"og:updated_time","content":"2024-08-08T21:01:32.000Z"}],["meta",{"property":"article:author","content":"Brenda-Martinez"}],["meta",{"property":"article:tag","content":"Abstract Factory"}],["meta",{"property":"article:tag","content":"gof"}],["meta",{"property":"article:published_time","content":"2024-07-25T23:10:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-08T21:01:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Abstract Factory\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-07-25T23:10:00.000Z\\",\\"dateModified\\":\\"2024-08-08T21:01:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Brenda-Martinez\\"}]}"]]},"headers":[{"level":2,"title":"Brenda Gabriela Martinez Araújo (20221TADSSAJ0001)","slug":"brenda-gabriela-martinez-araujo-20221tadssaj0001","link":"#brenda-gabriela-martinez-araujo-20221tadssaj0001","children":[]},{"level":2,"title":"Intenção","slug":"intencao","link":"#intencao","children":[]},{"level":2,"title":"Também conhecido como","slug":"tambem-conhecido-como","link":"#tambem-conhecido-como","children":[]},{"level":2,"title":"Motivação","slug":"motivacao","link":"#motivacao","children":[{"level":3,"title":"O que são fábricas e produtos?","slug":"o-que-sao-fabricas-e-produtos","link":"#o-que-sao-fabricas-e-produtos","children":[]},{"level":3,"title":"Exemplo","slug":"exemplo","link":"#exemplo","children":[]}]},{"level":2,"title":"Aplicabilidade","slug":"aplicabilidade","link":"#aplicabilidade","children":[]},{"level":2,"title":"Estrutura","slug":"estrutura","link":"#estrutura","children":[]},{"level":2,"title":"Participantes","slug":"participantes","link":"#participantes","children":[]},{"level":2,"title":"Outro exemplo / Meu exemplo","slug":"outro-exemplo-meu-exemplo","link":"#outro-exemplo-meu-exemplo","children":[{"level":3,"title":"Jogo da Segunda Guerra Mundial","slug":"jogo-da-segunda-guerra-mundial","link":"#jogo-da-segunda-guerra-mundial","children":[]}]},{"level":2,"title":"Consequências","slug":"consequencias","link":"#consequencias","children":[{"level":3,"title":"Prós","slug":"pros","link":"#pros","children":[]},{"level":3,"title":"Contras","slug":"contras","link":"#contras","children":[]}]},{"level":2,"title":"Exemplos","slug":"exemplos","link":"#exemplos","children":[{"level":3,"title":"Diagramas Mermaid","slug":"diagramas-mermaid","link":"#diagramas-mermaid","children":[]}]}],"git":{"createdTime":1723150892000,"updatedTime":1723150892000,"contributors":[{"name":"leandro-costa","email":"leandro.costa@ifba.edu.br","commits":1}]},"readingTime":{"minutes":0.15,"words":46},"filePathRelative":"posts/Seminarios/seminario-1/Abstract_Factory.md","localizedDate":"25 de julho de 2024","autoDesc":true}');export{_ as comp,B as data};
