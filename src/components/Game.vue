<template>
  <div>
    <span v-if="step === 0">
      <div
        style="position: absolute; top: 10%; width: 97.5%"
        class="bubble bubble-bottom-left"
      >
        Hello my name is,

        <pre id="demoFont">
Faky

</pre
        >
        I am happy to meet you!
      </div>
      <br />
      <button
        style="position: absolute; top: 4000%; width: 35%"
        class="bubble bubble threeD"
        v-on:click="chat_correct"
      >
        Long time no see!
      </button>
      <button
        style="position: absolute; top: 4000%; width: 35%"
        class="bubble bubble right threeD"
        v-on:click="chat_incorrect"
      >
        Hello? Who are you?
      </button>
    </span>
    <span v-if="step === 1">
      <div
        style="position: absolute; top: 10%; width: 97.5%"
        class="bubble bubble-bottom-left"
      >
        <span v-if="chat === true">
          Excuse me? I do not think that we know each other...
          <br /><br /><br />
        </span>

        My name is Faky I'm a program that knows everything about Fake News,
        what are they, where do they come from and how to detect them and much
        more!!<br /><br /><br />
        Did you come here to talk to me about Fake News? That would make me so
        happy!!!
      </div>
      <br />
      <button
        style="position: absolute; top: 4000%; width: 35%"
        class="bubble bubble threeD"
        v-on:click="chat_correct"
      >
        What are Fake News?
      </button>
      <button
        style="position: absolute; top: 4000%; width: 35%"
        class="bubble bubble right threeD"
        v-on:click="chat_incorrect"
      >
        I am a little bit lost
      </button>
    </span>
    <span v-if="step === 2">
      <br />
      <div
        style="position: absolute; top: 10%; width: 97.5%"
        class="bubble bubble-bottom-left"
      >
        Okey I will be your guide in the journey to discover what Fake News are.
        <br /><br />
        Fake news is misleading or straight up false information presented in
        news. But it can also be seen in Social Media, one clear example is the
        facebook News feed, where they insert News directly to Social media.
        <br /><br />
        But this is a lot to digest so suddenly so let's do something, we are
        gonna play a Game while I explain to you more things about Fake news.
      </div>
      <button
        style="position: absolute; top: 4000%; width: 35%"
        class="bubble bubble centre threeD"
        v-on:click="chat_incorrect"
      >
        Let's go!
      </button>
    </span>
    <span v-if="step === 3">
      <div
        style="position: absolute; top: 10%; width: 97.5%"
        class="bubble bubble-bottom-left"
      >
        I love quizes so let's start with an easy one!
      </div>

      <button
        class="btn threeD"
        :style="{
          backgroundImage: 'url(' + require(`@/${imagetutoincorrect}`) + ')',
        }"
        style="position: absolute; top: 150px; left: 10%"
        v-on:click="chat_incorrect"
      ></button>
      <button
        class="btn threeD"
        :style="{
          backgroundImage: 'url(' + require(`@/${imagetutoincorrect}`) + ')',
        }"
        style="position: absolute; top: 150px; left: 50%"
        v-on:click="chat_incorrect"
      ></button>
      <button
        class="btn threeD"
        :style="{
          backgroundImage: 'url(' + require(`@/${imagetutocorrect}`) + ')',
        }"
        style="position: absolute; top: 550px; left: 200px"
        v-on:click="chat_correct"
      ></button>
      <button
        class="btn threeD"
        :style="{
          backgroundImage: 'url(' + require(`@/${imagetutoincorrect}`) + ')',
        }"
        style="position: absolute; top: 550px; left: 50%"
        v-on:click="chat_incorrect"
      ></button>
    </span>
    <span v-if="step === 4">
      <div
        style="position: absolute; top: 10%; width: 97.5%"
        class="bubble bubble-bottom-left"
      >
        <span v-if="chat === true">
          I see you know how the game works so Let's Start
        </span>
        <span v-if="chat === false">
          You are not taking this seriously... Anyways let's start and hope you
          get it right from now on
        </span>
      </div>
      <br />
      <span v-if="chat === true">
        <button
          style="position: absolute; top: 4000%; width: 35%"
          class="bubble bubble centre threeD"
          v-on:click="chat_correct"
        >
          Seems a fun game! Let's get to it!
        </button>
      </span>
      <span v-if="chat === false">
        <button
          style="position: absolute; top: 4000%; width: 35%"
          class="bubble bubble centre threeD"
          v-on:click="chat_incorrect"
        >
          I do not have any other option
        </button>
      </span>
    </span>
    <span v-if="step === 5">
      <div
        style="position: absolute; top: 10%; width: 97.5%"
        class="bubble bubble-bottom-left"
      >
        Which one of these can be considered Fake News?
      </div>

      <button
        class="btn2 threeD"
        :style="{
          backgroundImage: 'url(' + require(`@/${onion1}`) + ')',
        }"
        style="position: absolute; top: 150px; left: 10%"
        v-on:click="chat_incorrect"
      ></button>
      <button
        class="btn2 threeD"
        :style="{
          backgroundImage: 'url(' + require(`@/${onion2}`) + ')',
        }"
        style="position: absolute; top: 150px; left: 50%"
        v-on:click="chat_incorrect"
      ></button>
      <button
        class="btn2 threeD"
        :style="{
          backgroundImage: 'url(' + require(`@/${onion3}`) + ')',
        }"
        style="position: absolute; top: 550px; left: 200px"
        v-on:click="chat_correct"
      ></button>
      <button
        class="btn2 threeD"
        :style="{
          backgroundImage: 'url(' + require(`@/${onion4}`) + ')',
        }"
        style="position: absolute; top: 550px; left: 50%"
        v-on:click="chat_incorrect"
      ></button>
    </span>
    <span v-if="step === 6">
      <br />
      <div
        style="position: absolute; top: 10%; width: 97.5%"
        class="bubble bubble-bottom-left"
      >
        CONGRATULATIONS!! <br />THAT ONE WAS FAKE! You are very good at this
        game! <br /><br />
        Just kidding all of them were Fake News
        <br /><br />
        All of them were from the same website that is called the Onion, there
        are a lot of famous websites that all of their articles are satirical
        ones<br />
        But if you do not even look at the website that the information is in,
        or you do not know that all the information on that website is fake you
        may believe the articles that are written there
      </div>
      <button
        style="position: absolute; top: 4000%; width: 35%"
        class="bubble bubble centre threeD"
        v-on:click="chat_incorrect"
      >
        But is this bad?
      </button>
    </span>
    <span v-if="step === 7">
      <br />
      <div
        style="position: absolute; top: 10%; width: 97.5%"
        class="bubble bubble-bottom-left"
      >
        Don't get me wrong there is nothing wrong with creating a Fake News
        magazine, Fake News in a satirical tone and being obviously fake have
        nothing wrong on them
        <br /><br />
        In fact it is a website with the only purpose to brighten your day
        <br /><br />
        The problem is the people that share these articles as if they were the
        truth when they obviously are not
        <br /><br />
        Also the clickbaity nature of this News increases its virality and they
        get to more people despite being truth or not
      </div>
      <button
        style="position: absolute; top: 4000%; width: 35%"
        class="bubble bubble right threeD"
        v-on:click="chat_incorrect"
      >
        Increase its virality?
      </button>
      <button
        style="position: absolute; top: 4000%; width: 35%"
        class="bubble bubble threeD"
        v-on:click="chat_incorrect"
      >
        Clickbait?
      </button>
    </span>
    <span v-if="step === 8">
      <br />
      <div
        style="position: absolute; top: 10%; width: 97.5%"
        class="bubble bubble-bottom-left"
      >
        There is an study that confirms that Fake News spread faster than Real
        ones on Twitter, fake News could spread between to a 1.000 and 100.000
        while real ones hardly got to 1.000
        <br /><br />
        One of the most scary parts of that study is that real accounts spread
        Fake News more than Bots do
        <br /><br />
        Don't get me wrong, bots can not detect Fake News but they share Real
        and Fake ones with the same ratio
        <br /><br />
        One factor which makes people share the Fake ones more than the Real
        ones is because of the clickbait. This means having a strong or
        controversial title for the article which makes people have an opinion
        on it and want to share it
      </div>
      <button
        style="position: absolute; top: 4000%; width: 35%"
        class="bubble bubble centre threeD"
        v-on:click="chat_incorrect"
      >
        So much information
      </button>
    </span>
    <span v-if="step === 9">
      <div
        style="position: absolute; top: 10%; width: 97.5%"
        class="bubble bubble-bottom-left"
      >
        For example, which one do you think uses clickbait?
      </div>

      <button
        class="btn2 threeD"
        :style="{
          backgroundImage: 'url(' + require(`@/${CB1}`) + ')',
        }"
        style="position: absolute; top: 150px; left: 10%"
        v-on:click="chat_incorrect"
      ></button>
      <button
        class="btn4 threeD"
        :style="{
          backgroundImage: 'url(' + require(`@/${CB2}`) + ')',
        }"
        style="position: absolute; top: 150px; left: 50%"
        v-on:click="chat_incorrect"
      ></button>
      <button
        class="btn3 threeD"
        :style="{
          backgroundImage: 'url(' + require(`@/${CB3}`) + ')',
        }"
        style="position: absolute; top: 550px; left: 200px"
        v-on:click="chat_incorrect"
      ></button>
      <button
        class="btn2 threeD"
        :style="{
          backgroundImage: 'url(' + require(`@/${CB4}`) + ')',
        }"
        style="position: absolute; top: 550px; left: 50%"
        v-on:click="chat_correct"
      ></button>
    </span>
    <span v-if="step === 10">
      <br />
      <div
        style="position: absolute; top: 10%; width: 97.5%"
        class="bubble bubble-bottom-left"
      >
        <span v-if="chat === true">
          Good job! Just by looking at the different articles titles you can
          clearly detect which one is clickbait<br /><br />
          As you can already see they usually make an statement where they do
          not say nothing but leave it open for interpretation and that is not
          what News should be<br /><br />
          The title should always be a summary if the news but clear and
          concise, if it is something that generates more questions than the one
          it answers it can be considered clickbait
        </span>
        <span v-if="chat === false">
          That one was real, you should focus more on what the title is saying
          of the news, is it summarizing it? or is it hyping it up without
          saying anything?<br /><br />
          As you can already see they usually make an statement where they do
          not say nothing but leave it open for interpretation and that is not
          what News should be<br /><br />
          There are some clear sentences that you should watch out when trying
          to detect fake news, the article uses clickbait if the title contains:<br /><br />
          "You will not believe this!","We did _ and you will not believe what
          happens next","Doctors hate her for using this trick" between many
          others<br /><br />
          The Fake one was the following one, the sentence "You won't believe
          what happens next!" is a clear indicator of clickbait
        </span>
      </div>
      <span v-if="chat === false">
        <button
          class="btn2"
          :style="{
            backgroundImage: 'url(' + require(`@/${CB4}`) + ')',
          }"
          style="position: absolute; top: 400px; left: 30%"
        ></button>
      </span>
      <span v-if="chat === false">
        <button
          style="position: absolute; top: 4000%; width: 35%"
          class="bubble bubble centre threeD"
          v-on:click="chat_incorrect"
        >
          I see it now
        </button>
      </span>
      <span v-if="chat === true">
        <button
          style="position: absolute; top: 4000%; width: 35%"
          class="bubble bubble centre threeD"
          v-on:click="chat_incorrect"
        >
          It was easy to detect it
        </button>
      </span>
    </span>
    <span v-if="step === 11">
      <br />
      <div
        style="position: absolute; top: 10%; width: 97.5%"
        class="bubble bubble-bottom-left"
      >
        The problem is not only on the title of the news
        <br /><br />
        The article itself could be misleading or with untrustworthy sources due
        to the journalists job
        <br /><br />
        Maybe they had a strict deadline or policies that makes them publish
        about certain topics a little bit biased
        <br /><br />
        And this should not be done but usually happens in some News
      </div>
      <button
        style="position: absolute; top: 4000%; width: 35%"
        class="bubble bubble right threeD"
        v-on:click="chat_incorrect"
      >
        This does not sound ethical at all!
      </button>
      <button
        style="position: absolute; top: 4000%; width: 35%"
        class="bubble bubble threeD"
        v-on:click="chat_correct"
      >
        A reporter does what?
      </button>
    </span>
    <span v-if="step === 12">
      <br />
      <div
        style="position: absolute; top: 10%; width: 97.5%"
        class="bubble bubble-bottom-left"
      >
        <span v-if="chat === true">
          When that is your job you do not always have an option so it is not
          the reporters fault <br /><br />
          We can blame the groups that try to spread misinformation news about
          certain topics<br /><br />
          For example, when Covid hit us, there were a lot of misinformation
          about it, and as some people uses Social Media to get their news and
          we already said that the fake ones spread faster a lot of people got
          misinformed
        </span>
        <span v-if="chat === false">
          It may not be ethical but that is how it is<br /><br />
          What is even worse is that some groups try to spread Fake News and
          uses bots to spread them, and as people also spread them faster this
          means that they get to lie to a lot of people while they believe it is
          true<br /><br />
          For example, when Covid hit us, there were a lot of misinformation
          about it, and as some people uses Social Media to get their news and
          we already said that the fake ones spread faster a lot of people got
          misinformed
        </span>
      </div>
      <span v-if="chat === false">
        <button
          style="position: absolute; left: 28%; top: 4000%; width: 40%"
          class="bubble bubble centre threeD"
          v-on:click="chat_incorrect"
        >
          Unbelievable that they would use Covid
        </button>
      </span>
      <span v-if="chat === true">
        <button
          style="position: absolute; left: 23%; top: 4000%; width: 55%"
          class="bubble bubble centre threeD"
          v-on:click="chat_correct"
        >
          Poor people, but is really people taking covid as a joke?
        </button>
      </span>
    </span>
    <span v-if="step === 13">
      <div
        style="position: absolute; top: 10%; width: 97.5%"
        class="bubble bubble-bottom-left"
      >
        Could this be Fake News?
      </div>
      <br />

      <button
        class="btn2 centre"
        :style="{
          backgroundImage: 'url(' + require(`@/${covid1}`) + ')',
        }"
        style="position: absolute; top: 120px; left: 30%"
      ></button>
      <button
        class="btn2"
        :style="{
          backgroundImage: 'url(' + require(`@/${covid2}`) + ')',
        }"
        style="position: absolute; top: 250px; left: 30%"
      ></button>
      <button
        class="btn2"
        :style="{
          backgroundImage: 'url(' + require(`@/${covid3}`) + ')',
        }"
        style="position: absolute; top: 400px; left: 30%"
      ></button>
      <button
        style="position: absolute; top: 4000%; width: 35%"
        class="bubble bubble right threeD"
        v-on:click="chat_incorrect"
      >
        Not false information
      </button>
      <button
        style="position: absolute; top: 4000%; width: 35%"
        class="bubble bubble threeD"
        v-on:click="chat_correct"
      >
        Looks like Fake News
      </button>
    </span>
    <span v-if="step === 14">
      <br />
      <div
        style="position: absolute; top: 10%; width: 97.5%"
        class="bubble bubble-bottom-left"
      >
        <span v-if="chat === true">
          Indeed this was Fake, but if you read it properly there is no lie in
          what they are saying <br /><br />
          The problem is the misinformation, while all the information that is
          given in this article is true, there is not all the information
          available<br /><br />
          This article explains everything that makes vaccination look bad
          without citing all the good things that it will bring, this may cause
          a biased opinion on the reader wanting for them to take as much time
          as needed to develop the vaccine instead of looking at the benefit of
          having people already vaccinated
        </span>
        <span v-if="chat === false">
          Correct! this is not false information but the whole article can be
          considered as Fake News<br /><br />
          The problem is the misinformation, while all the information that is
          given in this article is true, there is not all the information
          available on this topic<br /><br />
          This article explains everything that makes vaccination look bad
          without citing all the good things that it will bring, this may cause
          a biased opinion on the reader wanting for them to take as much time
          as needed to develop the vaccine instead of looking at the benefit of
          having people already vaccinated
        </span>
      </div>
      <span v-if="chat === false">
        <button
          style="position: absolute; left: 28%; top: 4000%; width: 42%"
          class="bubble bubble centre threeD"
          v-on:click="chat_incorrect"
        >
          So skipping vital information is Fake News?
        </button>
      </span>
      <span v-if="chat === true">
        <button
          style="position: absolute; left: 23%; top: 4000%; width: 55%"
          class="bubble bubble centre threeD"
          v-on:click="chat_correct"
        >
          So not telling everything is lying?
        </button>
      </span>
    </span>
    <span v-if="step === 15">
      <br />
      <div
        style="position: absolute; top: 10%; width: 97.5%"
        class="bubble bubble-bottom-left"
      >
        We have seen that News that omit crucial information on that topic are
        considered fake news
        <br /><br />
        But obviously an article that contains false information is also
        considered Fake News
        <br /><br />
        While this may seem intuitive, when reading the news online you do not
        know which sources is the article based on and sometimes it may be hard
        to check them
      </div>
      <button
        style="position: absolute; top: 4000%; width: 35%"
        class="bubble bubble right threeD"
        v-on:click="chat_incorrect"
      >
        Like what?
      </button>
      <button
        style="position: absolute; top: 4000%; width: 35%"
        class="bubble bubble threeD"
        v-on:click="chat_correct"
      >
        An example please
      </button>
    </span>
    <span v-if="step === 16">
      <div
        style="position: absolute; top: 10%; width: 97.5%"
        class="bubble bubble-bottom-left"
      >
        Which one contains false information
      </div>

      <button
        class="btn6 threeD"
        :style="{
          backgroundImage: 'url(' + require(`@/${false1}`) + ')',
        }"
        style="position: absolute; top: 130px; left: 10%"
        v-on:click="chat_incorrect"
      ></button>
      <button
        class="btn5 threeD"
        :style="{
          backgroundImage: 'url(' + require(`@/${false2}`) + ')',
        }"
        style="position: absolute; top: 130px; left: 50%"
        v-on:click="chat_incorrect"
      ></button>
    </span>
    <span v-if="step === 17">
      <br />
      <div
        style="position: absolute; top: 10%; width: 97.5%"
        class="bubble bubble-bottom-left"
      >
        That was a trap question, obviously both of them were fake as they are
        obviously lying
        <br /><br />
        The problem with Fake News is detecting them when they refer to
        something you are not an expert of
        <br /><br />
        When they are published in Social Media they should be fact checked to
        see if they are true, and social media is starting to fact check news
        about Covid as they realised that a lot of misinformation has been
        spread on Social Media
      </div>
      <button
        style="position: absolute; top: 4000%; width: 35%"
        class="bubble bubble right threeD"
        v-on:click="chat_incorrect"
      >
        Fact checking is...
      </button>
      <button
        style="position: absolute; top: 4000%; width: 35%"
        class="bubble bubble threeD"
        v-on:click="chat_correct"
      >
        Only Covid ones?
      </button>
    </span>
    <span v-if="step === 18">
      <br />
      <div
        style="position: absolute; top: 10%; width: 97.5%"
        class="bubble bubble-bottom-left"
      >
        <span v-if="chat === true">
          For the moment they are only covering covid ones because it is hard to
          verify every piece of news uploaded in the news <br /><br />
          Also covid affects everyone and misinforming a lot of people while
          having the ability to avoid it is completely wrong<br /><br />
          Fact checking can be done using a multitude of tools that is
        </span>
        <span v-if="chat === false">
          Fact checking is confirming that the News you are reading is or is not
          Fake News<br /><br />
          This could avoid the spread of Fake News or at least make it more
          obvious for common users that what they are watching are fake news<br /><br />
          For the moment Social Media in general is starting to fact check every
          news related to covid but this should be spread to all the news
          published in them, but they would need to invest a lot of resources
          into fact checking
        </span>
      </div>
      <button
        style="position: absolute; top: 4000%; width: 35%"
        class="bubble bubble threeD"
        v-on:click="chat_correct"
      >
        How to fact check?
      </button>
      <button
        style="position: absolute; top: 4000%; width: 35%"
        class="bubble bubble right threeD"
        v-on:click="chat_incorrect"
      >
        Is it that useful?
      </button>
    </span>
    <span v-if="step === 19">
      <br />
      <div
        style="position: absolute; top: 10%; width: 97.5%"
        class="bubble bubble-bottom-left"
      >
        <span v-if="chat === true">
          To fact check there are a lot of variables that should be taken into
          consideration<br /><br />
          Check the credentials of the author, check the sources, look for bias
          in the news, where is the information being posted, suspect that the
          sensational is fake<br /><br />
          There are also different websites that help you fact check news which
          could be used but sometimes it is hard to find information about a
          specific news so you can not be 100% sure of its authenticity
        </span>
        <span v-if="chat === false">
          Fact checking is a very important aspect of gathering news online<br /><br />
          If the persons that share News online fact checked before doing so the
          virality of Fake News would decrease a lot <br /><br />
          Also if you fact check you know that the information that you read has
          a higher probability of being true than if you fact check, while it is
          not perfect
        </span>
      </div>
      <button
        style="position: absolute; top: 4000%; width: 35%"
        class="bubble bubble threeD"
        v-on:click="chat_correct"
      >
        That is all?
      </button>
      <button
        style="position: absolute; top: 4000%; width: 35%"
        class="bubble bubble right threeD"
        v-on:click="chat_incorrect"
      >
        Looks easy
      </button>
    </span>
    <span v-if="step === 20">
      <br />
      <div
        style="position: absolute; top: 10%; width: 95%"
        class="bubble bubble-bottom-left"
      >
        <span v-if="chat === true">
          Yes, fact checking the origin of the news and its veracity can help
          you detect Fake News<br /><br />
          We have also seen that being aware of the clickbait also helps you
          reduce the chances of being given fake information<br /><br />
          Sometimes all the information that is given is true but if not all the
          information is given it is also Fake News<br /><br />
          So, when reading News in Social Media you have to be aware of all the
          things that we have mentioned in our talk, I hope you liked the game
          we played and I hope I will see you sometime soon
        </span>
        <span v-if="chat === false">
          It is easy, fact checking the origin of the news and its veracity can
          help you detect Fake News<br /><br />
          We have also seen that being aware of the clickbait also helps you
          reduce the chances of being given fake information<br /><br />
          Sometimes all the information that is given is true but if not all the
          information is given it is also Fake News<br /><br />
          So, when reading News in Social Media you have to be aware of all the
          things that we have mentioned in our talk, I hope you liked the game
          we played and I hope I will see you sometime soon
        </span>
      </div>
      <button
        style="position: absolute; top: 4000%; width: 35%"
        class="bubble bubble centre threeD"
        v-on:click="chat_incorrect"
      >
        Thank you Faky!
      </button>
    </span>
    <span v-if="step === 21">
      <br />
      <div
        style="position: absolute; top: 1100%; width: 97.5%"
        class="bubble bubble-bottom-left"
      >
        <pre id="demoFont">
THANKS FOR PLAYING

</pre
        >
        Hope you had a good time and learned something new about fake news<br />
        Browse safely on the net
      </div>
    </span>
  </div>
</template>


<script>
import { mapState } from "vuex";
export default {
  name: "Game",
  data() {
    return {
      image: "assets/logo.png",
      imagetutocorrect: "assets/correct.png",
      imagetutoincorrect: "assets/incorrect.png",
      onion1: "assets/Onion1.png",
      onion2: "assets/Onion2.png",
      onion3: "assets/Onion3.png",
      onion4: "assets/Onion4.png",
      CB1: "assets/CB1.png",
      CB2: "assets/CB2.png",
      CB3: "assets/CB3.png",
      CB4: "assets/CB4.png",
      covid1: "assets/Covid1.png",
      covid2: "assets/Covid2.png",
      covid3: "assets/Covid3.png",
      false1: "assets/False1.png",
      false2: "assets/False2.png",
      false3: "assets/False3.png",
      step: 0,
      chat: true,
    };
  },
  components: {},
  computed: {
    ...mapState(["current_stage"]),
  },
  methods: {
    chat_correct() {
      this.step = this.step + 1;
      this.chat = true;
    },
    chat_incorrect() {
      this.step = this.step + 1;
      this.chat = false;
    },
  },
};
</script>
<style>
.btn {
  /*image settings*/
  background-size: 700px;
  background-position: center center;
  position: absolute;
  height: 300px;
  width: 700px;
  left: 10%;
  top: 50%;
}
.btn2 {
  /*image settings*/
  background-size: 100%;
  background-position: center center;
  position: absolute;
  height: 124px;
  width: 700px;
  left: 10%;
  top: 50%;
}
.btn3 {
  /*image settings*/
  background-size: 100%;
  background-position: center center;
  position: absolute;
  height: 200px;
  width: 700px;
  left: 10%;
  top: 50%;
}
.btn4 {
  /*image settings*/
  background-size: 100%;
  background-position: center center;
  position: absolute;
  height: 100px;
  width: 700px;
  left: 10%;
  top: 50%;
}
.btn5 {
  /*image settings*/
  background-size: 700px;
  background-position: center center;
  position: absolute;
  height: 700px;
  width: 700px;
  left: 10%;
  top: 50%;
}
.btn6 {
  /*image settings*/
  background-size: 700px;
  background-position: center center;
  position: absolute;
  height: 650px;
  width: 700px;
  left: 10%;
  top: 50%;
}

body {
  background: rgb(136, 164, 255);
  perspective: 35em;
}
.speech-bubble {
  position: relative;
  margin: 0.5em auto;
  padding: 1em;
  width: 10em;
  height: 4em;
  border-radius: 0.25em;
  transform: rotate(-4deg) rotateY(15deg);
  background: #629bdd;
  font: 2em/4 Century Gothic, Verdana, sans-serif;
  text-align: center;
}
.speech-bubble:before,
.speech-bubble:after {
  position: absolute;
  z-index: -1;
  content: "";
}
.speech-bubble:after {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: inherit;
  transform: rotate(2deg) translate(0.35em, -0.15em) scale(1.02);
  background: #f4fbfe;
}
.speech-bubble:before {
  border: solid 0 transparent;
  border-right: solid 3.5em #f4fbfe;
  border-bottom: solid 0.25em #629bdd;
  bottom: 0.25em;
  left: 1.25em;
  width: 0;
  height: 1em;
  transform: rotate(45deg) skewX(75deg);
}
.button2 {
  background: transparent;
  border: none;
  outline: none;
  display: block;
  cursor: pointer;
}

.bubble {
  position: relative;
  font-family: sans-serif;
  font-size: 27px;
  font-style: normal;
  letter-spacing: 0px;
  word-spacing: 2px;
  color: rgb(0, 0, 0);
  text-decoration: none;
  line-height: 24px;
  width: 300px;
  background: #fff;
  border-radius: 40px;
  padding: 24px;
  text-align: center;
}
.right {
  left: 10%;
}
.centre {
  left: 30%;
}
.bubble-bottom-left:before {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 24px solid #fff;
  border-right: 12px solid transparent;
  border-top: 12px solid #fff;
  border-bottom: 20px solid transparent;
  left: 32px;
  bottom: -24px;
}

#demoFont {
  font-family: Impact, Charcoal, sans-serif;
  font-size: 100px;
  letter-spacing: 3.6px;
  word-spacing: 0px;
  color: rgb(5, 48, 187);
  font-weight: 700;
  text-decoration: none;
  font-style: italic;
  font-variant: small-caps;
  text-transform: capitalize;
}

.threeD {
  color: rgb(0, 0, 0);
  white-space: nowrap;
  font-size: 2em;
  font-family: sans-serif;
  letter-spacing: 0.1em;
  transition: 0.3s;
}

.threeD:hover {
  transition: 0.3s;
  transform: scale(1.1);
}

.line-1 {
  position: relative;
  top: 50%;
  width: 24em;
  margin: 0 auto;
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  font-size: 180%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  transform: translateY(-50%);
}

/* Animation */
.anim-typewriter {
  animation: typewriter 4s steps(44) 1s 1 normal both,
    blinkTextCursor 500ms steps(44) infinite normal;
}
@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 24em;
  }
}
@keyframes blinkTextCursor {
  from {
    border-right-color: rgba(255, 255, 255, 0.75);
  }
  to {
    border-right-color: transparent;
  }
}
</style>