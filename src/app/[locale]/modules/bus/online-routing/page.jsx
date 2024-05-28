import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, border } from '@chakra-ui/react'
import cls from './styles.module.css'
import Image from 'next/image'
import LoactionImg from '../../../../../assets/images/location.svg'
import { useTranslations } from 'next-intl'

export default function OnlineRouting() {

  const t = useTranslations("Bus-Online-Routes")

       return <>
       <div className={cls.routing_section}>
              <h2 className={cls.routing_heading}>{t('title')}</h2>
              
              <form className={cls.routing_form}>
                     <p className={cls.routing_form_title}>{t('form-title')}</p>
                     
                     <Accordion allowToggle className={cls.routing_accord}>
                            <AccordionItem className={cls.routing_accord_item}>
                              <h2>
                                <AccordionButton 
                                style={{padding: '16px', border: 'none',
                                fontFamily: "Inter", fontWeight: "400",
                                fontSize: '16px', color: "#909090",
                                background: "#FFFFFF", borderRadius: "8px", cursor: 'pointer'}}>
                                  <Box as='span' flex='1' textAlign='left'>
                                   {t('form-first-select')}
                                  </Box>
                                  <AccordionIcon />
                                </AccordionButton>
                              </h2>
                              <AccordionPanel style={{position: 'absolute'}} pb={4}>
                              </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem className={cls.routing_accord_item}>
                              <h2>
                                <AccordionButton
                                style={{padding: '16px', border: 'none',
                                fontFamily: "Inter", fontWeight: "400",
                                fontSize: '16px', color: "#909090",
                                background: "#FFFFFF", borderRadius: "8px", cursor: 'pointer'}}>
                                  <Box as='span' flex='1' textAlign='left'>
                                   {t('form-second-select')}
                                  </Box>
                                  <AccordionIcon />
                                </AccordionButton>
                              </h2>
                              <AccordionPanel style={{position: 'absolute'}} pb={4}>
                              </AccordionPanel>
                            </AccordionItem>
                     </Accordion>
                     <button className={cls.routing_form_btn}>
                            <Image src={LoactionImg} width={24} height={'auto'} alt='location images' />
                            <p className={cls.routing_form_btn_text}>{t('form-btn-title')}</p>
                     </button>
              </form>

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.4040272633974!2d69.24845672667377!3d41.32182700005814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b36912ed28f%3A0xf81740bc29d19719!2z0J7QntCeICLQptC10L3RgtGAINGA0LDQt9Cy0LjRgtC40Y8g0LjQvdGE0L7RgNC80LDRhtC40L7QvdC90YvRhSDRgtC10YXQvdC-0LvQvtCz0LjQuSDQuCDQuNC90YTQvtGA0LzQsNGG0LjQvtC90L3Ri9GFINGA0LXRgdGD0YDRgdC-0LIi!5e0!3m2!1sru!2s!4v1715777881910!5m2!1sru!2s" width="100%" height="600" style={{marginTop: '24px', border: '0', borderRadius: '24px'}} loading="lazy"></iframe>
       </div>
       </>
}
