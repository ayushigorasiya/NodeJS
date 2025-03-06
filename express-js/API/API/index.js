const express = require('express');

const app = express();

const port = 9000;
const cors =require('cors');
app.use(cors());

app.get('/viewblog' ,(req , res) => {
   
    
    return res.status(200).send({
        success:true,
        message: "Shiv Sada Sahayate....!",
        
        
            "blogs": [
                {
                    "title": "Understanding Node.js",
                    "content": "Node.js is a runtime environment that allows you to run JavaScript on the server-side. It is built on Chrome's V8 JavaScript engine and is highly efficient for building scalable network applications.",
                    "author": "John Doe",
                    "published_date": "2025-03-05",
                    "categories": ["Technology", "Programming"],
                    "tags": ["Node.js", "JavaScript"],
                    "slug": "understanding-nodejs",
                    "excerpt": "An overview of Node.js and its benefits for backend development.",
                    "featured_image": "https://sourcebae.com/blog/wp-content/uploads/2023/09/Top-10-Uses-Of-Node-js.jpg"
                },
                {
                    "title": "The Rise of AI in Web Development",
                    "content": "Artificial Intelligence (AI) is transforming web development by automating processes, improving user experiences, and creating personalized interactions.",
                    "author": "Sarah Lee",
                    "published_date": "2025-03-06",
                    "categories": ["Technology", "AI"],
                    "tags": ["AI", "Web Development"],
                    "slug": "the-rise-of-ai-in-web-development",
                    "excerpt": "How AI is influencing web development and improving efficiency in web projects.",
                    "featured_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-M_r7bEyuBQzUODeKwobumjZ2bnoB_uelw&s"
                },
                {
                    "title": "Intro to Python for Beginners",
                    "content": "Python is a versatile programming language known for its ease of use and readability. It's one of the most popular languages for beginners and professionals alike.",
                    "author": "Alice Brown",
                    "published_date": "2025-03-07",
                    "categories": ["Programming", "Python"],
                    "tags": ["Python", "Beginners"],
                    "slug": "intro-to-python-for-beginners",
                    "excerpt": "A beginner's guide to learning Python programming.",
                    "featured_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA58mH1EAjc2uEChw2pMg-Lkm9iUhR1U6Fbw&s"
                },
                {
                    "title": "Exploring the World of Cybersecurity",
                    "content": "Cybersecurity is crucial in the digital age to protect systems and data from attacks. In this article, we'll look at basic cybersecurity principles and practices.",
                    "author": "Michael Johnson",
                    "published_date": "2025-03-08",
                    "categories": ["Technology", "Cybersecurity"],
                    "tags": ["Cybersecurity", "Data Protection"],
                    "slug": "exploring-the-world-of-cybersecurity",
                    "excerpt": "An overview of the fundamental concepts of cybersecurity.",
                    "featured_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFBd_Nuwt9YHM_K4PR7mXAH4wfTnDqpwY5g&s"
                },
                {
                    "title": "Mastering JavaScript Asynchronous Programming",
                    "content": "JavaScript's asynchronous nature allows you to execute tasks without blocking the main thread. In this article, we'll discuss callbacks, promises, and async/await.",
                    "author": "David Smith",
                    "published_date": "2025-03-09",
                    "categories": ["Programming", "JavaScript"],
                    "tags": ["JavaScript", "Asynchronous"],
                    "slug": "mastering-javascript-asynchronous-programming",
                    "excerpt": "Understanding asynchronous programming in JavaScript.",
                    "featured_image": "https://wpengine.com/wp-content/uploads/2021/07/jsheader-1024x535.png"
                },
                {
                    "title": "Understanding Cloud Computing",
                    "content": "Cloud computing offers flexible resources and on-demand access to computing power. Learn the key concepts of cloud services and how it benefits businesses.",
                    "author": "Emma Harris",
                    "published_date": "2025-03-10",
                    "categories": ["Technology", "Cloud Computing"],
                    "tags": ["Cloud Computing", "Business"],
                    "slug": "understanding-cloud-computing",
                    "excerpt": "An introduction to cloud computing and its benefits.",
                    "featured_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe-XatvMRLVXSbKuWEOie-OAXZiRDeXpzD-g&s"
                },
                {
                    "title": "The Future of Mobile Development",
                    "content": "Mobile development continues to grow, with new technologies such as 5G, augmented reality (AR), and virtual reality (VR) shaping the future of mobile apps.",
                    "author": "James Parker",
                    "published_date": "2025-03-11",
                    "categories": ["Technology", "Mobile Development"],
                    "tags": ["Mobile", "App Development"],
                    "slug": "the-future-of-mobile-development",
                    "excerpt": "Exploring the future trends in mobile app development.",
                    "featured_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr68FUxjLDEW0JRl6JJbZ2dc-qF_MJ0rHJiw&s"
                },
                {
                    "title": "Getting Started with React.js",
                    "content": "React.js is one of the most popular JavaScript libraries for building user interfaces. This article provides an introduction to React and how to get started.",
                    "author": "Chris Taylor",
                    "published_date": "2025-03-12",
                    "categories": ["Programming", "React"],
                    "tags": ["React", "JavaScript", "Web Development"],
                    "slug": "getting-started-with-reactjs",
                    "excerpt": "A beginner's guide to learning React.js.",
                    "featured_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR5nXQyIMnumtseUv1f5utR_Otrchajzt_Z_j1H7AJ-6BBCLDrB5Hgtog7F4D8GbfNI9Q&usqp=CAU"
                },
                {
                    "title": "The Importance of Data Structures in Programming",
                    "content": "Understanding data structures like arrays, linked lists, and trees is essential for writing efficient code. This post covers key data structures and their uses.",
                    "author": "Lisa Moore",
                    "published_date": "2025-03-13",
                    "categories": ["Programming", "Algorithms"],
                    "tags": ["Data Structures", "Algorithms"],
                    "slug": "importance-of-data-structures",
                    "excerpt": "Why data structures are critical for efficient programming.",
                    "featured_image": "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230706095706/intro-data-structure-%E2%80%93-1.png"
                },
                {
                    "title": "Exploring the Power of Machine Learning",
                    "content": "Machine learning is transforming industries by enabling systems to learn and make decisions based on data. This post explores the basics of machine learning and its applications.",
                    "author": "Robert Wilson",
                    "published_date": "2025-03-14",
                    "categories": ["Technology", "AI", "Machine Learning"],
                    "tags": ["Machine Learning", "AI", "Data Science"],
                    "slug": "exploring-the-power-of-machine-learning",
                    "excerpt": "An introduction to machine learning and its impact on various industries.",
                    "featured_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsx2ujRJVaSINDimsDbXia0XHNPVwT911ZKQ&s"
                },
                {
                    "title": "Building RESTful APIs with Node.js",
                    "content": "Node.js is a great platform for building RESTful APIs. This tutorial will walk you through the process of building a simple REST API with Node.js and Express.",
                    "author": "Tom Green",
                    "published_date": "2025-03-15",
                    "categories": ["Programming", "Node.js"],
                    "tags": ["Node.js", "API", "Backend"],
                    "slug": "building-restful-apis-with-nodejs",
                    "excerpt": "A step-by-step guide to creating a RESTful API using Node.js.",
                    "featured_image": "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1690021283/catalog/1682678770157633536/soh6vulgmzuwoucprwny.jpg"
                },
                {
                    "title": "Getting Started with Vue.js",
                    "content": "Vue.js is a progressive JavaScript framework used for building modern web applications. This guide covers the basics of Vue.js and how to start building with it.",
                    "author": "Sophia Miller",
                    "published_date": "2025-03-16",
                    "categories": ["Programming", "Vue.js"],
                    "tags": ["Vue.js", "JavaScript", "Frontend"],
                    "slug": "getting-started-with-vuejs",
                    "excerpt": "A beginner's guide to learning Vue.js.",
                    "featured_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcCV0xXW5T8GDkwcHCT8JQv-OCawhOxFXFpAsFigvqwu08oyLXhBcYqouTvP0hlIDyH14&usqp=CAU"
                },
                {
                    "title": "An Introduction to Git and GitHub",
                    "content": "Git is a distributed version control system, and GitHub is a platform for hosting Git repositories. This post explains how to use Git and GitHub for version control.",
                    "author": "Ethan Adams",
                    "published_date": "2025-03-17",
                    "categories": ["Programming", "Tools"],
                    "tags": ["Git", "GitHub", "Version Control"],
                    "slug": "introduction-to-git-and-github",
                    "excerpt": "A primer on using Git and GitHub for version control in software development.",
                    "featured_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTruSg_5SkyOEDkbNBUMv1uHgJvKvqxF2HL3Q&s"
                },
                {
                    "title": "How to Optimize Your Website for SEO",
                    "content": "Search engine optimization (SEO) is crucial for increasing your website's visibility. Learn the basic strategies and techniques to improve your site's SEO.",
                    "author": "Mia Scott",
                    "published_date": "2025-03-18",
                    "categories": ["Digital Marketing", "SEO"],
                    "tags": ["SEO", "Web Optimization"],
                    "slug": "how-to-optimize-your-website-for-seo",
                    "excerpt": "An essential guide to optimizing your website for search engines.",
                    "featured_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo2IS_OL_URSWPdTIws9u_YZlJ-m_6cZyjOQ&s"
                },
                {
                    "title": "Building Scalable Web Applications",
                    "content": "Scalability is key to handling large amounts of traffic. This article discusses best practices for building scalable web applications and infrastructure.",
                    "author": "Lucas Miller",
                    "published_date": "2025-03-19",
                    "categories": ["Technology", "Web Development"],
                    "tags": ["Scalability", "Web Applications"],
                    "slug": "building-scalable-web-applications",
                    "excerpt": "Learn the strategies and techniques for building scalable web applications.",
                    "featured_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPkQkfh1wawd5kgcBTWQgAaK_h3aELCpP_mA&s"
                },
                {
                    "title": "The Role of Web Accessibility in Modern Websites",
                    "content": "Web accessibility ensures that websites are usable by people with disabilities. This article explains why web accessibility is important and how to implement it.",
                    "author": "Oliver Hall",
                    "published_date": "2025-03-20",
                    "categories": ["Web Development", "Accessibility"],
                    "tags": ["Web Accessibility", "User Experience"],
                    "slug": "role-of-web-accessibility",
                    "excerpt": "Why web accessibility is essential for modern web development.",
                    "featured_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPqKJ1u4lAVQrbC3GewfMWOcP63gREIXZh1A&s"
                },
                {
                    "title": "How to Use CSS Grid Layout",
                    "content": "CSS Grid Layout is a powerful tool for creating responsive web designs. In this post, we'll dive into the basics of CSS Grid and how to use it for layout.",
                    "author": "Isabella Wright",
                    "published_date": "2025-03-21",
                    "categories": ["Web Development", "CSS"],
                    "tags": ["CSS", "Grid Layout", "Web Design"],
                    "slug": "how-to-use-css-grid-layout",
                    "excerpt": "A comprehensive guide to using CSS Grid Layout in web development.",
                    "featured_image": "https://uipencil.com/wp-content/uploads/2022/09/post_feature_cssgrid.webp"
                },
                {
                    "title": "The Power of Progressive Web Apps (PWAs)",
                    "content": "Progressive Web Apps (PWAs) combine the best of web and mobile apps. Learn how to build PWAs and why they are becoming an essential part of web development.",
                    "author": "Jack Evans",
                    "published_date": "2025-03-22",
                    "categories": ["Web Development", "PWA"],
                    "tags": ["PWA", "Web Apps"],
                    "slug": "power-of-progressive-web-apps",
                    "excerpt": "Why Progressive Web Apps are the future of web development.",
                    "featured_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSye9Vcl4baGIzc1wBn0s2fkVbBBNjbb2fNGg&s"
                },
                {
                    "title": "A Beginner's Guide to TypeScript",
                    "content": "TypeScript is a superset of JavaScript that adds static typing. This beginner's guide will help you get started with TypeScript and understand its benefits.",
                    "author": "Grace Lee",
                    "published_date": "2025-03-23",
                    "categories": ["Programming", "TypeScript"],
                    "tags": ["TypeScript", "JavaScript"],
                    "slug": "beginners-guide-to-typescript",
                    "excerpt": "A simple guide to understanding and using TypeScript.",
                    "featured_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT4x-7IQjBLN0NUJUe0c0d6Pl6qLyMDAo5Tw&s"
                },
                {
                    "title": "Building Real-Time Applications with WebSockets",
                    "content": "WebSockets allow you to create real-time applications by enabling full-duplex communication channels. This tutorial shows you how to use WebSockets for real-time apps.",
                    "author": "Oliver Green",
                    "published_date": "2025-03-24",
                    "categories": ["Programming", "Web Development"],
                    "tags": ["WebSockets", "Real-Time"],
                    "slug": "building-real-time-apps-with-websockets",
                    "excerpt": "An introduction to building real-time applications using WebSockets.",
                    "featured_image": "https://bugfender.com/wp-content/uploads/2024/03/featured_80_945px-1.webp"
                },
                {
                    "title": "Introduction to Blockchain Technology",
                    "content": "Blockchain technology enables secure, decentralized transactions. Learn how blockchain works and its applications in various industries.",
                    "author": "Samuel Brooks",
                    "published_date": "2025-03-25",
                    "categories": ["Technology", "Blockchain"],
                    "tags": ["Blockchain", "Cryptocurrency"],
                    "slug": "introduction-to-blockchain-technology",
                    "excerpt": "An overview of blockchain technology and its use cases.",
                    "featured_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxwkFSbE8fp0iZUiL_a-TTw5bO8jrlwrc8hg&s"
                }
            ]
                    
        })
        
    })


app.listen(port , (err) => {
    if(err) {
        console.log(err);
        return false;
    }
    console.log(`Server is running on port: http://localhost:${port}`);
})