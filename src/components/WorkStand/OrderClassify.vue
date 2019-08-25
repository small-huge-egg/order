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
    year: "1",
    新增客户: 38,
  },
  {
    year: "2",
    新增客户: 52,
  },
  {
    year: "3",
    新增客户: 61,
  },
  {
    year: "4",
    新增客户: 80,
  },
  {
    year: "5",
    新增客户: 65,
  },
  {
    year: "6",
    新增客户: 60,
  }
];
const scale = [
  {
    dataKey: "value",
    alias: "The Share Price in Dollars",
    min: 20,
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
  splitNumber:20,
  fields: ["新增客户"],
  key: "type",
  value: "value",
   
});
export default {
  data() {
    return{
      min:20,
        data:dv,
        scale,
        height: 300,
        padding:[ 50, 20, 50, 40 ],
    }
  }
};
</script>

