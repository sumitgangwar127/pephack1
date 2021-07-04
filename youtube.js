const puppeteer = require('puppeteer');
const chalk = require('chalk');
main();
async function main() {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 100,
        defaultViewport: null,
        args: ["--start-maximized"]
    });

   //start
    const page = await browser.newPage();

        // *************** youtube login (Start) ********************//
        await page.goto('https://accounts.google.com/signin/v2/identifier?service=youtube&uilel=3&passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252F&hl=en&ec=65620&flowName=GlifWebSignIn&flowEntry=ServiceLogin');
        await page.waitForSelector("#identifierId");
        await page.type("#identifierId", "gangwars015@gmail.com");
       
        await Promise.all([
            await page.waitForSelector(".VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.qIypjc.TrZEUc.lw1w4b"),
            await page.click(".VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.qIypjc.TrZEUc.lw1w4b")
        ])
    
        await page.waitForSelector("#password .aCsJod.oJeWuf .aXBtI.Wic03c .Xb9hP .whsOnd.zHQkBf");
        await page.type("#password .aCsJod.oJeWuf .aXBtI.Wic03c .Xb9hP .whsOnd.zHQkBf", "Sumit@8285");    
    
        await Promise.all([
            await page.waitForSelector(".VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.qIypjc.TrZEUc.lw1w4b"),
            await page.click(".VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.qIypjc.TrZEUc.lw1w4b")
        ])
    
        // ************* youtube login (end)*******//
        await new Promise(resolve => setTimeout(resolve, 5000)); // wait for 5 seconds
        await page.goto('https://www.youtube.com/watch?v=dKOqqDogCYg'); // goto target video
    
        // close autoplay
        await Promise.all([
            await page.waitForSelector(".ytp-autonav-toggle-button"),
            await page.click(".ytp-autonav-toggle-button")
        ])

        run();

        //t
        // function******************************************************

        async function run() {

            try {
                console.log("try entry");
   
                console.log(chalk.red('above loop'));
                for(let i = 0; i == i; i++){
    
                    console.log(chalk.blue('loop entry'));
                    await new Promise(resolve => setTimeout(resolve, 10000))
                    await page.reload();
                    console.log("reload");
                    await new Promise(resolve => setTimeout(resolve, 10000));
                    console.log("1");
                    await page.waitForSelector(".view-count.style-scope.ytd-video-view-count-renderer");
                    console.log("2");
                    
                    // currunt Views tracking
                    var currentViews = await page.evaluate(function () {
                        let a = document.querySelector(".view-count.style-scope.ytd-video-view-count-renderer");
                        let views = a.innerText;
                        let b = views.split(" ");
                        
                        let c = Number(b[0]);
                        console.log("$$$$$$$$$$$$$$$$$$$$$$$ccc");
                        console.log(c)
                        console.log("$$$$$$$$$$$$$$$$$$$$$$$ccc");
                
                
                        return c
                    })

                    // totalLikes tracking
                    await page.waitForSelector(".yt-simple-endpoint.style-scope.ytd-toggle-button-renderer #text");
                    var totallikes = await page.evaluate(function () {
                        let likenode = document.querySelectorAll(".yt-simple-endpoint.style-scope.ytd-toggle-button-renderer #text")
                        let likes = likenode[2].innerText;                        
                        let c = Number(likes);  
                        return c
                    })


                    //totalDislike tracking
                    await page.waitForSelector(".yt-simple-endpoint.style-scope.ytd-toggle-button-renderer #text");
                    var totaldislikes = await page.evaluate(function () {
                        let dislikenode = document.querySelectorAll(".yt-simple-endpoint.style-scope.ytd-toggle-button-renderer #text")
                        let dislikes = dislikenode[3].innerText;                        
                        let c = Number(dislikes);
                        return c
                    })
                    
                    // views mentioned on title
                    await page.waitForSelector(".style-scope.ytd-video-primary-info-renderer");
                    var titleViews = await page.evaluate(function(){
                        let tag = document.querySelectorAll(".style-scope.ytd-video-primary-info-renderer");
                        let titleText = tag[6].innerText
                        let titleArr = titleText.split(" ")
                        let viewsInTitle = titleArr[3];
                        return Number(viewsInTitle);
                    })

                    
                    console.log("dislike = " + totaldislikes);     
                    console.log("likes = "+ totallikes);             
                    console.log("current views " + currentViews);
                    console.log("views on title = " + titleViews);
                    

            
                    console.log("above if");
                    if(currentViews > titleViews){
                        console.log("if condetion entry");
                        await new Promise(resolve => setTimeout(resolve, 5000));
                        // update title
                        await page.goto("https://studio.youtube.com/video/dKOqqDogCYg/edit");
                    
                        //TODO => i have to remove previous text before that
                        await page.waitForSelector("#title-textarea .style-scope.ytcp-form-input-container #child-input #input>div");
                    
                        await page.click("#title-textarea .style-scope.ytcp-form-input-container #child-input #input>div")
                        await page.keyboard.down("Control");
                        await page.keyboard.press("KeyA")
                        await page.keyboard.up("Control");
                        await page.type("#title-textarea .style-scope.ytcp-form-input-container #child-input #input>div", "This video has " + currentViews + " Views ( Likes - "+ totallikes + " And Dislike - "  + totaldislikes + " )")
                        console.log("views updated inside if condetion");
                    
                    
                    
                    
                        // // click on save btn and go back
                    
                        await new Promise(resolve => setTimeout(resolve, 5000));
                        await page.click("#save .label.style-scope.ytcp-button");
                    
                        await new Promise(resolve => setTimeout(resolve, 5000));
                        await page.goBack();
    
                        console.log("view updated");
    
                       // prevViews = currentViews;
                        console.log("views before updation = " + titleViews + " \nviews after updation = " + currentViews);
    
                    }
                    else{
                        console.log("************************");
                        console.log("else condetion");
                        console.log("************************");
    
                    }
    
                }
    

//huhho
            }catch(error){
                console.log("************************");
                //console.log("error");
                console.log(chalk.red('error!'));
                console.log("************************");
                //console.log(chalk.red('try entry'));

                await new Promise(resolve => setTimeout(resolve, 5000));

                // goto target video
                await page.goto('https://www.youtube.com/watch?v=dKOqqDogCYg');
                console.log("going to video after error");

                console.log("run code again");
              //
                run();
            }



        }

}