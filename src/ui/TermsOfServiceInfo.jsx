import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (min-width: 0px) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  @media (min-width: 400px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }

  @media (min-width: 600px) {
    margin-left: 3rem;
    margin-right: 3rem;
  }

  @media (min-width: 748px) {
    margin-left: 4rem;
    margin-right: 4rem;
  }

  @media (min-width: 1024px) {
    margin-left: 8rem;
    margin-right: 8rem;
  }
`;

const P = styled.p`
  margin-top: 2.5rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 400;
  color: rgb(120 113 108);
`;

const H1 = styled.h1`
  margin-top: 2rem;
  line-height: 1.75rem;
  font-weight: 500;
  color: rgb(87 83 78);

  @media (min-width: 0px) {
    font-size: 1rem;
  }

  @media (min-width: 600px) {
    font-size: 1.25rem;
  }
`;

function TermsOfServiceInfo() {
  return (
    <Container>
      <H1>Overview</H1>
      <P>
        This website is operated by App. Throughout the site, the terms “we”,
        “us” and “our” refer to App. App offers this website, including all
        information, tools and services available from this site to you, the
        user, conditioned upon your acceptance of all terms, conditions,
        policies and notices stated here.<br></br>
        <br></br>
        By visiting our site and/ or purchasing something from us, you engage in
        our “Service” and agree to be bound by the following terms and
        conditions (“Terms of Service”, “Terms”), including those additional
        terms and conditions and policies referenced herein and/or available by
        hyperlink. These Terms of Service apply to all users of the site,
        including without limitation users who are browsers, vendors, customers,
        merchants, and/ or contributors of content.<br></br>
        <br></br>
        Please read these Terms of Service carefully before accessing or using
        our website. By accessing or using any part of the site, you agree to be
        bound by these Terms of Service. If you do not agree to all the terms
        and conditions of this agreement, then you may not access the website or
        use any services. If these Terms of Service are considered an offer,
        acceptance is expressly limited to these Terms of Service.<br></br>
        <br></br>
        Any new features or tools which are added to the current store shall
        also be subject to the Terms of Service. You can review the most current
        version of the Terms of Service at any time on this page. We reserve the
        right to update, change or replace any part of these Terms of Service by
        posting updates and/or changes to our website. It is your responsibility
        to check this page periodically for changes. Your continued use of or
        access to the website following the posting of any changes constitutes
        acceptance of those changes.
      </P>
    </Container>
  );
}

export default TermsOfServiceInfo;
