export default displayBeginning;

import { Heading, UnorderedList, Paragraph, Navbar, clearContent, Sublist} from "../website";



function displayBeginning(){
    const beginnerHeader = new Heading('B(1-3): Beginner Grades');
    const beginnerOverview = new Paragraph(
        'Beginning Grades cover basic foundational elements to tricking. From complete beginner to understanding progressions to basic flips and tricks.',
        'category-overview'
    );
    
    const BeginnerNav = new Navbar(
        [
        {content: 'Beginning 1', fx: displayB1},
        {content: 'Beginning 2', fx: displayB2},
        {content: 'Beginning 3', fx: displayB3}
        ]
    );    
}



function displayB1(){
    clearContent();
    displayBeginning();
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
            'Required Connections',
            [],
            'b1-required'
            );
    const b1Repeating = new Sublist(
        'Repeating',
        ['TouchdownHook Cartwheel',
        'Cartwheel scoot',
        'Tornado TouchdownHook'],
        'b1-required'
    );
    const b1Set = new Sublist (
        'Combination',
        ['Tornado TouchdownHook Cartwheel Scoot ButterflyKick'],
        'b1-required'

    )
}

function displayB2(){
    clearContent();
    displayBeginning();
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
        'Required Connections',
        [],
        'b2-required'
    );
    const b2Repeating = new Sublist(
        'Repeating',
        ['TornadoRounds x 5 OR TornadoShurikens x 5',
        'Machine x 5',
        'Palmkick MasterScoot Machine x 3',
        ],
        'b2-required'
    )
    const b2Set = new Sublist(
        'Combination',
        ['Tornado(AnyShape) Tornado(AnyShape) TouchdownHook Palmkick Masterscoot Machine SpinStep Cartwheel Pop360(AnyShape)'],
        'b2-required'
    )
}

function displayB3(){
    clearContent();
    displayBeginning();
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


