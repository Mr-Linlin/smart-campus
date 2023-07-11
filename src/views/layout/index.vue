<template>
  <div class="layout">
    <ScreenAdapter>
      <div class="content">
        <header
          class="flex w-full justify-between text-white text-sm px-7 fixed z-20 top-0 bg-gradient-to-b from-dark to-dark/0"
        >
          <h1
            class="flex-1 text-2xl text-center mt-3 bg-center bg-[length:auto_100%] bg-no-repeat h-16"
            :style="`background-image: url(${headerBg})`"
          >
            石湖农贸市场可视化平台
          </h1>
        </header>
        <div class="w-full h-full relative flex flex-box">
          <div class="left pl-7 pb-7 pt-10">
            <div class="box-item">
              <Polygonal />
            </div>
            <div class="box-item mt-5 mb-5"><Cake /></div>
            <div class="box-item"><Broken /></div>
          </div>
          <div class="main flex-1 pb-7 pt-20 flex">
            <div
              class="energy w-1/4 bg-blue-700 h-32 ml-2 mr-2 flex text-white"
              v-for="(item, index) in energyList"
              :key="index"
            >
              <div
                class="title flex justify-center items-center w-1/5 bg-neutral-500"
              >
                {{ item.title }}
              </div>
              <div class="info flex justify-between flex-1">
                <div>{{ item.label }}</div>
                <div>{{ item.rate }}</div>
              </div>
            </div>
          </div>
          <div class="right pr-7 pb-7 pt-10">
            <div class="box-item">
              <Polygonal />
            </div>
            <div class="box-item mt-5 mb-5"><Cake /></div>
            <div class="box-item"><BrokenTwo /></div>
          </div>
        </div>
        <div
          class="fixed bottom-0 left-1/2 -translate-x-1/2"
          style="z-index: 9999"
        >
          <img src="./imgs/bottom_navigation_bg.png" />
          <div
            class="absolute w-full h-full top-0 flex justify-center items-center gap-3"
          >
            <div
              class="bg-blue-800 rounded-full px-3 text-white"
              v-for="(item, index) in tabs"
              :key="index"
            >
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </ScreenAdapter>
  </div>
</template>
<script setup>
import ScreenAdapter from "@/components/ScreenAdapter.vue";
import headerBg from "./imgs/header_bg.png";
import Polygonal from "./components/Polygonal.vue";
import Cake from "./components/Cake.vue";
import Broken from "./components/Broken.vue";
import BrokenTwo from "./components/BrokenTwo.vue";

const tabs = ["智慧停车", "设备管理", "能耗管理"];
const energyList = [
  {
    title: "3F",
    label: "耗电",
    rate: "497 kw/h",
  },
  {
    title: "2F",
    label: "耗水",
    rate: "6113吨",
  },
  {
    title: "1F",
    label: "耗水",
    rate: "6113吨",
  },
  {
    title: "BF1",
    label: "耗水",
    rate: "6113吨",
  },
];
</script>
<style lang="scss">
.layout {
  .content {
    width: 100%;
    .flex-box {
      justify-content: space-between;
      .main {
      }
    }
  }
}
</style>
