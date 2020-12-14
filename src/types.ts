interface TopNMetricSpec {
  type: "numeric";
  metric: string;
}

interface SumAggregator {
  type: "longSum" | "doubleSum" | "floatSum";
  name: string;
  fieldName: string;
}

interface CountAggregator {
  type: "count";
  name: string;
}

export interface Payload {
  queryType: "topN";
  metric: string | TopNMetricSpec;
  aggregations: (CountAggregator | SumAggregator)[];
}

// interface TopNMetricSpec {
//   type: "numeric";
//   metric: string;
// }
// type Aggregator = AggregatorSum | AggregatorCount;
// interface AggregatorSum {
//   type: "longSum" | "doubleSum" | "floatSum";
//   name: string;
//   fieldName: string;
// }
// interface AggregatorCount {
//   type: "count";
//   name: string;
// }
// export interface Payload {
//   queryType: "topN";
//   metric: string | TopNMetricSpec;
//   aggregations: Aggregator[];
// }

let data: Payload;

data = {
  queryType: "topN",
  metric: {
    type: "numeric",
    metric: "name",
  },
  aggregations: [
    {
      type: "count",
      name: "count",
    },
    {
      type: "doubleSum",
      name: "doubleSum",
      fieldName: "doubleSum",
    },
  ],
};

// data = {
//   queryType: "topN",
//   metric: {
//     type: "numeric",
//     metric: "name",
//   },
//   aggregations: [
//     {
//       type: "count",
//       name: "count",
//     },
//     {
//       type: "doubleSum",
//       name: "doubleSum",
//       fieldName: "doubleSum",
//     },
//     {
//       type: "count",
//       name: "count",
//       fieldName: "count",
//     },
//     {
//       type: "longSum",
//       name: "longSum",
//     },
//   ],
// };
