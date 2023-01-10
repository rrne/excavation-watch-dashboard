import { atom } from 'recoil'

export const LoginState = atom({
    key: 'LoginState',
    default: {
      access_token:""
    },
  });

export const AccountState = atom({
  key:"AccountState",
  default:{
    
  }
})