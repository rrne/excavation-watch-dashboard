import Link from 'next/link'
import { useRouter } from 'next/router';
import {useState, useEffect} from 'react';
import Image from "next/image";


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
    
    const [subSelect, setSubSelect] = useState(menu[0].link)

    useEffect(() => {
        handleSelectLink()
    },[router.pathname])

    const handleSelectLink = () => {
        const filteredLink = menu.filter(list => list.link === router.pathname)[0]?.link;
        
        setSubSelect(filteredLink)
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
                        <Link href={list.link} key={i}>
                        <div className={subSelect === list.link ? "select list" :"list"}>
                            <div className="circle"></div>
                            <div className="span">{list.title}</div>
                            <div className="submenu-list">
                            {list?.subMenu?.map((subList,k) => {return(
                                <Link href={list.link} key={k}>
                                <div className={subSelect === list.link ? "select sub-list" :"sub-list"} key={"chlid"+k}><span>-</span>{subList.title}</div>
                                </Link>
                            )})}
                            </div>
                        </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default SubMenu;