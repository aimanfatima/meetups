import { useState } from 'react';
import MeetUpList from "../components/meetups/MeetUpList";

function AllMeetUpsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]]);
  
  fetch(
    "https://react-getting-started-13467-default-rtdb.firebaseio.com/meetups.json"
  ).then(response => {
    return response.json();
  }).then(data => {
    setIsLoading(false);
    setLoadedMeetups(data)
  });

  if (isLoading) {
    return <section>
      <p>Loading...</p>
    </section>
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetUpList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetUpsPage;
