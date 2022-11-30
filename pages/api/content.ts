// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

const page1 = {
  header: [
    { component: "image", content: "" },
    { component: "menu", content: [] },
    { component: "", content: []}
  ],
  main: [],
  footer: []
};

const page2 = {

};

const page3 = {

};

const contents = [
  page1, page2, page3
];