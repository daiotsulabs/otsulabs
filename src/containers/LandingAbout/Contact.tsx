import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link";

export function Contact ({ className }: any) {
  return (
    <Box className={`flex-1 text-right ${className}`}>
      <Box className="w-full text-center md:text-left ml-auto md:w-4/5">
        <Heading as={'h2'} className="text-[16px] md:text-[28px] 2xl:text-[32px] font-bold mb-[44px] uppercase">Contact</Heading>
        <Box>
          <Text className="text-[16px] md:text-lg font-bold" color='#969696'>General</Text>
          <Text className="text-[12px] md:text-[14px] font-normal" color='#969696'>hello@otsulabs.com</Text>
        </Box>
        <Box className="py-2">
          <Text className="text-[16px] md:text-lg font-bold" color='#969696'>Art & Animation Director</Text>
          <Text className="text-[12px] md:text-[14px] font-normal" color='#969696'>erene@otsulabs.com</Text>
        </Box>
        <Box className="py-2">
          <Text className="text-[16px] md:text-lg font-bold" color='#969696'>Executive Advisor</Text>
          <Text className="text-[12px] md:text-[14px] font-normal" color='#969696'>khoa@otsulabs.com</Text>
        </Box>
        <Box className="py-2">
          <Text className="text-[16px] md:text-lg font-bold" color='#969696'>Business Development Advisor</Text>
          <Text className="text-[12px] md:text-[14px] font-normal" color='#969696'>sewon@otsulabs.com</Text>
        </Box>
        <Text color={'#969696'} className="mt-[10px] mb-[24px] text-xs md:text-[14px] 2xl:text-[18px]">For project inquiries, please use of our contact form.</Text>
        <Link href={"/contact"}>
          <Button
            // style={{ background: '#000000', color: '#ffffff' }}
            colorScheme='blackAlpha'
            size={'md'}
            className='py-2 md:py-2 px-8 md:px-11 rounded-[20px]'
            fontSize={16}
            fontWeight={400}
            lineHeight={'normal'}
            variant='outline'
            _hover={{
              background: '#000000',
              color: '#ffffff'
            }}
          >
            Contact
          </Button>
        </Link>
      </Box>
    </Box>
  )
}