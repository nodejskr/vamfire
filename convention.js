/*################################################################
 #***************************************************************#
 #***#########################################################***#
 #***#                                                       #***#
 #***#  THE CODING CONVENTION OF THE VAMFIRE PROJECT         #***#
 #***#                                                       #***#
 #***#  Ref.                                                 #***#
 #***#  - http://sideeffect.kr/popularconvention#javascript  #***#
 #***#                                                       #***#
 #***#########################################################***#
 #***************************************************************#
 ################################################################*/

/**
 * 4 spaces for indentation.
 * Braces start with start line and one space.
 */
function setCodingConvention(data) {

    /** The definition of multiple variables must be defined with the last comma and no space */
    var abc = 1,
        xyz = 'one',
        isTrue = true;

    /** Object definition Followed by after space */
    var obj = {
        foo: 3,
        bar: 4,
        baz: 5
    };
    
    /** Wrap the string using single quotes */
    var str = 'with single quote';

    /** switch statement */
    switch (data) {
        case 0:
            abc = 0;
            xyz = 'zero';
            break;
        default:
            abc = -1;
            xyz = 'unknown';
            break;
    }

    /** if statement */
    if (document.form1.year.value > 2000) {
        abc += 27;
    } else if (document.form1.year.value > 1900) {
        abc += 19;
    } else {
        abc = 0;
    }

    /** for statement */
    for (i = 1; i < abc; i += 1) {
        console.log(obj);
    }

    /** for-in statement */
    for (key in obj) {
        console.log(obj[key]);
    }
}
