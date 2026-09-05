import React from 'react';
import ProjectImage from '../../assets/projects.png';
import BlurImage from '../../assets/Blur.png';
import BottomPattern from '../../assets/bottom_pattern_plain.png';
import { motion } from 'framer-motion';
import Button2 from '../Button2';
import Button1 from '../Button1';
import { Link, useLocation } from 'react-router-dom';
import NetwealthIndiaImage from '../../assets/PROJECT/WebDev/NetwealthIndia.png';
import GymWebsiteImage from '../../assets/PROJECT/WebDev/GymWebsite.png';
import LuxuryVacationsImage from '../../assets/PROJECT/WebDev/LuxuryVacations.png';
import BaysideSportsImage from '../../assets/PROJECT/WebDev/BaysideSports.png';
import AarohanImage from '../../assets/PROJECT/WebDesign/Aarohan.png';
import StudentDashboardImage from '../../assets/PROJECT/WebDesign/Student_Dashboard.png';
import FashionWebDesignImage from '../../assets/PROJECT/WebDesign/FashionWebDesign.png';

// Mobile Development Projects
import Mob1Image from '../../assets/PROJECT/MobileDev/Mob1.jpg';
import Mob3Image from '../../assets/PROJECT/MobileDev/Mob3.png';
import DreamStackImage from '../../assets/PROJECT/BackendSystems/DreamStack.jpg';


const borderColor = 'rgba(85,81,119,1)';
const borderHover = 'rgba(171,40,250,0.5)';
const innerBg = 'rgba(13,13,27,0.3)';

const cardVariants = {
  hidden: { opacity: 0, y: 80, rotateX: 90 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.18,
      ease: 'easeOut',
    },
  }),
};

// Mobile-specific animation variants (no 3D transforms)
const mobileCardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const PROJECTS = {
  'Web Development': [
    { 
      id: 1, 
      reverse: false, 
      title: 'NetWealth India', 
      subheader: 'Premium Website for a Modern Fintech Brand', 
      description: 'Built a sleek, responsive platform for a finance company offering credit, loans, insurance, and investment tools',
      image: NetwealthIndiaImage,
      videoUrl: 'https://player.vimeo.com/video/1107824461?badge=0&autopause=0&player_id=0&app_id=58479&controls=1&title=0&byline=0&portrait=0'
    },
    { 
      id: 2, 
      reverse: true, 
      title: 'Gym Website', 
      subheader: 'Modern, powerful, and built to move', 
      description: 'Sleek design. Fast access. Made for members who lift, train, and hustle, and for the trainers who keep them going.', 
      image: GymWebsiteImage,
      videoUrl: 'https://player.vimeo.com/video/1107824414?badge=0&autopause=0&player_id=0&app_id=58479&controls=1&title=0&byline=0&portrait=0'
    },
    { 
      id: 3, 
      reverse: false, 
      title: 'BlingxBeyond', 
      subheader: 'Timeless Fashion & Jewelry', 
      description: 'Designed a stunning e-commerce platform for premium jewelry and fashion accessories, where elegant design meets seamless shopping experience.', 
      image: LuxuryVacationsImage,
      videoUrl: 'https://player.vimeo.com/video/1107823130?badge=0&autopause=0&player_id=0&app_id=58479&controls=1&title=0&byline=0&portrait=0'
    },
    { 
      id: 4, 
      reverse: true, 
      title: 'Bayside Sports Redesign', 
      subheader: 'Scalable Online Store', 
      description: 'Revamped the site for speed, clarity, and energy so fans and players connect with the action in seconds.', 
      image: BaysideSportsImage,
      videoUrl: 'https://player.vimeo.com/video/1107824369?badge=0&autopause=0&player_id=0&app_id=58479&controls=1&title=0&byline=0&portrait=0'
    },
  ],
  'Web Design': [
    { 
      id: 1, 
      reverse: false, 
      title: 'Aarohan', 
      subheader: 'Education for every dream', 
      description: 'Designed a platform to uplift underserved students: accessible, inspiring, and built to break barriers.', 
      image: AarohanImage,
      videoUrl: 'https://player.vimeo.com/video/1107823493?badge=0&autopause=0&player_id=0&app_id=58479&controls=1&title=0&byline=0&portrait=0'
    },
    { 
      id: 2, 
      reverse: true, 
      title: 'Student Dashboard', 
      subheader: 'One hub. Everything students need', 
      description: 'Designed a platform to uplift underserved students: accessible, inspiring, and built to break barriers.', 
      image: StudentDashboardImage,
      videoUrl: 'https://player.vimeo.com/video/1107824205?badge=0&autopause=0&player_id=0&app_id=58479&controls=1&title=0&byline=0&portrait=0'
    },
  ],
  'App Development': [
    { id: 1, reverse: false, title: 'Stylish', subheader: 'Fashion & Shopping', description: 'A modern clothing shopping app with seamless user experience.', image: Mob1Image },
    { id: 2, reverse: true, title: 'Music App', subheader: 'Entertainment', description: 'Stream and discover music with a beautiful interface.', image: Mob3Image }
  ],
  'Backend Systems': [
    { 
      id: 1, 
      reverse: false, 
      title: 'DreamStack', 
      subheader: 'AI-Powered Website Builder', 
      description: 'Built a revolutionary platform that creates stunning websites with AI in minutes. Features bulk import functionality and automated project management.', 
      image: DreamStackImage,
      videoUrl: 'https://player.vimeo.com/video/1107824283?badge=0&autopause=0&player_id=0&app_id=58479&controls=1&title=0&byline=0&portrait=0'
    },
    { id: 2, reverse: true, title: 'Database Management', subheader: 'High-Performance Data Solutions', description: 'Designed and implemented database systems with optimization, backup strategies, and real-time synchronization.', image: ProjectImage },
    { id: 3, reverse: false, title: 'Cloud Infrastructure', subheader: 'AWS/Azure Deployment', description: 'Set up scalable cloud infrastructure with load balancing, auto-scaling, and monitoring systems.', image: ProjectImage },
  ],
};

const FILTERS = ['Web Development', 'Web Design', 'App Development', 'Backend Systems'];

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = React.useState(() => window.innerWidth < breakpoint);
  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [breakpoint]);
  return isMobile;
}

function useIsVerySmallScreen(breakpoint = 490) {
  const [isVerySmall, setIsVerySmall] = React.useState(() => window.innerWidth <= breakpoint);
  React.useEffect(() => {
    const onResize = () => setIsVerySmall(window.innerWidth <= breakpoint);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [breakpoint]);
  return isVerySmall;
}

const ProjectCard = ({ reverse, index, title, subheader, description, image, videoUrl, isMobile, isVerySmallScreen }) => {
  const [hover, setHover] = React.useState(false);
  const isFirstWebDev = title === 'NetWealth India';
  const isSecondWebDev = title === 'Gym Website';
  const isThirdWebDev = title === 'BlingxBeyond';
  const isFourthWebDev = title === 'Bayside Sports Redesign';
  const isFirstWebDesign = title === 'Aarohan';
  const isSecondWebDesign = title === 'Student Dashboard';
  const isThirdWebDesign = title === 'Fashion Website';
  const isFirstAppDev = title === 'Stylish';
  const isSecondAppDev = title === 'Music App';
  const isFirstBackend = title === 'DreamStack';
  const displayImage = image || (isFirstWebDev ? NetwealthIndiaImage : (isSecondWebDev ? GymWebsiteImage : ProjectImage));
  // For mobile, always image first, then text, but keep desktop sizing
  const cardContent = isMobile ? (
    <>
      {/* Image / Video Card */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 24, padding: isVerySmallScreen ? '0 12px' : '0 24px' }}>
        <div
          style={{
            position: 'relative',
            width: isFirstAppDev || isSecondAppDev ? 
              (isVerySmallScreen ? 240 : window.innerWidth <= 600 ? 280 : 300) : 
              (isVerySmallScreen ? 320 : window.innerWidth <= 600 ? 400 : 520),
            height: isFirstAppDev || isSecondAppDev ? 
              (isVerySmallScreen ? 460 : window.innerWidth <= 600 ? 520 : 560) : 
              (isVerySmallScreen ? 220 : window.innerWidth <= 600 ? 260 : 320),
            borderRadius: isFirstAppDev || isSecondAppDev ? '2.5rem' : '1rem',
            border: `2px solid ${hover ? borderHover : borderColor}`,
            background: '#18182a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            transition: 'border-color 0.3s, box-shadow 0.3s',
            boxShadow: hover ? '0 0 20px 0 rgba(171,40,250,0.4)' : 'none',
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div
            style={{
              width: isFirstAppDev || isSecondAppDev ? 
                (isVerySmallScreen ? 210 : window.innerWidth <= 600 ? 250 : 270) : 
                (isVerySmallScreen ? 280 : window.innerWidth <= 600 ? 360 : 480),
              height: isFirstAppDev || isSecondAppDev ? 
                (isVerySmallScreen ? 400 : window.innerWidth <= 600 ? 460 : 500) : 
                (isVerySmallScreen ? 180 : window.innerWidth <= 600 ? 220 : 280),
              borderRadius: isFirstAppDev || isSecondAppDev ? '2rem' : '0.7rem',
              border: `2px solid ${hover ? borderHover : borderColor}`,
              background: innerBg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 0,
              transition: 'border-color 0.3s, box-shadow 0.3s',
              boxShadow: hover ? '0 0 20px 0 rgba(171,40,250,0.4)' : 'none',
            }}
          >
            <img src={displayImage} alt="Project Screenshot" style={{
              width: '95%',
              height: '90%',
              objectFit: 'contain',
              display: 'block',
              borderRadius: isFirstAppDev || isSecondAppDev ? '1.5rem' : '0.7rem',
              background: '#18182a',
              margin: 0
            }} />
          </div>
        </div>
      </div>
      {/* Text/Info */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: isVerySmallScreen ? '0 12px' : '0 16px' }}>
        <div style={{ 
          fontWeight: 700, 
          fontSize: isVerySmallScreen ? '1.8rem' : window.innerWidth <= 600 ? '2.1rem' : '2.4rem', 
          color: '#fff', 
          marginBottom: 12, 
          lineHeight: 1.15, 
          textAlign: 'center' 
        }}>
          {title}
        </div>
        <div style={{ 
          color: '#bdbdbd', 
          fontWeight: 700, 
          fontSize: isVerySmallScreen ? '0.9rem' : window.innerWidth <= 600 ? '1rem' : '1.15rem', 
          marginBottom: 12, 
          textAlign: 'center', 
          fontStyle: 'italic' 
        }}>{subheader}</div>
        <div style={{ 
          color: '#e0e0e0', 
          fontSize: isVerySmallScreen ? '0.9rem' : window.innerWidth <= 600 ? '0.95rem' : '1.05rem', 
          marginBottom: 28, 
          lineHeight: 1.6, 
          textAlign: 'center' 
        }}>
          {description}
        </div>
        {isFirstAppDev ? (
          <Link to="/projects/appdev/1" style={{ alignSelf: 'center', textDecoration: 'none' }}>
            <Button2>View Project</Button2>
          </Link>
        ) : isSecondAppDev ? (
          <Link to="/projects/appdev/2" style={{ alignSelf: 'center', textDecoration: 'none' }}>
            <Button2>View Project</Button2>
          </Link>
        ) : isFirstWebDesign ? (
          <Link to="/projects/webdesign/1" style={{ alignSelf: 'center', textDecoration: 'none' }}>
            <Button2>View Project</Button2>
          </Link>
        ) : isSecondWebDesign ? (
          <Link to="/projects/webdesign/2" style={{ alignSelf: 'center', textDecoration: 'none' }}>
            <Button2>View Project</Button2>
          </Link>
        ) : isThirdWebDesign ? (
          <Link to="/projects/webdesign/3" style={{ alignSelf: 'center', textDecoration: 'none' }}>
            <Button2>View Project</Button2>
          </Link>
        ) : isFirstWebDev ? (
          <Link to="/projects/webdev/1" style={{ alignSelf: 'center', textDecoration: 'none' }}>
            <Button2>View Project</Button2>
          </Link>
        ) : isSecondWebDev ? (
          <Link to="/projects/webdev/2" style={{ alignSelf: 'center', textDecoration: 'none' }}>
            <Button2>View Project</Button2>
          </Link>
        ) : isThirdWebDev ? (
          <Link to="/projects/webdev/3" style={{ alignSelf: 'center', textDecoration: 'none' }}>
            <Button2>View Project</Button2>
          </Link>
        ) : isFourthWebDev ? (
          <Link to="/projects/webdev/4" style={{ alignSelf: 'center', textDecoration: 'none' }}>
            <Button2>View Project</Button2>
          </Link>
        ) : isFirstBackend ? (
          <Link to="/projects/backendsystems/1" style={{ alignSelf: 'center', textDecoration: 'none' }}>
            <Button2>View Project</Button2>
          </Link>
        ) : (
          <Button2 onClick={() => alert('View Project clicked!')} style={{ alignSelf: 'center' }}>View Project</Button2>
        )}
      </div>
    </>
  ) : (
    <>
      {/* Left: Info */}
      <div style={{ flex: 1, maxWidth: 520, textAlign: 'left' }}>
        <div style={{ fontWeight: 700, fontSize: '2.4rem', color: '#fff', marginBottom: 10, lineHeight: 1.15 }}>
          {title}
        </div>
        <div style={{ color: '#bdbdbd', fontWeight: 700, fontSize: '1.15rem', marginBottom: 10, fontStyle: 'italic' }}>{subheader}</div>
        <div style={{ color: '#e0e0e0', fontSize: '1.05rem', marginBottom: 24, lineHeight: 1.6 }}>
          {description}
        </div>
        {isFirstAppDev ? (
          <Link to="/projects/appdev/1" style={{ textDecoration: 'none' }}>
            <Button2>View Project</Button2>
          </Link>
        ) : isSecondAppDev ? (
          <Link to="/projects/appdev/2" style={{ textDecoration: 'none' }}>
            <Button2>View Project</Button2>
          </Link>
        ) : isFirstWebDesign ? (
          <Link to="/projects/webdesign/1" style={{ textDecoration: 'none' }}>
            <Button2>View Project</Button2>
          </Link>
        ) : isSecondWebDesign ? (
          <Link to="/projects/webdesign/2" style={{ textDecoration: 'none' }}>
            <Button2>View Project</Button2>
          </Link>
        ) : isThirdWebDesign ? (
          <Link to="/projects/webdesign/3" style={{ textDecoration: 'none' }}>
            <Button2>View Project</Button2>
          </Link>
        ) : isFirstWebDev ? (
          <Link to="/projects/webdev/1" style={{ textDecoration: 'none' }}>
            <Button2>View Project</Button2>
          </Link>
        ) : isSecondWebDev ? (
          <Link to="/projects/webdev/2" style={{ textDecoration: 'none' }}>
            <Button2>View Project</Button2>
          </Link>
        ) : isThirdWebDev ? (
          <Link to="/projects/webdev/3" style={{ textDecoration: 'none' }}>
            <Button2>View Project</Button2>
          </Link>
        ) : isFourthWebDev ? (
          <Link to="/projects/webdev/4" style={{ textDecoration: 'none' }}>
            <Button2>View Project</Button2>
          </Link>
        ) : isFirstBackend ? (
          <Link to="/projects/backendsystems/1" style={{ textDecoration: 'none' }}>
            <Button2>View Project</Button2>
          </Link>
        ) : (
          <Button2 onClick={() => alert('View Project clicked!')}>View Project</Button2>
        )}
      </div>
      {/* Right: Double Border Image Card with What We Build colors */}
      <div style={{ flex: 1.2, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 0 }}>
        <div
          style={{
            position: 'relative',
            width: isFirstAppDev || isSecondAppDev ? 280 : (window.innerWidth <= 600 ? 280 : 500),
            height: isFirstAppDev || isSecondAppDev ? 540 : (window.innerWidth <= 600 ? 360 : 320),
            borderRadius: isFirstAppDev || isSecondAppDev ? (window.innerWidth <= 768 ? '2.5rem' : '2.5rem') : '1rem',
            border: `2px solid ${hover ? borderHover : borderColor}`,
            background: '#18182a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            transition: 'border-color 0.3s, box-shadow 0.3s',
            boxShadow: hover ? '0 0 20px 0 rgba(171,40,250,0.4)' : 'none',
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div
            style={{
              width: isFirstAppDev || isSecondAppDev ? 250 : (window.innerWidth <= 600 ? 250 : 460),
              height: isFirstAppDev || isSecondAppDev ? 490 : (window.innerWidth <= 600 ? 320 : 280),
              borderRadius: isFirstAppDev || isSecondAppDev ? (window.innerWidth <= 768 ? '2rem' : '2rem') : '0.7rem',
              border: `2px solid ${hover ? borderHover : borderColor}`,
              background: innerBg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 0,
              transition: 'border-color 0.3s, box-shadow 0.3s',
              boxShadow: hover ? '0 0 20px 0 rgba(171,40,250,0.4)' : 'none',
            }}
          >
            <img src={displayImage} alt="Project Screenshot" style={{
              width: '95%',
              height: '90%',
              objectFit: 'contain',
              display: 'block',
              borderRadius: isFirstAppDev || isSecondAppDev ? (window.innerWidth <= 768 ? '1.5rem' : '0.7rem') : '0.7rem',
              background: '#18182a',
              margin: 0
            }} />
          </div>
        </div>
      </div>
    </>
  );
  return (
    <motion.div
      style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : (reverse ? 'row-reverse' : 'row'),
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 1200,
        margin: isMobile ? '32px auto' : '44px auto',
        background: 'none',
        borderRadius: 32,
        padding: isMobile ? '16px 0' : '20px 0',
        gap: isMobile ? 16 : 36,
        perspective: isMobile ? 'none' : 1200,
        width: '100%',
      }}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={isMobile ? mobileCardVariants : cardVariants}
    >
      {cardContent}
    </motion.div>
  );
};

const ProjectsContent = () => {
  const location = useLocation();
  // Get section from query param
  const params = new URLSearchParams(location.search);
  const sectionParam = params.get('section');
  const sectionMap = {
    webdesign: 'Web Design',
    webdev: 'Web Development',
    appdev: 'App Development',
    backend: 'Backend Systems',
  };
  const initialSection = sectionMap[sectionParam] || FILTERS[0];
  const [selected, setSelected] = React.useState(initialSection);
  const projects = PROJECTS[selected];
  const isMobile = useIsMobile(900); // Increased breakpoint for better tablet experience
  const isVerySmallScreen = useIsVerySmallScreen(600); // Increased breakpoint for better phone experience
  
  // Prevent auto-scroll when changing sections
  const handleSectionChange = (newSection) => {
    setSelected(newSection);
    // Prevent default scroll behavior
    window.scrollTo(0, window.scrollY);
  };
  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#0A0A1B', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: isMobile ? (isVerySmallScreen ? '0 16px' : '0 24px') : 0 }}>
      {/* Top Blur Effect */}
      <img src={BlurImage} alt="Blur" style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: isMobile ? '90vw' : '60vw', maxWidth: 900, minWidth: 180, opacity: 0.7, filter: 'blur(2px)', zIndex: 0, pointerEvents: 'none' }} />
      {/* Filter Buttons */}
      {isMobile ? (
        <div style={{
          display: 'flex',
          flexDirection: isVerySmallScreen ? 'row' : 'column',
          alignItems: 'center',
          width: '100%',
          marginTop: 20,
          marginBottom: 24,
          zIndex: 1,
          gap: isVerySmallScreen ? '0.25rem' : '0.5rem',
          flexWrap: isVerySmallScreen ? 'wrap' : 'nowrap',
          justifyContent: 'center',
        }}>
          {isVerySmallScreen ? (
            // 2x2 layout for very small screens
            <>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.25rem', width: '100%' }}>
                {FILTERS.slice(0, 2).map((filter) => (
                  selected === filter ? (
                    <Button2
                      key={filter}
                      onClick={() => handleSectionChange(filter)}
                      style={{ 
                        fontSize: '0.75rem',
                        padding: '8px 12px',
                        minWidth: 'auto',
                        width: 'calc(50% - 0.125rem)'
                      }}
                    >
                      {filter}
                    </Button2>
                  ) : (
                    <Button1
                      key={filter}
                      onClick={() => handleSectionChange(filter)}
                      style={{ 
                        fontSize: '0.75rem',
                        padding: '8px 12px',
                        minWidth: 'auto',
                        width: 'calc(50% - 0.125rem)'
                      }}
                    >
                      {filter}
                    </Button1>
                  )
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.25rem', width: '100%' }}>
                {FILTERS.slice(2, 4).map((filter) => (
                  selected === filter ? (
                    <Button2
                      key={filter}
                      onClick={() => handleSectionChange(filter)}
                      style={{ 
                        fontSize: '0.75rem',
                        padding: '8px 12px',
                        minWidth: 'auto',
                        width: 'calc(50% - 0.125rem)'
                      }}
                    >
                      {filter}
                    </Button2>
                  ) : (
                    <Button1
                      key={filter}
                      onClick={() => handleSectionChange(filter)}
                      style={{ 
                        fontSize: '0.75rem',
                        padding: '8px 12px',
                        minWidth: 'auto',
                        width: 'calc(50% - 0.125rem)'
                      }}
                    >
                      {filter}
                    </Button1>
                  )
                ))}
              </div>
            </>
          ) : (
            // 2x2 layout for larger mobile screens
            <>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', width: '100%' }}>
            {FILTERS.slice(0, 2).map((filter) => (
              selected === filter ? (
                <Button2
                  key={filter}
                  onClick={() => handleSectionChange(filter)}
                >
                  {filter}
                </Button2>
              ) : (
                <Button1
                  key={filter}
                  onClick={() => handleSectionChange(filter)}
                >
                  {filter}
                </Button1>
              )
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.5rem', width: '100%' }}>
            {FILTERS.slice(2, 4).map((filter) => (
              selected === filter ? (
                <Button2
                  key={filter}
                  onClick={() => handleSectionChange(filter)}
                >
                  {filter}
                </Button2>
              ) : (
                <Button1
                  key={filter}
                  onClick={() => handleSectionChange(filter)}
                >
                  {filter}
                </Button1>
              )
            ))}
          </div>
            </>
          )}
        </div>
      ) : (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.25rem',
          marginTop: 20,
          marginBottom: 36,
          zIndex: 1,
          flexWrap: 'nowrap',
          width: 'auto',
        }}>
          {FILTERS.map((filter) => (
            selected === filter ? (
              <Button2
                key={filter}
                onClick={() => handleSectionChange(filter)}
                style={{ minWidth: 0 }}
              >
                {filter}
              </Button2>
            ) : (
              <Button1
                key={filter}
                onClick={() => handleSectionChange(filter)}
                style={{ minWidth: 0 }}
              >
                {filter}
              </Button1>
            )
          ))}
        </div>
      )}
      {/* Project Cards */}
      {projects.map((proj, i) => (
        <ProjectCard
          key={proj.id}
          reverse={proj.reverse}
          index={i}
          title={proj.title}
          subheader={proj.subheader}
          description={proj.description}
          image={proj.image}
          videoUrl={proj.videoUrl}
          isMobile={isMobile}
          isVerySmallScreen={isVerySmallScreen}
        />
      ))}
      {/* Bottom Pattern */}
      <img src={BottomPattern} alt="Bottom Pattern" style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', maxWidth: 'none', zIndex: 0, pointerEvents: 'none', opacity: 0.4 }} />
    </div>
  );
};

export default ProjectsContent; 