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
    const b1Overview = new Paragraph('Week 1 Tricks', 'category-overview');
    const b1Description = new Paragraph('Welcome to Tricking!  Everything on this page can be picked up by anyone healthy enough to hop on one foot and do anything resembling a cartwheel!', 'description');

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
    const b2Overview = new Paragraph('Building off the basics');
    const b2Description = new Paragraph ('The transition from B1-B2 represents a beginner-level understanding that Tricks can be related to other Tricks and creativity to substitute one Trick for another.', 'description');
    const b2RequiredSkills = new UnorderedList(
        'Required Skills',
        ['TornadoShuriken',
        'PopTurbohook (mainstream Pop 360) OR Pop360Shuriken OR Pop360Round',
        'PalmKick',
        'MasterScoot(2 hand scoot ok)',
        'Machine'
        ],
        'b2-skills'
    );
    const b2options = new Sublist(
        'Minimum 4 Basic RoundKick and HookKick Variants',
        ['RoundKick',
        'TouchDownRound (BlasterScoot)',
        'HeadDownRound',
        'RoundSweep',
        'TouchDownHook',
        'HeadDownHook',
        'HookKick',
        'HookSweep'
        ], 'b2-skills'
    )
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
        ['Tornado(AnyShape) Tornado(AnyShape) (Any)HookKick Palmkick Masterscoot Machine SpinStep Cartwheel Pop360(AnyShape)'],
        'b2-required'
    )
}

function displayB3(){
    clearContent();
    displayBeginning();
    const b3 = new Heading('Beginner 3');
    const b3Overview = new Paragraph('Preparation for Physical Tricking');
    const b3Description = new Paragraph("The transition from B2-B3 represents the introduction of Tricking's PhysicalComponent.  From here on out it only gets more demanding!  If you are struggling here, it is recommended to try basic calisthenic strength training for a little while to improve relative upper and lower body strength.", 'description')
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


