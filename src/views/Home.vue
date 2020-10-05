<template>
  <div>
    <v-parallax dark src="../assets/images/coding-chioma.jpg">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12" sm="4">
          <vue-typed-js
            :strings="[
              'my name is Chioma Onyekpere',
              'I am a Software Engineer'
            ]"
          >
            <h1>Hello, <span class="typing"></span></h1>
          </vue-typed-js>
          <v-btn class="ma-2" rounded color="white" to="/resume">
            Hire me
          </v-btn>
        </v-col>
      </v-row>
    </v-parallax>

    <section class="bg-bio">
      <v-container class="white-smoke">
        <v-row align="center" justify="center" class="professional-bio">
          <v-col
            cols="12"
            sm="6"
            class="text-center"
          >
            <v-img
              src="../assets/images/professional-bio-chioma.jpg"
              class="grey lighten-2"
              max-height="650px"
              max-width="450px"
            />
          </v-col>
          <v-col
            cols="12"
            sm="6"
          >
            <h2>{{ myPassion }}</h2>
            <p> {{ professionalBio }}</p>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <v-container class="white">
      <v-row align="center" justify="center">
        <v-col
          cols="12"
          sm="4"
          class="text-center"
        >
          <v-hover
            v-slot:default="{ hover }"
            open-delay="200"
          >
            <v-card
              max-width="400"
              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }"
            >
              <v-img
                height="200px"
                src="../assets/images/drinking-chioma.jpg"
              >
                <v-card-title class="white--text mt-8">
                  <p class="ml-3">
                    Read my blog
                  </p>
                </v-card-title>
              </v-img>
              <v-card-text>
                <div class="font-weight-bold ml-8 mb-2">
                  Latest
                </div>
                <v-timeline
                  align-top
                  dense
                >
                  <v-timeline-item
                    color="secondary"
                    small
                  >
                    <div>
                      <div class="font-weight-normal">
                        <strong>lorem ipsum</strong> @7:30am
                      </div>
                      <div>Blogpost x</div>
                    </div>
                  </v-timeline-item>
                  <v-timeline-item
                    color="accent"
                    small
                  >
                    <div>
                      <div class="font-weight-normal">
                        <strong>lorem ipsum</strong> @7:30am
                      </div>
                      <div>Blogpost x</div>
                    </div>
                  </v-timeline-item>
                </v-timeline>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>

        <v-col
          cols="12"
          sm="4"
          class="text-center"
        >
          <v-hover
            v-slot:default="{ hover }"
            open-delay="200"
          >
            <v-card
              class="mx-auto"
              max-width="344"
              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }"
            >
              <Timeline id="simpcyclassy" sourceType="profile" :options="{ tweetLimit: '2', theme: 'dark'}"/>
            </v-card>
          </v-hover>
        </v-col>

        <v-col
          cols="12"
          sm="4"
          class="text-center"
        >
          <v-hover
          v-slot:default="{ hover }"
          open-delay="200"
          >
            <v-card
              max-width="400"
              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }"
            >
              <v-img
                height="200px"
                src="../assets/images/firefox-voice.png"
              >
                <v-card-title class="white--text mt-8">
                  <p class="ml-3">
                    See my Recent Projects
                  </p>
                </v-card-title>
              </v-img>
              <v-card-text>
                <div class="font-weight-bold ml-8 mb-2">
                  My projects
                </div>
                <v-timeline
                  align-top
                  dense
                >
                  <v-timeline-item
                    color="secondary"
                    small
                  >
                    <div>
                      <div class="font-weight-normal">
                        <strong>lorem ipsum</strong> @7:30am
                      </div>
                      <div>Project x</div>
                    </div>
                  </v-timeline-item>
                  <v-timeline-item
                    color="accent"
                    small
                  >
                    <div>
                      <div class="font-weight-normal">
                        <strong>lorem ipsum</strong> @7:30am
                      </div>
                      <div>Project x</div>
                    </div>
                  </v-timeline-item>
                </v-timeline>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Timeline } from 'vue-tweet-embed'

export default Vue.extend({
  name: 'Home',
  components: {
    Timeline
  },

  data: () => ({
    myPassion: 'I love to make user experience easy and exciting',
    professionalBio: `Excited about software development I build highly interactive viable products.  I am a JavaScript developer with 1.9 years of professional experience. I have an eye for good design. I thrive on building functioning and scalable systems that will work effectively for a long time.
    When I'm not coding nor learning, I could be found mentoring upcoming techies, writing random articles, playing games, or doing karaoke.`
  })
})
</script>

<style scoped>
.professional-bio{
  margin-top: 10%;
  margin-bottom: 10%;
}
.bg-bio{
  background: #f5f5f5
}
</style>
