import {MainStyle, Button, H1, H2, P} from "./style";

export default function Home() {
    return (
      <MainStyle>
        <section>
          <H1>Mais que Café</H1>
          <H2>
            Isso é <span>Starbucks</span>
          </H2>
          <P>
            A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns
            dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o
            Latte Macchiato e o Espresso. Além disso, a Starbucks oferece
            bebidas quentes e frias, doces diferenciados e sanduíches.
          </P>
          <Button>SAIBA MAIS</Button>

          <div>
            <button>
            <img src="https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/laranja.png?raw=true" alt="copo laranja pequeno"/>
            </button>

            <button>
            <img src="https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/vermelho.png?raw=true"
              alt="copo vermelho pequeno"/>
            </button>

            <button>
            <img src="https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/amarelo.png?raw=true"
              alt="copo amarelo pequeno"/>
            </button>
          </div>
        </section>
        <section>
          <img
            src="https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/laranja2x.png?raw=true"
            alt="copo laranja grande "
          />
          <img
            src="https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/Ellipse%201.png?raw=true"
            alt=""
          />
        </section>
      </MainStyle>
    );
}