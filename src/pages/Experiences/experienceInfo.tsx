import FIFC from "../../photos/Experiences/FIFC.jpg";
import Kumon from "../../photos/Experiences/Kumon.gif";
import MetRocketry from "../../photos/Experiences/MetRocketry.png"
import MACH from "../../photos/Experiences/MACH.png"
// Define the Skill type
type Experiences = {
  name: string;
  photo: any;
  description: string;
  time: string;
  job: string;
  learnMore: string;
};

// Define and export the skills array
export const experiences: Experiences[] = [
  {
    name: "MACH (Metropolitan Aerospace Combustion Hub)",
    photo: MACH,
    job: "Avionics Member",
    time: "Sept 2025 - Present",
    description: "•	Enabling real-time inter-board communication across 5+ custom PCBs by developing a CAN bus driver in C++ for an RP2040",
    learnMore: "Click to Learn More"

  },
  {
    name: "MetRocketry",
    photo: MetRocketry,
    job: "Control Systems Assitant",
    time: "Sept 2024 - Present",
    description: "In this role, I led a team of four student developers to design a real-time canard actuation system on an STM32 microcontroller running FreeRTOS, achieving end-to-end control loop latencies of ≤3 ms. I implemented a 500 Hz Madgwick orientation filter by fusing 6-DoF IMU and 3-axis magnetometer data to produce stable quaternion and Euler-angle roll estimates, enabling responsive closed-loop control. Sensor data was captured using SPI data-ready interrupts with circular DMA to ensure low-jitter, time-aligned inputs to the attitude and heading reference system (AHRS). I also integrated STM32 timer-based PWM to eliminate jitter in servo actuation at 333 Hz. To improve reliability and maintainability, I added continuous integration gates with ELF builds and Cppcheck in GitHub Actions, catching ~47% of pull requests and reducing both defects and review time. Additional sensor fusion using a complementary filter provided accurate altitude and vertical velocity estimates by combining AHRS data with barometric pressure, supporting apogee detection.",
    learnMore: "Click to Learn More"
  },
  {
    name: "First Insurance Funding of Canada",
    photo: FIFC,
    job: "Fullstack Developer Intern",
    time: "May 2025 - August 2025",
    description: "At this role, I led a large-scale security remediation effort, resolving over 900+ static analysis findings identified by Checkmarx in a C#/ASP.NET codebase. I centralized input validation, implemented redirect allowlists, canonicalized file paths, and strengthened exception handling to reduce attack surfaces and ensure a successful external security audit. Additionally, I developed an internal monitoring service in Laravel/PHP that continuously scanned HTTP endpoints for status-code mismatches, alerting teams via SMTP email when issues were detected. This system surfaced approximately 8% of previously undetected errors, significantly improving incident visibility and reducing resolution times across multiple client-facing services.",
    learnMore: "Click to Learn More"

  },
  {
    name: "First Insurance Funding of Canada",
    photo: FIFC,
    job: "IT Intern",
    time: "May 2024 - August 2024",
    description: "During my internship, I played a pivotal role in enhancing a preexisting website by developing and implementing new features to improve user experience and functionality. I provided dedicated support to users, troubleshooting issues promptly and ensuring seamless operation of systems. Additionally, I actively participated in data manipulation tasks, leveraging my analytical skills to process and interpret data effectively. This hands-on experience allowed me to gain practical insights into web development, user support, and data management within a dynamic IT environment.",
    learnMore: "Click to Learn More"

  },
  {
    name: "Kumon",
    photo: Kumon,
    job: "Kumon Centre Assistant",
    time: "Dec 2022 - June 2023",
    description: "I have experience working closely with students aged 2 to 13, providing personalized instruction in basic English and Math. My responsibilities included one-on-one tutoring sessions tailored to each student's needs, focusing on foundational skills in both subjects. Additionally, I regularly assessed and graded approximately 20 sets of homework per week, ensuring comprehension and reinforcing learning objectives. Through these interactions, I fostered a supportive learning environment that encouraged academic growth and confidence in my students.",
    learnMore: "Click to Learn More"
  }
];
