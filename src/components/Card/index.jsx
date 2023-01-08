import { FiThumbsUp } from 'react-icons/fi'
import React from 'react'

import { 
  CardContainer,
  ImageBackground,
  Content,
  UserInfo,
  UserPicture,
  PostInfo,
  HasInfo,
} from './styles'
export const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://img.olhardigital.com.br/wp-content/uploads/2021/12/Code.jpg"/>
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/116983856?v=4"/>
         <div>
          <h4>Wesley Christian</h4>
          <p>Há 10 minutos</p>
        </div> 
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS </h4>
          <p>Projeto feito no curso de html e css no bootcamp da dio do Global avanade...<strong>Saiba Mais</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript</h4>
          <p>
            <FiThumbsUp />25
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}