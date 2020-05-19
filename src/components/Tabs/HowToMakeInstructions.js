import sauma1 from '../../assets/klippa.png';
import sauma2 from '../../assets/títa og mæla borða.png';
import sauma3 from '../../assets/sauma.png';
import sauma4 from '../../assets/festa borða og strauja.png';
import sauma5 from '../../assets/merkja.png';
import React from 'react'

const instructions = [
    {
        text: "Start with cutting out the square in the desired size from a fabric that is not too stiff.",
        img: sauma1
    },
    {
        text: "Measure the ribbon and burn the ends. With a bigger ribbon, it might be nice to cut a V into the end. Find a thread with a similar color to the ribbon. On one of the shorter sides of the square fold small part of it twice and secure it with pins.",
        img: sauma2
    },
    {
        text: "With your hands or a sewing machine, sew the folded end and sick sack the rest.",
        img: sauma3
    },
    {
        text: "Place the ribbon in the middle of the outside of the fabric (and the middle of the ribbon in the middle as well) and secure with pins. Then in four or more places use the thread to stick the ribbon to the fabric.",
        img: sauma4
    },
    {
        text: (<span>Now your reusable gift wrapping is ready but it might be fun with a thicker fabric in a lighter color to add instructions with a permanent pen. Make sure to test that the pen is not visible on the other side beforehand on an extra piece of the same fabric. On the picture, there is an example of instructions but you could additionally write "Reuse me!" or the URL to the extra instructions (regift.huldalilja.com).
            <br/><br/>Extra Tips: <br/>- Reuse old clothes, cloths or scarfs for this!
            <br/>- It would also be super cute to knit or crochet the square instead of using fabric and then use cordage instead of a ribbon.
            <br/>- Cut the sides where the ribbons are in triangles, making it even easier for folding when used.
            <br/>- For extra hard shaped gifts or more stiff fabric, it's also possible to cut the ribbon in two parts and half of it again in two. With two quarters in the original place but the second half sewed from the middle to the middle of the folded side, on the outside of the fabric. When wrapping, instead of making the crossing, simply wrap the two ribbons around the gift and make two bows (for a nice look, but the two second ribbons under the first one before making the bow).
            </span>
            ),
        img: sauma5
    }
]

export default instructions;