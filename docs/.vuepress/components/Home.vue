<template>
  <div class="container">
    <div class="main">
      <div class="greeting" v-if="!ip">
        <div class="cn-title">加载中...</div>
      </div>
      <transition name="fade">
        <div class="greeting" v-if="ip">
          <div class="cn-title">欢迎</div>
          <div class="en-title">Welcome</div>
          <div class="motto" v-if="messageZh">{{ messageZh }}</div>
          <div class="motto" v-if="message != messageZh">{{ message }}</div>
        </div>
      </transition>
    </div>
    <transition name="fade">
      <div class="foot" v-if="ip">
        <div>
          {{ browser != "unknown" ? browser : "" }}
          {{ system != "unknown" ? system : "" }}
          {{ systemVs != "unknown" ? systemVs : "" }}
        </div>
        <div>Location: {{ region }}</div>
        <div>
          <span v-if="ipVersion === 'IPv4'">Your IP: </span>{{ ip }}({{
            ipVersion
          }})
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import ua from "../public/ua"; // 浏览器UA判断组件
import fetch from "node-fetch"; // 必须引入fetch，不然build时候会报错fetch undefined
export default {
  name: "Home",
  data() {
    return {
      ip: "",
      region: "",
      ipVersion: "",
      message: "",
      messageZh: "",
      browser: "",
      systemVs: "",
      system: "",
    };
  },
  created() {
    this.getIpAdress();
    // this.getMotto();
  },
  mounted() {
    // 必须在mounted中写，否则报错找不到window对象
    this.browser = ua().browser;
    this.systemVs = ua().systemVs;
    this.system = ua().system;
  },
  methods: {
    /* async getMotto() {
      const res = await fetch("https://starbucks-proxy.vercel.app/");
      const resp = await res.json();
      console.log(resp.data.messageZh);
      this.message = resp.data.message;
      this.messageZh = resp.data.messageZh;
    }, */
    async getIpAdress() {
      const res = await fetch("https://ipapi.co/json/");
      const resp = await res.json();
      this.ip = resp.ip;
      this.region = resp.region;
      this.ipVersion = resp.version;
    },
  },
};
</script>

<style>
.home {
  padding-left: 0 !important;
  margin: 0 !important;
  max-width: 100vh !important;
}
</style>
<style scoped>
.container {
  height: calc(100vh - 3.6rem);
  /* width: calc(100vw - 15px); */
  width: 100vw;
  background: url("../public/bg.svg") no-repeat;
  background-size: 100% 100%;
  /* border: 1px solid red; */
  /* background: olive; */
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.main {
  margin: auto;
  text-align: center;
}
.main .cn-title,
.main .en-title {
  font-size: 2rem;
  font-weight: 700;
}
.main .en-title {
  margin-bottom: 1.2rem;
}

.foot {
  color: #4e6e8e;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.foot div {
  margin: 0 0.3rem;
}
@media (max-width: 500px) {
  .foot {
    flex-direction: column;
    align-items: center;
  }
}
/* 动画 */
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter {
  opacity: 0;
}
</style>
