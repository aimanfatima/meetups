import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetup() {
    function addMeetupHandler(meetUpData) {
        
    }
    return <section>
        <h1>Add New Meeetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
}

export default NewMeetup;