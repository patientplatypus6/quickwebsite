<script setup>
  import MessagesApp from '../components/MessagesApp.vue'
</script>

<template>
 <div id='hardware'>
  <div id='leftcontainer'>
    <div>
      Hardware
    </div>
    <div>
      I'd like to take a minute to write a little bit about people who are much smarter than I and are building the future.
    </div>
    <br/>
    <div>
      I am both amazed at the accomplishment and in some sense do not know what to think. 
    </div>
    <br/>
    <div>
      I watched this keynote by Jensen Huang on what NVIDIA is currently building: <a href='https://www.youtube.com/watch?v=39ubNuxnrK8'>NVIDIA KEYNOTE</a>
    </div>
    <div>
      The core of NVIDIA's offering is the Grace Hopper chip with details available <a href='https://www.tomshardware.com/news/nvidia-unveils-144-core-grace-cpu-superchip-claims-arm-chip-15x-faster-than-amds-epyc-rome'>at Tom's hardware</a>
    </div>
    <br/>
    <div>
      At the core of the accomplishment is that NVIDIA has created what they call an inter-connect, high throughput channel between two chips, either CPU or GPU, to send data from one chip to another. 
    </div>
    <div>
      Using several of these chips and the latest server hardware the CEO claims that they can build an "AI factory" that has an order of magnitude more terabits per second of processing power than the internet. And this would all fit in a single room and be low power (the grace hopper chip itself runs on 500W, which is relatively little - I used to build tower desktop machines in high school with 500-1000W power supplies).
    </div>
    <br/>
    <div>
      They are using these chips to create AI simulations of real world events in real time. Because the AI is now fast enough to create many world scenarios of events as they happen it makes driverless cars with forward thinking collision detection possible in real time while you drive.
    </div>
    <div>
      What NVIDIA thinks is possible is the creation of a "digital twin" of the world, in which the entire world's data from driverless cars, to online sales, the traffic and motion detection, is held in real time in computer software with a many world's prediction model of how any scenario would unfold.
    </div>
    <br/>
    <div>
      I am both amazed by the accomplishment and don't know what to think.
    </div>
    <div>
      In many ways this is terribly exciting. 
    </div>
    <div>
      For example, there is a training library that allows for gaze estimation so that a computer can track where you are looking: <a href="https://catalog.ngc.nvidia.com/orgs/nvidia/teams/tao/models/gazenet">here</a>
    </div>
    <br/>
    <img src="https://lightchan.org/media/pics/gaze_hardware.png"/>
    <br/>
    <div>
      The entire library (<a href='https://catalog.ngc.nvidia.com/'>https://catalog.ngc.nvidia.com/</a>) is worth checking out. 
    </div>
    <br/>
    <div>
      Given the amount of computational power that is used it makes certain applications almost trivial. Driverless cars will be available commercially in the next couple of years and within 5 years it will be common I believe. Robot factories, or factories that are roboticized to a large extent will be common. Any and all predictve analytics will be revolutionized, with statistics as a mathematical subfield subsumed into AI calculations. Any applications that were once thought impossible due to NP incompleteness (such as the traveling salesman problem) will now be possible just by throwing more bits at the problem.     
    </div>
    <br/>
    <div>
      There have been dystopia's written about this future before. Minority Report, a story by Philip K. Dick, envisions a future in which one's actions are predicted in advance, and so crime is stopped before it happens. With this amount of computational power, <span style="font-style: italic;">this is not only possible, but in some places will be inevitable</span>.
    </div>
    <br/>
    <div>
      And by some places, I do not mean only those jurisdictions bounded by nation states or where someone works to make a living. Imagine a dating app that was able to tell whether a potential partner was not only a good fit, but was likely to cheat on you in your potential marriage in five years time from looking at employment history, social media, or online purchases.
    </div>
    <br/>
    <div>
      Such a dating application would be extremely popular. A dating app that guarantees fidelity. And there are no laws that would prevent its creation - how would someone even create such a law?
    </div>
    <br/>
    <div>
      This type of asymmetry would be commonplace in a world that would be ruled by machine learning and I think is a growing problem in today's world. Credit scores are used to determine if someone is worthy of a job or a mortgage. China uses a "social credit" score to determine <a href='https://www.businessinsider.com/china-social-credit-system-punishments-and-rewards-explained-2018-4'>if someone is allowed to use a plane</a>. Whether someone's website is allowed to be seen by users on the internet is determined by Google's page rank algorithm, while whether your posts are seen on social media is determined by the algorithms those media companies use.
    </div>
    <br/>
    <div>
      So why should we care? If you are unlikely to cheat on your spouse, are a good citizen, and pay your taxes on time then you shouldn't have any trouble with such AIs no? However, such AIs may pick up on actions and behaviours that you either have little to no control over or are perfectly innocous. Imagine a world where what you buy from the books you read to the music you listen to was tracked and cataloged against how likely you were to fit into a group. Not just whether what you were doing were illegal, but whether what you were doing were <span style="text-decoration: italic;">good enough</span>. Suppose you like to listen to rap music and read horror novels - would that prevent you from jobs in corporate finance? And tracking online purchases is trivial compared to what is being discussed by NVIDIA. They are talking about mapping the entire world so that cars can drive themselves. With facial recognition and camera technology it is possible to know where you go and when and why. Who you meet and what you talk about.
    </div>
    <br/>
    <div>
      This has caused a type of asymmetry problem that has not been discussed or understood enough at a societal level. After all, at an individual level, no one wants this. And yet, if we were offered the opportunity to benefit from the results of such a system - lower prices, lower crime, non-cheating spouses - we would all agree. The description of the problem is that molding the collective actions of a group is desirablewhen in low trust environments, and with AI there is no (or approaching zero) cost of doing so. On the other hand to participate in such a system means that the individuals actions are likewise molded so that any individual is incentivized join a collective or subgroup (such as a business, religion, or ideology) for collective protection or be at the whim of algorithms they do not understand. In an ideological system the rules to optimize in order to protect one's wellbeing are understood (thou shalt not kill, thou shalt maximize profit) and so individuals are in some sense protected by these algorithms because these ideologies are self sustaining and have track records lasting for centuries. People, as opposed to machines, believe in these principles enough to go out of their way to help others in their subgroup.   
    </div>
    <br/>
    <div>
      Given how powerful algorithms are becoming in our lives, I do not know if ideological subgroups would be enough to survive or at least not in their present form. Collective action among truckers and taxi drivers may not be enough when all the cars can drive themselves. Perhaps the future lies in the creation of art for art's sake, but how resources are delegated in a world in which algorithms are better and more adapted to the creation of all value is unknown. Perhaps the end result will be an AI aristocracy with a handful of kings owning all the servers and the keys to electronic minds that they do not understand and do no operate to their will.    
    </div>
    <br/>
    <div>
      In the book Dune, there were references to the Butlerian Jihad, in which artificial intelligences became so powerful that they were banned and the phrase "thou shalt not a make a machine in the likeness of a human mind" became part of a religion. Mentats, human beings with drug induced power to perform predictive calculations, were seen as a preferable alternative. 
    </div>
    <br/>
    <div>
      There needs to be a space for the weird and strange and wonderful. NVIDIA's chip design is a momentous accomplishment, but where can I live in a world that that will make?
    </div>    
  </div>
 </div>
 <!--<img src="https://localhost/media/pics/lightbulb.jpeg"/>-->
</template>

<style scoped>
#hardware{
  margin: 20px;
}
#leftcontainer{
  display: inline-block;
  float: left;
  margin-left: 25%;
  width: 50%;
}
#rightcontainer{
  display: inline-block;
  float: right;
}
</style>

<script scoped>
    import app from '../App.vue'
    export default{
        components:{
            app
        }, 
        data(){
          return{}
        }
    }
</script>
