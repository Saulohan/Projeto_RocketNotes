import {Container, Links} from "./styles.js";
import { Header } from "../../components/Header";
import { Button } from "../../components/button";
import { Section } from "../../components/Section";



export function Details(){

  return(

    <Container>
      <Header/>

      <Section title="Links úteis">
        <Links>
          <li> <a href="#">https://www.rocketseat.com.br/</a>  </li>
          <li> <a href="#">https://www.rocketseat.com.br/</a>  </li>         
        </Links>
      </Section>

      <Section></Section>
  
      <Button title="Voltar" />

    </Container>
  )
}

