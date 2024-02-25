export default displayBeginning;

import { Heading, UnorderedList } from "./website";
import { Paragraph } from "./website";



function displayBeginning(){
    const beginningHeader = new Heading('B(1-3): Beginning Grades');
        beginningHeader.add();
    const beginningOverview = new Paragraph(
        'Beginning Grades cover basic foundational elements to tricking. From complete beginner to understanding progressions to basic flips and tricks.'
    ); beginningOverview.add();

    const b1 = new Heading('Beginner 1');
        b1.add();

    const b1RequiredSkills = new UnorderedList(
        'Required Skills',
        ['TornadoRound',
        'TouchdownHook (Compasso)',
        'Cartwheel',
        'Scoot',
        'ButterflyKick'
        ]); b1RequiredSkills.add();

    const b1RequiredCombos = new UnorderedList(
        'Required Combinations',
        ['TouchdownHook Cartwheel (repeats)',
        'Cartwheel scoot (repeats)',
        'Tornado TouchdownHook (repeats)',
        'Tornado TouchdownHook Cartwheel Scoot ButterflyKick']);
        b1RequiredCombos.add();

    const b2 = new Heading('Beginner 2');
        b2.add();
    const b2RequiredSkills = new UnorderedList(
        'Required Skills',
        ['TornadoShuriken',
        'PopTurbohook (mainstream Pop 360) OR Pop360Shuriken OR Pop360Round',
        'PalmKick',
        'MasterScoot(2 hand scoot ok)',
        'Machine'
        ]
    ); b2RequiredSkills.add();
    const b2RequiredConnections = new UnorderedList(
        'Required Combinations',
        ['TornadoRounds x 5 OR TornadoShurikens x 5',
        'Machine x 5',
        'Palmkick MasterScoot Machine x 3',
        'SpinStep Cartwheel SpinStepButterflyKick'
        ]
    ); b2RequiredConnections.add();

}