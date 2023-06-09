import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile,Logout } from "./style";

export function Header(){

    return(

        <Container>
            <Profile to="/profile">
                <img 
                    src="https://github.com/saulohan.png"
                    alt="Foto do usuário"
                />

                <div>
                    <span>Bem-Vindo</span>
                    <strong>Saulo Lohan</strong>
                </div>
                
            </Profile>
            
            <Logout>
                <RiShutDownLine />
            </Logout>

        </Container>
    )
}