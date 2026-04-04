import { LuArrowLeft, LuBook, LuBookOpen, LuChartLine, LuCheck, LuChevronDown, LuChevronUp, LuCircleHelp, LuClock, LuFile, LuInfo, LuVideo } from "react-icons/lu";
import cosImg1 from '../../../images/cos1.jpg'
import cosImg2 from '../../../images/cos2.jpg'
import cosImg3 from '../../../images/cos3.jpg'
import cosImg4 from '../../../images/cos4.jpg'
import cosImg5 from '../../../images/cos5.jpg'
import cosImg6 from '../../../images/cos6.jpg'
export const progressCards = [
        {
            title : 'Total Lessons',
            value : 2
        },
        {
            title : 'Completed',
            value : 2,
        },
        {
            title : 'Remaining',
            value : 0
        }
];

export const courseType = [
        {
            id : 1,
            image : cosImg1,
            status : 'In Progress',
            category : 'Development',
            title : 'Introduction to Web Development',
            text : 'Learn the fundamentals of HTML, CSS, and Javascript to build modern web...',
            author : 'Chukwuemeka Nwosu',
            modules : 4,
            percent : 65,
            style : 'bg-[#E8F0FB] text-[#2563EB]',
            duration : 6,
            modulesView : [
                {
                    id : 1,
                    title : 'HTML and CSS Basics',
                    sub_title : 'Learn the basics of HTML and CSS to structure and style web pages',
                    no_of_lessons : 3,
                    lesssons_completed : 2,
                    duration : 4,
                    lessons : [
                        {
                            id : 1,
                            title : 'Introduction to HTML',
                            resource_type : 'Video',
                            duration : '25 min',
                            status : 'Completed',
                            icon : LuCheck
                        },
                        {
                            id : 2,
                            title : 'CSS Fundamentals',
                            resource_type : 'Video',
                            duration : '30 min',
                            status : 'Completed',
                            icon : LuCheck
                        },
                        {
                            id : 3,
                            title : 'Responsive Design',
                            resource_type : 'Pdf',
                            status : 'Completed',
                            icon : LuFile
                        }
                    ]
                },
                {
                    id : 2,
                    title : 'Javascript Fundamentals',
                    sub_title : 'Explore the fundamentals of Javascript to add interactivity to your web pages',
                    no_of_lessons : 2,
                    lesssons_completed : 1,
                    duration : 4,
                    lessons : [
                        {
                            id : 1,
                            title : 'JavsScript Basics',
                            resource_type : 'Video',
                            duration : '45 min',
                            status : 'Completed',
                            icon : LuCheck
                        },
                        {
                            id : 2,
                            title : 'DOM Manipulation',
                            resource_type : 'Video',
                            duration : '35 min',
                            status : 'Completed',
                            icon : LuVideo
                        },
                    ]
                },
                {
                    id : 3,
                    title : 'Responsive Design',
                    sub_title : 'Discover how to create responsive web designs that work on all devices',
                    no_of_lessons : 3,
                    lesssons_completed : 2,
                    duration : 4,
                    lessons : [
                        {
                            id : 1,
                            title : 'Design Thinking',
                            resource_type : 'Note',
                            status : 'Completed',
                            icon : LuCheck
                        },
                        {
                            id : 2,
                            title : 'Wireframing and Prototyping',
                            resource_type : 'Video',
                            duration : '20 min',
                            status : 'Completed',
                            icon : LuCheck
                        },
                        {
                            id : 3,
                            title : 'User Testing',
                            resource_type : 'Quiz',
                            icon : LuCircleHelp
                        },
                    ]
                },
                {
                    id : 4,
                    title : 'DOM Manipulation',
                    sub_title : 'Learn how to manipulate the Document Object Model (DOM) to dynamically change web content',
                    no_of_lessons : 5,
                    lesssons_completed : 2,
                    duration : 4,
                    lessons : [
                        {
                            id : 1,
                            title : 'Python Basics',
                            resource_type : 'Video',
                            duration : '30 min',
                            status : 'Completed',
                            icon : LuCheck
                        },
                        {
                            id : 2,
                            title : 'Data Manipulation  with Pandas',
                            resource_type : 'Note',
                            status : 'Completed',
                            icon : LuCheck
                        },
                        {
                            id : 3,
                            title : 'Data Visualization',
                            resource_type : 'Video',
                            duration : '40 min',
                            icon : LuVideo
                        },
                        {
                            id : 4,
                            title : 'Advanced Data Analysis',
                            resource_type : 'Note',
                            icon : LuBook
                        },
                        {
                            id : 5,
                            title : 'Machine Learning Basics',
                            resource_type : 'Video',
                            duration : '50 min',
                            icon : LuVideo
                        },
                    ]
                },
            ]

        },
        {
            id : 2,
            image : cosImg2,
            status : 'In Progress',
            category : 'Design',
            title : 'UI/UX Design Principles',
            text : 'Master the art of creating beautiful and functional user interfaces with modern...',
            author : 'Amina Bello',
            modules : 3,
            percent : 30,
            style : 'bg-[#E8F0FB] text-[#2563EB]',
            modulesView : [
                {
                    id : 1,
                    title : 'Design Thinking',
                    sub_title : 'Understand the principles of design thinking to create user-centered designs',
                    no_of_lessons : 6,
                    lesssons_completed : 2,
                    duration : 2,
                    lessons : [
                        {
                            id : 1,
                            title : 'React Native Basics',
                            resource_type : 'Video',
                            duration : '45 min',
                            status : 'Completed',
                            icon : LuCheck
                        },
                        {
                            id : 2,
                            title : 'UI Components',
                            resource_type : 'Note',
                            status : 'Completed',
                            icon : LuCheck
                        },
                        {
                            id : 3,
                            title : 'State Management',
                            resource_type : 'Video',
                            duration : '30 min',
                            icon : LuVideo
                        },
                        {
                            id : 4,
                            title : 'Navigation',
                            resource_type : 'Note',
                            icon : LuFile
                        },
                        {
                            id : 5,
                            title : 'API Integration',
                            resource_type : 'Video',
                            duration : '40 min',
                            icon : LuVideo
                        },
                        {
                            id : 6,
                            title : 'Testing and Debugging',
                            resource_type : 'Note',
                            icon : LuFile
                        },
                    ]
                },
                {
                    id : 2,
                    title : 'Wireframming and Prototyping',
                    sub_title : 'Learn how to create wireframes and prototypes to visualize your design ideas',
                    no_of_lessons : 2,
                    lesssons_completed : 2,
                    duration : 2,
                    lessons : [
                        {
                            id : 1,
                            title : 'SEO Basics',
                            resource_type : 'Video',
                            duration : '30 min',
                            status : 'Completed',
                            icon : LuCheck
                        },
                        {
                            id : 2,
                            title : 'Social Media Marketing',
                            resource_type : 'Note',
                            status : 'Completed',
                            icon : LuCheck
                        },
                    ]
                },
                {
                    id : 3,
                    title : 'User Testing',
                    sub_title : 'Discover how to conduct user testing to gather feedback and improve your designs',
                    no_of_lessons : 3,
                    lesssons_completed : 2,
                    duration : 2,
                    lessons : [
                        {
                            id : 1,
                            title : 'Project Planning',
                            resource_type : 'Video',
                            duration : '40 min',
                            status : 'Completed',
                            icon : LuCheck
                        },
                        {
                            id : 2,
                            title : 'Execution and Monitoring',
                            resource_type : 'Note',
                            status : 'Completed',
                            icon : LuCheck
                        },
                        {
                            id : 3,
                            title : 'Team Leadership',
                            resource_type : 'Video',
                            duration : '30 min',
                            status : 'Completed',
                            icon : LuVideo
                        },
                        
                    ]
                },
            ]
        },
        {
            id : 3,
            image : cosImg3,
            status : '',
            category : 'Data Science',
            title : 'Data Analysics with Python',
            text : 'Dive into data analysis using Python, pandas, and visualization libraries',
            author : 'Oluwaseun Adeyemi',
            modules : 5,
            percent : 0,
            modulesView : [
                {
                    id : 1,
                    title : 'Python Basics',
                    sub_title : 'Learn the basics of Python programming to start your data analysis journey',
                    no_of_lessons : 0,
                    lesssons_completed : 0,
                    duration : 2,
                },
                {
                    id : 2,
                    title : 'Data Manipulation with Pandas',
                    sub_title : 'Explore data manipulation techniques using the pandas library in Python.',
                    no_of_lessons : 0,
                    lesssons_completed : 0,
                    duration : 2,
                },
                {
                    id : 3,
                    title : 'Data Visualization',
                    sub_title : 'Learn how to create visualizations to effectively communicate your data insights',
                    no_of_lessons : 0,
                    lesssons_completed : 0,
                    duration : 2,
                },
                {
                    id : 4,
                    title : 'Advanced Data Analysis',
                    sub_title : 'Dive into advanced data analysis techniques to extract meaningful insights from your data.',
                    no_of_lessons : 0,
                    lesssons_completed : 0,
                    duration : 2,
                },
                {
                    id : 5,
                    title : 'Machine Learning Basics',
                    sub_title : 'Get an introduction to machine learning concepts and their applications in data analysis',
                    no_of_lessons : 0,
                    lesssons_completed : 0,
                    duration : 2,
                },
            ]
        },
        {
            id : 4,
            image : cosImg4,
            status : '',
            category : 'Development',
            title : 'Mobile App Development',
            text : 'Build native mobile applications for IOS and Android using React Native.',
            author : 'Chukwuemeka Nwosu',
            modules : 6,
            percent : 0,
            modulesView : [
                {
                    id : 1,
                    title : 'React Native Basics',
                    sub_title : 'Learn the basics of React Native to start building mobile applications',
                    no_of_lessons : 0,
                    lesssons_completed : 0,
                    duration : 2,
                },
                {
                    id : 2,
                    title : 'UI Components',
                    sub_title : 'Explore UI components in React Native to create a user-friendly interface.',
                    no_of_lessons : 0,
                    lesssons_completed : 0,
                    duration : 2,
                },
                {
                    id : 3,
                    title : 'State Management',
                    sub_title : 'Learn how to manage state in React Native applications to build dynamic interfaces.',
                    no_of_lessons : 0,
                    lesssons_completed : 0,
                    duration : 2,
                },
                {
                    id : 4,
                    title : 'Navigation',
                    sub_title : 'Discover how to implement navigation in React Native to create a seamless user experience',
                    no_of_lessons : 0,
                    lesssons_completed : 0,
                    duration : 2,
                },
                {
                    id : 5,
                    title : 'API Integration',
                    sub_title : 'Learn how to integrate APIs in React Native to fetch and display in your applications.',
                    no_of_lessons : 0,
                    lesssons_completed : 0,
                    duration : 2,
                },
                {
                    id : 6,
                    title : 'Testing and Debugging',
                    sub_title : 'Explore testing and debugging techniques to ensure the quality of your React Native applications',
                    no_of_lessons : 0,
                    lesssons_completed : 0,
                    duration : 2,
                },
            ]
        },
        {
            id :5,
            image : cosImg5,
            status : 'Completed',
            category : 'Marketing',
            title : 'Digital Marketing Fundamentals',
            text : 'Learn strategies for SEO, social media marketing, and content creation',
            author : 'Blessing Okafor',
            modules : 2,
            percent : 100,
            style : 'bg-[#E8F5EC] text-[#1A7A4A]',
            modulesView : [
                {
                    id : 1,
                    title : 'SEO Basics',
                    sub_title : 'Learn the fundamentals of Search Engine Optimization (SEO) to improve your websites visibility ',
                    no_of_lessons : 0,
                    lesssons_completed : 0,
                    duration : 2,
                },
                {
                    id : 2,
                    title : 'Social Media Marketing',
                    sub_title : 'Explore strategies for social media marketing to reach and engage your audience',
                    no_of_lessons : 0,
                    lesssons_completed : 0,
                    duration : 2,
                },
            ]

        },
        {
            id : 6,
            image : cosImg6,
            status : '',
            category : 'Business',
            title : 'Project Management Essentials',
            text : 'Master project planning, execution and team leadership skills',
            author : 'Ibrahim Mohammed',
            modules : 3,
            percent : 0,
            modulesView : [
                {
                    id : 1,
                    title : 'Project Planning',
                    sub_title : 'Learn how to plan projects effectively to ensure successful outcomes',
                    no_of_lessons : 0,
                    lesssons_completed : 0,
                    duration : 2,
                },
                {
                    id : 2,
                    title : 'Execution and Monitoring',
                    sub_title : 'Discover how to execute and monitor projects to stay on track and meet objectives',
                    no_of_lessons : 0,
                    lesssons_completed : 0,
                    duration : 2,
                },
                {
                    id : 3,
                    title : 'Team Leadership',
                    sub_title : 'Explore team leadership skills to manage and motivate your project team.',
                    no_of_lessons : 0,
                    lesssons_completed : 0,
                    duration : 2,
                },
            ]
        }
    ];