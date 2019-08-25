<template>
  <div>
    <v-chart :forceFit="true" :height="height" :padding="padding" :data="data" :scale="scale">
      <v-tooltip :showTitle="false" dataKey="item*percent" />
      <v-axis />
      <v-legend dataKey="item" />
      <v-pie position="percent" color="item" :vStyle="pieStyle" />
      <v-coord type="theta" :radius="0.85" :innerRadius="0.6" />
    </v-chart>
  </div>
</template>

<script>
const DataSet = require('@antv/data-set');

const sourceData = [
  { item: '服装', count: 60 },
  { item: '酒水', count: 30 },
  { item: '家居', count: 10 }
];

const scale = [{
  dataKey: 'percent',
  min: 0,
  formatter: '.0%',
}];

const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: 'percent',
  field: 'count',
  dimension: 'item',
  as: 'percent'
});
const data = dv.rows;

export default {
  data() {
    return {
      data,
      scale,
      height: 300,
      padding: [ 30, 20, 70, 20 ],
      pieStyle: {
        stroke: "#fff",
        lineWidth: 1,
      }
    };
  }
};
</script>