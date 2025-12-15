const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
    {
      id: 1,
      img: "/icons/wifi.svg",
    },
    {
      id: 2,
      img: "/icons/search.svg",
    },
    {
      id: 3,
      img: "/icons/user.svg",
    },
    {
      id: 4,
      img: "/icons/mode.svg",
    },
  ];


  const dockApps = [
    {
      id: "finder",
      name: "Portfolio", // was "Finder"
      icon: "finder.png",
      canOpen: true,
    },
    {
      id: "safari",
      name: "Articles", // was "Safari"
      icon: "safari.png",
      canOpen: true,
    },
    {
      id: "photos",
      name: "Gallery", // was "Photos"
      icon: "photos.png",
      canOpen: true,
    },
    {
      id: "contact",
      name: "Contact", // or "Get in touch"
      icon: "contact.png",
      canOpen: true,
    },
    {
      id: "terminal",
      name: "Skills", // was "Terminal"
      icon: "terminal.png",
      canOpen: true,
    },
    {
      id: "trash",
      name: "Archive", // was "Trash"
      icon: "trash.png",
      canOpen: false,
    },
  ];
  
  const blogPosts = [
    {
      id: 1,
      date: "Sep 2, 2025",
      title:
        "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
      image: "/images/blog1.png",
      link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
    },
    {
      id: 2,
      date: "Aug 28, 2025",
      title: "The Ultimate Guide to Mastering Three.js for 3D Development",
      image: "/images/blog2.png",
      link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
    },
    {
      id: 3,
      date: "Aug 15, 2025",
      title: "The Ultimate Guide to Mastering GSAP Animations",
      image: "/images/blog3.png",
      link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
    },
  ];