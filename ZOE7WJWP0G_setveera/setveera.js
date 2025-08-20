//STYLING ON NAV TOGGLES//
function toggleNavbar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.right = sidebar.style.right === "0px" ? "-260px" : "0px";
}

function goHome() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.right = "-260px";
}

function aboutus() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.right = "-260px";
}

function department() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.right = "-260px";
}

function Features() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.right = "-260px";
}

function Contact() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.right = "-260px";
}



//STYLING ON SETINTERVAL//
let count = 0;
const counterElement = document.getElementById("counter");

const interval = setInterval(() => {
    if (count <= 25) {
        counterElement.textContent = count + "+";
        count++;
    } else {
        clearInterval(interval);
    }
}, 550);



let ex1 = 0;
const part1 = document.getElementById("extra1");

const partsub1 = setInterval(() => {
    if (ex1 <= 25) {
        part1.textContent = ex1 + "+";
        ex1++;
    } else {
        clearInterval(partsub1);
    }
}, 550);




let value = 0;
const valueelement = document.getElementById("valueincr");

const increse = setInterval(() => {
    if (value <= 250) {
        valueelement.textContent = value + "+";
        value++;
    } else {
        clearInterval(increse);
    }
}, 60);



let ex2 = 0;
const part2 = document.getElementById("extra2");

const partsub2 = setInterval(() => {
    if (ex2 <= 500) {
        part2.textContent = ex2 + "+";
        ex2++;
    } else {
        clearInterval(partsub2);
    }
}, 30);





let value2 = 0;
const valueelement2 = document.getElementById("valueincr2");

const increse2 = setInterval(() => {
    if (value2 <= 500) {
        valueelement2.textContent = value2 + "+";
        value2++;
    } else {
        clearInterval(increse2);
    }
}, 30);




let ex3 = 0;
const part3 = document.getElementById("extra3");

const partsub3 = setInterval(() => {
    if (ex3 <= 150) {
        part3.textContent = ex3 + "+";
        ex3++;
    } else {
        clearInterval(partsub3);
    }
}, 100);





let value3 = 0;
const valueelement3 = document.getElementById("valueincr3");

const increse3 = setInterval(() => {
    if (value3 <= 150) {
        valueelement3.textContent = value3 + "+";
        value3++;
    } else {
        clearInterval(increse3);
    }
}, 100);




let ex4 = 0;
const part4 = document.getElementById("extra4");

const partsub4 = setInterval(() => {
    if (ex4 <= 250) {
        part4.textContent = ex4 + "+";
        ex4++;
    } else {
        clearInterval(partsub4);
    }
}, 60);



// STYLING PAGE FOR EVENT , MOU , ALUMINI , GALARY , PLACEMENT//

const buttons = ["event"];

buttons.forEach(id => {
    const btn = document.getElementById(id);


    btn.onclick = () => {
        const newPage = window.open("", "_blank");

        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >UPCOMING EVENTS</h2>
          </div>
        `;

        const footerCard = `
          <div style="padding: 20px; background-color: #000957; color: white; text-align: center; height:25vh">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>Event-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                }
              </style>
            </head>
            <body>
              ${headerCard}
              <div style="min-height: 400px; padding: 40px; text-align: left;">
                <h2 style="color:#000957;">WEBCRAFT EVENT <span style="color:#EA2F14;">25-08-2025</span></h2>
                <h3 style="color:#7F8CAA; text-align:left; font-size:15px;">WeCraft is an exciting front-end web development competition designed to ignite creativity and technical skills among students. Participants will be challenged to design and build a full-fledged website for a fictional School of Engineering and Technology using only front-end technologies like HTML, CSS, and JavaScript.</h3>
                <div style="text-align: center;">
                <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1754585147/WhatsApp_Image_2025-08-07_at_22.12.59_yucyj1.jpg" style="height:30vh; width:80%;"></div>
              </div>
              <hr>
              <div style="min-height: 400px; padding: 40px; text-align: left;">
                <h2 style="color:#000957;">TECH-FEST EVENT <span style="color:#EA2F14;">20-09-2025</span></h2>
                <h3 style="color:#7F8CAA; text-align:left; font-size:15px;">WeCraft is an exciting front-end web development competition designed to ignite creativity and technical skills among students. Participants will be challenged to design and build a full-fledged website for a fictional School of Engineering and Technology using only front-end technologies like HTML, CSS, and JavaScript.</h3>
                <div style="text-align: center;">
                <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1754585900/14660699-node_emap_Techfest_Awards_Nov_23-31_Large_ersx4o.jpg" style="height:30vh; width:80%;"></div>
              </div>
              
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };
});



const buttonsxl1 = ["eventt"];

buttonsxl1.forEach(id => {
    const btn = document.getElementById(id);


    btn.onclick = () => {
        const newPage = window.open("", "_blank");

        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >UPCOMING EVENTS</h2>
          </div>
        `;

        const footerCard = `
          <div style="padding: 20px; background-color: #000957; color: white; text-align: center; height:25vh">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>Event-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                }
              </style>
            </head>
            <body>
              ${headerCard}
              <div style="min-height: 400px; padding: 40px; text-align: left;">
                <h2 style="color:#000957;">WEBCRAFT EVENT <span style="color:#EA2F14;">25-08-2025</span></h2>
                <h3 style="color:#7F8CAA; text-align:left; font-size:15px;">WeCraft is an exciting front-end web development competition designed to ignite creativity and technical skills among students. Participants will be challenged to design and build a full-fledged website for a fictional School of Engineering and Technology using only front-end technologies like HTML, CSS, and JavaScript.</h3>
                <div style="text-align: center;">
                <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1754585147/WhatsApp_Image_2025-08-07_at_22.12.59_yucyj1.jpg" style="height:30vh; width:80%;"></div>
              </div>
              <hr>
              <div style="min-height: 400px; padding: 40px; text-align: left;">
                <h2 style="color:#000957;">TECH-FEST EVENT <span style="color:#EA2F14;">20-09-2025</span></h2>
                <h3 style="color:#7F8CAA; text-align:left; font-size:15px;">WeCraft is an exciting front-end web development competition designed to ignite creativity and technical skills among students. Participants will be challenged to design and build a full-fledged website for a fictional School of Engineering and Technology using only front-end technologies like HTML, CSS, and JavaScript.</h3>
                <div style="text-align: center;">
                <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1754585900/14660699-node_emap_Techfest_Awards_Nov_23-31_Large_ersx4o.jpg" style="height:30vh; width:80%;"></div>
              </div>
              
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };
});




const button = ["The Alumini"];

button.forEach(id => {
    const btn = document.getElementById(id);


    btn.onclick = () => {
        const newPage = window.open("", "_blank");

        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >ALUMINI</h2>
          </div>
        `;

        const footerCard = `
          <div style="padding: 20px; background-color: #000957; color: white; text-align: center; height:25vh">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>Alumini-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                }
              </style>
            </head>
            <body>
              ${headerCard}
              <div style="min-height: 500px; padding: 40px; text-align: left;">
                <h2 style="color:#000957;">About Alumini</h2>
                <h3 style="color:#7F8CAA; text-align:left; font-size:15px;"><span style="color:#FF9B17; font-size:15px;">Global: </span>DSU boasts over 20,000 alumni spread across various industries and countries, contributing to fields like engineering, medicine, agriculture, and technology.</h3>
                <h3 style="color:#7F8CAA; text-align:left; font-size:15px;"><span style="color:#FF9B17; font-size:15px;">Career Impact: </span> Many DSU graduates have secured positions in top companies through the university’s strong placement support and industry collaborations.</h3>
                 <h3 style="color:#7F8CAA; text-align:left; font-size:15px;"><span style="color:#FF9B17; font-size:15px;">Alumni Engagement: </span>The university encourages alumni to stay connected through events, mentorship programs, and networking opportunities. Alumni often return to campus to share their experiences, offer guidance, and support current students.</h3>
                 <h3 style="color:#7F8CAA; text-align:left; font-size:15px;"><span style="color:#FF9B17; font-size:15px;">Recognition & Pride: </span>DSU takes pride in the achievements of its alumni, celebrating their success stories and highlighting their contributions to society and industry.</h3>
                
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };
});



const buttonxl2 = ["The Aluminii"];

buttonxl2.forEach(id => {
    const btn = document.getElementById(id);


    btn.onclick = () => {
        const newPage = window.open("", "_blank");

        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >ALUMINI</h2>
          </div>
        `;

        const footerCard = `
          <div style="padding: 20px; background-color: #000957; color: white; text-align: center; height:25vh">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>Alumini-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                }
              </style>
            </head>
            <body>
              ${headerCard}
              <div style="min-height: 500px; padding: 40px; text-align: left;">
                <h2 style="color:#000957;">About Alumini</h2>
                <h3 style="color:#7F8CAA; text-align:left; font-size:15px;"><span style="color:#FF9B17; font-size:15px;">Global: </span>DSU boasts over 20,000 alumni spread across various industries and countries, contributing to fields like engineering, medicine, agriculture, and technology.</h3>
                <h3 style="color:#7F8CAA; text-align:left; font-size:15px;"><span style="color:#FF9B17; font-size:15px;">Career Impact: </span> Many DSU graduates have secured positions in top companies through the university’s strong placement support and industry collaborations.</h3>
                 <h3 style="color:#7F8CAA; text-align:left; font-size:15px;"><span style="color:#FF9B17; font-size:15px;">Alumni Engagement: </span>The university encourages alumni to stay connected through events, mentorship programs, and networking opportunities. Alumni often return to campus to share their experiences, offer guidance, and support current students.</h3>
                 <h3 style="color:#7F8CAA; text-align:left; font-size:15px;"><span style="color:#FF9B17; font-size:15px;">Recognition & Pride: </span>DSU takes pride in the achievements of its alumni, celebrating their success stories and highlighting their contributions to society and industry.</h3>
                
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };
});





const button2 = ["MOU"];

button2.forEach(id => {
    const btn = document.getElementById(id);


    btn.onclick = () => {
        const newPage = window.open("", "_blank");

        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >MOU</h2>
          </div>
        `;

        const footerCard = `
          <div style="padding: 20px; background-color: #000957; color: white; text-align: center; height:25vh">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>MOU-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                }
              </style>
            </head>
            <body>
              ${headerCard}
              <div style="min-height: 400px; padding: 40px; text-align: left;">
                <h2 style="color:#000957;">Memorandum of Understand(MOU)</h2>
                <h3 style="color:#7F8CAA; text-align:left; font-size:10px;">Dhanalakshmi Srinivasan University (DSU), Tiruchirappalli, through its Human Resource Development Centre (HRDC), has signed a Memorandum of Understanding (MoU) with leading industry partners like ZF Rane, Chennai. This collaboration aims to enhance student employability by offering industry-aligned training, internships, and placement support. The MoU facilitates knowledge exchange, skill development programs, and hands-on exposure to real-world practices, ensuring DSU graduates are career-ready and competitive in the job market.</h3>
                <div style="text-align: center;">
                <img src="https://res.cloudinary.com/daom3xsqm/image/upload/v1754590448/Proud_Moment_for_DSU_HRDC_of_Dhanalakshmi_Srinivasan_University_Trichy_has_officially_si_znbhze.jpg" style="height:30vh; width:80%;"></div>
                <h3 style="color:darkgrey; font-size:15px;">We’re thrilled to announce a strategic Memorandum of Understanding (MoU) between Dhanalakshmi Srinivasan University (DSU), Trichy and Clock Edge Technology, Chennai — a dynamic step toward transforming academic excellence into industry readiness.</h3>
              </div>
              <hr>
              <div style="min-height: 400px; padding: 40px; text-align: left;">
                <div style="text-align: center;">
                <img src="https://res.cloudinary.com/daom3xsqm/image/upload/v1754590401/Proud_Moment_for_DSU_HRDC_of_Dhanalakshmi_Srinivasan_University_Trichy_has_officially_si_2_gpw8ow.jpg" style="height:30vh; width:80%;"></div>
                <h3 style="color:darkgrey; font-size:15px;">We are proud to announce a strategic Memorandum of Understanding (MoU) between Dhanalakshmi Srinivasan University (DSU), Trichy and AECC Study Abroad Consultants, Coimbatore — a partnership aimed at empowering students with international academic opportunities.</h3>
              </div>
                <hr>
               <div style="min-height: 400px; padding: 40px; text-align: left;">
                <div style="text-align: center;">
                <img src="https://res.cloudinary.com/daom3xsqm/image/upload/v1754590376/Proud_Moment_for_DSU_HRDC_of_Dhanalakshmi_Srinivasan_University_Trichy_has_officially_si_1_nhehny.jpg" style="height:30vh; width:80%;"></div>
                <h3 style="color:darkgrey; font-size:15px;">We’re thrilled to announce that Dhanalakshmi Srinivasan University (DSU), Tiruchirappalli has signed a strategic Memorandum of Understanding (MoU) with ATRIBS IT Solutions Pvt. Ltd., Chennai, marking a significant milestone in our commitment to industry-integrated education.</h3>
              </div>
                <hr>
               <div style="min-height: 400px; padding: 40px; text-align: left;">
                <div style="text-align: center;">
                <img src="https://res.cloudinary.com/daom3xsqm/image/upload/v1754590322/Exciting_News_from_Dhanalakshmi_Srinivasan_University_We_re_thrilled_to_share_that_the_H_m5g6mu.jpg" style="height:30vh; width:80%;"></div>
                <h3 style="color:darkgrey; font-size:15px;">We’re delighted to announce a strategic Memorandum of Understanding (MoU) between Dhanalakshmi Srinivasan University (DSU), Tiruchirappalli and Career Tiq, Coimbatore, a leading career development and employability enhancement organization.</h3>
              </div>
                <hr>
               <div style="min-height: 400px; padding: 40px; text-align: left;">
                <div style="text-align: center;">
                <img src="https://res.cloudinary.com/daom3xsqm/image/upload/v1754590291/Exciting_News_from_Dhanalakshmi_Srinivasan_University_We_re_thrilled_to_share_that_the_H_5_wqd65x.jpg" style="height:30vh; width:80%;"></div>
                <h3 style="color:darkgrey; font-size:15px;">We’re proud to announce a forward-thinking Memorandum of Understanding (MoU) between Dhanalakshmi Srinivasan University (DSU), Tiruchirappalli and Speshway Tiq, Hyderabad, a rising force in career development and tech-driven training solutions.</h3>
              </div>
                <hr>
               <div style="min-height: 400px; padding: 40px; text-align: left;">
                <div style="text-align: center;">
                <img src="https://res.cloudinary.com/daom3xsqm/image/upload/v1754590265/Exciting_News_from_Dhanalakshmi_Srinivasan_University_We_re_thrilled_to_share_that_the_H_4_kazxtp.jpg" style="height:30vh; width:80%;"></div>
                <h3 style="color:darkgrey; font-size:15px;">We are proud to announce a strategic Memorandum of Understanding (MoU) between Dhanalakshmi Srinivasan University (DSU), Tiruchirappalli) and Talentio, Hyderabad, a leading provider of tech-driven career solutions and talent transformation services.</h3>
              </div>
              
                <hr>
               <div style="min-height: 400px; padding: 40px; text-align: left;">
                <div style="text-align: center;">
                <img src="https://res.cloudinary.com/daom3xsqm/image/upload/v1754590237/Exciting_News_from_Dhanalakshmi_Srinivasan_University_We_re_thrilled_to_share_that_the_H_3_mz4vhh.jpg" style="height:30vh; width:80%;"></div>
                <h3 style="color:darkgrey; font-size:15px;">We are pleased to announce a significant Memorandum of Understanding (MoU) between Dhanalakshmi Srinivasan University (DSU), Tiruchirappalli and Pyramid, Hyderabad, a leading organization in career development and global education services.</h3>
              </div>
              <hr>
              <div style="min-height: 400px; padding: 40px; text-align: left;">
                <div style="text-align: center;">
                <img src="https://res.cloudinary.com/daom3xsqm/image/upload/v1754590211/Exciting_News_from_Dhanalakshmi_Srinivasan_University_We_re_thrilled_to_share_that_the_H_2_p3tpd9.jpg" style="height:30vh; width:80%;"></div>
                <h3 style="color:darkgrey; font-size:15px;">We are proud to announce a strategic Memorandum of Understanding (MoU) between Dhanalakshmi Srinivasan University (DSU), Tiruchirappalli and Service to Provide, Mysore, Karnataka, formalized in Hyderabad. This partnership marks a significant step toward enhancing student development through cross-regional collaboration.</h3>
              </div>
              <hr>
              <div style="min-height: 400px; padding: 40px; text-align: left;">
                <div style="text-align: center;">
                <img src="https://res.cloudinary.com/daom3xsqm/image/upload/v1754590103/Exciting_News_from_Dhanalakshmi_Srinivasan_University_We_re_thrilled_to_share_that_the_H_1_ywdzbj.jpg" style="height:30vh; width:80%;"></div>
                <h3 style="color:darkgrey; font-size:15px;">Dhanalakshmi Srinivasan University (DSU), Tiruchirappalli, proudly announces a strategic Memorandum of Understanding (MoU) with bitsCrunch, a leading blockchain analytics company based in Germany. This international collaboration, formalized in Hyderabad, marks a transformative step in DSU’s mission to provide cutting-edge education and global exposure to its students.</h3>
                
              </div>
              
              
              
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };
});


const button2xl3 = ["MOUU"];

button2xl3.forEach(id => {
    const btn = document.getElementById(id);


    btn.onclick = () => {
        const newPage = window.open("", "_blank");

        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >MOU</h2>
          </div>
        `;

        const footerCard = `
          <div style="padding: 20px; background-color: #000957; color: white; text-align: center; height:25vh">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>MOU-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                }
              </style>
            </head>
            <body>
              ${headerCard}
              <div style="min-height: 400px; padding: 40px; text-align: left;">
                <h2 style="color:#000957;">Memorandum of Understand(MOU)</h2>
                <h3 style="color:#7F8CAA; text-align:left; font-size:10px;">Dhanalakshmi Srinivasan University (DSU), Tiruchirappalli, through its Human Resource Development Centre (HRDC), has signed a Memorandum of Understanding (MoU) with leading industry partners like ZF Rane, Chennai. This collaboration aims to enhance student employability by offering industry-aligned training, internships, and placement support. The MoU facilitates knowledge exchange, skill development programs, and hands-on exposure to real-world practices, ensuring DSU graduates are career-ready and competitive in the job market.</h3>
                <div style="text-align: center;">
                <img src="https://res.cloudinary.com/daom3xsqm/image/upload/v1754590448/Proud_Moment_for_DSU_HRDC_of_Dhanalakshmi_Srinivasan_University_Trichy_has_officially_si_znbhze.jpg" style="height:30vh; width:80%;"></div>
                <h3 style="color:darkgrey; font-size:15px;">We’re thrilled to announce a strategic Memorandum of Understanding (MoU) between Dhanalakshmi Srinivasan University (DSU), Trichy and Clock Edge Technology, Chennai — a dynamic step toward transforming academic excellence into industry readiness.</h3>
              </div>
              <hr>
              <div style="min-height: 400px; padding: 40px; text-align: left;">
                <div style="text-align: center;">
                <img src="https://res.cloudinary.com/daom3xsqm/image/upload/v1754590401/Proud_Moment_for_DSU_HRDC_of_Dhanalakshmi_Srinivasan_University_Trichy_has_officially_si_2_gpw8ow.jpg" style="height:30vh; width:80%;"></div>
                <h3 style="color:darkgrey; font-size:15px;">We are proud to announce a strategic Memorandum of Understanding (MoU) between Dhanalakshmi Srinivasan University (DSU), Trichy and AECC Study Abroad Consultants, Coimbatore — a partnership aimed at empowering students with international academic opportunities.</h3>
              </div>
                <hr>
               <div style="min-height: 400px; padding: 40px; text-align: left;">
                <div style="text-align: center;">
                <img src="https://res.cloudinary.com/daom3xsqm/image/upload/v1754590376/Proud_Moment_for_DSU_HRDC_of_Dhanalakshmi_Srinivasan_University_Trichy_has_officially_si_1_nhehny.jpg" style="height:30vh; width:80%;"></div>
                <h3 style="color:darkgrey; font-size:15px;">We’re thrilled to announce that Dhanalakshmi Srinivasan University (DSU), Tiruchirappalli has signed a strategic Memorandum of Understanding (MoU) with ATRIBS IT Solutions Pvt. Ltd., Chennai, marking a significant milestone in our commitment to industry-integrated education.</h3>
              </div>
                <hr>
               <div style="min-height: 400px; padding: 40px; text-align: left;">
                <div style="text-align: center;">
                <img src="https://res.cloudinary.com/daom3xsqm/image/upload/v1754590322/Exciting_News_from_Dhanalakshmi_Srinivasan_University_We_re_thrilled_to_share_that_the_H_m5g6mu.jpg" style="height:30vh; width:80%;"></div>
                <h3 style="color:darkgrey; font-size:15px;">We’re delighted to announce a strategic Memorandum of Understanding (MoU) between Dhanalakshmi Srinivasan University (DSU), Tiruchirappalli and Career Tiq, Coimbatore, a leading career development and employability enhancement organization.</h3>
              </div>
                <hr>
               <div style="min-height: 400px; padding: 40px; text-align: left;">
                <div style="text-align: center;">
                <img src="https://res.cloudinary.com/daom3xsqm/image/upload/v1754590291/Exciting_News_from_Dhanalakshmi_Srinivasan_University_We_re_thrilled_to_share_that_the_H_5_wqd65x.jpg" style="height:30vh; width:80%;"></div>
                <h3 style="color:darkgrey; font-size:15px;">We’re proud to announce a forward-thinking Memorandum of Understanding (MoU) between Dhanalakshmi Srinivasan University (DSU), Tiruchirappalli and Speshway Tiq, Hyderabad, a rising force in career development and tech-driven training solutions.</h3>
              </div>
                <hr>
               <div style="min-height: 400px; padding: 40px; text-align: left;">
                <div style="text-align: center;">
                <img src="https://res.cloudinary.com/daom3xsqm/image/upload/v1754590265/Exciting_News_from_Dhanalakshmi_Srinivasan_University_We_re_thrilled_to_share_that_the_H_4_kazxtp.jpg" style="height:30vh; width:80%;"></div>
                <h3 style="color:darkgrey; font-size:15px;">We are proud to announce a strategic Memorandum of Understanding (MoU) between Dhanalakshmi Srinivasan University (DSU), Tiruchirappalli) and Talentio, Hyderabad, a leading provider of tech-driven career solutions and talent transformation services.</h3>
              </div>
              
                <hr>
               <div style="min-height: 400px; padding: 40px; text-align: left;">
                <div style="text-align: center;">
                <img src="https://res.cloudinary.com/daom3xsqm/image/upload/v1754590237/Exciting_News_from_Dhanalakshmi_Srinivasan_University_We_re_thrilled_to_share_that_the_H_3_mz4vhh.jpg" style="height:30vh; width:80%;"></div>
                <h3 style="color:darkgrey; font-size:15px;">We are pleased to announce a significant Memorandum of Understanding (MoU) between Dhanalakshmi Srinivasan University (DSU), Tiruchirappalli and Pyramid, Hyderabad, a leading organization in career development and global education services.</h3>
              </div>
              <hr>
              <div style="min-height: 400px; padding: 40px; text-align: left;">
                <div style="text-align: center;">
                <img src="https://res.cloudinary.com/daom3xsqm/image/upload/v1754590211/Exciting_News_from_Dhanalakshmi_Srinivasan_University_We_re_thrilled_to_share_that_the_H_2_p3tpd9.jpg" style="height:30vh; width:80%;"></div>
                <h3 style="color:darkgrey; font-size:15px;">We are proud to announce a strategic Memorandum of Understanding (MoU) between Dhanalakshmi Srinivasan University (DSU), Tiruchirappalli and Service to Provide, Mysore, Karnataka, formalized in Hyderabad. This partnership marks a significant step toward enhancing student development through cross-regional collaboration.</h3>
              </div>
              <hr>
              <div style="min-height: 400px; padding: 40px; text-align: left;">
                <div style="text-align: center;">
                <img src="https://res.cloudinary.com/daom3xsqm/image/upload/v1754590103/Exciting_News_from_Dhanalakshmi_Srinivasan_University_We_re_thrilled_to_share_that_the_H_1_ywdzbj.jpg" style="height:30vh; width:80%;"></div>
                <h3 style="color:darkgrey; font-size:15px;">Dhanalakshmi Srinivasan University (DSU), Tiruchirappalli, proudly announces a strategic Memorandum of Understanding (MoU) with bitsCrunch, a leading blockchain analytics company based in Germany. This international collaboration, formalized in Hyderabad, marks a transformative step in DSU’s mission to provide cutting-edge education and global exposure to its students.</h3>
                
              </div>
              
              
              
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };
});







const button3 = ["galary"];

button3.forEach(id => {
    const btn = document.getElementById(id);


    btn.onclick = () => {
        const newPage = window.open("", "_blank");

        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >GALARY</h2>
          </div>
        `;

        const footerCard = `
          <div style="padding: 20px; background-color: #000957; color: white; text-align: center; height:25vh">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>galary-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                }
              </style>
            </head>
            <body>
              ${headerCard}
              <div style="min-height: 400px; padding: 40px; text-align: left;">
                <h3 style="color:#7F8CAA; text-align:left; font-size:15px;">the Hospitals Block is a cornerstone of our commitment to excellence in medical education, clinical training, and community healthcare. It seamlessly integrates multi-disciplinary academic programs with multi-functional hospital services, creating a vibrant ecosystem for learning, healing, and innovation.</h3>
                <div style="text-align: center;">
                <img src="https://res.cloudinary.com/dkhtjp618/image/upload/v1754671881/campus-img-03_trem0n.jpg" style="height:30vh; width:80%;"></div>
              </div>
              <hr>
              <div style="min-height: 400px; padding: 40px; text-align: left;">
                <h3 style="color:#7F8CAA; text-align:left; font-size:15px;">At DSU Trichy, the Academic Block stands as a vibrant hub of intellectual activity, innovation, and interdisciplinary learning. Designed to foster academic excellence across diverse domains, it houses a wide array of programs and a state-of-the-art library that supports both teaching and research.</h3>
                <div style="text-align: center;">
                <img src="https://res.cloudinary.com/dkhtjp618/image/upload/v1754671865/campus-img-01_bq0p18.jpg" style="height:30vh; width:80%;"></div>
              </div>
              <hr>
              <div style="min-height: 400px; padding: 40px; text-align: left;">
                <h3 style="color:#7F8CAA; text-align:left; font-size:15px;">At DSU Trichy, the School of Engineering and Technology is nestled within a lush, eco-conscious campus that reflects our commitment to sustainability, wellness, and environmental stewardship. The Engineering Block stands as a beacon of innovation—surrounded by greenery that inspires learning, creativity, and calm.</h3>
                <div style="text-align: center;">
                <img src="https://res.cloudinary.com/dkhtjp618/image/upload/v1754671905/campus-img-05_q1nrfm.jpg" style="height:30vh; width:80%;"></div>
              </div>
              <hr>
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };
});


const button3xl4 = ["galaryy"];

button3xl4.forEach(id => {
    const btn = document.getElementById(id);


    btn.onclick = () => {
        const newPage = window.open("", "_blank");

        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >GALARY</h2>
          </div>
        `;

        const footerCard = `
          <div style="padding: 20px; background-color: #000957; color: white; text-align: center; height:25vh">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>galary-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                }
              </style>
            </head>
            <body>
              ${headerCard}
              <div style="min-height: 400px; padding: 40px; text-align: left;">
                <h3 style="color:#7F8CAA; text-align:left; font-size:15px;">the Hospitals Block is a cornerstone of our commitment to excellence in medical education, clinical training, and community healthcare. It seamlessly integrates multi-disciplinary academic programs with multi-functional hospital services, creating a vibrant ecosystem for learning, healing, and innovation.</h3>
                <div style="text-align: center;">
                <img src="https://res.cloudinary.com/dkhtjp618/image/upload/v1754671881/campus-img-03_trem0n.jpg" style="height:30vh; width:80%;"></div>
              </div>
              <hr>
              <div style="min-height: 400px; padding: 40px; text-align: left;">
                <h3 style="color:#7F8CAA; text-align:left; font-size:15px;">At DSU Trichy, the Academic Block stands as a vibrant hub of intellectual activity, innovation, and interdisciplinary learning. Designed to foster academic excellence across diverse domains, it houses a wide array of programs and a state-of-the-art library that supports both teaching and research.</h3>
                <div style="text-align: center;">
                <img src="https://res.cloudinary.com/dkhtjp618/image/upload/v1754671865/campus-img-01_bq0p18.jpg" style="height:30vh; width:80%;"></div>
              </div>
              <hr>
              <div style="min-height: 400px; padding: 40px; text-align: left;">
                <h3 style="color:#7F8CAA; text-align:left; font-size:15px;">At DSU Trichy, the School of Engineering and Technology is nestled within a lush, eco-conscious campus that reflects our commitment to sustainability, wellness, and environmental stewardship. The Engineering Block stands as a beacon of innovation—surrounded by greenery that inspires learning, creativity, and calm.</h3>
                <div style="text-align: center;">
                <img src="https://res.cloudinary.com/dkhtjp618/image/upload/v1754671905/campus-img-05_q1nrfm.jpg" style="height:30vh; width:80%;"></div>
              </div>
              <hr>
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };
});














const button4 = ["placement"];

button4.forEach(id => {
    const btn = document.getElementById(id);


    btn.onclick = () => {
        const newPage = window.open("", "_blank");

        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >TRAINING AND PLACEMENT</h2>
          </div>
        `;

        const footerCard = `
          <div style="padding: 20px; background-color: #000957; color: white; text-align: center; height:25vh">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>placement-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                }
              </style>
            </head>
            <body>
              ${headerCard}
              <div style="min-height: 400px; padding: 40px; text-align: left;">
                <h2 style="color:#000957; font-size:12px;">At the School of Engineering and Technology, DSU Trichy, we believe that technical excellence must be complemented by strong interpersonal and cognitive abilities. That’s why we’ve embedded a comprehensive Aptitude and Soft Skills Training program across all four years of engineering education—ensuring our students graduate not just as engineers, but as industry-ready professionals.</h2>
                <h3 style="color:#7F8CAA; text-align:left; font-size:10px;">Aptitude & Soft Skills Training<br>Technical Workshops & Mock Interviews<br>Internship Opportunities from 5th semester onward<br>Career Guidance & Resume Building Sessions<br>Industry Interaction & Guest Lectures</h3>
                <div style="text-align: center;">
                <img src="https://res.cloudinary.com/dkhtjp618/image/upload/v1754675874/WhatsApp_Image_2025-08-08_at_23.26.09_332f526e_dbwle4.jpg" style="height:30vh; width:80%;"></div>
              </div>
              <hr>
              <div style="min-height: 400px; padding: 40px; text-align: left;">
                <h2 style="color:#000957; font-size:12px;">Dhanalakshmi Srinivasan University, Tiruchirappalli, has established a strong placement record, attracting over 250+ recruiters and generating more than 3,000 placement opportunities for its students. The university’s highest salary package reached ₹15.5 LPA, with top companies like Infosys, Cognizant, Wipro, HCL, Zoho, Genpact, Vodafone, and TVS actively participating in campus drives. DSU’s dedicated Placement Cell offers extensive support through internships, aptitude training, technical workshops, and soft skill development, ensuring students are industry-ready and well-prepared for competitive roles across sectors</h2>
                
                <div style="text-align: center;">
                <img src="https://res.cloudinary.com/dkhtjp618/image/upload/v1754675896/WhatsApp_Image_2025-08-08_at_23.26.10_c9450abf_ovj62p.jpg" style="height:30vh; width:80%;"></div>
              </div>
              
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };
});




const button4xl5 = ["placementt"];

button4xl5.forEach(id => {
    const btn = document.getElementById(id);


    btn.onclick = () => {
        const newPage = window.open("", "_blank");

        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >TRAINING AND PLACEMENT</h2>
          </div>
        `;

        const footerCard = `
          <div style="padding: 20px; background-color: #000957; color: white; text-align: center; height:25vh">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>placement-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                }
              </style>
            </head>
            <body>
              ${headerCard}
              <div style="min-height: 400px; padding: 40px; text-align: left;">
                <h2 style="color:#000957; font-size:12px;">At the School of Engineering and Technology, DSU Trichy, we believe that technical excellence must be complemented by strong interpersonal and cognitive abilities. That’s why we’ve embedded a comprehensive Aptitude and Soft Skills Training program across all four years of engineering education—ensuring our students graduate not just as engineers, but as industry-ready professionals.</h2>
                <h3 style="color:#7F8CAA; text-align:left; font-size:10px;">Aptitude & Soft Skills Training<br>Technical Workshops & Mock Interviews<br>Internship Opportunities from 5th semester onward<br>Career Guidance & Resume Building Sessions<br>Industry Interaction & Guest Lectures</h3>
                <div style="text-align: center;">
                <img src="https://res.cloudinary.com/dkhtjp618/image/upload/v1754675874/WhatsApp_Image_2025-08-08_at_23.26.09_332f526e_dbwle4.jpg" style="height:30vh; width:80%;"></div>
              </div>
              <hr>
              <div style="min-height: 400px; padding: 40px; text-align: left;">
                <h2 style="color:#000957; font-size:12px;">Dhanalakshmi Srinivasan University, Tiruchirappalli, has established a strong placement record, attracting over 250+ recruiters and generating more than 3,000 placement opportunities for its students. The university’s highest salary package reached ₹15.5 LPA, with top companies like Infosys, Cognizant, Wipro, HCL, Zoho, Genpact, Vodafone, and TVS actively participating in campus drives. DSU’s dedicated Placement Cell offers extensive support through internships, aptitude training, technical workshops, and soft skill development, ensuring students are industry-ready and well-prepared for competitive roles across sectors</h2>
                
                <div style="text-align: center;">
                <img src="https://res.cloudinary.com/dkhtjp618/image/upload/v1754675896/WhatsApp_Image_2025-08-08_at_23.26.10_c9450abf_ovj62p.jpg" style="height:30vh; width:80%;"></div>
              </div>
              
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };
});



//STYLING FOR TODOS LIST FEATURES//

let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");
let saveTodoButton = document.getElementById("saveTodoButton");

function getTodoListFromLocalStorage() {
    let stringifiedTodoList = localStorage.getItem("todoList");
    let parsedTodoList = JSON.parse(stringifiedTodoList);
    if (parsedTodoList === null) {
        return [];
    } else {
        return parsedTodoList;
    }
}

let todoList = getTodoListFromLocalStorage();
let todosCount = todoList.length;

saveTodoButton.onclick = function() {
    localStorage.setItem("todoList", JSON.stringify(todoList));
};

function onAddTodo() {
    let userInputElement = document.getElementById("todoUserInput");
    let userInputValue = userInputElement.value;

    if (userInputValue === "") {
        alert("Enter Valid Text");
        return;
    }

    todosCount = todosCount + 1;

    let newTodo = {
        text: userInputValue,
        uniqueNo: todosCount,
        isChecked: false
    };
    todoList.push(newTodo);
    createAndAppendTodo(newTodo);
    userInputElement.value = "";
}

addTodoButton.onclick = function() {
    onAddTodo();
};

function onTodoStatusChange(checkboxId, labelId, todoId) {
    let checkboxElement = document.getElementById(checkboxId);
    let labelElement = document.getElementById(labelId);
    labelElement.classList.toggle("checked");

    let todoObjectIndex = todoList.findIndex(function(eachTodo) {
        let eachTodoId = "todo" + eachTodo.uniqueNo;

        if (eachTodoId === todoId) {
            return true;
        } else {
            return false;
        }
    });

    let todoObject = todoList[todoObjectIndex];

    if (todoObject.isChecked === true) {
        todoObject.isChecked = false;
    } else {
        todoObject.isChecked = true;
    }

}

function onDeleteTodo(todoId) {
    let todoElement = document.getElementById(todoId);
    todoItemsContainer.removeChild(todoElement);

    let deleteElementIndex = todoList.findIndex(function(eachTodo) {
        let eachTodoId = "todo" + eachTodo.uniqueNo;
        if (eachTodoId === todoId) {
            return true;
        } else {
            return false;
        }
    });

    todoList.splice(deleteElementIndex, 1);
}

function createAndAppendTodo(todo) {
    let todoId = "todo" + todo.uniqueNo;
    let checkboxId = "checkbox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;

    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoElement.id = todoId;
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    inputElement.checked = todo.isChecked;

    inputElement.onclick = function() {
        onTodoStatusChange(checkboxId, labelId, todoId);
    };

    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxId);
    labelElement.id = labelId;
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    if (todo.isChecked === true) {
        labelElement.classList.add("checked");
    }
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

    deleteIcon.onclick = function() {
        onDeleteTodo(todoId);
    };

    deleteIconContainer.appendChild(deleteIcon);
}

for (let todo of todoList) {
    createAndAppendTodo(todo);
}







// STYLING FOR DEPARTMENT SECTION //

const aids = ["dept_aids"];

aids.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >Department of Artificial Intelligence and Data Science.</h2>
          </div>
        `;

        const footerCard = `
          <div style="padding: 20px; background-color: #000957; color: white; text-align: center; height:15vh">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>aids-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                }
              </style>
            </head>
            <body>
              ${headerCard}
              <div style="height:27%; padding:40px; text-align:left;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">About The Department</h1>
                <h2 style="color:#000957; font-size:25px;"><ul><li style="margin-bottom:15px;">The AI & DS department was launched in 2022 to meet the growing demand for emerging technologies.</li><li style="margin-bottom:15px;">Classroom learning combined with hands-on sessions</li> <li style="margin-bottom:15px;">Highly qualified and experienced, focused on delivering top-tier education and practical training.</li> <li style="margin-bottom:15px;">Workshops, seminars, and symposiums to foster industry-academia collaboration.</li> <li style="margin-bottom:15px;">To be a Centre of Excellence for innovation and research in computer science and engineering.</li></ul></h2>
               </div> 
              
              <div style="height:10%; padding: 40px; text-align: left;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">Academic Programes offered</h1>
                <h2><ul><li style="margin-bottom:15px; color:#000957; font-size:25px;">B.Tech - Artificial Intelligence and Data Science</li></ul></h2>
                
              </div>
              
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };
});






const aidss = ["dept_aidss"];

aidss.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >Department of Artificial Intelligence and Data Science.</h2>
          </div>
        `;

        const footerCard = `
          <div style="padding: 20px; background-color: #000957; color: white; text-align: center; height:15vh">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>aids-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                }
              </style>
            </head>
            <body>
              ${headerCard}
              <div style="height:27%; padding:40px; text-align:left;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">About The Department</h1>
                <h2 style="color:#000957; font-size:25px;"><ul><li style="margin-bottom:15px;">The AI & DS department was launched in 2022 to meet the growing demand for emerging technologies.</li><li style="margin-bottom:15px;">Classroom learning combined with hands-on sessions</li> <li style="margin-bottom:15px;">Highly qualified and experienced, focused on delivering top-tier education and practical training.</li> <li style="margin-bottom:15px;">Workshops, seminars, and symposiums to foster industry-academia collaboration.</li> <li style="margin-bottom:15px;">To be a Centre of Excellence for innovation and research in computer science and engineering.</li></ul></h2>
               </div> 
              
              <div style="height:10%; padding: 40px; text-align: left;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">Academic Programes offered</h1>
                <h2><ul><li style="margin-bottom:15px; color:#000957; font-size:25px;">B.Tech - Artificial Intelligence and Data Science</li></ul></h2>
                
              </div>
              
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };
});











const aiml = ["dept_aiml", "dept_aimll"];

aiml.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");


        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >Department of  Artificial Intelligence and Machine Learning.</h2>
          </div>
        `;

        const footerCard = `
          <div style=" background-color: #000957; color: white; text-align: center; height:18vh; width:100%;">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>AI&ML-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                }
              </style>
            </head>
            <body>
              ${headerCard}
              <div style="height:27%; padding:40px; text-align:left;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">About The Department</h1>
                <h2 style="color:#000957; font-size:25px;"><ul><li style="margin-bottom:15px;">The AI & ML department was launched in 2022 to meet the growing demand for emerging technologies.</li><li style="margin-bottom:15px;">Classroom learning combined with hands-on sessions</li> <li style="margin-bottom:15px;">Highly qualified and experienced, focused on delivering top-tier education and practical training.</li> <li style="margin-bottom:15px;">Workshops, seminars, and symposiums to foster industry-academia collaboration.</li> <li style="margin-bottom:15px;">To be a Centre of Excellence for innovation and research in computer science and engineering.</li></ul></h2>
               </div> 
              
              <div style="height:10%; padding: 40px; text-align: left;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">Academic Programes offered</h1>
                <h2><ul><li style="margin-bottom:15px; color:#000957; font-size:25px;">B.Tech - Artificial Intelligence and Machine Learning</li></ul></h2>
                
              </div>
              
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };
});




const cys = ["dept_cys", "dept_cyss"];

cys.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >Department of Cyber Security.</h2>
          </div>
        `;

        const footerCard = `
          <div style=" background-color: #000957; color: white; text-align: center; height:18vh; width:100%;">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>cyber-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                }
              </style>
            </head>
            <body>
              ${headerCard}
              <div style="height:27%; padding:40px; text-align:left;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">About The Department</h1>
                <h2 style="color:#000957; font-size:25px;"><ul><li style="margin-bottom:15px;">The Cyber Security department was launched in 2022 to meet the growing demand for emerging technologies.</li><li style="margin-bottom:15px;">Classroom learning combined with hands-on sessions</li> <li style="margin-bottom:15px;">Highly qualified and experienced, focused on delivering top-tier education and practical training.</li> <li style="margin-bottom:15px;">Workshops, seminars, and symposiums to foster industry-academia collaboration.</li> <li style="margin-bottom:15px;">To be a Centre of Excellence for innovation and research in computer science and engineering.</li></ul></h2>
               </div> 
              
              <div style="height:10%; padding: 40px; text-align: left;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">Academic Programes offered</h1>
                <h2><ul><li style="margin-bottom:15px; color:#000957; font-size:25px;">B.Tech - Cyber Security</li></ul></h2>
                
              </div>
              
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };

});


const agri = ["dept_agri", "dept_agrii"];

agri.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >Department of Agriculture Engineering.</h2>
          </div>
        `;

        const footerCard = `
          <div style=" background-color: #000957; color: white; text-align: center; height:18vh; width:100%;">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>agri-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                }
              </style>
            </head>
            <body>
              ${headerCard}
              <div style="height:27%; padding:40px; text-align:left;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">About The Department</h1>
                <h2 style="color:#000957; font-size:25px;"><ul><li style="margin-bottom:15px;">The Agriculture Engineering department was launched in 2022 to meet the growing demand for emerging technologies.</li><li style="margin-bottom:15px;">Classroom learning combined with hands-on sessions</li> <li style="margin-bottom:15px;">Highly qualified and experienced, focused on delivering top-tier education and practical training.</li> <li style="margin-bottom:15px;">Workshops, seminars, and symposiums to foster industry-academia collaboration.</li> <li style="margin-bottom:15px;">To be a Centre of Excellence for innovation and research in computer science and engineering.</li></ul></h2>
               </div> 
              
              <div style="height:10%; padding: 40px; text-align: left;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">Academic Programes offered</h1>
                <h2><ul><li style="margin-bottom:15px; color:#000957; font-size:25px;">B.Tech - Agriculture & Engineering</li></ul></h2>
                
              </div>
              
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };
});






const bio = ["dept_bio", "dept_bioo"];

bio.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >Department of Biomedical Engineering.</h2>
          </div>
        `;

        const footerCard = `
          <div style=" background-color: #000957; color: white; text-align: center; height:18vh; width:100%;">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>bio-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                }
              </style>
            </head>
            <body>
              ${headerCard}
              <div style="height:27%; padding:40px; text-align:left;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">About The Department</h1>
                <h2 style="color:#000957; font-size:25px;"><ul><li style="margin-bottom:15px;">The Biomedical Engineering department was launched in 2022 to meet the growing demand for emerging technologies.</li><li style="margin-bottom:15px;">Classroom learning combined with hands-on sessions</li> <li style="margin-bottom:15px;">Highly qualified and experienced, focused on delivering top-tier education and practical training.</li> <li style="margin-bottom:15px;">Workshops, seminars, and symposiums to foster industry-academia collaboration.</li> <li style="margin-bottom:15px;">To be a Centre of Excellence for innovation and research in computer science and engineering.</li></ul></h2>
               </div> 
              
              <div style="height:10%; padding: 40px; text-align: left;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">Academic Programes offered</h1>
                <h2><ul><li style="margin-bottom:15px; color:#000957; font-size:25px;">B.Tech - Biomedical & Engineering</li></ul></h2>
                
              </div>
              
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };

});


const ece = ["dept_ece", "dept_ecee"];

ece.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >Department of Electronic Communication Engineering.</h2>
          </div>
        `;

        const footerCard = `
          <div style=" background-color: #000957; color: white; text-align: center; height:18vh; width:100%;">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>ece-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                }
              </style>
            </head>
            <body>
              ${headerCard}
              <div style="height:27%; padding:40px; text-align:left;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">About The Department</h1>
                <h2 style="color:#000957; font-size:25px;"><ul><li style="margin-bottom:15px;">The Electronic Communication Engineering department was launched in 2022 to meet the growing demand for emerging technologies.</li><li style="margin-bottom:15px;">Classroom learning combined with hands-on sessions</li> <li style="margin-bottom:15px;">Highly qualified and experienced, focused on delivering top-tier education and practical training.</li> <li style="margin-bottom:15px;">Workshops, seminars, and symposiums to foster industry-academia collaboration.</li> <li style="margin-bottom:15px;">To be a Centre of Excellence for innovation and research in computer science and engineering.</li></ul></h2>
               </div> 
              
              <div style="height:10%; padding: 40px; text-align: left;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">Academic Programes offered</h1>
                <h2><ul><li style="margin-bottom:15px; color:#000957; font-size:25px;">B.Tech - Electronic Communication & Engineering</li></ul></h2>
                
              </div>
              
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };

});



const eee = ["dept_eee", "dept_eeee"];

eee.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >Department of Electrical Electronic Engineering.</h2>
          </div>
        `;

        const footerCard = `
          <div style=" background-color: #000957; color: white; text-align: center; height:18vh; width:100%;">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>eee-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                }
              </style>
            </head>
            <body>
              ${headerCard}
              <div style="height:27%; padding:40px; text-align:left;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">About The Department</h1>
                <h2 style="color:#000957; font-size:25px;"><ul><li style="margin-bottom:15px;">The Electrical Electronic Engineering department was launched in 2022 to meet the growing demand for emerging technologies.</li><li style="margin-bottom:15px;">Classroom learning combined with hands-on sessions</li> <li style="margin-bottom:15px;">Highly qualified and experienced, focused on delivering top-tier education and practical training.</li> <li style="margin-bottom:15px;">Workshops, seminars, and symposiums to foster industry-academia collaboration.</li> <li style="margin-bottom:15px;">To be a Centre of Excellence for innovation and research in computer science and engineering.</li></ul></h2>
               </div> 
              
              <div style="height:10%; padding: 40px; text-align: left;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">Academic Programes offered</h1>
                <h2><ul><li style="margin-bottom:15px; color:#000957; font-size:25px;">B.Tech - Electrical Electronic & Engineering</li></ul></h2>
                
              </div>
              
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };

});



const cse = ["dept_cse", "dept_csee"];

cse.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >Department of Computer Science  Engineering.</h2>
          </div>
        `;

        const footerCard = `
          <div style=" background-color: #000957; color: white; text-align: center; height:18vh; width:100%;">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>cse-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                }
              </style>
            </head>
            <body>
              ${headerCard}
              <div style="height:27%; padding:40px; text-align:left;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">About The Department</h1>
                <h2 style="color:#000957; font-size:25px;"><ul><li style="margin-bottom:15px;">The Computer Science Engineering department was launched in 2022 to meet the growing demand for emerging technologies.</li><li style="margin-bottom:15px;">Classroom learning combined with hands-on sessions</li> <li style="margin-bottom:15px;">Highly qualified and experienced, focused on delivering top-tier education and practical training.</li> <li style="margin-bottom:15px;">Workshops, seminars, and symposiums to foster industry-academia collaboration.</li> <li style="margin-bottom:15px;">To be a Centre of Excellence for innovation and research in computer science and engineering.</li></ul></h2>
               </div> 
              
              <div style="height:10%; padding: 40px; text-align: left;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">Academic Programes offered</h1>
                <h2><ul><li style="margin-bottom:15px; color:#000957; font-size:25px;">B.Tech - Computer Science & Engineering</li></ul></h2>
                
              </div>
              
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };

});


const mech = ["dept_mech", "dept_mechh"];

mech.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >Department of Mechanical Engineering.</h2>
          </div>
        `;

        const footerCard = `
          <div style=" background-color: #000957; color: white; text-align: center; height:18vh; width:100%;">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>mech-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                }
              </style>
            </head>
            <body>
              ${headerCard}
              <div style="height:27%; padding:40px; text-align:left;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">About The Department</h1>
                <h2 style="color:#000957; font-size:25px;"><ul><li style="margin-bottom:15px;">The Mechanical Engineering department was launched in 2022 to meet the growing demand for emerging technologies.</li><li style="margin-bottom:15px;">Classroom learning combined with hands-on sessions</li> <li style="margin-bottom:15px;">Highly qualified and experienced, focused on delivering top-tier education and practical training.</li> <li style="margin-bottom:15px;">Workshops, seminars, and symposiums to foster industry-academia collaboration.</li> <li style="margin-bottom:15px;">To be a Centre of Excellence for innovation and research in computer science and engineering.</li></ul></h2>
               </div> 
              
              <div style="height:10%; padding: 40px; text-align: left;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">Academic Programes offered</h1>
                <h2><ul><li style="margin-bottom:15px; color:#000957; font-size:25px;">B.Tech - Mechanical & Engineering</li></ul></h2>
                
              </div>
              
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };

});

const iot = ["dept_iot", "dept_iott"];

iot.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >Department of Internet of Things.</h2>
          </div>
        `;

        const footerCard = `
          <div style=" background-color: #000957; color: white; text-align: center; height:18vh; width:100%;">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>iot-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                }
              </style>
            </head>
            <body>
              ${headerCard}
              <div style="height:27%; padding:40px; text-align:left;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">About The Department</h1>
                <h2 style="color:#000957; font-size:25px;"><ul><li style="margin-bottom:15px;">The Internet of Things department was launched in 2022 to meet the growing demand for emerging technologies.</li><li style="margin-bottom:15px;">Classroom learning combined with hands-on sessions</li> <li style="margin-bottom:15px;">Highly qualified and experienced, focused on delivering top-tier education and practical training.</li> <li style="margin-bottom:15px;">Workshops, seminars, and symposiums to foster industry-academia collaboration.</li> <li style="margin-bottom:15px;">To be a Centre of Excellence for innovation and research in computer science and engineering.</li></ul></h2>
               </div> 
              
              <div style="height:10%; padding: 40px; text-align: left;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">Academic Programes offered</h1>
                <h2><ul><li style="margin-bottom:15px; color:#000957; font-size:25px;">B.Tech - Internet of Things</li></ul></h2>
                
              </div>
              
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };

});



const it = ["dept_it", "dept_itt"];

it.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >Department of Information Technology.</h2>
          </div>
        `;

        const footerCard = `
          <div style=" background-color: #000957; color: white; text-align: center; height:18vh; width:100%;">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>it-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                }
              </style>
            </head>
            <body>
              ${headerCard}
              <div style="height:27%; padding:40px; text-align:left;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">About The Department</h1>
                <h2 style="color:#000957; font-size:25px;"><ul><li style="margin-bottom:15px;">The Information Technology department was launched in 2022 to meet the growing demand for emerging technologies.</li><li style="margin-bottom:15px;">Classroom learning combined with hands-on sessions</li> <li style="margin-bottom:15px;">Highly qualified and experienced, focused on delivering top-tier education and practical training.</li> <li style="margin-bottom:15px;">Workshops, seminars, and symposiums to foster industry-academia collaboration.</li> <li style="margin-bottom:15px;">To be a Centre of Excellence for innovation and research in computer science and engineering.</li></ul></h2>
               </div> 
              
              <div style="height:10%; padding: 40px; text-align: left;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">Academic Programes offered</h1>
                <h2><ul><li style="margin-bottom:15px; color:#000957; font-size:25px;">B.Tech - Information Technology</li></ul></h2>
                
              </div>
              
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };

});


const biotech = ["dept_biotech", "dept_biotechh"];

biotech.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >Department of  BioTechnology.</h2>
          </div>
        `;

        const footerCard = `
          <div style=" background-color: #000957; color: white; text-align: center; height:18vh; width:100%;">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>biotech-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                }
              </style>
            </head>
            <body>
              ${headerCard}
              <div style="height:27%; padding:40px; text-align:left;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">About The Department</h1>
                <h2 style="color:#000957; font-size:25px;"><ul><li style="margin-bottom:15px;">The  BioTechnology department was launched in 2022 to meet the growing demand for emerging technologies.</li><li style="margin-bottom:15px;">Classroom learning combined with hands-on sessions</li> <li style="margin-bottom:15px;">Highly qualified and experienced, focused on delivering top-tier education and practical training.</li> <li style="margin-bottom:15px;">Workshops, seminars, and symposiums to foster industry-academia collaboration.</li> <li style="margin-bottom:15px;">To be a Centre of Excellence for innovation and research in computer science and engineering.</li></ul></h2>
               </div> 
              
              <div style="height:10%; padding: 40px; text-align: left;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">Academic Programes offered</h1>
                <h2><ul><li style="margin-bottom:15px; color:#000957; font-size:25px;">B.Tech -  BioTechnology</li></ul></h2>
                
              </div>
              
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };

});


const aids_syss = ["aids_sys", "aids_syss"];

aids_syss.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >Curriculum & Syllabus.</h2>
          </div>
        `;

        const footerCard = `
          <div style=" background-color: #000957; color: white; text-align: center; height:25vh; width:100%;">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>aids_sys-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  h2 {
                      text-align: center;
                      margin-bottom: 20px;
                    }
                
                    table {
                      width: 100%;
                      border-collapse: collapse;
                      box-shadow: 0 0 10px rgba(0,0,0,0.1);
                      background-color: #fff;
                    }
                
                    th, td {
                      padding: 12px;
                      border: 1px solid #ddd;
                      text-align: center;
                    }
                
                    th {
                      background-color: #0077b6;
                      color: white;
                    }
                
                    tr:hover {
                      background-color: #caf0f8;
                      cursor: pointer;
                      transition: background-color 0.3s ease;
                    }
                    tr:active {
                      background-color: #90e0ef;
                    }
                }
              </style>
            </head>
            <body>
              ${headerCard}
              <div style="height:100%; padding:40px; text-align:left;overflow-y: auto;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-I</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG01</td>
                                <td>Basics In Communication</td>
                                <td>HS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>1</td>
                                <td>4</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MAT01</td>
                                <td>Algebra and Calculus</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>23PHY01</td>
                                <td>Engineering Physics</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21GEN01</td>
                                <td>Engineering Graphics & Design</td>
                                <td>ES</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>5</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21ACY01</td>
                                    <td>Python Programming</td>
                                    <td>ES</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21PHYP1</td>
                                    <td>Engineering Physics Laboratory</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ACYP1</td>
                                    <td>Python Programming Laboratory</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21YOG01</td>
                                    <td>Yoga</td>
                                    <td>MC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-II</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG02</td>
                                <td>Technical Communication</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MAT02</td>
                                <td>Advanced Calculus and ODE</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21CHY01</td>
                                <td>Engineering Chemistry</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21GEN03</td>
                                <td>Basic Electrical & Electronics Engineering</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21CSE01</td>
                                    <td>Programming in C</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21AID01</td>
                                    <td>Java Programming</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21GEN05</td>
                                    <td>Workshop Practices</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21CHYP1</td>
                                    <td>Engineering Chemistry Laboratory</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21ENGP2</td>
                                    <td>Communication Skills Laboratory</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>10</td>
                                    <td>21AIDP1</td>
                                    <td>Java Programming Lab</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>11</td>
                                    <td>21CSEP1</td>
                                    <td>Programming in C Laboratory</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>12</td>
                                    <td>21NCP02</td>
                                    <td>NSS</td>
                                    <td>NC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                    <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-III</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21MAT03</td>
                                <td>Discrete Structures</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21AID02</td>
                                <td>Foundations of Artificial Intelligence</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21CSE05</td>
                                <td>Computer Architecture</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21ECE61</td>
                                <td>Analog and Digital Electronics</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21CSE02</td>
                                    <td>Data Structures</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21ACY02</td>
                                    <td>RDBMS & MySQL</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ENG03</td>
                                    <td>Professional Communication</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21CSEP3</td>
                                    <td>Data structures Lab</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21AIDP2</td>
                                    <td>Artificial Intelligence Lab</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>10</td>
                                    <td>21ACYP2</td>
                                    <td>RDBMS & MySQL Lab</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>11</td>
                                    <td>21NCP03</td>
                                    <td>Environmental Science</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                 <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-IV</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21MAT06</td>
                                <td>Probability and Statistics</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21AID03</td>
                                <td>Foundations of Data Science</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21CSE07</td>
                                <td>Design and Analysis of Algorithms</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21CSE06</td>
                                <td>Operating System</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21CSE11</td>
                                    <td>Computer Networks</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21AID04</td>
                                    <td>Microservices Architecture and implementation</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ENG04</td>
                                    <td>Advanced Technical Communication</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21CSEP8</td>
                                    <td>Computer Networks lab</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21CSEP6</td>
                                    <td>Operating System lab</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>10</td>
                                    <td>21AIDP3</td>
                                    <td>Microservices Architecture & implementation Lab</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>11</td>
                                    <td>21NCP04</td>
                                    <td>Renewable Energy Source</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-V</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21AID05</td>
                                <td>Data Visualization (R, Python, Watson Studio)</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21INT02</td>
                                <td>Web Programming</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21AML03</td>
                                <td>Deep Learning and its applications</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21AID06</td>
                                <td>Algorithm for Intelligent Systems</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td></td>
                                    <td>Professional Elective-I</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21UHV02</td>
                                    <td>Universal Human Values 2: Understanding Harmony</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21AIDP4</td>
                                    <td>Data Visualization (R, Python, Watson Studio) Lab</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21INTP1</td>
                                    <td>Web Programming Lab</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21ENGP3</td>
                                    <td>Professional Communication Lab</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>10</td>
                                    <td>21NCP05</td>
                                    <td>Essence of Indian Traditional Knowledge</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VI</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21CSE12</td>
                                <td>Mobile Computing</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21INT01</td>
                                <td>Information Retrieval Systems</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td></td>
                                <td>Professional Elective-II</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td></td>
                                <td>Open Elective-I</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21AID07</td>
                                    <td>Predictive Modeling</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21AIDP5</td>
                                    <td>Predictive Modeling Lab</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21INTP2</td>
                                    <td>Mobile Application Development Lab</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21CYSMP</td>
                                    <td>Mini Project</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VII</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21GEN06</td>
                                <td>Disaster Management</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td></td>
                                <td>Open Elective-II</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td></td>
                                <td>Professional Elective-III</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td></td>
                                <td>Professional Elective-IV</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21AID08</td>
                                    <td>Machine Learning using Watson Studio</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21AIDP6</td>
                                    <td>Machine Learning using Watson Studio Lab</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21AIDIN</td>
                                    <td>Internship & Publication</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  
                                  
                                
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                  
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VIII</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td></td>
                                <td>Professional Elective-V</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21AID09</td>
                                <td>AI Analyst – AP skills</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21AIDP7</td>
                                <td>AI Analyst – AP skills Lab</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21AIDPW</td>
                                <td>Project Work</td>
                                <td>EEC</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
            </div> 
              
             
              
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };

});


const aiml_syss = ["aiml_sys", "aiml_syss"];

aiml_syss.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >Curriculum & Syllabus.</h2>
          </div>
        `;

        const footerCard = `
          <div style=" background-color: #000957; color: white; text-align: center; height:25vh; width:100%;">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>aiml_sys-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  h2 {
                      text-align: center;
                      margin-bottom: 20px;
                    }
                
                    table {
                      width: 100%;
                      border-collapse: collapse;
                      box-shadow: 0 0 10px rgba(0,0,0,0.1);
                      background-color: #fff;
                    }
                
                    th, td {
                      padding: 12px;
                      border: 1px solid #ddd;
                      text-align: center;
                    }
                
                    th {
                      background-color: #0077b6;
                      color: white;
                    }
                
                    tr:hover {
                      background-color: #caf0f8;
                      cursor: pointer;
                      transition: background-color 0.3s ease;
                    }
                    tr:active {
                      background-color: #90e0ef;
                    }
                }
              </style>
            </head>
            <body>
              ${headerCard}
              <div style="height:100%; padding:40px; text-align:left;overflow-y: auto;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-I</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG01</td>
                                <td>Basics In Communication</td>
                                <td>HS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>1</td>
                                <td>4</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MAT01</td>
                                <td>Algebra and Calculus</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>23PHY01</td>
                                <td>Engineering Physics</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21GEN01</td>
                                <td>Engineering Graphics & Design</td>
                                <td>ES</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>5</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21ACY01</td>
                                    <td>Python Programming</td>
                                    <td>ES</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21PHYP1</td>
                                    <td>Engineering Physics Laboratory</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ACYP1</td>
                                    <td>Python Programming Laboratory</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21YOG01</td>
                                    <td>Yoga</td>
                                    <td>MC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-II</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG02</td>
                                <td>Technical Communication</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MAT02</td>
                                <td>Advanced Calculus and ODE</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21CHY01</td>
                                <td>Engineering Chemistry</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21GEN03</td>
                                <td>Basic Electrical & Electronics Engineering</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21CSE01</td>
                                    <td>Programming in C</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21AID01</td>
                                    <td>Java Programming</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21GEN05</td>
                                    <td>Workshop Practices</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21CHYP1</td>
                                    <td>Engineering Chemistry Laboratory</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21ENGP2</td>
                                    <td>Communication Skills Laboratory</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>10</td>
                                    <td>21AIDP1</td>
                                    <td>Java Programming Lab</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>11</td>
                                    <td>21CSEP1</td>
                                    <td>Programming in C Laboratory</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>12</td>
                                    <td>21NCP02</td>
                                    <td>NSS</td>
                                    <td>NC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                    <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-III</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21MAT03</td>
                                <td>Discrete Structures</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21AID02</td>
                                <td>Foundations of Artificial Intelligence</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21CSE05</td>
                                <td>Computer Architecture</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21ECE61</td>
                                <td>Analog and Digital Electronics</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21CSE02</td>
                                    <td>Data Structures</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21ACY02</td>
                                    <td>RDBMS & MySQL</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ENG03</td>
                                    <td>Professional Communication</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21CSEP3</td>
                                    <td>Data structures Lab</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21AIDP2</td>
                                    <td>Artificial Intelligence Lab</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>10</td>
                                    <td>21ACYP2</td>
                                    <td>RDBMS & MySQL Lab</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>11</td>
                                    <td>21NCP03</td>
                                    <td>Environmental Science</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                 <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-IV</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21MAT06</td>
                                <td>Probability and Statistics</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21AID03</td>
                                <td>Foundations of Data Science</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21CSE07</td>
                                <td>Design and Analysis of Algorithms</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21CSE06</td>
                                <td>Operating System</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21CSE11</td>
                                    <td>Computer Networks</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21AID04</td>
                                    <td>Microservices Architecture and implementation</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ENG04</td>
                                    <td>Advanced Technical Communication</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21CSEP8</td>
                                    <td>Computer Networks lab</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21CSEP6</td>
                                    <td>Operating System lab</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>10</td>
                                    <td>21AIDP3</td>
                                    <td>Microservices Architecture & implementation Lab</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>11</td>
                                    <td>21NCP04</td>
                                    <td>Renewable Energy Source</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-V</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21AID05</td>
                                <td>Data Visualization (R, Python, Watson Studio)</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21AML01</td>
                                <td>Conversational AI</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21CSE20</td>
                                <td>Natural Language Processing</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21AML02</td>
                                <td>Computer Vision</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td></td>
                                    <td>Professional Elective-I</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21UHV02</td>
                                    <td>Universal Human Values 2: Understanding Harmony</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21AIDP4</td>
                                    <td>Data Visualization (R, Python, Watson Studio) Lab</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                
                                  <tr>
                                    <td>8</td>
                                    <td>21ENGP3</td>
                                    <td>Professional Communication Lab</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21NCP05</td>
                                    <td>Essence of Indian Traditional Knowledge</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VI</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21INT02</td>
                                <td>Web Programming</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21AML03</td>
                                <td>Deep Learning and its applications</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td></td>
                                <td>Professional Elective-II</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td></td>
                                <td>Open Elective-I</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21AID07</td>
                                    <td>Predictive Modeling</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21AIDP5</td>
                                    <td>Predictive Modeling Lab</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21AMLP1</td>
                                    <td>Deep Learning and its applications Lab</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21INTP1</td>
                                    <td>Web Programming Lab</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21CYSMP</td>
                                    <td>Mini Project</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VII</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21GEN06</td>
                                <td>Disaster Management</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td></td>
                                <td>Open Elective-II</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td></td>
                                <td>Professional Elective-III</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td></td>
                                <td>Professional Elective-IV</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21AID08</td>
                                    <td>Machine Learning using Watson Studio</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21AIDP6</td>
                                    <td>Machine Learning using Watson Studio Lab</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21AIDIN</td>
                                    <td>Internship & Publication</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  
                                  
                                
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                  
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VIII</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td></td>
                                <td>Professional Elective-V</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21AID09</td>
                                <td>AI Analyst – AP skills</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21AIDP7</td>
                                <td>AI Analyst – AP skills Lab</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21AIDPW</td>
                                <td>Project Work</td>
                                <td>EEC</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
            </div> 
              
             
              
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };

});

const cys_syss = ["cys_sys", "cys_syss"];

cys_syss.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");
        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >Curriculum & Syllabus.</h2>
          </div>
        `;

        const footerCard = `
          <div style=" background-color: #000957; color: white; text-align: center; height:25vh; width:100%;">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>cyber_sys-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  h2 {
                      text-align: center;
                      margin-bottom: 20px;
                    }
                
                    table {
                      width: 100%;
                      border-collapse: collapse;
                      box-shadow: 0 0 10px rgba(0,0,0,0.1);
                      background-color: #fff;
                    }
                
                    th, td {
                      padding: 12px;
                      border: 1px solid #ddd;
                      text-align: center;
                    }
                
                    th {
                      background-color: #0077b6;
                      color: white;
                    }
                
                    tr:hover {
                      background-color: #caf0f8;
                      cursor: pointer;
                      transition: background-color 0.3s ease;
                    }
                    tr:active {
                      background-color: #90e0ef;
                    }
                }
              </style>
            </head>
            <body>
              ${headerCard}
              <div style="height:100%; padding:40px; text-align:left;overflow-y: auto;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-I</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG01</td>
                                <td>Basics In Communication</td>
                                <td>HS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>1</td>
                                <td>4</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MAT01</td>
                                <td>Algebra and Calculus</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>23PHY01</td>
                                <td>Engineering Physics</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21GEN01</td>
                                <td>Engineering Graphics & Design</td>
                                <td>ES</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>5</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21ACY01</td>
                                    <td>Python Programming</td>
                                    <td>ES</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21PHYP1</td>
                                    <td>Engineering Physics Laboratory</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ACYP1</td>
                                    <td>Python Programming Laboratory</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21YOG01</td>
                                    <td>Yoga</td>
                                    <td>MC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-II</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG02</td>
                                <td>Technical Communication</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MAT02</td>
                                <td>Advanced Calculus and ODE</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21CHY01</td>
                                <td>Engineering Chemistry</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21GEN03</td>
                                <td>Basic Electrical & Electronics Engineering</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21CSE01</td>
                                    <td>Programming in C</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21AID01</td>
                                    <td>Java Programming</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21GEN05</td>
                                    <td>Workshop Practices</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21CHYP1</td>
                                    <td>Engineering Chemistry Laboratory</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21ENGP2</td>
                                    <td>Communication Skills Laboratory</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>10</td>
                                    <td>21AIDP1</td>
                                    <td>Java Programming Lab</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>11</td>
                                    <td>21CSEP1</td>
                                    <td>Programming in C Laboratory</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>12</td>
                                    <td>21NCP02</td>
                                    <td>NSS</td>
                                    <td>NC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                    <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-III</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21MAT03</td>
                                <td>Discrete Structures</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              
                              <tr>
                                <td>2</td>
                                <td>21CSE05</td>
                                <td>Computer Architecture</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21ECE61</td>
                                <td>Analog and Digital Electronics</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>4</td>
                                    <td>21CSE02</td>
                                    <td>Data Structures</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21CSE03</td>
                                    <td>Object Oriented Programming</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21ENG03</td>
                                    <td>Professional Communication</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21CSEP3</td>
                                    <td>Data structures Lab</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21CSEP4</td>
                                    <td>Object Oriented Programming Lab</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21ACYP3</td>
                                    <td>Cloud Application Developer Lab</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>10</td>
                                    <td>21NCP03</td>
                                    <td>Environmental Science</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>11</td>
                                    <td>21ACY03</td>
                                    <td>Cloud Application Developer</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                 <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-IV</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21MAT06</td>
                                <td>Probability and Statistics</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21CSE07</td>
                                <td>Design and Analysis of Algorithms</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21CYS01</td>
                                <td>Foundations of Cyber Security</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21CSE06</td>
                                <td>Operating System</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21CSE11</td>
                                    <td>Computer Networks</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21ACY04</td>
                                    <td>Identity and Access Management</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ENG04</td>
                                    <td>Advanced Technical Communication</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21ACYP4</td>
                                    <td>Identity and Access Management Lab</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21CSEP6</td>
                                    <td>Operating System lab</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>10</td>
                                    <td>21CYSP1</td>
                                    <td>Cyber Security Lab</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>11</td>
                                    <td>21NCP04</td>
                                    <td>Renewable Energy Source</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-V</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21CYS02</td>
                                <td>Artificial Intelligence and Machine Learning</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21INT02</td>
                                <td>Web Programming</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21UHV02</td>
                                <td>Universal Human Values 2: Understanding Harmony</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21CYS03</td>
                                <td>Cyber Law and Ethics</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td></td>
                                    <td>Professional Elective-I</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21ACY05</td>
                                    <td>Data Security using Guardium</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ACYP5</td>
                                    <td>Data Security using Guardium Lab</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                
                                  <tr>
                                    <td>8</td>
                                    <td>21INTP1</td>
                                    <td>Web Programming Lab</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21NCP05</td>
                                    <td>Essence of Indian Traditional Knowledge</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VI</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21GEN06</td>
                                <td>Disaster Management</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21CYS04</td>
                                <td>Web Mining</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td></td>
                                <td>Professional Elective-II</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td></td>
                                <td>Open Elective-I</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21ACY06</td>
                                    <td>Security Intelligence Engineer</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21ACYP6</td>
                                    <td>Security Intelligence Engineer Lab</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ENGP3</td>
                                    <td>Professional Communication Lab</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21CYSP2</td>
                                    <td>Web Mining Lab</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21CYSMP</td>
                                    <td>Mini Project</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VII</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21CYS05</td>
                                <td>Digital Forensics</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td></td>
                                <td>Open Elective-II</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td></td>
                                <td>Professional Elective-III</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td></td>
                                <td>Professional Elective-IV</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21ACY07</td>
                                    <td>Cloud Security</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21ACY07</td>
                                    <td>Cloud Security Lab</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21AIDIN</td>
                                    <td>Internship & Publication</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  
                                  
                                
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                  
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VIII</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td></td>
                                <td>Professional Elective-V</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21AID09</td>
                                <td>AI Analyst – AP skills</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21AIDP7</td>
                                <td>AI Analyst – AP skills Lab</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21AIDPW</td>
                                <td>Project Work</td>
                                <td>EEC</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
            </div> 
              
             
              
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };

});

const it_syss = ["it_sys", "it_syss"];

it_syss.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >Curriculum & Syllabus.</h2>
          </div>
        `;

        const footerCard = `
          <div style=" background-color: #000957; color: white; text-align: center; height:25vh; width:100%;">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>it_sys-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  h2 {
                      text-align: center;
                      margin-bottom: 20px;
                    }
                
                    table {
                      width: 100%;
                      border-collapse: collapse;
                      box-shadow: 0 0 10px rgba(0,0,0,0.1);
                      background-color: #fff;
                    }
                
                    th, td {
                      padding: 12px;
                      border: 1px solid #ddd;
                      text-align: center;
                    }
                
                    th {
                      background-color: #0077b6;
                      color: white;
                    }
                
                    tr:hover {
                      background-color: #caf0f8;
                      cursor: pointer;
                      transition: background-color 0.3s ease;
                    }
                    tr:active {
                      background-color: #90e0ef;
                    }
                }
              </style>
            </head>
            <body>
              ${headerCard}
              <div style="height:100%; padding:40px; text-align:left;overflow-y: auto;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-I</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG01</td>
                                <td>Basics In Communication</td>
                                <td>HS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>1</td>
                                <td>4</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MAT01</td>
                                <td>Algebra and Calculus</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>23PHY01</td>
                                <td>Engineering Physics</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21GEN01</td>
                                <td>Engineering Graphics & Design</td>
                                <td>ES</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>5</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21ACY01</td>
                                    <td>Python Programming</td>
                                    <td>ES</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21PHYP1</td>
                                    <td>Engineering Physics Laboratory</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ACYP1</td>
                                    <td>Python Programming Laboratory</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21YOG01</td>
                                    <td>Yoga</td>
                                    <td>MC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-II</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG02</td>
                                <td>Technical Communication</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MAT02</td>
                                <td>Advanced Calculus and ODE</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21CHY01</td>
                                <td>Engineering Chemistry</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21GEN03</td>
                                <td>Basic Electrical & Electronics Engineering</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21CSE01</td>
                                    <td>Programming in C</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>6</td>
                                    <td>21GEN05</td>
                                    <td>Workshop Practices</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21CHYP1</td>
                                    <td>Engineering Chemistry Laboratory</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21ENGP2</td>
                                    <td>Communication Skills Laboratory</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>9</td>
                                    <td>21CSEP1</td>
                                    <td>Programming in C Laboratory</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>10</td>
                                    <td>21NCP02</td>
                                    <td>NSS</td>
                                    <td>NC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                    <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-III</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21MAT03</td>
                                <td>Discrete Structures</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              
                              <tr>
                                <td>2</td>
                                <td>21ECE62</td>
                                <td>Digital Electronics</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21ECE61</td>
                                <td>Analog and Digital Electronics</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>4</td>
                                    <td>21CSE02</td>
                                    <td>Data Structures</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21CSE03</td>
                                    <td>Object Oriented Programming</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21ENG03</td>
                                    <td>Professional Communication</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21CSEP3</td>
                                    <td>Data structures Lab</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21CSEP4</td>
                                    <td>Object Oriented Programming Lab</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>9</td>
                                    <td>21ECEP12</td>
                                    <td>Digital Electronics Lab</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>10</td>
                                    <td>21NCP03</td>
                                    <td>Environmental Science</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                 <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-IV</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21MAT06</td>
                                <td>Probability and Statistics</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21CSE07</td>
                                <td>Design and Analysis of Algorithms</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21CSE05</td>
                                <td>Computer Architecture</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21CSE06</td>
                                <td>Operating System</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21CSE08</td>
                                    <td>Software Engineering</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21ACY04</td>
                                    <td>Identity and Access Management</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ENG04</td>
                                    <td>Advanced Technical Communication</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21ACYP4</td>
                                    <td>Identity and Access Management Lab</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21CSEP6</td>
                                    <td>Operating System lab</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>10</td>
                                    <td>21CSEP7</td>
                                    <td>Software Engineering Lab</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>11</td>
                                    <td>21NCP04</td>
                                    <td>Renewable Energy Source</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-V</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21IoT01</td>
                                <td>Fundamental of Database Management Systems</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td></td>
                                <td>Professional Elective-I</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21UHV02</td>
                                <td>Universal Human Values 2: Understanding Harmony</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21CSE11</td>
                                <td>Computer Networks</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td></td>
                                    <td>Open Elective-I</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21INT01</td>
                                    <td>Information Retrieval Systems</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21IoTP1</td>
                                    <td>Database Management Systems Lab</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                
                                  <tr>
                                    <td>8</td>
                                    <td>21ENGP3</td>
                                    <td>Professional Communication Lab</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21NCP05</td>
                                    <td>Essence of Indian Traditional Knowledge</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VI</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21GEN06</td>
                                <td>Disaster Management</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21INT02</td>
                                <td>Web Programming</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td></td>
                                <td>Professional Elective-II</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>23MAT08</td>
                                <td>Optimization Techniques</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21ECE68</td>
                                    <td>Embedded System Design and Architecture</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21INT03</td>
                                    <td>Theory of Computation</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21INTP1</td>
                                    <td>Web Programming Lab</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>8</td>
                                    <td>21CYSMP</td>
                                    <td>Mini Project</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VII</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21CSE10</td>
                                <td>Cryptography & Network Security</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21IoT02</td>
                                <td>Internet of Things</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td></td>
                                <td>Professional Elective-III</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td></td>
                                <td>Professional Elective-IV</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21AML04</td>
                                    <td>Introduction to Machine Learning</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21IoTIN</td>
                                    <td>Internship & Publication</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  
                                  
                                  
                                
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                  
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VIII</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td></td>
                                <td>Open Elective-II</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td></td>
                                <td>Professional Elective-V</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21INTPW</td>
                                <td>Project Work</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
            </div> 
              
             
              
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };

});



const cse_syss = ["cse_sys", "cse_syss"];

cse_syss.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");
        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >Curriculum & Syllabus.</h2>
          </div>
        `;

        const footerCard = `
          <div style=" background-color: #000957; color: white; text-align: center; height:25vh; width:100%;">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>cse_sys-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  h2 {
                      text-align: center;
                      margin-bottom: 20px;
                    }
                
                    table {
                      width: 100%;
                      border-collapse: collapse;
                      box-shadow: 0 0 10px rgba(0,0,0,0.1);
                      background-color: #fff;
                    }
                
                    th, td {
                      padding: 12px;
                      border: 1px solid #ddd;
                      text-align: center;
                    }
                
                    th {
                      background-color: #0077b6;
                      color: white;
                    }
                
                    tr:hover {
                      background-color: #caf0f8;
                      cursor: pointer;
                      transition: background-color 0.3s ease;
                    }
                    tr:active {
                      background-color: #90e0ef;
                    }
                }
              </style>
            </head>
            <body>
              ${headerCard}
              <div style="height:100%; padding:40px; text-align:left;overflow-y: auto;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-I</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG01</td>
                                <td>Basics In Communication</td>
                                <td>HS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>1</td>
                                <td>4</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MAT01</td>
                                <td>Algebra and Calculus</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>23PHY01</td>
                                <td>Engineering Physics</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21GEN01</td>
                                <td>Engineering Graphics & Design</td>
                                <td>ES</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>5</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21ACY01</td>
                                    <td>Python Programming</td>
                                    <td>ES</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21PHYP1</td>
                                    <td>Engineering Physics Laboratory</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ACYP1</td>
                                    <td>Python Programming Laboratory</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21YOG01</td>
                                    <td>Yoga</td>
                                    <td>MC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-II</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG02</td>
                                <td>Technical Communication</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MAT02</td>
                                <td>Advanced Calculus and ODE</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21CHY01</td>
                                <td>Engineering Chemistry</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21GEN03</td>
                                <td>Basic Electrical & Electronics Engineering</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21CSE01</td>
                                    <td>Programming in C</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>6</td>
                                    <td>21GEN05</td>
                                    <td>Workshop Practices</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21CHYP1</td>
                                    <td>Engineering Chemistry Laboratory</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21ENGP2</td>
                                    <td>Communication Skills Laboratory</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>9</td>
                                    <td>21CSEP1</td>
                                    <td>Programming in C Laboratory</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>10</td>
                                    <td>21NCP02</td>
                                    <td>NSS</td>
                                    <td>NC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>0</td>
                                  </tr>
                                  <tr>
                                    <td>11</td>
                                    <td>21GEN03</td>
                                    <td>Basic Electrical & Electronics Engineering</td>
                                    <td>NC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>0</td>
                                  </tr>
                                  <tr>
                                    <td>12</td>
                                    <td>21GENP5</td>
                                    <td>Workshop Practices Laboratory</td>
                                    <td>NC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                    <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-III</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21MAT03</td>
                                <td>Discrete Structures</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              
                              <tr>
                                <td>2</td>
                                <td>21ECE62</td>
                                <td>Digital Electronics</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21ECE61</td>
                                <td>Analog and Digital Electronics</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>4</td>
                                    <td>21CSE02</td>
                                    <td>Data Structures</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21CSE03</td>
                                    <td>Object Oriented Programming</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21ENG03</td>
                                    <td>Professional Communication</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21CSEP3</td>
                                    <td>Data structures Lab</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21CSEP4</td>
                                    <td>Object Oriented Programming Lab</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>9</td>
                                    <td>21ECEP12</td>
                                    <td>Digital Electronics Lab</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>10</td>
                                    <td>21NCP03</td>
                                    <td>Environmental Science</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                 <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-IV</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21MAT06</td>
                                <td>Probability and Statistics</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21CSE07</td>
                                <td>Design and Analysis of Algorithms</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21CSE05</td>
                                <td>Computer Architecture</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21CSE06</td>
                                <td>Operating System</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21CSE08</td>
                                    <td>Software Engineering</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21ACY04</td>
                                    <td>Identity and Access Management</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ENG04</td>
                                    <td>Advanced Technical Communication</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21ACYP4</td>
                                    <td>Identity and Access Management Lab</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21CSEP6</td>
                                    <td>Operating System lab</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>10</td>
                                    <td>21CSEP7</td>
                                    <td>Software Engineering Lab</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>11</td>
                                    <td>21NCP04</td>
                                    <td>Renewable Energy Source</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-V</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21IoT01</td>
                                <td>Fundamental of Database Management Systems</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td></td>
                                <td>Professional Elective-I</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21UHV02</td>
                                <td>Universal Human Values 2: Understanding Harmony</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21CSE11</td>
                                <td>Computer Networks</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td></td>
                                    <td>Open Elective-I</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21INT01</td>
                                    <td>Information Retrieval Systems</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21IoTP1</td>
                                    <td>Database Management Systems Lab</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                
                                  <tr>
                                    <td>8</td>
                                    <td>21ENGP3</td>
                                    <td>Professional Communication Lab</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21NCP05</td>
                                    <td>Essence of Indian Traditional Knowledge</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VI</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21GEN06</td>
                                <td>Disaster Management</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21INT02</td>
                                <td>Web Programming</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td></td>
                                <td>Professional Elective-II</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>23MAT08</td>
                                <td>Optimization Techniques</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21ECE68</td>
                                    <td>Embedded System Design and Architecture</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21INT03</td>
                                    <td>Theory of Computation</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21INTP1</td>
                                    <td>Web Programming Lab</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>8</td>
                                    <td>21CYSMP</td>
                                    <td>Mini Project</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VII</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21CSE13</td>
                                <td>Cloud Computing</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21IoT02</td>
                                <td>Internet of Things</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td></td>
                                <td>Professional Elective-III</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td></td>
                                <td>Professional Elective-IV</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21AML04</td>
                                    <td>Introduction to Machine Learning</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21IoTIN</td>
                                    <td>Internship & Publication</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  
                                  
                                  
                                
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                  
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VIII</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td></td>
                                <td>Open Elective-II</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td></td>
                                <td>Professional Elective-V</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21INTPW</td>
                                <td>Project Work</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
            </div> 
              
             
              
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };

});

const iot_syss = ["iot_sys", "iot_syss"];

iot_syss.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >Curriculum & Syllabus.</h2>
          </div>
        `;

        const footerCard = `
          <div style=" background-color: #000957; color: white; text-align: center; height:25vh; width:100%;">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>iot_sys-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  h2 {
                      text-align: center;
                      margin-bottom: 20px;
                    }
                
                    table {
                      width: 100%;
                      border-collapse: collapse;
                      box-shadow: 0 0 10px rgba(0,0,0,0.1);
                      background-color: #fff;
                    }
                
                    th, td {
                      padding: 12px;
                      border: 1px solid #ddd;
                      text-align: center;
                    }
                
                    th {
                      background-color: #0077b6;
                      color: white;
                    }
                
                    tr:hover {
                      background-color: #caf0f8;
                      cursor: pointer;
                      transition: background-color 0.3s ease;
                    }
                    tr:active {
                      background-color: #90e0ef;
                    }
                }
              </style>
            </head>
            <body>
              ${headerCard}
              <div style="height:100%; padding:40px; text-align:left;overflow-y: auto;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-I</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG01</td>
                                <td>Basics In Communication</td>
                                <td>HS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>1</td>
                                <td>4</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MAT01</td>
                                <td>Algebra and Calculus</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21CHY01</td>
                                <td>Engineering Chemistry</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21GEN01</td>
                                <td>Engineering Graphics & Design</td>
                                <td>ES</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>5</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21ACY01</td>
                                    <td>Python Programming</td>
                                    <td>ES</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21PHYP1</td>
                                    <td>Engineering Physics Laboratory</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ACYP1</td>
                                    <td>Python Programming Laboratory</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21YOG01</td>
                                    <td>Yoga</td>
                                    <td>MC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-II</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG02</td>
                                <td>Technical Communication</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MAT02</td>
                                <td>Advanced Calculus and ODE</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>23PHY01</td>
                                <td>Engineering Physics</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21GEN03</td>
                                <td>Basic Electrical & Electronics Engineering</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21CSE01</td>
                                    <td>Programming in C</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  
                                
                                  <tr>
                                    <td>6</td>
                                    <td>21PHYP1</td>
                                    <td>Engineering Physics Laboratory</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ENGP2</td>
                                    <td>Communication Skills Laboratory</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>8</td>
                                    <td>21CSEP1</td>
                                    <td>Programming in C Laboratory</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21NCP02</td>
                                    <td>NSS</td>
                                    <td>NC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>0</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>10</td>
                                    <td>21GENP5</td>
                                    <td>Workshop Practices Laboratory</td>
                                    <td>NC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                    <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-III</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21MAT03</td>
                                <td>Discrete Structures</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              
                              <tr>
                                <td>2</td>
                                <td>21IoT01</td>
                                <td>Fundamental of Database Management Systems</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21CSE03</td>
                                <td>Object Oriented Programming</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>4</td>
                                    <td>21CSE02</td>
                                    <td>Data Structures</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21CSE03</td>
                                    <td>Object Oriented Programming</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21ENG03</td>
                                    <td>Professional Communication</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21CSEP3</td>
                                    <td>Data structures Lab</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21CSEP4</td>
                                    <td>Object Oriented Programming Lab</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                 
                                  
                                  <tr>
                                    <td>9</td>
                                    <td>21NCP03</td>
                                    <td>Environmental Science</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>10</td>
                                    <td>21ECE65</td>
                                    <td>Digital Logic and Design</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>11</td>
                                    <td>21IoTP1</td>
                                    <td>Database Management Systems Lab</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                 <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-IV</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21MAT06</td>
                                <td>Probability and Statistics</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21CSE07</td>
                                <td>Design and Analysis of Algorithms</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21IoT02</td>
                                <td>Internet of Things</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21ECE67</td>
                                <td>Sensors & Actuators</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21CSE11</td>
                                    <td>Computer Networks</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21ENG04</td>
                                    <td>Advanced Technical Communication</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ENG04</td>
                                    <td>Advanced Technical Communication</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>8</td>
                                    <td>21CSEP6</td>
                                    <td>Operating System lab</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21CSEP7</td>
                                    <td>Software Engineering Lab</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>10</td>
                                    <td>21NCP04</td>
                                    <td>Renewable Energy Source</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-V</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td></td>
                                <td>Open Elective-I</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21IoT03</td>
                                <td>IoT Architectures and Protocols</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21UHV02</td>
                                <td>Universal Human Values 2: Understanding Harmony</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21IoT04</td>
                                <td>Big Data in IoT</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21ECE66</td>
                                    <td>Microprocessors And Microcontrollers</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21UHV02</td>
                                    <td>Universal Human Values 2: Understanding Harmony</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td></td>
                                    <td>Professional Elective-I</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                
                                  <tr>
                                    <td>8</td>
                                    <td>21IoTP2</td>
                                    <td>Fundamentals of IoT lab</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21ECEP6</td>
                                    <td>Microprocessors And Microcontrollers Lab</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>10</td>
                                    <td>21NCP05</td>
                                    <td>Essence of Indian TraditionalKnowledge</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VI</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21IoT05</td>
                                <td>Programming for IoT boards</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21IoT06</td>
                                <td>Wearable Computing</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21CSE13</td>
                                <td>Cloud Computing</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21GEN06</td>
                                <td>Disaster Management</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td></td>
                                    <td>Professional Elective-II</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21IoTP3</td>
                                    <td>Cloud Computing Lab</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ENGP3</td>
                                    <td>Professional Communication Lab</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>8</td>
                                    <td>21CYSMP</td>
                                    <td>Mini Project</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VII</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21IoT07</td>
                                <td>Privacy and Security in IoT</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21CYS10</td>
                                <td>Wireless Adhoc and Sensor Networks</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21IoT08</td>
                                <td>Industrial IoT</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td></td>
                                <td>Open Elective-II</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td></td>
                                    <td>Professional Elective-III</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21IoTP4</td>
                                    <td>Security in IoT Lab</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21IoTIN</td>
                                    <td>Internship & Publication</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  
                                  
                                  
                                
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                  
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VIII</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td></td>
                                <td>Professional Elective-IV</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td></td>
                                <td>Professional Elective-V</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21IoTPW</td>
                                <td>Project Work</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
            </div> 
              
             
              
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };

});

const agri_syss = ["agri_sys", "agri_syss"];

agri_syss.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >Curriculum & Syllabus.</h2>
          </div>
        `;

        const footerCard = `
          <div style=" background-color: #000957; color: white; text-align: center; height:25vh; width:100%;">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>agri_sys-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  h2 {
                      text-align: center;
                      margin-bottom: 20px;
                    }
                
                    table {
                      width: 100%;
                      border-collapse: collapse;
                      box-shadow: 0 0 10px rgba(0,0,0,0.1);
                      background-color: #fff;
                    }
                
                    th, td {
                      padding: 12px;
                      border: 1px solid #ddd;
                      text-align: center;
                    }
                
                    th {
                      background-color: #0077b6;
                      color: white;
                    }
                
                    tr:hover {
                      background-color: #caf0f8;
                      cursor: pointer;
                      transition: background-color 0.3s ease;
                    }
                    tr:active {
                      background-color: #90e0ef;
                    }
                }
              </style>
            </head>
            <body>
              ${headerCard}
              <div style="height:100%; padding:40px; text-align:left;overflow-y: auto;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-I</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG01</td>
                                <td>Basics In Communication</td>
                                <td>HS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>1</td>
                                <td>4</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MAT01</td>
                                <td>Algebra and Calculus</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21CHY01</td>
                                <td>Engineering Chemistry</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21GEN01</td>
                                <td>Engineering Graphics & Design</td>
                                <td>ES</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>5</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21GEN02 </td>
                                    <td>Programming for ProblemSolving</td>
                                    <td>ES</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21PHYP1</td>
                                    <td>Engineering Physics Laboratory</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ACYP1</td>
                                    <td>Programming for ProblemSolving Laboratory</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21YOG01</td>
                                    <td>Yoga</td>
                                    <td>MC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-II</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG02</td>
                                <td>Technical Communication</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MAT02</td>
                                <td>Advanced Calculus and ODE</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>23PHY01</td>
                                <td>Engineering Physics</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21GEN03</td>
                                <td>Basic Electrical & Electronics Engineering</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21MEC01 </td>
                                    <td>Engineering Mechanics </td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  
                                
                                  <tr>
                                    <td>6</td>
                                    <td>21PHYP1</td>
                                    <td>Engineering Physics Laboratory</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ENGP2</td>
                                    <td>Communication Skills Laboratory</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                
                                  <tr>
                                    <td>8</td>
                                    <td>21NCP02</td>
                                    <td>NSS</td>
                                    <td>NC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>0</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>9</td>
                                    <td>21GENP5</td>
                                    <td>Workshop Practices Laboratory</td>
                                    <td>NC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                    <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-III</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21MAT05 </td>
                                <td>Numerical Solutions </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              
                              <tr>
                                <td>2</td>
                                <td>21AGR01 </td>
                                <td>Fundamentals of SoilScience</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21AGR02 </td>
                                <td>Surveying & Levelling </td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>4</td>
                                    <td>21AGR03 </td>
                                    <td>Irrigation Systems </td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21AGR04 </td>
                                    <td>Fluid and AppliedHydraulics Engineering</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21AGR05 </td>
                                    <td>Agricultural ProcessEngineering</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21NCP03</td>
                                    <td>Environmental Science </td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21AGRP1</td>
                                    <td>Surveying lab </td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                 
                                  
                                  <tr>
                                    <td>9</td>
                                    <td>21AGRP2 </td>
                                    <td>Hydraulic EngineeringLab</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                 
                                  
                                  
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                 <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-IV</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21AGR06 </td>
                                <td>Strength of Materials </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21AGR07</td>
                                <td>Drainage Engineering </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21AGR08 </td>
                                <td>Mechanics of soil </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21AGR09</td>
                                <td>Agronomy </td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21AGR10</td>
                                    <td>Ground Water and WellEngineering</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21NCP04 </td>
                                    <td>Renewable EnergySources</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21AGRP3 </td>
                                    <td>Strength of Material Lab </td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>8</td>
                                    <td>21AGRP4 </td>
                                    <td>Agricultural Engineeringpractice lab</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-V</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21AGE11 </td>
                                <td>Soil &Water conservationEngineering</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21AGE12 </td>
                                <td>Post Harvest Engineering </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21AGE13</td>
                                <td>Dairy & Food ProcessEngineering</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21NCP05 </td>
                                <td>Essence of Indian Traditional Knowledge</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td></td>
                                    <td>Professional Elective-1 </td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td></td>
                                    <td>Professional Elective-2 </td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21AGEP5 </td>
                                    <td>Diary and Food Engineering Lab</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                
                                  <tr>
                                    <td>8</td>
                                    <td>21AGEP6 </td>
                                    <td>Soil Mechanics Laboratory </td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21ENGP3 </td>
                                    <td>ProfessionalCommunication Lab</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                 
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VI</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21AGE16 </td>
                                <td>Micro Irrigation system </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21AGE17</td>
                                <td>Farm machinery and Equipment</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21AGE18</td>
                                <td>Building Materials</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td></td>
                                <td>Professional Elective-3 </td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td></td>
                                    <td>Professional Elective-4</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21AGEP7 </td>
                                    <td>Farm machinery and equipment Lab</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21AGEP8 </td>
                                    <td>Industrial Mini project </td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
          
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VII</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21AGE19 </td>
                                <td>Solid Waste Management </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21AGE20 </td>
                                <td>Tractor and Power units </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21UHV02</td>
                                <td>Universal Human Values -II</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td></td>
                                <td>Professional Elective-5 </td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td></td>
                                    <td>Open Elective-1 </td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21GEN06 </td>
                                    <td>Disaster Management </td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21AGEP9 </td>
                                    <td>Building Materials and Structural Drawing Lab</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21AGEP10</td>
                                    <td>Industrial Training (4 weeks During VI Semester –Summer)</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  
                                  
                                  
                                
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                  
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VIII</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td></td>
                                <td>Professional Elective-6 </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td></td>
                                <td>Open Elective-2</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21AGEP11</td>
                                <td>PROJECT WORK</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
            </div> 
              
             
              
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };
});

const ece_syss = ["ece_sys", "ece_syss"];

ece_syss.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >Curriculum & Syllabus.</h2>
          </div>
        `;

        const footerCard = `
          <div style=" background-color: #000957; color: white; text-align: center; height:25vh; width:100%;">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>ece_sys-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  h2 {
                      text-align: center;
                      margin-bottom: 20px;
                    }
                
                    table {
                      width: 100%;
                      border-collapse: collapse;
                      box-shadow: 0 0 10px rgba(0,0,0,0.1);
                      background-color: #fff;
                    }
                
                    th, td {
                      padding: 12px;
                      border: 1px solid #ddd;
                      text-align: center;
                    }
                
                    th {
                      background-color: #0077b6;
                      color: white;
                    }
                
                    tr:hover {
                      background-color: #caf0f8;
                      cursor: pointer;
                      transition: background-color 0.3s ease;
                    }
                    tr:active {
                      background-color: #90e0ef;
                    }
                }
              </style>
            </head>
            <body>
              ${headerCard}
              <div style="height:100%; padding:40px; text-align:left;overflow-y: auto;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-I</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG01</td>
                                <td>Basics In Communication</td>
                                <td>HS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>1</td>
                                <td>4</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MAT01</td>
                                <td>Algebra and Calculus</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21CHY01</td>
                                <td>Engineering Chemistry</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21GEN01</td>
                                <td>Engineering Graphics & Design</td>
                                <td>ES</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>5</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21GEN02 </td>
                                    <td>Programming for ProblemSolving</td>
                                    <td>ES</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21PHYP1</td>
                                    <td>Engineering Physics Laboratory</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ACYP1</td>
                                    <td>Programming for ProblemSolving Laboratory</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21YOG01</td>
                                    <td>Yoga</td>
                                    <td>MC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-II</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG02</td>
                                <td>Technical Communication</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MAT02</td>
                                <td>Advanced Calculus and ODE</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>23PHY01</td>
                                <td>Engineering Physics</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21GEN03</td>
                                <td>Basic Electrical & Electronics Engineering</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21MEC01 </td>
                                    <td>Engineering Mechanics </td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  
                                
                                  <tr>
                                    <td>6</td>
                                    <td>21PHYP1</td>
                                    <td>Engineering Physics Laboratory</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ENGP2</td>
                                    <td>Communication Skills Laboratory</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                
                                  <tr>
                                    <td>8</td>
                                    <td>21NCP02</td>
                                    <td>NSS</td>
                                    <td>NC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>0</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>9</td>
                                    <td>21GENP5</td>
                                    <td>Workshop Practices Laboratory</td>
                                    <td>NC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                    <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-III</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG03  </td>
                                <td>Professional Communication </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              
                              <tr>
                                <td>2</td>
                                <td>21MAT05 </td>
                                <td>Mathematics III </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21EEE02 </td>
                                <td>Electrical Machinery</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>4</td>
                                    <td>21EEE03</td>
                                    <td>Engineering Electromagnetics </td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21EEE04  </td>
                                    <td>Semiconductor Devices & Circuits </td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21EEE05  </td>
                                    <td>Transmission & Distribution </td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21NCP03</td>
                                    <td>Environmental Science </td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21EEEP1 </td>
                                    <td>Electrical Machinery I Lab </td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                 
                                  
                                  <tr>
                                    <td>9</td>
                                    <td>21EEEP2</td>
                                    <td>Circuits & Devices Lab </td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                 
                                  
                                  
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                 <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-IV</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG04  </td>
                                <td>Advanced Technical Communucation </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21EEE06 </td>
                                <td>Electrical Machinery II</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21EEE07  </td>
                                <td>Measurements & Instrumentation </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21EEE08 </td>
                                <td>Control Systems </td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21EEE09 </td>
                                    <td>Analog & Digital Circuits </td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21NCP04 </td>
                                    <td>Renewable EnergySources</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21EEEP3  </td>
                                    <td>Electrical Machinery II Lab </td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>8</td>
                                    <td>21EEEP5</td>
                                    <td>Analog & Digital Circuits Lab </td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
       
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-V</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21EEE10</td>
                                <td>Power electronics </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21EEE11  </td>
                                <td>Power System Analysis </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21EEE12</td>
                                <td>Protection and Switchgear </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21EEE13</td>
                                <td>Microprocessor and Microcontroller</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21CSE03 </td>
                                    <td>Object Oriented Programming </td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td></td>
                                    <td>Professional Elective I </td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21NCP05</td>
                                    <td>Essence of Indian Traditional Knowledge</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                
                                  <tr>
                                    <td>8</td>
                                    <td>21EEEP6  </td>
                                    <td>Microprocessor and Microcontroller Lab </td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21CSEP4  </td>
                                    <td>Object Oriented Programming Lab </td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>10</td>
                                    <td>21ENGP3</td>
                                    <td>Professional Communication Lab </td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                 
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VI</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21EEE14</td>
                                <td>Solid State Drives </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21UHV02</td>
                                <td>Professional Ethics and Human Values (UHV-II) </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td></td>
                                <td>Professional Elective - II </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td></td>
                                <td>Professional Elective - III</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td></td>
                                    <td>Open Elective - I </td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td> </td>
                                    <td>Open Elective - II</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21EEEP7</td>
                                    <td>Power Electronics & Drives Lab</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                   <tr>
                                    <td>8</td>
                                    <td>21EEEIN </td>
                                    <td>Internship / In-plant Training </td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21EEEMP</td>
                                    <td>Mini Project </td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
          
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VII</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21GEN06</td>
                                <td>Disaster Management </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21EEE15  </td>
                                <td>Power System Operation and Control </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td></td>
                                <td>Professional Elective – IV I</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td></td>
                                <td>Professional Elective-IV </td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td></td>
                                    <td>Open Elective-III </td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21EEEP8</td>
                                    <td>Power System Simulation Lab </td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21EEETS  </td>
                                    <td>Technical Seminar/ Publication </td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
              
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                  
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VIII</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td></td>
                                <td>Open Elective -IV  </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td></td>
                                <td>Professional Elective - VI </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21EEEPW </td>
                                <td>PROJECT WORK</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
            </div> 
              
             
              
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };

});

const eee_syss = ["eee_sys", "eee_syss"];

eee_syss.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >Curriculum & Syllabus.</h2>
          </div>
        `;

        const footerCard = `
          <div style=" background-color: #000957; color: white; text-align: center; height:25vh; width:100%;">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>eee_sys-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  h2 {
                      text-align: center;
                      margin-bottom: 20px;
                    }
                
                    table {
                      width: 100%;
                      border-collapse: collapse;
                      box-shadow: 0 0 10px rgba(0,0,0,0.1);
                      background-color: #fff;
                    }
                
                    th, td {
                      padding: 12px;
                      border: 1px solid #ddd;
                      text-align: center;
                    }
                
                    th {
                      background-color: #0077b6;
                      color: white;
                    }
                
                    tr:hover {
                      background-color: #caf0f8;
                      cursor: pointer;
                      transition: background-color 0.3s ease;
                    }
                    tr:active {
                      background-color: #90e0ef;
                    }
                }
              </style>
            </head>
            <body>
              ${headerCard}
              <div style="height:100%; padding:40px; text-align:left;overflow-y: auto;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-I</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG01</td>
                                <td>Basics In Communication</td>
                                <td>HS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>1</td>
                                <td>4</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MAT01</td>
                                <td>Algebra and Calculus</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21CHY01</td>
                                <td>Engineering Chemistry</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21GEN01</td>
                                <td>Engineering Graphics & Design</td>
                                <td>ES</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>5</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21GEN02 </td>
                                    <td>Programming for ProblemSolving</td>
                                    <td>ES</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21PHYP1</td>
                                    <td>Engineering Physics Laboratory</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ACYP1</td>
                                    <td>Programming for ProblemSolving Laboratory</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21YOG01</td>
                                    <td>Yoga</td>
                                    <td>MC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-II</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG02</td>
                                <td>Technical Communication</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MAT02</td>
                                <td>Advanced Calculus and ODE</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>23PHY01</td>
                                <td>Engineering Physics</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21GEN03</td>
                                <td>Basic Electrical & Electronics Engineering</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21MEC01 </td>
                                    <td>Engineering Mechanics </td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  
                                
                                  <tr>
                                    <td>6</td>
                                    <td>21PHYP1</td>
                                    <td>Engineering Physics Laboratory</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ENGP2</td>
                                    <td>Communication Skills Laboratory</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                
                                  <tr>
                                    <td>8</td>
                                    <td>21NCP02</td>
                                    <td>NSS</td>
                                    <td>NC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>0</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>9</td>
                                    <td>21GENP5</td>
                                    <td>Workshop Practices Laboratory</td>
                                    <td>NC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                    <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-III</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG03  </td>
                                <td>Professional Communication </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              
                              <tr>
                                <td>2</td>
                                <td>21MAT05 </td>
                                <td>Mathematics III </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21EEE02 </td>
                                <td>Electrical Machinery</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>4</td>
                                    <td>21EEE03</td>
                                    <td>Engineering Electromagnetics </td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21EEE04  </td>
                                    <td>Semiconductor Devices & Circuits </td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21EEE05  </td>
                                    <td>Transmission & Distribution </td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21NCP03</td>
                                    <td>Environmental Science </td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21EEEP1 </td>
                                    <td>Electrical Machinery I Lab </td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                 
                                  
                                  <tr>
                                    <td>9</td>
                                    <td>21EEEP2</td>
                                    <td>Circuits & Devices Lab </td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                 
                                  
                                  
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                 <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-IV</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG04  </td>
                                <td>Advanced Technical Communucation </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21EEE06 </td>
                                <td>Electrical Machinery II</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21EEE07  </td>
                                <td>Measurements & Instrumentation </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21EEE08 </td>
                                <td>Control Systems </td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21EEE09 </td>
                                    <td>Analog & Digital Circuits </td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21NCP04 </td>
                                    <td>Renewable EnergySources</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21EEEP3  </td>
                                    <td>Electrical Machinery II Lab </td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>8</td>
                                    <td>21EEEP5</td>
                                    <td>Analog & Digital Circuits Lab </td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
       
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-V</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21EEE10</td>
                                <td>Power electronics </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21EEE11  </td>
                                <td>Power System Analysis </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21EEE12</td>
                                <td>Protection and Switchgear </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21EEE13</td>
                                <td>Microprocessor and Microcontroller</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21CSE03 </td>
                                    <td>Object Oriented Programming </td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td></td>
                                    <td>Professional Elective I </td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21NCP05</td>
                                    <td>Essence of Indian Traditional Knowledge</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                
                                  <tr>
                                    <td>8</td>
                                    <td>21EEEP6  </td>
                                    <td>Microprocessor and Microcontroller Lab </td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21CSEP4  </td>
                                    <td>Object Oriented Programming Lab </td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>10</td>
                                    <td>21ENGP3</td>
                                    <td>Professional Communication Lab </td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                 
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VI</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21EEE14</td>
                                <td>Solid State Drives </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21UHV02</td>
                                <td>Professional Ethics and Human Values (UHV-II) </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td></td>
                                <td>Professional Elective - II </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td></td>
                                <td>Professional Elective - III</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td></td>
                                    <td>Open Elective - I </td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td> </td>
                                    <td>Open Elective - II</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21EEEP7</td>
                                    <td>Power Electronics & Drives Lab</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                   <tr>
                                    <td>8</td>
                                    <td>21EEEIN </td>
                                    <td>Internship / In-plant Training </td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21EEEMP</td>
                                    <td>Mini Project </td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
          
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VII</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21GEN06</td>
                                <td>Disaster Management </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21EEE15  </td>
                                <td>Power System Operation and Control </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td></td>
                                <td>Professional Elective – IV I</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td></td>
                                <td>Professional Elective-IV </td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td></td>
                                    <td>Open Elective-III </td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21EEEP8</td>
                                    <td>Power System Simulation Lab </td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21EEETS  </td>
                                    <td>Technical Seminar/ Publication </td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
              
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                  
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VIII</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td></td>
                                <td>Open Elective -IV  </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td></td>
                                <td>Professional Elective - VI </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21EEEPW </td>
                                <td>PROJECT WORK</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
            </div> 
              
             
              
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };


});


const mech_syss = ["mech_sys", "mech_syss"];

mech_syss.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >Curriculum & Syllabus.</h2>
          </div>
        `;

        const footerCard = `
          <div style=" background-color: #000957; color: white; text-align: center; height:25vh; width:100%;">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>mech_sys-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  h2 {
                      text-align: center;
                      margin-bottom: 20px;
                    }
                
                    table {
                      width: 100%;
                      border-collapse: collapse;
                      box-shadow: 0 0 10px rgba(0,0,0,0.1);
                      background-color: #fff;
                    }
                
                    th, td {
                      padding: 12px;
                      border: 1px solid #ddd;
                      text-align: center;
                    }
                
                    th {
                      background-color: #0077b6;
                      color: white;
                    }
                
                    tr:hover {
                      background-color: #caf0f8;
                      cursor: pointer;
                      transition: background-color 0.3s ease;
                    }
                    tr:active {
                      background-color: #90e0ef;
                    }
                }
              </style>
            </head>
            <body>
              ${headerCard}
              <div style="height:100%; padding:40px; text-align:left;overflow-y: auto;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-I</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG01</td>
                                <td>Basics In Communication</td>
                                <td>HS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>1</td>
                                <td>4</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MAT01</td>
                                <td>Algebra and Calculus</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21CHY01</td>
                                <td>Engineering Chemistry</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21GEN01</td>
                                <td>Engineering Graphics & Design</td>
                                <td>ES</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>5</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21GEN02 </td>
                                    <td>Programming for ProblemSolving</td>
                                    <td>ES</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21PHYP1</td>
                                    <td>Engineering Physics Laboratory</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ACYP1</td>
                                    <td>Programming for ProblemSolving Laboratory</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21YOG01</td>
                                    <td>Yoga</td>
                                    <td>MC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-II</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG02</td>
                                <td>Technical Communication</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MAT02</td>
                                <td>Advanced Calculus and ODE</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>23PHY01</td>
                                <td>Engineering Physics</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21GEN03</td>
                                <td>Basic Electrical & Electronics Engineering</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21MEC01 </td>
                                    <td>Engineering Mechanics </td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  
                                
                                  <tr>
                                    <td>6</td>
                                    <td>21PHYP1</td>
                                    <td>Engineering Physics Laboratory</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ENGP2</td>
                                    <td>Communication Skills Laboratory</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                
                                  <tr>
                                    <td>8</td>
                                    <td>21NCP02</td>
                                    <td>NSS</td>
                                    <td>NC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>0</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>9</td>
                                    <td>21GENP5</td>
                                    <td>Workshop Practices Laboratory</td>
                                    <td>NC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                    <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-III</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21MAT03</td>
                                <td>Numerical Methods </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              
                              <tr>
                                <td>2</td>
                                <td>21MEC02 </td>
                                <td>Applied Thermodynamics </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21MEC03  </td>
                                <td>Fluid Mechanics & Machineries </td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>4</td>
                                    <td>21EEC04 </td>
                                    <td>Electrical Drives and Control  </td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21MEC05   </td>
                                    <td>Manufacturing Technology </td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21MEC06 </td>
                                    <td>Engineering Metallurgy </td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21MECP1 </td>
                                    <td>Manufacturing Technology Lab </td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21MECP2  </td>
                                    <td>Fluid Mechanics and machinery Lab </td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
        
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                 <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-IV</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21MEC09</td>
                                <td>Theory of Machines </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MEC10</td>
                                <td>Strength of Materials </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td></td>
                                <td>Open Elective – I </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21MEC11  </td>
                                <td>Design of Machine Elements </td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21MEC12  </td>
                                    <td>Thermal Engineering </td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21HSC02 </td>
                                    <td>Universal Human Values II </td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21MECP3  </td>
                                    <td>Thermal Engineering Lab </td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>8</td>
                                    <td>21MECP4</td>
                                    <td>Theory of Machines Lab </td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
       
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-V</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21MEC16 </td>
                                <td>Design of Transmission Elements </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MEC17 </td>
                                <td>Metrology & Measurements </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21MEC18 </td>
                                <td>CAD/CAM  </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21MEC19 </td>
                                <td>Energy conversion systems </td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21MEC20 </td>
                                    <td>Open Elective – II </td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td></td>
                                    <td>Professional Elective – I </td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21MECP5 </td>
                                    <td>Metrology & Measurements Lab </td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                
                                  <tr>
                                    <td>8</td>
                                    <td>21MECP6   </td>
                                    <td>CAD/CAM Lab </td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21GENP7  </td>
                                    <td>Business English/Career development Program </td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                 
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VI</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21MEC22 </td>
                                <td>Finite Element Analysis </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MEC23 </td>
                                <td>Heat and Mass Transfer </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td></td>
                                <td>Professional Elective – II </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td></td>
                                <td>Professional Elective - III</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td></td>
                                    <td>Open Elective - III </td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21MEC24  </td>
                                    <td>Management Science and Productivity </td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21MEC25 </td>
                                    <td>Mini Project </td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                   <tr>
                                    <td>8</td>
                                    <td>21GENP9  </td>
                                    <td>Heat Transfer and R & AC Lab </td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VII</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21MEC26 </td>
                                <td>Power Plant Engineering </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MEC27 </td>
                                <td>Automobile Technology </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td></td>
                                <td>Professional Elective – IV I</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td></td>
                                <td>Professional Elective-IV </td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td></td>
                                    <td>Open Elective-IV</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21GEN09 </td>
                                    <td>Comprehensive Viva Voce </td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                  
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VIII</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21MEC30 </td>
                                <td>Project Management </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td></td>
                                <td>Professional Elective - VI  </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21MEC31  </td>
                                <td>PROJECT WORK</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
            </div> 
              
             
              
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };

});

const aids_fee = ["aids_fee", "aids_feee"];

aids_fee.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >FEE STRUCTURE (PER SEM)</h2>
          </div>
        `;

        const footerCard = `
          <div style=" background-color: #000957; color: white; text-align: center; height:25vh; width:100%;">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>aids_fee-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  h2 {
                      text-align: center;
                      margin-bottom: 20px;
                    }
                
                    table {
                      width: 100%;
                      border-collapse: collapse;
                      box-shadow: 0 0 10px rgba(0,0,0,0.1);
                      background-color: #fff;
                    }
                
                    th, td {
                      padding: 12px;
                      border: 1px solid #ddd;
                      text-align: center;
                    }
                
                    th {
                      background-color: #0077b6;
                      color: white;
                    }
                
                    tr:hover {
                      background-color: #caf0f8;
                      cursor: pointer;
                      transition: background-color 0.3s ease;
                    }
                    tr:active {
                      background-color: #90e0ef;
                    }
                }
              </style>
            </head>
            <body>
              ${headerCard}
                <div style="margin-top:60px;">
                     <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Programms</th>
                                <th>70-80%(HSC)</th>
                                <th>60-69%(HSC)</th>
                                <th>50-59%(HSC)</th>
                                <th>50%-Below(HSC)</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>B.Tech - Articial Intelligence and Data Science</td>
                                <td>75,000</td>
                                <td>87,000</td>
                                <td>1,00,000</td>
                                <td>1,12,500</td>
                                
                              </tr>
                              
                                  
                                </tbody>
                        </table>
                
    
                </div>
              
             
              
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };


});

const aiml_fee = ["aiml_fee", "aiml_feee"];

aiml_fee.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");
        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >FEE STRUCTURE (PER SEM)</h2>
          </div>
        `;

        const footerCard = `
          <div style=" background-color: #000957; color: white; text-align: center; height:25vh; width:100%;">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>aiml_fee-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  h2 {
                      text-align: center;
                      margin-bottom: 20px;
                    }
                
                    table {
                      width: 100%;
                      border-collapse: collapse;
                      box-shadow: 0 0 10px rgba(0,0,0,0.1);
                      background-color: #fff;
                    }
                
                    th, td {
                      padding: 12px;
                      border: 1px solid #ddd;
                      text-align: center;
                    }
                
                    th {
                      background-color: #0077b6;
                      color: white;
                    }
                
                    tr:hover {
                      background-color: #caf0f8;
                      cursor: pointer;
                      transition: background-color 0.3s ease;
                    }
                    tr:active {
                      background-color: #90e0ef;
                    }
                }
              </style>
            </head>
            <body>
              ${headerCard}
                <div style="margin-top:60px;">
                     <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Programms</th>
                                <th>70-80%(HSC)</th>
                                <th>60-69%(HSC)</th>
                                <th>50-59%(HSC)</th>
                                <th>50%-Below(HSC)</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>B.Tech - Articial Intelligence and Machine Learning</td>
                                <td>75,000</td>
                                <td>87,000</td>
                                <td>1,00,000</td>
                                <td>1,12,500</td>
                                
                              </tr>
                              
                                  
                                </tbody>
                        </table>
                
    
                </div>
              
             
              
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };

});

const cys_fee = ["cys_fee", "cys_feee"];

cys_fee.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >FEE STRUCTURE (PER SEM)</h2>
          </div>
        `;

        const footerCard = `
          <div style=" background-color: #000957; color: white; text-align: center; height:25vh; width:100%;">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>cys_fee-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  h2 {
                      text-align: center;
                      margin-bottom: 20px;
                    }
                
                    table {
                      width: 100%;
                      border-collapse: collapse;
                      box-shadow: 0 0 10px rgba(0,0,0,0.1);
                      background-color: #fff;
                    }
                
                    th, td {
                      padding: 12px;
                      border: 1px solid #ddd;
                      text-align: center;
                    }
                
                    th {
                      background-color: #0077b6;
                      color: white;
                    }
                
                    tr:hover {
                      background-color: #caf0f8;
                      cursor: pointer;
                      transition: background-color 0.3s ease;
                    }
                    tr:active {
                      background-color: #90e0ef;
                    }
                }
              </style>
            </head>
            <body>
              ${headerCard}
                <div style="margin-top:60px;">
                     <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Programms</th>
                                <th>70-80%(HSC)</th>
                                <th>60-69%(HSC)</th>
                                <th>50-59%(HSC)</th>
                                <th>50%-Below(HSC)</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>B.Tech - Computer Science Engineering(Cyber Security)</td>
                                <td>75,000</td>
                                <td>87,000</td>
                                <td>1,00,000</td>
                                <td>1,12,500</td>
                                
                              </tr>
                              
                                  
                                </tbody>
                        </table>
                
    
                </div>
              
             
              
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };


});

const it_fee = ["it_fee", "it_feee"];

it_fee.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >FEE STRUCTURE (PER SEM)</h2>
          </div>
        `;

        const footerCard = `
          <div style=" background-color: #000957; color: white; text-align: center; height:25vh; width:100%;">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>it_fee-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  h2 {
                      text-align: center;
                      margin-bottom: 20px;
                    }
                
                    table {
                      width: 100%;
                      border-collapse: collapse;
                      box-shadow: 0 0 10px rgba(0,0,0,0.1);
                      background-color: #fff;
                    }
                
                    th, td {
                      padding: 12px;
                      border: 1px solid #ddd;
                      text-align: center;
                    }
                
                    th {
                      background-color: #0077b6;
                      color: white;
                    }
                
                    tr:hover {
                      background-color: #caf0f8;
                      cursor: pointer;
                      transition: background-color 0.3s ease;
                    }
                    tr:active {
                      background-color: #90e0ef;
                    }
                }
              </style>
            </head>
            <body>
              ${headerCard}
                <div style="margin-top:60px;">
                     <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Programms</th>
                                <th>70-80%(HSC)</th>
                                <th>60-69%(HSC)</th>
                                <th>50-59%(HSC)</th>
                                <th>50%-Below(HSC)</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>B.Tech - Information Technology</td>
                                <td>75,000</td>
                                <td>87,000</td>
                                <td>1,00,000</td>
                                <td>1,12,500</td>
                                
                              </tr>
                              
                                  
                                </tbody>
                        </table>
                
    
                </div>
              
             
              
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };


});


const cse_fee = ["cse_fee", "cse_feee"];

cse_fee.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >FEE STRUCTURE (PER SEM)</h2>
          </div>
        `;

        const footerCard = `
          <div style=" background-color: #000957; color: white; text-align: center; height:25vh; width:100%;">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>cse_fee-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  h2 {
                      text-align: center;
                      margin-bottom: 20px;
                    }
                
                    table {
                      width: 100%;
                      border-collapse: collapse;
                      box-shadow: 0 0 10px rgba(0,0,0,0.1);
                      background-color: #fff;
                    }
                
                    th, td {
                      padding: 12px;
                      border: 1px solid #ddd;
                      text-align: center;
                    }
                
                    th {
                      background-color: #0077b6;
                      color: white;
                    }
                
                    tr:hover {
                      background-color: #caf0f8;
                      cursor: pointer;
                      transition: background-color 0.3s ease;
                    }
                    tr:active {
                      background-color: #90e0ef;
                    }
                }
              </style>
            </head>
            <body>
              ${headerCard}
                <div style="margin-top:60px;">
                     <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Programms</th>
                                <th>70-80%(HSC)</th>
                                <th>60-69%(HSC)</th>
                                <th>50-59%(HSC)</th>
                                <th>50%-Below(HSC)</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>B.Tech - Computer Science Engineering</td>
                                <td>75,000</td>
                                <td>87,000</td>
                                <td>1,00,000</td>
                                <td>1,12,500</td>
                                
                              </tr>
                              
                                  
                                </tbody>
                        </table>
                
    
                </div>
              
             
              
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };


});


const iot_fee = ["iot_fee", "iot_feee"];

iot_fee.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >FEE STRUCTURE (PER SEM)</h2>
          </div>
        `;

        const footerCard = `
          <div style=" background-color: #000957; color: white; text-align: center; height:25vh; width:100%;">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>iot_fee-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  h2 {
                      text-align: center;
                      margin-bottom: 20px;
                    }
                
                    table {
                      width: 100%;
                      border-collapse: collapse;
                      box-shadow: 0 0 10px rgba(0,0,0,0.1);
                      background-color: #fff;
                    }
                
                    th, td {
                      padding: 12px;
                      border: 1px solid #ddd;
                      text-align: center;
                    }
                
                    th {
                      background-color: #0077b6;
                      color: white;
                    }
                
                    tr:hover {
                      background-color: #caf0f8;
                      cursor: pointer;
                      transition: background-color 0.3s ease;
                    }
                    tr:active {
                      background-color: #90e0ef;
                    }
                }
              </style>
            </head>
            <body>
              ${headerCard}
                <div style="margin-top:60px;">
                     <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Programms</th>
                                <th>Tuition Fee</th>
                                
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>B.Tech - Internet of Things </td>
                                <td>50,000</td>
                                
                                
                              </tr>
                              
                                  
                                </tbody>
                        </table>
                
    
                </div>
              
             
              
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };

});

const agri_fee = ["agri_fee", "agri_feee"];

agri_fee.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >FEE STRUCTURE (PER SEM)</h2>
          </div>
        `;

        const footerCard = `
          <div style=" background-color: #000957; color: white; text-align: center; height:25vh; width:100%;">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>agri_fee-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  h2 {
                      text-align: center;
                      margin-bottom: 20px;
                    }
                
                    table {
                      width: 100%;
                      border-collapse: collapse;
                      box-shadow: 0 0 10px rgba(0,0,0,0.1);
                      background-color: #fff;
                    }
                
                    th, td {
                      padding: 12px;
                      border: 1px solid #ddd;
                      text-align: center;
                    }
                
                    th {
                      background-color: #0077b6;
                      color: white;
                    }
                
                    tr:hover {
                      background-color: #caf0f8;
                      cursor: pointer;
                      transition: background-color 0.3s ease;
                    }
                    tr:active {
                      background-color: #90e0ef;
                    }
                }
              </style>
            </head>
            <body>
              ${headerCard}
                <div style="margin-top:60px;">
                     <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Programms</th>
                                <th>Tuition Fee</th>
                                
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>B.Tech - Agricultural Engineering</td>
                                <td>50,000</td>
                                
                                
                              </tr>
                              
                                  
                                </tbody>
                        </table>
                
    
                </div>
              
             
              
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };

});

const bio_fee = ["bio_fee", "bio_feee"];

bio_fee.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >FEE STRUCTURE (PER SEM)</h2>
          </div>
        `;

        const footerCard = `
          <div style=" background-color: #000957; color: white; text-align: center; height:25vh; width:100%;">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>bio_fee-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  h2 {
                      text-align: center;
                      margin-bottom: 20px;
                    }
                
                    table {
                      width: 100%;
                      border-collapse: collapse;
                      box-shadow: 0 0 10px rgba(0,0,0,0.1);
                      background-color: #fff;
                    }
                
                    th, td {
                      padding: 12px;
                      border: 1px solid #ddd;
                      text-align: center;
                    }
                
                    th {
                      background-color: #0077b6;
                      color: white;
                    }
                
                    tr:hover {
                      background-color: #caf0f8;
                      cursor: pointer;
                      transition: background-color 0.3s ease;
                    }
                    tr:active {
                      background-color: #90e0ef;
                    }
                }
              </style>
            </head>
            <body>
              ${headerCard}
                <div style="margin-top:60px;">
                     <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Programms</th>
                                <th>Tuition Fee</th>
                                
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>B.Tech - Biomedical Engineering</td>
                                <td>50,000</td>
                                
                                
                              </tr>
                              
                                  
                                </tbody>
                        </table>
                
    
                </div>
              
             
              
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };

});


const biotech_fee = ["biotech_fee", "biotech_feee"];

biotech_fee.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >FEE STRUCTURE (PER SEM)</h2>
          </div>
        `;

        const footerCard = `
          <div style=" background-color: #000957; color: white; text-align: center; height:25vh; width:100%;">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>biotech_fee-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  h2 {
                      text-align: center;
                      margin-bottom: 20px;
                    }
                
                    table {
                      width: 100%;
                      border-collapse: collapse;
                      box-shadow: 0 0 10px rgba(0,0,0,0.1);
                      background-color: #fff;
                    }
                
                    th, td {
                      padding: 12px;
                      border: 1px solid #ddd;
                      text-align: center;
                    }
                
                    th {
                      background-color: #0077b6;
                      color: white;
                    }
                
                    tr:hover {
                      background-color: #caf0f8;
                      cursor: pointer;
                      transition: background-color 0.3s ease;
                    }
                    tr:active {
                      background-color: #90e0ef;
                    }
                }
              </style>
            </head>
            <body>
              ${headerCard}
                <div style="margin-top:60px;">
                     <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Programms</th>
                                <th>Tuition Fee</th>
                                
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>B.Tech - BioTechnology Engineering</td>
                                <td>50,000</td>
                                
                                
                              </tr>
                              
                                  
                                </tbody>
                        </table>
                
    
                </div>
              
             
              
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };

});

const ece_fee = ["ece_fee", "ece_feee"];

ece_fee.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >FEE STRUCTURE (PER SEM)</h2>
          </div>
        `;

        const footerCard = `
          <div style=" background-color: #000957; color: white; text-align: center; height:25vh; width:100%;">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>ece_fee-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  h2 {
                      text-align: center;
                      margin-bottom: 20px;
                    }
                
                    table {
                      width: 100%;
                      border-collapse: collapse;
                      box-shadow: 0 0 10px rgba(0,0,0,0.1);
                      background-color: #fff;
                    }
                
                    th, td {
                      padding: 12px;
                      border: 1px solid #ddd;
                      text-align: center;
                    }
                
                    th {
                      background-color: #0077b6;
                      color: white;
                    }
                
                    tr:hover {
                      background-color: #caf0f8;
                      cursor: pointer;
                      transition: background-color 0.3s ease;
                    }
                    tr:active {
                      background-color: #90e0ef;
                    }
                }
              </style>
            </head>
            <body>
              ${headerCard}
                <div style="margin-top:60px;">
                     <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Programms</th>
                                <th>Tuition Fee</th>
                                
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>B.Tech - Electronic Communication Engineering</td>
                                <td>50,000</td>
                                
                                
                              </tr>
                              
                                  
                                </tbody>
                        </table>
                
    
                </div>
              
             
              
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };

});


const eee_fee = ["eee_fee", "eee_feee"];

eee_fee.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >FEE STRUCTURE (PER SEM)</h2>
          </div>
        `;

        const footerCard = `
          <div style=" background-color: #000957; color: white; text-align: center; height:25vh; width:100%;">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>eee_fee-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  h2 {
                      text-align: center;
                      margin-bottom: 20px;
                    }
                
                    table {
                      width: 100%;
                      border-collapse: collapse;
                      box-shadow: 0 0 10px rgba(0,0,0,0.1);
                      background-color: #fff;
                    }
                
                    th, td {
                      padding: 12px;
                      border: 1px solid #ddd;
                      text-align: center;
                    }
                
                    th {
                      background-color: #0077b6;
                      color: white;
                    }
                
                    tr:hover {
                      background-color: #caf0f8;
                      cursor: pointer;
                      transition: background-color 0.3s ease;
                    }
                    tr:active {
                      background-color: #90e0ef;
                    }
                }
              </style>
            </head>
            <body>
              ${headerCard}
                <div style="margin-top:60px;">
                     <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Programms</th>
                                <th>Tuition Fee</th>
                                
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>B.Tech - Electrical Electronic Engineering</td>
                                <td>50,000</td>
                                
                                
                              </tr>
                              
                                  
                                </tbody>
                        </table>
                
    
                </div>
              
             
              
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };

});

const mech_fee = ["mech_fee", "mech_feee"];

mech_fee.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        const headerCard = `
          <div style="padding: 20px; background-color: #f5f5f5; text-align:center; height:8vh">
            <h1 style="font-size:40px;">DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
             <h2 style="color:orange; font-size:30px;" >FEE STRUCTURE (PER SEM)</h2>
          </div>
        `;

        const footerCard = `
          <div style=" background-color: #000957; color: white; text-align: center; height:25vh; width:100%;">
            <h2 style="color:#FFC107; text-align:center; font-size:25px; ">Contact Us</h2>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:10px;" href="">NH-45,Trichy chennai Trunk Road,Samayapuram(near Samayapuram toll-plaza),Trichirapalli-621-112,Tamil-nadu,India</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Toll Free Number:1800-5322-222</a>
            </div>
            <div style="margin-top:10px;>
            <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">+91 6384176766 | +91 6384176769</a>
            </div>
            <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">Enquiry@dsuniversity.ac.in</a>
             </div>
             <div style="margin-top:10px;>
             <a style="color:#F1EFEC; font-size:18px; padding-bottom:20px;" href="">www.dsuniversity.ac.in</a>
             <div>
          </div>
        `;

        newPage.document.write(`
          <html>
            <head>
              <title>mech_fee-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  h2 {
                      text-align: center;
                      margin-bottom: 20px;
                    }
                
                    table {
                      width: 100%;
                      border-collapse: collapse;
                      box-shadow: 0 0 10px rgba(0,0,0,0.1);
                      background-color: #fff;
                    }
                
                    th, td {
                      padding: 12px;
                      border: 1px solid #ddd;
                      text-align: center;
                    }
                
                    th {
                      background-color: #0077b6;
                      color: white;
                    }
                
                    tr:hover {
                      background-color: #caf0f8;
                      cursor: pointer;
                      transition: background-color 0.3s ease;
                    }
                    tr:active {
                      background-color: #90e0ef;
                    }
                }
              </style>
            </head>
            <body>
              ${headerCard}
                <div style="margin-top:60px;">
                     <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Programms</th>
                                <th>Tuition Fee</th>
                                
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>B.Tech - Mechanical Engineering</td>
                                <td>50,000</td>
                                
                                
                              </tr>
                              
                                  
                                </tbody>
                        </table>
                
    
                </div>
              
             
              
              ${footerCard}
            </body>
          </html>
        `);
        newPage.document.close();
    };
});