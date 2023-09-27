import { Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, Box, Text, useMediaQuery } from "@chakra-ui/react";
import { faqs } from ".";
import { mcQueenDisplay } from "@/app/layout";
import { MinusIcon, PlusIcon } from "@/components/icons";

export const CustomBorder = () => {
  return (
    <Box height={"1px"} w="100%" borderRadius={"1px"} backgroundColor="#5a5a5a" />
  )
}

export function Faq() {
  const [isMobileScreen] = useMediaQuery('(max-width: 768px)')
  return (
    <Box width={'100%'} className="flex-1 md:flex-[1_0_55%]" color={'#707070'}>
      <Heading
        as='h2'
        className={`${mcQueenDisplay.className} text-[20px] md:text-[28px] 2xl:text-[36px] text-center md:text-left mb-[20px] font-medium`}
        color="#f5f5f5">
        Frequently Asked Questions
      </Heading>
      <Accordion allowToggle>
        {
          faqs.map((faq, index) => (
            <AccordionItem key={index} borderTopWidth={index === 0 ? 0 : "0.3px"} borderColor="#272727" pt={isMobileScreen && index > 0 ? "24px" : "0"}>
              {
                ({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        background={'transparent'}
                        className="pb-[6px] pt-[6px] md:pt-[16px] md:pb-[16px] xl:pt-[20px] xl:pb-[20px] px-0 pr-3"
                      >
                        <Box as="span" flex='1' textAlign='left' mr={6}>
                          <Text className={`${mcQueenDisplay.className} text-sm md:text-[18px] 2xl:text-[20px] font-medium`} color="#f5f5f5">{faq.question}</Text>
                        </Box>
                        {isExpanded ? (
                          <MinusIcon color={"#848484"} />
                        ) : (
                          <PlusIcon color={"#848484"} />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} maxHeight={'150px'} overflowY={'auto'} className="scroll mr-2 pl-0 swiper-no-mousewheel">
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