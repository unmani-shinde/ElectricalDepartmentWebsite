import React, {useState} from "react";
import BackgroundImage from "./background-image.png";
import DepartmentsSection from "./departments-section.png";
// import { all_departments } from "./database";
// import { Parallax } from "react-parallax";
// import { GoHomeFill } from "react-icons/go";
// import { Card } from "@chakra-ui/react";
import ReactTyped from "react-typed";
import { useNavigate } from "react-router-dom";




function ElectDeptLandingPage() {

    const [activeIndex, setActiveIndex] = useState(-1);
    const [activeDeptIndex,setActiveDeptIndex] = useState(-1);
    const [isFlipped,setIsFlipped] = useState(false);

    const nav = useNavigate();

    const handleItemClick = (index) => {
        setActiveIndex(index);
    };

    const menuItems = [
        'Home',
        'About',
        'Departments',
        'Our Team',
      ];  


    const menuTitles = ['home-section','about-section','departments-section','team-section']
    
      const departments = ['Electronics and Telecommunication Engineering','Electronics Engineering','Electrical Engineering'];
      const departmentDescription = ['Electronics and Telecommunication Engineering is where the world connects and communicates. Dive into the realm of cutting-edge technologies, from mobile communication to signal processing, and become a part of shaping the digital future.','Explore the world of Electronics Engineering, where innovation sparks connections. Dive into circuits, devices, and technologies that power our digital future.','Welcome to Electrical Engineering, where energy transforms into possibilities. Discover the sparks of innovation that illuminate our world and power progress.']

      
      const scrollToAboutSection = (i) => {
        const aboutSection = document.getElementById(menuTitles[i]);
      
        if (aboutSection) {
          const navigationBarHeight = 10; // Adjust this to your actual navigation bar height in vh units
          const sectionTop = aboutSection.getBoundingClientRect().top + window.scrollY;
          
          window.scrollTo({
            top: sectionTop - navigationBarHeight * window.innerHeight / 100,
            behavior: "smooth",
          });
        }
      };

      
      


    return(
        
        <div style={{width:'100%',display:'flex',flexDirection:'column'}}>
            


            
<div style={{ width: '100%', height: '11vh', background: "#DEEEED", display: 'flex', flexDirection: 'row',justifyContent:'center',position:'fixed',zIndex:'10'}}>
<ul style={{ listStyleType: 'none', display: 'flex', color: 'black' }}>
      {menuItems.map((item, index) => (
        <li
          key={index}
          style={{
            marginRight: '4vw',
            cursor: 'pointer',
            borderBottom: activeIndex === index ? '4px solid #116D6E' : 'none',
            paddingBottom:'8vh',
            transition: 'color 0.3s ease',
            color: activeIndex === index ? "#116D6E":'black',
            marginTop:'-2vh'
          }}
          onClick={() => {
            handleItemClick(index);
            scrollToAboutSection(index);
          }}
          
        >
          <h2 style={{ fontSize: '25px',fontWeight:"700",paddingBottom:"1vh",marginTop:'4vh' }}>{item.toUpperCase()}</h2>
          
        </li>
      ))}
    </ul>
</div>


            <div id='home-section' style={{ width: '100%', height: '88vh', position: 'relative',marginTop:'11vh' }}>
            <img src={BackgroundImage} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Text" />
            <h1 style={{ fontSize: '90px', marginTop: '-70vh', marginLeft: '2vw', color: '#088395', lineHeight: '13vh',zIndex:'5',letterSpacing:'1px' }}>
      The Department <br></br>of Electrical {" "}<ReactTyped strings={["Engineering"]} typeSpeed={100} backSpeed={200} loop />
    </h1>
    <p style={{ fontSize: 'xx-large', marginBottom: '1vh',marginTop:'-5vh',marginLeft:'2vw',fontWeight:'400' }}>
        Empowering the Future with Innovation and Excellence
      </p>
      <button onClick={() => scrollToAboutSection(1)}          
        style={{
          backgroundColor: 'white',
          color: '#016A70',
          padding: '10px 20px',
          fontSize: '20px',
          marginLeft:'3vw',
          marginTop:'1vw',
          transform:'scale(1.25)',
          border: 'none',
          borderRadius: '5px',
          
          cursor: 'pointer',
        }}
      >
        Learn More
      </button>
   








                
               
 
            </div>


            <div id="about-section" style={{ width: '100%', height: '88vh', color:"#f4f4f4",display:'flex',flexDirection:'row'}}>
                <div style={{width:'40%',height:'100%'}}></div>
                <div style={{width:'60%',height:'88vh',display:'flex',flexDirection:'column'}}>
                    <h1 style={{letterSpacing:'0.25vw',color:'#116D6E',textAlign:'right',marginRight:'5vw',marginBottom:'-2vh'}}>ABOUT</h1>
                    <p
          style={{
            fontSize: 'x-large',
            lineHeight: '1.6',
            textAlign:'right',
            marginRight:'5vw',
            color: '#333',
          }}
        >
          The Department of Electrical Engineering at Veermata Jijabai Technological Institute (VJTI), Mumbai is a leader in the field of electrical and electronic engineering education, research, and innovation. With a rich history dating back to 1887, our department has consistently strived for excellence in shaping future electrical engineers.
        </p>

        <p
          style={{
            fontSize: 'x-large',
            lineHeight: '1.6',
            color: '#333',
            marginTop: '-1vh',
            marginRight:'5vw',
            textAlign:'right'
          }}
        >
          Our mission is to provide high-quality education, conduct groundbreaking research, and contribute to the advancement of electrical engineering knowledge.We are committed to fostering creativity, critical thinking, and innovation among our students.
        </p>

        <p
          style={{
            fontSize: 'x-large',
            lineHeight: '1.6',
            color: '#333',
            marginTop: '-1vh',
            textAlign:'right',
            marginRight:'5vw'
          }}
        >
          Join us in exploring the world of electrical engineering, where
          possibilities are limitless, and the future is electric.
        </p>


                </div>

            
            </div>

            <div
  id="departments-section"
  style={{
    width: '100%',
    height: '89vh',
    color: '#f4f4f4',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    transform:'scaleX(-1)',
    backgroundColor: '#1B9C85',
    backgroundImage: `url(${DepartmentsSection})`, // Set the image as background
    backgroundSize: 'cover', // Adjust as needed
    backgroundRepeat: 'no-repeat', // Adjust as needed
  }}
>
<h1 style={{textAlign:'center',color:'#0A4D68',transform:'scaleX(-1)',fontSize:'50px',marginTop:'-3vh',letterSpacing:'0.125vw'}}>DEPARTMENTS</h1>
<div style={{justifyContent:'center',display:'flex',flexDirection:'row'}}>
{departments.map((dept, index) => (
  <div
    key={index}
    style={{
      border: 'solid 1px black',
      alignSelf: 'center',
      justifyContent: 'center',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
      height: '75vh',
      marginRight: '2vw',
      width: '30%',
      padding: '0.5vh',
      marginLeft: index === 0 ? '2vw' : '0',
      marginTop: '-5vh',
      transform:
        isFlipped && index === activeDeptIndex ? 'rotateY(180deg)' : 'none',
      transition: 'transform 0.5s',
      display: 'flex', // Added display flex
      flexDirection: 'column', // Added flex direction
      alignItems: 'center', // Center horizontally
      
    }}
  >
    {isFlipped && index === activeDeptIndex ? (
      <div
        style={{
          height: '100%',
          width: '100%',
          paddingLeft: '0.5vh',
          paddingRight: '0.5vh',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Center horizontally
            justifyContent: 'center', // Center vertically
            width: '100%',
            height: '100%',
            alignSelf:'center'
          }}
        >
          <button
            style={{
              backgroundColor: '#016A70',
              color: 'white',
              padding: '1vw',
              fontSize: '20px',
              border: 'none',
              fontWeight: '700',
              borderRadius: '5px',
              marginTop: '1vh',
              marginBottom: '4vh',
              cursor: 'pointer',
              width: '50%',
            }}
            onClick={() => {
              const route_state = {
                engineeringIndex: activeDeptIndex,
              };
            
              const inputString = departments[activeDeptIndex];
              const convertedString = inputString.toLowerCase().replace(/\s+/g, '-');
            
              // nav(`/virtual-lab/${convertedString}`);
              nav(`/virtual-lab/${convertedString}`, { state: route_state });
            }}
            
          >
            View Virtual Lab
          </button>
          <button
            style={{
              backgroundColor: '#016A70',
              color: 'white',
              padding: '1vw',
              fontSize: '20px',
              border: 'none',
              fontWeight: '700',
              borderRadius: '5px',
              marginTop: '1vh',
              marginBottom: '1vh',
              cursor: 'pointer',
              width: '50%',
            }}
          >
            View Faculty
          </button>
        </div>
      </div>
    ) : (
      <div style={{ height: '100%', width: '100%' }}>
        <div style={{ height: '20%' }}>
          <h1
            style={{
              color: 'black',
              transform: 'scaleX(-1)',
              textAlign: 'center',
              lineHeight:'1',
              verticalAlign: 'middle',
            }}
          >
            {dept}
          </h1>
        </div>
        <div style={{ height: '50%', paddingLeft: '3vh', paddingRight: '3vh' }}>
          <p
            style={{
              color: 'black',
              fontSize: '23px',
              transform: 'scaleX(-1)',
              textAlign: 'left',
              marginTop:'-2vh',
            }}
          >
            {departmentDescription[index]}
          </p>
        </div>
        <div style={{ height: '30%', paddingLeft: '0.5vh', paddingRight: '0.5vh', justifyContent: 'center' }}>
          <button
            style={{
              backgroundColor: 'white',
              color: '#016A70',
              padding: '10px 20px',
              fontSize: '20px',
              marginLeft: '10vw',
              marginTop: '4vw',
              transform: 'scaleX(-1)',
              border: 'none',
              fontWeight: '700',
              borderRadius: '5px',
              alignSelf: 'center',
              cursor: 'pointer',
            }}
            onClick={() => {
              setActiveDeptIndex(index);
              setIsFlipped(true);
            }}
          >
            Learn More
          </button>
        </div>
      </div>
    )}
  </div>
))}

</div>
</div>


<div
  id="team-section"
  style={{
    width: '100%',
    height: '89vh',
    color: '#f4f4f4',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#F4F4F4', // Set the image as background
  }}
>
<h1 style={{textAlign:'center',color:'#0A4D68',fontSize:'35px',marginTop:'-50vh',letterSpacing:'0.125vw'}}>OUR TEAM</h1>
<p
          style={{
            fontSize: 'x-large',
            lineHeight: '1.6',
            color: '#333',
            marginTop: '20px',
            textAlign:'center',
            paddingLeft:'4vw',
            paddingRight:'4vw'
          }}
        >
          Meet the visionary minds behind our department's success. Our dedicated faculty and talented students collaborate to drive innovation, research, and excellence. Together, we shape the future of Electrical Engineering and inspire the next generation of leaders in the field.
        </p>
</div>


            



        </div>

            

            
            




           
        
    
    )
    
}

export default ElectDeptLandingPage;