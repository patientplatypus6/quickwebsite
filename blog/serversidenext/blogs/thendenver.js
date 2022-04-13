import { useEffect } from 'react'
import styles from '../css/Main.module.css'
import blogstyles from '../css/Blog.module.css'
import ComponentImage from '../components/image'
//import Highlightcode from '../components/highlightcode'

const Thendenver = () => {
  return (
    <div className={blogstyles.blogbackground}>
      <div className={blogstyles.title}>
        Then There Was Denver
      </div>
      <div className={blogstyles.subtitle}>
        A Naive First Approximation of Truth
      </div>
      <div className={blogstyles.text}>
	So lately there has been a large amount of what I would call "woo" in the scientific community. I don't want to name names as that I feel would be inappropriate. But I've been thinking about this for a little while in my walks around Denver - I'm in Denver now, there will be pictures in a moment. 
      </div>
      <div className={blogstyles.text}>
	The first naive approximation for what qualifies as truth (at least in the sciences) is twofold. A phenomenon can either be observed and verified by other people (the discovery of a new particle or a new star). Or there is a set of assumed true statements - either by observation, or by other true statements that come from observation - that yield other statements that are true in that they do not contradict prior true statements. (The field of mathematics is tricky in this regard - there may be true statements that stem from our understanding of numbers that do not necessarily may directly onto the real world, but provide useful applications such as the definition of a circle, etc. There may be other instances where there are sub-steps that do not map to the real world, but for which the truth statements that come from these intermediate steps maps to observable phenomenon). In this way, the truth statements are predictive of later observable phenomenon.
      </div>
      <div className={blogstyles.text}>
	So, at its base, science must either be the discovery of an observable phenomon or a system of knowledge that predicts further observable phenomon. Engineering is applied science in this regard. If you have a new type of energy system or machine, it must *predictably* create more power than it consumes. If it does so in a way that violates all known current assumptions about science, then this discovery can lead to new truth statements, but it must be predictable and observable. If you are creating a new base system of physics, you must demonstrate that your system can accurately predict those phenomenon that the current system does, and more to be consider more fundamental.
      </div>
      <div className={blogstyles.text}>
	An example of this is the following. People are debating the merits of green energy vs. coal vs. nuclear. The question then is a matter of physics and mathematics. If you want to posit a world that uses more green energy in order to reduce global warming or pollution then there are a couple questions that must be answered. How much does your proposal lower pollution and will you be able to sustain the energy grid doing this? Or will you allow for prices to rise on electricity in order to lower pollution? If you do this, would you be willing to, yourself, live in a world of more/less pollution and lower/higher prices? Given the current state of battery technology and energy storage, more solar/wind/renewable will raise energy prices as compared to coal and nuclear. No matter where you stand on debates like this, both sides must agree that there are scientifically valid ways to measure and model these tradeoffs, even if on matters of policy two (or more sides) might disagree. I don't have a personal position on either side, as I don't on many political positions. Only that there should be a basis of scientific truth in debates in society.    
      </div>
      <div className={blogstyles.text}>
	Science is either observeable or predictive of observable phenomenon. That's it.
      </div>
      <div className={blogstyles.text}>
        This is the set of tenenants that determine what a science is. The power of science is that religion and faith in what does and does not exist does not matter. At the frontiers of particle physics there is a great deal of mathematics to describe the outcome of experiments that can then map to observeable phenomenon in the real world. This has led some people to assume that, because scientists have a difficult time describing why their predictions work to the general population, that this then means that science is akin to magic. This is why peer review exists as flawed and political as even that can be.   
      </div>
      <div className={blogstyles.text}>
        The beauty of science is that it does not matter if a Hindu discovers a new star, a black Muslim finds a new chemical formula, or a Christian discovers some mathematical principle. Neils Bohr famously had a horseshoe above his office door. Even if someone you don't like personally finds a novel solution to a problem, that can still potentially help millions of people.
      </div>
      <div className={blogstyles.text}>
	There is a tenant of faith in science - that the world is observeable and predictions of observeable phenomenon can be made. Rant on this subject over - I just had to have my say on this.        
      </div>
    </div>
  )
}

export default Thendenver;
