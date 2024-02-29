export default displayOverview;

import { Heading } from "../website";
import { Paragraph } from "../website";

function displayOverview(){
    // =====================================
    // create elements, set id, set contents
    // =====================================
    const hOverview = new Heading('Overview', 'overview-heading');
        

    const pPurpose = new Paragraph(
        'The purpose of our Grade Scale and Curriculum is to provide trickers with a roadmap especially in the beginning and intermediate stages of tricking.'
    ); 
    const pLookAhead = new Paragraph(
        "Trickers should use this guide to better understanding Tricking's Main Quest.  This is by no means comprehensive.  The intent is for this guide to help organize lower divisions for battles, coach/facility accreditation, further curriculum advances, and just help trickers understand where they are what things could be working towards skill and combination-wise."
    ); 
    const pInstructors = new Paragraph(
        'For the Tricking instructors and program directors out there, feel free to utilize, modify and be OPEN about the purpose here.  Follow the intent of the law, rather than the letter of the law.  There are always exceptions, so it is on the coach and/or student to understand where an exception should be permissible or not :)'
    ); 

    const hGrades = new Heading('The Grades');
    const pBeginner = new Paragraph(
        'B(1-3): Beginner Grades cover basic foundational elements to tricking. From complete beginner to understanding progressions to basic flips and tricks.'
    ); 
    const pAdvanced = new Paragraph(
        'A(1-4): Advanced Grades cover everything from your first flips through single twisting variations.'
    ); 
    const pSpecial = new Paragraph(
        'S(1-5): Special Grades cover a broad category but are essentially understood to be dubs+ and Battle-Ready.'
    ); 


   
}