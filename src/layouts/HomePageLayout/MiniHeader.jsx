import React, { useState } from 'react'
import Logo from "../../assets/svg/logo.svg"
import { GiHamburgerMenu } from 'react-icons/gi'
import SideModal from '../../components/SideModal';
import MobileNavbar from './MobileNavbar';

const MiniHeader = () => {
    const [openModal, setOpenModal] = useState(false)

  return (
    <>
    <div className='w-full flex h-[22px] justify-between items-center'>
        <div className='cursor-pointer' onClick={() => navigate('/')}>
            <img
                src={Logo}
                alt="dunfix-logo"
                className="cursor-pointer lg:hidden xs:block w-[100px]"
            />
        </div>
        <div className=' w-10 h-10 flex justify-center items-center text-primary' onClick={() => setOpenModal(true) }>
            <GiHamburgerMenu />
        </div>
    </div>
    <SideModal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <MobileNavbar handleClose={() => setOpenModal(false)} />
    </SideModal>
    </>
  )
}

export default MiniHeader