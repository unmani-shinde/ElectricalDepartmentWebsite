import React, {useState, useEffect} from "react";
import BackgroundImage from "./background-image.png";
import DepartmentsSection from "./departments-section.png";
import { Parallax } from "react-parallax";
import { GoHomeFill } from "react-icons/go";
import { Card } from "@chakra-ui/react";




function ElectDeptLandingPage() {

    const [activeIndex, setActiveIndex] = useState(-1);

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
          window.scrollTo({
            top: aboutSection.offsetTop,
            behavior: "smooth",
             // Optional: Smooth scrolling animation
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
          <h2 style={{ fontSize: '30px' }}>{item}</h2>
          
        </li>
      ))}
    </ul>
</div>


            <div id='home-section' style={{ width: '100%', height: '88vh', position: 'relative',marginTop:'11vh' }}>
            <img src={BackgroundImage} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <h1 style={{ fontSize: '100px', marginTop: '-70vh', marginLeft: '2vw', color: '#088395', lineHeight: '13vh',zIndex:'5',letterSpacing:'1px' }}>
      The Department <br></br>of Electrical Engineering
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
                <div style={{width:'50%',height:'100%'}}></div>
                <div style={{width:'50%',height:'88vh',display:'flex',flexDirection:'column'}}>
                    <h1 style={{letterSpacing:'0.25vw',color:'#116D6E',textAlign:'right',marginRight:'10vw'}}>ABOUT</h1>
                    <p
          style={{
            fontSize: 'x-large',
            lineHeight: '1.6',
            textAlign:'right',
            marginRight:'10vw',
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
            marginTop: '20px',
            marginRight:'10vw',
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
            marginTop: '20px',
            textAlign:'right',
            marginRight:'10vw'
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
<h1 style={{textAlign:'center',color:'#0A4D68',transform:'scaleX(-1)',fontSize:'50px',marginTop:'1vh',letterSpacing:'0.125vw'}}>DEPARTMENTS</h1>
<div style={{justifyContent:'center',display:'flex',flexDirection:'row'}}>
{departments.map((dept, index) => (
  <div key={index} style={{border:'solid 1px black',boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',height:'70vh',marginRight:'2vw', width:'30%',padding:'0.5vh',marginLeft:index==0?"2vw":'0',marginTop:'-2vh'}}>
    <div style={{height:'20%'}}>
    <h1 style={{color:'black',transform:'scaleX(-1)',textAlign:'center',verticalAlign:'middle'}}>{dept}</h1>
    </div>
    <div style={{height:'50%',paddingLeft:'3vh',paddingRight:'3vh'}}>
    <p style={{color:'black',fontSize:'25px',transform:'scaleX(-1)',textAlign:'justify'}}>{departmentDescription[index]}</p>
    </div>
    <div style={{height:'30%',paddingLeft:'0.5vh',paddingRight:'0.5vh',justifyContent:'center'}}>
    <button          
        style={{
          backgroundColor: 'white',
          color: '#016A70',
          padding: '10px 20px',
          fontSize: '20px',
marginLeft:'10vw',
          marginTop:'1vw',
          transform:'scaleX(-1)',
          border: 'none',
          fontWeight:'700',
          borderRadius: '5px',
          alignSelf:'center',          
          cursor: 'pointer',
        }}
      >
        Learn More
      </button>
    
    
    </div>    
    
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
<h1 style={{textAlign:'center',color:'#0A4D68',fontSize:'35px',marginTop:'-60vh',letterSpacing:'0.125vw'}}>OUR TEAM</h1>
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