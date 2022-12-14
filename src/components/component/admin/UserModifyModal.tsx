import styled from "@emotion/styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faXmark } from '@fortawesome/free-solid-svg-icons';
import { DataType } from "./AdminTableWrap";
import {useForm} from 'react-hook-form';
import { Button } from "../Button";
import { useEffect, useState } from "react";
import SelectComp from "../Select";
import { message } from 'antd';

const StyledModifyModal = styled.div`
    padding: 20px;
    background: #F5F6F9;
    border-radius: 20px;
    border: 3px solid #E4E5E7;
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
    width: 40vw;
    transform: translateX(-15%);

    .top{
        padding-bottom: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #DEDEDE;
        margin-bottom: 20px;
        .title-box{
            color: #385493;
            display: flex;
            gap: 10px;
            align-items: center;
            span{
                font-size: 16px;
                font-weight: 600;
            }
        }
        .close-btn{
            font-size: 18px;
            cursor: pointer;
            transition: 0.2s;
            &:hover{
                opacity: 0.5;
            }
        }
    }
    .form {
        width: 100%;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 16px 0;
        .input-box{
            width:50%;
            display: flex;
            align-items: center;
            gap: 10px;
            .label{
                width: 25%;
                font-weight: 600;
            }
            input{
                border: 1px solid #DEDEDE;
                outline: none;
                width: 65%;
                padding: 6px;
                border-radius: 8px;
            }
            .input{
                width: 65%;
            }
        }
        .button{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`

const UserModifyModal = ({value, close}:{value:DataType, close:() => void }) => {
    const { register, handleSubmit, setError,resetField, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    if(!value) return;
    setValue("id", value.id)
    setValue("position", value.position)
    setValue("call", value.call)
    setValue("name", value.name)
    setValue("email", value.email)
    setValue("first", value.first)
    setValue("second", value.second)
    setValue("center", value.center)
  },[value])
  
  const closeModal =() => {
    close()
    resetField('pw')
    resetField('pwConfirm')
  }

  const userAdmin = ["???????????????","?????????"]

  const onVaild = (data:any) => {
    if (data.pw !== data.pwConfirm) {      
        setError(
        'pwConfirm', // ?????? ???????????? input?????? name
        { type: "focus" }, // ?????? ?????????
        { shouldFocus: true }, // ????????? ????????? input?????? focus ??????
      );
      message.error('This is an error message');
    }else{
        console.log(data);
        closeModal()
    }
  }
  
    return(
        <StyledModifyModal>
            <div className="top">
                <div className="title-box">
                    <FontAwesomeIcon icon={faPen} />
                    <span>????????? ?????? ??????</span>
                </div>
                <div className="close-btn" onClick={closeModal}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </div>
            <form className="form">
            <div className="input-box">
                <label htmlFor="id" className="label">????????? ID</label>
                <input {...register("id", { required: true })} />
            </div>
            <div className="input-box">
                <label htmlFor="position" className="label">??????</label>
                <input {...register("position", { required: true })} />
            </div>
            <div className="input-box">
                <label htmlFor="password" className="label">????????????</label>
                <input type="password" {...register("pw", { required: true })} />
            </div>
            <div className="input-box">
                <label htmlFor="passwordConfirm" className="label">??????????????????</label>
                <input type="password" {...register("pwConfirm", { required: true })} />
            </div>
            <div className="input-box">
                <label htmlFor="call" className="label">????????????</label>
                <input {...register("call", { required: true })} />
            </div>
            <div className="input-box">
                <label htmlFor="name" className="label">??????</label>
                <input {...register("name", { required: true })} />
            </div>
            <div className="input-box">
                <label htmlFor="email" className="label">?????????</label>
                <input {...register("email", { required: true })} />
            </div>
            <div className="input-box">
                <label htmlFor="first" className="label">1????????????</label>
                <input {...register("first", { required: true })} />
            </div>
            <div className="input-box">
                <label htmlFor="second" className="label">2????????????</label>
                <input {...register("second", { required: true })} />
            </div>
            <div className="input-box">
                <label htmlFor="center" className="label">????????????</label>
                <input {...register("center", { required: true })} />
            </div>
            <div className="input-box">
                <label htmlFor="second" className="label">????????? ??????</label>
                <div className="input">
                    <SelectComp options={userAdmin} size="full"/>
                </div>
            </div>
            <div className="button">
                <Button label="??? ???" onClick={handleSubmit(onVaild)}/>
            </div>
            {/* {errors.exampleRequired && <span>This field is required</span>} */}
            </form>
        </StyledModifyModal>
    )
}

export default UserModifyModal;