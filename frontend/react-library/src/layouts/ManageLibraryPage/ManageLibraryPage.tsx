import { useOktaAuth } from "@okta/okta-react";
import { useState } from "react";
import { Redirect } from "react-router-dom";

import { AdminMessages } from "./components/AdminMessages";
import { AddNewBook } from "./components/AddNewBook";
import { ChangeQuantityOfBooks } from "./components/ChangeQuantityOfBooks";

export const ManageLibraryPage = () => {
    const {authState} = useOktaAuth();
    
    const [changeQuantityOfBooksClicked, setChangeQuantityOfBooksClicked] = useState(false);
    const [messagesClicked, setMessagesClicked] = useState(false);

    function addBookClickFunction() {
        setChangeQuantityOfBooksClicked(false);
        setMessagesClicked(false);
    }

    function changeQuantityOfBooksClickFunction() {
        setChangeQuantityOfBooksClicked(true);
        setMessagesClicked(false);
    }

    function messagesClickedFunction() {
        setChangeQuantityOfBooksClicked(false);
        setMessagesClicked(true);
    }

    if (authState?.accessToken?.claims.userType === undefined) {
        return <Redirect to="/home"/>;
    }

    return (
        <div className="container">
            <div className="mt-5">
                <h3>Manage Library</h3>
                <nav>
                    <div className="nav nav-tabs" id='nav-tab' role='tablist'>
                        <button onClick={addBookClickFunction} className="nav-link active" id='nav-add-book-tab' data-bs-toggle='tab' data-bs-target='#nav-add-book' type="button" role='tab' aria-controls='nav-add-book' aria-selected='false'>Add New Book</button> 
                        <button onClick={changeQuantityOfBooksClickFunction} className="nav-link" id='nav-quantity-tab' data-bs-toggle='tab' data-bs-target='#nav-quantity' type="button" role='tab' aria-controls='nav-quantity' aria-selected='true'>Change Quantity</button> 
                        <button onClick={messagesClickedFunction} className="nav-link" id='nav-messages-tab' data-bs-toggle='tab' data-bs-target='#nav-messages' type="button" role='tab' aria-controls='nav-messages' aria-selected='false'>Messages</button> 
                    </div>
                </nav>
                <div className="tab-content" id='nav-tab-content'>
                    <div className="tab-pane fade show active" id='nav-add-book' role='tabpanel' aria-labelledby="nav-add-book-tab">
                        <AddNewBook/>
                    </div>
                    <div className="tab-pane fade" id='nav-quantity' role='tabpanel' aria-labelledby='nav-quantity-tab'>
                        {changeQuantityOfBooksClicked ? <ChangeQuantityOfBooks/>:<></>}
                    </div>
                    <div className="tab-pane fade" id='nav-messages' role='tabpanel' aria-labelledby='nav-messages-tab'>
                        {messagesClicked ? <AdminMessages/>:<></>} 
                    </div>
                </div>
            </div>
        </div>
    )
}