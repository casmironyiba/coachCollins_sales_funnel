interface Props {
  (size: string | TemplateStringsArray, desiredSize: number):
    | string
    | TemplateStringsArray;
}

const calc: Props = (size, desiredSize) => `${size} / ${desiredSize}`;
export default calc;
