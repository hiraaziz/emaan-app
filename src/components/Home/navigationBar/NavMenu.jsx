import React, { useState } from 'react';
import { Link } from "react-router-dom";

const NavMenu = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);

  const menu = [
    {
      label: 'About',
      link:null,
      dropdownItems: [
        {
            label: 'About Us',
            link:'/aboutus',
            
        },
        {
            label: 'Vision, Mission, Objectives',
            link:'/'
        },
        {
            label: 'Rector Messages',
            link:'/rectormessages'
        },
        {
            label: 'Chancellor Message',
            link:'/'
        },
        {
            label: 'Registator Message',
            link:'/'
        },
        {
            label: 'Board of Governce',
            link:'/'
        },
        {
            label: 'Acadamic Council',
            link:'/'
        },
        {
            label: 'Board of Advance Studies & Research (BASR)',
            link:'/'
        },
        {
            label: 'Organogram of EIMS',
            link:'/'
        }
      ],
    },
    {
      label: 'Department',
      link:null,
      dropdownItems: [
        {
          label: 'Business Administration',
          hasSubDropdowns: true,
          subDropdownItems: [
            {
                label: 'MBA 2 years',
                link:'/mba'
              },
              {
                label: 'MBA 1.5 years',
                link:'/mba'
              },
              {
                  label: 'BBA 4 years',
                  link:'/bba'
              },
              {
                  label: 'BBA 2 years',
                  link:'/bba'
              },
              {
                  label: 'ADP Business & Commerce (2 years)',
                  link:'/commerce'
                },
          ],
        },
        {
            label: 'Computer Science',
            hasSubDropdowns: true,
            subDropdownItems: [
                {
                    label: 'BSCS (4 years)',
                    link:'/cs'
                  },
                  {
                    label: 'BSCS (2.5 years)',
                    link:'/cs'
                  },
                  {
                      label: 'ADP Web Design & Development',
                      link:'/web'
                  },
                  {
                      label: 'ADP Computer Networking',
                      link:'/networking'
                  },
                  {
                      label: 'ADP Database Management System',
                      link:'/database'
                    },
            ],
          }
      ],
    },
    {
      label: 'Admission',
      dropdownItems: [
        {
            label: "Fee Structure",
            link: '/feestructure'
          },
          {
            label: "Eligibility",
            link: '/eligibility'
          },
          {
            label: "Scholarship",
            link: '/scholarship'
          },
          {
            label: "Admission Policy",
            link: '/admissionpolicy'
          }
      ],
    },
    {
      label: 'Academics',
      link:'/',
      dropdownItems: [
        {
          label: 'Semester Rules',
          link:'/'
        },
        {
            label: 'Academic Calender',
            link:'/'
          },
      ],
    },
    {
        label: 'QEC',
        link:'/',
        dropdownItems: [
            {
                label: "Introduction",
                link: "/intro"
              },
              {
                label: "Message",
                link: "/finalmessage"
              },
              {
                label: "Qec Activities",
                link: '/'
              }
        ],
      },
      {
        label: 'Research',
        link:'/',
        dropdownItems: [
          {
            label: 'Sub Item 4.1',
            hasSubDropdowns: true,
            subDropdownItems: [
              { label: 'Sub Sub Item 4.1.1' },
              { label: 'Sub Sub Item 4.1.2' },
            ],
          },
          { label: 'Sub Item 4.2' },
          { label: 'Sub Item 4.3' },
        ],
      },
      {
        label:"LMS",
        link:'/',
        dropdownItems:[
            {
                label: "Student Login",
                link: '/login'
              },
              {
                label: "Faculty Login",
                link: '/login'
              }
        ]
      },
      {
        label:'Certificate',
        link:'/',
        dropdownItems:[
            {
                label: "Mobile App Development",
                link: '/mobileappdevelopement'
              },
              {
                label: "Python course",
                link: '/pythoncourse'
              },
              {
                label: "Blockchain",
                link: '/blockchain'
              },
              {
                label: "Penetration Testing",
                link: '/penetrationtesting'
              },
              {
                label: "Ethical Hacking",
                link: '/ethicalhacking'
              },
              {
                label: "Net Developement",
                link: '/netdevelopement'
              },
        ]
      },
  ];

  return (
    <nav className="bg-maroon px-6 py-2">

      <ul className="flex justify-evenly w-[90%] m-auto">
            <button
              className="text-white px-3 py-2 ">
           Home
            </button>
        {menu.map((item, i) => (
          <li key={i} className="relative">
         
            <button
              onClick={() => setActiveDropdown(activeDropdown === i ? null : i)}
              className="text-white px-3 py-2 "
            >
              {item.label}
            </button>
      
            {activeDropdown === i && (
              <ul className="absolute bg-black opacity-90 text-white shadow rounded mt-2 py-1 z-20 w-[200px]">
                {item.dropdownItems.map((subItem, j) => (
                  <li key={j} className="relative z-20 border-b-[1px] border-white w-[90%] m-auto">
                    <Link to={subItem.link}>
                    <button
                      onClick={() =>
                        subItem.hasSubDropdowns &&
                        setActiveSubDropdown(activeSubDropdown === j ? null : j)
                      }
                      className=" block px-4 py-2 text-sm w-full text-left hover:bg-slate-50 hover:text-black rounded-md"
                    >
                      {subItem.label}
                    </button>
                    </Link>
                    {subItem.hasSubDropdowns && activeSubDropdown === j && (
                    <ul className="absolute left-full z-20 top-0 mt-[-0.25rem] bg-black opacity-90 text-white shadow rounded py-1 w-[200px]">
                        {subItem.subDropdownItems.map((subSubItem, k) => (
                        <li key={k}>
                            <Link to={subSubItem.link}>
                            <button className=" block px-4 py-2 text-sm text-left border-b-[1px] border-white w-[90%] m-auto hover:bg-slate-50 hover:text-black">
                            {subSubItem.label}
                            </button>
                            </Link>
                        </li>
                        ))}
                    </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        <Link to='/contact'></Link><button className="text-white px-3 py-2 "> Contact </button><Link/>
        <Link to='/alumni'></Link><button className="text-white px-3 py-2 "> Alumni </button><Link/>
      </ul>
    </nav>
  );
};

export default NavMenu;