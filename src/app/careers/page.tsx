"use client"
import { Header, Layout, ModalMenu } from '@/components'
import Freelancers from '@/components/Careers/Freelancers'
import CopyRight from '@/components/CopyRight'
import JoinUs from '@/components/Careers/JoinUs'
import { useDisclosure, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export default function Careers() {
  const { isOpen, onToggle } = useDisclosure()
  // const router = useRouter()
  const [tab, setTab] = useState('join-us')
  const [activeSlice, setActiveSlide] = useState(1)
  const tabs = ["join us", "freelancers"]
  const join = () => {
    setActiveSlide(2)
    setTab('freelancers')
  }

  const onSlideActiveChange = (index: number) => {
    setActiveSlide(index)
  }

  // useEffect(() => {
  //   setTab(router.query.tab as string || 'join-us')
  // }, [router.query])

  return (
    <Layout>
      <Header
        menuItems={tabs}
        onClickToggle={onToggle}
        dark={true}
        activeSlideIndex={activeSlice}
        onActiveSlideChange={onSlideActiveChange}
      />
      {isOpen && <ModalMenu in={isOpen} onClickToggle={onToggle} />}
      {
        activeSlice === 1 ? <JoinUs join={join}></JoinUs> : <Freelancers></Freelancers>
      }
      <CopyRight></CopyRight>
    </Layout>
  )
}
