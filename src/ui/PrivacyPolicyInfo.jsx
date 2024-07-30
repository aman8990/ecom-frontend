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

const P1 = styled.p`
  margin-top: 1rem;
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

function PrivacyPolicyInfo() {
  return (
    <Container>
      <P>
        This Privacy Policy describes how your personal information is
        collected, used, and shared when you visit or make a purchase from this
        Site.
      </P>

      <H1>Personal information we collect</H1>
      <P1>
        When you visit the Site, we automatically collect certain information
        about your device, including information about your web browser, IP
        address, time zone, and some of the cookies that are installed on your
        device. Additionally, as you browse the Site, we collect information
        about the individual web pages or products that you view, what websites
        or search terms referred you to the Site, and information about how you
        interact with the Site. We refer to this automatically-collected
        information as “Device Information”.
      </P1>

      <H1>We collect Device Information using the following technologies :</H1>
      <P1>
        “Cookies” are data files that are placed on your device or computer and
        often include an anonymous unique identifier. For more information about
        cookies, and how to disable cookies, visit
        http://www.allaboutcookies.org. “Log files” track actions occurring on
        the Site, and collect data including your IP address, browser type,
        Internet service provider, referring/exit pages, and date/time stamps. -
        “Web beacons”, “tags”, and “pixels” are electronic files used to record
        information about how you browse the Site. Additionally when you make a
        purchase or attempt to make a purchase through the Site, we collect
        certain information from you, including your name, billing address,
        shipping address, payment information (including credit card numbers ),
        email address, and phone number. We refer to this information as “Order
        Information”. When we talk about “Personal Information” in this Privacy
        Policy, we are talking both about Device Information and Order
        Information.
      </P1>

      <H1>How do we use your personal information?</H1>
      <P1>
        We use the Order Information that we collect generally to fulfill any
        orders placed through the Site (including processing your payment
        information, arranging for shipping, and providing you with invoices
        and/or order confirmations). Additionally, we use this Order Information
        to: Communicate with you; Screen our orders for potential risk or fraud;
        and When in line with the preferences you have shared with us, provide
        you with information or advertising relating to our products or
        services. We use the Device Information that we collect to help us
        screen for potential risk and fraud (in particular, your IP address),
        and more generally to improve and optimize our Site (for example, by
        generating analytics about how our customers browse and interact with
        the Site, and to assess the success of our marketing and advertising
        campaigns)
      </P1>

      <H1>Sharing you personal Information</H1>
      <P1>
        We share your Personal Information with third parties to help us use
        your Personal Information, as described above. For example, we use
        Shopify to power our online store--you can read more about how Shopify
        uses your Personal Information here: https://www.abc/privacy. We also
        use Google Analytics to help us understand how our customers use the
        Site -- you can read more about how Google uses your Personal
        Information here: https://www.abc/privacy/. You can also opt-out of
        Google Analytics here: https://google.com/gaoptout. Finally, we may also
        share your Personal Information to comply with applicable laws and
        regulations, to respond to a subpoena, search warrant or other lawful
        request for information we receive, or to otherwise protect our rights.
      </P1>

      <H1>Contact us</H1>
      <P1>
        For more information about our privacy practices, if you have questions,
        or if you would like to make a complaint, please contact us by e‑mail at
        aman@gmail.com or by mail using the details provided below:
      </P1>
      <H1>Office : Sector 4, Safidon(126112), Jind, Haryana</H1>
    </Container>
  );
}

export default PrivacyPolicyInfo;
