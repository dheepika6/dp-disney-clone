import styled from "styled-components";

const Login = (props) => {
    return (
        <Container>
            <Content>
              <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" alt=""/>
                <SignUp> GET ALL THERE</SignUp>
                <Description>Description </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
              </CTA>
              <BgImage></BgImage>
              Content
            </Content>
        </Container>
    )
}

const Container = styled.section`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  height: 100vh;
  text-align: center;
`;

const Content = styled.div`
  /* margin-bottom: 10vw; */
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  box-sizing: border-box;
  align-content: center;
  justify-content: center;
  height: 100%;
  padding: 80px 40px;
`;

const BgImage = styled.div`
  background-image: url('/images/login-background.jpg');
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  background-position: top;
  z-index: -1;
  background-repeat: no-repeat;
  height: 100%;
  background-size: cover;
`;

const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  transition-timing-function: ease-out;
  transition: opacity 10s ;
  width: 100%;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const CTALogoTwo = styled.img`
margin-bottom: 12px;
max-width: 600px;
min-height: 1px;
display: block;
width: 100%;
`;

const SignUp = styled.a`
font-weight: bold;
color: white;
background-color: #0063e5;
margin-bottom: 12px;
width: 100%;
letter-spacing: 1.5px;
font-size: 18px;
padding: 16.5px 0;
border: 1px solid transparent;
border-radius: 4px;
&:hover {
 background-color: #0483ee;
}
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1.0);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;
export default Login;