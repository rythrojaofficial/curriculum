export default displayBeginning;

import { Heading } from "./website";
import { Paragraph } from "./website";

function displayBeginning(){
    const beginningHeader = new Heading('h2', ' B(1-3): Beginning Grades', 'x');
        beginningHeader.add();
    const beginningOverview = new Paragraph(
        'Beginning Grades cover basic foundational elements to tricking. From complete beginner to understanding progressions to basic flips and tricks.'
    ); beginningOverview.add();

    const b1 = new Heading('h2', 'B1: Day one', 'x')
        b1.add();
}