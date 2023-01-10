import TopBar from './TopBar';
import styled from "@emotion/styled";
import { useRouter } from 'next/router';
import {useState,useEffect} from 'react';
import  {linked} from '@src/components/layout/TopBar';
import { useRecoilValue } from 'recoil';
import { LoginState } from '@src/states/login';
import { Cookies } from 'react-cookie'

const StyledApp = styled.div`
    width:100%;
    height:100vh;
    overflow: hidden;
`
const StyledMain = styled.main`
    width: 100%;
    height: calc(100% - 80px);
`
const Layout = ({children}: {children:JSX.Element}): JSX.Element => {
  const cookies = new Cookies();
  const { access_token } = useRecoilValue(LoginState)

  const router = useRouter();
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const refresh = cookies.get('id_token');
    if(access_token === "" && !refresh) {
      router.push('/login')
      console.log('token없음');
      return;
    } else if (access_token === "" && refresh) {
      console.log('token 갱신 함수 호출!');
    }
    if(linked.filter(list => list.link ===  router.pathname.split("/")[1]).length !== 0){
      setMenu(true)
    }else{
      setMenu(false)
    }
  },[router.pathname])

  return (<>
    { menu ? <StyledApp>
          <TopBar />
            <StyledMain>
              {children}
            </StyledMain>
            </StyledApp> : <StyledMain>
              {children}
            </StyledMain>} 
  </>)
}

export default Layout;
