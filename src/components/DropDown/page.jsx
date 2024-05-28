import { Menu } from "@headlessui/react"
import { useTranslations } from "next-intl"
import cls from './styles.module.css'
import CloseBtn from '../../assets/images/close.png'
import Image from "next/image"
import { Link } from "../../../navigation"
import SelectArrow from '../../assets/images/select-arrow.svg'

export default function MyDropdown({ setState }) {

       const t = useTranslations('Header')

       const data = [
              {
                     id: 1,
                     title: t('first-title'),
                     children: [
                            {
                              id: 2,
                              title: t('first-section-one'),
                              path: "/modules/about/about-us"
                            },
                            {
                              id: 3,
                              title: t('first-section-two'),
                              path: "/modules/about/leadership"
                            },
                            {
                              id: 4,
                              title: t('first-section-three'),
                              path: "/modules/about/structure"
                            },
                            {
                              id: 5,
                              title: t('first-section-five'),
                              path: "/modules/about/department-service"
                            },
                            {
                              id: 6,
                              title: t('first-section-six'),
                              path: "/modules/about/structural-enterprises"
                            },
                            {
                              id: 7,
                              title: t('first-section-seven'),
                              path: "/modules/about/about-layouts/regulatory-documents"
                            },
                            {
                              id: 118,
                              title: t('first-section-eight-eight'),
                              path: "/modules/about/about-layouts/legal-documents"
                            },
                            {
                              id: 8,
                              title: t('first-section-eight'),
                              path: "/modules/about/vacancies"
                            },
                            {
                              id: 9,
                              title: t('first-section-nine'),
                              path: "/modules/about/faq"
                            },
                            {
                              id: 10,
                              title: t('first-section-ten'),
                              path: "/modules/about/about-layouts/society"
                            },
                            {
                              id: 11,
                              title: t('first-section-eleven'),
                              path: "/modules/about/community"
                            },
                            {
                              id: 112,
                              title: t('first-section-eleven-eleven'),
                              path: "/modules/about/about-layouts/website-user"
                            },
                     ]
              },
              {
                id: 12,
                title: t('second-title'),
                children: [
                  {
                    id: 13,
                    title: t('second-section-one'),
                    path: "/modules/activity/direction"
                  },
                  {
                    id: 14,
                    title: t('second-section-two'),
                    path: "/modules/activity/activity-layout/measures"
                  },
                  {
                    id: 15,
                    title: t('second-section-three'),
                    path: "/modules/activity/activity-layout/reports"
                  },
                  {
                    id: 16,
                    title: t('second-section-four'),
                    path: "/modules/activity/activity-layout/government"
                  },
                  {
                    id: 17,
                    title: t('second-section-five'),
                    path: "/modules/activity/cooperation"
                  },
                  {
                    id: 18,
                    title: t('second-section-six'),
                    path: "/modules/activity/activity-layout/service"
                  },
                  {
                    id: 19,
                    title: t('second-section-seven-title'),
                    child: [
                      {
                             id: 20,
                             title: t('second-section-seven-one-text'),
                             path: "/modules/activity/policy-layout/news"
                      },
                      {
                             id: 21,
                             title: t('second-section-seven-two-text'),
                             path: "/modules/activity/policy-layout/documents"
                      },
                    ]
                  },
                ]
              },
              {
                id: 22,
                title: t('three-title'),
                children: [
                  {
                    id: 23,
                    title: t('three-section-one-title'),
                    child: [
                      {
                        id: 24,
                        title: t('three-section-one-text-one'),
                        path: '/modules/corparate/management/supervisory'
                      },
                      {
                        id: 25,
                        title: t('three-section-one-text-two'),
                        path: '/modules/corparate/management/executive'
                      },
                      {
                        id: 26,
                        title: t('three-section-one-text-three'),
                        path: '/modules/corparate/management/inspection'
                      },
                      {
                        id: 27,
                        title: t('three-section-one-text-four'),
                        path: '/modules/corparate/management/audit-service'
                      },
                      {
                        id: 28,
                        title: t('three-section-one-text-five'),
                        path: '/modules/corparate/management/board-members'
                      },
                    ]
                  },
                  {
                    id: 29,
                    title: t('three-section-two-title'),
                    child: [
                      {
                        id: 30,
                        title: t('three-section-two-text-one'),
                        path: '/modules/corparate/disclosure/securities'
                      },
                      {
                        id: 31,
                        title: t('three-section-two-text-two'),
                        path: '/modules/corparate/disclosure/facts'
                      },
                      {
                        id: 32,
                        title: t('three-section-two-text-three'),
                        path: '/modules/corparate/disclosure/notional-accounting'
                      },
                      {
                        id: 33,
                        title: t('three-section-two-text-four'),
                        path: '/modules/corparate/disclosure/financial-reporting'
                      },
                      {
                        id: 34,
                        title: t('three-section-two-text-five'),
                        path: '/modules/corparate/disclosure/audit-summary'
                      },
                      {
                        id: 35,
                        title: t('three-section-two-text-six'),
                        path: '/modules/corparate/disclosure/issuer-reports'
                      }
                    ]
                  },
                  {
                    id: 36,
                    title: t('three-section-three-title'),
                    path: '/modules/corparate/corparate-layouts/internal-documents'
                  },
                  {
                    id: 37,
                    title: t('three-section-four-title'),
                    child: [
                      {
                        id: 38,
                        title: t('three-section-four-text-one'),
                        path: '/modules/corparate/shareholders/fund'
                      },
                      {
                        id: 39,
                        title: t('three-section-four-text-two'),
                        path: '/modules/corparate/shareholders/affiliates'
                      },
                      {
                        id: 40,
                        title: t('three-section-four-text-three'),
                        path: '/modules/corparate/shareholders/share-holders'
                      },
                      {
                        id: 41,
                        title: t('three-section-four-text-four'),
                        path: '/modules/corparate/shareholders/resident'
                      },
                      {
                        id: 42,
                        title: t('three-section-four-text-five'),
                        path: '/modules/corparate/shareholders/dividend'
                      },
                    ]
                  },
                  {
                    id: 43,
                    title: t('three-section-five-title'),
                    child: [
                      {
                        id: 44,
                        title: t('three-section-five-text-one'),
                        path: '/modules/corparate/projects/investment'
                      },
                      {
                        id: 45,
                        title: t('three-section-five-text-two'),
                        path: '/modules/corparate/projects/tenders'
                      },
                      {
                        id: 46,
                        title: t('three-section-five-text-three'),
                        path: '/modules/corparate/projects/purchaches'
                      },
                      {
                        id: 47,
                        title: t('three-section-five-text-four'),
                        path: '/modules/corparate/projects/partnership'
                      },
                      {
                        id: 48,
                        title: t('three-section-five-text-five'),
                        path: '/modules/corparate/projects/events'
                      },
                    ]
                  },
                  {
                    id: 49,
                    title: t('three-section-six-title'),
                    path: '/modules/corparate/corparate-layouts/assesment'
                  },
                  {
                    id: 50,
                    title: t('three-section-seven-title'),
                    path: '/modules/corparate/corparate-layouts/performance'
                  },
                  {
                    id: 51,
                    title: t('three-section-eight-title'),
                    path: '/modules/corparate/corparate-layouts/business-plan'
                  },
                ]
              },
              {
                id: 52,
                title: t('four-title'),
                children: [
                  {
                    id: 53,
                    title: t('four-section-one'),
                    path: '/modules/press-center/news'
                  },
                  {
                    id: 54,
                    title: t('four-section-two'),
                    path: '/modules/press-center/media'
                  },
                  {
                    id: 55,
                    title: t('four-section-three'),
                    path: '/modules/press-center/photo-info'
                  },
                  {
                    id: 56,
                    title: t('four-section-four'),
                    path: '/modules/press-center/video-info'
                  },
                  {
                    id: 57,
                    title: t('four-section-five'),
                    path: '/modules/press-service'
                  },
                ]
              },
              {
                id: 58,
                title: t('five-title'),
                path: '/modules/compleans-control'
              },
              {
                id: 59,
                title: t('six-title'),
                path: '/open-data'
              },
              {
                id: 60,
                title: t('seven-title'),
                children: [
                  {
                    id: 61,
                    title: t('seven-section-one'),
                    path: '/modules/contacts/office'
                  },
                  {
                    id: 62,
                    title: t('seven-section-two'),
                    path: '/modules/contacts/cooperation'
                  },
                  {
                    id: 63,
                    title: t('seven-section-three'),
                    path: '/modules/contacts/hotline'
                  },
                  {
                    id: 64,
                    title: t('seven-section-four'),
                    path: '/modules/contacts/feedback'
                  },
                  {
                    id: 65,
                    title: t('seven-section-five'),
                    path: '/modules/contacts/appeal'
                  },
                  {
                    id: 66,
                    title: t('seven-section-six'),
                    path: '/modules/contacts/statistics'
                  },
                ]
              }
          
          ]
          
       return <>
       <div className='header_center'>
              <button onClick={() => setState(false)} className='header-close-btn'>
                     <Image src={CloseBtn} alt='has close img' width={'22'} height={'22'} />
              </button>
              <ul className={'header_center_list'}>
                     {data?.map((element) => (
                            element?.children ? (
                                   <li className={'header_menu_section'} key={element?.id}>
                                          <Menu>
                                                 <Menu.Button className={cls.header_menu_btn}>
                                                        {element?.title}
                                                        <Image className={cls.header_menu_btn_img} src={SelectArrow} alt='Has select arrow' />
                                                 </Menu.Button>
                                                 <Menu.Items className={'nav_menu_list'}>
                                                        {element?.children?.map((childElement) => (
                                                               <Menu.Item key={childElement?.id}>
                                                                      {childElement?.child ? (
                                                                             <div>
                                                                                    <Menu>
                                                                                           <Menu.Button className={cls.header_menu_btn_inner}>
                                                                                                  <p className={cls.header_menu_btn_inner_text}>
                                                                                                         {childElement?.title}
                                                                                                  </p>
                                                                                                  <Image className={cls.header_menu_btn_img_inner} src={SelectArrow} alt='Has select arrow' />
                                                                                           </Menu.Button>
                                                                                           <Menu.Items className={cls.nav_menu_inner_list}>
                                                                                                  {childElement?.child?.map((row) => (
                                                                                                         <Menu.Item key={row?.id}>
                                                                                                                <Link className={'header_menu_link_inner'} href={row?.path}>
                                                                                                                       {row?.title}
                                                                                                                </Link>
                                                                                                         </Menu.Item>
                                                                                                  ))}
                                                                                           </Menu.Items>
                                                                                    </Menu>
                                                                             </div>
                                                                      ) : <Link className={'header_menu_link'} id='RouterNavLink' href={childElement?.path}>
                                                                             {childElement?.title}
                                                                      </Link>}
                                                               </Menu.Item>
                                                        ))}
                                                 </Menu.Items>
                                          </Menu>
                                   </li>
                            ) : (<Link className={'header_menu_element_link'} key={element?.id} href={element?.path}>{element?.title}</Link>)
                     ))}
              </ul>
       </div>
       <span onClick={() => setState(false)} className="blur"></span>
       </>
}
