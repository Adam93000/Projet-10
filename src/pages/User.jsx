import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUsername } from '../../store/userSlice';

function User() {
    const dispatch = useDispatch();
    const token = useSelector(state => state.user.token);
    const firstName = useSelector(state => state.user.firstName);
    const lastName = useSelector(state => state.user.lastName);
    const currentUserName = useSelector(state => state.user.userName);

    const [isEditing, setIsEditing] = useState(false);
    const [newUserName, setNewUserName] = useState(currentUserName || "");
    const [errorMsg, setErrorMsg] = useState("");

    const handleEditClick = () => {
        setNewUserName(currentUserName || "");
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setErrorMsg("");
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setErrorMsg("");

        try {
            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ userName: newUserName })
            });

            if (!response.ok) {
                throw new Error("Erreur lors de la modification");
            }

            const data = await response.json();
            dispatch(updateUsername(data.body.userName));
            setIsEditing(false);
        } catch (error) {
            setErrorMsg(error.message);
        }
    };

    return (
        <main className="main bg-dark">
            <div className="header">
                {isEditing ? (
                    <div>
                        <h2>Edit user info</h2>
                        <form className="edit-form" onSubmit={handleSave}>
                            <div className="edit-input-wrapper">
                                <label htmlFor="username">User name:</label>
                                <input type="text" id="username" value={newUserName} onChange={(e) => setNewUserName(e.target.value)} />
                            </div>
                            <div className="edit-input-wrapper">
                                <label htmlFor="firstname">First name:</label>
                                <input type="text" id="firstname" value={firstName} disabled className="disabled-input" />
                            </div>
                            <div className="edit-input-wrapper">
                                <label htmlFor="lastname">Last name:</label>
                                <input type="text" id="lastname" value={lastName} disabled className="disabled-input" />
                            </div>
                            {errorMsg && <p style={{ color: "red", margin: "5px 0" }}>{errorMsg}</p>}
                            <div className="edit-buttons-wrapper">
                                <button type="submit" className="edit-button-save">Save</button>
                                <button type="button" className="edit-button-cancel" onClick={handleCancel}>Cancel</button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <>
                        <h1>Welcome back<br />{firstName} {lastName}!</h1>
                        <button className="edit-button" onClick={handleEditClick}>Edit Name</button>
                    </>
                )}
            </div>
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
        </main>
    );
}

export default User;