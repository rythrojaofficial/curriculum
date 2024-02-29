export default displaySpecial;

import { Heading, UnorderedList, Paragraph, Navbar, clearContent, Sublist} from "../website";

function displaySpecial(){
    const specialHeader = new Heading('S(1-5): Special Grades');
    const specialOverview = new Paragraph(
        'Special Grades cover a broad category but are essentially understood to be dubs+ and Battle-Ready.',
        'category-overview'
    );

    const specialNav = new Navbar(
        [
        {content: 'Special 1', fx: displayS1},
        {content: 'Special 2', fx: displayS2},
        {content: 'Special 3', fx: displayS3},
        {content: 'Special 4', fx: displayS4},
        {content: 'Special 5', fx: displayS5}
        ]
    );
}

function displayS1(){
    clearContent();
    displaySpecial();
    const s1 = new Heading ('S1');
    const s1Description = new Paragraph('Power:Dubs; Skill: 2xVariatedSingles; Connections: 1-1; Battle: Battle off Home Turf','category-overview');
    const S1Power = new UnorderedList(
        'Required Power',
        ['Any recognizable DoubleTwistingTrick'],
        's1-power'
    );
    const s1PowerException = new Sublist(
        'Example Substitutions',
        ['540DiveRoll',
        'Snapu',
        'DoublelegTwist'],
        's1-power'
    );
    const s1Skill = new UnorderedList(
        'Required Skill',
        [],
        's1-skill'
    );
    const s1SkillOptions = new Sublist(
        'Minimum 3 of the following',
        ['Any 2xVariatedSingleTwistingTrick',
        'Any 3xVariatedTrick',
        'PowerCombo with 2 PowerTricks (2 1xVariatedSingleTwistingTrick)',
        'MarathonCombo with 10 Total Tricks (repeats ok, maximum 4 HandedTricks, HookKick not included in 10)'
        ],
        's1-skill',
        's1-skill-minimum'
    );
    const s1fourSeasons = new Sublist(
        'All 4 Landing for one BaseTrick',
        ['Complete, Hyper, Mega, Ultra (Mainstream Semi)',
        'Example Bases: Aerial, Gainer, ButterflyTwist, etc'
        ],
        's1-skill-minimum'
    );
    const s1Connection = new UnorderedList(
        'Required Connection',
        [],
        's1-connection'
    );
    const s1rotation = new Sublist(
        'Any FlippingOrTwistingTrick to Any FlippingOrTwistingTrick',
        ['Total rotation must be greater than or equal to 540'],
        's1-connection'
    );
    const s1rotationExample = new Sublist(
        'eg.',
        ['CartwheelFullTwist swingThrough Cork',
        'CarthweelDoubleFullTwist pop Flashkick',
        'GainerSwitch swingThrough Boxcutter',
        'Envergado punch 360Hyperhook(Mainstream pop 1080)'],
        's1-connection'
    );
    const s1Battle = new UnorderedList(
        'Required Battle Experience',
        [],
        's1-battle-experience'
    );
    const s1BattleOptions = new Sublist(
        'Minimum 2 of the following',
        ['Successfully completed 3 passes in 1 Battle',
        'Participated in a Bracketed Battle Tournament',
        'Participated in Battle outside of home gym or community',
        'Paid performance',
        'Other live event with equal weight'
        ],
        's1-battle-experience'
    );

}

function displayS2(){
    clearContent();
    displaySpecial();
    const s2 = new Heading ('S2');
    const s2Description = new Paragraph('Power:Variated Dubs; Skill:Landing Stances; Battle: Defeat S1','category-overview');
    const s2Power = new UnorderedList(
        'Required Power',
        [],
        's2-power'
    );
    const s2PowerExamples = new Sublist(
        'Minimum 3 of the following',
        ['3 DoubleTwistingTricks',
        '1xVariatedDoubleTwistingTrick',
        '2TrickConnection with minimum DoubleTwistingTrick',
        'PowerCombo with 2 Power tricks(2 DoubleTwistingTricks or DoubletwistingTrick + 2xVariatedSingleTwistingTrick)',
        '4 Seasons Combo: 4TrickConnection utilizing a takeoff from each of the 4 landing stances'
        ],
        's2-power'
    )

    const s2Skill = new UnorderedList(
        'Required Skill',
        [],
        's2-skill'
    );
    const s2skillExample = new Sublist(
        'Minimum 2 of the following',
        ['3xVariatedSingleTwistingTrick'
        ],
        's2-skill',
        's2-skill-example'
    );
    const s2marathon = new Sublist(
        'MarathonCombo with 10 Total Tricks',
        ['No repeats',
        'Maximum 3 HandedTricks',
        'Maximum 1 HookKick, which does not count to 10 total'
        ],
        's2-skill-example'
    )
    const s2fourSeasons = new Sublist(
        '4SeasonsLite',
        ['Combo utilizing the four landing stances(Complete, Hyper, Mega, Ultra)',],
        's2-skill-example'
    )
    const s2connectionExample = new Sublist(
        '3TrickConnnection with minimum 720 rotation',
        ['Any 1-0-1 anagram',
        'Any 0-0-2 anagram',
        'AerialUltra swingThrough Raiz swingThrough Cork'
        ],
        's2-skill-example'
    );

    const s2Battle = new UnorderedList(
        'Required Battle Experience',
        [],
        's2-battle-experience'
    );
    const s2BattleExamples = new Sublist(
        'Minimum 1 of the following',
        ['Win a battle-experience against S1 or higher',
        'Successfully complete an S2 power or skill requirement in a Battle',
        'Other live event of equal weight'
        ],
        's2-battle-experience'
    )

}

function displayS3(){
    clearContent();
    displaySpecial();
    const s3 = new Heading ('S3');
    const s3Description = new Paragraph('Power: Trip/DubDub; Battle: Defeat S2','category-overview');

    const s3Power = new UnorderedList(
        'Required Power/Skill',
        [],
        's3-power'
    );
    const s3PowerOptions = new Sublist(
        'Minimum 1 of the following',
        ['TripleTwistingTrick',
        'DoubleFlippingTrick',
        'DubDub: 2TrickConnection of 2 DoubleTwistingTricks',
        'Quick10: 10TrickConnection of 10 consecutive TwistingOrFlippingTricks',
        'Or Equivalent PowerTrick or PowerCombo'
        ],
        's3-power'
    );

    const s3Battle = new UnorderedList(
        'Required Battle Experience',
        [],
        's3-battle-experience'
    );
    const s3BattleOptions = new Sublist(
        'Minimum 1 of the following',
        ['Win a Battle against an s2 or higher',
        'Successfully complete an S3 Power or Skill requirement in a Battle'],
        's3-battle-experience'
    )

}


function displayS4(){
    clearContent();
    displaySpecial();
    const s4 = new Heading ('S4');
    const s4Description = new Paragraph('BattleRank: RegionalMenace','category-overview');
    const s4Battle = new UnorderedList(
        'Required Battle Experience',
        ['Top 8 in Any Tournament with Preliminary Rounds',
        'Top 3 in Bracketed Tournament(2 wins required)',
        'OR equivalent experience'
        ]
    )

}

function displayS5(){
    clearContent();
    displaySpecial();
    const s5 = new Heading ('S5');
    const s5Description = new Paragraph('BattleRank: InternationalDemon','category-overview');
    const s5Battle = new UnorderedList(
        'Required Battle Experience',
        [],
        's5-battle'
    );
    const s5BattleOption1 = new Sublist(
        'Minimum 1 of the following',
        [],
        's5-battle',
        's5-battle-experience'
    )
    const s5BattleOptions = new Sublist(
        'Top 3 in Major Bracketed Tournament; such as',
        ['Loopkicks, Vertigo, BoF, TBQ, etc'],
        's5-battle-experience'
    );
    const s5other = new Sublist(
        'Represented Country in Team Battle',
        ['OR equivalent Experience'],
        's5-battle-experience'
    )
}
