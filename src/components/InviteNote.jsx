import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
    return (
        <section id="invite-note">
            <div className="invite-note-wrapper">
                <h5>An Invitation from:</h5>
                <h2>Mr. & Mrs. D. Mohammed Siddiq</h2>

                <h5 className="address mb-3">
                    Head Master at Masoodia Arabic High School,
                    <br /> Adoni.
                </h5>
                <h5 className="address mb-3">
                    Residence: #25/467, Beside Inansha Vali Masjid
                    <br /> Havanapet,
                    <br /> Adoni, Kurnool Dist.,
                    <br /> AP - 518 301.
                </h5>
                <p className="address">
                    Contact: <br />
                    +91 94401 67207, <br />
                    +91 83745 01373.
                </p>
            </div>
        </section>
    );
}

export default InviteNote;
