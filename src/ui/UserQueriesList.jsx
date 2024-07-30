import styled from 'styled-components';
import { useDeleteUserQuery } from '../features/user/useDeleteUserQuery';
import Spinner from './Spinner';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const Content1 = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const H1 = styled.h1`
  font-weight: 600;

  @media (min-width: 300px) {
    font-size: 0.8rem;
  }

  @media (min-width: 540px) {
    font-size: 1rem;
    line-height: 1.75rem;
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.75rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`;

const H2 = styled.h1`
  margin-top: 0.25rem;
  color: rgb(120 113 108);

  @media (min-width: 300px) {
    font-size: 0.8rem;
  }

  @media (min-width: 540px) {
    font-size: 1rem;
    line-height: 1.75rem;
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.75rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`;

const H3 = styled.h1`
  margin-right: 0.25rem;
  margin-top: 0.25rem;
  overflow-wrap: break-word;
  color: rgb(120 113 108);

  @media (min-width: 300px) {
    font-size: 0.8rem;
  }

  @media (min-width: 540px) {
    font-size: 1rem;
    line-height: 1.75rem;
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.75rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`;

const Button = styled.button`
  margin-top: 1.25rem;
  font-weight: 600;
  color: #fff;
  background-color: rgb(185 28 28);

  @media (min-width: 300px) {
    padding-left: 0.6rem;
    padding-right: 0.6rem;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    font-size: 0.7rem;
    line-height: 1.75rem;
  }

  @media (min-width: 540px) {
    padding-left: 0.7rem;
    padding-right: 0.7rem;
    padding-top: 0.45rem;
    padding-bottom: 0.45rem;
    font-size: 0.8rem;
    line-height: 1.75rem;
  }

  @media (min-width: 768px) {
    padding-left: 0.7rem;
    padding-right: 0.7rem;
    padding-top: 0.45rem;
    padding-bottom: 0.45rem;
    font-size: 1rem;
    line-height: 1.75rem;
  }

  @media (min-width: 1024px) {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function UserQueriesList({ query }) {
  const id = query._id;

  const { deleteUserQuery, isPending, isSuccess } = useDeleteUserQuery();

  function handleDelete() {
    console.log(id);
    deleteUserQuery({ id });
  }

  if (isPending || isSuccess) return <Spinner />;

  return (
    <Container>
      <Wrapper>
        <Content>
          <H1>Query id :</H1>
          <H2>{query._id}</H2>
        </Content>

        <Content>
          <H1>Name :</H1>
          <H2>{query.name}</H2>
        </Content>

        <Content>
          <H1>Email :</H1>
          <H2>{query.email}</H2>
        </Content>

        <Content>
          <H1>Phone :</H1>
          <H2>{query.phone}</H2>
        </Content>

        <Content>
          <H1>Subject :</H1>
          <H2>{query.subject}</H2>
        </Content>

        <Content1>
          <H1>Description :</H1>
          <H3>{query.description}</H3>
        </Content1>
      </Wrapper>

      <ButtonContainer>
        <Button onClick={handleDelete}>Delete Query</Button>
      </ButtonContainer>
    </Container>
  );
}

export default UserQueriesList;
