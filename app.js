
const whoami = document.getElementById("whoami")
const contact = document.getElementById("contact")
const socials = document.getElementById("socials")
const blog = document.getElementById("blog")


whoami.addEventListener('click',()=>{
    new WinBox({
        title: '#whoami',
        width:'400px',
          height:'400px',
          background: "##01077C",
          x: '100',
          y: '100',
          html: "I am a cyber security professional with a background in law enforcement, I currently work in the information security team of a leading UK retailer responsible for thousands of users, assets and a vast array of technology and tools. Over the last decade I have built a great deal of experience around investigation management, incident response, intelligence management and cyber security. <br \><br \> I am an extremely passionate advocate for information security and feel I have a fantastic broad set of skills and flexibility that I can bring to an organisation. The skills I have honed over the past years compliment the cyber security field in particular my public facing roles have meant I have developed strong communications skills. This I believe blends well with my technical skills leading to me being a well rounded individual" 
        })
    new WinBox({
        title: 'Skills',
        width:'400px',
        x: "center",
        y: "center",
        height:'400px',
        background: "##01077C",
        html: "SIEM (Splunk)<br \>Vulnerability scanning<br \>Penetration testing<br \>Web Development<br \>JavaScript/Node.js<br \>Cloud infrastructure & testing<br \>API Testing<br \>Investigation interviewing<br \>Forensic awareness<br \>Managing firewall rules"
    })
})


contact.addEventListener('click',()=>{
    new WinBox({
    title: 'Contact',
    url: "https://nextapps-de.github.io/winbox/",
    width:'400px',
    height:'400px',
    background: "##01077C",
    x: '100',
    y: '100',
    html:'',
    })
})  
