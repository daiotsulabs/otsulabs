"use client"
import { Header, Layout, ModalMenu } from '@/components'
import Freelancers from '@/components/Careers/Freelancers'
import CopyRight from '@/components/CopyRight'
import JoinUs from '@/components/Careers/JoinUs'
import { useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'

export default function Careers() {
  const { isOpen, onToggle } = useDisclosure()
  const [tab, setTab] = useState('join-us')
  const [activeSlice, setActiveSlide] = useState(0)
  const join = () => {
    setActiveSlide(2)
    setTab('freelancers')
  }

  const onSlideActiveChange = (index: number) => {
    setActiveSlide(index)
  }

  return (
    <Layout>
      <Header
        menuItems={[]}
        onClickToggle={onToggle}
        dark={true}
        activeSlideIndex={activeSlice}
        onActiveSlideChange={onSlideActiveChange}
      />
      {isOpen && <ModalMenu in={isOpen} onClickToggle={onToggle} />}
      {
        activeSlice !== 2 ? <JoinUs join={join}></JoinUs> : <Freelancers></Freelancers>
      }
      <CopyRight></CopyRight>
    </Layout>
  )
}
