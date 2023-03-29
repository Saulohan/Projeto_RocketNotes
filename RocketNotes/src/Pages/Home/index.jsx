import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/buttonText';
import { FiPlus, FiSearch } from 'react-icons/fi'
import { Input } from '../../components/Input';
import {Section} from '../../components/Section'
import {Note} from '../../components/Note'


export function Home() {

    return(

        <Container>

            <Brand>
                <h1> RocketNotes </h1>
            </Brand>

            <Header />

            <Menu>              
                <li> <ButtonText title={"Todos"} isActive/></li>
                <li> <ButtonText title={"React"}/></li>
                <li> <ButtonText title={"Nodejs"}/></li>
            </Menu>

            <Search>
                <Input icon= {FiSearch} placeholder="Pesquisar pelo titulo"/>
            </Search>

            <Content>
                    <Section title="Minhas Notas"> 

                        <Note data={ {
                            title : 'Reack',
                            tags : [
                                {id: '1', name : 'react'}, 
                                {id: '2', name : 'rocketseat'}
                            ],
                            } } 
                        />

                    </Section>

            </Content>

            <NewNote to="/new">
                <FiPlus/>
                Criar Nota
            </NewNote>

        </Container>
    );
}