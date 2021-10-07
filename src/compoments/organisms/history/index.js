// ATOMS
import Section from "../../atoms/section";
import Container from "../../atoms/container";
import Text from "../../atoms/text";
import Space from "../../atoms/space";
import Bar from "../../atoms/bar";

export default function History(props) {
  const { id, smallTitle, text } = props;

  return (
    <Section id={id}>
      <Space top="160" bottom="160">
        <Container lg>
          <Bar />
          <Space bottom="64">
            <Text className="roboto-14">{smallTitle}</Text>
          </Space>
          <Text tag="p" className="play-48" editor text={text} maxWidth="1160px"/>
        </Container>
      </Space>
    </Section>
  );
}
