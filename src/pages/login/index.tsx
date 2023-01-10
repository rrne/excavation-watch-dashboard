import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { Input } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';
import { message, Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { useMutation } from "@tanstack/react-query"
import {TypeLoginParam} from '@src/api/login/postLogin';
import {postLogin, getAccount} from '@src/api/login';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import { useSetRecoilState } from 'recoil';
import { AccountState, LoginState } from '@src/states/login';

const StyledLoginPage = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    .bg{
        position:absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: -1;
    }
    .header-box{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        .title{
            font-size: 30px;
            color: white;
            text-align: center;
            font-weight: 700;
            line-height: 36px;
        }
    }
    .line{
        width: 500px;
        height: 2px;
        background: linear-gradient(to right, rgba(255,255,255,0), #ffffffc0, rgba(255,255,255,0));
    }
    .login-box{
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 16px;

        .text{
            color: white;
            font-size: 60px;
            font-weight: 800;
        }
        .sub-text{
            font-size: 16px;
            color: white;
        }
        .form{
            width: 22vw;
            padding: 24px;
            background: #F2F6F9;
            border: 1px solid #E4E5E7;
            border-radius: 12px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            .input-box{
                display: flex;
                flex-direction: column;
                gap: 6px;
                .label{
                    font-weight: 600;
                }
                .icon{
                    color: #667085c7;
                    font-size: 14px;
                }
                .ant-input-affix-wrapper{
                    border: 1px solid #c0c0c7;
                    border-radius: 4px;
                    input{
                        padding-left: 6px;
                    }
                }
            }
            .login-btn{
                width: 100%;
                text-align: center;
                padding: 12px;
                background: #385493;
                border-radius: 6px;
                color: white;
                font-weight: 600;
                cursor: pointer;
                transition: 0.25s;
                &:hover{
                    background: #2c4379;
                }
            }
        }
    }
`

const Login: NextPage = () => {
    const router = useRouter();
    const [cookies, setCookie, removeCookie] = useCookies();
    const setLogin = useSetRecoilState(LoginState)
    const setAccount = useSetRecoilState(AccountState)

    const [id, setId] = useState("")
    const [pw, setPw] = useState("")
    const [check, setCheck] = useState(false)
    const { mutate } = useMutation((params:TypeLoginParam) => postLogin(params), {
        onSuccess:(data) => {
            setCookie('id_token',data.id_token,{path:"/", secure:true, maxAge:1000 * 60 * 60})
            setLogin({access_token:data.id_token})
            const userInfo = getAccount(data.id_token)
            console.log(userInfo);
            router.push('/')
            message.success("로그인에 성공했습니다.")
        },
        onError: (err) => message.error("아이디 또는 비밀번호를 확인해주세요")
    });

    const changeIdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value)
    }
    const changePwInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPw(e.target.value)
    }

    const handleLogin = () => {
        if(id ==="" || pw === ""){
            message.error('아이디 또는 비밀번호를 입력해주세요');
            return;
        }
        mutate({username:id, password:pw, rememberMe:check})
    }
    const handleCheckbox = (e: CheckboxChangeEvent) => {
        setCheck(e.target.checked)
    }
  return (
        <StyledLoginPage>
            <img src={"/image/loginBG.png"} alt="" className="bg" />
            <div className="header-box">
                <img src={'/image/logo.png'} alt="" className="logo" />
                <div className="title">지중송전선로<br/>굴착공사 감지시스템</div>
            </div>
                <div className="line"></div>
                <div className="login-box">
                    <div className="text">LOGIN</div>
                    <div className="sub-text">서비스를 이용하시려면 로그인하세요</div>
                    <div className="form">
                        <div className="input-box">
                            <div className="label">ID</div>
                            <Input size="large" placeholder="아이디" prefix={<div className='icon'>
                                <FontAwesomeIcon icon={faUser} />
                            </div>} value={id} onChange={changeIdInput}  onPressEnter={handleLogin}/>
                        </div>
                        <div className="input-box">
                            <div className="label">Password</div>
                            <Input.Password size="large" placeholder="비밀번호" prefix={<div className='icon'>
                                <FontAwesomeIcon icon={faUnlockKeyhole} />
                            </div>} value={pw} onChange={changePwInput} onPressEnter={handleLogin}/>
                        </div>
                        <div className="input-box">
                            <Checkbox onChange={handleCheckbox} checked={check} >자동로그인</Checkbox>
                        </div>
                        <div className="login-btn" onClick={handleLogin}>로그인</div>
                    </div>
                </div>
        </StyledLoginPage>
  )
}

export default Login;
