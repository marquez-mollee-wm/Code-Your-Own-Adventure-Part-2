/**
 * Created by session1 on 10/6/15.
 */
var blank = prompt("What is your name?")
if (blank !== null) {
    alert("Hello " + blank + ". ready to play?");

    alert("You start at your friend Mollees house and Jose and Rogelio are there with you. You guys are having a hackathon and Jose keeps complaining that he's hungry.He suggests that you all go to McDonalds taking a short cut through the woods behind Mollee's house. Mollee stays behind because she fears the legend of sonclaw, An old computer programming teacher who haunts the woods and waits for coders to walk through late at night so he can use there knowledge for the ultimate hack. Jose doesnt believe in Sonclaw and Rogelio really wanted food so they went through the woods to McDonalds.");
}

var question1 = prompt("Do you choose to follow (A) Rogelio or (C)Jose (B) or stay with Mollee").toUpperCase()

switch (question1) {
    case "A"://Rogelio's Chapter
        alert("You chose to go with Rogelio");
        alert("You both go deeper into the woods you aproch a building the building named Weast-mek.");
        var q2 = prompt("Do you choose to go in side weast-mek (A) yes or (B) no?").toUpperCase();
        if(q2 === "B"){
            alert("You keep walking Sonclaw was waiting for you");
            alert("You dead");
        }
        if(q2 === "A"){
            alert("You enter Weast-mek you see a cookie.");
            var hasCookie = 0;
            var q3 = prompt("Do you pick up cookie? (A) yes or (B) no").toUpperCase();
            if(q3 === "B"){
                alert("Rogelio says 'well " + blank + " if your not going to eat it i wll");
                alert("Rogelio eats your cookie");
                alert("You dead");
            }
            if(q3 === "A"){
                hasCookie = 1;
                alert("Rogelio says 'Good Choice'");
                alert("suddenly sonclaw comes");
                var q4 = prompt("Do you throw the cookie at him? (A) yes or (B) no?").toUpperCase();
                if(q4 === "A"){
                    hasCookie = 0;
                    alert("You threw the cookie at him he eats it and it gives you time");
                    var q5 = prompt("Do you go (A) run left or (B) go right?");
                    if(q5 === "B"){
                        alert("You end up in the bathroom DEAD END");
                        alert("You Dead");
                        if(q5 === "A"){
                            alert("You found an exit you leave weast-mek")
                            alert("You win");
                        }

                    }
                }

            }
            if(q2 === "B"){
                alert("You keep walking Sonclaw was waiting for you");
                alert("You dead");
            }
            if(q3 === "B"){
                alert("Rogelio says 'well " + blank + " if your not going to eat it i wll");
                alert("Rogelio eats your cookie");
                alert("You dead");
            }


        }

        break;
    case "B"://chapter Mollee
        alert("You chose to go with Mollee");

        alert("Mollee- 'Well I don't think we'll be seeing them ever again' ")

        var userAnswer = prompt("Sooo should we watch hulu+ or Netflix ? Choose wisely!");

        if (userAnswer==="Netflix") {
            alert("Smart choice");
            var choiceOne = prompt("Do you prefer horror, documentary or romance?");
            if (choiceOne==="horror"){
                var horrorOption = prompt("Pick a number 1-10.");
                if(horrorOption<6) {
                    alert("You got Carrie - A reimagining of the classic horror tale about Carrie White, a shy girl outcast by her peers and sheltered by her deeply religious mother, who unleashes telekinetic terror on her small town after being pushed too far at her senior prom.");
                }

                else{
                    alert("You got V/H/S - When a group of misfits is hired by an unknown third party to burglarize a desolate house and acquire a rare VHS tape, they discover more found footage than they bargained for.");
                }
            }

            else if(choiceOne==="documentary"){
                var docOption = prompt("Pick a number 1-10.");
                if(docOption<4) {
                    alert("You got Living on One Dollar - An award-winning film that has been called A Must Watch by Nobel Laureate Muhammad Yunus and Director of The Hunger Games, Gary Ross. Living on One Dollar follows the journey of four friends as they set out to live on just $1 a day for two months in rural Guatemala. They battle hunger, parasites, and extreme financial stress as they attempt to survive life on the edge. An unimaginable reality for most young Americans, the challenges they face are real and plague over 1.1 billion people around the world. While the friends quickly learn there are no easy answers, the generosity and strength of Rosa, a 20 year old woman, and Chino, a 12 year old boy, give them resilient hope that there are effective ways to make a difference.");
                }
                else if(docOptions<7){
                    alert("You got Tig - The personal Biography of Tig Notaro, a Stand-up comedian who was diagnosed with cancer.")
                }
                else{
                    alert("You got Please Subscribe: A Documentary About Youtubers - An examination of the YouTube video streaming website and profiles of notable content contributors to it. ");
                }

            }
            else{
                var romOption = prompt("Pick a number 1-10.");
                if(romOption<6) {
                    alert("You got The Way He Looks - Leonardo is a blind teenager searching for independence. His everyday life, the relationship with his best friend, Giovana, and the way he sees the world change completely with the arrival of Gabriel.");
                }
                else{
                    alert("You got Crazy Kind of Love - A broken family finds their relationships to one another changed by a new arrival in the household.");
                }

            }

        }

        else{
            alert("You didn't choose wisely. You Dead!");
        }



        break;
    case "C"://chapter Jose
        alert("You chose to go with Jose");
        alert(" Ten minuites pass as Rogelio, Jose and" + " " + blank +"continue to walk into the forest. All three of the friends are anxious to get there meal at McDonald's. The group of friends talk about the 'Myth' of Sonclaw while traveling throughout the dark eerie woods. The creepy descriptionso f The oSnlcaw spook the friends just hearing the spin chilling name. pn the middle of the conversation they hear a noise of crackling branches and bushes moving around behind them. While the group walks faster thinking it is Mollee playing a sick joke on all three of them." " " + blank + " doesn't even bother to look as the other two do. As" + blank + " tells the others that he knows for a fact that it is Mollee playing a joke on them. Jose and roger feels query about the noise and tells the you to come check it out with them.");
        var userMainAnswer = prompt("What do you do? (A) 'Keep walking' or (B) 'Follow the guys into the forest'");
        if (userMainAnswer==="A") {
            alert("You choose to keep walking?");
            alert( Blank + " keeps walking and ignores as Rrolgio and Joseg o on to follow the noise." + blank + " thinks the both guys are playing a joke, so you walk away then jokingly yell out 'I'll meet you at Mcdonal's!'. Moments later you hear a scream of the two guys crying for help.")
            var choiceOneFromWalking = prompt("What should you do next? (A)B'e confident and walk away ' or (B) 'Go back running to help your friends'");
            if(choiceOneFromWalking===) {
                alert("You got Carrie - A reimagining of the classic horror tale about Carrie White, a shy girl outcast by her peers and sheltered by her deeply religious mother, who unleashes telekinetic terror on her small town after being pushed too far at her senior prom.");
            }
            alert("You choose to be confident and walk away")
            alert("Confient about them playing a joke so you keep on walking and do not bother to turn around makes it to mcd notices they never return so he waits a hour and he just goes home thinking nothing of it. the next moring comes and Mollee calls player. Mollee explains dramaticly that the guys never returned home after they went with him in the woods. Palyer tells them that it was a mean joke to play on someone like that and mollee goes on about what joke was player was talking about? Both confused they both get worried. What do you tell her? ");



            if()

                break;
        default:
            alert("You Dead");
        }















        var hasKey = 0;
        var a = prompt("Pickup key? yes no?");
        if(a === "yes"){
            hasKey = 1;
        }
        if(a === "no"){
            alert("you lose");
        }
        var b = prompt("open door?");
        if (b === "yes" && hasKey < 1) {
            alert("you win");
        }