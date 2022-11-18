import Link from 'next/link'
import { useRouter } from 'next/router';
import {useState, useEffect} from 'react';
import Image from "next/image";

// 타입정의🚀
type SubType = {
    title:string;
    link:string;
}

type MenuType = {
    title:string;
    subMenu?: SubType[]
    link: string
}

export interface SubMenuProps {
    title: string;
    titleImg:string;
    menu: MenuType[];
}

const SubMenu = ({title, titleImg, menu}:SubMenuProps) => {
    const router = useRouter();
    
    const [subSelect, setSubSelect] = useState<string>("")

    useEffect(() => {
        handleSelectLink()
    },[router.pathname])
    
    // 서브메뉴 router path 함수
    const handleSelectLink = () => {
        const {pid} = router.query

        if(pid){
            const pathname = router.pathname.split('/').slice(0, -1).join('/')

            let filteredLink:any = menu.filter(list => list.link === pathname || list.subMenu?.filter(sublist => sublist.link === pathname)[0])[0];
        
            if(filteredLink.subMenu){
                filteredLink = menu.filter(list => list.subMenu)[0]?.subMenu?.filter(list => list.link === router.pathname)[0];
            }
            setSubSelect(filteredLink?.link);
        }else{
            let filteredLink:any = menu.filter(list => list.link === router.pathname || list.subMenu?.filter(sublist => sublist.link === router.pathname)[0])[0];
            
            if(filteredLink.subMenu){
                filteredLink = menu.filter(list => list.subMenu)[0]?.subMenu?.filter(list => list.link === router.pathname)[0];
            }
            
            setSubSelect(filteredLink?.link);
     
        }
    }

    return (
        <div className="sub-menu">
            <div className="title-box">
                <Image src={`/image/menu/${titleImg}_blue.png`} width={30} height={30}/>
                <span>{title}</span>
            </div>
            <div className="menu-list">
                {menu.map((list,i)=>{
                    return(
                    <div key={i}>
                        <Link href={list.link}>
                        <div className={subSelect === list.link || list.subMenu?.filter(sublist => sublist.link === router.pathname)[0] ? "select list" :"list"}>
                            <div className="circle"></div>
                            <div className="span">{list.title}</div>
                        </div>
                        </Link>
                        <div className="submenu-list">
                        {list?.subMenu?.map((subList,k) => {return(
                            <Link href={subList.link} key={k}>
                            <div className={subSelect === subList.link ? "select sub-list" :"sub-list"} key={"chlid"+ k }><span>-</span>{subList.title}</div>
                            </Link>
                        )})}
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SubMenu;