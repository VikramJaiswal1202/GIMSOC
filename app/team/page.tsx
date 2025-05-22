"use client"
import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/Footer'
import TeamCard from '@/components/TeamCard'

const Team = () => {
  return (
    <div>
      <Navbar />
      <div className='mx-auto flex flex-col mt-[40px] items-center justify-center w-4/5'>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-left mb-4 bg-gradient-to-b from-heading2 to-heading bg-clip-text text-transparent mx-auto">
          Meet the Team
        </h1>
        <p className='text-center lg:text-xl sm:text-lg mt-3' >
          Meet the faces behind GIMSOC — a team of committed medical students pouring their hearts into every project, event, and initiative. Each smile here represents countless hours of dedication, collaboration, and a shared vision for something greater.
          
        </p>


        {/* Co-Chairs */}
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-[100px] w-full max-w-6xl place-items-center'>

          <TeamCard name="Radha Jaiswal" position="Co-Chairperson" photo="/Team_imgs/Radha Jaiswal - Co-Chairperson.jpg" />

          <TeamCard name="Kay Mamphoka" position="Co-Chairperson" photo="/Team_imgs/Kay Mamphoka - Co-Chairperson.jpg" />
        </div>



        {/* Secretary General */}
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[30px] w-full max-w-6xl place-items-center'>

          <TeamCard name="Rasheed Ramzan" position="Secretary General" photo="/Team_Imgs/Raashed Ramzan - Secretary General.jpg" />

          <TeamCard name="Javeed Ahmed Syed" position="Secretary General" photo="/Team_Imgs/Javeed Ahmed Syed - Secretary General.JPEG" />

          <TeamCard name="Olebogeng Makgopela" position="Assistant Secretary General" photo="/Team_Imgs/Olebogeng Makgopela - Assistant Secretary General.jpeg" />

          <TeamCard name="Damini Haridas" position="Assistant Secretary General" photo="/Team_Imgs/Damini Haridas - Assistant Secretary General and Events Head of DTMU.jpg" />
        </div>



        {/* Admin Members */}
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[30px] w-full max-w-6xl place-items-center'>

          <TeamCard name="Diti Sangoi" position="Admin Team Member" photo="/Team_Imgs/Diti Sangoi - AdminTeam.jpg" />

          <TeamCard name="Ahlam Dalwai" position="Admin Team member" photo="/Team_Imgs/Profile_pic.jpeg" />

          <TeamCard name="Harshita Gupta" position="Admin Team Member" photo="/Team_Imgs/Profile_pic.jpeg" />
        </div>


        {/* Human Resources */}
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[30px] w-full max-w-6xl place-items-center'>

          <TeamCard name="Shikha Suman" position="Director of Human Resources" photo="/Team_Imgs/Shikha Suman - Director of Human Resources.jpg" />

          <TeamCard name="Riyaa Mehta" position="Deputy Director of Human Resources (Membership)" photo="/Team_Imgs/Riyaa Mehta - Deputy Director of Human Resources(Membership).jpg" />

          <TeamCard name="Mariam Mayissa-Toure" position="Deputy Director of Human Resources (Talents)" photo="/Team_Imgs/Mariam Mayissa-Toure - Deputy Director of Human Resources (Talents).jpg" />

          <TeamCard name="Aniqah Inas" position="Deputy Director of Human Resources (Contracts)" photo="/Team_Imgs/Aniqah Inas - Deputy Director of Human Resources (Contracts).png" />
        </div>


        {/* Judiciary Counsel */}
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[30px] w-full max-w-6xl place-items-center'>

          <TeamCard name="Kelebogile Mmatseba Makor" position="Head of Judiciary Council" photo="/Team_Imgs/Kelebogile Mmatseba Makoro - Head of Judiciary Council.jpg" />

          <TeamCard name="Cheryn D'Souza" position="Member of Judiciary Council" photo="/Team_Imgs/Cheryn D_Souza - Member of the Judiciary Council.jpg" />

          <TeamCard name="Shruti Madan Naik" position="Member of Judiciary Council" photo="/Team_Imgs/Shruthi Madan Naik - Member of the Judiciary Council.jpg" />
        </div>



        {/* Publicity */}
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-[30px] w-full max-w-6xl place-items-center'>

          <TeamCard name="Arnav Walvakar" position="Publicity Director" photo="/Team_Imgs/Arnav Walvakar - Publicity Director.jpg" />

          <TeamCard name="Vaishali Raja" position="Deputy Publicity Director" photo="/Team_Imgs/Vaishali Raja - Deputy Publicity Director.jpg" />
        </div>


        {/* Public Relations */}
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-[30px] w-full max-w-6xl place-items-center'>

          <TeamCard name="Oluwatitofunmi Philips" position="Director of Public Relations" photo="/Team_Imgs/Oluwatitofunmi Philips - Head of Public Relations.jpg" />

          <TeamCard name="Onazahi Ajogun" position="Deputy Director of Public Relations" photo="/Team_Imgs/Onazahi Ajogun - Deputy Director of Public Relations.jpg" />
        </div> 


        {/* Researcch */}
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-[30px] w-full max-w-6xl place-items-center'>

          <TeamCard name="Hashim Mohamed Siraj" position="Research Director" photo="/Team_Imgs/Hashim Mohamed Siraj - Research Director.jpg" />

          <TeamCard name="Nikhila Liz Aby" position="Deputy Research Director" photo="/Team_Imgs/Nikhila Liz Aby - Deputy Research Director.jpeg" />
        </div> 


        {/* Finance */}
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-[30px] w-full max-w-6xl place-items-center'>

          <TeamCard name="Victoria Oshatimehin" position="Finance Director" photo="/Team_Imgs/Victoria Oshatimehin - Finance Director.jpg" />

          <TeamCard name="Geeta Solanki" position="Deputy Finance Director" photo="/Team_Imgs/Geeta Solanki - Deputy Finance Director.jpg" />
        </div> 


        {/* Social Media */}
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-[30px] w-full max-w-6xl place-items-center'>

          <TeamCard name="Isha Ullul" position="Social Media Director" photo="/Team_Imgs/Profile_pic.jpeg" />

          <TeamCard name="Sana Sajed Pathan" position="Deputy Social Media Director" photo="/Team_Imgs/Sana Sajed Pathan - Deputy Social Media Director.jpg" />
        </div> 


        {/* Events */}
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-[30px] w-full max-w-6xl place-items-center'>

          <TeamCard name="Rafaela Monteiro" position="Events Director" photo="/Team_Imgs/Rafaela Monteiro - Events Director.JPG" />

          <TeamCard name="Ryan Chris Thaddaeus" position="Deputy Events Director" photo="/Team_Imgs/Ryan Chris Thaddeus - Deputy Events Director.jpg" />
        </div> 



        {/* Workshops */}
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-[30px] w-full max-w-6xl place-items-center'>

          <TeamCard name="Hima Mahesha" position="Workshops Director" photo="/Team_Imgs/Hima Mahesha - Workshops Director.JPG" />

          <TeamCard name="Shelby Milton" position="Deputy Workshops Director" photo="/Team_Imgs/Shelby Milton - Deputy Events Director.jpg" />
        </div> 


        {/* Conference */}
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-[30px] w-full max-w-6xl place-items-center'>

          <TeamCard name="Guncha Shaikh" position="Conference Director" photo="/Team_Imgs/Guncha Shaikh - Conference Director.JPG" />

          <TeamCard name="Muhammad Barakat" position="Deputy Conference Director" photo="/Team_Imgs/Deputy Conference Director.jpg" />
        </div> 


        {/* Fundraising */}
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-[30px] w-full max-w-6xl place-items-center'>

          <TeamCard name="Arbeena Kar" position="Fundraising Director" photo="/Team_Imgs/Profile_pic.jpeg" />

          <TeamCard name="Prapti Kanungo" position="Deputy Fundraising Director" photo="/Team_Imgs/Profile_pic.jpeg" />
        </div> 

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-left mb-4 bg-gradient-to-b from-heading2 to-heading bg-clip-text text-transparent mx-auto mt-[100px] pb-4">
          Our Local Representatives
        </h1>

        {/* TSMU */}
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-[100px] w-full max-w-6xl place-items-center'>

          <TeamCard name="Atroba Zaheer" position="Head Local Representative - TSMU" photo="/Team_Imgs/Atroba Zaheer -Head Local Representative - TSMU.jpg" />

          <TeamCard name="Johora Akter" position="Assistant Local Representative - TSMU " photo="/Team_Imgs/Johora Akhter - Assistant Local Representative - TSMU.png" />
        </div>


        {/* EU */}
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-[30px] w-full max-w-6xl place-items-center'>

          <TeamCard name="Khadija Shaw" position="Head Local Representative - EU" photo="/Team_Imgs/Khadija Shaw - Head Local Representative - EU.png" />

          <TeamCard name="Mira Qattan" position="Assistant Local Representative - EU" photo="/Team_Imgs/Mira Qattan - Assistant Local Representative - EU .jpg" />
        </div> 


        {/* GAU */}
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-[30px] w-full max-w-6xl place-items-center'>

          <TeamCard name="Insha Khan" position="Head Local Representative - GAU" photo="/Team_Imgs/Insha Khan - Head Local Representative - GAU.JPG" />

          <TeamCard name="Aryaa Jadhav" position="Assistant Local Representative - GAU " photo="/Team_Imgs/Aryaa Jadhav - Assistant Local Representative - GAU.jpg" />
        </div>


        {/* GEOMEDI */}
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-[30px] w-full max-w-6xl place-items-center'>

          <TeamCard name="Abdul Gufran" position="Head Local Representative - GEOMEDI" photo="/Team_Imgs/Abdul Gufran - Head Local Representative - GEOMEDI.jpg" />

          <TeamCard name="Shobhit Sinha" position="Assistant Local Representative - GEOMEDI" photo="/Team_Imgs/Shobhit Sinha - Assistant Local Representative - GEOMEDI.png" />
        </div>


        {/* TSU */}
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-[30px] w-full max-w-6xl place-items-center'>

          <TeamCard name="Ajharul Quamar Raiyan" position="Head Local Representative - TSU" photo="/Team_Imgs/Mohammad Ajharul Quamar - Head Local Representative - TSU .jpg" />

          <TeamCard name="Khaja Ayaan Syed" position="Assistant Local Representative - TSU " photo="/Team_Imgs/Profile_pic.jpeg" />
        </div>


        {/* UG */}
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-[30px] w-full max-w-6xl place-items-center'>

          <TeamCard name="Yukta Anchan" position="Head Local Representative - UG" photo="/Team_Imgs/Yukta Anchan - Head Local Representative - UG.jpeg" />

          <TeamCard name="Alina Pervez" position="Assistant Local Representative - UG" photo="/Team_Imgs/Alina Pervez Razak - Assistant Local Representative - UG.jpg" />
        </div>


        {/* ISU */}
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-[30px] w-full max-w-6xl place-items-center'>

          <TeamCard name="Maya Alqawasmi" position="Head Local Representative - ISU " photo="/Team_Imgs/Maya Alqawasmi - Head Local Representative - ISU.JPG" />

          <TeamCard name="Jemeleine Cerbito" position="Assistant Local Representative - ISU" photo="/Team_Imgs/Jemeleine Cerbito - Assistant Local Representative - ISU.jpg" />
        </div>



        {/* SEU */}
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-[30px] w-full max-w-6xl place-items-center'>

          <TeamCard name="Nimish Chawla" position="Head Local Representative - SEU" photo="/Team_Imgs/Nimish Chawla - Head Local Representative - SEU.jpeg" />

          <TeamCard name="Omaima Suad" position="Assistant Local Representative - SEU" photo="/Team_Imgs/Profile_pic.jpeg" />
        </div>



        {/* CIU */}
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-[30px] w-full max-w-6xl place-items-center'>

          <TeamCard name="Sophia Igwe" position="Head Local Representative - CIU " photo="/Team_Imgs/Sophia Igwe - Head Local Representative - CIU.jpeg" />

          <TeamCard name="Ayush Shah" position="Assistant Local Representative - CIU" photo="/Team_Imgs/Ayush Shah - Assistant Local Representative - CIU.jpg" />
        </div>



        {/* DTMU */}
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-[30px] w-full max-w-6xl place-items-center'>

          <TeamCard name="Sharvesh Rajesh" position="Head Local Representative - DTMU" photo="/Team_Imgs/Sharvesh Rajesh - Head Local Representative - DTMU.jpg" />

          <TeamCard name="Vanshika Pathak" position="Assistant Local Representative - DTMU " photo="/Team_Imgs/Vanshika Pathak - Assistant Local Representative - DTMU.jpg" />
        </div>


        {/* ALTE */}
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-[30px] w-full max-w-6xl place-items-center'>

          <TeamCard name="Radhika Gupta" position="Head Local Representative - ALTE" photo="/Team_Imgs/Radhika Gupta - Head Local Representative - ALTE.jpg" />

          <TeamCard name="Khizra Zaheer" position="Assistant Local Representative - ALTE" photo="/Team_Imgs/Khizra Zaheer - Assistant Local Representative - ALTE.jpg" />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center pb-4 lg:text-left mb-4 bg-gradient-to-b from-heading2 to-heading bg-clip-text text-transparent mx-auto mt-[100px]">
          Our Past Chairpersons
        </h1>

        {/* Secretary General */}
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[30px] w-full max-w-6xl place-items-center'>

          <TeamCard name="Onyekachi Anyagwa" position="Co-Founder" photo="/Team_Imgs/Onyekachi Anyagwa (Co-Founder).jpg" />

          <TeamCard name="Rajeeka Singh Tak" position="Co-Founder" photo="/Team_Imgs/Rajeeka Singh Tak( Co-Founder ).jpg" />

          <TeamCard name="Oluwatoyin Dairo" position="Co-Chairperson 2024" photo="/Team_Imgs/Oluwatoyin Dairo.JPEG" />

          <TeamCard name="Farhad Islam" position="Co-Chairperson 2024" photo="/Team_Imgs/Farhad Islam (Co-Chairperson 2024).jpg" />
        </div>

      </div>

      

      <footer className='mt-[100px]'>
        <Footer />
        <div className="flex flex-col items-center justify-center py-4 bg-gradient-to-b from-logo to-heading text-white">
          <p className="text-sm">© 2023 GIMSOC. All rights reserved.</p>
          <p className="text-sm">Privacy Policy | Terms of Service</p>
        </div>
      </footer>
    </div>
  )
}

export default Team
