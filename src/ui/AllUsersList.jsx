import styled from 'styled-components';

const Container = styled.div`
  background-color: #fff;
  padding: 1.5rem;
  border-width: 2px;
  border-radius: 0.5rem;
  border-style: solid;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  margin-left: 1rem;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const Content1 = styled.div`
  display: flex;
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

const H2 = styled.h2`
  color: rgb(120 113 108);
  margin-top: 0.25rem;

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

function AllUsersList({ user }) {
  const locality = user.address?.locality || '';
  const city = user.address?.city || '';
  const district = user.address?.district || '';
  const state = user.address?.state || '';
  const pincode = user.address?.pincode || '';

  const address =
    ` ${locality}${locality && ', '}${city}${city && ', '}${district}${district && ', '}${state}${state && ', '}${pincode}` ||
    '';

  return (
    <Container>
      <Wrapper>
        <Content>
          <H1>UserId :</H1>
          <H2>{user?._id}</H2>
        </Content>

        <Content>
          <H1>Name :</H1>
          <H2>{user?.name}</H2>
        </Content>

        <Content>
          <H1>Email :</H1>
          <H2>{user?.email}</H2>
        </Content>

        <Content1>
          <H1>Address :</H1>
          <H2>{address || ''}</H2>
        </Content1>

        <Content>
          <H1>Phone :</H1>
          <H2>{user?.phone}</H2>
        </Content>

        <Content>
          <H1>Role :</H1>
          <H2>{user?.role}</H2>
        </Content>
      </Wrapper>
    </Container>
  );
}

export default AllUsersList;
