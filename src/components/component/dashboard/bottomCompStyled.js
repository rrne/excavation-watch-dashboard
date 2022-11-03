import styled from '@emotion/styled'

export const StyledInstallStatus = styled.div`
    width: 100%;
    height: calc(100% - 34px);
    overflow: hidden;
    .title-box{
        width: 100%;
        height:17%;
        display: flex;
        justify-content: space-between;
        background: #F1F1F1;
        align-items: center;
        padding: 0 12px;
        font-weight: 600;
        .title{
            font-size: 16px;
        }
        .count{
            display: flex;
            gap: 10px;
            align-items: center;
            font-weight: 400;
            .number {
                font-size: 16px;
                font-weight: 600;
            }
        }
    }

    .install-status-box{
        width: 100%;
        height: 66%;
        display: flex;
        .label-data-box{
            width: 35%;
            display: flex;
            flex-direction: column;
            height: 100%;
            .label-box{
                width: 100%;
                height: 50%;
                display:flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                .count{
                    font-size: 16px;
                    font-weight: 500;
                }
            
                &:nth-child(1){
                    background: #F5F6F9;
                }
                &:nth-child(2){
                    background: #FDF5F5;
                }
            }
        }
        .status-box{
            width:65%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .status{
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 6px;
                transition: 0.3s;
                img{
                    width: 80%;
                }
                .data-box{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    line-height: 18px;
                    .data{
                        font-size: 16px;
                        font-weight: 600;
                    }
                }
                &:hover {
                    opacity: 0.7;
                }
            }
        }
    }
`


export const StyledNoticeBox = styled.div`
    width: 100%;
    height: calc(100% - 34px);
    .list{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: calc(100% / 5);
        border-bottom: 1px solid #DEDEDE;
        transition: 0.25s;
        cursor: pointer;
        .date{
            letter-spacing: -1px;
            font-size: 12px;
            color: #616161;
        }
        &:last-child{
            border-bottom: none;
        }
        &:hover{
            transform: translateY(-1px);
            opacity: 0.8;
        }
    }
`

export const StyledQandABox= styled.div`
    width: 100%;
    height: calc(100% - 34px);
    .list{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: calc(100% / 5);
        border-bottom: 1px solid #DEDEDE;
        transition: 0.25s;
        cursor: pointer;
        &.reply{
            padding-left: 6px;
            .title{
                color: #385493;
            }
        }
        .icon{
            transform: rotate(90deg);
            font-size: 12px;
        }
        .date{
            letter-spacing: -1px;
            font-size: 12px;
            color: #616161;
        }
        &:last-child{
            border-bottom: none;
        }
        &:hover{
            transform: translateY(-1px);
            opacity: 0.8;
        }
    }
   
`