export default displayAdvanced;

import { Heading, UnorderedList, Paragraph, Navbar, clearContent, Sublist} from "../website";

function displayAdvanced(){
    const advancedHeader = new Heading('A(1-4): Advanced Grades');
    const advancedOverview = new Paragraph(
        'Advanced Grades cover everything from your first flips through single twisting variations.',
        'category-overview'
    );

    const advancedNav = new Navbar(
        [
        {content: 'Advanced 1', fx: displayA1},
        {content: 'Advanced 2', fx: displayA2},
        {content: 'Advanced 3', fx: displayA3},
        {content: 'Advanced 4', fx: displayA4}
        ]
    );
    
}

function displayA1(){
//  console.log('a1')
    clearContent();
    displayAdvanced();
    const a1 = new Heading('Advanced 1');
    const a1Description = new Paragraph('Flipping: Any surface with take-off and landing firmer than Trampoline; Floor: TornadoVariations','category-overview');
    const a1RequiredSkills = new UnorderedList(
        'Required Flipping Progression',
        [],
        'a1-required-skills'
    );
    const a1Flips = new Sublist(
        'Minimum 1 of the following on tumbling track or faster',
        ['Backflip',
        'Frontflip',
        'Sideflip',
        ],
        'a1-required-skills'
    )
    const a1RequiredFloor = new UnorderedList(
        'Required Skills on Floor',
        [],
        'a1-required-floor'
    );
    const a1Floor = new Sublist(
        'Minimum 1 of the following',
        ['Aerial',
        'SlantGainer',
        ],
        'a1-required-floor'
    )
    const a1RequiredTS = new UnorderedList(
        'Required Technical Sequences',
        [],
        'a1-required-TS'
    )
    const a1TS = new Sublist(
        'From Base Tornado',
        ['Round Round Swipe (Mainstream tornado tornado 540)'],
        'a1-required-TS',
    )
    const a1Shuriken = new Sublist(
        'AND 1 of the following shuriken connections',
        ['Shuriken Shuriken Doubleleg',
        'Shuriken Shuriken Hyperhook'],
        'a1-required-TS'
    )
}

function displayA2(){
    // console.log('a2')
    clearContent();
    displayAdvanced();
    const a2 = new Heading('Advanced 2');
    const a2Description = new Paragraph('Flipping:On Floor; SingleTwisting; 2TrickConnections','category-overview');
    const a2Flipping = new UnorderedList(
        'Required Skills',
        [
        
        ],
        'a2-required'
    );
    const a2FlippingOptions = new Sublist(
        'Minimum 2 flips on floor;eg.',
        ['Backflip',
        'Frontflip',
        'BackHandspring',
        'FrontHandSpring'
        ],
        'a2-required'
    );
    const a2PreTwistOptions = new Sublist(
        'Minimum 3 pre or low-level SingleTwistingTricks',
        ['Raiz',
        'ButterflyTurboHook (Mainstream Illusion Twist)',
        'ButterflyTwist',
        'CartwheelTwist',
        'Pop360Doubleleg (Mainstream Doubleleg)',
        'Sideflip',
        'Arabian',
        'Backside360Round',
        'Vanish360Round',
        ],
        'a2-required',
        'a2-pre-twist-options'
    );
    const a2PreTwistExceptions = new Sublist(
        'Example Substitutions',
        ['Reversao',
        'CartwheelScissor',
        'Masterswipe'
        ],
        'a2-pre-twist-options'
    );
    const a2Connections = new UnorderedList(
        'Required Connections',
        [],
        'a2-connections'
    );
    const a2FlipConnection = new Sublist(
        'Minimum 2 2TrickConnections of a setup and a flip; eg.',
        ['Gumbi Backflip',
        'Cartwheel Frontflip',
        'FrontflipStepout Cartwheel',
        'Aerial Masterscoot',
        'MasterScoot Gainer',
        ],
        'a2-connections'
    )
}
function displayA3(){
    // console.log('a3')
    clearContent();
    displayAdvanced();
    const a3 = new Heading('Advanced 3');
    const a3Description = new Paragraph('Power: Singletwisting; 2TrickConnections: 2 NonSetupTricks','category-overview');
    const a3RequiredSKills = new UnorderedList(
        'Required Skills',
        [],
        'a3-required-skills'
    )
    const a3Twisting = new Sublist(
        'Minimum 3 mid-level SingleTwistingTricks',
        ['Tornado360Round (Mainstream Cheat 900)',
        'Scoot360Shuriken',
        'CartwheelFullTwist', 
        'RoundOffBackFullTwist', 
        'ScootFullTwist',
        'AerialTwist',
        'Corkscrew'
        ],
        'a3-required-skills'
    );
    const a3TwistExceptions = new Sublist(
        'Example substitutions',
        ['Sideswipe',
        'Windex',
        'Helicoptero',
        'Flikflak'
        ],
        'a3-required-skills'
    );
    const a3RequiredConnections = new UnorderedList(
        'Required Connections',
        [],
        'a3RequiredConnections'
    );
    const a3twistConnection = new Sublist(
        'Any 2TrickConnection of FlippingOrTwistingTricks; eg.',
        ['Backflip Backflip',
        'Raiz Gainer',
        'Aerial Btwist',
        'Aerial pop360Round'],
        'a3RequiredConnections',
        'a3connections'
    );

}
function displayA4(){
    // console.log('a4')
    clearContent();
    displayAdvanced();

    const a4 = new Heading('Advanced 4');
    const a4Description = new Paragraph('SingleTwistingVariations; 0-1 Power Check; Battle/Performance Tested','category-overview');
    const a4Skills = new UnorderedList(
        'Required Skills',
        [],
        'a4-skills'
    );
    const a4twisting = new Sublist(
        'Any 3 SingleTwistingVariants utilizing minimum 2 bases and minimum 2 variants; eg',
        [],
        'a4-skills',
        'a4-variants'
    );
    const a4Bases = new Sublist(
        'Example Single Twisting Bases',
        ['ButterflyTwist',
        'Corkscrew',
        'Tornado360 (Cheat 900 rotation)',
        'CartwheelFullTwist'],
        'a4-variants'
    );
    const a4Variants = new Sublist(
        'Example Variants',
        ['ShapeVariations like Round, Hook, Doubleleg',
        'LandingStanceModifications like Hyper (if base trick does not default to hyper)'
        ],
        'a4-variants'
    );

    const a4Connections = new UnorderedList(
        'Required Connections',
        [],
        'a4-connections'
    );
    const a4twistToFlip = new Sublist(
        'Any 2TrickConnection of FlippingORTwistingTricks with rotation equal to or higher than 360',
        [],
        'a4-connections',
        'a4-connection-example'
    );
    const a4twistToFlipExample = new Sublist(
        'Examples',
        ['Raiz swingThrough GainerArabian',
        'GainerSwtich swingThrough Cork',
        'AerialUltra swingThrough Raiz',
        'ButterflyTwist vanish 360Round'
        ],
        'a4-connection-example'
    );
    const a4Battle = new UnorderedList(
        'Required Battle Experience',
        [],
        'a4-battle'
    );
    const a4BattleRequirement = new Sublist(
        'Minimum participation in 1 of the following',
        ['Battle',
        'Show',
        'Performance',
        'Or other equivalent Live Event'
        ],
        'a4-battle'
    )
}
