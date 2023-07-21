import { Heading, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Box, Text } from "@chakra-ui/react";
import { faqs } from ".";
import { ArrowDownCircleIcon, ArrowUpCircleIcon } from "@/components/icons";

export function Faq () {
  return (
    <Box width={'100%'} className="flex-1">
      <Heading as='h2' className="text-[16px] md:text-[28px] 2xl:text-[32px] font-bold text-center md:text-left mb-[44px]" color={'#000000'}>FAQ</Heading>
      <Accordion allowToggle>
        {
          faqs.map((faq, index) => (
            <AccordionItem key={index} borderTopWidth={index === 0 ? 0 : 1}>
              {
                ({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        background={'transparent'}
                        className="pb-[6px] md:pb-[16px] px-0"
                        _hover={{
                          background: '#ffffff'
                        }}
                      >
                        <Box as="span" flex='1' textAlign='left'>
                          <Text className="text-sm md:text-[16px] 2xl:text-[20px] font-bold">{faq.question}</Text>
                        </Box>
                        {isExpanded ? (
                          <ArrowUpCircleIcon></ArrowUpCircleIcon>
                        ) : (
                          <ArrowDownCircleIcon></ArrowDownCircleIcon>
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} maxHeight={'200px'} overflowY={'auto'} className="scroll mr-2 pl-0">
                      {
                        faq.answer.map((a, index) => (
                          <Text
                            key={index}
                            className='text-[8px] md:text-xs 2xl:text-lg leading-[normal] mb-2'
                            color={'#969696'}
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