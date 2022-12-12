import { useRouter } from "next/router";

import { getEventById } from "../../../contents";

function EventDetailPage() {
  /*const router = useRouter();
  const { id } = router.query;

  const event = getEventById(id as string);

  if (!id) {
    return <p>No event found!</p>;
  }

  console.log(event.id);*/

  return (
    <>
      <h1>Event Detail here</h1>
    </>
  );
}
export default EventDetailPage;
