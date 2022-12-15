import SingleEncounterPage from "components/SingleEncounterPage/SingleEncounterPage";
import { useRouter } from "next/router";

export default function Index({}) {
  const router = useRouter();

  return (
    <SingleEncounterPage id={router?.query?.id}/>
  )
}