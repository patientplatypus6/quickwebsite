<script setup>
  import MessagesApp from '../components/MessagesApp.vue'
</script>

<template>
 <div id='proposal'>
  <div id='leftcontainer'>
    <div>
      Proposal
    </div>
    <div>
      I have this idea for a website. Or a collection of websites. It's an idea that may not go very far. Maybe not even farther than a blog post or two. But it's an idea that I've had for a little bit and I think that it's worthwile to talk about, mayb even write a little bit about and convince you that is an idea that people would be interested in.
    </div>
    <div>
      (There is a new website called <a href='https://hive.blog'>hive.blog</a> that I don't know very much about and I won't speak to in this post mostly because it's new and I don't know how the site works. However I believe that many of its strengths and weaknesses would be similar to many that I list below.
    </div>
    <div>
      Before Reddit, even before Facebook, there was a Japanese website that went by the name of 2channel <a href='https://en.wikipedia.org/wiki/2channel'>see wiki page</a>. 
    </div>
    <div>
      The website was a way for people to post images and respond to those images anonymously. The latest incarnation of that site (or the spiritual inheritor in many ways) you may be familiar with and is called <a href='https://www.4chan.org'>4chan</a>.
    </div>
    <div>
       Here's a picture:
    </div>
    <img src='https://www.lightchan.org/media/pics/4chan_proposal.png'/>
    <div>
       Most people in technology or who are on the internet, are probably familiar. What I'm doing at the moment is creating an image board similar to 4chan. Sort of.
    </div>
    <div>
       There is a slight problem with social media these days. There isn't a way to curate content and show that content to the user except by developing a heuristic (that is some rule) for what content should be displayed and why. The development of the heuristic in many ways dictates what content is then shown to the user and influences what people read and therefore think. This is a *bad thing* because it then means that the developers of the algorithms have an outsized influence over not only what people know but how they believe.
    </div>
    <div>
       The way that Reddit uses a heuristic to determine noteworthy from non-noteworthy content is by upvote, first by category and then overall. Here is a post on Reddit's front page -
    </div>
    <img src='https://lightchan.org/media/pics/reddit_proposal.png'/>
    <div>
       OK, so that's an image of a whale. Not so bad. But it could easily be pictures of war atrocities, fights over politics, or, if not pornography (which requires an army of moderators to manage), then rehashes of nasty comments on Twitter or petty fighting on Instagram. Reddit has taken the approach that because content is popular that it is therefore good. A Democratic belief - however, this often leads to groupthink, bandwagoning, and fighting. In-group vs out-group rivalry is popular among people who like to fight while the rest of us then either have to watch or walk away from.
    </div>
    <div>
       On the other hand, Facebook's algorithm believes that content should be cureated based on what you have seen in the past, what you have clicked on, and tailored to create more clicks and more user interaction with the site. This is in many ways *worse* because it creates the desire to not only use the site from users but done at the behest of creating more ad-revenue from them. Their time and money are then used to power an organization that, if not working actively against their user base, does not have the interests of any particular user at heart.
    </div>
    <div>
       In many ways, Facebook has become like Television - an entertainment vehicle designed to sell ads. I won't bother posting a picture of my Facebook feed - I'm almost too scared to do so.
    </div>
    <div>
       Discord is - well Discord. It is primarily a website that took the idea of a chat application and built out a federated system of servers to handle as many chats as possible. One of the secret ingredients in Discord has been its adoption and use of Elixir which is a powerful event based functional programming language that handles websockets in a way that no other web based language can. This is important, I'll return to this in a minute.
    </div>
    <div>
       So that brings me back to 4chan. 4chan and affiliated websites (the so-called chans) are powerful particularly because they are anonymous. This is important because it allows users to have the complete and total freedom to post anything they want to say without fear of repercussion. In a free and fair society there should always be a place for this. Despite how silly much of what happens on 4chan is, they take this idea of anonymity seriously. 
    </div>
    <div>
       See - they even made a flag - 
    </div>
    <img src='https://lightchan.org/media/pics/anon_proposal.jpeg'/>
    <div>
       (taking a cue from Eddie Izzard many evils in this world are attributable in one way or another to people making flags)
    </div>
    <div>
       Which points to a dark side of this belief system as well. There have been posts about people shooting up schools or supporting acts of terrorism that they then carried out. To my mind this sort of defeats the purpose - the website is designed for anonymity, not fame. Why not post on other social media? Because content is bumped to the top of the cue based entirely on number of replies rather than reputation content that is inflammatory, crazy, or just causes people to be angry will often garner large amounts of reputation. 
    </div>
    <div>
      The problem in today's society is that truth on the internet - that is Truth with a capital T, the Veritas that Harvard has on their logo and what philosophers for centuries have aspired to - has been relegated to only a few types of entities - 
    </div>
    <ul>
      <li>
        Search engines which will choose what to display to you in order to drive advertising revenue
      </li>
      <li>
        News websites, but more transparently
      </li>
      <li>
        Monetarily driven social media sites that rely on algorithms and often create a walled garden of social interaction for users
      </li>
    </ul>
    <div>
      The walled garden for users part is especially important I believe in understanding how these websites are harmful. Human beings had their last evolutionary updated 60,000 years ago, and yet we are using an operating system that's at best 5,000 years old. Algorithms online that dictate how people are rewarded for their interactions with each other are enforcing patterns of behavior on their users often without their users knowledge or understanding. Whether that's how Facebook curates ads, Reddit's reputation system, or 4chan's anonymous system each of these machines influences people and how they interact online. 
    </div>
    <img src='https://lightchan.org/media/pics/caveman_proposal.jpeg'/>
    <div>
      To the extent that people have friends in these social networks, or even use a search engine for work or school, it's difficult if not possible for them to change how these systems affect their lives.
    </div>
    <div>
      I want to make a social media platform that changes this.
    </div>
    <div>
      This may be impossible and could just create yet another system that will influence how people interact. But I have an idea on how this could work and that's what I'm currently building. 
    </div>
    <div>
      It's an image board.
    </div>
    <div>
      So I want you to imagine a piece of software, which would be easily created and maintained by any user, that would all them to create an image board. (There is software out there for that now, but I would argue that is not easily maintained or created). This image board would have boards based on topics, much like 4chan, and each board would allow anonymous users to post content. The software would be open source to individuals and is what I am currently building. 
    </div>
    <div>
      So far this is nothing spectacular, and is little more than a portfolio piece or a proof of concept.
    </div>
    <div>
      However
    </div>
    <div>
      What I am envisioning is that if enough people build websites from this software (built on Django/Python and React), that Phoenix/Elixir could be used to pull the top posts from each website based on image board and create a collection that would be a "Newspaper". Simply top posts based on each board, importantly *without* allowing users to upvote content or post replies to information that was in the newspaper. 
    </div>
    <div>
      So imagine if there are, 1,000 image boards all built along the lines of 4chan, each with free software to allow users to customize the board to their preference. A rather simple upvote, downvote comment system with the ability to make replies. Each of these boards importantly would be owned and hosted by web developers who would own their domain, there would be no paid model to the creator, and the image board itself would be open source.  Each of these image boards would be able to create boards on any topic that they would want of the form:
    </div>
    <div>
      <span style="font-weight: bold;">http://DNS/imageboardname</span>
    </div>
    <div>
      where `imageboardname` could be `tec` for technology news or `tech` or `technology`. Every time someone posts there would be a websocket call to a master Elixir server, or federated system of Elixir servers that would, in a simple model, just check if the number of upvotes is in the top 100 for that image board name in the last 24 hours. If so it posts it to a master newspaper site.
    </div>
    <div>
      So, for example, suppose that Sue's Garden Emporium has a `tech` section on garden news that suddenly becomes incredibly popular because of a new biotech startup that has posted news about gene editing in plants that everyone is talking about, while John's Car Garage has a section on `tech` that becomes popular because of a new engine technology in electric vehicles. Each of these posts would be checked against the 
    </div>
    <div>
      <span style="font-weight: bold;">http://mainnewspapersite/tech/top100</span>
    </div>
    <div>
      To see if they're the most popular posts, and if so they would be added. Eventually, with enough image boards from enough users,
    </div>
    <div>
      <span style="font-weight: bold;">http://mainnewspapersite/headlines</span>
    </div>
    <div>
      would be able to display content that would be appealing to the majority of users (I believe). 
    </div>
    <div>
      What I like about this system is that it's fairly straight forward and easy to understand from a user's point of view. There is no algorithm that's incentivizing behavior because the system is completely anonymous. It's even possible to create content on an owned server that's people posting pornographic or political content that most users would find distasteful, but with enough content owners, who own and moderate their own image boards, I have a belief that this content would be a small amount of the overall. Not only because if there are admins that care enough to spin up their own servers for which they would own the content themselves they would take care to moderate their boards, but also because with enough boards and boards devoted to more specific content there would be little incentive to troll. There would be no reputation gain or large audience to cater to trolling, and the main newspaper would anonymously select content based on total views no matter what board it came from.
    </div>
    <div>
      There have been in the social media space, if you are familiar with a conceptualization of the problem in terms of many-to-many and many-to-one relationships, a one-to-many relation of one social media hub for many users. There is one 4chan with many boards that has many users. There is one Reddit with many boards that has many users. There is one facebook with many users. Likewise with Instagram. In this model, there are many copies of privately owned software that is free to use each with many users. Many image boards with many users.
    </div>
    <div>
      How would a company that owned and operated this software make money? Through two methods. First, there would be heuristics that would be generated from image posts that could be sold back to users in an admin panel using AI. This is complicated and not something I could do on my own. And the creation of a newspaper from each individual site. 
    </div>
    <div>
      Unlike WordPress I would not create a plug in system for each site, but allow the software to be customizable on the user sites using Javascript, with an API key to connect to the main Phoenix cluster. This would encourage admins to become their own developer advocates and prevent the problem of having a walled garden ecosystem with broken and outdated 'mix-ins'. This would also allow the boards to have a radically different look and feel from one board to another, so long as the basic API was the same that included the use of boards based on topics, user posts, and user replies.
    </div>
    <div>
      That's what I'm working on at the moment. There are two github repos at the moment: https://www.github.com/patientplatypus6/lightchan and  https://www.github.com/patientplatypus6/quickwebsite. I welcome PRs and/or advice from anyone who would like to contribute. I'll be writing more about what I'm building as I build it.
    </div>

  </div>
 </div>
 <!--<img src="https://localhost/media/pics/lightbulb.jpeg"/>-->
</template>

<style scoped>
img{
  max-width: 50vw;
}
#proposal{
  margin: 20px;
}
#leftcontainer{
  display: inline-block;
  float: left;
  margin-left: 25vw;
  width: 50vw;
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
