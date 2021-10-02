import React from "react";
// import { AutoForm } from 'uniforms'
// @ts-ignore
import MarkdownExample from "@lib/MarkdownSample.md";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import Typography from ".";

const { Title, Text, Link } = Typography;

export default {
  title: "General/Typography",
  component: Typography,
};

export const article = () => (
  <Typography htmlTag="article">
    <ReactMarkdown children={MarkdownExample} remarkPlugins={[remarkGfm]} />
  </Typography>
);

export const Titles = () => (
  <React.Fragment>
    <Title level={1}>Hello world</Title>
    <Title level={2}>Hello world</Title>
    <Title level={3}>Hello world</Title>
    <Title level={4}>Hello world</Title>
    <Title level={5}>Hello world</Title>
  </React.Fragment>
);

export const Texts = () => (
  <>
    <Text>Supabase UI (default)</Text>
    <br />
    <Text type="secondary">Supabase UI (secondary)</Text>
    <br />
    <Text type="success">Supabase UI (success)</Text>
    <br />
    <Text type="warning">Supabase UI (warning)</Text>
    <br />
    <Text type="danger">Supabase UI (danger)</Text>
    <br />
    <Text disabled>Supabase UI (disabled)</Text>
    <br />
    <Text mark>Supabase UI (mark)</Text>
    <br />
    <Text code>Supabase UI (code)</Text>
    <br />
    <Text keyboard>Supabase UI (keyboard)</Text>
    <br />
    <Text underline>Supabase UI (underline)</Text>
    <br />
    <Text strikethrough>Supabase UI (strikethrough)</Text>
    <br />
    <Text strong>Supabase UI (strong)</Text>
    <br />
    <Link href="https://supabase.io" target="_blank">
      Supabase (Link)
    </Link>
  </>
);
