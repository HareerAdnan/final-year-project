
// id inscrease with respcect to data
// title your notes title let suppose file is for GK so title well be General Knolwedge 
// link well be your document like which is provide by google drive it self 

import React from 'react'
import nationalImg from '../images/national.jpg'
import internationalImg from '../images/international.jpg'
import MDCAT from '../images/mdcat.jpg'
import ETEA from '../images/etea.jpg'
import IELET from  '../images/ielet.jpg'
import SAT from  '../images/sat.jpg'
import Signup from '../images/signup.jpg'
import TOFEL from '../images/Tofel.jpg'
import EnglishCont from '../images/English.jpg'
import EuropeanCont from '../images/European.jpg'
import OthersCont from '../images/other.jpg'





// not like this 

export const nationalDataSubCateg=[
    {id: 1, title: 'BIOLOGY', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/1L9FRTOx62h-fa3HFuyq72C9R_ZckLOpx/view'},
    {id: 2, title: 'PHYSICS', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/1L9FRTOx62h-fa3HFuyq72C9R_ZckLOpx/view'},
    {id: 3, title: 'MATHS', topic: 'ETEA', embededLink :'https://drive.google.com/file/d/1Q07EqW7QSRzJA0yIHpMLC1paEU_gBKcR/view'},
    {id: 4, title: 'CHEMISTRY', topic: 'ETEA', embededLink :'https://drive.google.com/file/d/1mjRcDKrVyhz8_WdWr_11WmmwHJq4vofD/view'},
    {id: 5, title: 'MATHS', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/1mjRcDKrVyhz8_WdWr_11WmmwHJq4vofD/view'},
    {id: 6, title: 'CHEMISTRY', topic: 'ETEA', embededLink :'https://drive.google.com/file/d/1mjRcDKrVyhz8_WdWr_11WmmwHJq4vofD/view'},
    {id: 7, title: 'BIOLOGY', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/1mjRcDKrVyhz8_WdWr_11WmmwHJq4vofD/view'},
    {id: 8, title: 'PHYSICS', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/1mjRcDKrVyhz8_WdWr_11WmmwHJq4vofD/view'},

]

export const ScholarshipCat = [
    {id: 1, title:'CANADA', topic: 'ENGLISH', embededLink: 'https://www.educanada.ca/scholarships-bourses/index.aspx?lang=eng'},
    {id: 2, title:'CANADA', topic: 'ENGLISH', embededLink: 'https://www.scholarshipportal.com/scholarship/national-capital-sommelier-guild-award'},
    {id: 3, title:'CANADA', topic: 'ENGLISH', embededLink: 'https://www.scholarshipportal.com/scholarship/one-world-international-scholarship'},
    {id: 4, title:'CANADA', topic: 'ENGLISH', embededLink: 'https://www.berklee.edu/scholarships/berklee-merit-based-scholarships'},
    {id: 5, title:'US', topic: 'ENGLISH', embededLink: 'https://www.usefp.org/'},
    {id: 6, title:'US', topic: 'ENGLISH', embededLink: 'https://www.scholarshipportal.com/scholarships/united-states'},
    {id: 7, title:'US', topic: 'ENGLISH', embededLink: 'https://enrollment.byu.edu/financial-aid/new-freshman-scholarships'},
    {id: 8, title:'GERMANY', topic: 'EUROPEAN', embededLink: 'https://www.daad.de/en/study-and-research-in-germany/scholarships/daad-scholarships/'},
    {id: 9, title:'GERMANY', topic: 'EUROPEAN', embededLink: 'https://www.scholarshipportal.com/scholarship/daad-promos-scholarship'},
    {id: 10, title:'GERMANY', topic: 'EUROPEAN', embededLink: 'https://www.scholarshipportal.com/scholarship/daad-prize'},
    {id: 11, title:'GERMANY', topic: 'EUROPEAN', embededLink: 'https://www.scholarshipportal.com/scholarships/germany'},
    {id: 12, title:'SPAIN', topic: 'EUROPEAN', embededLink: 'https://www.berklee.edu/scholarships/berklee-merit-based-scholarships'},
    {id: 13, title:'SPAIN', topic: 'EUROPEAN', embededLink: 'https://www.scholarshipportal.com/scholarships/spain'},
    {id: 14, title:'CHINA', topic: 'OTHERS', embededLink: 'https://www.bsu.edu/academics/collegesanddepartments/history/admissions-financial-aid/department-scholarships#accordion_anthonyedmondsstudyabroadscholarship'},
    {id: 15, title:'TURKEY', topic: 'OTHERS', embededLink: 'https://erasmus-plus.ec.europa.eu/opportunities/opportunities-for-individuals/students/erasmus-mundus-joint-masters-scholarships'},
    {id: 16, title:'SAUDIA ARAB', topic: 'OTHERS', embededLink: 'https://www.scholarshipportal.com/scholarship/international-masters-scholarship'},


]



export const scholarshipCountry = [
    {id: 1, title: 'ENGLISH', desc: '', path: '/scholarships/english', imgSrc:EnglishCont},
    {id: 2, title: 'EUROPEAN', desc: '', path: '/scholarships/european', imgSrc: EuropeanCont},
    {id: 3, title: 'OTHERS', desc: '', path: '/scholarships/others', imgSrc:OthersCont }
]



export const insternatioanlDataSubCateg=[
    {id: 1, title: 'Listening', topic: 'IELTS' ,embededLink: 'https://drive.google.com/file/d/12sxAMy-9ubajWpVisY0-FVbGYwbMmhD1/preview'},
    {id: 2, title: 'Speaking', topic: 'IELTS' ,embededLink:'https://drive.google.com/file/d/1aFCqHUtLW_TxIG5aA7zzUS59-tZsYeOA/preview'},
    {id: 3, title: 'Hearing', topic: 'IELTS' ,embededLink:'https://drive.google.com/file/d/1PMdSErKN8Yl8uEohHg2kqTsFVJdNewXu/preview'},
    {id: 4, title: 'TOFEL', topic: 'TOFEL', embededLink: 'https://drive.google.com/file/d/1roHNZjtRlSZ3WQ1AmUndy-meMyQxdhQR/preview' },
    {id: 5, title: 'PASTPAPER', topic: 'Tofel' ,embededLink:'https://drive.google.com/file/d/1roHNZjtRlSZ3WQ1AmUndy-meMyQxdhQR/preview'},
    {id: 6, title: 'Preparation Notes', topic: 'TOFEL' ,embededLink:'https://drive.google.com/file/d/17WJOKdVCcnJdYANl0UA4maPm_TA7T2fI/preview'},
    {id: 7, title: 'SAT', topic:'SAT', embededLink: 'https://drive.google.com/file/d/159E0WggNekBa1HQNQ1PB7GKjmuTzKkYh/preview'},
    {id: 8, title: 'Preparation Notes', topic: 'SAT' ,embededLink:'https://drive.google.com/file/d/17WJOKdVCcnJdYANl0UA4maPm_TA7T2fI/preview'},
]





export const nationalData = [
    {id: 1, title: 'ETEA', desc: '', path: '/national/etea', imgSrc:ETEA},
    {id: 2, title: 'MDCAT', desc: '', path: '/national/mdcat', imgSrc: MDCAT}
]


export const internationalData = [
    {id: 1, title: 'IELTS', desc: '', path: '/international/ilet', imgSrc:IELET},
    {id: 2, title: 'SAT', desc: '', path: '/international/sat', imgSrc: SAT},
    {id: 3, title: 'TOFEL', desc: '', path: '/international/tofel', imgSrc:TOFEL }
]



export const entrytestData =[
    {id: 1, title: 'National', desc: 'National tests includes ETEA and MDCAT', path: '/national', imgSrc: nationalImg},
    {id: 1, title: 'Internatioanl', desc: 'Internatioanl tests includes IELTS, SAT and Tofel', path: '/international', imgSrc: internationalImg}
]



export const homeData = [
    {id: 1, title: 'ETEA', desc: 'PREPARE FOR YOUR NATIONAL TEST ETEA NOW!', path: '/entrytest', imgSrc: ETEA},
   
    {id: 1, title: 'MDCAT', desc: 'PREPARE FOR YOUR NATIONAL TEST MDCAT NOW!', path: '/entrytest', imgSrc: MDCAT},

    {id: 2, title: 'TOFEL', desc: 'PREPARE FOR YOUR INTERNATIONAL TEST TOFEL NOW!', path: '/entrytest', imgSrc: TOFEL},

    {id: 3, title: 'IELET', desc: 'PREPARE FOR YOUR INTERNATIONAL TEST IELET NOW!', path: '/entrytest', imgSrc: IELET},

    {id: 4, title: 'SAT', desc: 'PREPARE FOR YOUR INTERNATIONAL TEST SAT NOW!', path: '/entrytest', imgSrc: SAT},

    {id: 5, title: 'REGISTER', desc: 'SIGN UP NOW!', path: '/login', imgSrc: Signup},

]   


export const EntryText = "Free your success! Ace entry tests effortlessly with our limitless resources. Unlock your potential, conquer challenges, and achieve extraordinary results. Your journey to triumph starts here. Don't quit, stay determined, and soar to new heights. Success is within reach—push forward and shine in your upcoming test. Best of luck on your path to greatness!"
export const ScholarshipText = "Unleash your dreams! Explore unlimited scholarships worldwide for fully funded or partial funding. Click now to embark on your journey to your dream university abroad."
export const NationalText = "Crush your ETEA and MDCAT exams with our abundant and free preparation material. Open the doors to your dream universities and achieve exceptional results. Seize the opportunity to excel and make your goals a reality. Best of luck on your journey to success!"
export const InternationalText = "Crush SAT, TOEFL, and IELTS with free materials. Boost your CV with incredible scores and unlock dream universities. Start your journey to success now!"

