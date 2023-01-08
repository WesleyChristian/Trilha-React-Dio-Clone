import { MdEmail, MdLock, MdAccountCircle } from 'react-icons/md';
import { useNavigate  } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';


import { Container, Title, Column, TitleRegister, SubtitleRegister, SubtitleButtonRegister, TenhoText, CriarText, RowCrian, Wrapper } from './styles';

const schema = yup.object({
    email: yup.string().email('email não é valido').required('Campo obrigatório'),
    password: yup.string().min(8, 'No minimo 8 caracteres').required('Campo obrigatório'),
  }).required();


  export const Register = () => {
    const navigate = useNavigate()

    const { control, onSubmit, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const handleClickSignIn = () => {
        navigate('/feed') 
    };

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleRegister>Comece agora grátis</TitleRegister>
                <SubtitleRegister>Crie sua conta e make the change._</SubtitleRegister>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name="nome completo" errorMessage={errors?.nome?.message} control={control} placeholder="Nome Completo" leftIcon={<MdAccountCircle />} />
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />} />
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input name="password" errorMessage={errors?.password?.message} control={control} type="password" placeholder="Senha" leftIcon={<MdLock />} />
                    {errors.senha && <span>Senha é obrigatório</span>}
                    <Button title="Criar minha conta" variant="secondary" onClick={handleClickSignIn} type="submit"/>
                </form>
                <SubtitleButtonRegister>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SubtitleButtonRegister>
                <RowCrian>
                    <TenhoText>Já tenho conta.</TenhoText>
                    <CriarText>Fazer login</CriarText>
                </RowCrian>
                </Wrapper>
            </Column>
        </Container>
    </>)
}