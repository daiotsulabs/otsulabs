import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link";

export function Contact({ className }: any) {
  return (
    <Box className={`flex-1 md:flex-[1_0_45%] text-right ${className} text-[#707070]`}>
      <Box className="w-full text-center md:text-left ml-auto md:w-5/6">
        <Heading as={'h2'} className="text-[16px] md:text-[28px] 2xl:text-[32px] font-bold mb-[36px] uppercase" color="#f5f5f5">Contact</Heading>
        <Box>
          <Text className="text-[16px] md:text-lg font-bold" color="#f5f5f5">General</Text>
          <Text className="text-[12px] md:text-[14px] font-normal">hello@otsulabs.com</Text>
        </Box>
        <Box className="py-2">
          <Text className="text-[16px] md:text-lg font-bold" color="#f5f5f5">Art & Animation Director</Text>
          <Text className="text-[12px] md:text-[14px] font-normal">erene@otsulabs.com</Text>
        </Box>
        <Box className="py-2">
          <Text className="text-[16px] md:text-lg font-bold" color="#f5f5f5">Operations</Text>
          <Text className="text-[12px] md:text-[14px] font-normal">khoa@otsulabs.com</Text>
        </Box>
        <Box className="py-2">
          <Text className="text-[16px] md:text-lg font-bold" color="#f5f5f5">Outreach</Text>
          <Text className="text-[12px] md:text-[14px] font-normal">sewon@otsulabs.com</Text>
        </Box>
        <Text className="mt-[10px] mb-[24px] text-xs md:text-[14px] 2xl:text-[18px]">For project inquiries, please use of our contact form.</Text>
        <Link href={"/contact"} className="flex justify-center md:justify-start mt-4 md:mt-0 z-1">
          <Button
            style={{ background: '#ffffff', color: '#000000' }}
            colorScheme='blackAlpha'
            size={'md'}
            className='py-2 md:py-2 px-8 md:px-11 rounded-[20px]'
            fontSize={16}
            fontWeight={400}
            lineHeight={'normal'}
            variant='outline'
            borderWidth={0.5}
          >
            Contact
          </Button>
        </Link>
      </Box>
    </Box>
  )
}