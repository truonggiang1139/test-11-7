type ColumnProps = {
  height: number;
};
export default function Column({ height }: ColumnProps) {
  const boxes = Array(height).fill(undefined);
  return (
    <div className="flex flex-col gap-2">
      {boxes.length ? (
        boxes.map((_, index) => (
          <div key={index} className="size-14 border border-black"></div>
        ))
      ) : (
        <div className="size-14"></div>
      )}
    </div>
  );
}
