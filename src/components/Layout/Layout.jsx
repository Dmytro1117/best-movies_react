import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import Footer from '../Footer/Footer';
import {
  Container,
  Header,
  Link,
  Navigation,
  Content,
  Logo,
  SearchLogo,
  Wrapper,
} from './Layout.styled';
import Logotip from '../../images/logo.png';

export const Layout = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <Logo to="/">
            <SearchLogo src={Logotip} alt="logo" />
          </Logo>

          <Navigation>
            <Link to="/home">Home</Link>
            <Link to="/search-movie">Search movie</Link>
          </Navigation>
        </Header>
      </Wrapper>

      <Content>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Content>
      <Footer />
    </Container>
  );
};
