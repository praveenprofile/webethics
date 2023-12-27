import dashboard from '../../assets/images/Frame1.svg'
import Leads from '../../assets/images/Frame2.svg'
import Milestone from '../../assets/images/Frame3.svg'
import Target from '../../assets/images/Frame4.svg'
import Cover from '../../assets/images/Frame5.svg'
import Portfolio from '../../assets/images/Frame6.svg'
import logo from '../../assets/images/logo.svg'
import Image from 'next/image'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="main_menu">
                <ul>
                    <li><a href="#" className='main_logo'><Image src={logo} alt="" width={50} height={50} /> </a></li>
                    <li><a href="#"><Image src={dashboard} alt="" width={50} height={50} /> Dashboard</a></li>
                    <li><a href="#"><Image src={Leads} alt="" width={50} height={50}/> Leads</a></li>
                    <li><a href="#"><Image src={Milestone} alt="" width={50} height={50} /> Milestone</a></li>
                    <li><a href="#"><Image src={Milestone} alt="" width={50} height={50} /> Target</a></li>
                    <li><a href="#"><Image src={Target} alt=" " width={50} height={50} /> Cover Letter</a></li>
                    <li><a href="#"><Image src={Cover} alt="" width={50} height={50}/> Portfolio</a></li>
                    <li><a href="#"><Image src={Portfolio} alt="" width={50} height={50}/> Contacts</a></li>
                </ul>
            </div>
        </div>
    );
}

