import Link from 'next/link'
import { useRouter } from 'next/router';
import {useState, useEffect} from 'react';

type MenuType = {
    title:string;
    subMenu?: string[]
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
                <img src={`/image/menu/${titleImg}_blue.png`} alt="" />
                <span>{title}</span>
            </div>
            <div className="menu-list">
                {menu.map((list,i)=>{
                    return(
                        <Link href={list.link} key={i}>
                        <div className={subSelect === list.link ? "select list" :"list"}>
                            <div className="circle"></div>
                            <div className="span">{list.title}</div>
                            {list?.subMenu?.map((subList,k) => {return(
                                <div className="sub-list" key={"chlid"+k}>{subList}</div>
                            )})}
                        </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default SubMenu;