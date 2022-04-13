import { useEffect } from 'react'
import styles from '../css/Main.module.css'
import blogstyles from '../css/Blog.module.css'
import ComponentImage from '../components/image'
import Quote from '../components/quote';

const Ownwebsite = () => {
  return(
    <div className={blogstyles.blogbackground}>
      <div className={blogstyles.title}>
        My Own Website
      </div>
      <div className={blogstyles.subtitle}>
        Away from Substack (in addition to?) 
      </div>
      <hr/>
      <div className={blogstyles.text}>
        So I'm to the point in my web development ability that I think that I can finally write a website that's performant, and will be stable enough to hold my writing for the long term. I've ripped out the phoenix/elixir application (live reload is a pain in the ass if you plan on writing any javascript at all) and put in a backend in golang which works. I spun up a server and put in a message wall in a day - which includes all the docker handling ssl and all of that. Nothing more than a placeholder at the moment, but it exists to prove that I can connect to a backend if I need it. Who knows maybe I'll add in a <a href='https://www.striped.com' className={styles.anchor} style={{padding: 0}}>stripe</a> donation page at some point. Why should substack have all the fun?      
      </div>
      <div className={blogstyles.text}>
        I'm listening to Green Day - lately music has been, even more than when I was young a way to deal. 
      </div>
      <ComponentImage
        imagename='/blogs/ownwebsite/Green_Day_-_Dookie_cover.jpg'
        caption="A friend gave me this on CD back in the day."
      />
      <div className={blogstyles.text}>
        When I was a freshman in college I stayed in these dorms, fuck I don't know how long ago, with this guy named John Green. Maybe I'm thinking of him because I'm listening to Green Day, maybe I remember him for the exact reason that he must have lied to me about his name. I mean, who is named, actually, really, John Green? No one names their kid that. We stayed in this fugly apartment block past the tennis courts on the same floor as a traveling basketball team that would hold wild stupid parties. I remember we watched baseball that summer on a tiny traveling TV that John had - he knew everything about baseball statistics. He wanted to become an accountant like his father. The university we went to had a good accounting school. I remember you John, but I wish I remember your name, and not some nom de guerre. I hated baseball, thought it was boring, but I liked that I could ask him questions and he could explain what all the batting averages and over and unders meant. I don't know why. I remember we were walking once on the quad, I know the spot where it was when we had this conversation - and for some reason the topics of Gods came up. It must have been that we were around all this Roman/Greek architecture and somehow that inspired in me, or perhaps I was just reading too many comic books. Maybe I was reading some philosophy that was way over my head. He said, and this is an exact quote, "The Gods envy us for we are mortal." He was probably quoting someone much smarter than himself. But I remember that he said that. John Green, where are you now man? Did you ever become an accountant? 
      </div>  
      <ComponentImage
        imagename='/blogs/ownwebsite/goon.jpeg'
        caption="The only book about music that I think I may have understood"
      />
      <div className={blogstyles.text}>
        A summer later I was taking the second year of German and I had no idea what the fuck I was doing. Absolutely none. And that was the same year that the OCR (Optical Character Recognition) came out. We were reading this book about a former DJ turned record producer who was signing deals for up and coming bands. The book had an A Side and a B Side, just like a record, and there was a girl. They made it into a movie. There was a scene where a band member busts into the record studio punches him in the face and just ups and leaves. What the hell was that book again? This was when babblefish just came out, but the translations were straight up refried dogshit, it would stop working after about a paragraph. So anyway I was scanning the book into the computer using a computer/scanner, and then using OCR and babblefish to translate the book a paragraph at time. That's the only way I was able to pass German II. The only book that I've ever read about music that's ever made sense to me has been <a href='https://www.goodreads.com/book/show/7331435-a-visit-from-the-goon-squad' className={styles.anchor} style={{padding: 0}}>A Visit From The Goon Squad</a>. The woman who wrote the book now works at <a href="https://pen.org/" className={styles.anchor} style={{padding: 0}}>PEN America</a> last I looked. It's a heartbreaking novel of death, lost dreams, old age, growing up, and redemption in a non-religious but actually redemption type way.           </div>	
      <ComponentImage
        imagename='/blogs/ownwebsite/madhatter.jpg'
        caption="How is a raven like a writing desk?"
      />
      <div className={blogstyles.text}>
	To me a raven is liking a writing a desk because to be able to write means being able to write what others don't want to hear. Death, disaster, failing marriages, catastrophe, mayham. Ravens are represntative of the darker side of nature (at least symbolicly). They are also known for their intelligence. Lewis Caroll is telling his young neice in this instance that to read and to write means putting aside, not necessarily childish fancy, but the a child like fear of the darker sides of life. In every story, before the "happily ever after", there is a quest that involves a raising or lowering of dramatic tension depending on the plot arc. Kurt Vonnegut famously <a href='https://www.openculture.com/2014/02/kurt-vonnegut-masters-thesis-rejected-by-u-chicago.html' className={styles.anchor} style={{padding: 0}}>wrote about this</a>. The point is that without the ability to express oneself - to write what is sacriligious, because if it is not at least somewhat sacriligious then the there will be no dramatic tension for the *reader* - is necessary to write books worth reading.   
      </div>
      <ComponentImage
        imagename='/blogs/ownwebsite/cinderella_1_orig.png'
        caption="A Vonnegut style mapping"
      />
      <div className={blogstyles.text}>
        This not only applies to writing what others don't want to hear, but being able to read what others say (and listen to what others say), when you disagree with them. The mark of intelligence is being able to entertain an idea without accepting it. There are times where I have had an argument with someone, and I say - let us consider a hypothetical, or, suppose what you say is true. Then I posit an alternative universe, much like our own, with the certain starting conditions changed in order to evaluate the merits of a postition. Suppose the sky was chartreuse. Suppose all fruit existed as perfect geometrical shapes. Suppose that...abortion were legalized. Or guns were outlawed. The first couple of examples are silly, but quickly when the grounds shift to positions that people care about they will not even entertain the idea of a starting position in order to hear the speaker draw out their argument. This hypothesis making is crucial to critical thought, and to be able to read what others write, which you may find abhorrent or disagree with, is essential to understanding what you believe is true, valuable and why. If your positions are so tenuous that you would not accept their contradiction by outside argument then they are unaassaible, but as a matter of faith, not reason.  
      </div>
      <ComponentImage
        imagename='/blogs/ownwebsite/reality.png'
        caption="<a href='https://swellandcut.com/2018/05/09/graphing-and-mapping/' style='padding: 0; background:black; color:lightgreen; text-decoration: none;'>Reality can become a bit messier</a>"
      />
      <div className={blogstyles.text}>
        There's a humorous substack essay on this point (an April Fools post) that's worth reading. The author likens the political discourse as being awash in memes that are poisonous and lead to all sorts of problems (band-wagoning, in-group/out-group) and then offers this (tongue in cheek advice.
      </div>
      <Quote
	quote='Therefore, a strong, well-protected brain consumes very little content, and it undertakes caution and restraint with what content it does consume. Read Max recommends a three-pronged treatment strategy to help limit brain worms:Information restriction: Rigorously limit the amount of content you consume. Do not, under any circumstances, read or watch "the news," subscribe to any newsletter besides Read Max, or attempt to follow “the discourse.” Mute, block, or unfollow anyone who does.Refusal to interpret: As often as possible, decline to publicly engage with or interpret events. Repeat to yourself: Sometimes things happen that do not require my attention or input. Practice saying "huh" or "that’s crazy" in a noncommittal way. Tactical stupidity: In many situations, it is better to embrace ignorance. The motto of the healthy brain is: I don’t know what this is and I shan’t be finding out.'      
        attrib='Never send to know for whom the brain worms; it worms for thee by Max Read'
	link='https://maxread.substack.com/p/never-send-to-know-for-whom-the-brain?token=eyJ1c2VyX2lkIjo4NTA4NzkzOCwicG9zdF9pZCI6NTE0NDU3MjUsIl8iOiJMK3ovSiIsImlhdCI6MTY0OTAzMzA0OSwiZXhwIjoxNjQ5MDM2NjQ5LCJpc3MiOiJwdWItMzkyODczIiwic3ViIjoicG9zdC1yZWFjdGlvbiJ9.bZfUn7jDjbL5Y0cEzRuIFLBVjFomxiN82hkURZGUuJs&s=r'
      />                 
      <div className={blogstyles.text}>
        He has a point (luckily he's wearing a hat). There is a problem in the world of online discourse, how do we know when what we read is true or worthwile or a bad meme? How do we connect with people in a relational way that doesn't resort either to memes, or to in-group/out-group (politics, religion, group affiliation)? Shutting oneself down and not considering outside sources is obviously not the answer in-extremis. But the question is, "How do we form knowledge given that our rules for developing knowledge are all based on some knowledge?"
      </div>
      <div className={blogstyles.text}>
        I don't have a good answer for this. This smacks of the sort of thorny philosophical question (like the ship of Theseus, or Zeno's Paradox) that have been around for a long time. The problem is that the assumption with the internet was that *no* descrimination was good, that people were, at some level, responsible consumers of their information and so could discern not only fact from fiction, but also what is a viral meme and what is not. The answer probably lies somewhere in the middle.
      </div>
      <div className={blogstyles.text}>
        I will take some time to eat my dinner and read The Satanic Verses and think about this.  
      </div>
      <ComponentImage
        imagename='/blogs/ownwebsite/territory.jpg'
        caption="<a href='https://www.amazon.com/Map-Territory-Vintage-International/dp/0307946533' style='padding: 0; background:black; color:lightgreen; text-decoration: none;'>Sometimes when I see street maps I think of this book.</a>"
      />
    </div>  
  )
}

export default Ownwebsite
