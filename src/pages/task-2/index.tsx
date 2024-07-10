import { Flex, Group, rem, Text } from "@mantine/core";
import { Dropzone } from "@mantine/dropzone";
import { IconPhoto, IconUpload, IconX } from "@tabler/icons-react";
import { useMemo, useState } from "react";
import { notifications } from "../../components/notification";
export default function TextFileDropZone() {
  const [dataFile, setDataFile] = useState<
    | {
        top3: string[];
        count: number;
      }
    | undefined
  >();
  const worker = useMemo(
    () => new Worker(new URL("./worker.ts", import.meta.url)),
    []
  );

  const handleDrop = (acceptedFiles: File[]) => {
    const reader = new FileReader();
    reader.onload = (event: ProgressEvent<FileReader>) => {
      worker.postMessage(event.target?.result as string);

      worker.onmessage = (event: MessageEvent) => {
        const result = event.data;
        if (!result) {
          notifications.error("Your file contains less than 3 words");
          return;
        }
        setDataFile(result);
      };
    };
    reader.readAsText(acceptedFiles[0]);
  };

  return (
    <>
      <Dropzone onDrop={handleDrop} accept={["text/plain"]}>
        <Group
          justify="center"
          gap="xl"
          mih={220}
          style={{ pointerEvents: "none" }}
        >
          <Dropzone.Accept>
            <IconUpload
              style={{
                width: rem(52),
                height: rem(52),
                color: "var(--mantine-color-blue-6)",
              }}
              stroke={1.5}
            />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX
              style={{
                width: rem(52),
                height: rem(52),
                color: "var(--mantine-color-red-6)",
              }}
              stroke={1.5}
            />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <IconPhoto
              style={{
                width: rem(52),
                height: rem(52),
                color: "var(--mantine-color-dimmed)",
              }}
              stroke={1.5}
            />
          </Dropzone.Idle>

          <div>
            <Text size="xl" inline>
              Drag text file here or click to select one
            </Text>
          </div>
        </Group>
      </Dropzone>

      {dataFile && (
        <Flex mt={50} direction={'column'} gap={6}>
          <Text size="xl" maw={200} ta={'left'}>Number of words:{dataFile.count}</Text>
          <Text size="xl" maw={200} ta={'left'}>Top3:{dataFile.top3.join(", ")}</Text>
        </Flex>
      )}
    </>
  );
}
