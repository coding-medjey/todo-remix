import Layout from "~/components/Layout";
import { getTodos } from "~/data/todos";


export const loader = async () => {
  return getTodos();
};

export default function Index() {
  return <Layout />;
}
