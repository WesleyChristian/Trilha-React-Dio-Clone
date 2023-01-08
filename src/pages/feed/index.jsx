import React from 'react'
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';

export const Feed = () => {
  return (
    <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo nome="Wesley Christian" image="https://avatars.githubusercontent.com/u/116983856?v=4" percentual={89}/>
                <UserInfo nome="Wesley Christian" image="https://avatars.githubusercontent.com/u/116983856?v=4" percentual={55}/>
                <UserInfo nome="Wesley Christian" image="https://avatars.githubusercontent.com/u/116983856?v=4" percentual={25}/>
                <UserInfo nome="Wesley Christian" image="https://avatars.githubusercontent.com/u/116983856?v=4" percentual={70}/>
            </Column>
        </Container>
    </>
  )
}