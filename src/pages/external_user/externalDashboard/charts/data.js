import { customColor } from "../../../components/chartComponents/customColor";

export const doughNutLabels = [
  "Red",
  "Blue",
  "Yellow",
  "Green",
  "Purple",
  "Orange",
];

export const doughNutData = {
  labels: doughNutLabels.map((item) => item),
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: customColor,
      borderWidth: 1,
    },
  ],
};
