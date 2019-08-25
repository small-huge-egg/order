<template>
    <div>
        <v-chart :forceFit="true" :height="height" :padding="padding" :data="data" :scale="scale">
            <v-axis />
            <v-tooltip :crosshairs="true"></v-tooltip>
            <v-area position="year*value" color="type" shape="smooth"></v-area>
            <v-line position="year*value" color="type" size="2" shape="smooth"></v-line>
        </v-chart>
    </div>
</template>

<script>
const DataSet = require('@antv/data-set');
const data = [
  {
    year: "1月",
    "总营收(亿)": 0,
  },
  {
    year: "2月",
    "总营收(亿)": 52,
  },
  {
    year: "3月",
    "总营收(亿)": 61,
  },
  {
    year: "4月",
    "总营收(亿)": 80,
  },
  {
    year: "5月",
    "总营收(亿)": 65,
  },
  {
    year: "6月",
    "总营收(亿)": 70,
  },
  {
    year: "7月",
    "总营收(亿)": 80,
  },
  {
    year: "8月",
    "总营收(亿)": 90,
  },
  {
    year: "9月",
    "总营收(亿)": 85,
  },
  {
    year: "10月",
    "总营收(亿)": 100,
  },
  {
    year: "11月",
    "总营收(亿)": 110,
  },
  {
    year: "12月",
    "总营收(亿)": 120,
  }
];
const scale = [
  {
    dataKey: "value",
    alias: "The Share Price in Dollars",
    formatter: val =>  val
  },
  {
    dataKey: "year",
    range: [0, 1]
  }
];
const dv = new DataSet.View().source(data);
dv.transform({
  type: "fold",
  fields: ["总营收(亿)"],
  key: "type",
  value: "value"
});
export default {
  data() {
    return{
        data:dv,
        scale,
        height: 300,
        padding:[ 50, 20, 50, 40 ],
    }
  }
};
</script>

