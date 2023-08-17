import { Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, Box, Text, useMediaQuery } from "@chakra-ui/react";
import { faqs } from ".";
import { ArrowDownIcon } from "@/components/icons";

export function Faq() {
  const [isMobileScreen] = useMediaQuery('(max-width: 768px)')
  return (
    <Box width={'100%'} className="flex-1 md:flex-[1_0_55%]" color={'#707070'}>
      <Heading
        as='h2'
        className="text-[16px] md:text-[28px] 2xl:text-[32px] font-bold text-center md:text-left mb-[44px]"
        color="#f5f5f5">
        FAQ
      </Heading>
      <Accordion allowToggle>
        {
          faqs.map((faq, index) => (
            <AccordionItem key={index} borderTopWidth={index === 0 ? 0 : "0.3px"} borderColor="#5a5a5a" pt={isMobileScreen && index > 0 ? "24px" : "0"}>
              {
                ({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        background={'transparent'}
                        className="pb-[8px] pt-[8px] md:pt-[20px] md:pb-[20px] px-0 pr-3"
                      >
                        <Box as="span" flex='1' textAlign='left' mr={6}>
                          <Text className="text-sm md:text-[16px] 2xl:text-[20px] font-bold" color="#f5f5f5">{faq.question}</Text>
                        </Box>
                        {isExpanded ? (
                          <ArrowDownIcon className="rotate-180" />
                        ) : (
                          <ArrowDownIcon />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} maxHeight={'200px'} overflowY={'auto'} className="scroll mr-2 pl-0 swiper-no-mousewheel">
                      {
                        faq.answer.map((a, index) => (
                          <Text
                            key={index}
                            className='text-[10px] md:text-sm leading-[normal] mb-2'
                          >
                            {a}
                          </Text>
                        ))
                      }
                    </AccordionPanel>
                  </>
                )
              }
            </AccordionItem>
          ))
        }
      </Accordion>
    </Box>
  )
}