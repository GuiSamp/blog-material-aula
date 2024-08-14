---
icon: edit
date: 2024-07-25 20:10:00.00 -3
tag:
  - 'Factory Method'
  - gof
category:
  - seminario-1
order: 10
excerpt: Apresentação do Padrão de Projeto Factory Method
author: Arlei10, zevictoros
---
# Factory Method

## Árlei Nóbrega Oliveira (20221TADSSAJ0012)

[@Arlei10](https://github.com/Arlei10)

<!-- @include: ../../../includes/seminario-1-Arlei10/README.md -->

## José Victor Oliveira dos Santos (20212TADSSAJ0008)

[@zevictoros](https://github.com/zevictoros)

<!-- @include: ../../../includes/seminario-1-zevictoros/README.md -->

## WALLACE SELES NEVES


## Leandro

@[code](../../../includes/Leandro/factory_method/Recepcionista.java)

## João Augusto

<figure>

```plantuml

@startuml
interface Relatorio {
    +generate(): void
}

class RelatorioEmPDF implements Relatorio {
    +generate(): void
}

class RelatorioEmExcel implements Relatorio {
    +generate(): void
}

abstract class RelatorioFactory {
    +createRelatorio(): Relatorio
}

class PDFRelatorioFactory extends RelatorioFactory {
    +createRelatorio(): Relatorio
}

class ExcelRelatorioFactory extends RelatorioFactory {
    +createRelatorio(): Relatorio
}

Relatorio <|-- RelatorioEmPDF
Relatorio <|-- RelatorioEmExcel
RelatorioFactory <|-- PDFRelatorioFactory
RelatorioFactory <|-- ExcelRelatorioFactory
RelatorioFactory --> Relatorio : createRelatorio()
PDFRelatorioFactory --> RelatorioEmPDF : creates >
ExcelRelatorioFactory --> RelatorioEmExcel : creates >
@enduml


```
## Guilherme Sampaio
```mermaid
classDiagram
    %% Define as classes e interfaces
    class Chocolate {
        +produzir(): void
    }

    class ChocolateAmargo {
        +produzir(): void
    }

    class ChocolateAoLeite {
        +produzir(): void
    }

    class FábricaDeChocolate {
        +criarChocolate(): Chocolate
    }

    class FábricaDeChocolateAmargo {
        +criarChocolate(): Chocolate
    }

    class FábricaDeChocolateAoLeite {
        +criarChocolate(): Chocolate
    }

    %% Define as relações entre as classes
    Chocolate <|-- ChocolateAmargo
    Chocolate <|-- ChocolateAoLeite
    FábricaDeChocolate <|-- FábricaDeChocolateAmargo
    FábricaDeChocolate <|-- FábricaDeChocolateAoLeite
    FábricaDeChocolate --> Chocolate : criarChocolate()
    FábricaDeChocolateAmargo --> ChocolateAmargo : cria >
    FábricaDeChocolateAoLeite --> ChocolateAoLeite : cria >

```
</figure>
