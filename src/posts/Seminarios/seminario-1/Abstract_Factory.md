---
icon: edit
date: 2024-07-25 20:10:00.00 -3
tag:
  - 'Abstract Factory'
  - gof
category:
  - seminario-1
order: 10
excerpt: Apresentação do Padrão de Projeto Abstract Factory
author: Brenda-Martinez
---
# Abstract Factory


## Brenda Gabriela Martinez Araújo (20221TADSSAJ0001) 

[@Brenda-Martinez](https://github.com/Brenda-Martinez)

<!-- @include: ../../../includes/seminario-1-Brenda-Martinez/README.md -->





## João Augusto

<figure>
  
```plantuml

@startuml
interface Personagem {
    +descricao(): String
}

interface Equipamento {
    +usar(): void
}

interface RPGFactory {
    +criarPersonagem(): Personagem
    +criarEquipamento(): Equipamento
}

class Cavaleiro implements Personagem {
    +descricao(): String
}

class Espada implements Equipamento {
    +usar(): void
}

class Mago implements Personagem {
    +descricao(): String
}

class Cajado implements Equipamento {
    +usar(): void
}

class CavaleiroFactory implements RPGFactory {
    +criarPersonagem(): Personagem
    +criarEquipamento(): Equipamento
}

class MagoFactory implements RPGFactory {
    +criarPersonagem(): Personagem
    +criarEquipamento(): Equipamento
}

RPGFactory <|-- CavaleiroFactory
RPGFactory <|-- MagoFactory
CavaleiroFactory --> Cavaleiro : cria >
CavaleiroFactory --> Espada : cria >
MagoFactory --> Mago : cria >
MagoFactory --> Cajado : cria >
@enduml

```
</figure>

## Guilherme Sampaio

```mermaid
classDiagram
    class Chocolate {
        <<interface>>
        +descricao() String
    }

    class Embalagem {
        <<interface>>
        +usar() void
    }

    class ChocolateAoLeite {
        +descricao() String
    }

    class ChocolateAmargo {
        +descricao() String
    }

    class EmbalagemAoLeite {
        +usar() void
    }

    class EmbalagemAmargo {
        +usar() void
    }

    class ChocolateFactory {
        <<interface>>
        +criarChocolate() Chocolate
        +criarEmbalagem() Embalagem
    }

    class ChocolateAoLeiteFactory {
        +criarChocolate() Chocolate
        +criarEmbalagem() Embalagem
    }

    class ChocolateAmargoFactory {
        +criarChocolate() Chocolate
        +criarEmbalagem() Embalagem
    }

    Chocolate <|.. ChocolateAoLeite
    Chocolate <|.. ChocolateAmargo
    Embalagem <|.. EmbalagemAoLeite
    Embalagem <|.. EmbalagemAmargo
    ChocolateFactory <|-- ChocolateAoLeiteFactory
    ChocolateFactory <|-- ChocolateAmargoFactory

    ChocolateAoLeiteFactory o-- ChocolateAoLeite : "cria"
    ChocolateAoLeiteFactory o-- EmbalagemAoLeite : "cria"
    ChocolateAmargoFactory o-- ChocolateAmargo : "cria"
    ChocolateAmargoFactory o-- EmbalagemAmargo : "cria"


```
