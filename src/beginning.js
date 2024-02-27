export default displayBeginning;

import { Heading, UnorderedList, Paragraph} from "./website";



function displayBeginning(){
    const beginnerHeader = new Heading('B(1-3): Beginner Grades');
    const beginnerOverview = new Paragraph(
        'Beginning Grades cover basic foundational elements to tricking. From complete beginner to understanding progressions to basic flips and tricks.'
    );

    // beginner 1 stuff
    const b1 = new Heading('Beginner 1');
  
    const b1RequiredSkills = new UnorderedList(
        'Required Skills',
        ['TornadoRound',
        'TouchdownHook (Compasso)',
        'Cartwheel',
        'Scoot',
        'ButterflyKick'
        ]); 
  
    const b1RequiredCombos = new UnorderedList(
        'Required Technical Sequences',
        ['TouchdownHook Cartwheel (repeats)',
        'Cartwheel scoot (repeats)',
        'Tornado TouchdownHook (repeats)',
        'Tornado TouchdownHook Cartwheel Scoot ButterflyKick']);


    // beginner 2 stuff
    const b2 = new Heading('Beginner 2');
    const b2RequiredSkills = new UnorderedList(
        'Required Skills',
        ['TornadoShuriken',
        'PopTurbohook (mainstream Pop 360) OR Pop360Shuriken OR Pop360Round',
        'PalmKick',
        'MasterScoot(2 hand scoot ok)',
        'Machine'
        ]
    );
    const b2RequiredConnections = new UnorderedList(
        'Required Technical Sequences',
        ['TornadoRounds x 5 OR TornadoShurikens x 5',
        'Machine x 5',
        'Palmkick MasterScoot Machine x 3',
        'SpinStep Cartwheel SpinStepButterflyKick'
        ]
    );

    // beginner 3 stuff
    const b3 = new Heading('Beginner 3');
    const b3RequiredSkills = new UnorderedList(
        'Required Skills',
        ['SwipeDrill',
        'TornadoDleg',
        '1HandCartwheel(FirstHand)',
        '1HandCartwheel(SecondHand)',
        ]
    );
    const b3RequiredDrills = new UnorderedList(
        'Required Flipping Progressions',
        ['DivingForwardsRollUpMat',
        'DivingSidewaysRollUpMat',
        'HallwayBackflipDrill',
        'BtwistDrillUpMat'
        ]
    )



}